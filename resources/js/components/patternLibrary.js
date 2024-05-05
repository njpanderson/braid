import axios from 'axios';

import DraggableGrid from '../utils/DraggableGrid';

export default () => ({
    get activePattern() {
        return this._active ? this.patterns[this._active] : {
            url: '/braid/welcome'
        };
    },

    get loadedPattern() {
        return this._loaded ? this.patterns[this._loaded] : null
    },

    init() {
        this.uiState = {
            menuOpen: true
        };

        this._active = null;
        this._loaded = null;
        this.patterns = {};

        // Get and store menu data
        axios.get('/braid/menu')
            .then((response) => {
                this.createPatternMap(response.data);
            });

        this.draggables = {
            patternCanvas: new DraggableGrid(document.querySelector('[x-ref="patternCanvas"]'))
                .onStart(() => {
                    this.$refs.patternCanvasFrame.style.pointerEvents = 'none';
                }, this)
                .onEnd(() => {
                    this.$refs.patternCanvasFrame.style.pointerEvents = 'auto';
                }, this)
        };

        this.$watch('loadedPattern', (loadedPattern) => {
            // Set the pattern canvas/toolbar size to previously dragged size (if any)
            this.draggables.patternCanvas.sizeContainer();
        });
    },

    onPatternLoaded(event) {
        if (!event.detail.patternMapId)
            // Bail if there's no pattern ID
            return;

        this._loaded = event.detail.patternMapId;

        this.$dispatch('patternloaded', {
            loadedPattern: this.loadedPattern
        });
    },

    onPatternUnLoaded(event) {
        this._loaded = null;

        this.$dispatch('patternunloaded', {
            unLoadedPattern: event.detail.patternMapId
        });
    },

    createPatternMap(data) {
        data.items.forEach((item) => {
            if (item.id)
                this.patterns[item.id] = {...item};

            if (item.contexts) {
                item.contexts.forEach((context) => {
                    this.patterns[context.id] = {
                        ...context,
                        label: item.label,
                        contextLabel: context.label
                    };

                    delete this.patterns[item.id].contexts;
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

        if (this.patterns[id])
            this._active = id;
    },

    openPatternInNewWindow(event) {
        if (!this.activePattern)
            return false;

        window.open(this.activePattern.url, '_blank');
    }
});