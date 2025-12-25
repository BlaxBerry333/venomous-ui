import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/react/components";

import { Breadcrumb } from "./index";

const meta = {
  title: "React/Components/<Breadcrumb>",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Render as a different HTML element.",
      table: {
        type: { summary: "React.ElementType" },
        defaultValue: { summary: '"nav"' },
      },
      control: false,
    },
    separator: {
      description: "Custom separator element between items.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: '"/"' },
      },
      control: { type: "text" },
    },
    maxItems: {
      description: "Maximum number of items to display before collapsing.",
      table: {
        type: { summary: "number" },
      },
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    itemsBeforeCollapse: {
      description: "Number of items to show before the collapsed ellipsis.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
      control: { type: "number" },
      if: { arg: "maxItems", truthy: true },
    },
    itemsAfterCollapse: {
      description: "Number of items to show after the collapsed ellipsis.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
      control: { type: "number" },
      if: { arg: "maxItems", truthy: true },
    },
    children: {
      description: "Breadcrumb content (Breadcrumb.Item components).",
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
          <Subtitle>Breadcrumb Navigation Component</Subtitle>

          <Markdown>
            {`
A compound component for breadcrumb navigation, including \`<Breadcrumb>\`、\`<Breadcrumb.Item>\`、\`<Breadcrumb.Separator>\`.<br />
Must be used within \`<ThemeProvider>\` component.
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
      {/* Basic breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Electronics</Breadcrumb.Item>
      </Breadcrumb>

      {/* With custom separator */}
      <Breadcrumb separator={<Icon name="mdi:chevron-right" width={16} />}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
        <Breadcrumb.Item active>API</Breadcrumb.Item>
      </Breadcrumb>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{CustomSeparatorExample.name}</Subtitle>
          <Description of={CustomSeparatorExample} />
          <Canvas of={CustomSeparatorExample} />

          <Subtitle>{WithIconsExample.name}</Subtitle>
          <Description of={WithIconsExample} />
          <Canvas of={WithIconsExample} />

          <Subtitle>{CollapsedExample.name}</Subtitle>
          <Description of={CollapsedExample} />
          <Canvas of={CollapsedExample} />

          <Subtitle>{DisabledExample.name}</Subtitle>
          <Description of={DisabledExample} />
          <Canvas of={DisabledExample} />

          <Heading>Props</Heading>

          <Subtitle>{"<Breadcrumb>"}</Subtitle>
          <ArgTypes />

          <Subtitle>{"<Breadcrumb.Item>"}</Subtitle>
          <ArgTypes of={Breadcrumb.Item} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",

  args: {
    separator: "/",
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1,
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Electronics</Breadcrumb.Item>
      <Breadcrumb.Item active>Smartphones</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

// ============================
// Basic Example
// ============================
export const BasicExample: Story = {
  name: "Basic Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "A simple breadcrumb showing navigation path. The last item uses `active` prop.",
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
// Custom Separator Example
// ============================
export const CustomSeparatorExample: Story = {
  name: "Custom Separator Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `separator` prop to customize the separator. Supports text or Icon components.",
      },
      source: {
        code: `
<Breadcrumb separator={<Icon name="mdi:chevron-right" width={16} />}>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Docs</Breadcrumb.Item>
  <Breadcrumb.Item active>API</Breadcrumb.Item>
</Breadcrumb>

<Breadcrumb separator=">>>">
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">About</Breadcrumb.Item>
  <Breadcrumb.Item active>Team</Breadcrumb.Item>
</Breadcrumb>

<Breadcrumb separator="•">
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
  <Breadcrumb.Item active>Profile</Breadcrumb.Item>
</Breadcrumb>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Breadcrumb separator={<Icon name="mdi:chevron-right" width={16} />}>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Docs</Breadcrumb.Item>
          <Breadcrumb.Item active>API</Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb separator=">>>">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">About</Breadcrumb.Item>
          <Breadcrumb.Item active>Team</Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb separator="•">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  },
};

// ============================
// With Icons Example
// ============================
export const WithIconsExample: Story = {
  name: "With Icons Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `icon` prop on Breadcrumb.Item to add icons before the text.",
      },
      source: {
        code: `
<Breadcrumb separator={<Icon name="mdi:chevron-right" width={16} />}>
  <Breadcrumb.Item href="/" icon={<Icon name="mdi:home" width={16} />}>
    Home
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/settings" icon={<Icon name="mdi:cog" width={16} />}>
    Settings
  </Breadcrumb.Item>
  <Breadcrumb.Item active icon={<Icon name="mdi:account" width={16} />}>
    Profile
  </Breadcrumb.Item>
</Breadcrumb>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Breadcrumb separator={<Icon name="mdi:chevron-right" width={16} />}>
        <Breadcrumb.Item href="#" icon={<Icon name="mdi:home" width={16} />}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" icon={<Icon name="mdi:cog" width={16} />}>
          Settings
        </Breadcrumb.Item>
        <Breadcrumb.Item active icon={<Icon name="mdi:account" width={16} />}>
          Profile
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};

// ============================
// Collapsed Example
// ============================
export const CollapsedExample: Story = {
  name: "Collapsed Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `maxItems` to collapse long breadcrumb paths. Click the ellipsis to expand all items.",
      },
      source: {
        code: `
<Breadcrumb maxItems={4} itemsBeforeCollapse={1} itemsAfterCollapse={2}>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/electronics">Electronics</Breadcrumb.Item>
  <Breadcrumb.Item href="/smartphones">Smartphones</Breadcrumb.Item>
  <Breadcrumb.Item href="/apple">Apple</Breadcrumb.Item>
  <Breadcrumb.Item href="/iphone">iPhone</Breadcrumb.Item>
  <Breadcrumb.Item active>iPhone 15 Pro</Breadcrumb.Item>
</Breadcrumb>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div>
          <p style={{ margin: "0 0 8px 0", fontSize: 14, color: "#666" }}>Collapsed (maxItems=4):</p>
          <Breadcrumb
            maxItems={4}
            itemsBeforeCollapse={1}
            itemsAfterCollapse={2}
            separator={<Icon name="mdi:chevron-right" width={16} />}
          >
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Electronics</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Smartphones</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Apple</Breadcrumb.Item>
            <Breadcrumb.Item href="#">iPhone</Breadcrumb.Item>
            <Breadcrumb.Item active>iPhone 15 Pro</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div>
          <p style={{ margin: "0 0 8px 0", fontSize: 14, color: "#666" }}>Expanded (no maxItems):</p>
          <Breadcrumb separator={<Icon name="mdi:chevron-right" width={16} />}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Electronics</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Smartphones</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Apple</Breadcrumb.Item>
            <Breadcrumb.Item href="#">iPhone</Breadcrumb.Item>
            <Breadcrumb.Item active>iPhone 15 Pro</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
  },
};

// ============================
// Disabled Example
// ============================
export const DisabledExample: Story = {
  name: "Disabled Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `disabled` prop to disable specific breadcrumb items.",
      },
      source: {
        code: `
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products" disabled>Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
</Breadcrumb>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#" disabled>
          Products (disabled)
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
      </Breadcrumb>
    );
  },
};
