import { defineComponent as b, useSlots as E, inject as g, computed as s, openBlock as d, createElementBlock as u, normalizeClass as a, createElementVNode as N, unref as r, renderSlot as p, createCommentVNode as _ } from "vue";
import { CSS_CLASSES as w } from "../../../core/constants/css-classes.mjs";
import { SELECT_INJECTION_KEY as k } from "./selectContext.mjs";
const I = ["aria-selected", "aria-disabled"], O = /* @__PURE__ */ b({
  __name: "SelectOption",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  setup(i) {
    const t = w.select, e = i, m = E(), c = g(k, void 0);
    if (!c)
      throw new Error("SelectOption must be used within a Select component with default slot");
    const o = c, n = s(() => e.value === o.value.value), f = s(() => e.value === o.highlightedValue.value), h = s(
      () => [
        t.option,
        n.value ? t.optionStates.selected : "",
        f.value ? t.optionStates.highlighted : "",
        e.disabled ? t.optionStates.disabled : "",
        e.className
      ].filter(Boolean).join(" ")
    );
    function v() {
      e.disabled || o.onSelect(e.value);
    }
    function S(l) {
      l.preventDefault();
    }
    function C() {
      o.onHighlight(e.value);
    }
    return (l, B) => (d(), u("div", {
      role: "option",
      class: a(h.value),
      "aria-selected": n.value,
      "aria-disabled": i.disabled || void 0,
      onMousedown: S,
      onClick: v,
      onMouseenter: C
    }, [
      N("span", {
        class: a(r(t).optionLabel)
      }, [
        p(l.$slots, "default")
      ], 2),
      n.value && m.selectedIcon ? (d(), u("span", {
        key: 0,
        class: a(r(t).optionIcon)
      }, [
        p(l.$slots, "selectedIcon")
      ], 2)) : _("", !0)
    ], 42, I));
  }
});
export {
  O as default
};
