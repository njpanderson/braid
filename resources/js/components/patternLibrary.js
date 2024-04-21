import axios from 'axios';

export default () => ({
    get activePattern() {
        return this._active ? this.patterns[this._active] : {
            url: '/braid/welcome'
        };
    },

    init() {
        this._active = null;
        this.patterns = {};

        // Get and store menu data
        axios.get('/braid/menu')
            .then((response) => {
                this.createPatternMap(response.data);
            });
    },

    createPatternMap(data) {
        data.items.forEach((item) => {
            if (item.id)
                this.patterns[item.id] = {...item};

            if (item.contexts) {
                item.contexts.forEach((context) => {
                    this.patterns[context.id] = {
                        ...context,
                        label: item.label,
                        context: context.label
                    };

                    delete this.patterns[item.id].contexts;
                });
            }

            if (item.items)
                this.createPatternMap(item);
        });
    },

    switchPattern(id) {
        if (this.patterns[id])
            this._active = id;
    }
});