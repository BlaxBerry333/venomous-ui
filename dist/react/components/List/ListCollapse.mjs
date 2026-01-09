import { jsx as e } from "react/jsx-runtime";
import o from "react";
import f from "clsx";
import { LIST_CSS_CLASS_NAMES as s } from "../../../core/constants/cssClassNames.mjs";
import d from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const n = o.memo(
  o.forwardRef(
    ({ open: l = !1, children: a, className: m, style: t, ...p }, r) => {
      const c = d(t), i = f(
        s.collapse.className,
        l && s.collapseOpen.className,
        m
      );
      return /* @__PURE__ */ e("div", { ref: r, className: i, style: c, ...p, children: /* @__PURE__ */ e("div", { className: s.collapseContent.className, children: a }) });
    }
  )
);
n.displayName = "ListCollapse";
export {
  n as default
};
