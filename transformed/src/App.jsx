import { h, $f, _ } from '@artty';
import Hello from "./components/Hello";
import $ from "@artty/hooks";
export default function App() {
  var [message, setMessage] = $.useState("HEllo");

  var increase = function () {
    setMessage("ISASASS");
  };

  return h("div", {
    class: "hello"
  }, h("h1", null, " Id: ", message), h("h1", {
    style: "color: red",
    onClick: $event => increase.call($event)
  }, "Welcome to Artty.js!"), h(Hello, {
    say: "Sirawit"
  }));
}