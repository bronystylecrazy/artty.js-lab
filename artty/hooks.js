var hello= (function(){
    let val; // ‘val’ stores the value in the module scope 
    return {
        useState(initialVal) {
            val = val || initialVal;// Assigns a new value every run 
            function setState(newVal) {
                if(val !== newVal){
                    val = newVal;
                    console.log('UPDATE')
                }
            }
            return [val, setState];
        },
    };
})();

export default hello;

// import { observe } from '@artty/reactive';
// let val, deps;

// let _state = observe([], {
//     bubble: true,
//     deep: true
// });

// const state = (value) => {
//     const __state = observe({
//         value
//     });
//     _state.push(__state);
//     return __state;
// }

// const useState = (initialVal) => {
//     val = val || initialVal;
//     function setState(newVal) {
//        val = newVal;
//     };
//     return [val, setState];
//  },

// export {
//     state,
//     _state
// }