import { watch as i, onUnmounted as m } from "vue";
import { FOCUSABLE_SELECTOR as c } from "../../core/constants/a11y.mjs";
function s(o, f) {
  function n(e) {
    if (e.key !== "Tab" || !o.value) return;
    const t = o.value.querySelectorAll(c);
    if (t.length === 0) return;
    const u = t[0], r = t[t.length - 1];
    e.shiftKey ? document.activeElement === u && (e.preventDefault(), r.focus()) : document.activeElement === r && (e.preventDefault(), u.focus());
  }
  i(
    f,
    (e) => {
      typeof document > "u" || (e ? document.addEventListener("keydown", n) : document.removeEventListener("keydown", n));
    },
    { immediate: !0 }
  ), m(() => {
    typeof document > "u" || document.removeEventListener("keydown", n);
  });
}
export {
  s as useFocusTrap
};
