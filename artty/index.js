const h = (tag, attrs, ...children) => {
    if(typeof tag === 'function') return tag({ attrs, children });
    const vNode = { tag, attrs, children: children.flat(), vnode_id: -1}
    return vNode;
}

const $f = ({ children }) => children;

const _ = {
    L: (expression, cb) => {
        var children = [];
        if(typeof expression === 'number'){
            for(var i = 0; i < expression; i++){
                children.push(cb.call(i,i));
            }
        }
        if(Array.isArray(expression)){
            var i = 0;
            for(var arr of expression){
                children.push(cb.call(arr,arr,i));
                i = i + 1;
            }
        }
        return children;
    }
};

const removeNode = node => {
	let parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}


const isNull   = test => typeof test === 'null',
      isUndefined = test => typeof test === 'undefined',
      isString = test => typeof test === 'string',
      isNumber = test => typeof test === 'number',
      notNullObject = obj => typeof obj !== 'null' ? obj || {} : {};

const render = (vNode) => {
    if(isString(vNode) || isNumber(vNode)) {
        const $textNode = document.createTextNode(''+vNode);
        return $textNode;
    }
    const $el = document.createElement(vNode.tag);
    for(var [k,v] of Object.entries(notNullObject(vNode.attrs))){
        if(k.startsWith('on')){
            $el.addEventListener(k.slice(2).toLowerCase(), v)
        }
        else $el.setAttribute(k,v);
    }
    
    for(var vChild of vNode.children){
        const $child = render(vChild);
        $el.appendChild($child);
    }
    return $el;
};

const makeMap = (VNode) => {
    let vnode_id = 0,element_map = {}, vnode_map = {};
    traverse(VNode,vnode_map, vnode_id);
    return {vnode_id,element_map, vnode_map};
};

const traverse = (vNode, vnode_map, vnode_id) => {
    if(typeof vNode === 'object') vNode.vnode_id = vnode_id;
    vnode_map[vnode_id] = vNode;
    if(typeof vNode === 'string' || typeof vNode === 'number') return;
    for(var child of vNode.children){
        if(Array.isArray(child))
        for(var c of child) traverse(child, vnode_map, ++vnode_id);
        else
        traverse(child, vnode_map, ++vnode_id);
    }
};

const diff = (oldVNode, newVNode) => {
    console.log(oldVNode, newVNode);
};



const sync = (app, $target) => {
    $target.replaceWith(render(app));
    return $target;
}

export {
    h,
    $f,
    _,
    sync,
    diff,
    makeMap
};