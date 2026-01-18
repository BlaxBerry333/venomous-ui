import { jsxs as S, jsx as m } from "react/jsx-runtime";
import n from "react";
import z from "clsx";
import { COMPONENT_NAMES as M } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_NUMBER_CSS_CLASS_NAMES as t } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as H } from "../../FormControl/FormControlContext.mjs";
import C from "../../Icon/Icon.mjs";
import U from "../../../hooks/useComputedStyle/index.mjs";
import W from "../../../hooks/useFormFieldFocus/index.mjs";
import q from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldNumberCSS as G } from "../../../../core/css/componentStyles/FormFieldNumber.mjs";
const J = n.memo(
  n.forwardRef(
    ({
      variant: v = "outlined",
      size: N = "medium",
      error: F = !1,
      disabled: d = !1,
      fullWidth: g = !0,
      min: o,
      max: l,
      step: u = 1,
      value: i,
      defaultValue: V,
      className: I,
      style: y,
      onChange: E,
      onFocus: k,
      onBlur: w,
      ...R
    }, _) => {
      q(M.FormFieldNumber, G());
      const A = U(y), b = H(), { isFocused: B, handleFocus: O, handleBlur: x } = W({ onFocus: k, onBlur: w }), j = z(
        t.base.className,
        d && t.disabled.className,
        B && t.focused.className,
        F && t.error.className,
        v === "outlined" && t.variantOutlined.className,
        v === "filled" && t.variantFilled.className,
        N === "small" && t.sizeSmall.className,
        N === "medium" && t.sizeMedium.className,
        N === "large" && t.sizeLarge.className,
        g && t.fullWidth.className,
        I
      ), s = n.useRef(null);
      n.useImperativeHandle(_, () => s.current);
      const h = n.useCallback((r) => {
        const e = String(r), a = e.indexOf(".");
        return a === -1 ? 0 : e.length - a - 1;
      }, []), f = n.useCallback(
        (r) => {
          const e = h(u);
          if (e === 0) return Math.round(r);
          const a = Math.pow(10, e);
          return Math.round(r * a) / a;
        },
        [u, h]
      ), c = n.useCallback(() => {
        var e;
        const r = (e = s.current) == null ? void 0 : e.value;
        return r === "" || r === void 0 ? 0 : parseFloat(r) || 0;
      }, []), p = n.useCallback(
        (r) => {
          let e = r;
          return o !== void 0 && e < o && (e = o), l !== void 0 && e > l && (e = l), e;
        },
        [o, l]
      ), D = n.useCallback(() => {
        if (!s.current) return;
        const r = c(), e = p(f(r + u));
        s.current.value = String(e);
        const a = new Event("input", { bubbles: !0 });
        s.current.dispatchEvent(a);
      }, [c, p, f, u]), L = n.useCallback(() => {
        if (!s.current) return;
        const r = c(), e = p(f(r - u));
        s.current.value = String(e);
        const a = new Event("input", { bubbles: !0 });
        s.current.dispatchEvent(a);
      }, [c, p, f, u]), P = n.useMemo(() => o === void 0 ? !1 : (i !== void 0 ? parseFloat(String(i)) : c()) <= o, [o, i, c]), T = n.useMemo(() => l === void 0 ? !1 : (i !== void 0 ? parseFloat(String(i)) : c()) >= l, [l, i, c]);
      return /* @__PURE__ */ S("div", { className: j, style: A, children: [
        /* @__PURE__ */ m(
          "input",
          {
            ref: s,
            type: "number",
            className: t.input.className,
            disabled: d,
            min: o,
            max: l,
            step: u,
            value: i,
            defaultValue: V,
            "aria-invalid": F || void 0,
            "aria-describedby": b == null ? void 0 : b.helperTextId,
            onChange: E,
            onFocus: O,
            onBlur: x,
            ...R
          }
        ),
        /* @__PURE__ */ S("div", { className: t.controls.className, children: [
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              className: t.controlButton.className,
              onClick: D,
              disabled: d || T,
              tabIndex: -1,
              "aria-label": "Increase value",
              children: /* @__PURE__ */ m(C, { name: "mdi:chevron-up" })
            }
          ),
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              className: t.controlButton.className,
              onClick: L,
              disabled: d || P,
              tabIndex: -1,
              "aria-label": "Decrease value",
              children: /* @__PURE__ */ m(C, { name: "mdi:chevron-down" })
            }
          )
        ] })
      ] });
    }
  )
);
J.displayName = M.FormFieldNumber;
export {
  J as default
};
