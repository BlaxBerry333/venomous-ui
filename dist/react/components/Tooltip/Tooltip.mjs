import { jsxs as g, Fragment as T, jsx as d } from "react/jsx-runtime";
import { useState as j, useRef as M, useId as x, useCallback as N, cloneElement as B } from "react";
import { COMPONENT_NAMES as I } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as L } from "../../../core/constants/css-classes.mjs";
import { useDelayedToggle as w } from "../../hooks/useDelayedToggle.mjs";
import { useFloatingPosition as A } from "../../hooks/useFloatingPosition.mjs";
import { useMergeRefs as O } from "../../hooks/useMergeRefs.mjs";
import "../../../core/helpers/toast-store.mjs";
import { Portal as V } from "../Portal/Portal.mjs";
const n = L.tooltip;
function _({
  content: S,
  placement: i = "top",
  delay: E = 200,
  disabled: R = !1,
  className: b = "",
  children: s
}) {
  const [r, l] = j(!1), a = M(null), f = M(null), m = x(), { show: u, hide: p } = w(
    N(() => l(!0), []),
    N(() => l(!1), []),
    E,
    100,
    R
  ), { position: c } = A(a, f, i, r), v = s.ref, C = O(a, v), o = s.props, y = B(s, {
    ref: C,
    onMouseEnter: (t) => {
      var e;
      u(), (e = o.onMouseEnter) == null || e.call(o, t);
    },
    onMouseLeave: (t) => {
      var e;
      p(), (e = o.onMouseLeave) == null || e.call(o, t);
    },
    onFocus: (t) => {
      var e;
      u(), (e = o.onFocus) == null || e.call(o, t);
    },
    onBlur: (t) => {
      var e;
      p(), (e = o.onBlur) == null || e.call(o, t);
    },
    "aria-describedby": r ? m : void 0
  }), F = [n.root, n.placements[i], b].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(T, { children: [
    y,
    r && /* @__PURE__ */ d(V, { children: /* @__PURE__ */ g(
      "div",
      {
        ref: f,
        id: m,
        role: "tooltip",
        className: F,
        style: { top: c.top, left: c.left },
        children: [
          S,
          /* @__PURE__ */ d("div", { className: n.arrow })
        ]
      }
    ) })
  ] });
}
_.displayName = I.Tooltip;
export {
  _ as Tooltip
};
