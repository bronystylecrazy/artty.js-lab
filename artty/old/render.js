import { addListener  } from "./event";
export const render = (vNode) => {
    if(typeof vNode === 'string' || typeof vNode === 'number' || typeof vNode === 'boolean')  return document.createTextNode(''+vNode);
    // if(["FOR","END-FOR"].includes(vNode.comment)) return document.createComment(vNode.comment);
    return renderElement(vNode);
};

export const renderElement = (vNode) => {
    const $el = document.createElement(vNode.tag);
    // console.log(vNode, vNode.attrs === null ? {} : vNode.attrs)
    for(var [k,v] of Object.entries( vNode.attrs === null ? {} : vNode.attrs)) {
        try{
            if(['value'].includes(k.trim().toLowerCase())){
                $node[k] = v;
            }else{
                if(k.startsWith('on')){
                    // console.log(k.slice(2).toLowerCase(),v)
                    // $el.addEventListener(k.slice(2).toLowerCase(),v);
                    addListener($el,k.slice(2).toLowerCase(),function($event){
                        if(typeof v !== 'function') return false;
                        var c = v.call($event.target,$event);
                        if(typeof c === 'function'){
                            c.call($event.target,$event);
                        }
                    });
                }
                else $el.setAttribute(k,v);
            }
        }catch(e){}
    }
    
    for(var vChild of vNode.children){
        if(vChild !== null){
            const $child = render(vChild);
            $el.appendChild($child);
        }
    }
    return $el;
}