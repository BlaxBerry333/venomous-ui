import { jsx as c } from "react/jsx-runtime";
import o from "react";
import l from "clsx";
import { COMPONENT_NAMES as t } from "../../../../core/constants/componentNames.mjs";
import { TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import P from "../../../hooks/useComputedStyle/index.mjs";
import A from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateTypographyParagraphCSS as g } from "../../../../core/css/componentStyles/TypographyParagraph.mjs";
const h = o.memo(
  o.forwardRef(
    ({ className: m, style: p, ellipsis: r = 0, children: s, ...i }, n) => {
      const y = g();
      A(t.TypographyParagraph, y);
      const a = P(p), f = o.useMemo(() => r <= 0 ? a : {
        ...a,
        display: "-webkit-box",
        WebkitLineClamp: r,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }, [a, r]), S = l(
        e.base.className,
        r > 0 && e.ellipsis.className,
        m
      );
      return /* @__PURE__ */ c("p", { ref: n, className: S, style: f, ...i, children: s });
    }
  )
);
h.displayName = t.TypographyParagraph;
export {
  h as default
};
