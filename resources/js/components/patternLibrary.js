import axios from 'axios';

import events from '../utils/Events';

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

        this._patternCanvasDrag = {
            on: false,
            dragStartY: 0,
            startSize: 200,
            currentSize: 0,
            minSize: 40,
            maxSize: 400
        };

        // Get and store menu data
        axios.get('/braid/menu')
            .then((response) => {
                this.createPatternMap(response.data);
            });

        events
            .on(document.body, 'mousedown', '[data-dragbar]', this.startCanvasSize.bind(this))
            .bind(window, 'mouseup', this.endCanvasSize.bind(this))
            .bind(window, 'mousemove', this.moveCanvasSize.bind(this));

        this.$watch('loadedPattern', (loadedPattern) => {
            this.sizePatternCanvas(loadedPattern ? this._patternCanvasDrag.startSize : 0, false);
        })
    },

    onPatternLoaded(event) {
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

    startCanvasSize(event) {
        this.$refs.patternCanvasFrame.style.pointerEvents = 'none';
        this._patternCanvasDrag.on = true;
        this._patternCanvasDrag.dragStartY = event.clientY;
    },

    endCanvasSize(event) {
        if (this._patternCanvasDrag.on) {
            this.$refs.patternCanvasFrame.style.pointerEvents = 'auto';
            this._patternCanvasDrag.on = false;

            const min = this._patternCanvasDrag.minSize;
            const max = this._patternCanvasDrag.maxSize;

            if (Math.abs(this._patternCanvasDrag.currentSize - this._patternCanvasDrag.startSize) < 5) {
                // Toggle the canvas size if click was without (much) movement
                if (this._patternCanvasDrag.startSize == min) {
                    this.sizePatternCanvas(max);
                } else if (this._patternCanvasDrag.startSize == max) {
                    this.sizePatternCanvas(min);
                } else {
                    this.sizePatternCanvas(
                        this._patternCanvasDrag.startSize >= (max / 2) ?
                            max : min
                    );
                }
            } else {
                // Otherwise, snap within x pixels
                if (this._patternCanvasDrag.currentSize >= (max - (max * 0.10))) {
                    this.sizePatternCanvas(max);
                } else if (this._patternCanvasDrag.currentSize <= (min + (min * 0.50))) {
                    this.sizePatternCanvas(min);
                }
            }

            this._patternCanvasDrag.startSize = this._patternCanvasDrag.currentSize;
        }
    },

    moveCanvasSize(event) {
        if (!this._patternCanvasDrag.on)
            return;

        const offset = event.clientY - this._patternCanvasDrag.dragStartY;

        this.sizePatternCanvas(this._patternCanvasDrag.startSize - offset);
    },

    sizePatternCanvas(height, constraints = true) {
        if (
            constraints &&
            (height < this._patternCanvasDrag.minSize || height > this._patternCanvasDrag.maxSize)
        ) {
            return;
        }

        this._patternCanvasDrag.currentSize = height;

        this.$refs.patternCanvas.style.gridTemplateRows = `1fr minmax(0,${
            height
        }px)`;
    }
});