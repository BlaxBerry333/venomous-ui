import { jsxs as y, Fragment as L, jsx as f } from "react/jsx-runtime";
import e from "react";
import k from "clsx";
import { COMPONENT_NAMES as S } from "../../../core/constants/componentNames.mjs";
import { POPOVER_CSS_CLASS_NAMES as E } from "../../../core/constants/cssClassNames.mjs";
import { getElementRect as F, calculateFloatingPosition as O } from "../../../core/tools/positioning/index.mjs";
import _ from "../Portal/Portal.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import M from "../../hooks/useStyleInjection/index.mjs";
import { generatePopoverCSS as j } from "../../../core/css/componentStyles/Popover.mjs";
const I = e.memo(
  ({ trigger: w, placement: d = "bottom", offset: g = 8, onOpen: l, onClose: u, className: R, children: C }) => {
    const N = j();
    M(S.Popover, N);
    const [t, p] = e.useState(!1), [s, h] = e.useState(null), [, b] = e.useState(d), a = e.useRef(null), i = e.useRef(null), v = e.useCallback(() => {
      p(!0), l == null || l();
    }, [l]), m = e.useCallback(() => {
      p(!1), u == null || u();
    }, [u]), x = e.useCallback(() => {
      t ? m() : v();
    }, [t, v, m]);
    e.useEffect(() => {
      t || h(null);
    }, [t]);
    const c = e.useCallback(() => {
      if (!a.current || !i.current) return;
      const n = F(a.current), r = i.current.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const o = O({
        triggerRect: n,
        floatingRect: { width: r.width, height: r.height },
        placement: d,
        offset: g
      });
      h(o.position), b(o.actualPlacement);
    }, [d, g]);
    e.useEffect(() => {
      if (!t) return;
      let n, r = 0;
      const o = 10, P = () => {
        i.current && i.current.getBoundingClientRect().width > 0 ? c() : r < o && (r++, n = requestAnimationFrame(P));
      };
      return n = requestAnimationFrame(P), window.addEventListener("scroll", c, !0), window.addEventListener("resize", c), () => {
        cancelAnimationFrame(n), window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", c);
      };
    }, [t, c]), e.useEffect(() => {
      if (!t) return;
      const n = (r) => {
        const o = r.target;
        a.current && !a.current.contains(o) && i.current && !i.current.contains(o) && m();
      };
      return document.addEventListener("mousedown", n), () => {
        document.removeEventListener("mousedown", n);
      };
    }, [t, m]);
    const A = e.useMemo(
      () => ({
        left: s ? `${s.x}px` : 0,
        top: s ? `${s.y}px` : 0,
        visibility: s ? "visible" : "hidden"
      }),
      [s]
    );
    return /* @__PURE__ */ y(L, { children: [
      /* @__PURE__ */ f("div", { ref: a, className: E.trigger.className, onClick: x, children: w }),
      t && /* @__PURE__ */ f(_, { children: /* @__PURE__ */ f(
        "div",
        {
          ref: i,
          className: k(E.base.className, R),
          style: A,
          children: C
        }
      ) })
    ] });
  }
);
I.displayName = S.Popover;
export {
  I as default
};
