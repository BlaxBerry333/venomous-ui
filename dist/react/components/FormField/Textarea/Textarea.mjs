import { jsx as N } from "react/jsx-runtime";
import a from "react";
import L from "clsx";
import { COMPONENT_NAMES as p } from "../../../../core/constants/componentNames.mjs";
import { FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES as e } from "../../../../core/constants/cssClassNames.mjs";
import k from "../../../hooks/useComputedStyle/index.mjs";
import z from "../../../hooks/useFormFieldFocus/index.mjs";
import R from "../../../hooks/useStyleInjection/index.mjs";
import "../../ThemeProvider/ThemeContext.mjs";
import "../../ThemeProvider/ThemeProvider.mjs";
import { generateFormFieldTextareaCSS as D } from "../../../../core/css/componentStyles/FormFieldTextarea.mjs";
const P = a.memo(
  a.forwardRef(
    ({
      variant: u = "outlined",
      size: t = "medium",
      error: h = !1,
      disabled: d = !1,
      fullWidth: F = !0,
      resize: l = "vertical",
      minRows: c = 3,
      maxRows: i,
      autoHeight: f = !1,
      rows: x,
      className: S,
      style: g,
      onFocus: y,
      onBlur: H,
      onChange: r,
      ...E
    }, M) => {
      R(p.FormFieldTextarea, D());
      const T = k(g), { isFocused: _, handleFocus: v, handleBlur: A } = z({ onFocus: y, onBlur: H }), C = L(
        e.base.className,
        d && e.disabled.className,
        _ && e.focused.className,
        h && e.error.className,
        u === "outlined" && e.variantOutlined.className,
        u === "filled" && e.variantFilled.className,
        t === "small" && e.sizeSmall.className,
        t === "medium" && e.sizeMedium.className,
        t === "large" && e.sizeLarge.className,
        F && e.fullWidth.className,
        l === "none" && e.resizeNone.className,
        l === "vertical" && e.resizeVertical.className,
        l === "horizontal" && e.resizeHorizontal.className,
        l === "both" && e.resizeBoth.className,
        S
      ), m = a.useRef(null);
      a.useImperativeHandle(M, () => m.current);
      const n = t === "small" ? 18 : t === "large" ? 24 : 21, o = a.useCallback(() => {
        if (!f || !m.current) return;
        const s = m.current;
        s.style.height = "auto";
        const I = c * n, O = i ? i * n : 1 / 0, j = s.scrollHeight, B = Math.min(Math.max(j, I), O);
        s.style.height = `${B}px`;
      }, [f, c, i, n]);
      a.useEffect(() => {
        o();
      }, [o]);
      const b = a.useCallback(
        (s) => {
          r == null || r(s), o();
        },
        [r, o]
      );
      return /* @__PURE__ */ N("div", { className: C, style: T, children: /* @__PURE__ */ N(
        "textarea",
        {
          ref: m,
          className: e.textarea.className,
          disabled: d,
          rows: x ?? c,
          onFocus: v,
          onBlur: A,
          onChange: b,
          ...E
        }
      ) });
    }
  )
);
P.displayName = p.FormFieldTextarea;
export {
  P as default
};
