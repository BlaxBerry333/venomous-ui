import { jsx as s, jsxs as D } from "react/jsx-runtime";
import r from "react";
import u from "clsx";
import { COMPONENT_NAMES as N } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_RADIO_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import E from "../../../hooks/useComputedStyle/index.mjs";
import k from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldRadioCSS as x } from "../../../../core/css/componentStyles/FormFieldRadio.mjs";
const L = r.memo(
  ({
    options: p,
    value: o,
    defaultValue: S,
    size: m = "medium",
    column: f = !0,
    error: v = !1,
    disabled: c = !1,
    name: t,
    onChange: l,
    className: F,
    style: b
  }) => {
    const R = x();
    k(N.FormFieldRadio, R);
    const _ = E(b), [C, M] = r.useState(S), i = o !== void 0, g = i ? o : C, h = u(
      e.group.className,
      f ? e.vertical.className : e.horizontal.className,
      m === "small" && e.sizeSmall.className,
      m === "medium" && e.sizeMedium.className,
      m === "large" && e.sizeLarge.className,
      F
    ), O = r.useMemo(() => t ?? `radio-group-${Math.random().toString(36).slice(2, 9)}`, [t]), y = r.useCallback(
      (a) => {
        a.disabled || c || (i || M(a.value), l == null || l(a.value));
      },
      [i, c, l]
    ), I = (a) => {
      const d = a.value === g, n = c || a.disabled, A = u(
        e.base.className,
        d && e.checked.className,
        n && e.disabled.className,
        v && e.error.className
      );
      return /* @__PURE__ */ D("label", { className: A, children: [
        /* @__PURE__ */ s(
          "input",
          {
            type: "radio",
            name: O,
            value: a.value,
            checked: d,
            disabled: n,
            onChange: () => y(a),
            className: e.input.className
          }
        ),
        /* @__PURE__ */ s("span", { className: e.circle.className, children: /* @__PURE__ */ s("span", { className: e.dot.className }) }),
        a.label && /* @__PURE__ */ s("span", { className: e.label.className, children: a.label })
      ] }, String(a.value));
    };
    return /* @__PURE__ */ s("div", { role: "radiogroup", className: h, style: _, children: p.map(I) });
  }
);
L.displayName = N.FormFieldRadio;
export {
  L as default
};
