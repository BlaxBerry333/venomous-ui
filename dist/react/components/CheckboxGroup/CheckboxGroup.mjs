import { jsx as a } from "react/jsx-runtime";
import { useCallback as N } from "react";
import { COMPONENT_NAMES as S } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as h } from "../../../core/constants/css-classes.mjs";
import { Checkbox as C } from "../Checkbox/Checkbox.mjs";
const c = h.checkboxGroup;
function v({
  options: o,
  value: r = [],
  orientation: m = "vertical",
  size: t = "md",
  disabled: i = !1,
  checkedIcon: d,
  uncheckedIcon: u,
  onChange: l,
  className: b = ""
}) {
  const f = N(
    (e, s) => {
      const p = s ? [...r, e.value] : r.filter((x) => x !== e.value);
      l == null || l(p, e, s);
    },
    [r, l]
  ), k = [c.root, c.orientations[m], b].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { role: "group", className: k, children: o.map((e) => /* @__PURE__ */ a(
    C,
    {
      label: e.label,
      checked: r.includes(e.value),
      disabled: i || e.disabled,
      size: t,
      checkedIcon: d,
      uncheckedIcon: u,
      onChange: (s) => f(e, s.target.checked)
    },
    e.value
  )) });
}
v.displayName = S.CheckboxGroup;
export {
  v as CheckboxGroup
};
