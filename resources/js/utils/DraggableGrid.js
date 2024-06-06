import events from '@lib/events';

export default class DraggableGrid {
    constructor(gridContainer, options = {}) {
        this.container = gridContainer;

        this.state = {
            dragging: null,
            bounds: null,
            cols: {
                dragStartPos: null,
                startSize: null,
                currentSize: null
            },
            rows: {
                dragStartPos: null,
                startSize: null,
                currentSize: null
            }
        };

        this.callbacks = {
            start: [],
            end: []
        };

        this.types = {
            rows: {
                dragMetric: 'clientY',
                dragStyleProperty: 'gridTemplateRows'
            },
            cols: {
                dragMetric: 'clientX',
                dragStyleProperty: 'gridTemplateColumns'
            }
        };

        const dataset = this.container.dataset;

        this.options = {
            id: dataset.draggable,
            cols: {
                template: dataset.draggableTemplateCols ?? '',
                startSize: parseInt(dataset.draggableColsInitial ?? 0, 10),
                maxSize: parseInt(dataset.draggableColsMax ?? 0, 10),
                minSize: parseInt(dataset.draggableColsMin ?? 0, 10)
            },
            rows: {
                template: dataset.draggableTemplateRows ?? '',
                startSize: parseInt(dataset.draggableRowsInitial ?? 0, 10),
                maxSize: parseInt(dataset.draggableRowsMax ?? 0, 10),
                minSize: parseInt(dataset.draggableRowsMin ?? 0, 10)
            },
            sizeSnapTolerance: 20,
            handleSize: parseInt(dataset.draggableHandleSize ?? 0, 10),
            handleSelector: '[data-draggable-handle]',
            ...options
        };

        this.setState();
        this.bindEvents();
        this.initMutationObserver();
    }

    setState() {
        this.refreshBounds();

        this.sizeContainer('cols');
        this.sizeContainer('rows');
    }

    bindEvents() {
        events
            .on(
                this.container,
                'mousedown',
                `[data-draggable-handle='${this.options.id}']`,
                this.onStartDrag.bind(this)
            )
            .on(
                this.container,
                'touchstart',
                `[data-draggable-handle='${this.options.id}']`,
                this.onStartDrag.bind(this)
            )
            .bind(window, 'mouseup', this.onEndDrag.bind(this))
            .bind(window, 'touchend', this.onEndDrag.bind(this))
            .bind(window, 'touchcancel', this.onEndDrag.bind(this))
            .bind(window, 'mousemove', this.onDrag.bind(this))
            .bind(window, 'touchmove', this.onDrag.bind(this))
            .bind(window, 'resize', this.onResize.bind(this));
    }

    initMutationObserver() {
        const observer = new MutationObserver(this.onContainerMutate.bind(this));

        observer.observe(this.container, {
            attributes: true
        });
    }

    /**
     * Attach a drag start callback.
     * @param {function} fn
     * @param {*} context
     * @returns DraggableGrid
     */
    start(fn, context = null) {
        this.callbacks.start.push({ fn, context });
        return this;
    }

    /**
     * Attach a drag end callback.
     * @param {function} fn
     * @param {*} context
     * @returns DraggableGrid
     */
    end(fn, context = null) {
        this.callbacks.end.push({ fn, context });
        return this;
    }

    onStartDrag(event, handle) {
        this.fireCallbacks('start', event);

        const type = handle.dataset.draggableType;

        this.state.dragging = type;
        this.state[type].dragStartPos = event[this.types[type].dragMetric];
    }

    onDrag(event) {
        let offset;

        if (!this.state.dragging)
            return;

        const type = this.state.dragging;

        if (type === 'rows') {
            offset = event[this.types[type].dragMetric] - this.state[type].dragStartPos;
        } else {
            offset = this.state[type].dragStartPos - event[this.types[type].dragMetric];
        }

        this.sizeContainer(type, this.state[type].startSize - offset);
    }

