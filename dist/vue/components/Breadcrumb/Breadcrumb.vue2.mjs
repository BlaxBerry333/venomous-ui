import { defineComponent as d, h as t } from "vue";
import { CSS_CLASSES as m } from "../../../core/constants/css-classes.mjs";
const n = m.breadcrumb;
function p(a) {
  const r = [];
  for (const e of a)
    typeof e.type == "symbol" && Array.isArray(e.children) ? r.push(...p(e.children)) : r.push(e);
  return r;
}
const S = d({
  name: "Breadcrumb",
  props: {
    separator: { type: String, default: void 0 },
    className: { type: String, default: "" }
  },
  setup(a, { slots: r }) {
    return () => {
      var i, o;
      const e = ((i = r.default) == null ? void 0 : i.call(r)) ?? [], u = p(e), l = ((o = r.separator) == null ? void 0 : o.call(r)) ?? a.separator ?? "/", s = [];
      return u.forEach((f, c) => {
        c > 0 && s.push(
          t("li", { key: `sep-${c}`, class: n.item, "aria-hidden": "true", role: "presentation" }, [
            t("span", { class: n.separator }, [l])
          ])
        ), s.push(f);
      }), t(
        "nav",
        {
          class: `${n.root} ${a.className}`.trim(),
          "aria-label": "Breadcrumb"
        },
        [t("ol", { class: n.list }, s)]
      );
    };
  }
});
export {
  S as default
};
