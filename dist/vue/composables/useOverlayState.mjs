import { ref as u, watch as r, onUnmounted as n } from "vue";
import { CSS_VAR_NAMES as m } from "../../core/constants/css-variables.mjs";
import { getCssVar as s } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function p(a) {
  const t = u(!1), l = u(!1);
  let i = null, e = null;
  return r(
    a,
    (o) => {
      o ? (i = document.activeElement, e && (clearTimeout(e), e = null), l.value = !1, t.value = !0) : t.value && !l.value && (l.value = !0, e = setTimeout(() => {
        t.value = !1, l.value = !1, e = null, i instanceof HTMLElement && i.focus();
      }, s(m.durationNormal)));
    },
    { immediate: !0 }
  ), n(() => {
    e && clearTimeout(e);
  }), { isVisible: t, isClosing: l };
}
export {
  p as useOverlayState
};
