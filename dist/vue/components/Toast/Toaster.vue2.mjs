import { defineComponent as m, computed as r, shallowRef as d, onMounted as f, triggerRef as p, onUnmounted as _, openBlock as l, createBlock as c, Teleport as v, createElementVNode as b, normalizeClass as g, createElementBlock as C, Fragment as N, renderList as S, createCommentVNode as k } from "vue";
import { CSS_CLASSES as B } from "../../../core/constants/css-classes.mjs";
import { toastStore as y } from "../../../core/helpers/toast-store.mjs";
import T from "./ToastItem.vue2.mjs";
const j = /* @__PURE__ */ m({
  __name: "Toaster",
  props: {
    icons: {},
    store: {},
    placement: { default: "top" },
    duration: { default: 4e3 },
    closable: { type: Boolean, default: !0 },
    className: { default: "" }
  },
  setup(u) {
    const s = B.toast, e = u, t = r(() => e.store ?? y), o = d(t.value.getToasts());
    let a = null;
    f(() => {
      a = t.value.subscribe(() => {
        o.value = t.value.getToasts(), p(o);
      });
    }), _(() => {
      a == null || a();
    });
    const i = r(() => [s.container, s.placements[e.placement], e.className].filter(Boolean).join(" "));
    return (h, x) => o.value.length > 0 ? (l(), c(v, {
      key: 0,
      to: "body"
    }, [
      b("ol", {
        class: g(i.value),
        role: "region",
        "aria-label": "Notifications",
        tabindex: "-1"
      }, [
        (l(!0), C(N, null, S(o.value, (n) => (l(), c(T, {
          key: n.id,
          toast: n,
          store: t.value,
          "default-duration": e.duration,
          "default-closable": e.closable,
          icons: e.icons
        }, null, 8, ["toast", "store", "default-duration", "default-closable", "icons"]))), 128))
      ], 2)
    ])) : k("", !0);
  }
});
export {
  j as default
};
