import { jsx as n } from "react/jsx-runtime";
import m from "react";
import l from "clsx";
import { COMPONENT_NAMES as a } from "../../../core/constants/componentNames.mjs";
import { ARROW_CSS_CLASS_NAMES as o } from "../../../core/constants/cssClassNames.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import S from "../../hooks/useStyleInjection/index.mjs";
import { generateArrowCSS as N } from "../../../core/css/componentStyles/Arrow.mjs";
const d = {
  top: o.directionTop.className,
  bottom: o.directionBottom.className,
  left: o.directionLeft.className,
  right: o.directionRight.className
}, f = m.memo(({ direction: s, color: r, size: t = 8, className: i, style: e }) => {
  const c = N();
  S(a.Arrow, c);
  const p = m.useMemo(
    () => ({
      "--arrow-color": r,
      "--arrow-size": `${t}px`,
      ...e
    }),
    [r, t, e]
  );
  return /* @__PURE__ */ n(
    "span",
    {
      className: l(o.base.className, d[s], i),
      style: p,
      "aria-hidden": "true"
    }
  );
});
f.displayName = a.Arrow;
export {
  f as default
};
