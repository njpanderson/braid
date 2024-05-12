import eventBus from '@lib/event-bus';

export default () => ({
    fire(
        id,
        detail = null,
        originalEvent = null
    ) {
        id = `toolbar:${id}`;
        eventBus.fire(id, detail, originalEvent);
    }
});