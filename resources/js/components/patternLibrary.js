import axios from 'axios';

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
            menuOpen: true
        };

        this._active = null;
        this._loaded = null;
        this.patterns = {};
        this.patternMap = {};

        // Get and store menu data
        axios.get('/braid/menu')
            .then((response) => {
                this.patterns = response.data;
                this.createPatternMap(this.patterns);
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
            if (loadedPattern === null)
                return this.draggables.patternCanvas.sizeContainer(0, false);

            // Set the pattern canvas/toolbar size to previously dragged size (if any)
            this.draggables.patternCanvas.sizeContainer();
        });
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
        console.debug('Pattern unloaded', this._loaded);

        this._loaded = null;

        this.$dispatch('patternunloaded', {
            unLoadedPattern: event.detail.patternMapId
        });
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

    toggleMenuItem(event) {
        console.log(event.target, this.$data);
    }
});