import { jsx as S } from "react/jsx-runtime";
import { forwardRef as i, useMemo as u } from "react";
import { COMPONENT_NAMES as N } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as d } from "../../../core/constants/css-classes.mjs";
const s = d.skeleton, k = i(function({ variant: n = "rect", animation: t = "pulse", width: o, height: e, className: a = "", style: m, ...f }, l) {
  const p = [
    s.root,
    n !== "rect" ? s.variants[n] : "",
    t ? s.animations[t] : "",
    a
  ].filter(Boolean).join(" "), c = u(() => {
    const r = { ...m };
    return o !== void 0 && (r.width = typeof o == "number" ? `${o}px` : o), e !== void 0 && (r.height = typeof e == "number" ? `${e}px` : e), r;
  }, [o, e, m]);
  return /* @__PURE__ */ S("span", { ref: l, className: p, style: c, "aria-hidden": "true", ...f });
});
k.displayName = N.Skeleton;
export {
  k as Skeleton
};
