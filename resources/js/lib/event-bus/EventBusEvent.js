export default class EventBusEvent extends Event {
    constructor(type, detail, originalEvent = undefined) {
        super(type, {
            bubbles: false,
            cancelable: false,
            composed: false
        });

        if (detail)
            this.detail = detail;

        this.originalEvent = originalEvent;
    }
}
