import { defineComponent as p, inject as b, computed as e, openBlock as v, createElementBlock as f, normalizeClass as _, renderSlot as S, createCommentVNode as h } from "vue";
import { CSS_CLASSES as C } from "../../../core/constants/css-classes.mjs";
import { TABS_INJECTION_KEY as N } from "./Tabs.types.mjs";
const E = ["id", "aria-labelledby", "hidden"], k = /* @__PURE__ */ p({
  __name: "TabsPanel",
  props: {
    value: {},
    className: { default: "" }
  },
  setup(l) {
    const o = C.tabs, a = l, t = b(N);
    if (!t)
      throw new Error("TabsPanel must be used within a Tabs component");
    const { value: s, unmountStrategy: r } = t, u = e(() => `tabs-panel-${a.value}`), c = e(() => `tabs-tab-${a.value}`), n = e(() => s.value === a.value), d = e(() => r.value === "unmountOnHide" ? n.value : !0), i = e(() => [o.panel, a.className].filter(Boolean).join(" "));
    return (m, T) => d.value ? (v(), f("div", {
      key: 0,
      id: u.value,
      class: _(i.value),
      role: "tabpanel",
      "aria-labelledby": c.value,
      hidden: !n.value,
      tabindex: "0"
    }, [
      S(m.$slots, "default")
    ], 10, E)) : h("", !0);
  }
});
export {
  k as default
};
