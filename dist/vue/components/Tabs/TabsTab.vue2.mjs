import { defineComponent as p, inject as f, computed as e, onMounted as C, onUnmounted as S, watch as T, openBlock as _, createElementBlock as h, normalizeClass as B, renderSlot as E } from "vue";
import { CSS_CLASSES as N } from "../../../core/constants/css-classes.mjs";
import { TABS_INJECTION_KEY as k } from "./Tabs.types.mjs";
const w = ["id", "aria-selected", "aria-controls", "tabindex", "disabled", "data-tabs-value"], $ = /* @__PURE__ */ p({
  __name: "TabsTab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  setup(o) {
    const t = N.tabs, a = o, n = f(k);
    if (!n)
      throw new Error("TabsTab must be used within a Tabs component");
    const { value: i, onValueChange: u, registerTab: d, unregisterTab: c } = n, r = e(() => `tabs-panel-${a.value}`), b = e(() => `tabs-tab-${a.value}`), s = e(() => i.value === a.value);
    C(() => {
      d(a.value, a.disabled);
    }), S(() => {
      c(a.value);
    }), T(
      () => a.disabled,
      (l) => {
        d(a.value, l);
      }
    );
    function v() {
      a.disabled || u(a.value);
    }
    const m = e(() => [
      t.tab,
      s.value ? t.tabStates.active : "",
      a.disabled ? t.tabStates.disabled : "",
      a.className
    ].filter(Boolean).join(" "));
    return (l, x) => (_(), h("button", {
      type: "button",
      id: b.value,
      class: B(m.value),
      role: "tab",
      "aria-selected": s.value,
      "aria-controls": r.value,
      tabindex: s.value ? 0 : -1,
      disabled: o.disabled,
      "data-tabs-value": a.value,
      onClick: v
    }, [
      E(l.$slots, "default")
    ], 10, w));
  }
});
export {
  $ as default
};
