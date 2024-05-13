import Alpine from 'alpinejs';

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

        this.store.ruler.open = true;
        this.store.ruler.offset = offset;
        this.store.ruler.dragMarker = null;
        this.store.ruler.marks = {
            __global: []
        };

        // Set offset into ruler element
        this.$refs.ruler.style.marginLeft = `${offset}px`;

        eventBus.bind('toolbar:button:toggle-ruler', this.toggleRuler.bind(this));

        events
            // .on(this.$refs.root, 'mousedown', '.braid-mark', this.onMarkDragStart)
            // .on(this.$refs.root, 'touchstart', '.braid-mark', this.onMarkDragStart)
            .bind(window, 'mouseup', this.onMarkDragEnd)
            .bind(window, 'touchend', this.onMarkDragEnd)
            .bind(window, 'touchcancel', this.onMarkDragEnd)
            .bind(window, 'mousemove', this.onMarkDragMove)
            .bind(window, 'touchmove', this.onMarkDragMove);
    },

    onRulerClick(event) {
        const mark = this.getRulerOffset(event.clientX);

        this.addMark(mark, (
            event.altKey ? this.store.loadedPattern : this.consts.GLOBAL
        ));
    },

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

        // this.removeMark(mark);
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
            this.removeMark(this.store.ruler.dragMarker);
        }

        this.store.ruler.dragMarker = null;
    },

    toggleRuler() {
        this.store.ruler.open = !this.store.ruler.open;
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
        x = x - (rect.x + this.store.ruler.offset);

        if (roundTo > 0)
            // Round to nearest roundTo pixels
            x = Math.round(x / roundTo) * roundTo;

        return x;
    },

    getMarks() {
        return [
            ...this.store.ruler.marks[this.consts.GLOBAL],
            ...this.store.ruler.marks[this.store.loadedPattern] ?? [],
        ];
    },

    addMark(x, store = null) {
        if (store === null)
            store = this.consts.GLOBAL;

        if (!this.store.ruler.marks[store])
            this.store.ruler.marks[store] = [];

        if (this.findMark(store, x))
            return;

        let uuid = (crypto ? crypto.randomUUID() : performance.now());

        this.store.ruler.marks[store].push({
            uuid,
            x,
            store: store
        });
    },

    moveMark(mark, x) {
        mark.x = x;
    },

    moveMarkStore(mark, store) {
        this.removeMark(mark);

        this.addMark(mark.x, store);
    },

    removeMark(mark) {
        this.store.ruler.marks[mark.store] = this.store.ruler.marks[mark.store].filter(
            (filterMark) => filterMark.x !== mark.x
        );
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
    }
});