import Alpine from 'alpinejs';
import storage from 'store2';

import eventBus from '@lib/event-bus';

/**
 * Menu folder items
 */
export default (id) => ({
    open: true,

    init() {
        const menuStore = storage.get('menu');
        this.open = !menuStore.closed.includes(id);

        eventBus.bind('braid.menu-reset', () => {
            this.setOpen();
        });
    },

    /**
     * Toggle the menu folder.
     * @param {Event} event
     */
    toggle(event) {
        this.setOpen(!this.open);

        if (event.altKey) {
            // Open/close all descendents
            this.$refs.root.querySelectorAll('[x-data^="menuFolder"]').forEach((child) => {
                Alpine.$data(child).setOpen(this.open);
            });
        }
    },

    /**
     * Set whether the menu folder is open.
     * @param {boolean} opened
     */
    setOpen(opened = true) {
        this.open = opened;

        const menuStore = storage.get('menu');

        if (opened) {
            menuStore.closed = menuStore.closed.filter(menuId => menuId !== id);
        } else {
            menuStore.closed.push(id);
        }

        storage.set('menu', menuStore);
    }
});