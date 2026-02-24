import { jsxs as S, jsx as o } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { COMPONENT_NAMES as C } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as R } from "../../../core/constants/css-classes.mjs";
const s = R.radio, j = u(function({ size: m = "md", checked: a, disabled: t = !1, name: n, value: p, label: i, checkedIcon: r, uncheckedIcon: e, className: c = "", ...d }, N) {
  const l = !!(r || e), f = [
    s.root,
    s.sizes[m],
    l ? s.custom : "",
    a ? s.states.checked : "",
    t ? s.states.disabled : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ S("label", { className: f, children: [
    /* @__PURE__ */ o(
      "input",
      {
        ref: N,
        type: "radio",
        className: s.input,
        name: n,
        value: p,
        checked: a,
        disabled: t,
        ...d
      }
    ),
    l && /* @__PURE__ */ o("span", { className: s.control, children: /* @__PURE__ */ o("span", { className: s.icon, children: a ? r : e }) }),
    i && /* @__PURE__ */ o("span", { className: s.label, children: i })
  ] });
});
j.displayName = C.Radio;
export {
  j as Radio
};
