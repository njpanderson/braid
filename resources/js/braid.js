import axios from 'axios';
import Alpine from 'alpinejs';

import patternLibrary from './components/patternLibrary';

window.Alpine = Alpine;

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Alpine.data('patternLibrary', patternLibrary);

Alpine.start();