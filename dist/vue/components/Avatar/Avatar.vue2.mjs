import { defineComponent as k, useSlots as C, ref as w, watch as y, computed as s, openBlock as t, createElementBlock as l, normalizeClass as o, unref as r, toDisplayString as m, renderSlot as x, createCommentVNode as z } from "vue";
import { CSS_CLASSES as A } from "../../../core/constants/css-classes.mjs";
import { getAvatarInitials as E } from "../../../core/helpers/get-avatar-initials.mjs";
import "../../../core/helpers/toast-store.mjs";
const I = ["aria-label"], N = ["src", "alt"], F = /* @__PURE__ */ k({
  __name: "Avatar",
  props: {
    src: {},
    alt: {},
    name: {},
    size: { default: "md" },
    shape: { default: "circle" },
    className: { default: "" }
  },
  setup(p) {
    const e = A.avatar, v = C(), a = p, c = w(!1);
    y(
      () => a.src,
      () => {
        c.value = !1;
      }
    );
    const f = s(() => [e.root, e.sizes[a.size], e.shapes[a.shape], a.className].filter(Boolean).join(" ")), d = s(() => a.alt || a.name || "avatar"), n = s(() => a.src && !c.value), i = s(() => !n.value && !!a.name), u = s(() => !n.value && !i.value && !!v.icon), h = s(() => !n.value && !i.value && !u.value && !!a.alt), _ = s(() => a.name ? E(a.name) : "");
    function g() {
      c.value = !0;
    }
    return (S, b) => (t(), l("span", {
      class: o(f.value),
      role: "img",
      "aria-label": d.value
    }, [
      n.value ? (t(), l("img", {
        key: 0,
        class: o(r(e).image),
        src: a.src,
        alt: a.alt || "",
        onError: g
      }, null, 42, N)) : i.value ? (t(), l("span", {
        key: 1,
        class: o(r(e).text)
      }, m(_.value), 3)) : u.value ? (t(), l("span", {
        key: 2,
        class: o(r(e).icon)
      }, [
        x(S.$slots, "icon")
      ], 2)) : h.value ? (t(), l("span", {
        key: 3,
        class: o(r(e).text)
      }, m(a.alt), 3)) : z("", !0)
    ], 10, I));
  }
});
export {
  F as default
};
