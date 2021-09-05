import { h, $f, _ } from '@artty';
export default function Hello({
  attrs
}) {
  let hello = attrs.say;
  return h("div", null, hello, _.L((hello.split("")), c => h("b", {}, c)));
}