<script lang="ts">
import { defineComponent, h, type VNode } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TBreadcrumbProps } from "./Breadcrumb.types";

const classes = CSS_CLASSES.breadcrumb;

/**
 * Flatten nested fragment VNodes into a flat array of element VNodes.
 * Vue slot children may contain Fragments when using v-for or multiple root elements.
 */
function flattenChildren(children: VNode[]): VNode[] {
  const result: VNode[] = [];
  for (const child of children) {
    if (typeof child.type === "symbol" && Array.isArray(child.children)) {
      // Fragment node — recurse into its children
      result.push(...flattenChildren(child.children as VNode[]));
    } else {
      result.push(child);
    }
  }
  return result;
}

export default defineComponent({
  name: "Breadcrumb",
  props: {
    separator: { type: String, default: undefined },
    className: { type: String, default: "" },
  },
  setup(props: TBreadcrumbProps, { slots }) {
    return () => {
      const defaultChildren = slots.default?.() ?? [];
      const items = flattenChildren(defaultChildren);

      // Determine separator content: #separator slot > separator prop > default "/"
      const separatorContent = slots.separator?.() ?? props.separator ?? "/";

      const withSeparators: VNode[] = [];
      items.forEach((child, index) => {
        if (index > 0) {
          withSeparators.push(
            h("li", { key: `sep-${index}`, class: classes.item, "aria-hidden": "true", role: "presentation" }, [
              h("span", { class: classes.separator }, [separatorContent]),
            ]),
          );
        }
        withSeparators.push(child);
      });

      return h(
        "nav",
        {
          class: `${classes.root} ${props.className}`.trim(),
          "aria-label": "Breadcrumb",
        },
        [h("ol", { class: classes.list }, withSeparators)],
      );
    };
  },
});
</script>
