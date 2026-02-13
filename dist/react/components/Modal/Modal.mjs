import { jsx as e, jsxs as u, Fragment as R } from "react/jsx-runtime";
import { forwardRef as j, useId as E, useRef as x, useCallback as B } from "react";
import { COMPONENT_NAMES as F } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as I } from "../../../core/constants/css-classes.mjs";
import { useBodyScrollLock as T } from "../../hooks/useBodyScrollLock.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useFocusTrap as w } from "../../hooks/useFocusTrap.mjs";
import { useInitialFocus as A } from "../../hooks/useInitialFocus.mjs";
import { useKeydown as L } from "../../hooks/useKeydown.mjs";
import { useMergeRefs as O } from "../../hooks/useMergeRefs.mjs";
import { useOverlayState as P } from "../../hooks/useOverlayState.mjs";
import { Portal as _ } from "../Portal/Portal.mjs";
const r = I.modal, z = j(function({
  open: f,
  onClose: a,
  size: p = "md",
  title: s,
  footer: i,
  showCloseButton: N = !0,
  closeIcon: b,
  closeOnBackdrop: n = !0,
  closeOnEsc: C = !0,
  className: h = "",
  children: c,
  ...g
}, k) {
  const m = E(), l = x(null), { isVisible: o, isClosing: t } = P(f);
  A(l, o && !t), T(o), w(l, o), L("Escape", a, o && C);
  const S = B(
    (d) => {
      n && d.target === d.currentTarget && a();
    },
    [n, a]
  ), y = O(l, k);
  if (!o)
    return null;
  const v = [r.backdrop, t ? r.backdropClosing : ""].filter(Boolean).join(" "), M = [r.root, r.sizes[p], t ? r.closing : "", h].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(_, { children: /* @__PURE__ */ e("div", { className: v, onClick: S, role: "presentation", children: /* @__PURE__ */ e(
    "div",
    {
      ref: y,
      className: M,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": s ? m : void 0,
      ...g,
      children: s ? /* @__PURE__ */ u(R, { children: [
        /* @__PURE__ */ u("div", { className: r.header, children: [
          /* @__PURE__ */ e("h2", { id: m, className: r.title, children: s }),
          N && /* @__PURE__ */ e("button", { type: "button", className: r.close, "aria-label": "Close", onClick: a, children: b })
        ] }),
        /* @__PURE__ */ e("div", { className: r.body, children: c }),
        i && /* @__PURE__ */ e("div", { className: r.footer, children: i })
      ] }) : c
    }
  ) }) });
});
z.displayName = F.Modal;
export {
  z as Modal
};
