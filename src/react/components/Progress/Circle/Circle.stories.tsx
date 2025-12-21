import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Circle from "./Circle";

const meta = {
  title: "React/Components/<Progress.Circle>",
  component: Circle,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "Progress value (0-100). Ignored when animated is true.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "range", min: 0, max: 100 },
    },
    size: {
      description: "Progress circle size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    color: {
      description: "Progress circle color. Supports preset colors or custom CSS color values.",
      type: { name: "string" },
      table: {
        type: { summary: '"primary" | "success" | "error" | "warning" | "info" | string' },
        defaultValue: { summary: '"primary"' },
      },
      control: { type: "text" },
    },
    animated: {
      description: "Whether to show animated indeterminate state (for loading).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    showLabel: {
      description:
        "Whether to show the label in the center. Shows percentage by default, or custom `label` if provided.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    label: {
      description:
        "Custom label content. When `animated` is true and no custom label is provided, the label area is empty.",
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
        type: { summary: "React.CSSProperties | ((theme: Theme) => React.CSSProperties)" },
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
          <Subtitle>Circular progress indicator component</Subtitle>

          <Markdown>
            {`
A circular progress indicator for displaying progress or loading state.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Progress } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <Progress.Circle value={50} />

      {/* With label */}
      <Progress.Circle value={75} showLabel />

      {/* Animated loading state */}
      <Progress.Circle animated />
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{SizesExample.name}</Heading>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Heading>{AnimatedExample.name}</Heading>
          <Description of={AnimatedExample} />
          <Canvas of={AnimatedExample} />

          <Heading>{WithLabelExample.name}</Heading>
          <Description of={WithLabelExample} />
          <Canvas of={WithLabelExample} />

          <Heading>{ColorsExample.name}</Heading>
          <Description of={ColorsExample} />
          <Canvas of={ColorsExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Circle>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    value: 50,
    size: "medium",
    color: "primary",
    animated: false,
    showLabel: false,
  },
};

// ============================
// Sizes Example
// ============================
export const SizesExample: Story = {
  name: "Sizes Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Three `size` options: `small`, `medium`, `large`.",
      },
      source: {
        code: `
<Progress.Circle size="small" value={50} showLabel />
<Progress.Circle size="medium" value={50} showLabel />
<Progress.Circle size="large" value={50} showLabel />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <Circle size="small" value={50} showLabel />
        <Circle size="medium" value={50} showLabel />
        <Circle size="large" value={50} showLabel />
      </div>
    );
  },
};

// ============================
// Animated Example
// ============================
export const AnimatedExample: Story = {
  name: "Animated Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `animated` prop for indeterminate loading state.",
      },
      source: {
        code: `
<Progress.Circle animated size="small" />
<Progress.Circle animated size="medium" />
<Progress.Circle animated size="large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <Circle animated size="small" />
        <Circle animated size="medium" />
        <Circle animated size="large" />
      </div>
    );
  },
};

// ============================
// With Label Example
// ============================
export const WithLabelExample: Story = {
  name: "With Label Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Show progress percentage with `showLabel` or custom `label`.",
      },
      source: {
        code: `
<Progress.Circle value={33} showLabel />
<Progress.Circle value={66} showLabel />
<Progress.Circle value={100} showLabel label="Done" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <Circle value={33} showLabel />
        <Circle value={66} showLabel />
        <Circle value={100} showLabel label="Done" />
      </div>
    );
  },
};

// ============================
// Colors Example
// ============================
export const ColorsExample: Story = {
  name: "Colors Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Preset `color` options: `primary`, `success`, `error`, `warning`, `info`. Also supports custom CSS color values.",
      },
      source: {
        code: `
{/* Preset colors */}
<Progress.Circle color="primary" value={50} showLabel />
<Progress.Circle color="success" value={50} showLabel />
<Progress.Circle color="error" value={50} showLabel />
<Progress.Circle color="warning" value={50} showLabel />
<Progress.Circle color="info" value={50} showLabel />

{/* Custom colors */}
<Progress.Circle color="#ff6b6b" value={50} showLabel />
<Progress.Circle color="rgb(107, 203, 119)" value={50} showLabel />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <Circle color="primary" value={50} showLabel />
        <Circle color="success" value={50} showLabel />
        <Circle color="error" value={50} showLabel />
        <Circle color="warning" value={50} showLabel />
        <Circle color="info" value={50} showLabel />
        <Circle color="#ff6b6b" value={50} showLabel />
        <Circle color="rgb(107, 203, 119)" value={50} showLabel />
      </div>
    );
  },
};
