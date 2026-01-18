import { jsx as i, jsxs as _ } from "react/jsx-runtime";
import e from "react";
import b from "clsx";
import { COMPONENT_NAMES as f } from "../../../core/constants/componentNames.mjs";
import { MODAL_CSS_CLASS_NAMES as s } from "../../../core/constants/cssClassNames.mjs";
import { DESIGN_TOKENS as v } from "../../../core/designs/index.mjs";
import A from "../Backdrop/Backdrop.mjs";
import L from "../Card/Card.mjs";
import w from "../../hooks/useComputedStyle/index.mjs";
import x from "../../hooks/useFocusTrap.mjs";
import D from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateModalCSS as j } from "../../../core/css/componentStyles/Modal.mjs";
const R = e.memo(
  ({
    isOpen: r,
    onClose: o,
    closeOnBackdropClick: a = !0,
    closeOnEscape: l = !0,
    maxWidth: d = "sm",
    maxHeight: t = "80vh",
    style: p,
    className: u,
    ModalHeader: S,
    ModalFooter: y,
    children: k
  }) => {
    const M = j();
    D(f.Modal, M);
    const n = e.useRef(null);
    x(n, r);
    const c = w(p), N = e.useMemo(
      () => ({
        "--modal-max-width": v.breakpoints[d].max,
        "--modal-max-height": typeof t == "number" ? `${t}px` : t,
        ...c
      }),
      [d, t, c]
    ), C = e.useCallback(() => {
      a && o && o();
    }, [a, o]);
    e.useEffect(() => {
      if (!r || !l || !o)
        return;
      const m = (h) => {
        h.key === "Escape" && o();
      };
      return document.addEventListener("keydown", m), () => {
        document.removeEventListener("keydown", m);
      };
    }, [r, l, o]);
    const E = e.useCallback((m) => {
      m.stopPropagation();
    }, []);
    return /* @__PURE__ */ i(A, { isOpen: r, onClick: C, children: /* @__PURE__ */ i("div", { ref: n, onClick: E, children: /* @__PURE__ */ _(
      L,
      {
        className: b(
          s.base.className,
          r && s.open.className,
          u
        ),
        style: N,
        role: "dialog",
        "aria-modal": "true",
        children: [
          S,
          k,
          y
        ]
      }
    ) }) });
  }
);
R.displayName = f.Modal;
export {
  R as default
};
