import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/react/components/Input";
import { FORM_SIZE_OPTIONS, INPUT_TYPE_OPTIONS } from "../constants";

import "@/core/styles/components/input.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Input> = {
  title: "React Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
Input is a text field for user input.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    type: {
      description: "Input type",
      control: "select",
      options: INPUT_TYPE_OPTIONS,
      table: {
        type: { summary: INPUT_TYPE_OPTIONS.map((t) => `"${t}"`).join(" | ") },
        defaultValue: { summary: '"text"' },
      },
    },
    size: {
      description: "The size of the input",
      control: "select",
      options: FORM_SIZE_OPTIONS,
      table: {
        type: { summary: FORM_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    placeholder: {
      description: "Placeholder text",
      control: "text",
    },
    disabled: {
      description: "Whether the input is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      description: "Whether the input is read-only",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: "Whether the input is in an error state",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    prefix: {
      description: "Content to display before the input",
      control: false,
    },
    suffix: {
      description: "Content to display after the input",
      control: false,
    },
    value: {
      description: "Current value",
      control: false,
      table: {
        type: { summary: "string | number" },
      },
    },
    onChange: {
      description: "Callback when value changes",
      control: false,
      table: {
        type: { summary: "(event: ChangeEvent<HTMLInputElement>) => void" },
      },
    },
    className: {
      description: "Additional CSS class names",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: "Basic Usage",
  args: {
    placeholder: "Enter text...",
    size: "md",
    type: "text",
    disabled: false,
    readOnly: false,
    error: false,
  },
  argTypes: {
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    prefix: { table: { disable: true } },
    suffix: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/input.css";
import { Input } from "venomous-ui/react/components";

export default function Demo() {
  return <Input placeholder="Enter text..." />;
}`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`,
      },
    },
  },
};

export const Types: Story = {
  name: "Types",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input supports various HTML input types.",
      },
      source: {
        code: `<Input type="text" placeholder="Text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />`,
      },
    },
  },
};

export const WithPrefixSuffix: Story = {
  name: "With Prefix & Suffix",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <Input prefix={<span>$</span>} placeholder="Amount" />
      <Input suffix={<span>.00</span>} placeholder="Price" />
      <Input prefix={<span>https://</span>} suffix={<span>.com</span>} placeholder="domain" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input supports prefix and suffix slots for icons, text, or other elements.",
      },
      source: {
        code: `<Input prefix={<span>$</span>} placeholder="Amount" />
<Input suffix={<span>.00</span>} placeholder="Price" />
<Input prefix={<span>https://</span>} suffix={<span>.com</span>} placeholder="domain" />`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <Input placeholder="Normal" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Read-only" readOnly value="Read-only value" />
      <Input placeholder="Error" error />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input supports disabled, read-only, and error states.",
      },
      source: {
        code: `<Input placeholder="Normal" />
<Input placeholder="Disabled" disabled />
<Input placeholder="Read-only" readOnly value="Read-only value" />
<Input placeholder="Error" error />`,
      },
    },
  },
};
