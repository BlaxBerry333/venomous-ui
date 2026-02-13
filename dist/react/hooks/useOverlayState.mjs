import { useState as i, useRef as l, useEffect as o } from "react";
import { CSS_VAR_NAMES as f } from "../../core/constants/css-variables.mjs";
import { getCssVar as m } from "../../core/helpers/get-css-var.mjs";
import "../../core/helpers/toast-store.mjs";
function C(r) {
  const [u, n] = i(r), [c, t] = i(!1), e = l(null), s = l(null);
  return o(() => (r ? (s.current = document.activeElement, e.current && (clearTimeout(e.current), e.current = null), t(!1), n(!0)) : !r && u && (t(!0), e.current = setTimeout(() => {
    n(!1), t(!1), e.current = null, s.current instanceof HTMLElement && s.current.focus();
  }, m(f.durationNormal))), () => {
    e.current && clearTimeout(e.current);
  }), [r]), { isVisible: u, isClosing: c };
}
export {
  C as useOverlayState
};
