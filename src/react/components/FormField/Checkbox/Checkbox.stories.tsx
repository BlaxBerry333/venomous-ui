import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

const meta = {
  title: "React/Components/<FormField.Checkbox>",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Checkbox size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    checked: {
      description: "Whether the checkbox is checked (controlled).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    defaultChecked: {
      description: "Whether the checkbox is checked by default (uncontrolled).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the checkbox is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the checkbox has an error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    label: {
      description: "Label text.",
      type: { name: "string" },
      table: {
        type: { summary: "ReactNode" },
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
          <Subtitle>Custom styled checkbox component</Subtitle>

          <Markdown>
            {`
A styled checkbox component with custom icon styling.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, FormField } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <FormField.Checkbox label="Accept terms" />

      {/* Controlled */}
      <FormField.Checkbox checked={isChecked} onChange={handleChange} />

      {/* Different sizes */}
      <FormField.Checkbox size="small" label="Small" />
      <FormField.Checkbox size="large" label="Large" />
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{SizesExample.name}</Subtitle>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Subtitle>{StatesExample.name}</Subtitle>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  argTypes: {
    checked: { control: { disable: true } },
  },
  name: "Playground",
  args: {
    label: "Checkbox label",
    size: "medium",
    disabled: false,
    error: false,
    defaultChecked: false,
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
<FormField.Checkbox size="small" label="Small" />
<FormField.Checkbox size="medium" label="Medium" />
<FormField.Checkbox size="large" label="Large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Checkbox size="small" label="Small" />
        <Checkbox size="medium" label="Medium" />
        <Checkbox size="large" label="Large" />
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
        story: "Checkboxes can be unchecked, checked, disabled, or in error state.",
      },
      source: {
        code: `
<FormField.Checkbox label="Unchecked" />
<FormField.Checkbox label="Checked" defaultChecked />
<FormField.Checkbox label="Disabled" disabled />
<FormField.Checkbox label="Disabled checked" disabled defaultChecked />
<FormField.Checkbox label="Error" error />
<FormField.Checkbox label="Error checked" error defaultChecked />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked" defaultChecked />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled checked" disabled defaultChecked />
        <Checkbox label="Error" error />
        <Checkbox label="Error checked" error defaultChecked />
      </div>
    );
  },
};
