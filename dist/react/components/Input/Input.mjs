import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import { COMPONENT_NAMES as u } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as S } from "../../../core/constants/css-classes.mjs";
const s = S.input, x = N(function({ type: n = "text", size: p = "md", disabled: t = !1, readOnly: e = !1, error: r, className: l = "", prefix: o, suffix: i, ...m }, c) {
  const f = [
    s.wrapper,
    s.sizes[p],
    r ? s.states.error : "",
    t ? s.states.disabled : "",
    e ? s.states.readonly : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: f, children: [
    o && /* @__PURE__ */ a("span", { className: s.prefix, children: o }),
    /* @__PURE__ */ a(
      "input",
      {
        ref: c,
        type: n,
        className: s.root,
        disabled: t,
        readOnly: e,
        "aria-invalid": r || void 0,
        ...m
      }
    ),
    i && /* @__PURE__ */ a("span", { className: s.suffix, children: i })
  ] });
});
x.displayName = u.Input;
export {
  x as Input
};
