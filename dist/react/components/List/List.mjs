import { jsx as f } from "react/jsx-runtime";
import s from "react";
import d from "clsx";
import { COMPONENT_NAMES as u } from "../../../core/constants/componentNames.mjs";
import { LIST_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import L from "../../hooks/useComputedStyle/index.mjs";
import C from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateListCSS as y } from "../../../core/css/componentStyles/List.mjs";
const _ = s.memo(
  s.forwardRef(
    ({ as: o, spacing: m = "none", divider: t = !1, children: a, className: r, style: l, ...i }, c) => {
      const n = o || "ul", S = y();
      C(u.List, S);
      const p = L(l), N = d(
        e.root.className,
        t && e.divider.className,
        m === "none" && e.spacingNone.className,
        m === "small" && e.spacingSmall.className,
        m === "medium" && e.spacingMedium.className,
        m === "large" && e.spacingLarge.className,
        r
      );
      return /* @__PURE__ */ f(n, { ref: c, className: N, style: p, ...i, children: a });
    }
  )
);
_.displayName = "List";
export {
  _ as default
};
