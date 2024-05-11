import axios from 'axios';
import * as clipboard from "clipboard-polyfill";

import events from '../lib/events';
import DraggableGrid from '../utils/DraggableGrid';

export default () => ({
    get activePattern() {
        return this._active ? this.patternMap[this._active] : {
            url: '/braid/welcome'
        };
    },

    get loadedPattern() {
        return this._loaded ? this.patternMap[this._loaded] : null
    },

    init() {
        this.uiState = {
            menuOpen: true,
            canvas: {
                resizing: false,
                width: 0,
                widthOffset: this.$refs.patternCanvasOuter.offsetWidth -
                    this.$refs.patternCanvasOuter.clientWidth
            }
        };

        this._active = null;
        this._loaded = null;
        this.patterns = {};
        this.patternMap = {};

        // Obtain config from index file js payload
        this.config = Object.assign({
            theme: { color: 'wheat' },
            response_sizes: { enabled: false, sizes: [] },
        }, BRAID.config ?? {});

        // Get and store menu data
        axios.get('/braid/menu')
            .then((response) => {
                this.patterns = response.data;
                this.createPatternMap(this.patterns);
            });

        this.draggables = {
            patternCanvas: new DraggableGrid(document.querySelector('[x-ref="patternCanvas"]'))
                .onStart(() => {
                    // Prevent pointer from slipping into the pattern frame
                    this.$refs.patternCanvasFrame.style.pointerEvents = 'none';

                    // Clear the pattern canvas height to avoid it preventing sizing of the panel
                    this.$refs.patternCanvasOuter.style.height = null;
                }, this)
                .onEnd(() => {
                    // Restore iframe pointer abilities
                    this.$refs.patternCanvasFrame.style.pointerEvents = 'auto';
                }, this)
        };

        this.$watch('loadedPattern', (loadedPattern) => {
            if (loadedPattern === null)
                return this.draggables.patternCanvas.sizeContainer(0, false);

            // Set the pattern canvas/toolbar size to previously dragged size (if any)
            this.draggables.patternCanvas.sizeContainer();
        });

        events.on(document.body, 'click', '[data-clip]', this.onClip.bind(this));

        this.storeCanvasWidth();
    },

    onPatternLoaded(event) {
        if (!event.detail.patternMapId)
            // Bail if there's no pattern ID
            return;

        this._loaded = event.detail.patternMapId;

        console.debug('Pattern loaded', this._loaded);

        this.$dispatch('patternloaded', {
            loadedPattern: this.loadedPattern
        });
    },

    onPatternUnLoaded(event) {
        console.debug('Pattern unloaded', event.detail.patternMapId);

        this._loaded = null;

        this.$dispatch('patternunloaded', {
            unLoadedPattern: event.detail.patternMapId
        });
    },

    onCanvasResize() {
        if (this.uiState.canvas.resizing)
            window.clearTimeout(this.uiState.canvas.resizing);

        this.uiState.canvas.resizing = window.setTimeout(() => {
            this.uiState.canvas.resizing = null;
        }, 2000);

        this.storeCanvasWidth();
    },

    onClip(event, element) {
        const clipData = element.dataset.clip ?? '';

        if (clipData) {
            clipboard.writeText(clipData);
            element.classList.add('ring-primary-600');

            window.setTimeout(() => {
                element.classList.remove('ring-primary-600');
            }, 700);
        }
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
        if (this._active && id === this._active)
            return;

        this._loaded = null;

        if (this.patternMap[id])
            this._active = id;
    },

    reloadPattern() {
        const src = this.$refs.patternCanvasFrame.src;

        const onloaded = () => {
            this.$refs.patternCanvasFrame.src = src;
            this.$refs.patternCanvasFrame.removeEventListener('load', onloaded);
        };

        this.$refs.patternCanvasFrame.addEventListener('load', onloaded);
        this.$refs.patternCanvasFrame.src = 'about:blank';
    },

    openPatternInNewWindow(event) {
        if (!this.activePattern)
            return false;

        window.open(this.activePattern.url, '_blank');
    },

    setCanvasWidth(size = null) {
        if (size === null || size === this.$refs.patternCanvasOuter.clientWidth) {
            this.$refs.patternCanvasOuter.style.width = null;
            return;
        }

        this.$refs.patternCanvasOuter.style.width = (size + this.uiState.canvas.widthOffset) + 'px';

        this.storeCanvasWidth();
    },

    storeCanvasWidth() {
        this.uiState.canvas.width = this.$refs.patternCanvasOuter.clientWidth;
    },

    getCanvasRangeClasses(min, max = null, inClasses = '', outClasses = '') {
        if (max === null)
            max = min;

        return (
            this.uiState.canvas.width >= min &&
            this.uiState.canvas.width <= max
        ) ? inClasses : outClasses;
    },

    toggleMenuItem(event) {
        console.log(event.target, this.$data);
    }
});