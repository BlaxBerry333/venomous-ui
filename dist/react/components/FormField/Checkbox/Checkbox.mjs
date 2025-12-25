import { jsxs as b, jsx as a } from "react/jsx-runtime";
import l from "react";
import F from "clsx";
import { COMPONENT_NAMES as d } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import y from "../../Icon/Icon.mjs";
import _ from "../../../hooks/useComputedStyle/index.mjs";
import E from "../../../hooks/useControlledState/index.mjs";
import M from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldCheckboxCSS as O } from "../../../../core/css/componentStyles/FormFieldCheckbox.mjs";
const j = l.memo(
  l.forwardRef(
    ({
      size: m = "medium",
      error: p = !1,
      disabled: c = !1,
      checked: N,
      defaultChecked: u,
      label: r,
      className: f,
      style: n,
      onChange: s,
      ...h
    }, C) => {
      M(d.FormFieldCheckbox, O());
      const S = _(n), { currentValue: o, setValue: t } = E({
        value: N,
        defaultValue: u ?? !1
      }), k = F(
        e.base.className,
        c && e.disabled.className,
        p && e.error.className,
        o && e.checked.className,
        m === "small" && e.sizeSmall.className,
        m === "medium" && e.sizeMedium.className,
        m === "large" && e.sizeLarge.className,
        f
      ), x = l.useCallback(
        (i) => {
          t(i.target.checked), s == null || s(i);
        },
        [t, s]
      );
      return /* @__PURE__ */ b("label", { className: k, style: S, children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: C,
            type: "checkbox",
            className: e.input.className,
            checked: o,
            disabled: c,
            onChange: x,
            ...h
          }
        ),
        /* @__PURE__ */ a("span", { className: e.box.className, children: /* @__PURE__ */ a("span", { className: e.icon.className, children: /* @__PURE__ */ a(y, { name: "mdi:check" }) }) }),
        r && /* @__PURE__ */ a("span", { className: e.label.className, children: r })
      ] });
    }
  )
);
j.displayName = d.FormFieldCheckbox;
export {
  j as default
};
