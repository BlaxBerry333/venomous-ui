import { defineComponent as B, useSlots as E, computed as d, provide as m, readonly as F, ref as I, openBlock as a, createElementBlock as i, normalizeClass as r, unref as e, createElementVNode as f, createCommentVNode as n, createTextVNode as y, toDisplayString as u, createBlock as N, withCtx as C, renderSlot as p } from "vue";
import { CSS_CLASSES as $ } from "../../../core/constants/css-classes.mjs";
import g from "../Tooltip/Tooltip.vue2.mjs";
const V = /* @__PURE__ */ B({
  __name: "FormField",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    error: {},
    tooltip: {},
    size: { default: "md" },
    orientation: { default: "vertical" },
    controlPosition: {},
    className: { default: "" }
  },
  setup(t) {
    const o = $.formField, l = t, v = E(), S = `form-field-${Math.random().toString(36).slice(2, 9)}`, k = `form-field-error-${Math.random().toString(36).slice(2, 9)}`, s = d(() => !!l.error);
    m("formFieldId", F(I(S))), m(
      "formFieldErrorId",
      d(() => s.value ? k : void 0)
    ), m("formFieldError", s);
    const b = d(() => [
      o.root,
      o.sizes[l.size],
      o.orientations[l.orientation],
      l.controlPosition ? o.controlPositions[l.controlPosition] : "",
      s.value ? o.states.error : "",
      l.className
    ].filter(Boolean).join(" "));
    return (c, h) => (a(), i("div", {
      class: r(b.value)
    }, [
      t.label ? (a(), i("div", {
        key: 0,
        class: r(e(o).labelRow)
      }, [
        f("label", {
          for: S,
          class: r(e(o).label)
        }, [
          t.required ? (a(), i("span", {
            key: 0,
            class: r(e(o).required)
          }, "* ", 2)) : n("", !0),
          y(" " + u(t.label), 1)
        ], 2),
        (t.tooltip || e(v).tooltip) && e(v).tooltipIcon ? (a(), N(e(g), {
          key: 0,
          placement: "top"
        }, {
          content: C(() => [
            p(c.$slots, "tooltip", {}, () => [
              y(u(t.tooltip), 1)
            ])
          ]),
          default: C(() => [
            f("span", {
              class: r(e(o).tooltipTrigger)
            }, [
              p(c.$slots, "tooltipIcon")
            ], 2)
          ]),
          _: 3
        })) : n("", !0)
      ], 2)) : n("", !0),
      f("div", {
        class: r(e(o).control)
      }, [
        p(c.$slots, "default")
      ], 2),
      s.value ? (a(), i("div", {
        key: 1,
        id: k,
        class: r(e(o).error),
        role: "alert"
      }, u(t.error), 3)) : n("", !0)
    ], 2));
  }
});
export {
  V as default
};
