import { jsxs as O, jsx as h } from "react/jsx-runtime";
import s from "react";
import D from "clsx";
import { COMPONENT_NAMES as N } from "../../../core/constants/componentNames.mjs";
import { TOAST_CSS_CLASS_NAMES as l } from "../../../core/constants/cssClassNames.mjs";
import L from "../Portal/Portal.mjs";
import "../ThemeProvider/ThemeContext.mjs";
import "../ThemeProvider/ThemeProvider.mjs";
import w from "../../hooks/useStyleInjection/index.mjs";
import I from "./Toast.mjs";
import { ToastAPIContext as P } from "./ToastContext.mjs";
import { generateToastCSS as k } from "../../../core/css/componentStyles/Toast.mjs";
const f = {
  placement: "top-right",
  duration: 4e3,
  maxCount: 5,
  gap: 12,
  offset: 16
}, V = 150;
function j(a, i) {
  switch (i.type) {
    case "ADD":
      return {
        toasts: [...a.toasts, i.toast]
      };
    case "SET":
      return {
        toasts: a.toasts.map((r) => r.id !== i.id ? r : {
          ...r,
          ...i.options,
          // Ensure variant is preserved if not provided
          variant: i.options.variant ?? r.variant
        })
      };
    case "SET_STATE":
      return {
        toasts: a.toasts.map((r) => r.id === i.id ? { ...r, state: i.state } : r)
      };
    case "REMOVE": {
      const r = a.toasts.find((c) => c.id === i.id);
      return r != null && r.resolve && r.resolve(), {
        toasts: a.toasts.filter((c) => c.id !== i.id)
      };
    }
    case "REMOVE_ALL":
      return a.toasts.forEach((r) => {
        r.resolve && r.resolve();
      }), {
        toasts: []
      };
    default:
      return a;
  }
}
function B(a) {
  switch (a) {
    case "top-right":
      return l.placementTopRight.className;
    case "top-center":
      return l.placementTopCenter.className;
    case "top-left":
      return l.placementTopLeft.className;
    case "bottom-right":
      return l.placementBottomRight.className;
    case "bottom-center":
      return l.placementBottomCenter.className;
    case "bottom-left":
      return l.placementBottomLeft.className;
    default:
      return l.placementTopRight.className;
  }
}
const F = s.memo(
  ({
    children: a,
    placement: i = f.placement,
    duration: r = f.duration,
    maxCount: c = f.maxCount,
    gap: g = f.gap,
    offset: n = f.offset
  }) => {
    const R = k();
    w(N.Toast, R);
    const [u, d] = s.useReducer(j, { toasts: [] }), T = s.useRef(/* @__PURE__ */ new Map()), p = s.useRef(/* @__PURE__ */ new Map()), E = s.useRef(/* @__PURE__ */ new Map()), v = s.useMemo(
      () => ({
        placement: i,
        duration: r,
        maxCount: c,
        gap: g,
        offset: n
      }),
      [i, r, c, g, n]
    ), A = s.useMemo(
      () => ({
        dispatch: d,
        config: v
      }),
      [v]
    ), S = s.useCallback((e) => {
      const t = e.duration;
      if (!t || t <= 0) return;
      const o = T.current.get(e.id);
      o && clearTimeout(o);
      const m = p.current.get(e.id) ?? t;
      p.current.set(e.id, m);
      const b = setTimeout(() => {
        d({ type: "SET_STATE", id: e.id, state: "exiting" });
      }, m);
      T.current.set(e.id, b);
    }, []), x = s.useCallback((e) => {
      const t = T.current.get(e);
      if (t) {
        clearTimeout(t), T.current.delete(e);
        const o = p.current.get(e), m = E.current.get(e);
        o !== void 0 && m === void 0 && E.current.set(e, Date.now());
      }
    }, []), C = s.useCallback(
      (e) => {
        const t = E.current.get(e.id);
        if (t !== void 0) {
          const o = Date.now() - t, m = (p.current.get(e.id) ?? 0) - o;
          m > 0 ? (p.current.set(e.id, m), E.current.delete(e.id), S({ ...e, duration: m })) : d({ type: "SET_STATE", id: e.id, state: "exiting" });
        }
      },
      [S]
    ), M = s.useCallback((e) => {
      d({ type: "SET_STATE", id: e, state: "exiting" });
    }, []);
    s.useEffect(() => {
      u.toasts.filter((t) => t.state === "exiting").forEach((t) => {
        const o = setTimeout(() => {
          d({ type: "REMOVE", id: t.id });
        }, V);
        return () => clearTimeout(o);
      });
    }, [u.toasts]), s.useEffect(() => {
      u.toasts.filter((t) => t.state === "entering").forEach((t) => {
        const o = setTimeout(() => {
          d({ type: "SET_STATE", id: t.id, state: "visible" });
        }, 200);
        return () => clearTimeout(o);
      });
    }, [u.toasts]), s.useEffect(() => {
      u.toasts.forEach((e) => {
        !T.current.has(e.id) && e.state !== "exiting" && S(e);
      });
    }, [u.toasts, S]), s.useEffect(() => {
      const e = u.toasts.filter((t) => t.state !== "exiting");
      e.length > c && e.slice(0, e.length - c).forEach((o) => {
        d({ type: "SET_STATE", id: o.id, state: "exiting" });
      });
    }, [u.toasts, c]), s.useEffect(() => {
      const e = T.current;
      return () => {
        e.forEach((t) => clearTimeout(t)), e.clear();
      };
    }, []);
    const _ = s.useMemo(() => {
      const e = typeof n == "number" ? n : (n == null ? void 0 : n.x) ?? 16;
      return {
        "--toast-offset": `${typeof n == "number" ? n : (n == null ? void 0 : n.y) ?? 16}px`,
        "--toast-gap": `${g}px`,
        paddingLeft: i.includes("left") ? e : void 0,
        paddingRight: i.includes("right") ? e : void 0
      };
    }, [n, g, i]), y = D(l.container.className, B(i));
    return /* @__PURE__ */ O(P.Provider, { value: A, children: [
      a,
      /* @__PURE__ */ h(L, { children: /* @__PURE__ */ h("div", { className: y, style: _, children: u.toasts.map((e) => /* @__PURE__ */ h(
        I,
        {
          toast: e,
          onClose: () => M(e.id),
          onMouseEnter: () => x(e.id),
          onMouseLeave: () => C(e)
        },
        e.id
      )) }) })
    ] });
  }
);
F.displayName = N.ToastProvider;
export {
  F as default
};
