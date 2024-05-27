import eventBus from '@lib/event-bus';

export default () => ({
    fire(
        event,
        id,
        detail = null
    ) {
        id = `toolbar:${id}`;
        eventBus.fire(id, detail, {
            ...event,
            currentTarget: event.currentTarget
        });
    }
});