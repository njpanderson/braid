import debug from '@lib/debug';
import EventBusEvent from './EventBusEvent';
import EventBusListener from './EventBusListener';

/**
 * The EventBus class is a simple generic event subscription controller. It is
 * not linked to the dom and works using abstract event names.
 *
 * Unlike DOM events, there is no bubbling, no DOM related default actions and
 * no events will fire that haven't been registered by the codebase itself.
 *
 * It is instantiated within this module file, allowing components to subscribe
 * to events that other components fire.
 */
class EventBus {
    constructor() {
        this.listeners = {};
    }

    /**
     * Bind to an event (or events) by name.
     * @param {string|array} event - Event name(s).
     * @param {function} fn - Function to fire with the event.
     * @returns {object} EventBus
     */
    bind(events, handler) {
        if (!Array.isArray(events))
            events = [events];

        events.forEach((event) => {
            if (!this.listeners[event]) {
                // Make listener for event
                this.listeners[event] = new EventBusListener(this, event);
            }

            // Check for a duplicate handler for this event
            if (this.listeners[event].handlers.findIndex((fn) =>
                fn === handler
            ) !== -1) {
                throw new Error(
                    `Handler for event "${
                        event
                    }" is a duplicate of an existing handler.`
                );
            }

            // Add handler function to list for this event
            this.listeners[event].handlers.push(handler);
        });

        return this;
    }

    /**
     * Unbind (remove) a previously bound handler for the specified event.
     *
     * If there are no handlers remaining on the event:
     *
     *  - Any attached channel binding is deactivated.
     *  - The event is deleted from the listeners array.
     *
     * @param {string} event - Event name.
     * @param {function} [handler] - Optional handler to unbind.
     * @returns EventBus
     */
    unbind(event, handler = null) {
        if (!this.listeners[event])
            throw new Error(`No listener exists for event ${event}.`);

        if (!handler) {
            // No function specified, just remove all handlers
            this.listeners[event].handlers = [];
        } else {
            // Filter out the handler within the listeners array
            this.listeners[event].handlers = this.listeners[event].handlers
                .filter(fn => (fn !== handler));
        }

        if (!this.listeners[event].handlers.length) {
            // No more handlers for this event — delete the listener
            delete this.listeners[event];
        }

        return this;
    }

    /**
     * Fire an event by name, optionally sending data arguments
     * @param {string} event - Event name
     * @param {*} - Extra data to add to the EventBusevent.detail property
     * @param {Event} originalEvent - Original DOM event name, if set
     * @returns EventBus
     */
    fire(event, detail = null, originalEvent = undefined) {
        debug.log(`🚌 EventBus - ${event} (firing ${
            (this.listeners[event] ? this.listeners[event].handlers.length : 0)
        } handler(s))`);

        if (!(this.listeners[event]))
            return;

        this.listeners[event].handlers.forEach(handler => {
            // const data = [...arguments].slice(1).concat(handler.args);

            // Fire handler function, sending it arguments from this function
            // as well as the handler arguments
            handler(new EventBusEvent(
                event,
                detail,
                originalEvent
            ));
        });

        return this;
    }
}

export default (new EventBus());
