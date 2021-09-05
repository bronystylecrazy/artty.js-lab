import { h, f, _ } from '../artty';
export default function App() {
  let IfDirective = (!show) ? h("b", {
    id: "64",
    class: 85
  }, "Sirawit") : h();

  let ForDirective1 = _.L((Object.keys(hello)), n => h("b", {}, n));

  let ForDirective2 = _.L((100), (n, idx) => h("b", {}, n));

  return h(f, null, h("h1", null, "Welcome to Artty.js"), h(IfDirective, null), h(ForDirective1, null), h(ForDirective2, null), (show) ? h("ul", {}, h("li", {
    $for: n in [1, 2, 3, 4, 5],
    key: n
  }, " This li number #", n)) : h());
}