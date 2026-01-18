import { jsxs as n, jsx as l } from "react/jsx-runtime";
import t from "react";
import I from "clsx";
import { COMPONENT_NAMES as h } from "../../../core/constants/componentNames.mjs";
import { FORM_CONTROL_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import b from "../FormLabel/FormLabel.mjs";
import { Typography as j } from "../Typography/index.mjs";
import E from "../../hooks/useComputedStyle/index.mjs";
import $ from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { FormControlContext as w } from "./FormControlContext.mjs";
import { generateFormControlCSS as H } from "../../../core/css/componentStyles/FormControl.mjs";
const P = t.memo(
  t.forwardRef(
    ({
      children: y,
      label: c,
      row: s = !1,
      labelWidth: m,
      labelAlign: v = "right",
      labelTooltip: F,
      required: T = !1,
      helperText: O,
      error: o = !1,
      errorMessage: d,
      size: r = "medium",
      className: _,
      style: L,
      ...p
    }, N) => {
      const M = H();
      $(h.FormControl, M);
      const R = t.useId(), f = E(L), u = I(
        e.base.className,
        s && e.row.className,
        o && e.error.className,
        r === "small" && e.sizeSmall.className,
        r === "medium" && e.sizeMedium.className,
        r === "large" && e.sizeLarge.className,
        _
      ), a = o && d ? d : O, i = a ? `helper-${R}` : void 0, g = t.useMemo(() => ({ helperTextId: i, error: o }), [i, o]), A = s ? {
        width: typeof m == "number" ? `${m}px` : m,
        textAlign: v
      } : void 0, C = () => c ? /* @__PURE__ */ l("div", { className: e.labelWrapper.className, style: A, children: /* @__PURE__ */ l(b, { required: T, size: r, tooltip: F, children: c }) }) : null, S = () => a ? /* @__PURE__ */ l(
        j.Text,
        {
          as: "small",
          id: i,
          "aria-live": "polite",
          className: e.helperText.className,
          children: a
        }
      ) : null, x = () => /* @__PURE__ */ l(w.Provider, { value: g, children: /* @__PURE__ */ l("div", { className: e.field.className, children: y }) });
      return s ? /* @__PURE__ */ n("div", { ref: N, className: u, style: f, ...p, children: [
        C(),
        /* @__PURE__ */ n("div", { className: e.content.className, children: [
          x(),
          S()
        ] })
      ] }) : /* @__PURE__ */ n("div", { ref: N, className: u, style: f, ...p, children: [
        C(),
        x(),
        S()
      ] });
    }
  )
);
P.displayName = h.FormControl;
export {
  P as default
};
