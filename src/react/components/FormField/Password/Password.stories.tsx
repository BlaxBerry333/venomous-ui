import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Password from "./Password";

const meta = {
  title: "React/Components/<FormField.Password>",
  component: Password,
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
          <Subtitle>Password input field with visibility toggle</Subtitle>

          <Markdown>
            {`
A styled password input component with an eye icon to toggle password visibility.<br />
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
      <FormField.Password placeholder="Enter password..." />

      {/* Different variants */}
      <FormField.Password variant="outlined" />
      <FormField.Password variant="filled" />
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{VariantsExample.name}</Subtitle>
          <Description of={VariantsExample} />
          <Canvas of={VariantsExample} />

          <Subtitle>{SizesExample.name}</Subtitle>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Subtitle>{StatesExample.name}</Subtitle>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />

          <Heading>API</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    placeholder: "Enter password...",
    variant: "outlined",
    size: "medium",
    disabled: false,
    error: false,
    fullWidth: true,
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
<FormField.Password variant="outlined" placeholder="Outlined" />
<FormField.Password variant="filled" placeholder="Filled" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Password variant="outlined" placeholder="Outlined" />
        <Password variant="filled" placeholder="Filled" />
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
<FormField.Password size="small" placeholder="Small" />
<FormField.Password size="medium" placeholder="Medium" />
<FormField.Password size="large" placeholder="Large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Password size="small" placeholder="Small" />
        <Password size="medium" placeholder="Medium" />
        <Password size="large" placeholder="Large" />
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
        story: "Password inputs can be disabled or in error state.",
      },
      source: {
        code: `
<FormField.Password placeholder="Normal" />
<FormField.Password placeholder="Disabled" disabled />
<FormField.Password placeholder="Error" error />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Password placeholder="Normal" />
        <Password placeholder="Disabled" disabled />
        <Password placeholder="Error" error />
      </div>
    );
  },
};
