import { defineComponent as D, getCurrentInstance as H, computed as o, ref as m, openBlock as E, createElementBlock as K, Fragment as Z, createElementVNode as g, renderSlot as M, createBlock as q, unref as r, withCtx as G, normalizeStyle as J, normalizeClass as P, createCommentVNode as Q } from "vue";
import { CSS_CLASSES as U } from "../../../core/constants/css-classes.mjs";
import { useClickOutside as W } from "../../composables/useClickOutside.mjs";
import { useDelayedToggle as X } from "../../composables/useDelayedToggle.mjs";
import { useFloatingPosition as Y } from "../../composables/useFloatingPosition.mjs";
import { useKeydown as ee } from "../../composables/useKeydown.mjs";
import "../../../core/helpers/toast-store.mjs";
import oe from "../Portal/Portal.vue2.mjs";
const ne = ["aria-expanded", "aria-controls"], pe = /* @__PURE__ */ D({
  __name: "Popover",
  props: {
    placement: {},
    trigger: {},
    open: { type: Boolean },
    closeOnClickOutside: { type: Boolean },
    closeOnEsc: { type: Boolean },
    disabled: { type: Boolean },
    className: {}
  },
  emits: ["update:open"],
  setup(S, { emit: $ }) {
    const i = U.popover, t = S, b = $, c = H(), u = c == null ? void 0 : c.vnode.props;
    function p(e) {
      if (!u) return !1;
      const s = e.replace(/([A-Z])/g, "-$1").toLowerCase();
      return e in u || s in u;
    }
    function f(e, s) {
      return p(e) ? t[e] : s;
    }
    const h = o(() => t.placement ?? "bottom"), l = o(() => t.trigger ?? "click"), w = o(() => f("closeOnClickOutside", !0)), x = o(() => f("closeOnEsc", !0)), C = o(() => f("disabled", !1)), N = o(() => t.className ?? ""), k = `popover-${Math.random().toString(36).slice(2, 9)}`, y = m(!1), O = o(() => p("open") || p("modelValue")), n = o(() => O.value ? t.open : y.value), d = m(null), v = m(null);
    function a(e) {
      O.value || (y.value = e), b("update:open", e);
    }
    function L() {
      C.value || a(!n.value);
    }
    const { show: R, hide: _, cancelHide: T } = X(
      () => a(!0),
      () => a(!1),
      100,
      150,
      () => C.value
    ), { position: B } = Y(
      d,
      v,
      () => h.value,
      () => n.value
    );
    ee(
      "Escape",
      () => a(!1),
      () => n.value && x.value
    ), W(
      [d, v],
      () => a(!1),
      () => n.value && w.value
    );
    function V() {
      l.value === "click" && L();
    }
    function z() {
      l.value === "hover" && R();
    }
    function A() {
      l.value === "hover" && _();
    }
    function F() {
      l.value === "hover" && T();
    }
    function I() {
      l.value === "hover" && _();
    }
    const j = o(() => [i.root, i.placements[h.value], N.value].filter(Boolean).join(" "));
    return (e, s) => (E(), K(Z, null, [
      g("span", {
        ref_key: "triggerRef",
        ref: d,
        style: { display: "contents" },
        "aria-expanded": n.value,
        "aria-haspopup": "dialog",
        "aria-controls": n.value ? k : void 0,
        onClick: V,
        onMouseenter: z,
        onMouseleave: A
      }, [
        M(e.$slots, "default")
      ], 40, ne),
      n.value ? (E(), q(r(oe), { key: 0 }, {
        default: G(() => [
          g("div", {
            id: k,
            ref_key: "popoverRef",
            ref: v,
            role: "dialog",
            class: P(j.value),
            style: J({ top: `${r(B).top}px`, left: `${r(B).left}px` }),
            onMouseenter: F,
            onMouseleave: I
          }, [
            M(e.$slots, "content"),
            g("div", {
              class: P(r(i).arrow)
            }, null, 2)
          ], 38)
        ]),
        _: 3
      })) : Q("", !0)
    ], 64));
  }
});
export {
  pe as default
};
