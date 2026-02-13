import { jsx as u } from "react/jsx-runtime";
import { forwardRef as E, useCallback as x } from "react";
import { COMPONENT_NAMES as P } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as i } from "../../../core/constants/css-classes.mjs";
const e = i.card, j = E(function({ variant: f = "elevated", clickable: s = !1, className: m = "", children: o, onClick: r, onKeyDown: t, ...d }, p) {
  const N = [e.root, e.variants[f], s ? e.states.clickable : "", m].filter(Boolean).join(" "), S = x(
    (a) => {
      s && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), r == null || r(a)), t == null || t(a);
    },
    [s, r, t]
  );
  return /* @__PURE__ */ u("div", { ref: p, className: N, ...s ? {
    role: "button",
    tabIndex: 0,
    onKeyDown: S,
    onClick: r
  } : { onClick: r }, ...d, children: o });
});
j.displayName = P.Card;
export {
  j as Card
};
