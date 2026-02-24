import { defineComponent as C, useSlots as p, computed as S, openBlock as c, createElementBlock as r, normalizeClass as g, Fragment as V, renderList as y, createBlock as B, unref as I, createSlots as z, withCtx as i, renderSlot as m } from "vue";
import { CSS_CLASSES as x } from "../../../core/constants/css-classes.mjs";
import N from "../Checkbox/Checkbox.vue2.mjs";
const G = /* @__PURE__ */ C({
  __name: "CheckboxGroup",
  props: {
    modelValue: { default: () => [] },
    options: {},
    value: {},
    orientation: { default: "vertical" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean },
    className: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: f }) {
    const s = x.checkboxGroup, n = l, d = f, u = p(), h = S(() => [s.root, s.orientations[n.orientation], n.className].filter(Boolean).join(" "));
    function k(e, t) {
      const a = n.modelValue || [], o = t ? [...a, e.value] : a.filter((v) => v !== e.value);
      d("update:modelValue", o), d("change", o, e, t);
    }
    function b(e) {
      return (n.modelValue || []).includes(e);
    }
    return (e, t) => (c(), r("div", {
      role: "group",
      class: g(h.value)
    }, [
      (c(!0), r(V, null, y(l.options, (a) => (c(), B(I(N), {
        key: a.value,
        label: a.label,
        checked: b(a.value),
        disabled: l.disabled || a.disabled,
        size: l.size,
        onChange: (o) => k(a, o)
      }, z({ _: 2 }, [
        u.checkedIcon ? {
          name: "checkedIcon",
          fn: i(() => [
            m(e.$slots, "checkedIcon")
          ]),
          key: "0"
        } : void 0,
        u.uncheckedIcon ? {
          name: "uncheckedIcon",
          fn: i(() => [
            m(e.$slots, "uncheckedIcon")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["label", "checked", "disabled", "size", "onChange"]))), 128))
    ], 2));
  }
});
export {
  G as default
};
