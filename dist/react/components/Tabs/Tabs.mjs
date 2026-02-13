import { jsx as N } from "react/jsx-runtime";
import { createContext as R, forwardRef as g, useState as M, useRef as K, useCallback as x, useMemo as O, useEffect as z, useContext as B } from "react";
import { COMPONENT_NAMES as I } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as H } from "../../../core/constants/css-classes.mjs";
const p = H.tabs, A = R(null);
function k() {
  const v = B(A);
  if (!v)
    throw new Error("Tabs compound components must be used within a Tabs component");
  return v;
}
const $ = g(function({
  defaultValue: t,
  value: s,
  onValueChange: r,
  orientation: i = "horizontal",
  variant: a = "line",
  unmountStrategy: u = "keepMounted",
  className: f = "",
  children: b,
  ...m
}, d) {
  const [c, h] = M(t ?? ""), e = s !== void 0, o = e ? s : c, n = K(/* @__PURE__ */ new Map()), C = x(
    (T) => {
      e || h(T), r == null || r(T);
    },
    [e, r]
  ), y = x((T, S) => {
    n.current.set(T, { disabled: S });
  }, []), w = x((T) => {
    n.current.delete(T);
  }, []), l = x(() => Array.from(n.current.entries()).map(([T, { disabled: S }]) => ({
    value: T,
    disabled: S
  })), []), L = O(
    () => ({
      value: o,
      onValueChange: C,
      orientation: i,
      variant: a,
      unmountStrategy: u,
      registerTab: y,
      unregisterTab: w,
      getTabs: l
    }),
    [o, C, i, a, u, y, w, l]
  ), P = [p.root, p.orientations[i], p.variants[a], f].filter(Boolean).join(" ");
  return /* @__PURE__ */ N(A.Provider, { value: L, children: /* @__PURE__ */ N("div", { ref: d, className: P, ...m, children: b }) });
});
$.displayName = I.Tabs;
const D = g(function({ className: t = "", children: s, ...r }, i) {
  const { orientation: a, getTabs: u, onValueChange: f, value: b } = k(), m = x(
    (c) => {
      const e = u().filter((l) => !l.disabled);
      if (e.length === 0) return;
      const o = e.findIndex((l) => l.value === b);
      let n = o;
      const C = a === "horizontal", y = C ? "ArrowLeft" : "ArrowUp", w = C ? "ArrowRight" : "ArrowDown";
      switch (c.key) {
        case y:
          c.preventDefault(), n = o <= 0 ? e.length - 1 : o - 1;
          break;
        case w:
          c.preventDefault(), n = o >= e.length - 1 ? 0 : o + 1;
          break;
        case "Home":
          c.preventDefault(), n = 0;
          break;
        case "End":
          c.preventDefault(), n = e.length - 1;
          break;
        default:
          return;
      }
      if (n !== o && e[n]) {
        f(e[n].value);
        const l = document.querySelector(`[data-tabs-value="${e[n].value}"]`);
        l == null || l.focus();
      }
    },
    [u, b, a, f]
  ), d = [p.list, t].filter(Boolean).join(" ");
  return /* @__PURE__ */ N(
    "div",
    {
      ref: i,
      className: d,
      role: "tablist",
      "aria-orientation": a,
      onKeyDown: m,
      ...r,
      children: s
    }
  );
});
D.displayName = `${I.Tabs}.List`;
const j = g(function({ value: t, disabled: s = !1, className: r = "", children: i, ...a }, u) {
  const { value: f, onValueChange: b, registerTab: m, unregisterTab: d } = k(), c = `tabs-panel-${t}`, h = `tabs-tab-${t}`, e = f === t;
  z(() => (m(t, s), () => d(t)), [t, s, m, d]);
  const o = x(() => {
    s || b(t);
  }, [s, b, t]), n = [
    p.tab,
    e ? p.tabStates.active : "",
    s ? p.tabStates.disabled : "",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ N(
    "button",
    {
      ref: u,
      type: "button",
      id: h,
      className: n,
      role: "tab",
      "aria-selected": e,
      "aria-controls": c,
      tabIndex: e ? 0 : -1,
      disabled: s,
      "data-tabs-value": t,
      onClick: o,
      ...a,
      children: i
    }
  );
});
j.displayName = `${I.Tabs}.Tab`;
const E = g(function({ value: t, className: s = "", children: r, ...i }, a) {
  const { value: u, unmountStrategy: f } = k(), b = `tabs-panel-${t}`, m = `tabs-tab-${t}`, d = u === t;
  if (!(f === "unmountOnHide" ? d : !0))
    return null;
  const h = [p.panel, s].filter(Boolean).join(" ");
  return /* @__PURE__ */ N(
    "div",
    {
      ref: a,
      id: b,
      className: h,
      role: "tabpanel",
      "aria-labelledby": m,
      hidden: !d,
      tabIndex: 0,
      ...i,
      children: r
    }
  );
});
E.displayName = `${I.Tabs}.Panel`;
const G = Object.assign($, {
  List: D,
  Tab: j,
  Panel: E
});
export {
  $ as Tabs,
  G as TabsCompound,
  D as TabsList,
  E as TabsPanel,
  j as TabsTab
};
