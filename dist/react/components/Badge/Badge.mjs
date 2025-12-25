import { jsxs as h, jsx as b } from "react/jsx-runtime";
import l from "react";
import E from "clsx";
import { COMPONENT_NAMES as u } from "../../../core/constants/componentNames.mjs";
import { BADGE_CSS_CLASS_NAMES as s } from "../../../core/constants/cssClassNames.mjs";
import M from "../../hooks/useComputedStyle/index.mjs";
import A from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateBadgeCSS as _ } from "../../../core/css/componentStyles/Badge.mjs";
const D = l.memo(
  l.forwardRef(
    ({
      content: e,
      variant: a = "standard",
      size: o = "medium",
      color: r = "error",
      max: t = 99,
      showZero: i = !1,
      invisible: f = !1,
      anchorOrigin: m = "top-right",
      className: c,
      style: d,
      children: N,
      ...p
    }, S) => {
      const n = _();
      A(u.Badge, n);
      const g = M(d), y = l.useMemo(() => a === "dot" ? null : typeof e == "number" && e > t ? `${t}+` : e, [e, t, a]), B = l.useMemo(() => !!(f || a === "standard" && !i && (e === 0 || e === "0" || e == null || e === "")), [f, a, e, i]), C = E(
        s.root.className,
        B && s.invisible.className,
        a === "standard" && s.variantStandard.className,
        a === "dot" && s.variantDot.className,
        o === "small" && s.sizeSmall.className,
        o === "medium" && s.sizeMedium.className,
        o === "large" && s.sizeLarge.className,
        r === "default" && s.colorDefault.className,
        r === "primary" && s.colorPrimary.className,
        r === "success" && s.colorSuccess.className,
        r === "error" && s.colorError.className,
        r === "warning" && s.colorWarning.className,
        r === "info" && s.colorInfo.className,
        m === "top-right" && s.anchorTopRight.className,
        m === "top-left" && s.anchorTopLeft.className,
        m === "bottom-right" && s.anchorBottomRight.className,
        m === "bottom-left" && s.anchorBottomLeft.className,
        c
      );
      return /* @__PURE__ */ h("span", { ref: S, className: C, style: g, ...p, children: [
        N,
        /* @__PURE__ */ b("span", { className: s.badge.className, children: y })
      ] });
    }
  )
);
D.displayName = u.Badge;
export {
  D as default
};
