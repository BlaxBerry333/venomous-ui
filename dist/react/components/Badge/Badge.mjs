import { jsxs as b, jsx as E } from "react/jsx-runtime";
import l from "react";
import M from "clsx";
import { COMPONENT_NAMES as u } from "../../../core/constants/componentNames.mjs";
import { BADGE_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import A from "../../hooks/useComputedStyle/index.mjs";
import _ from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateBadgeCSS as D } from "../../../core/css/componentStyles/Badge.mjs";
const L = l.memo(
  l.forwardRef(
    ({
      content: s,
      variant: a = "standard",
      size: o = "medium",
      color: r = "error",
      max: t = 99,
      showZero: i = !1,
      invisible: d = !1,
      anchorOrigin: m = "top-right",
      ariaLabel: c,
      className: N,
      style: p,
      children: S,
      ...n
    }, g) => {
      const y = D();
      _(u.Badge, y);
      const h = A(p), B = l.useMemo(() => a === "dot" ? null : typeof s == "number" && s > t ? `${t}+` : s, [s, t, a]), f = l.useMemo(() => !!(d || a === "standard" && !i && (s === 0 || s === "0" || s == null || s === "")), [d, a, s, i]), C = M(
        e.root.className,
        f && e.invisible.className,
        a === "standard" && e.variantStandard.className,
        a === "dot" && e.variantDot.className,
        o === "small" && e.sizeSmall.className,
        o === "medium" && e.sizeMedium.className,
        o === "large" && e.sizeLarge.className,
        r === "default" && e.colorDefault.className,
        r === "primary" && e.colorPrimary.className,
        r === "success" && e.colorSuccess.className,
        r === "error" && e.colorError.className,
        r === "warning" && e.colorWarning.className,
        r === "info" && e.colorInfo.className,
        m === "top-right" && e.anchorTopRight.className,
        m === "top-left" && e.anchorTopLeft.className,
        m === "bottom-right" && e.anchorBottomRight.className,
        m === "bottom-left" && e.anchorBottomLeft.className,
        N
      );
      return /* @__PURE__ */ b("span", { ref: g, className: C, style: h, ...n, children: [
        S,
        /* @__PURE__ */ E(
          "span",
          {
            className: e.badge.className,
            role: "status",
            "aria-label": c,
            "aria-hidden": f || void 0,
            children: B
          }
        )
      ] });
    }
  )
);
L.displayName = u.Badge;
export {
  L as default
};
