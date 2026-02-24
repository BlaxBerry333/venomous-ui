import { defineComponent as S, useSlots as b, inject as B, computed as p, openBlock as r, createElementBlock as n, normalizeClass as s, unref as d, renderSlot as f, createCommentVNode as m, createElementVNode as C } from "vue";
import { CSS_CLASSES as V } from "../../../core/constants/css-classes.mjs";
const N = ["type", "disabled", "readonly", "placeholder", "value", "aria-invalid"], E = /* @__PURE__ */ S({
  __name: "Input",
  props: {
    modelValue: {},
    type: { default: "text" },
    placeholder: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: void 0 },
    className: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: y }) {
    const e = V.input, l = a, v = y, i = b(), o = B("formFieldError", void 0), u = p(() => l.error ?? (o == null ? void 0 : o.value) ?? !1), h = p(() => [
      e.wrapper,
      e.sizes[l.size],
      u.value ? e.states.error : "",
      l.disabled ? e.states.disabled : "",
      l.readOnly ? e.states.readonly : "",
      l.className
    ].filter(Boolean).join(" "));
    function x(t) {
      const c = t.target;
      v("update:modelValue", c.value);
    }
    return (t, c) => (r(), n("div", {
      class: s(h.value)
    }, [
      i.prefix ? (r(), n("span", {
        key: 0,
        class: s(d(e).prefix)
      }, [
        f(t.$slots, "prefix")
      ], 2)) : m("", !0),
      C("input", {
        type: a.type,
        class: s(d(e).root),
        disabled: a.disabled,
        readonly: a.readOnly,
        placeholder: a.placeholder,
        value: a.modelValue,
        "aria-invalid": u.value || void 0,
        onInput: x
      }, null, 42, N),
      i.suffix ? (r(), n("span", {
        key: 1,
        class: s(d(e).suffix)
      }, [
        f(t.$slots, "suffix")
      ], 2)) : m("", !0)
    ], 2));
  }
});
export {
  E as default
};
