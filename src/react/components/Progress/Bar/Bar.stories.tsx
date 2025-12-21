import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Bar from "./Bar";

const meta = {
  title: "React/Components/<Progress.Bar>",
  component: Bar,
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
      description: "Progress bar size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    color: {
      description: "Progress bar color. Supports preset colors or custom CSS color values.",
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
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Horizontal progress bar component</Subtitle>

          <Markdown>
            {`
A horizontal progress bar for displaying progress or loading state.

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
      <Progress.Bar value={50} />

      {/* Different sizes */}
      <Progress.Bar size="small" value={75} />
      <Progress.Bar size="large" value={75} />

      {/* Animated loading state */}
      <Progress.Bar animated />
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

          <Heading>{ColorsExample.name}</Heading>
          <Description of={ColorsExample} />
          <Canvas of={ColorsExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Bar>;

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
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <Bar {...args} />
    </div>
  ),
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
<Progress.Bar size="small" value={50} />
<Progress.Bar size="medium" value={50} />
<Progress.Bar size="large" value={50} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 300 }}>
        <Bar size="small" value={50} />
        <Bar size="medium" value={50} />
        <Bar size="large" value={50} />
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
<Progress.Bar animated size="small" />
<Progress.Bar animated size="medium" />
<Progress.Bar animated size="large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 300 }}>
        <Bar animated size="small" />
        <Bar animated size="medium" />
        <Bar animated size="large" />
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
<Progress.Bar color="primary" value={50} />
<Progress.Bar color="success" value={50} />
<Progress.Bar color="error" value={50} />
<Progress.Bar color="warning" value={50} />
<Progress.Bar color="info" value={50} />

{/* Custom colors */}
<Progress.Bar color="#ff6b6b" value={50} />
<Progress.Bar color="rgb(107, 203, 119)" value={50} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 300 }}>
        <Bar color="primary" value={50} />
        <Bar color="success" value={50} />
        <Bar color="error" value={50} />
        <Bar color="warning" value={50} />
        <Bar color="info" value={50} />
        <Bar color="#ff6b6b" value={50} />
        <Bar color="rgb(107, 203, 119)" value={50} />
      </div>
    );
  },
};
