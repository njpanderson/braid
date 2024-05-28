import eventBus from '@/lib/event-bus';

export default () => ({
    store: Alpine.store('braid'),

    get hasTerms() {
        if (!this.store.search.filters.terms) {
            return false;
        }

        return Object.keys(this.store.search.filters.terms).findIndex((key) => {
            return !!this.store.search.filters.terms[key];
        }) !== -1;
    },

    get searchOpen() {
        return (
            this.store.search.term ||
            this.hasTerms
        );
    },

    init() {
        this.$watch('store.search.filters.open', this.onFilterOpenStateChange.bind(this));
        this.$watch('store.search.filters.terms', this.onTermsUpdate.bind(this));
    },

    onFilterOpenStateChange(state) {
        eventBus.fire('search:filters-state-change', state);
    },

    onTermsUpdate(terms) {
        // Close filter
        this.store.search.filters.open = false;

        this.onSearchSubmit();
    },

    onSearchSubmit(event = null) {
        event && event.preventDefault();

        if (
            this.store.search.term ||
            this.hasTerms
        ) {
            this.store.search.open = true;
            return;
        }

        this.store.search.open = false;
    },

    onSearchClose(event) {
        event.preventDefault();

        this.store.search.term = '';
        this.store.search.filters.terms = {};
        this.store.search.open = false;
    },

    toggleFilterTerm(term, value) {
        if (this.store.search.filters.terms[term] === value) {
            this.store.search.filters.terms[term] = null;
        }
    },

    toggleFilters() {
        this.store.search.filters.open = !this.store.search.filters.open;
    },

    closeFilters() {
        this.store.search.filters.open = false;
    }
});