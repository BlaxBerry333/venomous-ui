import { jsx as n, jsxs as E } from "react/jsx-runtime";
import t from "react";
import h from "clsx";
import { COMPONENT_NAMES as c } from "../../../core/constants/componentNames.mjs";
import { MODAL_CSS_CLASS_NAMES as _ } from "../../../core/constants/cssClassNames.mjs";
import { DESIGN_TOKENS as b } from "../../../core/designs/index.mjs";
import v from "../Backdrop/Backdrop.mjs";
import A from "../Card/Card.mjs";
import L from "../../hooks/useComputedStyle/index.mjs";
import w from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generateModalCSS as x } from "../../../core/css/componentStyles/Modal.mjs";
const D = t.memo(
  ({
    isOpen: m,
    onClose: o,
    closeOnBackdropClick: a = !0,
    closeOnEscape: d = !0,
    maxWidth: i = "sm",
    maxHeight: r = "80vh",
    style: p,
    className: s,
    ModalHeader: f,
    ModalFooter: u,
    children: S
  }) => {
    const y = x();
    w(c.Modal, y);
    const l = L(p), k = t.useMemo(
      () => ({
        "--modal-max-width": b.breakpoints[i].max,
        "--modal-max-height": typeof r == "number" ? `${r}px` : r,
        ...l
      }),
      [i, r, l]
    ), M = t.useCallback(() => {
      a && o && o();
    }, [a, o]);
    t.useEffect(() => {
      if (!m || !d || !o)
        return;
      const e = (C) => {
        C.key === "Escape" && o();
      };
      return document.addEventListener("keydown", e), () => {
        document.removeEventListener("keydown", e);
      };
    }, [m, d, o]);
    const N = t.useCallback((e) => {
      e.stopPropagation();
    }, []);
    return /* @__PURE__ */ n(v, { isOpen: m, onClick: M, children: /* @__PURE__ */ n("div", { onClick: N, children: /* @__PURE__ */ E(
      A,
      {
        className: h(_.base.className, s),
        style: k,
        role: "dialog",
        "aria-modal": "true",
        children: [
          f,
          S,
          u
        ]
      }
    ) }) });
  }
);
D.displayName = c.Modal;
export {
  D as default
};
