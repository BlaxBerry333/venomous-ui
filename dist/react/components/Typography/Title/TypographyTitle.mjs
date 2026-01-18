import { jsx as y } from "react/jsx-runtime";
import t from "react";
import S from "clsx";
import { COMPONENT_NAMES as m } from "../../../../core/constants/componentNames.mjs";
import { TYPOGRAPHY_TITLE_CSS_CLASS_NAMES as l } from "../../../../core/constants/cssClassNames.mjs";
import f from "../../../hooks/useComputedStyle/index.mjs";
import h from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateTypographyTitleCSS as n } from "../../../../core/css/componentStyles/TypographyTitle.mjs";
const C = t.memo(
  t.forwardRef(
    ({ as: e = "h3", className: o, style: r, children: s, ...a }, p) => {
      const c = e, i = n();
      h(m.TypographyTitle, i);
      const N = f(r), T = S(
        l.base.className,
        e === "h1" && l.levelH1.className,
        e === "h2" && l.levelH2.className,
        e === "h3" && l.levelH3.className,
        e === "h4" && l.levelH4.className,
        e === "h5" && l.levelH5.className,
        e === "h6" && l.levelH6.className,
        o
      );
      return /* @__PURE__ */ y(c, { ref: p, className: T, style: N, ...a, children: s });
    }
  )
);
C.displayName = m.TypographyTitle;
export {
  C as default
};
