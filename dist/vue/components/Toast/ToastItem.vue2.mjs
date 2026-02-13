import { defineComponent as U, ref as M, onMounted as z, onUnmounted as O, openBlock as n, createElementBlock as l, normalizeClass as i, unref as t, createElementVNode as d, createBlock as A, resolveDynamicComponent as B, Fragment as F, createTextVNode as I, toDisplayString as p, createCommentVNode as N } from "vue";
import { CSS_CLASSES as P } from "../../../core/constants/css-classes.mjs";
const Y = ["aria-live"], q = /* @__PURE__ */ U({
  __name: "ToastItem",
  props: {
    toast: {},
    store: {},
    defaultDuration: {},
    defaultClosable: { type: Boolean },
    icons: {}
  },
  setup(h) {
    var T, b;
    const o = P.toast, w = {
      success: "✓",
      error: "✕",
      warning: "⚠",
      info: "ℹ"
    }, e = h, u = M(!1), y = M(null);
    let s = null, c = 0, v = 0;
    const r = e.toast.duration ?? e.defaultDuration, x = e.toast.closable ?? e.defaultClosable, C = (T = e.icons) == null ? void 0 : T[e.toast.type], k = (b = e.icons) == null ? void 0 : b.close;
    function _(m = !1) {
      var D, S;
      if (u.value) return;
      u.value = !0;
      const a = y.value;
      if (!a) {
        e.store.dismiss(e.toast.id), m && ((S = (D = e.toast).onAutoClose) == null || S.call(D));
        return;
      }
      const f = () => {
        var g, L;
        a.removeEventListener("animationend", f), e.store.dismiss(e.toast.id), m && ((L = (g = e.toast).onAutoClose) == null || L.call(g));
      };
      a.addEventListener("animationend", f);
    }
    function E() {
      r <= 0 || (v = Date.now(), s = setTimeout(() => _(!0), c));
    }
    function V() {
      r <= 0 || !s || (clearTimeout(s), s = null, c -= Date.now() - v);
    }
    function R() {
      r <= 0 || c <= 0 || E();
    }
    return z(() => {
      r > 0 && (c = r, E());
    }), O(() => {
      s && clearTimeout(s);
    }), (m, a) => (n(), l("li", {
      ref_key: "itemRef",
      ref: y,
      class: i([t(o).root, t(o).types[e.toast.type], u.value && t(o).closing]),
      role: "status",
      "aria-live": e.toast.type === "error" ? "assertive" : "polite",
      "aria-atomic": "true",
      onMouseenter: V,
      onMouseleave: R
    }, [
      d("span", {
        class: i(t(o).icon)
      }, [
        t(C) ? (n(), A(B(t(C)), { key: 0 })) : (n(), l(F, { key: 1 }, [
          I(p(w[e.toast.type]), 1)
        ], 64))
      ], 2),
      d("div", {
        class: i(t(o).content)
      }, [
        d("p", {
          class: i(t(o).title)
        }, p(e.toast.title), 3),
        e.toast.description ? (n(), l("p", {
          key: 0,
          class: i(t(o).description)
        }, p(e.toast.description), 3)) : N("", !0)
      ], 2),
      t(x) ? (n(), l("button", {
        key: 0,
        type: "button",
        class: i(t(o).close),
        "aria-label": "Close",
        onClick: a[0] || (a[0] = (f) => _(!1))
      }, [
        t(k) ? (n(), A(B(t(k)), { key: 0 })) : (n(), l(F, { key: 1 }, [
          I("✕")
        ], 64))
      ], 2)) : N("", !0)
    ], 42, Y));
  }
});
export {
  q as default
};
