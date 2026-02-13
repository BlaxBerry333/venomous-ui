import { watch as l, nextTick as u } from "vue";
import { FOCUSABLE_SELECTOR as c } from "../../core/constants/a11y.mjs";
function r(e, i) {
  l(
    i,
    (o) => {
      o && u(() => {
        if (e.value) {
          const t = e.value.querySelectorAll(c);
          t.length > 0 && t[0].focus();
        }
      });
    },
    { immediate: !0 }
  );
}
export {
  r as useInitialFocus
};
