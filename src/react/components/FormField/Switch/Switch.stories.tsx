import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";

const meta = {
  title: "React/Components/<FormField.Switch>",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Switch size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    checked: {
      description: "Whether the switch is checked (controlled).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    defaultChecked: {
      description: "Whether the switch is checked by default (uncontrolled).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the switch is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the switch has an error state.",
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
          <Subtitle>Toggle switch component</Subtitle>

          <Markdown>
            {`
A styled toggle switch component for on/off states.<br />
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
      <FormField.Switch />

      {/* Controlled */}
      <FormField.Switch checked={isEnabled} onChange={handleChange} />

      {/* Different sizes */}
      <FormField.Switch size="small" />
      <FormField.Switch size="large" />
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
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  argTypes: {
    checked: { control: { disable: true } },
  },
  args: {
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
<FormField.Switch size="small" />
<FormField.Switch size="medium" />
<FormField.Switch size="large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Switch size="small" />
        <Switch size="medium" />
        <Switch size="large" />
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
        story: "Switches can be off, on, disabled, or in error state.",
      },
      source: {
        code: `
<FormField.Switch />
<FormField.Switch defaultChecked />
<FormField.Switch disabled />
<FormField.Switch disabled defaultChecked />
<FormField.Switch error />
<FormField.Switch error defaultChecked />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Switch />
        <Switch defaultChecked />
        <Switch disabled />
        <Switch disabled defaultChecked />
        <Switch error />
        <Switch error defaultChecked />
      </div>
    );
  },
};
