import { defineComponent as k, inject as C, ref as g, computed as x, openBlock as y, createElementBlock as T, unref as A, normalizeClass as D, renderSlot as E } from "vue";
import { CSS_CLASSES as I } from "../../../core/constants/css-classes.mjs";
import { TABS_INJECTION_KEY as K } from "./Tabs.types.mjs";
const N = ["aria-orientation"], R = /* @__PURE__ */ k({
  __name: "TabsList",
  props: {
    className: { default: "" }
  },
  setup(u) {
    const f = I.tabs, d = u, s = C(K);
    if (!s)
      throw new Error("TabsList must be used within a Tabs component");
    const { orientation: r, value: p, onValueChange: m, getTabs: b } = s, l = g(null);
    function h(a) {
      var c;
      const e = b().filter((n) => !n.disabled);
      if (e.length === 0) return;
      const o = e.findIndex((n) => n.value === p.value);
      let t = o;
      const i = r.value === "horizontal", _ = i ? "ArrowLeft" : "ArrowUp", S = i ? "ArrowRight" : "ArrowDown";
      switch (a.key) {
        case _:
          a.preventDefault(), t = o <= 0 ? e.length - 1 : o - 1;
          break;
        case S:
          a.preventDefault(), t = o >= e.length - 1 ? 0 : o + 1;
          break;
        case "Home":
          a.preventDefault(), t = 0;
          break;
        case "End":
          a.preventDefault(), t = e.length - 1;
          break;
        default:
          return;
      }
      if (t !== o && e[t]) {
        m(e[t].value);
        const n = (c = l.value) == null ? void 0 : c.querySelector(
          `[data-tabs-value="${CSS.escape(e[t].value)}"]`
        );
        n == null || n.focus();
      }
    }
    const v = x(() => [f.list, d.className].filter(Boolean).join(" "));
    return (a, w) => (y(), T("div", {
      ref_key: "listRef",
      ref: l,
      class: D(v.value),
      role: "tablist",
      "aria-orientation": A(r),
      onKeydown: h
    }, [
      E(a.$slots, "default")
    ], 42, N));
  }
});
export {
  R as default
};
