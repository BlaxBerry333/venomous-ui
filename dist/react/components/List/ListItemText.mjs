import { jsxs as T, jsx as i } from "react/jsx-runtime";
import n, { useMemo as c } from "react";
import h from "clsx";
import { LIST_CSS_CLASS_NAMES as m } from "../../../core/constants/cssClassNames.mjs";
import L from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
const u = n.memo(
  n.forwardRef(
    ({ primary: l, secondary: o, ellipsis: e = 0, children: f, className: p, style: x, ...y }, N) => {
      const t = L(x), s = e > 0, d = c(() => {
        const r = {};
        return s && (r.WebkitLineClamp = e), t != null && t.color && (r.color = "inherit"), Object.keys(r).length > 0 ? r : void 0;
      }, [s, e, t == null ? void 0 : t.color]), C = c(() => {
        if (s)
          return {
            WebkitLineClamp: e
          };
      }, [s, e]), S = h(
        m.itemText.className,
        s && m.itemTextEllipsis.className,
        p
      ), a = l ?? f;
      return /* @__PURE__ */ T("div", { ref: N, className: S, style: t, ...y, children: [
        a && /* @__PURE__ */ i("span", { className: m.itemTextPrimary.className, style: d, children: a }),
        o && /* @__PURE__ */ i("span", { className: m.itemTextSecondary.className, style: C, children: o })
      ] });
    }
  )
);
u.displayName = "ListItemText";
export {
  u as default
};
