import { watch as u, onUnmounted as c } from "vue";
let o = 0, n = "";
function r(f) {
  let e = !1;
  function d() {
    typeof document > "u" || e || (o === 0 && (n = document.body.style.overflow), o++, e = !0, document.body.style.overflow = "hidden");
  }
  function t() {
    typeof document > "u" || !e || (e = !1, o--, o === 0 && (document.body.style.overflow = n));
  }
  u(
    f,
    (l) => {
      l ? d() : t();
    },
    { immediate: !0 }
  ), c(() => {
    t();
  });
}
export {
  r as useBodyScrollLock
};
