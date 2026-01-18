import { jsx as T } from "react/jsx-runtime";
import a from "react";
import i from "clsx";
import { COMPONENT_NAMES as m } from "../../../../core/constants/componentNames.mjs";
import { TYPOGRAPHY_TEXT_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import y from "../../../hooks/useComputedStyle/index.mjs";
import d from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateTypographyTextCSS as f } from "../../../../core/css/componentStyles/TypographyText.mjs";
const u = a.memo(
  a.forwardRef(
    ({ as: s = "span", className: o, style: t, children: r, ...l }, p) => {
      const c = s, N = f();
      d(m.TypographyText, N);
      const S = y(t), n = i(
        e.base.className,
        s === "span" && void 0,
        s === "code" && e.asCode.className,
        s === "kbd" && e.asKbd.className,
        s === "mark" && e.asMark.className,
        s === "del" && e.asDel.className,
        s === "ins" && e.asIns.className,
        s === "small" && e.asSmall.className,
        s === "strong" && e.asStrong.className,
        s === "em" && e.asEm.className,
        s === "sub" && e.asSub.className,
        s === "sup" && e.asSup.className,
        o
      );
      return /* @__PURE__ */ T(c, { ref: p, className: n, style: S, ...l, children: r });
    }
  )
);
u.displayName = m.TypographyText;
export {
  u as default
};
