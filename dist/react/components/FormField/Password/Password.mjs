import { jsxs as I, jsx as t } from "react/jsx-runtime";
import s from "react";
import P from "clsx";
import { COMPONENT_NAMES as d } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_PASSWORD_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as _ } from "../../FormControl/FormControlContext.mjs";
import M from "../../Icon/Icon.mjs";
import O from "../../../hooks/useComputedStyle/index.mjs";
import v from "../../../hooks/useFormFieldFocus/index.mjs";
import A from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldPasswordCSS as E } from "../../../../core/css/componentStyles/FormFieldPassword.mjs";
const R = s.memo(
  s.forwardRef(
    ({
      variant: r = "outlined",
      size: a = "medium",
      error: i = !1,
      disabled: o = !1,
      fullWidth: c = !0,
      className: n,
      style: u,
      onFocus: p,
      onBlur: f,
      ...N
    }, F) => {
      A(d.FormFieldPassword, E());
      const S = O(u), l = _(), { isFocused: y, handleFocus: b, handleBlur: w } = v({ onFocus: p, onBlur: f }), [m, C] = s.useState(!1), h = P(
        e.base.className,
        o && e.disabled.className,
        y && e.focused.className,
        i && e.error.className,
        r === "outlined" && e.variantOutlined.className,
        r === "filled" && e.variantFilled.className,
        a === "small" && e.sizeSmall.className,
        a === "medium" && e.sizeMedium.className,
        a === "large" && e.sizeLarge.className,
        c && e.fullWidth.className,
        n
      ), x = s.useCallback(() => {
        C((g) => !g);
      }, []);
      return /* @__PURE__ */ I("div", { className: h, style: S, children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: F,
            type: m ? "text" : "password",
            className: e.input.className,
            disabled: o,
            "aria-invalid": i || void 0,
            "aria-describedby": l == null ? void 0 : l.helperTextId,
            onFocus: b,
            onBlur: w,
            ...N
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: e.toggle.className,
            onClick: x,
            disabled: o,
            tabIndex: -1,
            "aria-label": m ? "Hide password" : "Show password",
            children: /* @__PURE__ */ t(M, { name: m ? "mdi:eye-off" : "mdi:eye" })
          }
        )
      ] });
    }
  )
);
R.displayName = d.FormFieldPassword;
export {
  R as default
};
