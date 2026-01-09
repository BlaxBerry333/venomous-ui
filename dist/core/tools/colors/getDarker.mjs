import { hexToHsl as n } from "./hexToHsl.mjs";
import { hslToHex as s } from "./hslToHex.mjs";
function h(o, t = 10) {
  const r = n(o);
  if (!r) return o;
  const e = Math.max(0, r.l - t);
  return s(r.h, r.s, e);
}
export {
  h as getDarker
};
