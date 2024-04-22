import axios from 'axios';

export default () => ({
    get activePattern() {
        return this._active ? this.patterns[this._active] : {
            url: '/braid/welcome'
        };
    },

    get loadedPattern() {
        return this._loaded ? this.patterns[this._loaded] : null
    },

    init() {
        this._active = null;
        this._loaded = null;
        this.patterns = {};

        // Get and store menu data
        axios.get('/braid/menu')
            .then((response) => {
                this.createPatternMap(response.data);
            });
    },

    onPatternLoaded(event) {
        this._loaded = event.detail.patternMapId;
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
        this._loaded = null;

        if (this.patterns[id])
            this._active = id;
    }
});