import { defineComponent as S, ref as g, computed as y, unref as l, openBlock as i, createBlock as $, withCtx as E, createElementVNode as n, normalizeClass as t, createElementBlock as f, Fragment as N, toDisplayString as O, renderSlot as c, createCommentVNode as p } from "vue";
import { CSS_CLASSES as w } from "../../../core/constants/css-classes.mjs";
import { useBodyScrollLock as z } from "../../composables/useBodyScrollLock.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useFocusTrap as F } from "../../composables/useFocusTrap.mjs";
import { useInitialFocus as I } from "../../composables/useInitialFocus.mjs";
import { useKeydown as V } from "../../composables/useKeydown.mjs";
import { useOverlayState as j } from "../../composables/useOverlayState.mjs";
import L from "../Portal/Portal.vue2.mjs";
const M = ["aria-labelledby"], Q = /* @__PURE__ */ S({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    size: { default: "md" },
    title: {},
    showCloseButton: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEsc: { type: Boolean, default: !0 },
    className: { default: "" }
  },
  emits: ["close"],
  setup(s, { emit: C }) {
    const e = w.modal, a = s, d = C, k = `modal-title-${Math.random().toString(36).slice(2, 9)}`, u = g(null), { isVisible: r, isClosing: m } = j(() => a.open);
    I(u, () => r.value && !m.value), z(() => r.value), F(u, () => r.value), V(
      "Escape",
      () => d("close"),
      () => r.value && a.closeOnEsc
    );
    const v = y(() => [e.backdrop, m.value ? e.backdropClosing : ""].filter(Boolean).join(" ")), B = y(() => [e.root, e.sizes[a.size], m.value ? e.closing : "", a.className].filter(Boolean).join(" "));
    function b(o) {
      a.closeOnBackdrop && o.target === o.currentTarget && d("close");
    }
    function h() {
      d("close");
    }
    return (o, R) => l(r) ? (i(), $(l(L), { key: 0 }, {
      default: E(() => [
        n("div", {
          class: t(v.value),
          role: "presentation",
          onClick: b
        }, [
          n("div", {
            ref_key: "modalRef",
            ref: u,
            class: t(B.value),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": s.title ? k : void 0
          }, [
            s.title ? (i(), f(N, { key: 0 }, [
              n("div", {
                class: t(l(e).header)
              }, [
                n("h2", {
                  id: k,
                  class: t(l(e).title)
                }, O(s.title), 3),
                s.showCloseButton ? (i(), f("button", {
                  key: 0,
                  type: "button",
                  class: t(l(e).close),
                  "aria-label": "Close",
                  onClick: h
                }, [
                  c(o.$slots, "closeIcon")
                ], 2)) : p("", !0)
              ], 2),
              n("div", {
                class: t(l(e).body)
              }, [
                c(o.$slots, "default")
              ], 2),
              o.$slots.footer ? (i(), f("div", {
                key: 0,
                class: t(l(e).footer)
              }, [
                c(o.$slots, "footer")
              ], 2)) : p("", !0)
            ], 64)) : c(o.$slots, "default", { key: 1 })
          ], 10, M)
        ], 2)
      ]),
      _: 3
    })) : p("", !0);
  }
});
export {
  Q as default
};
