import { jsxs as C, jsx as a } from "react/jsx-runtime";
import t from "react";
import _ from "clsx";
import { COMPONENT_NAMES as i } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_TEXT_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import E from "../../../hooks/useComputedStyle/index.mjs";
import M from "../../../hooks/useFormFieldFocus/index.mjs";
import O from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldTextCSS as g } from "../../../../core/css/componentStyles/FormFieldText.mjs";
const j = t.memo(
  t.forwardRef(
    ({
      variant: m = "outlined",
      size: s = "medium",
      error: c = !1,
      disabled: l = !1,
      fullWidth: d = !0,
      prefix: o,
      suffix: r,
      className: u,
      style: n,
      onFocus: N,
      onBlur: p,
      ...f
    }, F) => {
      O(i.FormFieldText, g());
      const S = E(n), { isFocused: x, handleFocus: T, handleBlur: h } = M({ onFocus: N, onBlur: p }), y = _(
        e.base.className,
        l && e.disabled.className,
        x && e.focused.className,
        c && e.error.className,
        m === "outlined" && e.variantOutlined.className,
        m === "filled" && e.variantFilled.className,
        s === "small" && e.sizeSmall.className,
        s === "medium" && e.sizeMedium.className,
        s === "large" && e.sizeLarge.className,
        d && e.fullWidth.className,
        u
      );
      return /* @__PURE__ */ C("div", { className: y, style: S, children: [
        o && /* @__PURE__ */ a("span", { className: e.prefix.className, children: o }),
        /* @__PURE__ */ a(
          "input",
          {
            ref: F,
            type: "text",
            className: e.input.className,
            disabled: l,
            onFocus: T,
            onBlur: h,
            ...f
          }
        ),
        r && /* @__PURE__ */ a("span", { className: e.suffix.className, children: r })
      ] });
    }
  )
);
j.displayName = i.FormFieldText;
export {
  j as default
};
