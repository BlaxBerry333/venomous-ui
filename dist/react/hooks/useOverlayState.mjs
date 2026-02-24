import { useState as l, useRef as u, useEffect as f } from "react";
import { CSS_VAR_NAMES as m } from "../../core/constants/css-variables.mjs";
import { getCssVar as a } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function V(r) {
  const [t, i] = l(r), [o, s] = l(!1), e = u(null), n = u(null), c = u(t);
  return c.current = t, f(() => (r ? (n.current = document.activeElement, e.current && (clearTimeout(e.current), e.current = null), s(!1), i(!0)) : !r && c.current && (s(!0), e.current = setTimeout(() => {
    i(!1), s(!1), e.current = null, n.current instanceof HTMLElement && n.current.focus();
  }, a(m.durationNormal))), () => {
    e.current && clearTimeout(e.current);
  }), [r]), { isVisible: t, isClosing: o };
}
export {
  V as useOverlayState
};
