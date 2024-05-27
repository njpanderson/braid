import axios from 'axios';

/**
 * Inline forms
 */
export default (options = {}) => ({
    options: {
        action: '/'
    },

    fields: {},

    init() {
        this.options = {
            action: this.$root.getAttribute('action'),
            ...options
        };
    },

    onFieldChange() {
        axios.post(this.options.action, this.fields);
    }
});