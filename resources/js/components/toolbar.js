import eventBus from '@lib/event-bus';

export default () => ({
    fire(
        id,
        event,
        detail = null
    ) {
        eventBus.fire(`toolbar:${id}`, detail, {
            ...event,
            currentTarget: event.currentTarget
        });
    }
});