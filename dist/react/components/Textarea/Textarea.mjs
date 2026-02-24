import { jsx as h } from "react/jsx-runtime";
import { forwardRef as g, useRef as E, useCallback as T, useEffect as j } from "react";
import { COMPONENT_NAMES as v } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as y } from "../../../core/constants/css-classes.mjs";
import "../../../core/helpers/toast-store.mjs";
import { useMergeRefs as M } from "../../hooks/useMergeRefs.mjs";
const e = y.textarea, A = g(function({
  size: c = "md",
  resize: n = "vertical",
  autoResize: r = !1,
  disabled: o = !1,
  readOnly: i = !1,
  error: f,
  rows: m = 3,
  className: p = "",
  onChange: s,
  ...x
}, d) {
  const l = E(null), u = M(l, d), a = T(() => {
    const t = l.current;
    !t || !r || (t.style.height = "auto", t.style.height = `${t.scrollHeight}px`);
  }, [r]);
  j(() => {
    a();
  }, [a]);
  const N = (t) => {
    r && a(), s == null || s(t);
  }, S = [
    e.root,
    e.sizes[c],
    r ? e.resize.none : e.resize[n],
    f ? e.states.error : "",
    o ? e.states.disabled : "",
    i ? e.states.readonly : "",
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h(
    "textarea",
    {
      ref: u,
      className: S,
      disabled: o,
      readOnly: i,
      rows: m,
      "aria-invalid": f || void 0,
      onChange: N,
      ...x
    }
  );
});
A.displayName = v.Textarea;
export {
  A as Textarea
};
