import { jsxs as l, jsx as s } from "react/jsx-runtime";
import h from "react";
import S from "clsx";
import { TOAST_CSS_CLASS_NAMES as a } from "../../../core/constants/cssClassNames.mjs";
import m from "../Icon/Icon.mjs";
const A = {
  success: "mdi:check-circle",
  error: "mdi:close-circle",
  warning: "mdi:alert",
  info: "mdi:information",
  loading: "mdi:loading"
};
function b(i) {
  return i === "error" || i === "warning" ? { role: "alert", "aria-live": "assertive" } : { role: "status", "aria-live": "polite" };
}
const x = h.memo(({ toast: i, onClose: d, onMouseEnter: N, onMouseLeave: u }) => {
  const { variant: e, title: r, description: n, showIcon: f = !0, icon: t, action: c, closable: g = !0, state: o } = i, v = b(e), p = S(
    a.root.className,
    e === "success" && a.variantSuccess.className,
    e === "error" && a.variantError.className,
    e === "warning" && a.variantWarning.className,
    e === "info" && a.variantInfo.className,
    e === "loading" && a.variantLoading.className,
    o === "entering" && a.entering.className,
    o === "exiting" && a.exiting.className
  );
  return /* @__PURE__ */ l(
    "div",
    {
      className: p,
      ...v,
      "aria-atomic": "true",
      "aria-busy": e === "loading" ? "true" : void 0,
      onMouseEnter: N,
      onMouseLeave: u,
      children: [
        f ? t ? /* @__PURE__ */ s("span", { className: a.icon.className, children: t }) : /* @__PURE__ */ s("span", { className: a.icon.className, children: /* @__PURE__ */ s(m, { name: A[e] }) }) : null,
        /* @__PURE__ */ l("div", { className: a.content.className, children: [
          r && /* @__PURE__ */ s("div", { className: a.title.className, children: r }),
          n && /* @__PURE__ */ s("div", { className: a.description.className, children: n }),
          c && /* @__PURE__ */ s("div", { className: a.action.className, children: c })
        ] }),
        g && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: a.closeButton.className,
            onClick: d,
            "aria-label": "Close notification",
            children: /* @__PURE__ */ s(m, { name: "mdi:close" })
          }
        )
      ]
    }
  );
});
x.displayName = "Toast";
export {
  x as default
};
