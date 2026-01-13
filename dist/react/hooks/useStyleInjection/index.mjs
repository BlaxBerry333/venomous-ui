import u from "react";
const l = /* @__PURE__ */ new Map();
function r(n, t) {
  u.useInsertionEffect(() => {
    if (typeof document > "u") return;
    const e = l.get(n);
    if (!((e == null ? void 0 : e.css) === t && e.element.isConnected))
      if (e != null && e.element.isConnected)
        e.element.textContent = t, e.css = t;
      else {
        const i = document.querySelector(`style[data-${n}]`);
        if (i)
          i.textContent = t, l.set(n, { css: t, element: i });
        else {
          const o = document.createElement("style");
          o.setAttribute(`data-${n}`, ""), o.textContent = t, document.head.appendChild(o), l.set(n, { css: t, element: o });
        }
      }
  }, [n, t]);
}
export {
  r as default
};
