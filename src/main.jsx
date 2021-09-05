
import { sync, diff, makeMap } from '@artty';
import App from "./App";
let i = 1;
setInterval(() => {
    const vnode_map1 = makeMap(<App id={i}/>).vnode_map;
    const vnode_map2 = makeMap(<App id={i + 1}/>).vnode_map;

    // diff(oldNodeMap, newNodeMap);
    console.log(vnode_map1, vnode_map2);
}, 1000);

sync(<App id={1}/>, document.getElementById('app'));