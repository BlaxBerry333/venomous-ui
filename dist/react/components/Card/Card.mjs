import { jsxs as A, jsx as c } from "react/jsx-runtime";
import d from "react";
import E from "clsx";
import { COMPONENT_NAMES as n } from "../../../core/constants/componentNames.mjs";
import { CARD_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import M from "../Icon/Icon.mjs";
import _ from "../../hooks/useComputedStyle/index.mjs";
import k from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateCardCSS as I } from "../../../core/css/componentStyles/Card.mjs";
const R = d.memo(
  d.forwardRef(
    ({
      variant: o = "elevated",
      padding: s = "medium",
      radius: l = "medium",
      loading: m = !1,
      disabled: N = !1,
      clickable: u = !1,
      ariaLabel: p,
      className: f,
      style: S,
      children: C,
      onClick: i,
      ...v
    }, b) => {
      const t = N || m, a = u && !t, y = d.useCallback(
        (r) => {
          a && i && (r.key === "Enter" || r.key === " ") && (r.preventDefault(), r.currentTarget.click());
        },
        [a, i]
      ), g = I();
      k(n.Card, g);
      const D = _(S), x = E(
        e.base.className,
        t && e.disabled.className,
        m && e.loading.className,
        a && e.clickable.className,
        o === "elevated" && e.variantElevated.className,
        o === "outlined" && e.variantOutlined.className,
        o === "filled" && e.variantFilled.className,
        s === "none" && e.paddingNone.className,
        s === "small" && e.paddingSmall.className,
        s === "medium" && e.paddingMedium.className,
        s === "large" && e.paddingLarge.className,
        l === "none" && e.radiusNone.className,
        l === "small" && e.radiusSmall.className,
        l === "medium" && e.radiusMedium.className,
        l === "large" && e.radiusLarge.className,
        f
      );
      return /* @__PURE__ */ A(
        "article",
        {
          ref: b,
          className: x,
          style: D,
          onClick: i,
          onKeyDown: a ? y : void 0,
          tabIndex: a ? 0 : void 0,
          role: a ? "button" : void 0,
          "aria-label": p,
          "aria-busy": m || void 0,
          "aria-disabled": t || void 0,
          ...v,
          children: [
            m && /* @__PURE__ */ c("span", { className: e.loadingIcon.className, children: /* @__PURE__ */ c(M, { name: "svg-spinners:ring-resize" }) }),
            /* @__PURE__ */ c("div", { className: e.content.className, children: C })
          ]
        }
      );
    }
  )
);
R.displayName = n.Card;
export {
  R as default
};
