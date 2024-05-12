export default class EventBusListener {
    constructor(bus, event) {
        this.bus = bus;
        this.event = event;
        this.handlers = [];
    }
}
