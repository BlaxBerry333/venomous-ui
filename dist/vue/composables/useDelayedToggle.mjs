import { onUnmounted as T } from "vue";
function s(t, u, l, o, r = () => !1) {
  let i = null, e = null;
  function n() {
    i && (clearTimeout(i), i = null), e && (clearTimeout(e), e = null);
  }
  function c() {
    e && (clearTimeout(e), e = null);
  }
  function f() {
    r() || (n(), i = setTimeout(() => {
      t();
    }, l));
  }
  function m() {
    n(), e = setTimeout(() => {
      u();
    }, o);
  }
  return T(() => {
    n();
  }), { show: f, hide: m, cancelHide: c, clearTimers: n };
}
export {
  s as useDelayedToggle
};
