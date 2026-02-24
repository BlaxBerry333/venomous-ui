import { defineComponent as a, openBlock as l, createBlock as d, Teleport as r, renderSlot as s } from "vue";
const c = /* @__PURE__ */ a({
  __name: "Portal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(o) {
    const e = o;
    return (t, n) => (l(), d(r, {
      to: e.to,
      disabled: e.disabled
    }, [
      s(t.$slots, "default")
    ], 8, ["to", "disabled"]));
  }
});
export {
  c as default
};
