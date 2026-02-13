import { jsx as h } from "react/jsx-runtime";
import { forwardRef as E, useRef as T, useCallback as j, useEffect as v } from "react";
import { COMPONENT_NAMES as y } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as g } from "../../../core/constants/css-classes.mjs";
const e = g.textarea, A = E(function({
  size: c = "md",
  resize: n = "vertical",
  autoResize: s = !1,
  disabled: l = !1,
  readOnly: i = !1,
  error: f,
  rows: m = 3,
  className: x = "",
  onChange: a,
  ...d
}, p) {
  const u = T(null), r = p || u, o = j(() => {
    const t = r.current;
    !t || !s || (t.style.height = "auto", t.style.height = `${t.scrollHeight}px`);
  }, [s, r]);
  v(() => {
    o();
  }, [o]);
  const N = (t) => {
    s && o(), a == null || a(t);
  }, S = [
    e.root,
    e.sizes[c],
    s ? e.resize.none : e.resize[n],
    f ? e.states.error : "",
    l ? e.states.disabled : "",
    i ? e.states.readonly : "",
    x
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h(
    "textarea",
    {
      ref: r,
      className: S,
      disabled: l,
      readOnly: i,
      rows: m,
      "aria-invalid": f || void 0,
      onChange: N,
      ...d
    }
  );
});
A.displayName = y.Textarea;
export {
  A as Textarea
};
