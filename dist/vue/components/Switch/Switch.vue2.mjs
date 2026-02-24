import { defineComponent as f, computed as u, openBlock as m, createElementBlock as r, normalizeClass as t, createElementVNode as c, unref as o, toDisplayString as k, createCommentVNode as C } from "vue";
import { CSS_CLASSES as g } from "../../../core/constants/css-classes.mjs";
const S = ["checked", "disabled"], V = /* @__PURE__ */ f({
  __name: "Switch",
  props: {
    modelValue: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    label: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: h }) {
    const e = g.switch, a = l, n = h, d = u(() => a.modelValue ?? a.checked), p = u(() => [
      e.root,
      e.sizes[a.size],
      d.value ? e.states.checked : "",
      a.disabled ? e.states.disabled : "",
      a.className
    ].filter(Boolean).join(" "));
    function b(i) {
      const s = i.target;
      n("update:modelValue", s.checked), n("change", s.checked);
    }
    return (i, s) => (m(), r("label", {
      class: t(p.value)
    }, [
      c("input", {
        type: "checkbox",
        checked: d.value,
        disabled: l.disabled,
        onChange: b
      }, null, 40, S),
      c("span", {
        class: t(o(e).track)
      }, [
        c("span", {
          class: t(o(e).thumb)
        }, null, 2)
      ], 2),
      l.label ? (m(), r("span", {
        key: 0,
        class: t(o(e).label)
      }, k(l.label), 3)) : C("", !0)
    ], 2));
  }
});
export {
  V as default
};
