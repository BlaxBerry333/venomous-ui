import { watch as i, onUnmounted as u } from "vue";
function m(t, o, d) {
  function e(n) {
    n.key === t && o();
  }
  i(
    d,
    (n) => {
      typeof document > "u" || (n ? document.addEventListener("keydown", e) : document.removeEventListener("keydown", e));
    },
    { immediate: !0 }
  ), u(() => {
    typeof document > "u" || document.removeEventListener("keydown", e);
  });
}
export {
  m as useKeydown
};
