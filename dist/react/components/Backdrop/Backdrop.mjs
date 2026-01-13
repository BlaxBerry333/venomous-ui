import { jsx as t } from "react/jsx-runtime";
import m from "react";
import f from "clsx";
import { COMPONENT_NAMES as e } from "../../../core/constants/componentNames.mjs";
import { BACKDROP_CSS_CLASS_NAMES as n } from "../../../core/constants/cssClassNames.mjs";
import d from "../Portal/Portal.mjs";
import u from "../../hooks/useComputedStyle/index.mjs";
import C from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateBackdropCSS as N } from "../../../core/css/componentStyles/Backdrop.mjs";
const B = m.memo(({ isOpen: a, onClick: r, style: p, className: c, children: i }) => {
  const s = N();
  C(e.Backdrop, s);
  const l = u(p), S = m.useCallback(
    (o) => {
      o.target === o.currentTarget && r && r(o);
    },
    [r]
  );
  return a ? /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(
    "div",
    {
      className: f(n.base.className, c),
      style: l,
      onClick: S,
      children: i
    }
  ) }) : null;
});
B.displayName = e.Backdrop;
export {
  B as default
};
