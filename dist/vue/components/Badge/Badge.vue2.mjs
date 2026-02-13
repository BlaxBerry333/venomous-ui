import { defineComponent as S, useSlots as v, computed as o, openBlock as n, createElementBlock as r, normalizeClass as a, unref as h, renderSlot as y, toDisplayString as c, createCommentVNode as d } from "vue";
import { CSS_CLASSES as C } from "../../../core/constants/css-classes.mjs";
const k = /* @__PURE__ */ S({
  __name: "Badge",
  props: {
    content: {},
    dot: { type: Boolean, default: !1 },
    max: { default: 99 },
    colorScheme: { default: "error" },
    hidden: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  setup(f) {
    const t = C.badge, i = v(), e = f, s = o(() => e.hidden ? !1 : e.dot ? !0 : !(e.content === void 0 || typeof e.content == "number" && e.content <= 0)), l = o(() => {
      if (!e.dot) {
        if (typeof e.content == "number" && e.content > e.max) return `${e.max}+`;
        if (e.content !== void 0) return String(e.content);
      }
    }), u = o(() => [t.root, t.colors[e.colorScheme], e.dot ? t.dot : "", e.className].filter(Boolean).join(" ")), m = o(() => !!i.default);
    return (p, B) => m.value ? (n(), r("span", {
      key: 0,
      class: a(h(t).wrapper)
    }, [
      y(p.$slots, "default"),
      s.value ? (n(), r("sup", {
        key: 0,
        class: a(u.value)
      }, c(l.value), 3)) : d("", !0)
    ], 2)) : s.value ? (n(), r("sup", {
      key: 1,
      class: a(u.value)
    }, c(l.value), 3)) : d("", !0);
  }
});
export {
  k as default
};
