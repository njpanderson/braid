import Alpine from 'alpinejs';
import storage from 'store2';

import constants from '@/constants';
import eventBus from '@lib/event-bus';
import events from '@lib/events';

export default (offset) => ({
    store: Alpine.store('braid'),

    consts: {
        GLOBAL: '__global'
    },

    init() {
        this.onMarkDragStart = this.onMarkDragStart.bind(this);
        this.onMarkDragMove = this.onMarkDragMove.bind(this);
        this.onMarkDragEnd = this.onMarkDragEnd.bind(this);

        this.store.ruler.open = storage.get(constants.storageKeys.ruler.open, false);
        this.store.ruler.offset = offset;
        this.store.ruler.dragMarker = null;
        this.store.ruler.marks = this.getFromStorage();

        // Set offset into ruler element
        this.$refs.ruler.style.marginLeft = `${offset}px`;

        eventBus.bind('toolbar:button:toggle-ruler', this.toggleRuler.bind(this));

        events
            .bind(window, 'mouseup', this.onMarkDragEnd)
            .bind(window, 'touchend', this.onMarkDragEnd)
            .bind(window, 'touchcancel', this.onMarkDragEnd)
            .bind(window, 'mousemove', this.onMarkDragMove)
            .bind(window, 'touchmove', this.onMarkDragMove);
    },

    /**
     * The ruler has been clicked
     * @param {Event} event
     */
    onRulerClick(event) {
        const mark = this.getRulerOffset(event.clientX);

        this.addMark(mark, (
            event.altKey ? this.store.loadedPattern : this.consts.GLOBAL
        ));
    },

    /**
     * A marker has been clicked.
     * @param {Event} event
     * @param {object} mark
     */
    onMarkClick(event, mark) {
        if (event.altKey) {
            if (mark.store === this.consts.GLOBAL) {
                // Mark is global — make local
                this.moveMarkStore(mark, this.store.loadedPattern);
            } else {
                this.moveMarkStore(mark, this.consts.GLOBAL);
            }

            return;
        }
    },

    /**
     * Ruler mark starting to drag.
     * @param {Event} event
     * @param {*} mark
     * @returns {undefined}
     */
    onMarkDragStart(event, mark) {
        mark.prevX = mark.x;
        this.store.ruler.dragMarker = mark;

        eventBus.fire('ruler:drag-mark-start');
    },

    /**
     * Ruler mark is being dragged.
     * @param {Event} event
     * @returns {undefined}
     */
    onMarkDragMove(event) {
        if (!this.store.ruler.dragMarker)
            return;

        this.moveMark(
            this.store.ruler.dragMarker,
            this.getRulerOffset(event.clientX)
        );
    },

    /**
     * Ruler mark drag completed.
     * @param {Event} event
     * @returns {undefined}
     */
    onMarkDragEnd(event) {
        if (!this.store.ruler.dragMarker)
            return;

        if (
            !(this.store.ruler.dragMarker.x - this.store.ruler.dragMarker.prevX) &&
            !event.altKey
        ) {
            // Delta is zero, altKey not pressed
            // TODO: Need to check delta for the pointer, not the bar, this is too strict otherwise!
            this.removeMark(this.store.ruler.dragMarker);
        }

        // Tidy up
        delete this.store.ruler.dragMarker.prevX;
        this.store.ruler.dragMarker = null;

        eventBus.fire('ruler:drag-mark-end');

        this.updateStorage();
    },

    /**
     * Toggle the ruler on and off.
     */
    toggleRuler() {
        this.store.ruler.open = !this.store.ruler.open;
        storage.set(constants.storageKeys.ruler.open, this.store.ruler.open);
    },

    /**
     * Obtain an ideal ruler offset depending on snapping and other marks
     * @param {number} x - Target x dimension.
     * @param {number=5} roundTo - Round amount
     * @returns {number}
     */
    getRulerOffset(x, roundTo = 5) {
        const rect = this.$refs.ruler.getBoundingClientRect();

        // Calculate x based on ruler offset
        x = x - (rect.x);

        // Pin to min/max
        if (x < 0)
            x = 0;

        if (roundTo > 0)
            // Round to nearest roundTo pixels
            x = Math.round(x / roundTo) * roundTo;

        return x;
    },

    /**
     * Retrieve all the global and local marks.
     * @returns {array} - Array of mark data.
     */
    getMarks() {
        return [
            ...this.store.ruler.marks[this.consts.GLOBAL],
            ...this.store.ruler.marks[this.store.loadedPattern] ?? [],
        ];
    },

    /**
     * Add a mark to a store by position.
     *
     * If the store does not exist, it will be created.
     *
     * @param {number} x
     * @param {string} store
     * @returns
     */
    addMark(x, store = null) {
        if (store === null)
            store = this.consts.GLOBAL;

        if (!this.store.ruler.marks[store])
            this.store.ruler.marks[store] = [];

        if (this.findMark(store, x))
            return;

        this.store.ruler.marks[store].push({
            uuid: this.makeMarkerId(),
            x,
            store: store
        });

        this.updateStorage();
    },

    /**
     * Move a mark along its axis.
     *
     * Note: updateStorage() is not called here as it would update too often.
     * Call updateStorage() (ideally in a throttled manner) from whatever
     * process is resulting in calls to moveMark().
     *
     * @param {object} mark — Mark data.
     * @param {number} x - X position.
     */
    moveMark(mark, x) {
        mark.x = x;
    },

    /**
     * Move a mark from one store to another.
     *
     * Note: No need to updateStorage() here as both methods called do that.
     *
     * @param {object} mark - Mark data
     * @param {string} store - Store name
     */
    moveMarkStore(mark, store) {
        this.removeMark(mark);
        this.addMark(mark.x, store);
    },

    /**
     * Remove a mark
     * @param {object} mark
     */
    removeMark(mark) {
        this.store.ruler.marks[mark.store] = this.store.ruler.marks[mark.store].filter(
            (filterMark) => filterMark.x !== mark.x
        );

        this.updateStorage();
    },

    /**
     * Store current marks data in compressed format.
     */
    updateStorage() {
        const data = {};

        // Compress marks data into basic arrays
        Object.keys(this.store.ruler.marks).forEach((store) => {
            data[store] = this.store.ruler.marks[store].map(
                mark => mark.x
            );
        });

        storage.set(constants.storageKeys.ruler.marks, data, true);
    },

    /**
     * Retrieve uncompressed marks data from stores.
     * @returns object
     */
    getFromStorage() {
        const storeData = storage.get(constants.storageKeys.ruler.marks, {
            [this.consts.GLOBAL]: []
        });

        const data = {};

        // Loop through stores
        Object.keys(storeData).forEach((store) => {
            // Create mark object
            data[store] = storeData[store].map((x) => ({
                uuid: this.makeMarkerId(),
                x,
                store
            }));
        });

        return data;
    },

    findMark(store, findX) {
        return this.store.ruler.marks[store].some(
            (mark => mark.x === findX)
        );
    },

    findMarkIndex(mark) {
        return this.store.ruler.marks[mark.store].findIndex(
            (mark => mark.x === mark.x)
        );
    },

    getMarkLeftStyle(mark) {
        return `left: ${mark.x + this.store.ruler.offset}px`;
    },

    makeMarkerId() {
        return (crypto ? crypto.randomUUID() : performance.now());
    }
});