import type { Meta, StoryObj } from "@storybook/react";
import { h } from "vue";

import type { TBreadcrumbItemBaseProps } from "@/core/types";
import BreadcrumbVue from "@/vue/components/Breadcrumb/Breadcrumb.vue";
import BreadcrumbEllipsisVue from "@/vue/components/Breadcrumb/BreadcrumbEllipsis.vue";
import BreadcrumbItemVue from "@/vue/components/Breadcrumb/BreadcrumbItem.vue";
import { VueWrapper } from "../../wrappers";

import "@/core/styles/components/breadcrumb.css";
import "@/core/styles/variables/index.css";

type TStoryBreadcrumbItem = TBreadcrumbItemBaseProps & {
  label: string;
  isEllipsis?: boolean;
};

/**
 * Helper to render a Vue Breadcrumb structure
 */
function renderBreadcrumb({ separator, items }: { separator?: string; items: TStoryBreadcrumbItem[] }) {
  return (
    <VueWrapper
      component={BreadcrumbVue}
      props={separator !== undefined ? { separator } : {}}
      children={{
        default: () =>
          items.map((item, i) => {
            if (item.isEllipsis) {
              return h(BreadcrumbEllipsisVue, { key: i });
            }
            const itemProps: Record<string, unknown> = {};
            if (item.href) itemProps.href = item.href;
            if (item.isCurrentPage) itemProps.isCurrentPage = true;
            if (item.disabled) itemProps.disabled = true;
            return h(BreadcrumbItemVue, { key: i, ...itemProps }, { default: () => item.label });
          }),
      }}
    />
  );
}

const meta: Meta = {
  title: "Vue Components/Breadcrumb",
  parameters: {
    docs: {
      description: {
        component: `Breadcrumb displays hierarchical navigation paths. A compound component with Item and Ellipsis.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
      subcomponents: [
        {
          name: "<BreadcrumbItem>",
          argTypes: {
            href: {
              name: "href",
              description: "Link URL — renders <a> when provided, <span> otherwise",
              table: { type: { summary: "string" } },
            },
            isCurrentPage: {
              name: "isCurrentPage",
              description: 'Marks this item as the current page (adds aria-current="page")',
              table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
            },
            disabled: {
              name: "disabled",
              description: "Whether the item is disabled (renders span instead of link)",
              table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
            },
          },
        },
        {
          name: "<BreadcrumbEllipsis>",
          argTypes: {
            className: {
              name: "className",
              description: "Additional CSS class names",
              table: { type: { summary: "string" }, defaultValue: { summary: '""' } },
            },
          },
        },
      ],
    },
  },
  argTypes: {
    separator: {
      description: "Custom separator character between items",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"/"' },
      },
    },
    "#default": {
      table: { disable: true },
    },
    "#separator": {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Laptop", isCurrentPage: true },
];

/**
 * Basic Usage - Default story shown in Canvas as Playground
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    separator: "/",
  },
  render: function Render(args) {
    return renderBreadcrumb({
      separator: args.separator,
      items: DEFAULT_ITEMS,
    });
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/breadcrumb.css";
import { Breadcrumb, BreadcrumbItem } from "venomous-ui/vue";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
    <BreadcrumbItem href="/products">Products</BreadcrumbItem>
    <BreadcrumbItem is-current-page>Laptop</BreadcrumbItem>
  </Breadcrumb>
</template>`,
      },
    },
  },
};

/**
 * Custom Separator
 */
