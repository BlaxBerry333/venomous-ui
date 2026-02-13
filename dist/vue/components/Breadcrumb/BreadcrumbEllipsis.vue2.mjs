import { defineComponent as n, computed as m, openBlock as c, createElementBlock as p, normalizeClass as t, createElementVNode as i, unref as u, renderSlot as d, createTextVNode as f } from "vue";
import { CSS_CLASSES as S } from "../../../core/constants/css-classes.mjs";
const N = /* @__PURE__ */ n({
  __name: "BreadcrumbEllipsis",
  props: {
    className: { default: "" }
  },
  setup(r) {
    const e = S.breadcrumb, l = r, o = m(() => `${e.item} ${l.className}`.trim());
    return (a, s) => (c(), p("li", {
      class: t(o.value)
    }, [
      i("span", {
        class: t(u(e).ellipsis),
        role: "presentation"
      }, [
        d(a.$slots, "default", {}, () => [
          s[0] || (s[0] = f("…", -1))
        ])
      ], 2)
    ], 2));
  }
});
export {
  N as default
};
