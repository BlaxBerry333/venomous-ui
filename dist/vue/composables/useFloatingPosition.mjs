import { ref as c, watch as d, onUnmounted as f } from "vue";
import { CSS_VAR_NAMES as p } from "../../core/constants/css-variables.mjs";
import { calculateFloatingPosition as v } from "../../core/helpers/calculate-floating-position.mjs";
import { getCssVar as g } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function C(r, n, l, u) {
  const s = c({ top: 0, left: 0 });
  let e = null;
  function o() {
    if (!r.value || !n.value) return;
    const i = r.value.firstElementChild;
    if (!i) return;
    const t = i.getBoundingClientRect(), a = {
      width: n.value.offsetWidth,
      height: n.value.offsetHeight
    }, m = g(p.spacingSm, 8);
    s.value = v(t, a, l(), m);
  }
  return d(
    u,
    (i) => {
      if (i) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            o();
          });
        });
        const t = () => {
          o();
        };
        window.addEventListener("scroll", t, !0), window.addEventListener("resize", t), e = () => {
          window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", t);
        };
      } else
        e && (e(), e = null);
    },
    { immediate: !0 }
  ), f(() => {
    e && e();
  }), { position: s, updatePosition: o };
}
export {
  C as useFloatingPosition
};
