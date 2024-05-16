import axios from 'axios';
import * as clipboard from 'clipboard-polyfill';

import storage from 'store2';
import eventBus from '@lib/event-bus';
import debug from '@lib/debug';
import events from '@lib/events';
import DraggableGrid from '@utils/DraggableGrid';
import makeUrl from '@utils/makeUrl';

// URL query params
const queryParams = (new URL(location)).searchParams;

export default () => ({
    store: Alpine.store('braid'),

    get activePattern() {
        return this.store.activePattern ? this.patternMap[this.store.activePattern] : null;
    },

    get loadedPattern() {
        return this.store.loadedPattern ? this.patternMap[this.store.loadedPattern] : null;
    },

    init() {
        this.patterns = {};
        this.patternMap = {
            '__braid.welcome': {
                url: '/braid/welcome'
            }
        };

        // Obtain config from index file js payload
        this.config = Object.assign({
            theme: { color: 'wheat' },
            response_sizes: { enabled: false, sizes: [] },
        }, BRAID.config ?? {});

        this.initStore();

        // Get and store menu data
        axios.get('/braid/menu')
            .then((response) => {
                this.patterns = response.data.patterns;

                // Create a map of patterns for quick access
                this.createPatternMap(this.patterns);

                // Set up default menu storage
                storage.transact('menu', (menu) => {
                    // If the menu id (hash) has changed, reset the closed statuses
                    if (menu.id !== response.data.id) {
                        eventBus.fire('braid.menu-reset');
                        menu.closed = [];
                    }

                    // Save the id
                    menu.id = response.data.id;

                    return menu;
                }, { id: null, closed: [] });

                // Attempt load again, in case there's a pattern in query
                this.loadfirstFramePage(queryParams.get('pattern'));
            });

        // Set up draggable grid items
        this.draggables = {
            patternCanvas: new DraggableGrid(document.querySelector('[x-ref="patternCanvas"]'))
                .onStart(() => {
                    this.setCanvasInteractable(false);

                    // Clear the pattern canvas height to avoid it preventing sizing of the panel
                    this.$refs.patternCanvasOuter.style.height = null;
                }, this)
                .onEnd(() => {
                    // Restore iframe pointer abilities
                    this.setCanvasInteractable();
                }, this)
        };

        this.initBinds();
        this.storeCanvasWidth();
        this.loadfirstFramePage();
    },

    initStore() {
        this.store.canvas.widthOffset = this.$refs.patternCanvasOuter.offsetWidth -
            this.$refs.patternCanvasOuter.clientWidth;
    },

    initBinds() {
        this.$watch('activePattern', () => {
            this.$refs.patternCanvasFrame.contentWindow.location.replace(
                this.activePattern.url
            );
        });

        this.$watch('loadedPattern', (loadedPattern) => {
            if (loadedPattern === null)
                return this.draggables.patternCanvas.sizeContainer(0, false);

            // Set the pattern canvas/toolbar size to previously dragged size (if any)
            this.draggables.patternCanvas.sizeContainer();
        });

        eventBus
            .bind('toolbar:button:reload-pattern', this.reloadPattern.bind(this))
            .bind('toolbar:button:open-new-window', this.openPatternInNewWindow.bind(this))
            .bind('toolbar:button:set-canvas-width', this.onSetCanvasWidth.bind(this))
            .bind('toolbar:button:copy-pattern-url', this.onCopyPatternUrl.bind(this))
            .bind('toolbar:submit-canvas-width', this.onSubmitCanvasWidth.bind(this))
            .bind('ruler:drag-mark-start', this.onRulerDragMark.bind(this))
            .bind('ruler:drag-mark-end', this.onRulerDragMark.bind(this));

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
            element.classList.remove('ring-transparent');
            element.classList.add('ring-primary-600');

            window.setTimeout(() => {
                element.classList.remove('ring-primary-600');
                element.classList.add('ring-transparent');
            }, 700);
        }
    },

    onSetCanvasWidth(event) {
        this.setCanvasWidth(event.detail);
    },

    onSubmitCanvasWidth(event) {
        this.setCanvasWidth(event.originalEvent.target.value, false);
        event.originalEvent.target.select();
    },

    onCopyPatternUrl(event) {
        // TODO: Put pattern URL in clipboard (exclude mode=view for deep linking!)
        // TODO: Make toolbar light up or produce a toast of some sort
    },

    onRulerDragMark(event) {
        if (event.type === 'ruler:drag-mark-start')
            return this.setCanvasInteractable(false);

        this.setCanvasInteractable();
    },

    loadfirstFramePage(patternId) {
        if (patternId)
            return this.switchPattern(patternId);

        this.switchPattern('__braid.welcome');
    },

    createPatternMap(data) {
        data.items.forEach((item) => {
            if (item.id)
                this.patternMap[item.id] = item;

            if (item.contexts) {
                item.contexts.forEach((context) => {
                    context.label = item.label;
                    context.contextLabel = context.label;

                    this.patternMap[context.id] = context;

                    delete this.patternMap[item.id].contexts;
                });
            }

            if (item.items)
                this.createPatternMap(item);
        });
    },

    switchPattern(id) {
        if (this.store.activePattern && id === this.store.activePattern)
            return;

        this.store.loadedPattern = null;

        if (this.patternMap[id])
            this.store.activePattern = id;
    },

    reloadPattern() {
        this.$refs.patternCanvasFrame.contentWindow.location.reload();
    },

    openPatternInNewWindow() {
        if (!this.activePattern)
            return false;

        window.open(makeUrl(this.activePattern.url, {
            mode: 'full'
        }), '_blank');
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
        this.$refs.patternCanvasFrame.style.pointerEvents = (interact ? 'auto': 'none');
    },

    storeCanvasWidth() {
        this.store.canvas.width = this.$refs.patternCanvasOuter.clientWidth;
        this.store.canvas.resizeInputValue = this.store.canvas.width;
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

    toggleMenuItem(event) {
        debug.log(event.target, this.$data);
    },

    toggleRuler() {
        this.store.ruler.open = !this.store.ruler.open;
    }
});