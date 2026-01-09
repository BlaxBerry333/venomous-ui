import { jsx as r, jsxs as E } from "react/jsx-runtime";
import l from "react";
import o from "clsx";
import { COMPONENT_NAMES as A } from "../../../core/constants/componentNames.mjs";
import { BREADCRUMB_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import x from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const y = l.memo(
  l.forwardRef(
    ({
      as: i,
      active: s = !1,
      disabled: a = !1,
      icon: m,
      children: c,
      className: n,
      style: p,
      ...N
    }, d) => {
      const t = i || (s ? "span" : "a"), f = t !== "span", u = x(p), S = o(
        e.item.className,
        s && e.itemActive.className,
        a && e.itemDisabled.className
      ), C = o(e.link.className, n);
      return /* @__PURE__ */ r("li", { className: S, children: /* @__PURE__ */ E(
        t,
        {
          ref: d,
          className: C,
          style: u,
          "aria-current": s ? "page" : void 0,
          "aria-disabled": f && a ? !0 : void 0,
          ...N,
          children: [
            m && /* @__PURE__ */ r("span", { className: e.icon.className, children: m }),
            c
          ]
        }
      ) });
    }
  )
);
y.displayName = A.BreadcrumbItem;
export {
  y as default
};
