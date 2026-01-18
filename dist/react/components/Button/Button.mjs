import { jsxs as i, jsx as r, Fragment as O } from "react/jsx-runtime";
import n from "react";
import _ from "clsx";
import { COMPONENT_NAMES as c } from "../../../core/constants/componentNames.mjs";
import { BUTTON_CSS_CLASS_NAMES as a } from "../../../core/constants/cssClassNames.mjs";
import v from "../Icon/Icon.mjs";
import E from "../../hooks/useComputedStyle/index.mjs";
import I from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateButtonCSS as M } from "../../../core/css/componentStyles/Button.mjs";
const j = n.memo(
  n.forwardRef(
    ({
      variant: m = "contained",
      size: t = "medium",
      color: s = "primary",
      disabled: l = !1,
      loading: e = !1,
      fullWidth: N = !1,
      text: d,
      StartElement: u,
      EndElement: f,
      ariaLabel: p,
      children: S,
      className: b,
      style: y,
      type: C = "button",
      ...g
    }, x) => {
      const o = l || e, B = M();
      I(c.Button, B);
      const T = E(y), h = _(
        a.base.className,
        l && a.disabled.className,
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
        b
      );
      return /* @__PURE__ */ i(
        "button",
        {
          ref: x,
          type: C,
          className: h,
          style: T,
          disabled: o,
          "aria-label": p,
          "aria-disabled": o || void 0,
          "aria-busy": e || void 0,
          ...g,
          children: [
            e && /* @__PURE__ */ r("span", { className: a.loadingIcon.className, children: /* @__PURE__ */ r(v, { name: "svg-spinners:ring-resize" }) }),
            /* @__PURE__ */ r("span", { className: a.content.className, children: S || /* @__PURE__ */ i(O, { children: [
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
j.displayName = c.Button;
export {
  j as default
};
