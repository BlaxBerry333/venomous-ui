import { jsx as o } from "react/jsx-runtime";
import { useSyncExternalStore as f } from "react";
import { CSS_CLASSES as S } from "../../../core/constants/css-classes.mjs";
import { toastStore as p } from "../../../core/helpers/toast-store.mjs";
import { Portal as u } from "../Portal/Portal.mjs";
import { ToastItem as d } from "./ToastItem.mjs";
const a = S.toast, b = [];
function h({
  store: t = p,
  placement: s = "top",
  duration: n = 4e3,
  closable: i = !0,
  className: l = "",
  icons: m
}) {
  const r = f(t.subscribe, t.getToasts, () => b);
  if (r.length === 0)
    return null;
  const c = [a.container, a.placements[s], l].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o("ol", { className: c, role: "region", "aria-label": "Notifications", tabIndex: -1, children: r.map((e) => /* @__PURE__ */ o(
    d,
    {
      toast: e,
      store: t,
      defaultDuration: n,
      defaultClosable: i,
      icons: m
    },
    e.id
  )) }) });
}
export {
  h as Toaster
};
