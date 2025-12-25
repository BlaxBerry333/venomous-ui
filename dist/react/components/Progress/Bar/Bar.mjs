import { jsx as m } from "react/jsx-runtime";
import l from "react";
import g from "clsx";
import { COMPONENT_NAMES as i } from "../../../../core/constants/componentNames.mjs";
import { PROGRESS_BAR_CSS_CLASS_NAMES as a } from "../../../../core/constants/cssClassNames.mjs";
import y from "../../../hooks/useComputedStyle/index.mjs";
import C from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateProgressBarCSS as v } from "../../../../core/css/componentStyles/ProgressBar.mjs";
const P = ["primary", "success", "error", "warning", "info"], E = l.memo(
  l.forwardRef(
    ({ value: c = 0, size: s = "medium", color: r = "primary", animated: e = !1, className: t, style: n, ...N }, p) => {
      const o = Math.min(Math.max(c, 0), 100), d = P.includes(r);
      C(i.ProgressBar, v());
      const u = y(n), S = g(
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
        t
      ), f = e ? void 0 : {
        width: `${o}%`,
        ...d ? {} : { backgroundColor: r }
      };
      return /* @__PURE__ */ m(
        "div",
        {
          ref: p,
          className: S,
          style: u,
          role: "progressbar",
          "aria-valuenow": e ? void 0 : o,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...N,
          children: /* @__PURE__ */ m("div", { className: a.track.className, children: /* @__PURE__ */ m("div", { className: a.fill.className, style: f }) })
        }
      );
    }
  )
);
E.displayName = i.ProgressBar;
export {
  E as default
};
