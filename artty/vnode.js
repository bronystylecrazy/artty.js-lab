import { isFunc, isNull } from './util';

let vnode_id = 0;

export function h(type, props, children){
    let cprops={}, key, ref,i, args = arguments;
    for(var [k,v] of Object.entries(props)){
        if(k === 'key') {
            key = v;
        }else if(k === 'ref')
            ref = v;
        else
            cprops[k] = v;
    }
    if(args.length > 2){
        cprops.children = args.length > 3 ? args.slice(2) : children;
    }
    if(isFunc(type));

    return vnode(type, cprops, key, ref, null);
}

export function vnode(type, props, key, ref, original){
    const v = {
        type,
        props,
        key,
        ref,
        _children: null,
        _parent: null,
        _depth: null,
        _dom: null,
        _nextDom: undefined,
        _component: null,
        _original: isNull(original) ? ++vnode_id : original,
        constructor: null,
    };
    return v;
}

export function ref(){
    return { _: null };
}

export function $f({children}){
    return children;
}