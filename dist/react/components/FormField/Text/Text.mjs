import { jsxs as _, jsx as m } from "react/jsx-runtime";
import c from "react";
import E from "clsx";
import { COMPONENT_NAMES as d } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_TEXT_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as M } from "../../FormControl/FormControlContext.mjs";
import v from "../../../hooks/useComputedStyle/index.mjs";
import O from "../../../hooks/useFormFieldFocus/index.mjs";
import b from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldTextCSS as g } from "../../../../core/css/componentStyles/FormFieldText.mjs";
const j = c.memo(
  c.forwardRef(
    ({
      variant: l = "outlined",
      size: s = "medium",
      error: o = !1,
      disabled: r = !1,
      fullWidth: n = !0,
      prefix: t,
      suffix: i,
      className: p,
      style: u,
      onFocus: N,
      onBlur: f,
      ...F
    }, S) => {
      b(d.FormFieldText, g());
      const x = v(u), a = M(), { isFocused: T, handleFocus: h, handleBlur: y } = O({ onFocus: N, onBlur: f }), C = E(
        e.base.className,
        r && e.disabled.className,
        T && e.focused.className,
        o && e.error.className,
        l === "outlined" && e.variantOutlined.className,
        l === "filled" && e.variantFilled.className,
        s === "small" && e.sizeSmall.className,
        s === "medium" && e.sizeMedium.className,
        s === "large" && e.sizeLarge.className,
        n && e.fullWidth.className,
        p
      );
      return /* @__PURE__ */ _("div", { className: C, style: x, children: [
        t && /* @__PURE__ */ m("span", { className: e.prefix.className, children: t }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: S,
            type: "text",
            className: e.input.className,
            disabled: r,
            "aria-invalid": o || void 0,
            "aria-describedby": a == null ? void 0 : a.helperTextId,
            onFocus: h,
            onBlur: y,
            ...F
          }
        ),
        i && /* @__PURE__ */ m("span", { className: e.suffix.className, children: i })
      ] });
    }
  )
);
j.displayName = d.FormFieldText;
export {
  j as default
};
