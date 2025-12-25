import { jsxs as x, jsx as m } from "react/jsx-runtime";
import s from "react";
import P from "clsx";
import { COMPONENT_NAMES as t } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_PASSWORD_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import _ from "../../Icon/Icon.mjs";
import I from "../../../hooks/useComputedStyle/index.mjs";
import M from "../../../hooks/useFormFieldFocus/index.mjs";
import O from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldPasswordCSS as A } from "../../../../core/css/componentStyles/FormFieldPassword.mjs";
const E = s.memo(
  s.forwardRef(
    ({
      variant: r = "outlined",
      size: a = "medium",
      error: i = !1,
      disabled: o = !1,
      fullWidth: c = !0,
      className: d,
      style: n,
      onFocus: u,
      onBlur: p,
      ...f
    }, N) => {
      O(t.FormFieldPassword, A());
      const S = I(n), { isFocused: F, handleFocus: w, handleBlur: y } = M({ onFocus: u, onBlur: p }), [l, b] = s.useState(!1), C = P(
        e.base.className,
        o && e.disabled.className,
        F && e.focused.className,
        i && e.error.className,
        r === "outlined" && e.variantOutlined.className,
        r === "filled" && e.variantFilled.className,
        a === "small" && e.sizeSmall.className,
        a === "medium" && e.sizeMedium.className,
        a === "large" && e.sizeLarge.className,
        c && e.fullWidth.className,
        d
      ), g = s.useCallback(() => {
        b((h) => !h);
      }, []);
      return /* @__PURE__ */ x("div", { className: C, style: S, children: [
        /* @__PURE__ */ m(
          "input",
          {
            ref: N,
            type: l ? "text" : "password",
            className: e.input.className,
            disabled: o,
            onFocus: w,
            onBlur: y,
            ...f
          }
        ),
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: e.toggle.className,
            onClick: g,
            disabled: o,
            tabIndex: -1,
            "aria-label": l ? "Hide password" : "Show password",
            children: /* @__PURE__ */ m(_, { name: l ? "mdi:eye-off" : "mdi:eye" })
          }
        )
      ] });
    }
  )
);
E.displayName = t.FormFieldPassword;
export {
  E as default
};
