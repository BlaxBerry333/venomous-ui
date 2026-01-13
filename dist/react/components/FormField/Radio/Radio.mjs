import { jsx as s, jsxs as E } from "react/jsx-runtime";
import r from "react";
import N from "clsx";
import { COMPONENT_NAMES as p } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_RADIO_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as k } from "../../FormControl/FormControlContext.mjs";
import L from "../../../hooks/useComputedStyle/index.mjs";
import j from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldRadioCSS as z } from "../../../../core/css/componentStyles/FormFieldRadio.mjs";
const T = r.memo(
  ({
    options: S,
    value: t,
    defaultValue: f,
    size: m = "medium",
    column: F = !0,
    error: d = !1,
    disabled: i = !1,
    name: v,
    onChange: l,
    className: b,
    style: C
  }) => {
    const I = z();
    j(p.FormFieldRadio, I);
    const R = L(C), o = k(), [_, g] = r.useState(f), c = t !== void 0, h = c ? t : _, y = N(
      e.group.className,
      F ? e.vertical.className : e.horizontal.className,
      m === "small" && e.sizeSmall.className,
      m === "medium" && e.sizeMedium.className,
      m === "large" && e.sizeLarge.className,
      b
    ), O = r.useId(), x = v ?? `radio-group-${O}`, M = r.useCallback(
      (a) => {
        a.disabled || i || (c || g(a.value), l == null || l(a.value));
      },
      [c, i, l]
    ), A = (a) => {
      const n = a.value === h, u = i || a.disabled, D = N(
        e.base.className,
        n && e.checked.className,
        u && e.disabled.className,
        d && e.error.className
      );
      return /* @__PURE__ */ E("label", { className: D, children: [
        /* @__PURE__ */ s(
          "input",
          {
            type: "radio",
            name: x,
            value: a.value,
            checked: n,
            disabled: u,
            onChange: () => M(a),
            className: e.input.className
          }
        ),
        /* @__PURE__ */ s("span", { className: e.circle.className, children: /* @__PURE__ */ s("span", { className: e.dot.className }) }),
        a.label && /* @__PURE__ */ s("span", { className: e.label.className, children: a.label })
      ] }, String(a.value));
    };
    return /* @__PURE__ */ s(
      "div",
      {
        role: "radiogroup",
        className: y,
        style: R,
        "aria-invalid": d || void 0,
        "aria-describedby": o == null ? void 0 : o.helperTextId,
        children: S.map(A)
      }
    );
  }
);
T.displayName = p.FormFieldRadio;
export {
  T as default
};
