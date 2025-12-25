import { jsx as r, jsxs as C } from "react/jsx-runtime";
import t from "react";
import l from "clsx";
import { COMPONENT_NAMES as A } from "../../../core/constants/componentNames.mjs";
import { BREADCRUMB_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import E from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const x = t.memo(
  t.forwardRef(
    ({
      as: o,
      active: s = !1,
      disabled: a = !1,
      icon: m,
      children: i,
      className: c,
      style: n,
      ...p
    }, N) => {
      const d = o || (s ? "span" : "a"), f = E(n), u = l(
        e.item.className,
        s && e.itemActive.className,
        a && e.itemDisabled.className
      ), S = l(e.link.className, c);
      return /* @__PURE__ */ r("li", { className: u, children: /* @__PURE__ */ C(
        d,
        {
          ref: N,
          className: S,
          style: f,
          "aria-current": s ? "page" : void 0,
          "aria-disabled": a || void 0,
          ...p,
          children: [
            m && /* @__PURE__ */ r("span", { className: e.icon.className, children: m }),
            i
          ]
        }
      ) });
    }
  )
);
x.displayName = A.BreadcrumbItem;
export {
  x as default
};
