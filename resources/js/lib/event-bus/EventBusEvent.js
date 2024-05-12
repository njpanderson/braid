export default class EventBusEvent extends Event {
    constructor(type, detail) {
        super(type, {
            bubbles: false,
            cancelable: false,
            composed: false
        });

        this.detail = detail;
    }
}
