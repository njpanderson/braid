import axios from 'axios';

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

        if (this.tools.length)
            return this.loadTool(this.tools[0].id);

        // Load tools
        // TODO: Cache this (and any tool requests made for the pattern)!
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

        if (tool.content)
            // Tool already fetched in this load
            return;

        const url = `/braid/patterntools/tool/${
            encodeURIComponent(tool.className)
        }/${
            this.loadedPattern.patternId ?? this.loadedPattern.id
        }${
            (this.loadedPattern.contextId ? `/${this.loadedPattern.contextId}` : '')
        }`;

        axios.get(url)
            .then((response) => {
                // Loaded — set tool content
                tool.content = response.data;

                // Refresh (run) any scripts in the tool
                this.$nextTick(this.refreshScripts.bind(this));
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

    /**
     * Refresh any scripts not yet refreshed.
     */
    refreshScripts() {
        [
            ...this.$refs.tabs.querySelectorAll("script:not([data-braid-parsed])")
        ].forEach(scriptElement => {
            const script = document.createElement("script");

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

    /**
     * Get whether the tool passed by ID is active.
     * @param {string} toolId
     * @returns
     */
    isActiveTool(toolId) {
        return (this._activeTool && this._activeTool.id === toolId);
    }
});