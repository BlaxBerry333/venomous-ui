import { jsx as l } from "react/jsx-runtime";
import o from "react";
import S from "clsx";
import { COMPONENT_NAMES as m } from "../../../core/constants/componentNames.mjs";
import { BOX_CSS_CLASS_NAMES as n } from "../../../core/constants/cssClassNames.mjs";
import N from "../../hooks/useComputedStyle/index.mjs";
import d from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { BOX_CSS as u } from "../../../core/css/componentStyles/Box.mjs";
const x = o.memo(
  o.forwardRef(({ as: t = "div", className: r, style: e, children: s, ...a }, i) => {
    const p = t;
    d(m.Box, u);
    const c = N(e), f = S(n.base.className, r);
    return /* @__PURE__ */ l(p, { ref: i, className: f, style: c, ...a, children: s });
  })
);
x.displayName = m.Box;
export {
  x as default
};
