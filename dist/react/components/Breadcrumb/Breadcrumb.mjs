import { jsx as t } from "react/jsx-runtime";
import { forwardRef as u, isValidElement as $ } from "react";
import { COMPONENT_NAMES as d } from "../../../core/constants/component-names.mjs";
import { CSS_CLASSES as B } from "../../../core/constants/css-classes.mjs";
const a = B.breadcrumb;
function N(i) {
  const e = [], s = Array.isArray(i) ? i : [i];
  for (const r of s)
    Array.isArray(r) ? e.push(...N(r)) : $(r) && e.push(r);
  return e;
}
const f = u(function({ separator: e = "/", className: s = "", children: r, ...l }, c) {
  const o = N(r), m = [];
  return o.forEach((p, n) => {
    n > 0 && m.push(
      // eslint-disable-next-line react-x/no-array-index-key -- separator is a static presentational element with no identity
      /* @__PURE__ */ t("li", { className: a.item, "aria-hidden": "true", role: "presentation", children: /* @__PURE__ */ t("span", { className: a.separator, children: e }) }, `sep-${n}`)
    ), m.push(p);
  }), /* @__PURE__ */ t("nav", { ref: c, "aria-label": "Breadcrumb", className: `${a.root} ${s}`.trim(), ...l, children: /* @__PURE__ */ t("ol", { className: a.list, children: m }) });
});
f.displayName = d.Breadcrumb;
const b = u(function({ href: e, isCurrentPage: s = !1, disabled: r = !1, className: l = "", children: c, ...o }, m) {
  const p = e && !s && !r ? /* @__PURE__ */ t("a", { href: e, className: a.link, children: c }) : /* @__PURE__ */ t(
    "span",
    {
      className: `${a.text} ${s ? a.textCurrent : ""}`.trim(),
      ...s ? { "aria-current": "page" } : {},
      ...r ? { "aria-disabled": "true" } : {},
      children: c
    }
  ), n = `${a.item} ${r ? a.itemDisabled : ""} ${l}`.trim();
  return /* @__PURE__ */ t("li", { ref: m, className: n, ...o, children: p });
});
b.displayName = `${d.Breadcrumb}.Item`;
const h = u(function({ className: e = "", children: s, ...r }, l) {
  return /* @__PURE__ */ t("li", { ref: l, className: `${a.item} ${e}`.trim(), ...r, children: /* @__PURE__ */ t("span", { className: a.ellipsis, role: "presentation", children: s ?? "…" }) });
});
h.displayName = `${d.Breadcrumb}.Ellipsis`;
f.Item = b;
f.Ellipsis = h;
export {
  f as Breadcrumb,
  h as BreadcrumbEllipsis,
  b as BreadcrumbItem
};
