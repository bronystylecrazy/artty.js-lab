import options from './options';
import { observe } from './reactive'

let hook_id = 0;

export const setHookId = (id) => {
    hook_id = id;
}

export const useState = (value) => {
    if( typeof options._hooks[hook_id] !== 'undefined'){
        var foundHook = options._hooks[hook_id];
        hook_id++;
        return  [ foundHook.value, foundHook.setValue ];
    }
    var hook = {
        id: hook_id,
        value: value,
        setValue(cb){
            if(typeof cb === 'function'){
                options._hooks[hook.id].value = cb(options._hooks[hook.id].value);
            }else {
                options._hooks[hook.id].value = cb;
            }
        }
    };

    options._hooks[hook_id] = observe(hook, { deep: false });;
    hook_id++;
    return [ hook.value, hook.setValue ];
}
