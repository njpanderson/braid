;(function() {
    const params = (new URL(location)).searchParams;
    const patternMapId = document.currentScript.dataset.patternMapId;
    const indexRoute = document.currentScript.dataset.indexRoute;

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

    if (
        window.self === window.top &&
        (!params.has('mode') || params.get('mode') !== 'full')
    ) {
        location.replace(indexRoute);
    }

    window.parent.dispatchEvent(events[0]);

    window.addEventListener('unload', () => {
        window.parent.dispatchEvent(events[1]);
    });

    window.addEventListener('resize', () => {
        window.parent.dispatchEvent(events[2]);
    });
}());