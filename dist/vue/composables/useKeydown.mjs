import { watch as i, onUnmounted as m } from "vue";
function u(o, t, d) {
  function e(n) {
    n.key === o && t();
  }
  i(
    d,
    (n) => {
      n ? document.addEventListener("keydown", e) : document.removeEventListener("keydown", e);
    },
    { immediate: !0 }
  ), m(() => {
    document.removeEventListener("keydown", e);
  });
}
export {
  u as useKeydown
};
