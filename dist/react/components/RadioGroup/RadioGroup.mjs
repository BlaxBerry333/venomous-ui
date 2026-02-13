import { jsx as e } from "react/jsx-runtime";
import { useId as S } from "react";
import { COMPONENT_NAMES as b } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as E } from "../../../core/constants/css-classes.mjs";
import { Radio as G } from "../Radio/Radio.mjs";
const l = E.radioGroup;
function R({
  options: o,
  value: s,
  name: m,
  orientation: d = "vertical",
  size: i = "md",
  disabled: u = !1,
  checkedIcon: c,
  uncheckedIcon: t,
  onChange: a,
  className: f = ""
}) {
  const p = S(), v = m || p, N = [l.root, l.orientations[d], f].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { role: "radiogroup", className: N, children: o.map((r) => /* @__PURE__ */ e(
    G,
    {
      name: v,
      value: r.value,
      label: r.label,
      checked: r.value === s,
      disabled: u || r.disabled,
      size: i,
      checkedIcon: c,
      uncheckedIcon: t,
      onChange: () => a == null ? void 0 : a(r.value, r)
    },
    r.value
  )) });
}
R.displayName = b.RadioGroup;
export {
  R as RadioGroup
};
