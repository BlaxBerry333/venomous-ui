import o from "react";
import { createPortal as s } from "react-dom";
import { COMPONENT_NAMES as n } from "../../../core/constants/componentNames.mjs";
const i = o.memo(({ children: t, container: r }) => {
  const [u, d] = o.useState(null);
  return o.useLayoutEffect(() => {
    if (typeof document > "u")
      return;
    let e = null, l = !1;
    if (r === void 0)
      e = document.createElement("div"), e.setAttribute("data-portal", n.Portal), document.body.appendChild(e), l = !0;
    else if (e = a(r), !e) {
      const f = typeof r == "string" ? `selector "${r}"` : "provided container";
      console.error(`Portal: Could not find ${f}`);
    }
    return d(e), () => {
      l && e && e.parentNode && e.parentNode.removeChild(e);
    };
  }, [r]), u ? s(t, u) : null;
});
i.displayName = n.Portal;
function a(t) {
  return typeof t == "string" ? document.querySelector(t) : t && "current" in t ? t.current : t instanceof HTMLElement ? t : null;
}
export {
  i as default
};
