import { jsx as u } from "react/jsx-runtime";
import t from "react";
import S from "clsx";
import { TABS_CSS_CLASS_NAMES as s } from "../../../core/constants/cssClassNames.mjs";
import N from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { useTabsValue as T, useTabsApi as y } from "./TabsContext.mjs";
const A = t.memo(
  t.forwardRef(
    ({ value: e, keepMounted: o = !1, children: l, className: m, style: r, ...i }, n) => {
      const p = T(), { getTabId: d, getPanelId: c } = y(), f = N(r), a = p === e;
      if (!a && !o)
        return null;
      const b = S(
        s.panel.className,
        !a && s.panelHidden.className,
        m
      );
      return /* @__PURE__ */ u(
        "div",
        {
          ref: n,
          role: "tabpanel",
          id: c(e),
          "aria-labelledby": d(e),
          hidden: !a,
          tabIndex: 0,
          className: b,
          style: f,
          ...i,
          children: l
        }
      );
    }
  )
);
A.displayName = "TabsPanel";
export {
  A as default
};
