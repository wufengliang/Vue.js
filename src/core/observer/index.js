
export class Observer {

    constructor(value) {
        this.data = value;
        if (Array.isArray(value)) {

        } else {
            this.walk(value);
        }
    }

    walk(target) {
        const keys = Object.keys(target);
        keys.forEach(key => defineReactive(target, key, target[key]))
    }
}

export function observe(data) {
    if (typeof data === 'object' && data == null) {
        return;
    }

    return new Observer(data);
}

export function defineReactive(target, key, value) {

    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (value !== newValue) {
                value = newValue;
            }
        }
    })
}