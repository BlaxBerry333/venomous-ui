import { useRef as s, useCallback as u, useEffect as a } from "react";
function g(c, n, l, o, i = !1) {
  const t = s(null), e = s(null), r = u(() => {
    t.current && (clearTimeout(t.current), t.current = null), e.current && (clearTimeout(e.current), e.current = null);
  }, []), f = u(() => {
    e.current && (clearTimeout(e.current), e.current = null);
  }, []), m = u(() => {
    i || (r(), t.current = setTimeout(() => {
      c();
    }, l));
  }, [i, l, r, c]), T = u(() => {
    r(), e.current = setTimeout(() => {
      n();
    }, o);
  }, [o, r, n]);
  return a(() => () => {
    r();
  }, [r]), { show: m, hide: T, cancelHide: f, clearTimers: r };
}
export {
  g as useDelayedToggle
};
