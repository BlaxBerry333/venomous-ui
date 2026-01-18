import { jsxs as d, jsx as n } from "react/jsx-runtime";
import f from "react";
import _ from "clsx";
import { COMPONENT_NAMES as u } from "../../../../core/constants/componentNames.mjs";
import { PROGRESS_CIRCLE_CSS_CLASS_NAMES as s } from "../../../../core/constants/cssClassNames.mjs";
import w from "../../../hooks/useComputedStyle/index.mjs";
import I from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateProgressCircleCSS as O } from "../../../../core/css/componentStyles/ProgressCircle.mjs";
const W = {
  small: { size: 40, strokeWidth: 3 },
  medium: { size: 64, strokeWidth: 4 },
  large: { size: 96, strokeWidth: 5 }
}, z = ["primary", "success", "error", "warning", "info"], b = f.memo(
  f.forwardRef(
    ({
      value: S = 0,
      size: o = "medium",
      color: a = "primary",
      animated: c = !1,
      showLabel: p = !1,
      label: h,
      ariaLabel: g,
      ariaValueText: C,
      className: y,
      style: v,
      ...k
    }, x) => {
      const i = Math.min(Math.max(S, 0), 100), r = z.includes(a);
      I(u.ProgressCircle, O());
      const E = w(v), N = W[o], e = N.size, l = N.strokeWidth, t = (e - l) / 2, m = 2 * Math.PI * t, P = m - i / 100 * m, M = _(
        s.base.className,
        c && s.animated.className,
        o === "small" && s.sizeSmall.className,
        o === "medium" && s.sizeMedium.className,
        o === "large" && s.sizeLarge.className,
        r && a === "primary" && s.colorPrimary.className,
        r && a === "success" && s.colorSuccess.className,
        r && a === "error" && s.colorError.className,
        r && a === "warning" && s.colorWarning.className,
        r && a === "info" && s.colorInfo.className,
        y
      ), R = r ? void 0 : { stroke: a };
      return /* @__PURE__ */ d(
        "div",
        {
          ref: x,
          className: M,
          style: E,
          role: "progressbar",
          "aria-label": g,
          "aria-valuenow": c ? void 0 : i,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuetext": C,
          ...k,
          children: [
            /* @__PURE__ */ d(
              "svg",
              {
                className: s.svg.className,
                width: e,
                height: e,
                viewBox: `0 0 ${e} ${e}`,
                children: [
                  /* @__PURE__ */ n(
                    "circle",
                    {
                      className: s.track.className,
                      cx: e / 2,
                      cy: e / 2,
                      r: t,
                      strokeWidth: l
                    }
                  ),
                  /* @__PURE__ */ n(
                    "circle",
                    {
                      className: s.fill.className,
                      cx: e / 2,
                      cy: e / 2,
                      r: t,
                      strokeWidth: l,
                      strokeDasharray: m,
                      strokeDashoffset: c ? void 0 : P,
                      style: R
                    }
                  )
                ]
              }
            ),
            p && /* @__PURE__ */ n("div", { className: s.label.className, children: h ?? (c ? "" : `${Math.round(i)}%`) })
          ]
        }
      );
    }
  )
);
b.displayName = u.ProgressCircle;
export {
  b as default
};
