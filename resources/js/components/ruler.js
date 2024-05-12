import Alpine from 'alpinejs';

import eventBus from '@lib/event-bus';

export default () => ({
    store: Alpine.store('braid'),

    init() {
        this.store.ruler.open = true;

        eventBus.bind('toolbar:button:toggle-ruler', this.toggleRuler.bind(this));
    },

    toggleRuler() {
        this.store.ruler.open = !this.store.ruler.open;
    }
});