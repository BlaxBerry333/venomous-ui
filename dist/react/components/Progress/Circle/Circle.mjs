import { jsxs as d, jsx as n } from "react/jsx-runtime";
import f from "react";
import M from "clsx";
import { COMPONENT_NAMES as u } from "../../../../core/constants/componentNames.mjs";
import { PROGRESS_CIRCLE_CSS_CLASS_NAMES as s } from "../../../../core/constants/cssClassNames.mjs";
import R from "../../../hooks/useComputedStyle/index.mjs";
import _ from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateProgressCircleCSS as w } from "../../../../core/css/componentStyles/ProgressCircle.mjs";
const I = {
  small: { size: 40, strokeWidth: 3 },
  medium: { size: 64, strokeWidth: 4 },
  large: { size: 96, strokeWidth: 5 }
}, O = ["primary", "success", "error", "warning", "info"], W = f.memo(
  f.forwardRef(
    ({
      value: S = 0,
      size: o = "medium",
      color: r = "primary",
      animated: c = !1,
      showLabel: p = !1,
      label: h,
      className: g,
      style: C,
      ...y
    }, v) => {
      const i = Math.min(Math.max(S, 0), 100), a = O.includes(r);
      _(u.ProgressCircle, w());
      const k = R(C), N = I[o], e = N.size, l = N.strokeWidth, m = (e - l) / 2, t = 2 * Math.PI * m, x = t - i / 100 * t, E = M(
        s.base.className,
        c && s.animated.className,
        o === "small" && s.sizeSmall.className,
        o === "medium" && s.sizeMedium.className,
        o === "large" && s.sizeLarge.className,
        a && r === "primary" && s.colorPrimary.className,
        a && r === "success" && s.colorSuccess.className,
        a && r === "error" && s.colorError.className,
        a && r === "warning" && s.colorWarning.className,
        a && r === "info" && s.colorInfo.className,
        g
      ), P = a ? void 0 : { stroke: r };
      return /* @__PURE__ */ d(
        "div",
        {
          ref: v,
          className: E,
          style: k,
          role: "progressbar",
          "aria-valuenow": c ? void 0 : i,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...y,
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
                      r: m,
                      strokeWidth: l
                    }
                  ),
                  /* @__PURE__ */ n(
                    "circle",
                    {
                      className: s.fill.className,
                      cx: e / 2,
                      cy: e / 2,
                      r: m,
                      strokeWidth: l,
                      strokeDasharray: t,
                      strokeDashoffset: c ? void 0 : x,
                      style: P
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
W.displayName = u.ProgressCircle;
export {
  W as default
};
