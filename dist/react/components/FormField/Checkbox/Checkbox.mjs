import { jsxs as F, jsx as a } from "react/jsx-runtime";
import c from "react";
import y from "clsx";
import { COMPONENT_NAMES as N } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as _ } from "../../FormControl/FormControlContext.mjs";
import E from "../../Icon/Icon.mjs";
import M from "../../../hooks/useComputedStyle/index.mjs";
import I from "../../../hooks/useControlledState/index.mjs";
import O from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldCheckboxCSS as j } from "../../../../core/css/componentStyles/FormFieldCheckbox.mjs";
const v = c.memo(
  c.forwardRef(
    ({
      size: m = "medium",
      error: r = !1,
      disabled: o = !1,
      checked: n,
      defaultChecked: u,
      label: t,
      className: f,
      style: h,
      onChange: s,
      ...C
    }, S) => {
      O(N.FormFieldCheckbox, j());
      const k = M(h), l = _(), { currentValue: i, setValue: d } = I({
        value: n,
        defaultValue: u ?? !1
      }), x = y(
        e.base.className,
        o && e.disabled.className,
        r && e.error.className,
        i && e.checked.className,
        m === "small" && e.sizeSmall.className,
        m === "medium" && e.sizeMedium.className,
        m === "large" && e.sizeLarge.className,
        f
      ), b = c.useCallback(
        (p) => {
          d(p.target.checked), s == null || s(p);
        },
        [d, s]
      );
      return /* @__PURE__ */ F("label", { className: x, style: k, children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: S,
            type: "checkbox",
            className: e.input.className,
            checked: i,
            disabled: o,
            "aria-invalid": r || void 0,
            "aria-describedby": l == null ? void 0 : l.helperTextId,
            onChange: b,
            ...C
          }
        ),
        /* @__PURE__ */ a("span", { className: e.box.className, children: /* @__PURE__ */ a("span", { className: e.icon.className, children: /* @__PURE__ */ a(E, { name: "mdi:check" }) }) }),
        t && /* @__PURE__ */ a("span", { className: e.label.className, children: t })
      ] });
    }
  )
);
v.displayName = N.FormFieldCheckbox;
export {
  v as default
};
