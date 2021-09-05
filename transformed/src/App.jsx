import { h, $f, _ } from '../artty';
export default function App() {
  var show = false;
  var hello = "Message!";
  let IfDirective = (!show) ? h("b", {
    id: "64",
    class: 85
  }, "Sirawit") : h();

  let ForDirective1 = _.L((Object.keys(hello)), n => h("b", {}, n));

  let ForDirective2 = _.L((3), (n, idx) => h("b", {}, n));

  let Hello = show ? ForDirective1 : ForDirective2;
  return h($f, null, h("h1", null, "Welcome to Artty.js"), Hello, h(IfDirective, null), h(ForDirective1, null), h(ForDirective2, null), (show) ? h("ul", {}, _.L((hello.split("HEllo")), n => h("li", {}, " This li number #", n))) : h());
}