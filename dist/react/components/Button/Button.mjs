import { jsxs as n, jsx as r, Fragment as h } from "react/jsx-runtime";
import c from "react";
import O from "clsx";
import { COMPONENT_NAMES as i } from "../../../core/constants/componentNames.mjs";
import { BUTTON_CSS_CLASS_NAMES as a } from "../../../core/constants/cssClassNames.mjs";
import _ from "../Icon/Icon.mjs";
import v from "../../hooks/useComputedStyle/index.mjs";
import E from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateButtonCSS as I } from "../../../core/css/componentStyles/Button.mjs";
const M = c.memo(
  c.forwardRef(
    ({
      variant: m = "contained",
      size: t = "medium",
      color: s = "primary",
      disabled: o = !1,
      loading: e = !1,
      fullWidth: N = !1,
      text: d,
      StartElement: u,
      EndElement: f,
      children: p,
      className: S,
      style: y,
      type: b = "button",
      ...C
    }, g) => {
      const l = o || e, x = I();
      E(i.Button, x);
      const B = v(y), T = O(
        a.base.className,
        o && a.disabled.className,
        e && a.loading.className,
        N && a.fullWidth.className,
        m === "contained" && a.variantContained.className,
        m === "outlined" && a.variantOutlined.className,
        m === "text" && a.variantText.className,
        t === "small" && a.sizeSmall.className,
        t === "medium" && a.sizeMedium.className,
        t === "large" && a.sizeLarge.className,
        s === "default" && a.colorDefault.className,
        s === "primary" && a.colorPrimary.className,
        s === "success" && a.colorSuccess.className,
        s === "error" && a.colorError.className,
        s === "warning" && a.colorWarning.className,
        s === "info" && a.colorInfo.className,
        S
      );
      return /* @__PURE__ */ n(
        "button",
        {
          ref: g,
          type: b,
          className: T,
          style: B,
          disabled: l,
          "aria-disabled": l || void 0,
          "aria-busy": e || void 0,
          ...C,
          children: [
            e && /* @__PURE__ */ r("span", { className: a.loadingIcon.className, children: /* @__PURE__ */ r(_, { name: "svg-spinners:ring-resize" }) }),
            /* @__PURE__ */ r("span", { className: a.content.className, children: p || /* @__PURE__ */ n(h, { children: [
              u,
              d,
              f
            ] }) })
          ]
        }
      );
    }
  )
);
M.displayName = i.Button;
export {
  M as default
};
