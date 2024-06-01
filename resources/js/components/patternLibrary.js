import axios from 'axios';
import * as clipboard from 'clipboard-polyfill';

import constants from '@/constants';
import storage from 'store2';
import eventBus from '@lib/event-bus';
import debug from '@lib/debug';
import events from '@lib/events';
import DraggableGrid from '@/utils/DraggableGrid';
import HistoryManager from '@/utils/HistoryManager';

export default () => ({
    store: Alpine.store('braid'),

    // Storage for matchMedia objects
    media: {
        darkMode: window.matchMedia(
            '(prefers-color-scheme: dark)'
        )
    },

    get activePattern() {
        return this.store.activePattern ? this.patternMap[this.store.activePattern] : {};
    },

    get loadedPattern() {
        return this.store.loadedPattern ? this.patternMap[this.store.loadedPattern] : null;
    },

    init() {
        this.patterns = {};
        this.patternMap = {
            // Default 'welcome' page, matches index in routes
            '__braid.welcome': {
                label: 'Welcome',
                url: `${location.protocol}//${location.host}/${BRAID.config.path}/`,
                frameUrl: `${location.protocol}//${location.host}/${BRAID.config.path}/full`
            }
        };

        // Obtain config from index file js payload
        this.config = Object.assign({
            theme: { color: 'wheat' },
            response_sizes: { enabled: false, sizes: [] },
        }, BRAID.config ?? {});

        this.history = new HistoryManager();

        this.initStore();
        this.setDarkMode();

        // Get and store menu data
        this.getMenuData()
            .then(() => {
                // Attempt load the initial location
                this.loadFirstPattern(window.location);
            });

        document.querySelectorAll('[data-draggable]').forEach((element) => {
            const id = element.dataset.draggable;

            this.draggables = {
                [id]: new DraggableGrid(element)
                    .start(() => {
                        this.setCanvasInteractable(false);

                        // Clear the pattern canvas height to avoid it preventing sizing of the panel
                        this.$refs.patternCanvasOuter.style.height = null;
                    }, this)
                    .end(() => {
                        // Restore iframe pointer abilities
                        this.setCanvasInteractable();
                    }, this)
            };
        });

        this.initBinds();
        this.storeCanvasWidth();
    },

    initStore() {
        if (!this.$refs.patternCanvasOuter) {
            this.store.canvas.widthOffset = 0;
            return;
        }

        this.store.canvas.widthOffset = this.$refs.patternCanvasOuter.offsetWidth -
            this.$refs.patternCanvasOuter.clientWidth;
    },

    initBinds() {
        this.$watch('activePattern', () => {
            if (!this.$refs.patternCanvasFrame)
                return;

            if (this.$refs.patternCanvasFrame.contentWindow) {
                this.$refs.patternCanvasFrame.contentWindow.location.replace(
                    this.activePattern.frameUrl
                );
            }
        });

        // Listen to dark mode store changes (from interface)
        this.$watch('store.theme.darkMode', () => {
            this.setUserDarkMode(this.store.theme.darkMode);
        });

        // Listen to dark mode media changes
        this.media.darkMode.addEventListener('change', () => {
            this.setDarkMode();
        });

        // Listen to in place URL changes
        this.history.pop(this.onHistoryPop.bind(this));

        eventBus
            .bind('toolbar:button:reload-pattern', this.reloadPattern.bind(this))
            .bind('toolbar:button:open-new-window', this.openPatternInNewWindow.bind(this))
            .bind('toolbar:button:set-canvas-width', this.onSetCanvasWidth.bind(this))
            .bind('toolbar:button:copy-pattern-url', this.onCopyPatternUrl.bind(this))
            .bind('toolbar:submit-canvas-width', this.onSubmitCanvasWidth.bind(this))
            .bind('ruler:drag-mark-start', this.onRulerDragMark.bind(this))
            .bind('ruler:drag-mark-end', this.onRulerDragMark.bind(this))
            .bind('inlineform:pattern-info:fieldchange', this.onPatternInfoChange.bind(this))
            .bind('search:filters-state-change', (event) => {
                this.setCanvasInteractable(!event.detail);
            });

        events.on(document.body, 'click', '[data-clip]', this.onClip.bind(this));
    },

    onFrameLoaded(event) {
        if (!event.detail || !event.detail.patternMapId)
            // Bail early if there's no pattern ID
            return;

        this.store.loadedPattern = event.detail.patternMapId;

        debug.log('Pattern loaded', this.store.loadedPattern);

        this.$dispatch('patternloaded', {
            loadedPattern: this.loadedPattern
        });
    },

    onFrameUnLoaded(event) {
        debug.log('Frame unloaded');

        if (!event.detail || !event.detail.patternMapId)
            return;

        this.store.loadedPattern = null;

        this.$dispatch('patternunloaded', {
            unLoadedPattern: event.detail.patternMapId
        });
    },

    onCanvasResize() {
        if (this.store.canvas.resizing)
            window.clearTimeout(this.store.canvas.resizing);

        this.store.canvas.resizing = window.setTimeout(() => {
            this.store.canvas.resizing = null;
        }, 2000);

        this.storeCanvasWidth();
    },

    onClip(event, element) {
        const clipData = element.dataset.clip ?? '';

        if (clipData) {
            clipboard.writeText(clipData);

            this.highlightElement(element, 'primary-600');
        }
    },

    onSetCanvasWidth(event) {
        this.setCanvasWidth(event.detail);
    },

    onSubmitCanvasWidth(event) {
        this.setCanvasWidth(event.originalEvent.currentTarget.value, false);
        event.originalEvent.currentTarget.select();
    },

    /**
     * Toolbar button "copy pattern URL" was pressed.
     *
     * Copy the current pattern URL to the clipboard.
     */
    onCopyPatternUrl(event) {
        clipboard.writeText(this.activePattern.url);

        this.highlightElement(event.originalEvent.currentTarget);
    },

    onRulerDragMark(event) {
        if (event.type === 'ruler:drag-mark-start')
            return this.setCanvasInteractable(false);

        this.setCanvasInteractable();
    },

    onMenuScroll(event) {
        this.store.menuScrolled = !!event.target.scrollTop;
    },

    /**
     * Fires whenever a pattern info form field changes
     * @param {EventBusEvent} event
     */
    onPatternInfoChange(event) {
        if (event.detail.field === 'fields.status') {
            // On valid fields, get new menu data
            this.getMenuData();
        }
    },

    onHistoryPop(location) {
        let id;

        if ((id = this.getPatternIdByPath(location))) {
            this.switchPattern(id, false);
        }
    },

    loadFirstPattern(location) {
        let id;

        if (id = this.getPatternIdByPath(location, true)) {
            return this.switchPattern(id, false);
        }

        this.switchPattern('__braid.welcome', false);
    },

    createPatternMap(data) {
        data.items.forEach((item) => {
            if (item.id) {
                this.patternMap[item.id] = {
                    index: item.label.toLowerCase(),
                    ...item
                };
            }

            if (item.contexts) {
                item.contexts.forEach((context) => {
                    context.contextLabel = context.label;
                    context.label = item.label;

                    this.patternMap[context.id] = {
                        index: `${item.label}${context.contextId}`.toLowerCase(),
                        ...context
                    };

                    delete this.patternMap[item.id].contexts;
                });
            }

            if (item.items)
                this.createPatternMap(item);
        });
    },

    switchPattern(id, push = true) {
        if (this.store.activePattern && id === this.store.activePattern)
            return;

        this.store.loadedPattern = null;

        if (this.patternMap[id]) {
            this.store.activePattern = id;

            if (this.activePattern.label) {
                document.title = `${BRAID.config.title} — ${this.activePattern.label}`;
            } else {
                document.title = BRAID.config.title;
            }

            if (push) {
                this.history.push(this.activePattern.url);
            }
        }
    },

    reloadPattern() {
        if (this.$refs.patternCanvasFrame.contentWindow) {
            this.$refs.patternCanvasFrame.contentWindow.location.reload();
        }
    },

    openPatternInNewWindow() {
        if (!this.activePattern)
            return false;

        window.open(this.activePattern.frameUrl, '_blank');
    },

    /**
     * Set the user preferece for dark mode
     * @param {string} mode - Mode of 'auto', 'off' or 'on'
     * @returns
     */
    setUserDarkMode(mode) {
        if (mode === 'auto') {
            storage.clear(constants.storageKeys.darkMode);
        } else {
            storage.set(constants.storageKeys.darkMode, mode);
        }

        this.setDarkMode();
    },

    /**
     * Set the document's dark mode based on user or user agent preference.
     */
    setDarkMode() {
        const userDarkMode = this.store.theme.darkMode;

        if (
            userDarkMode === 'on' ||
            (userDarkMode === 'auto' && this.media.darkMode.matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },

    /**
     * Sets the canvas width, in pixels
     * @param {number} size - Size, in pixels to set the canvas width.
     * @param {boolean} allowReset - Allow the canvas to be reset if the width
     * number matches the number currently stored (allows for a toggle).
     */
    setCanvasWidth(
        size = null,
        allowReset = true
    ) {
        size = parseInt(size, 10);

        if (
            allowReset &&
            (size === null || size === this.$refs.patternCanvasOuter.clientWidth)
        ) {
            this.$refs.patternCanvasOuter.style.width = null;
            return;
        }

        this.$refs.patternCanvasOuter.style.width = (size + this.store.canvas.widthOffset) + 'px';

        this.storeCanvasWidth();
    },

    setCanvasInteractable(interact = true) {
        // Prevent pointer from slipping into the pattern frame
        if (interact) {
            // Allowing interaction
            delete this.$refs.patternCanvasFrame.dataset.disabled;
            this.$refs.patternCanvasFrame.style.pointerEvents = 'auto';
            return;
        }

        this.$refs.patternCanvasFrame.dataset.disabled = '';
        this.$refs.patternCanvasFrame.style.pointerEvents = 'none';
    },

    storeCanvasWidth() {
        if (!this.$refs.patternCanvasOuter) {
            this.store.canvas.width = 0;
            this.store.canvas.resizeInputValue = 0;
            return;
        }

        this.store.canvas.width = this.$refs.patternCanvasOuter.clientWidth;
        this.store.canvas.resizeInputValue = this.store.canvas.width;
    },

    /**
     * Retrieve menu data from server.
     * @returns {Promise} a Promise, containing the menu data
     */
    getMenuData() {
        return axios.get('/menu')
            .then((response) => {
                this.patterns = response.data.patterns;

                // Create a map of patterns for quick access
                this.createPatternMap(this.patterns);

                // Set up default menu storage
                storage.transact(constants.storageKeys.menu, (menu) => {
                    // If the menu id (hash) has changed, reset the closed statuses
                    if (menu.id !== response.data.id) {
                        eventBus.fire('braid.menu-reset');
                        menu.closed = [];
                    }

                    // Save the id
                    menu.id = response.data.id;

                    return menu;
                }, { id: null, closed: [] });

                return this.patterns;
            });
    },

    getCanvasRangeClasses(min, max = null, inClasses = '', outClasses = '') {
        if (max === null)
            max = min;

        return (
            this.store.canvas.width >= min &&
            this.store.canvas.width <= max
        ) ? inClasses : outClasses;
    },

    getCanvasResizeInputSize() {
        const length = this.store.canvas.resizeInputValue.toString().length;

        if (length <= 1)
            return 1;

        return length - 1;
    },

    getSearchResults() {
        const term = this.store.search.term.toLowerCase(),
            filters = this.store.search.filters.terms;

        return Object.keys(this.patternMap)
            .filter((key) => {
                return (
                    // Correct types
                    (
                        this.patternMap[key].type === 'file' ||
                        (this.patternMap[key].type === 'context' && !this.patternMap[key].default)
                    ) &&
                    // Label exists
                    this.patternMap[key].label !== undefined &&
                    (
                        // Search term against index data
                        this.patternMap[key].index.includes(term) &&

                        // Status
                        (!filters.status || (
                            filters.status &&
                            this.patternMap[key].model &&
                            this.patternMap[key].model.status == filters.status
                        ))
                    )
                );
            })
            .map((key) => {
                return {...this.patternMap[key]};
            });
    },

    getSearchLabel(pattern) {
        if (pattern.type === 'context')
            return `${pattern.label} (${pattern.contextId})`;

        return pattern.label;
    },

    /**
     * Searches for a pattern ID within the current pattern map.
     *
     * @param {Location} location - URL of the pattern.
     * @returns {string} pattern ID.
     */
    getPatternIdByPath(location) {
        const url = `${window.location.protocol}//${window.location.host}${
            location.pathname
        }`;

        // Attempt to find in map
        for (const id in this.patternMap) {
            if (this.patternMap[id].url === url) {
                return id;
            }
        }

        return null;
    },

    getPatternSearchPath(pattern) {
        let prop = 'id';

        if (pattern.type === 'context')
            prop = 'patternId';

        return pattern[prop]
            .split(':')
            .slice(0, -1)
            .join(' / ');
    },

    /**
     * Highlight an element with a temporary ring effect
     * @param {HTMLElement} element - HTML Element to highlight
     * @param {string} ringColour - Ring colour, as defined in tailwind
     */
    highlightElement(element, ringColour = 'primary-600') {
        if (!element)
            return;

        element.classList.remove('ring-transparent');
        element.classList.add(`ring-${ringColour}`);
        element.classList.add('ring-2');

        window.setTimeout(() => {
            element.classList.remove(`ring-${ringColour}`);
            element.classList.add('ring-transparent');
        }, 700);
    },

    toggleMenuItem(event) {
        debug.log(event.target, this.$data);
    },

    toggleRuler() {
        this.store.ruler.open = !this.store.ruler.open;
    }
});