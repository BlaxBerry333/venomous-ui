import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";
import type { RadioOption } from "./Radio.types";

const basicOptions: RadioOption[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta = {
  title: "React/Components/<FormField.Radio>",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Radio size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    column: {
      description: "Whether to display options in a vertical column layout.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the radio group is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the radio group has an error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    value: {
      description: "Selected value (controlled).",
      table: {
        type: { summary: "string | number" },
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "Default selected value (uncontrolled).",
      table: {
        type: { summary: "string | number" },
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
          <Subtitle>Radio button group component</Subtitle>

          <Markdown>
            {`
A styled radio button group component for single-selection choices.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, FormField } from "venomous-ui/react/components";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage (vertical/column layout by default) */}
      <FormField.Radio options={options} />

      {/* Controlled */}
      <FormField.Radio
        options={options}
        value={selectedValue}
        onChange={handleChange}
      />

      {/* Horizontal layout */}
      <FormField.Radio options={options} column={false} />
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{SizesExample.name}</Heading>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Heading>{LayoutExample.name}</Heading>
          <Description of={LayoutExample} />
          <Canvas of={LayoutExample} />

          <Heading>{StatesExample.name}</Heading>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  argTypes: {
    value: { control: { disable: true } },
  },
  args: {
    options: basicOptions,
    size: "medium",
    column: true,
    disabled: false,
    error: false,
    defaultValue: "option1",
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
<FormField.Radio size="small" options={options} />
<FormField.Radio size="medium" options={options} />
<FormField.Radio size="large" options={options} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 48 }}>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Small</div>
          <Radio size="small" options={basicOptions} defaultValue="option1" />
        </div>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Medium</div>
          <Radio size="medium" options={basicOptions} defaultValue="option1" />
        </div>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Large</div>
          <Radio size="large" options={basicOptions} defaultValue="option1" />
        </div>
      </div>
    );
  },
};

// ============================
// Layout Example
// ============================
export const LayoutExample: Story = {
  name: "Layout Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Radio groups can be laid out vertically (column) or horizontally.",
      },
      source: {
        code: `
<FormField.Radio column options={options} />
<FormField.Radio column={false} options={options} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Column (default)</div>
          <Radio column options={basicOptions} defaultValue="option1" />
        </div>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Horizontal</div>
          <Radio column={false} options={basicOptions} defaultValue="option1" />
        </div>
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
        story: "Radio groups can be disabled or in error state. Individual options can also be disabled.",
      },
      source: {
        code: `
<FormField.Radio options={options} />
<FormField.Radio options={options} disabled />
<FormField.Radio options={options} error />
<FormField.Radio options={[
  { value: "1", label: "Enabled" },
  { value: "2", label: "Disabled", disabled: true },
  { value: "3", label: "Enabled" },
]} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const optionsWithDisabled: RadioOption[] = [
      { value: "1", label: "Enabled" },
      { value: "2", label: "Disabled option", disabled: true },
      { value: "3", label: "Enabled" },
    ];

    return (
      <div style={{ display: "flex", gap: 48 }}>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Normal</div>
          <Radio options={basicOptions} defaultValue="option1" />
        </div>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Disabled</div>
          <Radio options={basicOptions} disabled defaultValue="option1" />
        </div>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Error</div>
          <Radio options={basicOptions} error defaultValue="option1" />
        </div>
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>With disabled option</div>
          <Radio options={optionsWithDisabled} defaultValue="1" />
        </div>
      </div>
    );
  },
};
