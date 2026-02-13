import { jsxs as u, jsx as i } from "react/jsx-runtime";
import { CSS_CLASSES as f } from "../../../core/constants/css-classes.mjs";
import { useSelectContext as g } from "./SelectContext.mjs";
const e = f.select;
function C({ value: o, disabled: t = !1, className: l = "", children: a }) {
  const { value: c, onSelect: r, highlightedValue: d, onHighlight: h, selectedIcon: s } = g(), n = o === c, p = o === d, S = [
    e.option,
    n ? e.optionStates.selected : "",
    p ? e.optionStates.highlighted : "",
    t ? e.optionStates.disabled : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(
    "div",
    {
      role: "option",
      className: S,
      "aria-selected": n,
      "aria-disabled": t || void 0,
      onMouseDown: (m) => {
        m.preventDefault();
      },
      onClick: () => {
        t || r(o);
      },
      onMouseEnter: () => {
        h(o);
      },
      children: [
        /* @__PURE__ */ i("span", { className: e.optionLabel, children: a }),
        n && s && /* @__PURE__ */ i("span", { className: e.optionIcon, children: s })
      ]
    }
  );
}
C.displayName = "Select.Option";
export {
  C as SelectOption
};
