import { jsxs as F, jsx as l } from "react/jsx-runtime";
import t from "react";
import w from "clsx";
import { COMPONENT_NAMES as i } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_SWITCH_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import y from "../../../hooks/useComputedStyle/index.mjs";
import _ from "../../../hooks/useControlledState/index.mjs";
import b from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldSwitchCSS as x } from "../../../../core/css/componentStyles/FormFieldSwitch.mjs";
const M = t.memo(
  t.forwardRef(
    ({
      size: s = "medium",
      error: d = !1,
      disabled: c = !1,
      checked: p,
      defaultChecked: u,
      className: N,
      style: S,
      onChange: a,
      ...f
    }, h) => {
      b(i.FormFieldSwitch, x());
      const n = y(S), { currentValue: m, setValue: r } = _({
        value: p,
        defaultValue: u ?? !1
      }), k = w(
        e.base.className,
        c && e.disabled.className,
        d && e.error.className,
        m && e.checked.className,
        s === "small" && e.sizeSmall.className,
        s === "medium" && e.sizeMedium.className,
        s === "large" && e.sizeLarge.className,
        N
      ), C = t.useCallback(
        (o) => {
          r(o.target.checked), a == null || a(o);
        },
        [r, a]
      );
      return /* @__PURE__ */ F("label", { className: k, style: n, children: [
        /* @__PURE__ */ l(
          "input",
          {
            ref: h,
            type: "checkbox",
            role: "switch",
            className: e.input.className,
            checked: m,
            disabled: c,
            onChange: C,
            "aria-checked": m,
            ...f
          }
        ),
        /* @__PURE__ */ l("span", { className: e.track.className, children: /* @__PURE__ */ l("span", { className: e.thumb.className }) })
      ] });
    }
  )
);
M.displayName = i.FormFieldSwitch;
export {
  M as default
};
