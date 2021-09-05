import { h, $f, _ } from '@artty';
import Hello from "./components/Hello";
import { useState } from "@artty/hooks";
export default function App({
  attrs
}) {
  var [message, setMessage] = useState("HfsdfdssfEllo");
  var x = 0;

  var increase = () => {
    console.log("hello!");
  };

  return h("div", {
    class: "hello"
  }, h("h1", null, " Id: ", message), h("h1", {
    style: "color: red",
    onClick: increase
  }, "Welcome to Artty.js!"), h(Hello, {
    say: "Sirawit"
  }));
}