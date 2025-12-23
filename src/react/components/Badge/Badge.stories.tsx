import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Avatar } from "@/react/components/Avatar";
import { Icon } from "@/react/components/Icon";
import Badge from "./Badge";

const meta = {
  title: "React/Components/<Badge>",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "Badge content (number, text, or custom element).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    variant: {
      description: "Visual variant.",
      type: { name: "string" },
      table: {
        type: { summary: '"standard" | "dot"' },
        defaultValue: { summary: '"standard"' },
      },
      control: { type: "radio" },
      options: ["standard", "dot"],
    },
    size: {
      description: "Size of the badge.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    color: {
      description: "Color theme.",
      type: { name: "string" },
      table: {
        type: { summary: '"default" | "primary" | "success" | "error" | "warning" | "info"' },
        defaultValue: { summary: '"error"' },
      },
      control: { type: "select" },
      options: ["default", "primary", "success", "error", "warning", "info"],
    },
    max: {
      description: "Maximum count to display (shows max+ when exceeded).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "99" },
      },
      control: { type: "number" },
    },
    showZero: {
      description: "Whether to show badge when content is 0.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    invisible: {
      description: "Whether to hide the badge.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    anchorOrigin: {
      description: "Position of the badge relative to children.",
      type: { name: "string" },
      table: {
        type: { summary: '"top-right" | "top-left" | "bottom-right" | "bottom-left"' },
        defaultValue: { summary: '"top-right"' },
      },
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
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
        type: { summary: "CSSProperties | ((theme: ITheme) => CSSProperties)" },
      },
      control: false,
    },
    children: {
      description: "The element the badge is attached to.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Small status indicator attached to an element</Subtitle>

          <Markdown>
            {`
Badge generates a small badge to the corner of its child element.
Commonly used for notification counts, status indicators, and more.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Badge, Icon } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic badge with count */}
      <Badge content={5}>
        <Icon name="mdi:bell" />
      </Badge>

      {/* Dot variant for status */}
      <Badge variant="dot" color="success">
        <Avatar>U</Avatar>
      </Badge>

      {/* With max overflow */}
      <Badge content={150} max={99}>
        <Icon name="mdi:mail" />
      </Badge>

      {/* Custom position */}
      <Badge content={3} anchorOrigin="bottom-right">
        <Avatar imageSrc="avatar.jpg" />
      </Badge>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{VariantsExample.name}</Subtitle>
          <Description of={VariantsExample} />
          <Canvas of={VariantsExample} />

          <Subtitle>{ColorsExample.name}</Subtitle>
          <Description of={ColorsExample} />
          <Canvas of={ColorsExample} />

          <Subtitle>{SizesExample.name}</Subtitle>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Subtitle>{MaxOverflowExample.name}</Subtitle>
          <Description of={MaxOverflowExample} />
          <Canvas of={MaxOverflowExample} />

          <Subtitle>{PositioningExample.name}</Subtitle>
          <Description of={PositioningExample} />
          <Canvas of={PositioningExample} />

          <Subtitle>{InvisibleExample.name}</Subtitle>
          <Description of={InvisibleExample} />
          <Canvas of={InvisibleExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    content: 5,
    variant: "standard",
    size: "medium",
    color: "error",
    max: 99,
    showZero: false,
    invisible: false,
    anchorOrigin: "top-right",
  },
  render: function RenderStory(args) {
    return (
      <Badge {...args}>
        <Icon name="mdi:bell" style={{ fontSize: 24 }} />
      </Badge>
    );
  },
};

// ============================
// Basic Example
// ============================
export const BasicExample: Story = {
  name: "Basic",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Basic badge with notification count.",
      },
      source: {
        code: `
<Badge content={5}>
  <Icon name="mdi:bell" />
</Badge>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 24 }}>
        <Badge content={5}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge content={12}>
          <Icon name="mdi:email" style={{ fontSize: 24 }} />
        </Badge>
        <Badge content="New">
          <Icon name="mdi:shopping-outline" style={{ fontSize: 24 }} />
        </Badge>
      </div>
    );
  },
};

// ============================
// Variants Example
// ============================
export const VariantsExample: Story = {
  name: "Variants",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Badge supports `standard` (with content) and `dot` (status indicator) variants.",
      },
      source: {
        code: `
<Badge variant="standard" content={5}>
  <Icon name="mdi:bell" />
</Badge>
<Badge variant="dot">
  <Icon name="mdi:bell" />
</Badge>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Badge variant="standard" content={5}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge variant="dot">
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge variant="dot" color="success">
          <Avatar size="medium">U</Avatar>
        </Badge>
      </div>
    );
  },
};

// ============================
// Colors Example
// ============================
export const ColorsExample: Story = {
  name: "Colors",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Badge supports multiple color themes.",
      },
      source: {
        code: `
<Badge color="default" content={1}>...</Badge>
<Badge color="primary" content={2}>...</Badge>
<Badge color="success" content={3}>...</Badge>
<Badge color="error" content={4}>...</Badge>
<Badge color="warning" content={5}>...</Badge>
<Badge color="info" content={6}>...</Badge>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 24 }}>
        <Badge color="default" content={1}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge color="primary" content={2}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge color="success" content={3}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge color="error" content={4}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge color="warning" content={5}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <Badge color="info" content={6}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
      </div>
    );
  },
};

