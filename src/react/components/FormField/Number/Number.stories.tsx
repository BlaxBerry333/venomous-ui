import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Number from "./Number";

const meta = {
  title: "React/Components/<FormField.Number>",
  component: Number,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Input variant style.",
      type: { name: "string" },
      table: {
        type: { summary: '"outlined" | "filled"' },
        defaultValue: { summary: '"outlined"' },
      },
      control: { type: "radio" },
      options: ["outlined", "filled"],
    },
    size: {
      description: "Input size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Whether the input is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the input has an error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "Whether the input takes the full width of its container.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    min: {
      description: "Minimum value.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    max: {
      description: "Maximum value.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    step: {
      description: "Step value for increment/decrement.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
      control: { type: "number" },
    },
    placeholder: {
      description: "Placeholder text.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
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
          <Subtitle>Number input field with +/- controls</Subtitle>

          <Markdown>
            {`
A styled number input component with custom increment/decrement buttons.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, FormField } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <FormField.Number placeholder="0" />

      {/* With min/max */}
      <FormField.Number min={0} max={100} step={5} />

      {/* Different sizes */}
      <FormField.Number size="small" />
      <FormField.Number size="large" />
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{VariantsExample.name}</Heading>
          <Description of={VariantsExample} />
          <Canvas of={VariantsExample} />

          <Heading>{SizesExample.name}</Heading>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Heading>{WithMinMaxExample.name}</Heading>
          <Description of={WithMinMaxExample} />
          <Canvas of={WithMinMaxExample} />

          <Heading>{StatesExample.name}</Heading>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Number>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    placeholder: "0",
    variant: "outlined",
    size: "medium",
    disabled: false,
    error: false,
    fullWidth: true,
    min: 0,
    max: 100,
    step: 1,
  },
};

// ============================
// Variants Example
// ============================
export const VariantsExample: Story = {
  name: "Variants Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Two variants: `outlined` and `filled`.",
      },
      source: {
        code: `
<FormField.Number variant="outlined" defaultValue={10} />
<FormField.Number variant="filled" defaultValue={10} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 200 }}>
        <Number variant="outlined" defaultValue={10} />
        <Number variant="filled" defaultValue={10} />
      </div>
    );
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
<FormField.Number size="small" defaultValue={5} />
<FormField.Number size="medium" defaultValue={10} />
<FormField.Number size="large" defaultValue={15} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 200 }}>
        <Number size="small" defaultValue={5} />
        <Number size="medium" defaultValue={10} />
        <Number size="large" defaultValue={15} />
      </div>
    );
  },
};

// ============================
// With Min/Max Example
// ============================
export const WithMinMaxExample: Story = {
  name: "With Min/Max Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Number inputs can have min/max constraints and custom step values.",
      },
      source: {
        code: `
<FormField.Number min={0} max={10} defaultValue={5} />
<FormField.Number min={0} max={100} step={10} defaultValue={50} />
<FormField.Number step={0.1} defaultValue={0.5} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 200 }}>
        <Number min={0} max={10} defaultValue={5} />
        <Number min={0} max={100} step={10} defaultValue={50} />
        <Number step={0.1} defaultValue={0.5} />
      </div>
    );
  },
};

// ============================
// States Example
// ============================
export const StatesExample: Story = {
  name: "States Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Number inputs can be disabled or in error state.",
      },
      source: {
        code: `
<FormField.Number defaultValue={10} />
<FormField.Number defaultValue={10} disabled />
<FormField.Number defaultValue={10} error />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 200 }}>
        <Number defaultValue={10} />
        <Number defaultValue={10} disabled />
        <Number defaultValue={10} error />
      </div>
    );
  },
};
