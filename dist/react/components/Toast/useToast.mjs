import c from "react";
import { ToastAPIContext as x } from "./ToastContext.mjs";
let I = 0;
function v() {
  return `toast-${Date.now()}-${++I}`;
}
function y(s, l) {
  const n = l;
  return n.id = s, n;
}
function L() {
  const s = c.useContext(x);
  if (!s)
    throw new Error("useToast must be used within a ToastProvider");
  const { dispatch: l, config: n } = s, a = c.useCallback(
    (r, t, e) => {
      const u = v();
      let g;
      const A = new Promise((h) => {
        g = h;
      });
      let o = e == null ? void 0 : e.duration;
      o === void 0 && (o = r === "loading" ? 0 : n.duration);
      const E = (e == null ? void 0 : e.closable) ?? !0, P = {
        id: u,
        variant: r,
        title: t,
        description: e == null ? void 0 : e.description,
        duration: o,
        closable: E,
        showIcon: (e == null ? void 0 : e.showIcon) ?? !0,
        icon: e == null ? void 0 : e.icon,
        action: e == null ? void 0 : e.action,
        onClose: e == null ? void 0 : e.onClose,
        createdAt: Date.now(),
        state: "entering",
        resolve: g
      };
      return l({ type: "ADD", toast: P }), y(u, A);
    },
    [l, n.duration]
  ), d = c.useCallback(
    (r, t) => a("success", r, t),
    [a]
  ), C = c.useCallback(
    (r, t) => a("error", r, t),
    [a]
  ), b = c.useCallback(
    (r, t) => a("warning", r, t),
    [a]
  ), f = c.useCallback(
    (r, t) => a("info", r, t),
    [a]
  ), m = c.useCallback(
    (r, t) => a("loading", r, t),
    [a]
  ), T = c.useCallback(
    (r) => {
      const { variant: t = "info", title: e, ...u } = r;
      return a(t, e, u);
    },
    [a]
  ), i = c.useCallback(
    (r, t) => {
      l({ type: "SET", id: r, options: t });
    },
    [l]
  ), k = c.useCallback(
    (r) => {
      l({ type: "SET_STATE", id: r, state: "exiting" });
    },
    [l]
  ), w = c.useCallback(() => {
    l({ type: "REMOVE_ALL" });
  }, [l]);
  return c.useMemo(
    () => ({
      success: d,
      error: C,
      warning: b,
      info: f,
      loading: m,
      open: T,
      set: i,
      close: k,
      closeAll: w
    }),
    [d, C, b, f, m, T, i, k, w]
  );
}
export {
  L as useToast
};
