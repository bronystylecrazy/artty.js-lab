import { observe } from '@artty/reactive';

export const state = observe([]);

export const useState = (value) => {
    const newState = observe({
        value
    });
    state.push(newState);
    return [
        value,
        cb => {
            return newState.value = cb(value);
        }
    ];
}