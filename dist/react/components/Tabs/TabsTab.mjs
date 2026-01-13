import { jsxs as C, jsx as r } from "react/jsx-runtime";
import c, { useCallback as D } from "react";
import I from "clsx";
import { TABS_CSS_CLASS_NAMES as e } from "../../../core/constants/cssClassNames.mjs";
import _ from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { useTabsValue as j, useTabsApi as R, useTabsConfig as V } from "./TabsContext.mjs";
const w = c.memo(
  c.forwardRef(
    ({ value: a, disabled: b = !1, StartIcon: i, EndIcon: m, children: d, className: n, style: p, onClick: t, ...f }, N) => {
      const u = j(), { onChange: l, getTabId: T, getPanelId: S } = R(), { disabled: A } = V(), h = _(p), o = u === a, s = b || A, x = D(
        (g) => {
          s || (l(a), t == null || t(g));
        },
        [s, l, a, t]
      ), y = I(
        e.tab.className,
        o && e.tabActive.className,
        s && e.tabDisabled.className,
        n
      );
      return /* @__PURE__ */ C(
        "button",
        {
          ref: N,
          type: "button",
          role: "tab",
          id: T(a),
          "aria-selected": o,
          "aria-controls": S(a),
          "aria-disabled": s || void 0,
          tabIndex: o ? 0 : -1,
          disabled: s,
          className: y,
          style: h,
          onClick: x,
          ...f,
          children: [
            i && /* @__PURE__ */ r("span", { className: e.tabIcon.className, children: i }),
            d,
            m && /* @__PURE__ */ r("span", { className: e.tabIcon.className, children: m })
          ]
        }
      );
    }
  )
);
w.displayName = "TabsTab";
export {
  w as default
};
