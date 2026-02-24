import { jsxs as k, Fragment as H, jsx as R } from "react/jsx-runtime";
import { useState as K, useRef as g, useId as O, useCallback as i, cloneElement as b } from "react";
import { COMPONENT_NAMES as q } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as z } from "../../../core/constants/css-classes.mjs";
import { useClickOutside as G } from "../../hooks/useClickOutside.mjs";
import { useDelayedToggle as J } from "../../hooks/useDelayedToggle.mjs";
import { useFloatingPosition as P } from "../../hooks/useFloatingPosition.mjs";
import { useKeydown as Q } from "../../hooks/useKeydown.mjs";
import { useMergeRefs as U } from "../../hooks/useMergeRefs.mjs";
import "../../../core/helpers/toast-store.mjs";
import { Portal as V } from "../Portal/Portal.mjs";
const v = z.popover;
function W({
  content: x,
  placement: d = "bottom",
  trigger: n = "click",
  open: E,
  onOpenChange: l,
  closeOnClickOutside: y = !0,
  closeOnEsc: C = !0,
  disabled: f = !1,
  className: L = "",
  children: c
}) {
  const [j, w] = K(!1), m = E !== void 0, t = m ? E : j, p = g(null), u = g(null), M = O(), o = i(
    (s) => {
      m || w(s), l == null || l(s);
    },
    [m, l]
  ), { show: I, hide: N, cancelHide: A } = J(
    i(() => o(!0), [o]),
    i(() => o(!1), [o]),
    100,
    150,
    f
  ), F = i(() => {
    f || o(!t);
  }, [f, t, o]), { position: S } = P(p, u, d, t);
  Q(
    "Escape",
    i(() => o(!1), [o]),
    t && C
  ), G(
    [p, u],
    i(() => o(!1), [o]),
    t && y
  );
  const T = c.ref, _ = U(p, T), e = c.props, a = {};
  n === "click" ? a.onClick = (s) => {
    var r;
    F(), (r = e.onClick) == null || r.call(e, s);
  } : n === "hover" && (a.onMouseEnter = (s) => {
    var r;
    I(), (r = e.onMouseEnter) == null || r.call(e, s);
  }, a.onMouseLeave = (s) => {
    var r;
    N(), (r = e.onMouseLeave) == null || r.call(e, s);
  });
  const B = b(c, {
    ref: _,
    ...a,
    "aria-expanded": t,
    "aria-haspopup": "dialog",
    "aria-controls": t ? M : void 0
  }), D = [v.root, v.placements[d], L].filter(Boolean).join(" ");
  return /* @__PURE__ */ k(H, { children: [
    B,
    t && /* @__PURE__ */ R(V, { children: /* @__PURE__ */ k(
      "div",
      {
        ref: u,
        id: M,
        role: "dialog",
        className: D,
        style: { top: S.top, left: S.left },
        onMouseEnter: n === "hover" ? A : void 0,
        onMouseLeave: n === "hover" ? N : void 0,
        children: [
          x,
          /* @__PURE__ */ R("div", { className: v.arrow })
        ]
      }
    ) })
  ] });
}
W.displayName = q.Popover;
export {
  W as Popover
};
