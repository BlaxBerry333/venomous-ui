import { defineComponent as _, inject as S, computed as g, openBlock as k, createElementBlock as x, unref as C, normalizeClass as T, renderSlot as y } from "vue";
import { CSS_CLASSES as A } from "../../../core/constants/css-classes.mjs";
import { TABS_INJECTION_KEY as D } from "./Tabs.types.mjs";
const E = ["aria-orientation"], L = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    className: { default: "" }
  },
  setup(c) {
    const i = A.tabs, u = c, s = S(D);
    if (!s)
      throw new Error("TabsList must be used within a Tabs component");
    const { orientation: r, value: f, onValueChange: d, getTabs: m } = s;
    function p(n) {
      const e = m().filter((a) => !a.disabled);
      if (e.length === 0) return;
      const o = e.findIndex((a) => a.value === f.value);
      let t = o;
      const l = r.value === "horizontal", w = l ? "ArrowLeft" : "ArrowUp", v = l ? "ArrowRight" : "ArrowDown";
      switch (n.key) {
        case w:
          n.preventDefault(), t = o <= 0 ? e.length - 1 : o - 1;
          break;
        case v:
          n.preventDefault(), t = o >= e.length - 1 ? 0 : o + 1;
          break;
        case "Home":
          n.preventDefault(), t = 0;
          break;
        case "End":
          n.preventDefault(), t = e.length - 1;
          break;
        default:
          return;
      }
      if (t !== o && e[t]) {
        d(e[t].value);
        const a = document.querySelector(`[data-tabs-value="${e[t].value}"]`);
        a == null || a.focus();
      }
    }
    const b = g(() => [i.list, u.className].filter(Boolean).join(" "));
    return (n, h) => (k(), x("div", {
      class: T(b.value),
      role: "tablist",
      "aria-orientation": C(r),
      onKeydown: p
    }, [
      y(n.$slots, "default")
    ], 42, E));
  }
});
export {
  L as default
};
