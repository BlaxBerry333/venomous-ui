import { jsxs as F, Fragment as I, jsx as f } from "react/jsx-runtime";
import e from "react";
import O from "clsx";
import { COMPONENT_NAMES as y } from "../../../core/constants/componentNames.mjs";
import { POPOVER_CSS_CLASS_NAMES as P } from "../../../core/constants/cssClassNames.mjs";
import { getElementRect as _, calculateFloatingPosition as M } from "../../../core/tools/positioning/index.mjs";
import $ from "../Portal/Portal.mjs";
import j from "../../hooks/useComputedStyle/index.mjs";
import q from "../../hooks/useStyleInjection/index.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import { generatePopoverCSS as z } from "../../../core/css/componentStyles/Popover.mjs";
const B = e.memo(
  ({ trigger: R, placement: d = "bottom", offset: p = 8, onOpen: u, onClose: m, className: C, style: k, children: x }) => {
    const L = z();
    q(y.Popover, L);
    const g = e.useId(), v = j(k), [t, h] = e.useState(!1), [s, E] = e.useState(null), [, N] = e.useState(d), b = e.useMemo(
      () => ({
        ...v,
        left: s ? `${s.x}px` : 0,
        top: s ? `${s.y}px` : 0,
        visibility: s ? "visible" : "hidden"
      }),
      [s, v]
    ), l = e.useRef(null), o = e.useRef(null), w = e.useCallback(() => {
      h(!0), u == null || u();
    }, [u]), c = e.useCallback(() => {
      h(!1), m == null || m();
    }, [m]), A = e.useCallback(() => {
      t ? c() : w();
    }, [t, w, c]);
    e.useEffect(() => {
      t || E(null);
    }, [t]);
    const a = e.useCallback(() => {
      if (!l.current || !o.current) return;
      const r = _(l.current), n = o.current.getBoundingClientRect();
      if (n.width === 0 || n.height === 0) return;
      const i = M({
        triggerRect: r,
        floatingRect: { width: n.width, height: n.height },
        placement: d,
        offset: p
      });
      E(i.position), N(i.actualPlacement);
    }, [d, p]);
    return e.useEffect(() => {
      if (!t) return;
      let r, n = 0;
      const i = 10, S = () => {
        o.current && o.current.getBoundingClientRect().width > 0 ? a() : n < i && (n++, r = requestAnimationFrame(S));
      };
      return r = requestAnimationFrame(S), window.addEventListener("scroll", a, !0), window.addEventListener("resize", a), () => {
        cancelAnimationFrame(r), window.removeEventListener("scroll", a, !0), window.removeEventListener("resize", a);
      };
    }, [t, a]), e.useEffect(() => {
      if (!t) return;
      const r = (n) => {
        const i = n.target;
        l.current && !l.current.contains(i) && o.current && !o.current.contains(i) && c();
      };
      return document.addEventListener("mousedown", r), () => {
        document.removeEventListener("mousedown", r);
      };
    }, [t, c]), e.useEffect(() => {
      if (!t) return;
      const r = (n) => {
        n.key === "Escape" && c();
      };
      return document.addEventListener("keydown", r), () => {
        document.removeEventListener("keydown", r);
      };
    }, [t, c]), /* @__PURE__ */ F(I, { children: [
      /* @__PURE__ */ f(
        "div",
        {
          ref: l,
          className: P.trigger.className,
          onClick: A,
          "aria-expanded": t,
          "aria-haspopup": "dialog",
          "aria-controls": `popover-${g}`,
          children: R
        }
      ),
      t && /* @__PURE__ */ f($, { children: /* @__PURE__ */ f(
        "div",
        {
          ref: o,
          id: `popover-${g}`,
          role: "dialog",
          className: O(P.base.className, C),
          style: b,
          children: x
        }
      ) })
    ] });
  }
);
B.displayName = y.Popover;
export {
  B as default
};
