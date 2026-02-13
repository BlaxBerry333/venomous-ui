import { watch as m, onUnmounted as r } from "vue";
function v(o, i, s) {
  function e(n) {
    const d = n.target;
    o.some((u) => {
      var t;
      return (t = u.value) == null ? void 0 : t.contains(d);
    }) || i();
  }
  m(
    s,
    (n) => {
      n ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e);
    },
    { immediate: !0 }
  ), r(() => {
    document.removeEventListener("mousedown", e);
  });
}
export {
  v as useClickOutside
};
