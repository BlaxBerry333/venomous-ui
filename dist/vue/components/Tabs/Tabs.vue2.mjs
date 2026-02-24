import { defineComponent as _, ref as s, computed as n, watch as b, provide as h, toRef as u, openBlock as T, createElementBlock as y, normalizeClass as N, renderSlot as B } from "vue";
import { CSS_CLASSES as E } from "../../../core/constants/css-classes.mjs";
import { TABS_INJECTION_KEY as V } from "./Tabs.types.mjs";
const I = /* @__PURE__ */ _({
  __name: "Tabs",
  props: {
    className: { default: "" },
    defaultValue: {},
    value: {},
    orientation: { default: "horizontal" },
    variant: { default: "line" },
    unmountStrategy: { default: "keepMounted" }
  },
  emits: ["update:value"],
  setup(c, { emit: v }) {
    const o = E.tabs, t = c, f = v, r = s(t.defaultValue ?? ""), i = n(() => t.value !== void 0), m = n(() => i.value ? t.value : r.value), l = s(/* @__PURE__ */ new Map());
    function d(e) {
      i.value || (r.value = e), f("update:value", e);
    }
    function p(e, a) {
      l.value.set(e, { disabled: a });
    }
    function S(e) {
      l.value.delete(e);
    }
    function g() {
      return Array.from(l.value.entries()).map(([e, { disabled: a }]) => ({
        value: e,
        disabled: a
      }));
    }
    b(
      () => t.value,
      (e) => {
        e !== void 0 && (r.value = e);
      }
    ), h(V, {
      value: n(() => m.value),
      onValueChange: d,
      orientation: u(t, "orientation"),
      variant: u(t, "variant"),
      unmountStrategy: u(t, "unmountStrategy"),
      registerTab: p,
      unregisterTab: S,
      getTabs: g
    });
    const C = n(() => [o.root, o.orientations[t.orientation], o.variants[t.variant], t.className].filter(Boolean).join(" "));
    return (e, a) => (T(), y("div", {
      class: N(C.value)
    }, [
      B(e.$slots, "default")
    ], 2));
  }
});
export {
  I as default
};
