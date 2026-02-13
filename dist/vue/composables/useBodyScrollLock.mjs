import { watch as l, onUnmounted as d } from "vue";
function r(e) {
  let o = "";
  l(
    e,
    (t) => {
      t ? (o = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = o;
    },
    { immediate: !0 }
  ), d(() => {
    document.body.style.overflow = o || "";
  });
}
export {
  r as useBodyScrollLock
};
