const h = (tag, attrs, ...children) => {
    if(typeof tag === 'object') return tag(attrs,);
    if(tag === -1){
        return children;
    }
    return { tag, attrs, children };
}

const f = -1;

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

export {
    h,
    f,
    _
};