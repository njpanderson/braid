import axios from 'axios';
import Alpine from 'alpinejs';

import { delegate } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import patternLibrary from '@components/patternLibrary';
import patternTools from '@components/patternTools';
import menuFolder from '@components/menuFolder';

window.Alpine = Alpine;

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

class Braid {
    constructor() {
        Alpine.data('patternLibrary', patternLibrary);
        Alpine.data('patternTools', patternTools);
        Alpine.data('menuFolder', menuFolder);

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