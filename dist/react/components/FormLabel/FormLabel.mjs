import { jsxs as s, jsx as r } from "react/jsx-runtime";
import a from "react";
import u from "clsx";
import { COMPONENT_NAMES as t } from "../../../core/constants/componentNames.mjs";
import { FORM_LABEL_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import h from "../Tooltip/Tooltip.mjs";
import L from "../../hooks/useComputedStyle/index.mjs";
import C from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateFormLabelCSS as M } from "../../../core/css/componentStyles/FormLabel.mjs";
const b = a.memo(
  a.forwardRef(
    ({ children: l, required: i = !1, size: o = "medium", tooltip: m, className: c, style: n, ...p }, d) => {
      const f = M();
      C(t.FormLabel, f);
      const N = L(n), S = u(
        e.base.className,
        i && e.required.className,
        o === "small" && e.sizeSmall.className,
        o === "medium" && e.sizeMedium.className,
        o === "large" && e.sizeLarge.className,
        c
      );
      return /* @__PURE__ */ s("label", { ref: d, className: S, style: N, ...p, children: [
        l,
        m && /* @__PURE__ */ r(h, { title: m, children: /* @__PURE__ */ r("span", { className: e.tooltip.className, children: /* @__PURE__ */ s(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ r("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
              /* @__PURE__ */ r("path", { d: "M12 17h.01" })
            ]
          }
        ) }) })
      ] });
    }
  )
);
b.displayName = t.FormLabel;
export {
  b as default
};
