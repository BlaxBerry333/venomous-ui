import { defineComponent as a, computed as n, openBlock as d, createElementBlock as r, normalizeClass as c, renderSlot as i } from "vue";
import { CSS_CLASSES as u } from "../../../core/constants/css-classes.mjs";
const m = ["disabled"], S = /* @__PURE__ */ a({
  __name: "Button",
  props: {
    size: { default: "md" },
    variant: { default: "solid" },
    colorScheme: { default: "theme" },
    disabled: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  setup(l) {
    const t = u.button, e = l, o = n(() => [
      t.root,
      t.sizes[e.size],
      t.variants[e.variant],
      e.colorScheme !== "theme" ? t.colors[e.colorScheme] : "",
      e.fullWidth ? t.states.fullWidth : "",
      e.className
    ].filter(Boolean).join(" "));
    return (s, f) => (d(), r("button", {
      class: c(o.value),
      disabled: l.disabled
    }, [
      i(s.$slots, "default")
    ], 10, m));
  }
});
export {
  S as default
};
