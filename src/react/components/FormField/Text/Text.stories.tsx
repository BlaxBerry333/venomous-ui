import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/react/components/Icon";
import Text from "./Text";

const meta = {
  title: "React/Components/<FormField.Text>",
  component: Text,
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
    prefix: {
      description: "Prefix element (e.g., icon).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<Icon />"],
      mapping: {
        undefined: undefined,
        "<Icon />": <Icon icon="mdi:magnify" />,
      },
    },
    suffix: {
      description: "Suffix element (e.g., icon).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<Icon />"],
      mapping: {
        undefined: undefined,
        "<Icon />": <Icon icon="mdi:close-circle" />,
      },
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
          <Subtitle>Text input field component</Subtitle>

          <Markdown>
            {`
A styled text input component with support for prefix/suffix elements, variants, and sizes.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, FormField } from "venomous-ui/react/components";
import { Icon } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <FormField.Text placeholder="Enter text..." />

      {/* With prefix icon */}
      <FormField.Text
        prefix={<Icon icon="mdi:magnify" />}
        placeholder="Search..."
      />

      {/* Different variants */}
      <FormField.Text variant="outlined" placeholder="Outlined" />
      <FormField.Text variant="filled" placeholder="Filled" />
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

          <Heading>{WithIconsExample.name}</Heading>
          <Description of={WithIconsExample} />
          <Canvas of={WithIconsExample} />

          <Heading>{StatesExample.name}</Heading>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Text>;

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
<FormField.Text variant="outlined" placeholder="Outlined" />
<FormField.Text variant="filled" placeholder="Filled" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Text variant="outlined" placeholder="Outlined" />
        <Text variant="filled" placeholder="Filled" />
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
<FormField.Text size="small" placeholder="Small" />
<FormField.Text size="medium" placeholder="Medium" />
<FormField.Text size="large" placeholder="Large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Text size="small" placeholder="Small" />
        <Text size="medium" placeholder="Medium" />
        <Text size="large" placeholder="Large" />
      </div>
    );
  },
};

// ============================
// With Icons Example
// ============================
export const WithIconsExample: Story = {
  name: "With Icons Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Text inputs can have prefix and/or suffix elements like icons.",
      },
      source: {
        code: `
<FormField.Text
  prefix={<Icon icon="mdi:magnify" />}
  placeholder="Search..."
/>
<FormField.Text
  suffix={<Icon icon="mdi:close-circle" />}
  placeholder="Clear me..."
/>
<FormField.Text
  prefix={<Icon icon="mdi:account" />}
  suffix={<Icon icon="mdi:check-circle" />}
  placeholder="Username"
/>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Text prefix={<Icon icon="mdi:magnify" />} placeholder="Search..." />
        <Text suffix={<Icon icon="mdi:close-circle" />} placeholder="Clear me..." />
        <Text prefix={<Icon icon="mdi:account" />} suffix={<Icon icon="mdi:check-circle" />} placeholder="Username" />
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
        story: "Text inputs can be disabled or in error state.",
      },
      source: {
        code: `
<FormField.Text placeholder="Normal" />
<FormField.Text placeholder="Disabled" disabled />
<FormField.Text placeholder="Error" error />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Text placeholder="Normal" />
        <Text placeholder="Disabled" disabled />
        <Text placeholder="Error" error />
      </div>
    );
  },
};
