import { jsx as h } from "react/jsx-runtime";
import a from "react";
import k from "clsx";
import { COMPONENT_NAMES as F } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import "../../FormControl/FormControl.mjs";
import { useFormControlContext as z } from "../../FormControl/FormControlContext.mjs";
import R from "../../../hooks/useComputedStyle/index.mjs";
import D from "../../../hooks/useFormFieldFocus/index.mjs";
import P from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldTextareaCSS as V } from "../../../../core/css/componentStyles/FormFieldTextarea.mjs";
const W = a.memo(
  a.forwardRef(
    ({
      variant: d = "outlined",
      size: t = "medium",
      error: f = !1,
      disabled: N = !1,
      fullWidth: x = !0,
      resize: l = "vertical",
      minRows: i = 3,
      maxRows: c,
      autoHeight: p = !1,
      rows: S,
      className: g,
      style: y,
      onFocus: H,
      onBlur: T,
      onChange: r,
      ...v
    }, E) => {
      P(F.FormFieldTextarea, V());
      const M = R(y), n = z(), { isFocused: b, handleFocus: C, handleBlur: _ } = D({ onFocus: H, onBlur: T }), A = k(
        e.base.className,
        N && e.disabled.className,
        b && e.focused.className,
        f && e.error.className,
        d === "outlined" && e.variantOutlined.className,
        d === "filled" && e.variantFilled.className,
        t === "small" && e.sizeSmall.className,
        t === "medium" && e.sizeMedium.className,
        t === "large" && e.sizeLarge.className,
        x && e.fullWidth.className,
        l === "none" && e.resizeNone.className,
        l === "vertical" && e.resizeVertical.className,
        l === "horizontal" && e.resizeHorizontal.className,
        l === "both" && e.resizeBoth.className,
        g
      ), o = a.useRef(null);
      a.useImperativeHandle(E, () => o.current);
      const u = t === "small" ? 18 : t === "large" ? 24 : 21, m = a.useCallback(() => {
        if (!p || !o.current) return;
        const s = o.current;
        s.style.height = "auto";
        const O = i * u, j = c ? c * u : 1 / 0, B = s.scrollHeight, L = Math.min(Math.max(B, O), j);
        s.style.height = `${L}px`;
      }, [p, i, c, u]);
      a.useEffect(() => {
        m();
      }, [m]);
      const I = a.useCallback(
        (s) => {
          r == null || r(s), m();
        },
        [r, m]
      );
      return /* @__PURE__ */ h("div", { className: A, style: M, children: /* @__PURE__ */ h(
        "textarea",
        {
          ref: o,
          className: e.textarea.className,
          disabled: N,
          rows: S ?? i,
          "aria-invalid": f || void 0,
          "aria-describedby": n == null ? void 0 : n.helperTextId,
          onFocus: C,
          onBlur: _,
          onChange: I,
          ...v
        }
      ) });
    }
  )
);
W.displayName = F.FormFieldTextarea;
export {
  W as default
};
