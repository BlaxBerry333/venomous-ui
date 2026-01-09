import { jsxs as A, jsx as d } from "react/jsx-runtime";
import c from "react";
import E from "clsx";
import { COMPONENT_NAMES as n } from "../../../core/constants/componentNames.mjs";
import { CARD_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import M from "../Icon/Icon.mjs";
import _ from "../../hooks/useComputedStyle/index.mjs";
import I from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateCardCSS as R } from "../../../core/css/componentStyles/Card.mjs";
const h = c.memo(
  c.forwardRef(
    ({
      variant: i = "elevated",
      padding: s = "medium",
      radius: l = "medium",
      loading: m = !1,
      disabled: N = !1,
      clickable: p = !1,
      ariaLabel: u,
      className: f,
      style: S,
      children: v,
      onClick: r,
      ...C
    }, b) => {
      const t = N || m, a = p && !t, y = c.useCallback(
        (o) => {
          a && r && (o.key === "Enter" || o.key === " ") && (o.preventDefault(), r(o));
        },
        [a, r]
      ), g = R();
      I(n.Card, g);
      const D = _(S), x = E(
        e.base.className,
        t && e.disabled.className,
        m && e.loading.className,
        a && e.clickable.className,
        i === "elevated" && e.variantElevated.className,
        i === "outlined" && e.variantOutlined.className,
        i === "filled" && e.variantFilled.className,
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
          onClick: r,
          onKeyDown: a ? y : void 0,
          tabIndex: a ? 0 : void 0,
          role: a ? "button" : void 0,
          "aria-label": u,
          "aria-busy": m || void 0,
          "aria-disabled": t || void 0,
          ...C,
          children: [
            m && /* @__PURE__ */ d("span", { className: e.loadingIcon.className, children: /* @__PURE__ */ d(M, { name: "svg-spinners:ring-resize" }) }),
            /* @__PURE__ */ d("div", { className: e.content.className, children: v })
          ]
        }
      );
    }
  )
);
h.displayName = n.Card;
export {
  h as default
};
