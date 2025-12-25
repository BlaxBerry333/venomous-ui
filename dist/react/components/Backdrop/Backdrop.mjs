import { jsx as o } from "react/jsx-runtime";
import e from "react";
import n from "clsx";
import { COMPONENT_NAMES as m } from "../../../core/constants/componentNames.mjs";
import { BACKDROP_CSS_CLASS_NAMES as S } from "../../../core/constants/cssClassNames.mjs";
import f from "../Portal/Portal.mjs";
import u from "../../hooks/useComputedStyle/index.mjs";
import C from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateBackdropCSS as N } from "../../../core/css/componentStyles/Backdrop.mjs";
const B = e.memo(({ isOpen: a, onClick: r, style: i, className: p, children: c }) => {
  const s = N();
  C(m.Backdrop, s);
  const l = u(i), d = e.useCallback(
    (t) => {
      t.target === t.currentTarget && r && r(t);
    },
    [r]
  );
  return a ? /* @__PURE__ */ o(f, { children: /* @__PURE__ */ o(
    "div",
    {
      className: n(S.base.className, p),
      style: l,
      onClick: d,
      "aria-hidden": "true",
      children: c
    }
  ) }) : null;
});
B.displayName = m.Backdrop;
export {
  B as default
};
