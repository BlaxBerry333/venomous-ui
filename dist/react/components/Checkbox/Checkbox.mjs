import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { COMPONENT_NAMES as C } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as b } from "../../../core/constants/css-classes.mjs";
const s = b.checkbox, h = x(function({ size: n = "md", checked: o, disabled: e = !1, label: t, checkedIcon: l, uncheckedIcon: r, className: c = "", ...m }, p) {
  const i = !!(l || r), N = o !== void 0, f = [
    s.root,
    s.sizes[n],
    i ? s.custom : "",
    o ? s.states.checked : "",
    e ? s.states.disabled : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("label", { className: f, children: [
    /* @__PURE__ */ a(
      "input",
      {
        ref: p,
        type: "checkbox",
        className: s.input,
        checked: N ? o : void 0,
        disabled: e,
        ...m
      }
    ),
    i && /* @__PURE__ */ a("span", { className: s.control, children: /* @__PURE__ */ a("span", { className: s.icon, children: o ? l : r }) }),
    t && /* @__PURE__ */ a("span", { className: s.label, children: t })
  ] });
});
h.displayName = C.Checkbox;
export {
  h as Checkbox
};
