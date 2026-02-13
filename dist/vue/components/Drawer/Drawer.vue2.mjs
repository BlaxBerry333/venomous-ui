import { defineComponent as w, ref as S, computed as y, unref as o, openBlock as i, createBlock as g, withCtx as $, createElementVNode as n, normalizeClass as t, createElementBlock as f, Fragment as E, toDisplayString as N, renderSlot as c, createCommentVNode as p } from "vue";
import { CSS_CLASSES as O } from "../../../core/constants/css-classes.mjs";
import { useBodyScrollLock as z } from "../../composables/useBodyScrollLock.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useFocusTrap as F } from "../../composables/useFocusTrap.mjs";
import { useInitialFocus as I } from "../../composables/useInitialFocus.mjs";
import { useKeydown as V } from "../../composables/useKeydown.mjs";
import { useOverlayState as j } from "../../composables/useOverlayState.mjs";
import D from "../Portal/Portal.vue2.mjs";
const L = ["aria-labelledby"], Q = /* @__PURE__ */ w({
  __name: "Drawer",
  props: {
    open: { type: Boolean },
    placement: { default: "right" },
    size: { default: "md" },
    title: {},
    showCloseButton: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEsc: { type: Boolean, default: !0 },
    className: { default: "" }
  },
  emits: ["close"],
  setup(a, { emit: C }) {
    const e = O.drawer, l = a, d = C, k = `drawer-title-${Math.random().toString(36).slice(2, 9)}`, u = S(null), { isVisible: s, isClosing: m } = j(() => l.open);
    I(u, () => s.value && !m.value), z(() => s.value), F(u, () => s.value), V(
      "Escape",
      () => d("close"),
      () => s.value && l.closeOnEsc
    );
    const v = y(() => [e.backdrop, m.value ? e.backdropClosing : ""].filter(Boolean).join(" ")), B = y(() => [
      e.root,
      e.placements[l.placement],
      e.sizes[l.size],
      m.value ? e.closing : "",
      l.className
    ].filter(Boolean).join(" "));
    function b() {
      l.closeOnBackdrop && d("close");
    }
    function h() {
      d("close");
    }
    return (r, R) => o(s) ? (i(), g(o(D), { key: 0 }, {
      default: $(() => [
        n("div", {
          class: t(v.value),
          role: "presentation",
          "aria-hidden": "true",
          onClick: b
        }, null, 2),
        n("div", {
          ref_key: "drawerRef",
          ref: u,
          class: t(B.value),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": a.title ? k : void 0
        }, [
          a.title ? (i(), f(E, { key: 0 }, [
            n("div", {
              class: t(o(e).header)
            }, [
              n("h2", {
                id: k,
                class: t(o(e).title)
              }, N(a.title), 3),
              a.showCloseButton ? (i(), f("button", {
                key: 0,
                type: "button",
                class: t(o(e).close),
                "aria-label": "Close",
                onClick: h
              }, [
                c(r.$slots, "closeIcon")
              ], 2)) : p("", !0)
            ], 2),
            n("div", {
              class: t(o(e).body)
            }, [
              c(r.$slots, "default")
            ], 2),
            r.$slots.footer ? (i(), f("div", {
              key: 0,
              class: t(o(e).footer)
            }, [
              c(r.$slots, "footer")
            ], 2)) : p("", !0)
          ], 64)) : c(r.$slots, "default", { key: 1 })
        ], 10, L)
      ]),
      _: 3
    })) : p("", !0);
  }
});
export {
  Q as default
};
