import storage from 'store2';

export default {
    loadedPattern: null,
    activePattern: null,
    menuOpen: true,
    menuScrolled: false,
    search: {
        term: '',
        open: false
    },
    theme: {
        darkMode: window.BRAID.darkMode === 'auto' ?
            storage.get('braid-darkmode', 'auto') : window.BRAID.darkMode
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
