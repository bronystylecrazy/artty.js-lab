
export const render = (vNode) => {
    if(typeof vNode === 'string' || typeof vNode === 'number')  return document.createTextNode(''+vNode);
    // if(["FOR","END-FOR"].includes(vNode.comment)) return document.createComment(vNode.comment);
    return renderElement(vNode);
};

export const renderElement = (vNode) => {
    const $el = document.createElement(vNode.tag);
    // console.log(vNode, vNode.attrs === null ? {} : vNode.attrs)
    for(var [k,v] of Object.entries( vNode.attrs === null ? {} : vNode.attrs)) {
        try{
            if(k.startsWith('on')){
                console.log(k.slice(2).toLowerCase(),v)
                addListener($el,k.slice(2).toLowerCase(),v);
            }
            else $el.setAttribute(k,v);
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