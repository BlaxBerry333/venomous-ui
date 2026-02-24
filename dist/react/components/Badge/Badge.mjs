import { jsx as g, jsxs as c } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import { COMPONENT_NAMES as C } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as b } from "../../../core/constants/css-classes.mjs";
const s = b.badge, h = N(function({ content: e, dot: r = !1, max: f = 99, colorScheme: t = "error", hidden: n = !1, className: u = "", children: i, ...l }, d) {
  const p = y(r, n, e), m = v(r, e, f), S = [s.root, s.colors[t], r ? s.dot : "", u].filter(Boolean).join(" "), a = p ? /* @__PURE__ */ g("sup", { ref: d, className: S, ...l, children: m }) : null;
  return i ? /* @__PURE__ */ c("span", { className: s.wrapper, children: [
    i,
    a
  ] }) : a;
});
h.displayName = C.Badge;
function y(o, e, r) {
  return e ? !1 : o ? !0 : !(r === void 0 || typeof r == "number" && r <= 0);
}
function v(o, e, r) {
  if (!o) {
    if (typeof e == "number" && e > r) return `${r}+`;
    if (e !== void 0) return String(e);
  }
}
export {
  h as Badge
};
