import axios from 'axios';

import highlightCode from '@lib/highlighting';

/**
 * Child of paternLibrary
 */
export default () => ({
    get activeTool() {
        return this._activeTool;
    },

    tools: [],

    init() {
        this._activeTool = null;
    },

    /**
     * New pattern has loaded, regenerate tools.
     * @param {Event} event
     */
    onPatternLoaded(event) {
        // Clear out current tools
        this.tools = [];

        // Return cached tools if they exist
        if (this.tools.length)
            return this.loadTool(this.tools[0].id);

        // Load tools
        axios.get(`/braid/patterntools`)
            .then((response) => {
                this.tools = response.data;

                // Preload first tool
                this.loadTool(this.tools[0].id);
            });
    },

    /**
     * Pattern has unloaded — clean up.
     * @param {Event} event
     */
    onPatternUnLoaded(event) {
        // Clear out current tools
        this._tools = {};

        // Clear active tab
        this._activeTool = null;
    },

    loadTool(toolId) {
        const tool = this.getTool(toolId);

        if (!tool)
            console.error(`Tool id ${toolId} is incorrect.`);

        this._activeTool = tool;

        if (tool.content || tool.loading)
            // Tool already fetched in this load, or currently loading
            return;

        tool.loadingTimer = setTimeout(() => {
            tool.loading = true;
        }, 1000);

        // Load tool content from tool class
        axios.get(this.getToolUrl(tool, this.loadedPattern))
            .then((response) => {
                // Loaded — set tool content
                tool.content = response.data;

                this.$nextTick(() => {
                    // Refresh (run) any scripts in the tool
                    this.refreshScripts(tool);

                    // Highlight any code blocks
                    this.highlightCode(tool);
                });
            })
            .catch((error) => {
                tool.error = error;
            })
            .finally(() => {
                clearTimeout(tool.loadingTimer);
                tool.loading = false;
            });
    },

    /**
     * Get a tool by its ID (not index)
     * @param {string} toolId
     * @returns {object}
     */
    getTool(toolId) {
        return this.tools.find((tool) => {
            return tool.id === toolId;
        }) ?? null;
    },

    getToolUrl(tool, pattern) {
        return `/braid/patterntools/tool/${
            encodeURIComponent(tool.className)
        }/${
            pattern.patternId ?? pattern.id
        }${
            (pattern.contextId ? `/${pattern.contextId}` : '')
        }`;
    },

    /**
     * Refresh any scripts not yet refreshed.
     */
    refreshScripts() {
        [
            ...this.$refs.tabs.querySelectorAll('script:not([data-braid-parsed])')
        ].forEach(scriptElement => {
            const script = document.createElement('script');

            [...scriptElement.attributes].forEach(attr => {
                script.setAttribute(attr.name, attr.value);
            });

            script.setAttribute('data-braid-parsed', '');
            script.appendChild(
                document.createTextNode(scriptElement.innerHTML)
            );

            scriptElement.parentNode.replaceChild(script, scriptElement);
        });
    },

    highlightCode() {
        [
            ...this.$refs.tabs.querySelectorAll('[data-highlight]')
        ].forEach(highlightable => {
            // TODO: get language hint from current pattern context?
            highlightCode(highlightable.innerText)
                .then((html) => {
                    highlightable.innerHTML = html;
                });
        });
    },

    /**
     * Get whether the tool passed by ID is active.
     * @param {string} toolId
     * @returns
     */
    isActiveTool(toolId) {
        return (this._activeTool && this._activeTool.id === toolId);
    }
});