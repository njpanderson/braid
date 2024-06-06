/**
 * Standard event handling class for convenience.
 */
class Events {
    /**
     * Fire a single DOM event. Attaches to an element and optionally contains
     * extra data, which can be retrieved using Event.detail on the listener.
     * @param {HTMLElement} element - The DOM element to fire on.
     * @param {string} eventName - the event name. Can be anything.
     * @param {mixed} data - Extra event.detail items. Retrieved from the
     * standard Event.detail argument property via the listener.
     * @example
     * const domElement = document.getElementById('mydomelement');
     *
     * // Set up listener
     * events.bind(domElement, 'my-event-name', function(event) {
     *     debug.log('Event my-event-name fired! Foo: ' . event.detail.foo);
     * });
     *
     * // Fire event
     * events.fire(domElement, 'my-event-name', {
     *     'foo': 'bar'
     * });
     */
    fire(element, eventName, data, bubbles = false) {
        const event = (
            data ? new CustomEvent(eventName, { bubbles, detail: data }) :
                new Event(eventName)
        );

        // Dispatch the event.
        element.dispatchEvent(event);
    }

    /**
     * Binds a single event listener to a single DOM element.
     * @param {HTMLElement} element - DOM element to listen on.
     * @param {string} eventName - Event name to listen for.
     * @param {function} callback - Function to execute on event firing.
     * @param {boolean} useCapture - As per native handler.
     * @description
     * Callback will recieve a single argument, which is an instance of the
     * Event object as defined during the event call. This object can contain
     * a `detail` property, which will contain any extra data sent via the
     * firing mechanism.
     * @example
     * const domElement = document.querySelector('a.mylink');
     *
     * // Set up listener for standard "click" event
     * events.bind(domElement, 'click', function(event) {
     *     // Prevent default action (navigation)
     *     event.preventDefault();
     *     debug.log('Event click fired!');
     * });
     */
    bind(element, eventName, callback, useCapture = false) {
        element.addEventListener(eventName, callback, useCapture);

        return this;
    }

    /**
     * Removes a previously bound event. All three arguments must be identical
     * to those used with Event#bind. (Including the callback!)
     * @param {HTMLElement} element - DOM element to unbind.
     * @param {string} eventName - Event name to unbind.
     * @param {function} callback - Callback as supplied to Event#bind.
     */
    unBind(element, eventName, callback) {
        element.removeEventListener(eventName, callback);

        return this;
    }

    /**
     * Binds a prospective event handler.
     * @param {HTMLElement} parent - Parent DOM element.
     * @param {string} eventName - Event name to bind.
     * @param {string} childSelector - CSS selector to match.
     * @param {function} callback - Function to execute on firing.
     * @description
     * Binds a prospective event handler to any elements matching the css
     * selector `childSelector` within a container. Useful for when the elements
     * being bound are unknown or dynamically injected, or a binding needs to
     * fire on a specific child node.
     * @example
     * const domElement = document.querySelector('main');
     *
     * // Set up listener for standard "click" event on any links within <main>
     * events.on(domElement, 'click', 'a[href]', function(event, element) {
     *     // Prevent default action (navigation)
     *     event.preventDefault();
     *     debug.log(`Event click fired on element ${element.tagName}!`);
     * });
     */
    on(parent, eventName, childSelector, callback) {
        parent.addEventListener(eventName, function(event) {
            const clickedElement = event.target,
                matchingChild = clickedElement.closest(childSelector);

            if (matchingChild) {
                callback.apply(matchingChild, [event, matchingChild]);
            }
        });

        return this;
    }
}

export default (new Events());
