import { defineComponent as S, useSlots as g, computed as u, openBlock as i, createElementBlock as m, normalizeClass as s, createElementVNode as p, unref as o, renderSlot as r, createCommentVNode as f, createTextVNode as v, toDisplayString as B } from "vue";
import { CSS_CLASSES as V } from "../../../core/constants/css-classes.mjs";
const N = ["checked", "disabled"], x = /* @__PURE__ */ S({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    label: {},
    checked: { type: Boolean, default: void 0 },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: b }) {
    const e = V.checkbox, a = t, h = b, c = g(), k = u(() => !!(c.checkedIcon || c.uncheckedIcon)), n = u(() => a.modelValue ?? a.checked), C = u(() => [
      e.root,
      e.sizes[a.size],
      k.value ? e.custom : "",
      n.value ? e.states.checked : "",
      a.disabled ? e.states.disabled : "",
      a.className
    ].filter(Boolean).join(" "));
    function y(l) {
      const d = l.target;
      h("update:modelValue", d.checked), h("change", d.checked);
    }
    return (l, d) => (i(), m("label", {
      class: s(C.value)
    }, [
      p("input", {
        type: "checkbox",
        class: s(o(e).input),
        checked: n.value,
        disabled: t.disabled,
        onChange: y
      }, null, 42, N),
      k.value ? (i(), m("span", {
        key: 0,
        class: s(o(e).control)
      }, [
        p("span", {
          class: s(o(e).icon)
        }, [
          n.value ? r(l.$slots, "checkedIcon", { key: 0 }) : r(l.$slots, "uncheckedIcon", { key: 1 })
        ], 2)
      ], 2)) : f("", !0),
      t.label || c.default ? (i(), m("span", {
        key: 1,
        class: s(o(e).label)
      }, [
        r(l.$slots, "default", {}, () => [
          v(B(t.label), 1)
        ])
      ], 2)) : f("", !0)
    ], 2));
  }
});
export {
  x as default
};
