import { h, $f, _ } from '@artty';
import Hello from "./components/Hello";
export default function App({
  attrs
}) {
  var x = 0;

  var increase = () => {
    x = x + 1;
  };

  return h("div", null, h("h1", null, " Id: ", attrs.id), h("h1", {
    style: "color: red",
    onClick: increase
  }, "Welcome to Artty.js!"), h(Hello, {
    say: "Sirawit"
  }));
}