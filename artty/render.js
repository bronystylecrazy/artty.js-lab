import _ from './dash';
import { h, $f } from './vnode';

export function sync(vnode,parent_dom){
    if(_._root) _._root(vnode,parent_dom);
    let old_vnode = {};

    vnode = h($f, null, [vnode]);
    
    let patches = [];

    diff(parent_dom, vnode, old_vnode, {}, )
}