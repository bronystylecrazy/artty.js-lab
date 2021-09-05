import { isFunc } from "./util";

export function diff(parent_dom, new_vnode, old_vnode, gcontext, patches, old_dom){
    let tmp, new_type = new_vnode.type;
    if ((tmp = options._diff)) tmp(newVNode);
    if(isFunc(new_type)){
        let newProps = new_type.props;
        tmp = new_type.contextType;
        let provider = tmp && gcontext[tmp._id];
        let componentContext = tmp ? provider ? provider.props.value : tmp._defaultValue : globalContext;
    }
}