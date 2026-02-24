import { watch as r, onUnmounted as m } from "vue";
function a(o, i, d) {
  function e(n) {
    const u = n.target;
    o.some((s) => {
      var t;
      return (t = s.value) == null ? void 0 : t.contains(u);
    }) || i();
  }
  r(
    d,
    (n) => {
      typeof document > "u" || (n ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e));
    },
    { immediate: !0 }
  ), m(() => {
    typeof document > "u" || document.removeEventListener("mousedown", e);
  });
}
export {
  a as useClickOutside
};
