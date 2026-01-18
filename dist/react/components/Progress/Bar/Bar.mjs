import { jsx as m } from "react/jsx-runtime";
import o from "react";
import v from "clsx";
import { COMPONENT_NAMES as i } from "../../../../core/constants/componentNames.mjs";
import { PROGRESS_BAR_CSS_CLASS_NAMES as a } from "../../../../core/constants/cssClassNames.mjs";
import C from "../../../hooks/useComputedStyle/index.mjs";
import P from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateProgressBarCSS as E } from "../../../../core/css/componentStyles/ProgressBar.mjs";
const R = ["primary", "success", "error", "warning", "info"], x = o.memo(
  o.forwardRef(
    ({
      value: c = 0,
      size: s = "medium",
      color: r = "primary",
      animated: e = !1,
      ariaLabel: t,
      ariaValueText: n,
      className: N,
      style: p,
      ...u
    }, d) => {
      const l = Math.min(Math.max(c, 0), 100), S = R.includes(r);
      P(i.ProgressBar, E());
      const f = C(p), g = v(
        a.base.className,
        e && a.animated.className,
        s === "small" && a.sizeSmall.className,
        s === "medium" && a.sizeMedium.className,
        s === "large" && a.sizeLarge.className,
        r === "primary" && a.colorPrimary.className,
        r === "success" && a.colorSuccess.className,
        r === "error" && a.colorError.className,
        r === "warning" && a.colorWarning.className,
        r === "info" && a.colorInfo.className,
        N
      ), y = e ? void 0 : {
        width: `${l}%`,
        ...S ? {} : { backgroundColor: r }
      };
      return /* @__PURE__ */ m(
        "div",
        {
          ref: d,
          className: g,
          style: f,
          role: "progressbar",
          "aria-label": t,
          "aria-valuenow": e ? void 0 : l,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuetext": n,
          ...u,
          children: /* @__PURE__ */ m("div", { className: a.track.className, children: /* @__PURE__ */ m("div", { className: a.fill.className, style: y }) })
        }
      );
    }
  )
);
x.displayName = i.ProgressBar;
export {
  x as default
};
