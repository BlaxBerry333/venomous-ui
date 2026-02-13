import { defineComponent as G, inject as Q, computed as s, useSlots as z, ref as f, watch as A, provide as X, onUnmounted as Z, openBlock as m, createElementBlock as w, normalizeClass as g, createCommentVNode as x, createElementVNode as S, unref as c, toDisplayString as H, renderSlot as I, createBlock as O, withCtx as _, normalizeStyle as P, Fragment as ee, renderList as te, createTextVNode as ae } from "vue";
import { CSS_CLASSES as le } from "../../../core/constants/css-classes.mjs";
import { useClickOutside as oe } from "../../composables/useClickOutside.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useKeydown as ne } from "../../composables/useKeydown.mjs";
import re from "../Portal/Portal.vue2.mjs";
import ue from "./SelectOption.vue2.mjs";
import { SELECT_INJECTION_KEY as ie } from "./selectContext.mjs";
const se = ["name", "value"], de = ["disabled", "aria-expanded", "aria-controls", "aria-invalid"], we = /* @__PURE__ */ G({
  __name: "Select",
  props: {
    modelValue: {},
    name: {},
    options: {},
    value: {},
    placeholder: { default: "Select..." },
    maxHeight: { default: 300 },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: void 0 },
    className: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(d, { emit: L }) {
    const n = le.select, t = d, b = Q("formFieldError", void 0), E = s(() => t.error ?? (b == null ? void 0 : b.value) ?? !1), C = L, R = z(), T = z(), v = s(() => !!T.default), r = f(!1), a = f(-1), u = f(null), V = f(null), $ = `select-${Math.random().toString(36).slice(2, 9)}`, K = s(() => {
      if (!(v.value || !t.options))
        return t.options.find((e) => e.value === t.modelValue);
    }), D = s(() => {
      var e, l;
      return v.value ? (e = t.modelValue) == null ? void 0 : e.toString() : (l = K.value) == null ? void 0 : l.label;
    }), F = s(() => {
      var e;
      if (!(v.value || a.value < 0 || !t.options))
        return (e = t.options[a.value]) == null ? void 0 : e.value;
    });
    function U() {
      t.disabled || t.readOnly || (r.value = !r.value, a.value = -1);
    }
    function p() {
      r.value = !1, a.value = -1;
    }
    function B(e) {
      var o, y;
      const l = (o = t.options) == null ? void 0 : o.find((Y) => Y.value === e);
      C("update:modelValue", e), C("change", e, l || { value: e, label: String(e) }), p(), (y = u.value) == null || y.focus();
    }
    function j(e) {
      var o;
      const l = ((o = t.options) == null ? void 0 : o.findIndex((y) => y.value === e)) ?? -1;
      l >= 0 && (a.value = l);
    }
    const N = f(t.modelValue);
    A(
      () => t.modelValue,
      (e) => {
        N.value = e;
      }
    );
    const q = {
      value: N,
      onSelect: B,
      highlightedValue: s(() => F.value),
      onHighlight: j
    };
    X(ie, q);
    const k = f({ top: 0, left: 0 });
    let i = null;
    function h() {
      if (!u.value) return;
      const e = u.value.getBoundingClientRect();
      k.value = {
        top: e.bottom + 4,
        // 4px gap
        left: e.left
      };
    }
    A(r, (e) => {
      i == null || i(), i = null, e && u.value && (requestAnimationFrame(() => {
        requestAnimationFrame(h);
      }), window.addEventListener("scroll", h, !0), window.addEventListener("resize", h), i = () => {
        window.removeEventListener("scroll", h, !0), window.removeEventListener("resize", h);
      });
    }), Z(() => {
      i == null || i();
    }), ne("Escape", p, () => r.value), oe([u, V], p, () => r.value);
    function M(e) {
      if (!r.value) {
        (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), r.value = !0, v.value || (a.value = 0));
        return;
      }
      if (v.value) {
        e.key === "Tab" && p();
        return;
      }
      const l = t.options || [];
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), a.value = a.value + 1 >= l.length ? 0 : a.value + 1;
          break;
        case "ArrowUp":
          e.preventDefault(), a.value = a.value - 1 < 0 ? l.length - 1 : a.value - 1;
          break;
        case "Enter":
        case " ":
          if (e.preventDefault(), a.value >= 0 && l[a.value]) {
            const o = l[a.value];
            o.disabled || B(o.value);
          }
          break;
        case "Tab":
          p();
          break;
      }
    }
    const J = s(() => [
      n.root,
      n.sizes[t.size],
      r.value ? n.states.open : "",
      E.value ? n.states.error : "",
      t.disabled ? n.states.disabled : "",
      t.readOnly ? n.states.readonly : "",
      t.className
    ].filter(Boolean).join(" ")), W = s(() => ({
      top: `${k.value.top}px`,
      left: `${k.value.left}px`,
      width: u.value ? `${u.value.offsetWidth}px` : void 0,
      maxHeight: typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight
    }));
    return (e, l) => (m(), w("div", {
      class: g(J.value)
    }, [
      d.name ? (m(), w("input", {
        key: 0,
        type: "hidden",
        name: d.name,
        value: d.modelValue ?? ""
      }, null, 8, se)) : x("", !0),
      S("button", {
        ref_key: "triggerRef",
        ref: u,
        type: "button",
        class: g(c(n).trigger),
        disabled: d.disabled,
        "aria-haspopup": "listbox",
        "aria-expanded": r.value,
        "aria-controls": r.value ? $ : void 0,
        "aria-invalid": E.value || void 0,
        onClick: U,
        onKeydown: M
      }, [
        S("span", {
          class: g(D.value ? c(n).value : `${c(n).value} ${c(n).placeholder}`)
        }, H(D.value || d.placeholder), 3),
        R.dropdownIcon ? (m(), w("span", {
          key: 0,
          class: g(c(n).icon)
        }, [
          I(e.$slots, "dropdownIcon")
        ], 2)) : x("", !0)
      ], 42, de),
      r.value ? (m(), O(c(re), { key: 1 }, {
        default: _(() => [
          S("div", {
            id: $,
            ref_key: "dropdownRef",
            ref: V,
            role: "listbox",
            class: g(c(n).dropdown),
            style: P(W.value)
          }, [
            v.value ? I(e.$slots, "default", { key: 0 }) : (m(!0), w(ee, { key: 1 }, te(d.options, (o) => (m(), O(ue, {
              key: o.value,
              value: o.value,
              disabled: o.disabled
            }, {
              default: _(() => [
                ae(H(o.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "disabled"]))), 128))
          ], 6)
        ]),
        _: 3
      })) : x("", !0)
    ], 2));
  }
});
export {
  we as default
};
