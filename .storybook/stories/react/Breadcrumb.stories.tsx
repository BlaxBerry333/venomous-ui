import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem } from "@/react/components/Breadcrumb";

import "@/core/styles/components/breadcrumb.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Breadcrumb> = {
  title: "React Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: `Breadcrumb displays hierarchical navigation paths. A compound component with Item and Ellipsis.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
      subcomponents: [
        { name: "<Breadcrumb.Item>", component: BreadcrumbItem },
        { name: "<Breadcrumb.Ellipsis>", component: BreadcrumbEllipsis },
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
    children: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/**
 * Basic Usage - Default story shown in Canvas as Playground
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    separator: "/",
  },
  render: function Render(args) {
    return (
      <Breadcrumb separator={args.separator}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item isCurrentPage>Laptop</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/breadcrumb.css";
import { Breadcrumb } from "venomous-ui/react";

export default function Demo() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Laptop</Breadcrumb.Item>
    </Breadcrumb>
  );
}`,
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
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Default (/)</p>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{`Chevron (>)`}</p>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{`Arrow (→)`}</p>
        <Breadcrumb separator="→">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{`Dot (·)`}</p>
        <Breadcrumb separator="·">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Use the \`separator\` prop to customize the separator between items. Accepts a string or any \`ReactNode\` (e.g. an icon component).`,
      },
      source: {
        code: `{/* String separator */}
<Breadcrumb separator=">">
  <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/category">Category</Breadcrumb.Item>
  <Breadcrumb.Item isCurrentPage>Page</Breadcrumb.Item>
</Breadcrumb>

<Breadcrumb separator="→">...</Breadcrumb>
<Breadcrumb separator="·">...</Breadcrumb>

{/* Element separator (e.g. Icon component) */}
<Breadcrumb separator={<ChevronRightIcon />}>
  <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/category">Category</Breadcrumb.Item>
  <Breadcrumb.Item isCurrentPage>Page</Breadcrumb.Item>
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
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Current Page</Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use `Breadcrumb.Ellipsis` to indicate collapsed intermediate items. This is useful when the breadcrumb trail is too long and you want to collapse middle items.",
      },
      source: {
        code: `<Breadcrumb>
  <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
  <Breadcrumb.Ellipsis />
  <Breadcrumb.Item href="/category">Category</Breadcrumb.Item>
  <Breadcrumb.Item isCurrentPage>Current Page</Breadcrumb.Item>
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
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Disabled item with href</p>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" disabled>
            Products
          </Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>Laptop</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Disabled item without href</p>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item disabled>Products</Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>Laptop</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `disabled` on `Breadcrumb.Item` to disable navigation. Disabled items always render as `<span>` (even with `href`), display `cursor: not-allowed`, reduced opacity, and include `aria-disabled="true"` for accessibility.',
      },
      source: {
        code: `<Breadcrumb>
  <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products" disabled>Products</Breadcrumb.Item>
  <Breadcrumb.Item isCurrentPage>Laptop</Breadcrumb.Item>
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
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>With links</p>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Electronics</Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>MacBook Pro</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Without links (text-only)</p>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
          <Breadcrumb.Item isCurrentPage>MacBook Pro</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `The last item typically uses \`isCurrentPage\` to indicate the current page. This adds \`aria-current="page"\` for accessibility and applies a distinct visual style (primary color, medium font weight). Items without \`href\` render as \`<span>\` instead of \`<a>\`.`,
      },
      source: {
        code: `{/* With links */}
<Breadcrumb>
  <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item isCurrentPage>MacBook Pro</Breadcrumb.Item>
</Breadcrumb>

{/* Without links */}
<Breadcrumb>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item>Products</Breadcrumb.Item>
  <Breadcrumb.Item isCurrentPage>MacBook Pro</Breadcrumb.Item>
</Breadcrumb>`,
      },
    },
  },
};
