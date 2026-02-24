import { ref as f, watch as p, onUnmounted as v } from "vue";
import { CSS_VAR_NAMES as w } from "../../core/constants/css-variables.mjs";
import { calculateFloatingPosition as g } from "../../core/helpers/calculate-floating-position.mjs";
import { getCssVar as h } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function C(l, i, m, c) {
  const s = f({ top: 0, left: 0 });
  let e = null, o = 0, r = 0;
  function a() {
    if (!l.value || !i.value) return;
    const n = l.value.firstElementChild;
    if (!n) return;
    const t = n.getBoundingClientRect(), u = {
      width: i.value.offsetWidth,
      height: i.value.offsetHeight
    }, d = h(w.spacingSm, 8);
    s.value = g(t, u, m(), d);
  }
  return p(
    c,
    (n) => {
      if (!(typeof window > "u"))
        if (n) {
          o = requestAnimationFrame(() => {
            r = requestAnimationFrame(() => {
              a();
            });
          });
          const t = () => {
            a();
          };
          window.addEventListener("scroll", t, !0), window.addEventListener("resize", t), e = () => {
            window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
          };
        } else
          cancelAnimationFrame(o), cancelAnimationFrame(r), e && (e(), e = null);
    },
    { immediate: !0 }
  ), v(() => {
    cancelAnimationFrame(o), cancelAnimationFrame(r), e && e();
  }), { position: s, updatePosition: a };
}
export {
  C as useFloatingPosition
};
