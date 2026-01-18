import { jsx as m } from "react/jsx-runtime";
import e from "react";
import f from "clsx";
import { COMPONENT_NAMES as p } from "../../../core/constants/componentNames.mjs";
import { BACKDROP_CSS_CLASS_NAMES as a } from "../../../core/constants/cssClassNames.mjs";
import n from "../Portal/Portal.mjs";
import C from "../../hooks/useComputedStyle/index.mjs";
import u from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateBackdropCSS as N } from "../../../core/css/componentStyles/Backdrop.mjs";
const B = e.memo(({ isOpen: t, onClick: r, style: c, className: s, children: i }) => {
  const l = N();
  u(p.Backdrop, l);
  const d = C(c), S = e.useCallback(
    (o) => {
      o.target === o.currentTarget && r && r(o);
    },
    [r]
  );
  return /* @__PURE__ */ m(n, { children: /* @__PURE__ */ m(
    "div",
    {
      className: f(
        a.base.className,
        t && a.open.className,
        s
      ),
      style: d,
      onClick: S,
      "aria-hidden": !t,
      children: i
    }
  ) });
});
B.displayName = p.Backdrop;
export {
  B as default
};
