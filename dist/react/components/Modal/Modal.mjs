import { jsx as c, jsxs as h } from "react/jsx-runtime";
import r from "react";
import _ from "clsx";
import { COMPONENT_NAMES as s } from "../../../core/constants/componentNames.mjs";
import { MODAL_CSS_CLASS_NAMES as b } from "../../../core/constants/cssClassNames.mjs";
import { DESIGN_TOKENS as v } from "../../../core/designs/index.mjs";
import A from "../Backdrop/Backdrop.mjs";
import L from "../Card/Card.mjs";
import w from "../../hooks/useComputedStyle/index.mjs";
import x from "../../hooks/useFocusTrap.mjs";
import D from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateModalCSS as j } from "../../../core/css/componentStyles/Modal.mjs";
const R = r.memo(
  ({
    isOpen: e,
    onClose: o,
    closeOnBackdropClick: a = !0,
    closeOnEscape: d = !0,
    maxWidth: l = "sm",
    maxHeight: t = "80vh",
    style: f,
    className: p,
    ModalHeader: u,
    ModalFooter: S,
    children: y
  }) => {
    const k = j();
    D(s.Modal, k);
    const i = r.useRef(null);
    x(i, e);
    const n = w(f), M = r.useMemo(
      () => ({
        "--modal-max-width": v.breakpoints[l].max,
        "--modal-max-height": typeof t == "number" ? `${t}px` : t,
        ...n
      }),
      [l, t, n]
    ), N = r.useCallback(() => {
      a && o && o();
    }, [a, o]);
    r.useEffect(() => {
      if (!e || !d || !o)
        return;
      const m = (E) => {
        E.key === "Escape" && o();
      };
      return document.addEventListener("keydown", m), () => {
        document.removeEventListener("keydown", m);
      };
    }, [e, d, o]);
    const C = r.useCallback((m) => {
      m.stopPropagation();
    }, []);
    return /* @__PURE__ */ c(A, { isOpen: e, onClick: N, children: /* @__PURE__ */ c("div", { ref: i, onClick: C, children: /* @__PURE__ */ h(
      L,
      {
        className: _(b.base.className, p),
        style: M,
        role: "dialog",
        "aria-modal": "true",
        children: [
          u,
          y,
          S
        ]
      }
    ) }) });
  }
);
R.displayName = s.Modal;
export {
  R as default
};
