export const isFunc = test => (typeof test === 'function');
export const isArr = test => (Array.isArray(test));
export const isStr = test => (typeof test === 'string');
export const isNull = test => (test == null);
export const isElement = vnode => vnode != null && vnode.constructor === undefined;