import { jsx as t, jsxs as f } from "react/jsx-runtime";
import l, { useState as v, useCallback as w, useMemo as D } from "react";
import F from "clsx";
import { COMPONENT_NAMES as C } from "../../../core/constants/componentNames.mjs";
import { BREADCRUMB_CSS_CLASS_NAMES as o } from "../../../core/constants/cssClassNames.mjs";
import L from "../../hooks/useComputedStyle/index.mjs";
import O from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import b from "./BreadcrumbSeparator.mjs";
import { generateBreadcrumbCSS as U } from "../../../core/css/componentStyles/Breadcrumb.mjs";
const P = l.memo(
  l.forwardRef(
    ({
      as: S,
      separator: c = "/",
      maxItems: n,
      itemsBeforeCollapse: i = 1,
      itemsAfterCollapse: u = 1,
      children: a,
      className: y,
      style: N,
      ...k
    }, E) => {
      const B = S || "nav", h = U();
      O(C.Breadcrumb, h);
      const R = L(N), g = F(
        o.root.className,
        o.root.className,
        y
      ), [d, A] = v(!1), M = w(() => {
        A(!0);
      }, []), p = D(() => {
        const r = (Array.isArray(a) ? a.flat() : [a]).filter((e) => e != null && e !== !1 && e !== !0).map((e, j) => ({ key: l.isValidElement(e) && e.key != null ? String(e.key) : `item-${j}`, element: e, isCollapsed: !1 }));
        if (!(n && !d && r.length > n))
          return r;
        const _ = r.slice(0, i), I = r.slice(-u);
        return [..._, { key: "collapsed", element: null, isCollapsed: !0 }, ...I];
      }, [a, n, d, i, u]), x = () => p.map((s, r) => {
        const m = r === p.length - 1;
        return s.isCollapsed ? /* @__PURE__ */ f(l.Fragment, { children: [
          /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: o.collapsed.className,
              onClick: M,
              "aria-label": "Show more breadcrumbs",
              children: "..."
            }
          ) }),
          !m && /* @__PURE__ */ t(b, { children: c })
        ] }, s.key) : /* @__PURE__ */ f(l.Fragment, { children: [
          s.element,
          !m && /* @__PURE__ */ t(b, { children: c })
        ] }, s.key);
      });
      return /* @__PURE__ */ t(B, { ref: E, className: g, style: R, "aria-label": "Breadcrumb", ...k, children: /* @__PURE__ */ t("ol", { className: o.list.className, children: x() }) });
    }
  )
);
P.displayName = C.Breadcrumb;
export {
  P as default
};
