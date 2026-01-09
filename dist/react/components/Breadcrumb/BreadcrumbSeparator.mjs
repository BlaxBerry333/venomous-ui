import { jsx as i } from "react/jsx-runtime";
import r from "react";
import c from "clsx";
import { COMPONENT_NAMES as S } from "../../../core/constants/componentNames.mjs";
import { BREADCRUMB_CSS_CLASS_NAMES as d } from "../../../core/constants/cssClassNames.mjs";
import f from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const l = r.memo(
  r.forwardRef(
    ({ children: o = "/", className: a, style: t, ...e }, m) => {
      const s = f(t), p = c(d.separator.className, a);
      return /* @__PURE__ */ i("span", { ref: m, className: p, style: s, "aria-hidden": "true", ...e, children: o });
    }
  )
);
l.displayName = S.BreadcrumbSeparator;
export {
  l as default
};
