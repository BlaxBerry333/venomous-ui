import { defineComponent as y, useSlots as C, computed as d, openBlock as u, createElementBlock as i, normalizeClass as s, createElementVNode as v, unref as o, renderSlot as m, createCommentVNode as h, createTextVNode as S, toDisplayString as V } from "vue";
import { CSS_CLASSES as B } from "../../../core/constants/css-classes.mjs";
const N = ["name", "value", "checked", "disabled"], E = /* @__PURE__ */ y({
  __name: "Radio",
  props: {
    modelValue: {},
    label: {},
    checked: { type: Boolean, default: !1 },
    name: {},
    value: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean },
    className: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: k }) {
    const a = B.radio, e = l, r = k, t = C(), f = d(() => !!(t.checkedIcon || t.uncheckedIcon)), n = d(() => e.modelValue !== void 0 && e.value !== void 0 ? e.modelValue === e.value : e.checked), p = d(() => [
      a.root,
      a.sizes[e.size],
      f.value ? a.custom : "",
      n.value ? a.states.checked : "",
      e.disabled ? a.states.disabled : "",
      e.className
    ].filter(Boolean).join(" "));
    function b() {
      e.value !== void 0 && (r("update:modelValue", e.value), r("change", e.value));
    }
    return (c, g) => (u(), i("label", {
      class: s(p.value)
    }, [
      v("input", {
        type: "radio",
        class: s(o(a).input),
        name: l.name,
        value: l.value,
        checked: n.value,
        disabled: l.disabled,
        onChange: b
      }, null, 42, N),
      f.value ? (u(), i("span", {
        key: 0,
        class: s(o(a).control)
      }, [
        v("span", {
          class: s(o(a).icon)
        }, [
          n.value ? m(c.$slots, "checkedIcon", { key: 0 }) : m(c.$slots, "uncheckedIcon", { key: 1 })
        ], 2)
      ], 2)) : h("", !0),
      l.label || t.default ? (u(), i("span", {
        key: 1,
        class: s(o(a).label)
      }, [
        m(c.$slots, "default", {}, () => [
          S(V(l.label), 1)
        ])
      ], 2)) : h("", !0)
    ], 2));
  }
});
export {
  E as default
};
