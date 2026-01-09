import { jsx as h } from "react/jsx-runtime";
import m, { useRef as k, useCallback as C } from "react";
import g from "clsx";
import { TABS_CSS_CLASS_NAMES as N } from "../../../core/constants/cssClassNames.mjs";
import R from "../../hooks/useComputedStyle/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { useTabsConfig as D } from "./TabsContext.mjs";
const K = m.memo(
  m.forwardRef(({ children: u, className: f, style: p, ...d }, n) => {
    const { orientation: s } = D(), b = R(p), a = k(null), y = C(
      (t) => {
        var c;
        const i = a.current;
        if (!i) return;
        const o = Array.from(i.querySelectorAll("button:not([disabled])")), r = o.findIndex((x) => x === document.activeElement);
        if (r === -1) return;
        let e = null;
        const l = s === "horizontal", A = l ? "ArrowLeft" : "ArrowUp", S = l ? "ArrowRight" : "ArrowDown";
        switch (t.key) {
          case A:
            e = r > 0 ? r - 1 : o.length - 1;
            break;
          case S:
            e = r < o.length - 1 ? r + 1 : 0;
            break;
          case "Home":
            e = 0;
            break;
          case "End":
            e = o.length - 1;
            break;
        }
        e !== null && (t.preventDefault(), (c = o[e]) == null || c.focus());
      },
      [s]
    ), w = g(N.list.className, f);
    return /* @__PURE__ */ h(
      "div",
      {
        ref: (t) => {
          a.current = t, typeof n == "function" ? n(t) : n && (n.current = t);
        },
        role: "tablist",
        "aria-orientation": s,
        className: w,
        style: b,
        onKeyDown: y,
        ...d,
        children: u
      }
    );
  })
);
K.displayName = "TabsList";
export {
  K as default
};
