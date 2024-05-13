import Alpine from 'alpinejs';
import storage from 'store2';

/**
 * Menu folder items
 */
export default (id) => ({
    open: true,

    init() {
        const menuStore = storage.get(id, {});
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

        storage.set(id, {
            open: opened
        });
    }
});