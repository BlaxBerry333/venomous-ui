import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import FormLabel from "./FormLabel";

const meta = {
  title: "React/Components/<FormLabel>",
  component: FormLabel,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Label text content.",
      type: { name: "string" },
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    required: {
      description: "Whether to show required indicator (*).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    size: {
      description: "Size of the label.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    htmlFor: {
      description: "The id of the form element this label is for.",
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
          <Subtitle>Form label component for labeling form fields</Subtitle>

          <Markdown>
            {`
A styled label component that wraps the native \`<label>\` element. Supports required indicator and various sizes.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, FormLabel } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <FormLabel htmlFor="username">Username</FormLabel>

      {/* With required indicator */}
      <FormLabel htmlFor="email" required>Email</FormLabel>

      {/* Different sizes */}
      <FormLabel size="small">Small Label</FormLabel>
      <FormLabel size="medium">Medium Label</FormLabel>
      <FormLabel size="large">Large Label</FormLabel>
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{SizesExample.name}</Heading>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Heading>{RequiredExample.name}</Heading>
          <Description of={RequiredExample} />
          <Canvas of={RequiredExample} />

          <Heading>{StyleCallbackExample.name}</Heading>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    children: "Label",
    required: false,
    size: "medium",
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
<FormLabel size="small">Small Label</FormLabel>
<FormLabel size="medium">Medium Label</FormLabel>
<FormLabel size="large">Large Label</FormLabel>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <FormLabel size="small">Small Label</FormLabel>
        <FormLabel size="medium">Medium Label</FormLabel>
        <FormLabel size="large">Large Label</FormLabel>
      </div>
    );
  },
};

// ============================
// Required Example
// ============================
export const RequiredExample: Story = {
  name: "Required Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Labels can show a required indicator when `required` prop is true.",
      },
      source: {
        code: `
<FormLabel>Optional Field</FormLabel>
<FormLabel required>Required Field</FormLabel>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <FormLabel>Optional Field</FormLabel>
        <FormLabel required>Required Field</FormLabel>
      </div>
    );
  },
};

// ============================
// Style Callback Example
// ============================
export const StyleCallbackExample: Story = {
  name: "Style Callback Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `style` prop with theme callback to apply custom colors.",
      },
      source: {
        code: `
<FormLabel style={(theme) => ({ color: theme.semanticColors.success.main })}>
  Success Label
</FormLabel>
<FormLabel style={(theme) => ({ color: theme.semanticColors.warning.main })}>
  Warning Label
</FormLabel>
<FormLabel style={(theme) => ({ color: theme.semanticColors.error.main })}>
  Error Label
</FormLabel>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <FormLabel style={(theme) => ({ color: theme.semanticColors.success.main })}>Success Label</FormLabel>
        <FormLabel style={(theme) => ({ color: theme.semanticColors.warning.main })}>Warning Label</FormLabel>
        <FormLabel style={(theme) => ({ color: theme.semanticColors.error.main })}>Error Label</FormLabel>
      </div>
    );
  },
};
