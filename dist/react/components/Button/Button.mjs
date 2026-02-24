import { jsx as u } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import { COMPONENT_NAMES as p } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as N } from "../../../core/constants/css-classes.mjs";
const t = N.button, d = c(function({
  size: s = "md",
  variant: r = "solid",
  colorScheme: o = "theme",
  disabled: e = !1,
  fullWidth: a = !1,
  className: n = "",
  children: m,
  ...i
}, f) {
  const l = [
    t.root,
    t.sizes[s],
    t.variants[r],
    o !== "theme" ? t.colors[o] : "",
    a ? t.states.fullWidth : "",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u("button", { ref: f, className: l, disabled: e, ...i, children: m });
});
d.displayName = p.Button;
export {
  d as Button
};
