import { h, $f, _ } from '@artty';
import { sync, diff, makeMap } from "@artty";
import App from "./App";
let i = 1;
setInterval(() => {
  const vnode_map1 = makeMap(h(App, {
    id: i
  })).vnode_map;
  const vnode_map2 = makeMap(h(App, {
    id: i + 1
  })).vnode_map;
  console.log(vnode_map1, vnode_map2);
}, 1e3);
sync(h(App, {
  id: 1
}), document.getElementById("app"));