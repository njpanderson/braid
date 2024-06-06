import axios from 'axios';
import Alpine from 'alpinejs';
import { delegate } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import store from '@lib/store';
import patternLibrary from '@components/patternLibrary';
import patternTools from '@components/patternTools';
import toolbar from '@components/toolbar';
import menuFolder from '@components/menuFolder';
import ruler from '@components/ruler';
import inlineForm from '@components/inlineForm';
import search from '@components/search';

window.Alpine = Alpine;

axios.defaults.baseURL = `/${BRAID.config.path}`;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Alpine.store('braid', store);

class Braid {
    constructor() {
        Alpine.data('patternLibrary', patternLibrary);
        Alpine.data('patternTools', patternTools);
        Alpine.data('menuFolder', menuFolder);
        Alpine.data('ruler', ruler);
        Alpine.data('toolbar', toolbar);
        Alpine.data('inlineForm', inlineForm);
        Alpine.data('search', search);

        this.parse().then(() => {
            Alpine.start();
        });
    }

    parse() {
        // Unused for now
        const tasks = [];

        // Tippy
        this.tippy = delegate(document.body, {
            target: '[data-tooltip]',
            delay: [400, 300],
            maxWidth: 200,
            ignoreAttributes: true,
            allowHTML: true,
            theme: 'braid',
            content(element) {
                return element.dataset.tooltip;
            },
            onShow(instance) {
                return instance.reference.dataset.tooltip !== '';
            },
        });

        return Promise.all([
            ...tasks,
            // ...this.parseJobs.map(fn => { return fn(); })
        ]);
    }
}

new Braid();
