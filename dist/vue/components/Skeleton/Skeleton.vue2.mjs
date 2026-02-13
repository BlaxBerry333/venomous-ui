import { defineComponent as s, computed as n, openBlock as l, createElementBlock as m, normalizeStyle as c, normalizeClass as h, renderSlot as d } from "vue";
import { CSS_CLASSES as p } from "../../../core/constants/css-classes.mjs";
const g = /* @__PURE__ */ s({
  __name: "Skeleton",
  props: {
    variant: { default: "rect" },
    animation: { type: [String, Boolean], default: "pulse" },
    width: {},
    height: {},
    className: { default: "" }
  },
  setup(o) {
    const a = p.skeleton, e = o, i = n(() => [
      a.root,
      e.variant !== "rect" ? a.variants[e.variant] : "",
      e.animation ? a.animations[e.animation] : "",
      e.className
    ].filter(Boolean).join(" ")), r = n(() => {
      const t = {};
      return e.width !== void 0 && (t.width = typeof e.width == "number" ? `${e.width}px` : e.width), e.height !== void 0 && (t.height = typeof e.height == "number" ? `${e.height}px` : e.height), t;
    });
    return (t, u) => (l(), m("span", {
      class: h(i.value),
      style: c(r.value),
      "aria-hidden": "true"
    }, [
      d(t.$slots, "default")
    ], 6));
  }
});
export {
  g as default
};
