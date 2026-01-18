import { jsx as u } from "react/jsx-runtime";
import s from "react";
import x from "clsx";
import { COMPONENT_NAMES as N } from "../../../core/constants/componentNames.mjs";
import { TABS_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import z from "../../hooks/useComputedStyle/index.mjs";
import R from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { TabsProvider as j } from "./TabsContext.mjs";
import { generateTabsCSS as B } from "../../../core/css/componentStyles/Tabs.mjs";
const L = s.memo(
  s.forwardRef(
    ({
      value: r,
      defaultValue: S,
      onChange: a,
      variant: l = "underline",
      size: m = "medium",
      orientation: t = "horizontal",
      fullWidth: f = !1,
      disabled: i = !1,
      children: p,
      className: v,
      style: T,
      ...c
    }, b) => {
      const C = s.useId(), d = c.id || C, y = B();
      R(N.Tabs, y);
      const A = z(T), I = x(
        e.root.className,
        l === "underline" && e.variantUnderline.className,
        l === "enclosed" && e.variantEnclosed.className,
        l === "pills" && e.variantPills.className,
        m === "small" && e.sizeSmall.className,
        m === "medium" && e.sizeMedium.className,
        m === "large" && e.sizeLarge.className,
        t === "horizontal" && e.horizontal.className,
        t === "vertical" && e.vertical.className,
        f && e.fullWidth.className,
        i && e.disabled.className,
        v
      ), [_, E] = s.useState(S ?? null), o = r !== void 0, M = o ? r : _, h = s.useCallback(
        (n) => {
          o || E(n), a == null || a(n);
        },
        [o, a]
      );
      return /* @__PURE__ */ u(
        j,
        {
          value: M,
          onChange: h,
          variant: l,
          size: m,
          orientation: t,
          disabled: i,
          id: d,
          children: /* @__PURE__ */ u("div", { ref: b, id: d, className: I, style: A, ...c, children: p })
        }
      );
    }
  )
);
L.displayName = N.Tabs;
export {
  L as default
};