    onEndDrag(event) {
        if (!this.state.dragging)
            return;

        this.fireCallbacks('end', event);

        const type = this.state.dragging;

        this.state[type].startSize = this.state[type].currentSize;
        this.state.dragging = null;
    }

    onResize() {
        this.refreshBounds();

        this.sizeContainer('cols');
        this.sizeContainer('rows');
    }

    onContainerMutate(mutations) {
        if (this.state.dragging)
            return;

        mutations
            .filter(mutation => mutation.type === 'attributes')
            .forEach((mutation) => {
                if (mutation.target.dataset.draggableTemplateCols)
                    this.setDraggableTemplates(
                        'cols',
                        mutation.target.dataset.draggableTemplateCols
                    );

                if (mutation.target.dataset.draggableTemplateRows)
                    this.setDraggableTemplates(
                        'rows',
                        mutation.target.dataset.draggableTemplateRows
                    );
            });
    }

    /**
     * Set/refresh the bounding box metrics for the container, and set
     * the start sizes for the cols/rows within it
     */
    refreshBounds() {
        this.state.bounds = this.container.getBoundingClientRect();

        // Get start sizes from state or options
        let startColSize = this.state.cols.startSize ??
            this.options.cols.startSize;

        let startRowSize = this.state.rows.startSize ??
            this.options.rows.startSize;

        // Check sizes aren't out of bounds
        if (startColSize > this.state.bounds.width)
            startColSize = this.state.bounds.width;

        if (startRowSize > this.state.bounds.height)
            startRowSize = this.state.bounds.height;

        this.state.cols.startSize = startColSize;
        this.state.rows.startSize = startRowSize;
    }

    setDraggableTemplates(type, data) {
        if (data.includes('<value>')) {
            data = data.split('<value>');

            if (!data.length || data.length != 2)
                throw new Error('Template must contain a single <value> keyword');
        } else {
            data = [data];
        }

        this.options[type].template = {
            valueIndex: data.findIndex(t => t === ''),
            data
        };

        this.sizeContainer(type);
    }

    /**
     * Perform the container grid size change.
     * @param {string} type - cols or rows
     * @param {number} size
     * @param {boolean} constraints
     * @returns
     */
    sizeContainer(type, size) {
        let template, maxSize, minSize;

        if (
            !this.options[type].template ||
            !this.options[type].template.data
        ) {
            // Bail if there is no template
            return;
        }

        if (size === undefined) {
            // Set default size based on current start size
            size = this.state[type].startSize;
        }

        // Boundary lookup based on sizing orientation
        const boundary = (type === 'cols' ? 'width' : 'height');

        // Set min/max sizes
        maxSize = (this.options[type].maxSize !== 0) ? this.options[type].maxSize : this.state.bounds[boundary];
        minSize = (this.options[type].minSize !== 0) ? this.options[type].minSize : this.options.handleSize;

        // Restrict to minimum
        if (size < (minSize + this.options.sizeSnapTolerance))
            size = minSize;

        // Restrict to maximum
        if (size > (maxSize - this.options.sizeSnapTolerance))
            size = maxSize;

        // Set template
        if (this.options[type].template.valueIndex > -1) {
            template = this.options[type].template.data
                .reduce((acc, current, index) => {
                    if (index === this.options[type].template.valueIndex) {
                        return acc + `${size}px`;
                    }

                    return acc + '' + current;
                }, '');
        } else {
            template = this.options[type].template.data[0];
        }

        // Style container
        this.container.style[this.types[type].dragStyleProperty] = template;

        // Save current size
        this.state[type].currentSize = size;
    }

    /**
     * Fire any attached callbacks.
     * @param {string} type
     */
    fireCallbacks(type) {
        const args = [...arguments];

        this.callbacks[type].forEach((callback) => {
            callback.fn.apply(callback.context ?? this, args);
        });
    }
}
