import { jsx as s } from "react/jsx-runtime";
import { forwardRef as g, useState as u, useEffect as v } from "react";
import { COMPONENT_NAMES as A } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as h } from "../../../core/constants/css-classes.mjs";
import { getAvatarInitials as E } from "../../../core/helpers/get-avatar-initials.mjs";
import "../../../core/helpers/toast-store.mjs";
const a = h.avatar, x = g(function({ src: t, alt: r, name: i, size: m = "md", shape: n = "circle", icon: o, className: c = "", ...f }, p) {
  const [N, l] = u(!1);
  v(() => {
    l(!1);
  }, [t]);
  const d = [a.root, a.sizes[m], a.shapes[n], c].filter(Boolean).join(" "), S = r || i || "avatar";
  let e = null;
  return t && !N ? e = /* @__PURE__ */ s("img", { className: a.image, src: t, alt: r || "", onError: () => l(!0) }) : i ? e = /* @__PURE__ */ s("span", { className: a.text, children: E(i) }) : o ? e = /* @__PURE__ */ s("span", { className: a.icon, children: o }) : r && (e = /* @__PURE__ */ s("span", { className: a.text, children: r })), /* @__PURE__ */ s("span", { ref: p, className: d, role: "img", "aria-label": S, ...f, children: e });
});
x.displayName = A.Avatar;
export {
  x as Avatar
};
