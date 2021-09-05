const FRAGMENT = -1;

const h = (tag, attrs, ...children) => {
    if(typeof tag === FRAGMENT) return children.flat();
    if(typeof tag === 'function') return tag(attrs);
    return { tag, attrs, children: children.flat() };
}

const $f = FRAGMENT;

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

const render = (app, $el) => {

}

export {
    h,
    $f,
    _,
    render
};