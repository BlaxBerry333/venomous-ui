import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { useId as v, isValidElement as a, cloneElement as P } from "react";
import { COMPONENT_NAMES as i } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as R } from "../../../core/constants/css-classes.mjs";
import { Tooltip as j } from "../Tooltip/Tooltip.mjs";
const O = [i.Checkbox, i.Switch, i.Radio], o = R.formField;
function T({
  label: t,
  required: E = !1,
  error: c,
  tooltip: d,
  tooltipIcon: n,
  size: I = "md",
  orientation: S = "vertical",
  controlPosition: m,
  className: u = "",
  children: s
}) {
  var f;
  const p = v(), N = v(), e = !!c, h = (a(s) ? s.props : {}).id, C = a(s) ? (f = s.type) == null ? void 0 : f.displayName : void 0, F = !O.includes(C), b = a(s) ? (
    // eslint-disable-next-line react-x/no-clone-element -- intentional: inject a11y props
    P(s, {
      id: h || p,
      "aria-describedby": e ? N : void 0,
      "aria-invalid": e || void 0,
      error: F && e ? !0 : void 0
    })
  ) : s, x = [
    o.root,
    o.sizes[I],
    o.orientations[S],
    m ? o.controlPositions[m] : "",
    e ? o.states.error : "",
    u
  ].filter(Boolean).join(" "), y = h || p;
  return /* @__PURE__ */ l("div", { className: x, children: [
    t && /* @__PURE__ */ l("div", { className: o.labelRow, children: [
      /* @__PURE__ */ l("label", { htmlFor: y, className: o.label, children: [
        E && /* @__PURE__ */ r("span", { className: o.required, children: "* " }),
        t
      ] }),
      d && n && /* @__PURE__ */ r(j, { content: d, placement: "top", children: /* @__PURE__ */ r("span", { className: o.tooltipTrigger, children: n }) })
    ] }),
    /* @__PURE__ */ r("div", { className: o.control, children: b }),
    e && /* @__PURE__ */ r("div", { id: N, className: o.error, role: "alert", children: c })
  ] });
}
T.displayName = i.FormField;
export {
  T as FormField
};
