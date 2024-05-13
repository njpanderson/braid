import events from '@lib/events';

export default class DraggableGrid {
    constructor(gridContainer, options = {}) {
        this.startDrag = this.startDrag.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.drag = this.drag.bind(this);

        this.container = gridContainer;

        this.callbacks = {
            start: [],
            end: []
        };

        const dataset = this.container.dataset;

        // Configurable options default to data-draggable-***
        // attributes on the element
        this.options = {
            startSize: parseInt(dataset.draggableInitial, 10) ?? 0,
            minSize: parseInt(dataset.draggableMin, 10) ?? 0,
            maxSize: parseInt(dataset.draggableMax, 10) ?? 0,
            template: dataset.draggableTemplate.split('<value>'),
            direction: dataset.draggableDirection,
            ...options,
            dragStyleProperty: null,
            dragMetric: null
        };

        if (!this.options.template.length || this.options.template.length != 2)
            throw new Error('Template must contain a single <value> keyword');

        if (this.options.direction === 'vertical') {
            this.options.dragStyleProperty = 'gridTemplateRows';
            this.options.dragMetric = 'clientY';
        } else {
            this.options.dragStyleProperty = 'gridTemplateColumns';
            this.options.dragMetric = 'clientX';
        }

        this.state = {
            dragging: false,
            dragStartPos: 0,
            startSize: this.options.startSize,
            currentSize: 0
        };

        events
            .on(this.container, 'mousedown', '[data-draggable-grid-trigger]', this.startDrag)
            .on(this.container, 'touchstart', '[data-draggable-grid-trigger]', this.startDrag)
            .bind(window, 'mouseup', this.endDrag)
            .bind(window, 'touchend', this.endDrag)
            .bind(window, 'touchcancel', this.endDrag)
            .bind(window, 'mousemove', this.drag)
            .bind(window, 'touchmove', this.drag);
    }

    /**
     * Attach a drag start callback.
     * @param {function} fn
     * @param {*} context
     * @returns DraggableGrid
     */
    onStart(fn, context = null) {
        this.callbacks.start.push({ fn, context });
        return this;
    }

    /**
     * Attach a drag end callback.
     * @param {function} fn
     * @param {*} context
     * @returns DraggableGrid
     */
    onEnd(fn, context = null) {
        this.callbacks.end.push({ fn, context });
        return this;
    }

    /**
     * Start the dragging process.
     * @param {Event} event
     */
    startDrag(event) {
        this.fireCallbacks('start', event);

        this.state.dragging = true;
        this.state.dragStartPos = event[this.options.dragMetric];
    }

    /**
     * End the dragging process
     * @param {Event} event
     * @returns
     */
    endDrag(event) {
        if (!this.state.dragging)
            return;

        this.fireCallbacks('end', event);

        // Shorten vars for reuse
        const min = this.options.minSize;
        const max = this.options.maxSize;

        // Determine amount of movement between start and end
        if (Math.abs(this.state.currentSize - this.state.startSize) < 5) {
            // Toggle the canvas size if click was without (much) movement
            if (max && this.state.startSize == min) {
                // Max height exists and element is at minimum
                this.sizeContainer(max);
            } else if (min && this.state.startSize == max) {
                // Max height exists and element is at maximum
                this.sizeContainer(min);
            } else {
                // Element is somewhere in between
                this.sizeContainer(
                    this.state.startSize >= (max / 2) ?
                        max : min
                );
            }
        } else {
            // Otherwise, snap within x pixels
            if (max && this.state.currentSize >= (max - (max * 0.10))) {
                this.sizeContainer(max);
            } else if (this.state.currentSize <= (min + (min * 0.50))) {
                this.sizeContainer(min);
            }
        }

        this.state.startSize = this.state.currentSize;
        this.state.dragging = false;
    }

    /**
     * Drag event (mousemove, touchmove).
     * @param {Event} event
     * @returns
     */
    drag(event) {
        if (!this.state.dragging)
            return;

        const offset = event[this.options.dragMetric] - this.state.dragStartPos;

        this.sizeContainer(this.state.startSize - offset);
    }

    /**
     * Perform the container grid size change.
     * @param {number} size
     * @param {boolean} constraints
     * @returns
     */
    sizeContainer(size = null, constraints = true) {
        if (size === null) {
            size = this.state.startSize;
            constraints = false;
        }

        if (
            constraints &&
            (size < this.options.minSize || (
                this.options.maxSize && size > this.options.maxSize
            ))
        ) {
            return;
        }

        this.state.currentSize = size;

        this.container.style[this.options.dragStyleProperty] =
            `${this.options.template[0]}${size}px${this.options.template[1]}`;
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