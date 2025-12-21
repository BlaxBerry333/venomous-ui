import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "./Textarea";

const meta = {
  title: "React/Components/<FormField.Textarea>",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Textarea variant style.",
      type: { name: "string" },
      table: {
        type: { summary: '"outlined" | "filled"' },
        defaultValue: { summary: '"outlined"' },
      },
      control: { type: "radio" },
      options: ["outlined", "filled"],
    },
    size: {
      description: "Textarea size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Whether the textarea is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the textarea has an error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "Whether the textarea takes the full width of its container.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    resize: {
      description: "Resize behavior.",
      type: { name: "string" },
      table: {
        type: { summary: '"none" | "vertical" | "horizontal" | "both"' },
        defaultValue: { summary: '"vertical"' },
      },
      control: { type: "radio" },
      options: ["none", "vertical", "horizontal", "both"],
    },
    minRows: {
      description: "Minimum number of rows.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
      control: { type: "number" },
    },
    maxRows: {
      description: "Maximum number of rows.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    autoHeight: {
      description: "Whether to auto-resize based on content.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
          <Subtitle>Multi-line text input field</Subtitle>

          <Markdown>
            {`
A styled textarea component with support for auto-height, resize control, and row limits.

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
      <FormField.Textarea placeholder="Enter text..." />

      {/* With auto-height */}
      <FormField.Textarea autoHeight minRows={2} maxRows={6} />

      {/* Different resize options */}
      <FormField.Textarea resize="none" />
      <FormField.Textarea resize="both" />
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

          <Heading>{ResizeExample.name}</Heading>
          <Description of={ResizeExample} />
          <Canvas of={ResizeExample} />

          <Heading>{StatesExample.name}</Heading>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    placeholder: "Enter text...",
    variant: "outlined",
    size: "medium",
    disabled: false,
    error: false,
    fullWidth: true,
    resize: "vertical",
    minRows: 3,
    maxRows: 10,
    autoHeight: false,
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
<FormField.Textarea variant="outlined" placeholder="Outlined" />
<FormField.Textarea variant="filled" placeholder="Filled" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
        <Textarea variant="outlined" placeholder="Outlined" />
        <Textarea variant="filled" placeholder="Filled" />
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
<FormField.Textarea size="small" placeholder="Small" />
<FormField.Textarea size="medium" placeholder="Medium" />
<FormField.Textarea size="large" placeholder="Large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
        <Textarea size="small" placeholder="Small" minRows={2} />
        <Textarea size="medium" placeholder="Medium" minRows={2} />
        <Textarea size="large" placeholder="Large" minRows={2} />
      </div>
    );
  },
};

// ============================
// Resize Example
// ============================
export const ResizeExample: Story = {
  name: "Resize Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Different resize options: `none`, `vertical`, `horizontal`, `both`.",
      },
      source: {
        code: `
<FormField.Textarea resize="none" placeholder="No resize" />
<FormField.Textarea resize="vertical" placeholder="Vertical resize" />
<FormField.Textarea resize="both" placeholder="Both directions" />
<FormField.Textarea autoHeight minRows={2} maxRows={6} placeholder="Auto height" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
        <Textarea resize="none" placeholder="No resize" minRows={2} />
        <Textarea resize="vertical" placeholder="Vertical resize" minRows={2} />
        <Textarea resize="both" placeholder="Both directions" minRows={2} />
        <Textarea autoHeight resize="none" minRows={2} maxRows={6} placeholder="Auto height (type to see it grow)" />
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
        story: "Textarea can be disabled or in error state.",
      },
      source: {
        code: `
<FormField.Textarea placeholder="Normal" />
<FormField.Textarea placeholder="Disabled" disabled />
<FormField.Textarea placeholder="Error" error />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
        <Textarea placeholder="Normal" minRows={2} />
        <Textarea placeholder="Disabled" disabled minRows={2} />
        <Textarea placeholder="Error" error minRows={2} />
      </div>
    );
  },
};
