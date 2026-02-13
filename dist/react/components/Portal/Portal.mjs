import { jsx as e, Fragment as a } from "react/jsx-runtime";
import { createPortal as l } from "react-dom";
import { COMPONENT_NAMES as n } from "../../../core/constants/component-names.mjs";
function p({ children: t, container: o, containerRef: r, disabled: m = !1 }) {
  /* v8 ignore next -- @preserve SSR environment cannot be simulated in jsdom */
  if (typeof document > "u")
    return null;
  if (m)
    return /* @__PURE__ */ e(a, { children: t });
  const u = o ?? (r == null ? void 0 : r.current) ?? document.body;
  return l(t, u);
}
p.displayName = n.Portal;
export {
  p as Portal
};
