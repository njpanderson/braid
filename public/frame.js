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
        'braidcanvasresize'
    ].map((eventName) => {
        const event = new Event(eventName);
        event.detail = {
            patternMapId: patternMapId ?? '',
            location
        };
        return event;
    });

    // if (
    //     window.self === window.top &&
    //     (!params.has('mode') || params.get('mode') !== 'full')
    // ) {
    //     location.replace(indexRoute);
    // }

    window.parent.dispatchEvent(events[0]);

    window.addEventListener('unload', () => {
        window.parent.dispatchEvent(events[1]);
    });

    window.addEventListener('resize', () => {
        window.parent.dispatchEvent(events[2]);
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