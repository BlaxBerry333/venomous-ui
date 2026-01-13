import { jsxs as b, jsx as l } from "react/jsx-runtime";
import r from "react";
import w from "clsx";
import { COMPONENT_NAMES as p } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_SWITCH_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as x } from "../../FormControl/FormControlContext.mjs";
import y from "../../../hooks/useComputedStyle/index.mjs";
import _ from "../../../hooks/useControlledState/index.mjs";
import M from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldSwitchCSS as E } from "../../../../core/css/componentStyles/FormFieldSwitch.mjs";
const I = r.memo(
  r.forwardRef(
    ({
      size: s = "medium",
      error: c = !1,
      disabled: o = !1,
      checked: u,
      defaultChecked: N,
      className: S,
      style: f,
      onChange: a,
      ...h
    }, n) => {
      M(p.FormFieldSwitch, E());
      const k = y(f), m = x(), { currentValue: t, setValue: i } = _({
        value: u,
        defaultValue: N ?? !1
      }), C = w(
        e.base.className,
        o && e.disabled.className,
        c && e.error.className,
        t && e.checked.className,
        s === "small" && e.sizeSmall.className,
        s === "medium" && e.sizeMedium.className,
        s === "large" && e.sizeLarge.className,
        S
      ), F = r.useCallback(
        (d) => {
          i(d.target.checked), a == null || a(d);
        },
        [i, a]
      );
      return /* @__PURE__ */ b("label", { className: C, style: k, children: [
        /* @__PURE__ */ l(
          "input",
          {
            ref: n,
            type: "checkbox",
            role: "switch",
            className: e.input.className,
            checked: t,
            disabled: o,
            "aria-invalid": c || void 0,
            "aria-describedby": m == null ? void 0 : m.helperTextId,
            "aria-checked": t,
            onChange: F,
            ...h
          }
        ),
        /* @__PURE__ */ l("span", { className: e.track.className, children: /* @__PURE__ */ l("span", { className: e.thumb.className }) })
      ] });
    }
  )
);
I.displayName = p.FormFieldSwitch;
export {
  I as default
};
