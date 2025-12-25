import { jsxs as y, jsx as i } from "react/jsx-runtime";
import o from "react";
import A from "clsx";
import { COMPONENT_NAMES as c } from "../../../core/constants/componentNames.mjs";
import { CARD_CSS_CLASS_NAMES as a } from "../../../core/constants/cssClassNames.mjs";
import M from "../Icon/Icon.mjs";
import _ from "../../hooks/useComputedStyle/index.mjs";
import x from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateCardCSS as E } from "../../../core/css/componentStyles/Card.mjs";
const R = o.memo(
  o.forwardRef(
    ({
      variant: l = "elevated",
      padding: e = "medium",
      radius: s = "medium",
      loading: m = !1,
      disabled: t = !1,
      clickable: d = !1,
      className: n,
      style: N,
      children: p,
      onClick: f,
      ...u
    }, S) => {
      const r = t || m, C = d && !r, v = E();
      x(c.Card, v);
      const b = _(N), g = A(
        a.base.className,
        r && a.disabled.className,
        m && a.loading.className,
        C && a.clickable.className,
        l === "elevated" && a.variantElevated.className,
        l === "outlined" && a.variantOutlined.className,
        l === "filled" && a.variantFilled.className,
        e === "none" && a.paddingNone.className,
        e === "small" && a.paddingSmall.className,
        e === "medium" && a.paddingMedium.className,
        e === "large" && a.paddingLarge.className,
        s === "none" && a.radiusNone.className,
        s === "small" && a.radiusSmall.className,
        s === "medium" && a.radiusMedium.className,
        s === "large" && a.radiusLarge.className,
        n
      );
      return /* @__PURE__ */ y(
        "article",
        {
          ref: S,
          className: g,
          style: b,
          onClick: f,
          "aria-busy": m || void 0,
          "aria-disabled": r || void 0,
          ...u,
          children: [
            m && /* @__PURE__ */ i("span", { className: a.loadingIcon.className, children: /* @__PURE__ */ i(M, { name: "svg-spinners:ring-resize" }) }),
            /* @__PURE__ */ i("div", { className: a.content.className, children: p })
          ]
        }
      );
    }
  )
);
R.displayName = c.Card;
export {
  R as default
};
