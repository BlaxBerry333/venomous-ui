import { defineComponent as h, ref as p, inject as v, computed as d, onMounted as y, watch as z, openBlock as x, createElementBlock as B, normalizeClass as R } from "vue";
import { CSS_CLASSES as b } from "../../../core/constants/css-classes.mjs";
const g = ["disabled", "readonly", "rows", "placeholder", "value", "aria-invalid"], V = /* @__PURE__ */ h({
  __name: "Textarea",
  props: {
    modelValue: {},
    placeholder: {},
    rows: { default: 3 },
    resize: { default: "vertical" },
    autoResize: { type: Boolean, default: !1 },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: void 0 },
    className: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: u }) {
    const a = b.textarea, e = l, c = u, r = p(null), o = v("formFieldError", void 0), n = d(() => e.error ?? (o == null ? void 0 : o.value) ?? !1), f = d(() => [
      a.root,
      a.sizes[e.size],
      e.autoResize ? a.resize.none : a.resize[e.resize],
      n.value ? a.states.error : "",
      e.disabled ? a.states.disabled : "",
      e.readOnly ? a.states.readonly : "",
      e.className
    ].filter(Boolean).join(" "));
    function s() {
      const t = r.value;
      !t || !e.autoResize || (t.style.height = "auto", t.style.height = `${t.scrollHeight}px`);
    }
    function m(t) {
      const i = t.target;
      c("update:modelValue", i.value), e.autoResize && s();
    }
    return y(() => {
      s();
    }), z(
      () => e.modelValue,
      () => {
        e.autoResize && requestAnimationFrame(s);
      }
    ), (t, i) => (x(), B("textarea", {
      ref_key: "textareaRef",
      ref: r,
      class: R(f.value),
      disabled: l.disabled,
      readonly: l.readOnly,
      rows: l.rows,
      placeholder: l.placeholder,
      value: l.modelValue,
      "aria-invalid": n.value || void 0,
      onInput: m
    }, null, 42, g));
  }
});
export {
  V as default
};
