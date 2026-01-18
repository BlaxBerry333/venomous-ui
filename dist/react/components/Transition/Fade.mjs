import { jsx as l } from "react/jsx-runtime";
import o from "react";
import c from "clsx";
import { COMPONENT_NAMES as N } from "../../../core/constants/componentNames.mjs";
import { TRANSITION_FADE_CSS_CLASS_NAMES as t } from "../../../core/constants/cssClassNames.mjs";
import C from "../../hooks/useComputedStyle/index.mjs";
import u from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateTransitionFadeCSS as A } from "../../../core/css/componentStyles/TransitionFade.mjs";
const E = o.memo(
  o.forwardRef(
    ({ as: m, open: e = !1, children: a, className: r, style: s, ...i }, n) => {
      const p = m || "div", S = A();
      u(N.TransitionFade, S);
      const d = C(s), f = c(
        t.base.className,
        e && t.open.className,
        r
      );
      return /* @__PURE__ */ l(p, { ref: n, className: f, style: d, "aria-hidden": !e, ...i, children: a });
    }
  )
);
E.displayName = "Fade";
export {
  E as default
};
