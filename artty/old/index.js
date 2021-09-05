import { render } from './render';
import { computed } from './computed';
import { diff } from './diff';
import options from './options'
// import { _state } from './hooks';
// import handlers from './handlers'

const h = (tag, attrs, ...children) => {
    if(typeof tag === 'undefined') return "";
    if(typeof tag === 'function') return tag({ attrs, children });
    const vNode = { tag, attrs, children: children.flat()}
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

const sync = (vNode, $target) => {
    options.setHookId(0);
    var vApp = h(vNode, {});
    var $app = render(vApp);
    var $root = mount($app, $target);

    computed(() => {
        for(var [hook, meta] of Object.entries(options._hooks)) 
            meta.value;

        options.setHookId(0);
        let vNewApp = h(vNode, {});
        const patch = diff(vApp,vNewApp);
        $root = patch($root);
        vApp = vNewApp;
    });
    
}

const mount = ($node,$el) => {
    $el.replaceWith($node);
    return $node;
};

export {
    h,
    $f,
    _,
    sync,
};