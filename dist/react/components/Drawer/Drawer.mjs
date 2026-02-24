import { jsxs as l, jsx as e, Fragment as R } from "react/jsx-runtime";
import { forwardRef as j, useId as E, useRef as x, useCallback as B } from "react";
import { COMPONENT_NAMES as D } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as F } from "../../../core/constants/css-classes.mjs";
import { useBodyScrollLock as I } from "../../hooks/useBodyScrollLock.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useFocusTrap as M } from "../../hooks/useFocusTrap.mjs";
import { useInitialFocus as A } from "../../hooks/useInitialFocus.mjs";
import { useKeydown as L } from "../../hooks/useKeydown.mjs";
import { useMergeRefs as O } from "../../hooks/useMergeRefs.mjs";
import { useOverlayState as P } from "../../hooks/useOverlayState.mjs";
import { Portal as T } from "../Portal/Portal.mjs";
const r = F.drawer, _ = j(function({
  open: u,
  onClose: a,
  placement: f = "right",
  size: p = "md",
  title: s,
  footer: n,
  showCloseButton: N = !0,
  closeIcon: b,
  closeOnBackdrop: c = !0,
  closeOnEsc: h = !0,
  className: C = "",
  children: m,
  ...g
}, k) {
  const d = E(), i = x(null), { isVisible: o, isClosing: t } = P(u);
  A(i, o && !t), I(o), M(i, o), L("Escape", a, o && h);
  const w = B(() => {
    c && a();
  }, [c, a]), S = O(i, k);
  if (!o)
    return null;
  const v = [r.backdrop, t ? r.backdropClosing : ""].filter(Boolean).join(" "), y = [
    r.root,
    r.placements[f],
    r.sizes[p],
    t ? r.closing : "",
    C
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l(T, { children: [
    /* @__PURE__ */ e("div", { className: v, onClick: w, role: "presentation", "aria-hidden": "true" }),
    /* @__PURE__ */ e(
      "div",
      {
        ref: S,
        className: y,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": s ? d : void 0,
        ...g,
        children: s ? /* @__PURE__ */ l(R, { children: [
          /* @__PURE__ */ l("div", { className: r.header, children: [
            /* @__PURE__ */ e("h2", { id: d, className: r.title, children: s }),
            N && /* @__PURE__ */ e("button", { type: "button", className: r.close, "aria-label": "Close", onClick: a, children: b })
          ] }),
          /* @__PURE__ */ e("div", { className: r.body, children: m }),
          n && /* @__PURE__ */ e("div", { className: r.footer, children: n })
        ] }) : m
      }
    )
  ] });
});
_.displayName = D.Drawer;
export {
  _ as Drawer
};
