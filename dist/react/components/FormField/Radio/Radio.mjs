import { jsx as s, jsxs as D } from "react/jsx-runtime";
import r from "react";
import p from "clsx";
import { COMPONENT_NAMES as S } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_RADIO_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as E } from "../../FormControl/FormControlContext.mjs";
import k from "../../../hooks/useComputedStyle/index.mjs";
import L from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldRadioCSS as j } from "../../../../core/css/componentStyles/FormFieldRadio.mjs";
const z = r.memo(
  ({
    options: f,
    value: c,
    defaultValue: v,
    size: m = "medium",
    column: b = !0,
    error: d = !1,
    disabled: i = !1,
    name: n,
    onChange: l,
    className: F,
    style: C
  }) => {
    const R = j();
    L(S.FormFieldRadio, R);
    const _ = k(C), o = E(), [h, M] = r.useState(v), t = c !== void 0, g = t ? c : h, y = p(
      e.group.className,
      b ? e.vertical.className : e.horizontal.className,
      m === "small" && e.sizeSmall.className,
      m === "medium" && e.sizeMedium.className,
      m === "large" && e.sizeLarge.className,
      F
    ), I = r.useMemo(() => n ?? `radio-group-${Math.random().toString(36).slice(2, 9)}`, [n]), O = r.useCallback(
      (a) => {
        a.disabled || i || (t || M(a.value), l == null || l(a.value));
      },
      [t, i, l]
    ), x = (a) => {
      const u = a.value === g, N = i || a.disabled, A = p(
        e.base.className,
        u && e.checked.className,
        N && e.disabled.className,
        d && e.error.className
      );
      return /* @__PURE__ */ D("label", { className: A, children: [
        /* @__PURE__ */ s(
          "input",
          {
            type: "radio",
            name: I,
            value: a.value,
            checked: u,
            disabled: N,
            onChange: () => O(a),
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
        style: _,
        "aria-invalid": d || void 0,
        "aria-describedby": o == null ? void 0 : o.helperTextId,
        children: f.map(x)
      }
    );
  }
);
z.displayName = S.FormFieldRadio;
export {
  z as default
};
