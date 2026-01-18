import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/react/components";

import { Breadcrumb } from "./index";

const meta = {
  title: "React/Components/<Breadcrumb.Item>",
  component: Breadcrumb.Item,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Render as a different HTML element or custom component (e.g., Next.js Link).",
      table: {
        type: { summary: "React.ElementType" },
        defaultValue: { summary: '"a" (or "span" when active)' },
      },
      control: false,
    },
    active: {
      description: "Whether this is the current/active page. Renders as `<span>` by default when active.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the item is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    icon: {
      description: "Icon element to display before the text.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    href: {
      description: "Link URL (when using default `<a>` element).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
    },
    children: {
      description: "Breadcrumb item content (link text).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    className: {
      description: "Additional CSS class names.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    style: {
      description: "Custom styles, supports object or theme callback function.",
      table: {
        type: { summary: "CSSProperties | ((theme: Theme) => CSSProperties)" },
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Breadcrumb Item Component</Subtitle>

          <Markdown>
            {`
Individual breadcrumb item with link, icon, and state support.<br />
Must be used within \`<Breadcrumb>\` component.

**This is a polymorphic component** - use the \`as\` prop to render as different elements (e.g., Next.js Link).
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Breadcrumb, Icon } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic breadcrumb items */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
      </Breadcrumb>

      {/* With icons */}
      <Breadcrumb>
        <Breadcrumb.Item href="/" icon={<Icon name="mdi:home" />}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/docs" icon={<Icon name="mdi:folder" />}>
          Docs
        </Breadcrumb.Item>
        <Breadcrumb.Item active>API</Breadcrumb.Item>
      </Breadcrumb>

      {/* Disabled state */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products" disabled>Disabled</Breadcrumb.Item>
        <Breadcrumb.Item active>Current</Breadcrumb.Item>
      </Breadcrumb>
    </ThemeProvider>
  );
}`}
          />

          <Heading>TypeScript Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`import type { BreadcrumbItemProps, PolymorphicBreadcrumbItemProps } from "venomous-ui";
import Link from "next/link";

// Basic usage - simple interface for common cases
const itemProps: BreadcrumbItemProps = {
  active: true,
  href: "/home",
  icon: <HomeIcon />,
  children: "Home"
};

// Advanced usage - polymorphic type for custom elements
const linkProps: PolymorphicBreadcrumbItemProps<typeof Link> = {
  as: Link,
  href: "/products",
  children: "Products"
};`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{WithIconExample.name}</Subtitle>
          <Description of={WithIconExample} />
          <Canvas of={WithIconExample} />

          <Subtitle>{StatesExample.name}</Subtitle>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />

          <Subtitle>{PolymorphicExample.name}</Subtitle>
          <Description of={PolymorphicExample} />
          <Canvas of={PolymorphicExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Breadcrumb.Item>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    active: false,
    disabled: false,
    href: "#",
  },
  render: (args) => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item {...args}>Current Item</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

// ============================
// Basic Example
// ============================
export const BasicExample: Story = {
  name: "Basic",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Basic breadcrumb items with `href` for navigation.",
      },
      source: {
        code: `
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Electronics</Breadcrumb.Item>
</Breadcrumb>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Electronics</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};

// ============================
// With Icon Example
// ============================
export const WithIconExample: Story = {
  name: "With Icon",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `icon` prop to add an icon before the text.",
      },
      source: {
        code: `
<Breadcrumb.Item href="/" icon={<Icon name="mdi:home" />}>
  Home
</Breadcrumb.Item>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Breadcrumb separator={<Icon name="mdi:chevron-right" />}>
        <Breadcrumb.Item href="#" icon={<Icon name="mdi:home" />}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" icon={<Icon name="mdi:folder" />}>
          Documents
        </Breadcrumb.Item>
        <Breadcrumb.Item active icon={<Icon name="mdi:file" />}>
          Report.pdf
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};

// ============================
// States Example
// ============================
export const StatesExample: Story = {
  name: "States",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "`active` marks the current page (renders as `<span>`). `disabled` prevents interaction.",
      },
      source: {
        code: `
<Breadcrumb>
  <Breadcrumb.Item href="/">Normal</Breadcrumb.Item>
  <Breadcrumb.Item href="/products" disabled>Disabled</Breadcrumb.Item>
  <Breadcrumb.Item active>Active (current page)</Breadcrumb.Item>
</Breadcrumb>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">Normal</Breadcrumb.Item>
        <Breadcrumb.Item href="#" disabled>
          Disabled
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Active (current page)</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};

// ============================
// Polymorphic Example
// ============================
export const PolymorphicExample: Story = {
  name: "Polymorphic (as prop)",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `as` prop to render as different elements. Common use case: Next.js `Link` for client-side navigation.",
      },
      source: {
        code: `
import Link from "next/link";

<Breadcrumb>
  {/* Render as Next.js Link */}
  <Breadcrumb.Item as={Link} href="/home">Home</Breadcrumb.Item>

  {/* Render as button */}
  <Breadcrumb.Item as="button" onClick={() => navigate("/products")}>
    Products
  </Breadcrumb.Item>

  {/* Default: renders as <a> or <span> when active */}
  <Breadcrumb.Item active>Current</Breadcrumb.Item>
</Breadcrumb>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item as="button" onClick={() => alert("Clicked Home")}>
          Home (button)
        </Breadcrumb.Item>
        <Breadcrumb.Item as="button" onClick={() => alert("Clicked Products")}>
          Products (button)
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Current (span)</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};
