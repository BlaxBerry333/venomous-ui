import { defineComponent as F, useSlots as M, getCurrentInstance as T, computed as i, ref as c, openBlock as m, createElementBlock as k, Fragment as C, createElementVNode as f, unref as e, renderSlot as N, createBlock as z, withCtx as A, normalizeStyle as D, normalizeClass as $, createTextVNode as I, toDisplayString as L, createCommentVNode as j } from "vue";
import { CSS_CLASSES as Z } from "../../../core/constants/css-classes.mjs";
import { useDelayedToggle as q } from "../../composables/useDelayedToggle.mjs";
import { useFloatingPosition as G } from "../../composables/useFloatingPosition.mjs";
import "../../../core/helpers/toast-store.mjs";
import H from "../Portal/Portal.vue2.mjs";
const J = ["aria-describedby"], Y = /* @__PURE__ */ F({
  __name: "Tooltip",
  props: {
    content: {},
    placement: {},
    delay: {},
    disabled: { type: Boolean },
    className: {}
  },
  setup(B, { expose: w }) {
    const p = Z.tooltip, s = B, x = M(), d = T(), u = d == null ? void 0 : d.vnode.props;
    function P(r) {
      if (!u) return !1;
      const o = r.replace(/([A-Z])/g, "-$1").toLowerCase();
      return r in u || o in u;
    }
    const v = i(() => s.placement ?? "top"), R = i(() => s.delay ?? 200), V = i(() => P("disabled") ? s.disabled : !1), _ = i(() => s.className ?? ""), y = `tooltip-${Math.random().toString(36).slice(2, 9)}`, l = c(!1), g = c(null), b = c(null), { show: n, hide: a } = q(
      () => {
        l.value = !0;
      },
      () => {
        l.value = !1;
      },
      R.value,
      100,
      () => V.value
    ), { position: S } = G(
      g,
      b,
      () => v.value,
      () => l.value
    ), E = i(() => [p.root, p.placements[v.value], _.value].filter(Boolean).join(" "));
    return w({
      show: n,
      hide: a
    }), (r, o) => (m(), k(C, null, [
      f("span", {
        ref_key: "triggerRef",
        ref: g,
        style: { display: "contents" },
        "aria-describedby": l.value ? y : void 0,
        onMouseenter: o[0] || (o[0] = //@ts-ignore
        (...t) => e(n) && e(n)(...t)),
        onMouseleave: o[1] || (o[1] = //@ts-ignore
        (...t) => e(a) && e(a)(...t)),
        onFocus: o[2] || (o[2] = //@ts-ignore
        (...t) => e(n) && e(n)(...t)),
        onBlur: o[3] || (o[3] = //@ts-ignore
        (...t) => e(a) && e(a)(...t))
      }, [
        N(r.$slots, "default")
      ], 40, J),
      l.value ? (m(), z(e(H), { key: 0 }, {
        default: A(() => [
          f("div", {
            id: y,
            ref_key: "tooltipRef",
            ref: b,
            role: "tooltip",
            class: $(E.value),
            style: D({ top: `${e(S).top}px`, left: `${e(S).left}px` })
          }, [
            e(x).content ? N(r.$slots, "content", { key: 0 }) : (m(), k(C, { key: 1 }, [
              I(L(s.content), 1)
            ], 64)),
            f("div", {
              class: $(e(p).arrow)
            }, null, 2)
          ], 6)
        ]),
        _: 3
      })) : j("", !0)
    ], 64));
  }
});
export {
  Y as default
};
