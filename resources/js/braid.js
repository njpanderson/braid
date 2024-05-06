import axios from 'axios';
import Alpine from 'alpinejs';

import patternLibrary from '@components/patternLibrary';
import patternTools from '@components/patternTools';
import menuFolder from '@components/menuFolder';

window.Alpine = Alpine;

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Alpine.data('patternLibrary', patternLibrary);
Alpine.data('patternTools', patternTools);
Alpine.data('menuFolder', menuFolder);

Alpine.start();