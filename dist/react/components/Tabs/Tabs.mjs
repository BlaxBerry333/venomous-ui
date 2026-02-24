import { jsx as g } from "react/jsx-runtime";
import { createContext as P, forwardRef as S, useState as K, useRef as $, useCallback as C, useMemo as O, useEffect as z, useContext as B } from "react";
import { COMPONENT_NAMES as I } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as H } from "../../../core/constants/css-classes.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useMergeRefs as _ } from "../../hooks/useMergeRefs.mjs";
const p = H.tabs, D = P(null);
function R() {
  const v = B(D);
  if (!v)
    throw new Error("Tabs compound components must be used within a Tabs component");
  return v;
}
const j = S(function({
  defaultValue: e,
  value: s,
  onValueChange: c,
  orientation: l = "horizontal",
  variant: o = "line",
  unmountStrategy: i = "keepMounted",
  className: m = "",
  children: u,
  ...b
}, f) {
  const [h, T] = K(e ?? ""), a = s !== void 0, x = a ? s : h, n = $(/* @__PURE__ */ new Map()), d = C(
    (t) => {
      a || T(t), c == null || c(t);
    },
    [a, c]
  ), r = C((t, A) => {
    n.current.set(t, { disabled: A });
  }, []), N = C((t) => {
    n.current.delete(t);
  }, []), y = C(() => Array.from(n.current.entries()).map(([t, { disabled: A }]) => ({
    value: t,
    disabled: A
  })), []), k = O(
    () => ({
      value: x,
      onValueChange: d,
      orientation: l,
      variant: o,
      unmountStrategy: i,
      registerTab: r,
      unregisterTab: N,
      getTabs: y
    }),
    [x, d, l, o, i, r, N, y]
  ), w = [p.root, p.orientations[l], p.variants[o], m].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(D.Provider, { value: k, children: /* @__PURE__ */ g("div", { ref: f, className: w, ...b, children: u }) });
});
j.displayName = I.Tabs;
const E = S(function({ className: e = "", children: s, ...c }, l) {
  const { orientation: o, getTabs: i, onValueChange: m, value: u } = R(), b = $(null), f = _(b, l), h = C(
    (a) => {
      var w;
      const n = i().filter((t) => !t.disabled);
      if (n.length === 0) return;
      const d = n.findIndex((t) => t.value === u);
      let r = d;
      const N = o === "horizontal", y = N ? "ArrowLeft" : "ArrowUp", k = N ? "ArrowRight" : "ArrowDown";
      switch (a.key) {
        case y:
          a.preventDefault(), r = d <= 0 ? n.length - 1 : d - 1;
          break;
        case k:
          a.preventDefault(), r = d >= n.length - 1 ? 0 : d + 1;
          break;
        case "Home":
          a.preventDefault(), r = 0;
          break;
        case "End":
          a.preventDefault(), r = n.length - 1;
          break;
        default:
          return;
      }
      if (r !== d && n[r]) {
        m(n[r].value);
        const t = (w = b.current) == null ? void 0 : w.querySelector(
          `[data-tabs-value="${CSS.escape(n[r].value)}"]`
        );
        t == null || t.focus();
      }
    },
    [i, u, o, m]
  ), T = [p.list, e].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(
    "div",
    {
      ref: f,
      className: T,
      role: "tablist",
      "aria-orientation": o,
      onKeyDown: h,
      ...c,
      children: s
    }
  );
});
E.displayName = `${I.Tabs}.List`;
const L = S(function({ value: e, disabled: s = !1, className: c = "", children: l, ...o }, i) {
  const { value: m, onValueChange: u, registerTab: b, unregisterTab: f } = R(), h = `tabs-panel-${e}`, T = `tabs-tab-${e}`, a = m === e;
  z(() => (b(e, s), () => f(e)), [e, s, b, f]);
  const x = C(() => {
    s || u(e);
  }, [s, u, e]), n = [
    p.tab,
    a ? p.tabStates.active : "",
    s ? p.tabStates.disabled : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(
    "button",
    {
      ref: i,
      type: "button",
      id: T,
      className: n,
      role: "tab",
      "aria-selected": a,
      "aria-controls": h,
      tabIndex: a ? 0 : -1,
      disabled: s,
      "data-tabs-value": e,
      onClick: x,
      ...o,
      children: l
    }
  );
});
L.displayName = `${I.Tabs}.Tab`;
const M = S(function({ value: e, className: s = "", children: c, ...l }, o) {
  const { value: i, unmountStrategy: m } = R(), u = `tabs-panel-${e}`, b = `tabs-tab-${e}`, f = i === e;
  if (!(m === "unmountOnHide" ? f : !0))
    return null;
  const T = [p.panel, s].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(
    "div",
    {
      ref: o,
      id: u,
      className: T,
      role: "tabpanel",
      "aria-labelledby": b,
      hidden: !f,
      tabIndex: 0,
      ...l,
      children: c
    }
  );
});
M.displayName = `${I.Tabs}.Panel`;
const W = Object.assign(j, {
  List: E,
  Tab: L,
  Panel: M
});
export {
  j as Tabs,
  W as TabsCompound,
  E as TabsList,
  M as TabsPanel,
  L as TabsTab
};
