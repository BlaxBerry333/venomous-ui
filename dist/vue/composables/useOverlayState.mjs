import { ref as u, watch as r, onUnmounted as a } from "vue";
import { CSS_VAR_NAMES as f } from "../../core/constants/css-variables.mjs";
import { getCssVar as m } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function p(n) {
  const l = u(!1), t = u(!1);
  let i = null, e = null;
  return r(
    n,
    (o) => {
      typeof document > "u" || (o ? (i = document.activeElement, e && (clearTimeout(e), e = null), t.value = !1, l.value = !0) : l.value && !t.value && (t.value = !0, e = setTimeout(() => {
        l.value = !1, t.value = !1, e = null, i instanceof HTMLElement && i.focus();
      }, m(f.durationNormal))));
    },
    { immediate: !0 }
  ), a(() => {
    e && clearTimeout(e);
  }), { isVisible: l, isClosing: t };
}
export {
  p as useOverlayState
};
