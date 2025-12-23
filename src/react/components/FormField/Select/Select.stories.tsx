import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";
import type { SelectOptionOrGroup } from "./Select.types";

const basicOptions: SelectOptionOrGroup[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

const groupedOptions: SelectOptionOrGroup[] = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
];

const meta = {
  title: "React/Components/<FormField.Select>",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Select variant style.",
      type: { name: "string" },
      table: {
        type: { summary: '"outlined" | "filled"' },
        defaultValue: { summary: '"outlined"' },
      },
      control: { type: "radio" },
      options: ["outlined", "filled"],
    },
    size: {
      description: "Select size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Whether the select is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the select has an error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "Whether the select takes the full width of its container.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    clearable: {
      description: "Whether to show a clear button.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    searchable: {
      description: "Whether to enable search/filter.",
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
        defaultValue: { summary: '"Select..."' },
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
          <Subtitle>Dropdown select component</Subtitle>

          <Markdown>
            {`
A styled select/dropdown component with support for grouped options, search, and clear functionality.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, FormField } from "venomous-ui/react/components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <FormField.Select options={options} placeholder="Select fruit..." />

      {/* With search */}
      <FormField.Select options={options} searchable />

      {/* With clear button */}
      <FormField.Select options={options} clearable />
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

          <Subtitle>{GroupedOptionsExample.name}</Subtitle>
          <Description of={GroupedOptionsExample} />
          <Canvas of={GroupedOptionsExample} />

          <Subtitle>{FeaturesExample.name}</Subtitle>
          <Description of={FeaturesExample} />
          <Canvas of={FeaturesExample} />

          <Subtitle>{StatesExample.name}</Subtitle>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    options: basicOptions,
    placeholder: "Select...",
    variant: "outlined",
    size: "medium",
    disabled: false,
    error: false,
    fullWidth: true,
    clearable: false,
    searchable: false,
    searchPlaceholder: "Search...",
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
<FormField.Select variant="outlined" options={options} placeholder="Outlined" />
<FormField.Select variant="filled" options={options} placeholder="Filled" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Select variant="outlined" options={basicOptions} placeholder="Outlined" />
        <Select variant="filled" options={basicOptions} placeholder="Filled" />
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
<FormField.Select size="small" options={options} placeholder="Small" />
<FormField.Select size="medium" options={options} placeholder="Medium" />
<FormField.Select size="large" options={options} placeholder="Large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Select size="small" options={basicOptions} placeholder="Small" />
        <Select size="medium" options={basicOptions} placeholder="Medium" />
        <Select size="large" options={basicOptions} placeholder="Large" />
      </div>
    );
  },
};

// ============================
// Grouped Options Example
// ============================
export const GroupedOptionsExample: Story = {
  name: "Grouped Options Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Options can be organized into groups.",
      },
      source: {
        code: `
const groupedOptions = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
    ],
  },
];

<FormField.Select options={groupedOptions} placeholder="Select..." />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ maxWidth: 300 }}>
        <Select options={groupedOptions} placeholder="Select..." />
      </div>
    );
  },
};

// ============================
// Features Example
// ============================
export const FeaturesExample: Story = {
  name: "Features Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Select supports clearable and searchable features.",
      },
      source: {
        code: `
<FormField.Select options={options} clearable placeholder="Clearable" />
<FormField.Select options={options} searchable placeholder="Searchable" />
<FormField.Select options={options} clearable searchable placeholder="Both" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Select options={basicOptions} clearable placeholder="Clearable" defaultValue="apple" />
        <Select options={basicOptions} searchable placeholder="Searchable" />
        <Select options={basicOptions} clearable searchable placeholder="Both features" />
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
        story: "Selects can be disabled or in error state.",
      },
      source: {
        code: `
<FormField.Select options={options} placeholder="Normal" />
<FormField.Select options={options} placeholder="Disabled" disabled />
<FormField.Select options={options} placeholder="Error" error />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
        <Select options={basicOptions} placeholder="Normal" />
        <Select options={basicOptions} placeholder="Disabled" disabled />
        <Select options={basicOptions} placeholder="Error" error />
      </div>
    );
  },
};
