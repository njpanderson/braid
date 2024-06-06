import events from '@/lib/events';
import debug from '@/lib/debug';

export default class HistoryManager {
    constructor() {
        this._timers = {};
        this._popCallbacks = [];

        events.bind(window, 'popstate', this.onPopState.bind(this));
    }

    onPopState(event) {
        if (this._timers.pop) {
            window.clearTimeout(this._timers.pop);
            delete this._timers.pop;
        }

        debug.log('⏳ History pop', event.target.location.href);

        this._timers.pop = window.setTimeout(() => {
            this._popCallbacks.forEach((callback) => {
                callback.fn.apply(callback.thisArg, [event.target.location, event]);
            });
        }, 200);
    }

    push(url, data = {}) {
        debug.log('⏳ History push', url);
        window.history.pushState(data, '', url);
    }

    pop(fn, thisArg) {
        this._popCallbacks.push({
            fn,
            thisArg
        });
    }
}
