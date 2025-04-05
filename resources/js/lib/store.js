import storage from 'store2';

import constants from '@/constants';

export default {
    active: false,
    loadedPattern: null,
    activePattern: null,
    menu: {
        open: true,
        stale: true
    },
    menuScrolled: false,
    search: {
        term: '',
        filters: {
            open: false,
            terms: {
                status: null,
                notes: false
            }
        },
        open: false
    },
    theme: {
        darkMode: window.BRAID.darkMode === 'auto' ?
            storage.get(constants.storageKeys.darkMode, 'auto') : window.BRAID.darkMode
    },
    ruler: {
        open: false
    },
    canvas: {
        resizing: false,
        width: 0,
        widthOffset: 0,
        resizeInputValue: 0
    }
};
