import { defineComponent as k, useSlots as g, computed as d, openBlock as o, createElementBlock as r, normalizeClass as S, Fragment as b, renderList as p, createBlock as C, unref as y, createSlots as B, withCtx as u, renderSlot as i } from "vue";
import { CSS_CLASSES as I } from "../../../core/constants/css-classes.mjs";
import z from "../Radio/Radio.vue2.mjs";
const L = /* @__PURE__ */ k({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    options: {},
    value: {},
    orientation: { default: "vertical" },
    name: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean },
    className: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: m }) {
    const t = I.radioGroup, n = l, c = m, s = g(), f = d(() => n.name || `radio-group-${Math.random().toString(36).slice(2, 9)}`), h = d(() => [t.root, t.orientations[n.orientation], n.className].filter(Boolean).join(" "));
    function v(e) {
      c("update:modelValue", e.value), c("change", e.value, e);
    }
    return (e, $) => (o(), r("div", {
      role: "radiogroup",
      class: S(h.value)
    }, [
      (o(!0), r(b, null, p(l.options, (a) => (o(), C(y(z), {
        key: a.value,
        name: f.value,
        value: a.value,
        label: a.label,
        checked: a.value === l.modelValue,
        disabled: l.disabled || a.disabled,
        size: l.size,
        onChange: (N) => v(a)
      }, B({ _: 2 }, [
        s.checkedIcon ? {
          name: "checkedIcon",
          fn: u(() => [
            i(e.$slots, "checkedIcon")
          ]),
          key: "0"
        } : void 0,
        s.uncheckedIcon ? {
          name: "uncheckedIcon",
          fn: u(() => [
            i(e.$slots, "uncheckedIcon")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["name", "value", "label", "checked", "disabled", "size", "onChange"]))), 128))
    ], 2));
  }
});
export {
  L as default
};