export const CustomSeparator: Story = {
  name: "Custom Separator",
  tags: ["!dev"],
  render: () => {
    const items = [
      { label: "Home", href: "#" },
      { label: "Category", href: "#" },
      { label: "Page", isCurrentPage: true },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Default (/)</p>
          {renderBreadcrumb({ items })}
        </div>
        <div>
          <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{`Chevron (>)`}</p>
          {renderBreadcrumb({ separator: ">", items })}
        </div>
        <div>
          <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{`Arrow (→)`}</p>
          {renderBreadcrumb({ separator: "→", items })}
        </div>
        <div>
          <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{`Dot (·)`}</p>
          {renderBreadcrumb({ separator: "·", items })}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`separator\` prop to customize the separator between items. For element-type separators (e.g. icons), use the \`#separator\` slot.`,
      },
      source: {
        language: "html",
        code: `<!-- String separator -->
<Breadcrumb separator=">">
  <BreadcrumbItem href="/home">Home</BreadcrumbItem>
  <BreadcrumbItem href="/category">Category</BreadcrumbItem>
  <BreadcrumbItem is-current-page>Page</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb separator="→">...</Breadcrumb>
<Breadcrumb separator="·">...</Breadcrumb>

<!-- Element separator via #separator slot -->
<Breadcrumb>
  <template #separator>
    <MyChevronIcon />
  </template>
  <BreadcrumbItem href="/home">Home</BreadcrumbItem>
  <BreadcrumbItem href="/category">Category</BreadcrumbItem>
  <BreadcrumbItem is-current-page>Page</BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
};

/**
 * With Ellipsis
 */
export const WithEllipsis: Story = {
  name: "With Ellipsis",
  tags: ["!dev"],
  render: () =>
    renderBreadcrumb({
      items: [
        { label: "Home", href: "#" },
        { label: "", isEllipsis: true },
        { label: "Category", href: "#" },
        { label: "Current Page", isCurrentPage: true },
      ],
    }),
  parameters: {
    docs: {
      description: {
        story:
          "Use `BreadcrumbEllipsis` to indicate collapsed intermediate items. This is useful when the breadcrumb trail is too long and you want to collapse middle items.",
      },
      source: {
        language: "html",
        code: `<Breadcrumb>
  <BreadcrumbItem href="/home">Home</BreadcrumbItem>
  <BreadcrumbEllipsis />
  <BreadcrumbItem href="/category">Category</BreadcrumbItem>
  <BreadcrumbItem is-current-page>Current Page</BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
};

/**
 * Disabled Items
 */
export const DisabledItems: Story = {
  name: "Disabled Items",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Disabled item with href</p>
        {renderBreadcrumb({
          items: [
            { label: "Home", href: "#" },
            { label: "Products", href: "#", disabled: true },
            { label: "Laptop", isCurrentPage: true },
          ],
        })}
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Disabled item without href</p>
        {renderBreadcrumb({
          items: [
            { label: "Home", href: "#" },
            { label: "Products", disabled: true },
            { label: "Laptop", isCurrentPage: true },
          ],
        })}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `disabled` on `BreadcrumbItem` to disable navigation. Disabled items always render as `<span>` (even with `href`), display `cursor: not-allowed`, reduced opacity, and include `aria-disabled="true"` for accessibility.',
      },
      source: {
        language: "html",
        code: `<Breadcrumb>
  <BreadcrumbItem href="/home">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products" disabled>Products</BreadcrumbItem>
  <BreadcrumbItem is-current-page>Laptop</BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
};

/**
 * Current Page
 */
export const CurrentPage: Story = {
  name: "Current Page",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>With links</p>
        {renderBreadcrumb({
          items: [
            { label: "Home", href: "#" },
            { label: "Products", href: "#" },
            { label: "Electronics", href: "#" },
            { label: "MacBook Pro", isCurrentPage: true },
          ],
        })}
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Without links (text-only)</p>
        {renderBreadcrumb({
          items: [{ label: "Home" }, { label: "Products" }, { label: "MacBook Pro", isCurrentPage: true }],
        })}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `The last item typically uses \`is-current-page\` to indicate the current page. This adds \`aria-current="page"\` for accessibility and applies a distinct visual style (primary color, medium font weight). Items without \`href\` render as \`<span>\` instead of \`<a>\`.`,
      },
      source: {
        language: "html",
        code: `<!-- With links -->
<Breadcrumb>
  <BreadcrumbItem href="/home">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem is-current-page>MacBook Pro</BreadcrumbItem>
</Breadcrumb>

<!-- Without links -->
<Breadcrumb>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem>Products</BreadcrumbItem>
  <BreadcrumbItem is-current-page>MacBook Pro</BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
};
