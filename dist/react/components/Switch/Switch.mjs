import { jsxs as p, jsx as t } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { COMPONENT_NAMES as f } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as h } from "../../../core/constants/css-classes.mjs";
const s = h.switch, N = d(function({ size: c = "md", checked: o, disabled: a = !1, label: e, className: i = "", ...r }, l) {
  const n = o !== void 0, m = [
    s.root,
    s.sizes[c],
    o ? s.states.checked : "",
    a ? s.states.disabled : "",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("label", { className: m, children: [
    /* @__PURE__ */ t("input", { ref: l, type: "checkbox", checked: n ? o : void 0, disabled: a, ...r }),
    /* @__PURE__ */ t("span", { className: s.track, children: /* @__PURE__ */ t("span", { className: s.thumb }) }),
    e && /* @__PURE__ */ t("span", { className: s.label, children: e })
  ] });
});
N.displayName = f.Switch;
export {
  N as Switch
};