// ============================
// Sizes Example
// ============================
export const SizesExample: Story = {
  name: "Sizes",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Badge comes in three sizes: `small`, `medium`, and `large`.",
      },
      source: {
        code: `
<Badge size="small" content={5}>...</Badge>
<Badge size="medium" content={5}>...</Badge>
<Badge size="large" content={5}>...</Badge>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Badge size="small" content={5}>
            <Icon name="mdi:bell" style={{ fontSize: 24 }} />
          </Badge>
          <Badge size="medium" content={5}>
            <Icon name="mdi:bell" style={{ fontSize: 24 }} />
          </Badge>
          <Badge size="large" content={5}>
            <Icon name="mdi:bell" style={{ fontSize: 24 }} />
          </Badge>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Badge size="small" variant="dot">
            <Icon name="mdi:bell" style={{ fontSize: 24 }} />
          </Badge>
          <Badge size="medium" variant="dot">
            <Icon name="mdi:bell" style={{ fontSize: 24 }} />
          </Badge>
          <Badge size="large" variant="dot">
            <Icon name="mdi:bell" style={{ fontSize: 24 }} />
          </Badge>
        </div>
      </div>
    );
  },
};

// ============================
// Max Overflow Example
// ============================
export const MaxOverflowExample: Story = {
  name: "Max Overflow",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `max` prop to cap the displayed count. When content exceeds max, it shows `max+`. Use `showZero` to display badge when content is 0.",
      },
      source: {
        code: `
<Badge content={99} max={99}>...</Badge>
<Badge content={100} max={99}>...</Badge>
<Badge content={1000} max={999}>...</Badge>
<Badge content={0} showZero>...</Badge>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 24 }}>
        <Badge content={99} max={99}>
          <Icon name="mdi:email" style={{ fontSize: 24 }} />
        </Badge>
        <Badge content={100} max={99}>
          <Icon name="mdi:email" style={{ fontSize: 24 }} />
        </Badge>
        <Badge content={1000} max={999}>
          <Icon name="mdi:email" style={{ fontSize: 24 }} />
        </Badge>
        <Badge content={0} showZero>
          <Icon name="mdi:email" style={{ fontSize: 24 }} />
        </Badge>
      </div>
    );
  },
};

// ============================
// Positioning Example
// ============================
export const PositioningExample: Story = {
  name: "Positioning",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `anchorOrigin` to position the badge at different corners.",
      },
      source: {
        code: `
<Badge anchorOrigin="top-right" content={1}>...</Badge>
<Badge anchorOrigin="top-left" content={2}>...</Badge>
<Badge anchorOrigin="bottom-right" content={3}>...</Badge>
<Badge anchorOrigin="bottom-left" content={4}>...</Badge>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const boxStyle: React.CSSProperties = {
      width: 40,
      height: 40,
      backgroundColor: "#e0e0e0",
      borderRadius: 4,
    };

    return (
      <div style={{ display: "flex", gap: 32 }}>
        <Badge anchorOrigin="top-right" content={1}>
          <div style={boxStyle} />
        </Badge>
        <Badge anchorOrigin="top-left" content={2}>
          <div style={boxStyle} />
        </Badge>
        <Badge anchorOrigin="bottom-right" content={3}>
          <div style={boxStyle} />
        </Badge>
        <Badge anchorOrigin="bottom-left" content={4}>
          <div style={boxStyle} />
        </Badge>
      </div>
    );
  },
};

// ============================
// Invisible Example
// ============================
export const InvisibleExample: Story = {
  name: "Invisible",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `invisible` prop to hide the badge. Useful for conditional display.",
      },
      source: {
        code: `
const [count, setCount] = useState(0);

<Badge content={count} invisible={count === 0}>
  <Icon name="mdi:bell" />
</Badge>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [count, setCount] = React.useState(0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        <Badge content={count} invisible={count === 0}>
          <Icon name="mdi:bell" style={{ fontSize: 24 }} />
        </Badge>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setCount((c) => Math.max(0, c - 1))}>-</button>
          <span style={{ minWidth: 24, textAlign: "center" }}>{count}</span>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>
    );
  },
};
