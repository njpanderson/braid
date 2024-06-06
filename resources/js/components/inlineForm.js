import axios from 'axios';

import eventBus from '@/lib/event-bus';

let instanceCount = 1;

/**
 * Inline forms
 */
export default (options = {}) => ({
    options: {
        action: '/'
    },

    fields: {},

    id: `inline-form-${instanceCount++}`,

    init() {
        this.options = {
            action: this.$root.getAttribute('action'),
            ...options
        };

        if (this.$root.id)
            this.id = this.$root.id;
    },

    /**
     * Post the form to its action on change of any field
     */
    onFieldChange(event) {
        axios.post(this.options.action, this.fields)
            .then(() => {
                eventBus.fire(
                    `inlineform:${this.id}:fieldchange`,
                    {
                        field: (event.target && event.target.getAttribute('x-model')) ?? null,
                        data: this.fields,
                    }
                );
            });
    }
});
