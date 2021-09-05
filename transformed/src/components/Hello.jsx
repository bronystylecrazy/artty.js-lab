import { h, $f, _ } from '@artty';
import { observe } from "@artty/reactive";
export default function Hello({
  attrs
}) {
  let hello = "Sirawit Pratoomsuwan";
  return h("div", null, hello, _.L((hello.split("")), c => h("b", {}, c)));
}