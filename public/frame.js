;(function() {
    const params = (new URL(location)).searchParams;
    const patternMapId = document.currentScript.dataset.patternMapId;
    const indexRoute = document.currentScript.dataset.indexRoute;
    const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');

    function setDarkMode() {
        const userDarkMode = BRAID.darkMode === 'auto' ?
            JSON.parse(localStorage['braid-darkmode'] ?? '"auto"') : BRAID.darkMode;

        if (
            userDarkMode === 'on' ||
            (userDarkMode === 'auto' && darkMedia.matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    const events = [
        'braidframeloaded',
        'braidframeunloaded',
        'braidcanvasresize',
        'braidframescrolled'
    ].map((eventName) => {
        return new CustomEvent(eventName, {
            detail: {
                patternMapId: patternMapId ?? '',
                location
            }
        });
    });

    window.parent.dispatchEvent(events[0]);

    window.addEventListener('unload', () => {
        window.parent.dispatchEvent(events[1]);
    });

    window.addEventListener('resize', () => {
        window.parent.dispatchEvent(events[2]);
    });

    window.addEventListener('scroll', () => {
        events[3].detail.scrollLeft = document.documentElement.scrollLeft;
        window.parent.dispatchEvent(events[3]);
    });

    if (typeof window.BRAID !== 'undefined') {
        if (BRAID.darkMode === 'auto') {
            window.addEventListener("storage", (event) => {
                if (event.key === 'braid-darkmode' || event.key === null)
                    setDarkMode();
            });

            darkMedia.addEventListener('change', setDarkMode);
        }

        setDarkMode();
    }
}());
