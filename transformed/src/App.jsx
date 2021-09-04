import { h, f, _ } from '../artty';

function Sirawit({
  props
}) {
  return /* @__PURE__ */h(f, null, /* @__PURE__ */h("h1", null, "This is Sirawit"), /* @__PURE__ */h("h4", null, "Description hello!"), {
    $if: n + 1 === 2
  }, /* @__PURE__ */h("ul", null, [1, 2, 3, 4].map(e => /* @__PURE__ */h("ul", null, e))));
}

export default function App() {
  let show = false;
  let NULL = /* @__PURE__ */(10) ? h(Fragment, {}, /* @__PURE__ */h("b", null, "Hello World")) : h();
  let IfDirective = /* @__PURE__ */(!show) ? h("b", {
    id: "64",
    class: 85
  }, "Sirawit") : h();

  let ForDirective1 = /* @__PURE__ */_.L((Object.keys(hello)), n => h("b", {}, n));

  let ForDirective2 = /* @__PURE__ */_.L((100), (n, idx) => h("b", {}, n));

  let ModelDirective = /* @__PURE__ */h("input", {
    onClick: "hello",
    dangerouslySetInnerHTML: {
      __html: "Hello"
    }
  });
  return /* @__PURE__ */h("b", null, "Hello ", hello, " ", /* @__PURE__ */h(Sirawit, {
    hello: n
  }));
}