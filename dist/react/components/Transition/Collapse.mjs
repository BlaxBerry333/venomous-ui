import { jsx as s } from "react/jsx-runtime";
import t from "react";
import N from "clsx";
import { COMPONENT_NAMES as f } from "../../../core/constants/componentNames.mjs";
import { TRANSITION_COLLAPSE_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import d from "../../hooks/useComputedStyle/index.mjs";
import u from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateTransitionCollapseCSS as A } from "../../../core/css/componentStyles/TransitionCollapse.mjs";
const E = t.memo(
  t.forwardRef(
    ({ as: a, open: o = !1, children: m, className: r, style: l, ...i }, p) => {
      const n = a || "div", c = A();
      u(f.TransitionCollapse, c);
      const S = d(l), C = N(
        e.base.className,
        o && e.open.className,
        r
      );
      return /* @__PURE__ */ s(n, { ref: p, className: C, style: S, "aria-hidden": !o, ...i, children: /* @__PURE__ */ s("div", { className: e.content.className, children: m }) });
    }
  )
);
E.displayName = "Collapse";
export {
  E as default
};
