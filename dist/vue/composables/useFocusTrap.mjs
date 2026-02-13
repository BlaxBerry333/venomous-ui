import { watch as m, onUnmounted as c } from "vue";
import { FOCUSABLE_SELECTOR as i } from "../../core/constants/a11y.mjs";
function a(o, l) {
  function n(e) {
    if (e.key !== "Tab" || !o.value) return;
    const t = o.value.querySelectorAll(i);
    if (t.length === 0) return;
    const u = t[0], r = t[t.length - 1];
    e.shiftKey ? document.activeElement === u && (e.preventDefault(), r.focus()) : document.activeElement === r && (e.preventDefault(), u.focus());
  }
  m(
    l,
    (e) => {
      e ? document.addEventListener("keydown", n) : document.removeEventListener("keydown", n);
    },
    { immediate: !0 }
  ), c(() => {
    document.removeEventListener("keydown", n);
  });
}
export {
  a as useFocusTrap
};
