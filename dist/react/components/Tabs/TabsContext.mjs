import { jsx as r } from "react/jsx-runtime";
import { createContext as c, useRef as v, useMemo as s, useContext as a } from "react";
const T = c(null), m = c(null), p = c(null);
function h() {
  const t = a(T);
  if (t === null)
    throw new Error("Tabs compound components must be used within <Tabs>");
  return t.value;
}
function g() {
  const t = a(m);
  if (!t)
    throw new Error("Tabs compound components must be used within <Tabs>");
  return t;
}
function P() {
  const t = a(p);
  if (!t)
    throw new Error("Tabs compound components must be used within <Tabs>");
  return t;
}
function E() {
  const t = h(), n = g(), e = P();
  return {
    value: t,
    ...n,
    ...e
  };
}
function A({
  value: t,
  onChange: n,
  variant: e,
  size: i,
  orientation: l,
  disabled: b,
  id: f,
  children: x
}) {
  const o = v(f);
  o.current = f;
  const d = s(() => ({ value: t }), [t]), C = s(
    () => ({
      onChange: n,
      getTabId: (u) => `${o.current}-tab-${u}`,
      getPanelId: (u) => `${o.current}-panel-${u}`
    }),
    [n]
  ), w = s(
    () => ({ variant: e, size: i, orientation: l, disabled: b }),
    [e, i, l, b]
  );
  return /* @__PURE__ */ r(p.Provider, { value: w, children: /* @__PURE__ */ r(m.Provider, { value: C, children: /* @__PURE__ */ r(T.Provider, { value: d, children: x }) }) });
}
export {
  A as TabsProvider,
  g as useTabsApi,
  P as useTabsConfig,
  E as useTabsContext,
  h as useTabsValue
};
