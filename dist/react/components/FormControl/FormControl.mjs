import { jsxs as t, jsx as l } from "react/jsx-runtime";
import C from "react";
import g from "clsx";
import { COMPONENT_NAMES as y } from "../../../core/constants/componentNames.mjs";
import { FORM_CONTROL_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import M from "../FormLabel/FormLabel.mjs";
import { Typography as A } from "../Typography/index.mjs";
import b from "../../hooks/useComputedStyle/index.mjs";
import j from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateFormControlCSS as E } from "../../../core/css/componentStyles/FormControl.mjs";
const w = C.memo(
  C.forwardRef(
    ({
      children: x,
      label: o,
      row: m = !1,
      labelWidth: s,
      labelAlign: h = "right",
      labelTooltip: F,
      required: O = !1,
      helperText: T,
      error: a = !1,
      errorMessage: n,
      size: r = "medium",
      className: _,
      style: v,
      ...c
    }, i) => {
      const L = E();
      j(y.FormControl, L);
      const d = b(v), p = g(
        e.base.className,
        m && e.row.className,
        a && e.error.className,
        r === "small" && e.sizeSmall.className,
        r === "medium" && e.sizeMedium.className,
        r === "large" && e.sizeLarge.className,
        _
      ), N = a && n ? n : T, R = m ? {
        width: typeof s == "number" ? `${s}px` : s,
        textAlign: h
      } : void 0, f = () => o ? /* @__PURE__ */ l("div", { className: e.labelWrapper.className, style: R, children: /* @__PURE__ */ l(M, { required: O, size: r, tooltip: F, children: o }) }) : null, u = () => N ? /* @__PURE__ */ l(A.Text, { as: "small", className: e.helperText.className, children: N }) : null, S = () => /* @__PURE__ */ l("div", { className: e.field.className, children: x });
      return m ? /* @__PURE__ */ t("div", { ref: i, className: p, style: d, ...c, children: [
        f(),
        /* @__PURE__ */ t("div", { className: e.content.className, children: [
          S(),
          u()
        ] })
      ] }) : /* @__PURE__ */ t("div", { ref: i, className: p, style: d, ...c, children: [
        f(),
        S(),
        u()
      ] });
    }
  )
);
w.displayName = y.FormControl;
export {
  w as default
};
