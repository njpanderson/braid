import eventBus from '@lib/event-bus';

export default () => ({
    onClick(id) {
        id = `toolbar:button:${id}`;
        eventBus.fire(id);
    }
});