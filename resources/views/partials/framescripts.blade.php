<script>
    const events = [
        'braidframeloaded',
        'braidframeunloaded',
        'braidcanvasresize'
    ].map((eventName) => {
        const event = new Event(eventName);
        event.detail = {
            @if (isset($patternMapId))patternMapId: '{{ $patternMapId ?? '' }}',@endif
            location
        };
        return event;
    });

    window.parent.dispatchEvent(events[0]);

    window.addEventListener('unload', () => {
        window.parent.dispatchEvent(events[1]);
    });

    window.addEventListener('resize', () => {
        window.parent.dispatchEvent(events[2]);
    });
</script>