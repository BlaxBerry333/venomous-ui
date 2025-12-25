import { jsxs as F, jsx as m } from "react/jsx-runtime";
import n from "react";
import T from "clsx";
import { COMPONENT_NAMES as S } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_NUMBER_CSS_CLASS_NAMES as t } from "../../../../core/constants/cssClassNames.mjs";
import h from "../../Icon/Icon.mjs";
import z from "../../../hooks/useComputedStyle/index.mjs";
import H from "../../../hooks/useFormFieldFocus/index.mjs";
import U from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldNumberCSS as W } from "../../../../core/css/componentStyles/FormFieldNumber.mjs";
const q = n.memo(
  n.forwardRef(
    ({
      variant: b = "outlined",
      size: N = "medium",
      error: C = !1,
      disabled: d = !1,
      fullWidth: M = !0,
      min: o,
      max: l,
      step: u = 1,
      value: i,
      defaultValue: g,
      className: V,
      style: E,
      onChange: I,
      onFocus: k,
      onBlur: w,
      ...y
    }, R) => {
      U(S.FormFieldNumber, W());
      const _ = z(E), { isFocused: A, handleFocus: B, handleBlur: O } = H({ onFocus: k, onBlur: w }), j = T(
        t.base.className,
        d && t.disabled.className,
        A && t.focused.className,
        C && t.error.className,
        b === "outlined" && t.variantOutlined.className,
        b === "filled" && t.variantFilled.className,
        N === "small" && t.sizeSmall.className,
        N === "medium" && t.sizeMedium.className,
        N === "large" && t.sizeLarge.className,
        M && t.fullWidth.className,
        V
      ), s = n.useRef(null);
      n.useImperativeHandle(R, () => s.current);
      const v = n.useCallback((r) => {
        const e = String(r), a = e.indexOf(".");
        return a === -1 ? 0 : e.length - a - 1;
      }, []), f = n.useCallback(
        (r) => {
          const e = v(u);
          if (e === 0) return Math.round(r);
          const a = Math.pow(10, e);
          return Math.round(r * a) / a;
        },
        [u, v]
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
      }, [c, p, f, u]), P = n.useMemo(() => o === void 0 ? !1 : (i !== void 0 ? parseFloat(String(i)) : c()) <= o, [o, i, c]), x = n.useMemo(() => l === void 0 ? !1 : (i !== void 0 ? parseFloat(String(i)) : c()) >= l, [l, i, c]);
      return /* @__PURE__ */ F("div", { className: j, style: _, children: [
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
            defaultValue: g,
            onChange: I,
            onFocus: B,
            onBlur: O,
            ...y
          }
        ),
        /* @__PURE__ */ F("div", { className: t.controls.className, children: [
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              className: t.controlButton.className,
              onClick: D,
              disabled: d || x,
              tabIndex: -1,
              "aria-label": "Increase value",
              children: /* @__PURE__ */ m(h, { name: "mdi:chevron-up" })
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
              children: /* @__PURE__ */ m(h, { name: "mdi:chevron-down" })
            }
          )
        ] })
      ] });
    }
  )
);
q.displayName = S.FormFieldNumber;
export {
  q as default
};
