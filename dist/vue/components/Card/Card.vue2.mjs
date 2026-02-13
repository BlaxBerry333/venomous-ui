import { defineComponent as i, computed as r, openBlock as d, createElementBlock as m, normalizeClass as f, renderSlot as u } from "vue";
import { CSS_CLASSES as k } from "../../../core/constants/css-classes.mjs";
const b = ["role", "tabindex"], y = /* @__PURE__ */ i({
  __name: "Card",
  props: {
    variant: { default: "elevated" },
    clickable: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = k.card, a = t, c = o, n = r(() => [
      l.root,
      l.variants[a.variant],
      a.clickable ? l.states.clickable : "",
      a.className
    ].filter(Boolean).join(" "));
    function s(e) {
      a.clickable && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), c("click", e));
    }
    return (e, p) => (d(), m("div", {
      class: f(n.value),
      role: t.clickable ? "button" : void 0,
      tabindex: t.clickable ? 0 : void 0,
      onKeydown: s
    }, [
      u(e.$slots, "default")
    ], 42, b));
  }
});
export {
  y as default
};
