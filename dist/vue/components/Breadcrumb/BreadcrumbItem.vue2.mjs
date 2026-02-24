import { defineComponent as m, computed as r, openBlock as l, createElementBlock as n, normalizeClass as i, unref as f, renderSlot as o, mergeProps as C } from "vue";
import { CSS_CLASSES as b } from "../../../core/constants/css-classes.mjs";
const p = ["href"], S = /* @__PURE__ */ m({
  __name: "BreadcrumbItem",
  props: {
    href: {},
    isCurrentPage: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  setup(t) {
    const a = b.breadcrumb, s = t, u = r(() => `${a.item} ${s.disabled ? a.itemDisabled : ""} ${s.className}`.trim()), c = r(() => `${a.text} ${s.isCurrentPage ? a.textCurrent : ""}`.trim()), d = r(() => {
      const e = {};
      return s.isCurrentPage && (e["aria-current"] = "page"), s.disabled && (e["aria-disabled"] = "true"), e;
    });
    return (e, h) => (l(), n("li", {
      class: i(u.value)
    }, [
      t.href && !t.isCurrentPage && !t.disabled ? (l(), n("a", {
        key: 0,
        href: t.href,
        class: i(f(a).link)
      }, [
        o(e.$slots, "default")
      ], 10, p)) : (l(), n("span", C({ key: 1 }, d.value, { class: c.value }), [
        o(e.$slots, "default")
      ], 16))
    ], 2));
  }
});
export {
  S as default
};
