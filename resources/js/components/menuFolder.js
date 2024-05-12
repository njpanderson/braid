import Alpine from 'alpinejs';
import store from 'store2';

/**
 * Menu folder items
 */
export default (id) => ({
    open: true,

    init() {
        const menuStore = store.get(id, {});
        this.open = menuStore.open ?? true;
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
    setOpen(opened) {
        this.open = opened;

        store.set(id, {
            open: opened
        });
    }
});