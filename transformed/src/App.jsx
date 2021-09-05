import { h, $f, _ } from '@artty';
import Hello from "./components/Hello";
import { useState } from "@artty/hooks";
import options from "../artty/old/options";
export default function App() {
  var [message, setMessage] = useState("Art Sirawit");
  var [show, setShow] = useState(true);
  var [todos, setTodos] = useState(["Hiii!"]);

  var save = function () {
    if (message.trim() === "") return false;
    setTodos([...todos, message]);
    setMessage("");
  };

  return h("div", {
    class: "hello"
  }, h("h1", null, "Artty.js"), h("h4", {
    style: `color: ${message}`
  }, "Hello, ", message), h("b", null, "Todo list (", todos.length, "): ", h("input", {
    type: "checkbox",
    checked: show,
    onInput: () => setShow(!show)
  })), h("br", null), (show) ? h("ul", {}, _.L((todos), n => h("li", {
    style: `color: ${n}`
  }, n))) : h(), h("br", null), h("input", {
    type: "text",
    value: message,
    onKeyDown: $event => {
      if ($event.which === 13) save();
    },
    onInput: $e => setMessage($e.target.value)
  }), h("button", {
    onClick: save
  }, "Add"), h("button", {
    onClick: () => setTodos([])
  }, "clear"));
}