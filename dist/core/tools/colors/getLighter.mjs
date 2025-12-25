import { hexToHsl as e } from "./hexToHsl.mjs";
import { hslToHex as i } from "./hslToHex.mjs";
function m(o, r = 10) {
  const t = e(o);
  if (!t) return o;
  const n = Math.min(100, t.l + r);
  return i(t.h, t.s, n);
}
export {
  m as getLighter
};
