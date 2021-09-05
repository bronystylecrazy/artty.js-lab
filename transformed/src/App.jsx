import { h, $f, _ } from '@artty';
import Hello from "./components/Hello";
import { useState } from "@artty/hooks";
import options from "../artty/old/options";
export default function App() {
  var [message, setMessage] = useState("HEllo");
  var [count, setCount] = useState(0);

  var increase = function () {
    setCount(count2 => count2 + 1);
  };

  return h("div", {
    class: "hello"
  }, h("h1", null, " Id: ", message, " ", count), h("h1", {
    style: "color: red",
    onClick: $event => increase.call($event)
  }, "Welcome to Artty.js!"), h(Hello, {
    say: "Sirawit"
  }));
}