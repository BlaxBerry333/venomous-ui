import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox } from "@/react/components/Checkbox";
import { FORM_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/checkbox.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Checkbox> = {
  title: "React Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
Checkbox allows users to select one or more options.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "The size of the checkbox",
      control: "select",
      options: FORM_SIZE_OPTIONS,
      table: {
        type: { summary: FORM_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    label: {
      description: "Label text",
      control: "text",
    },
    checked: {
      description: "Whether the checkbox is checked",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Whether the checkbox is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    checkedIcon: {
      description: "Icon to display when checked (enables custom mode)",
      control: false,
    },
    uncheckedIcon: {
      description: "Icon to display when unchecked (enables custom mode)",
      control: false,
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  name: "Basic Usage",
  args: {
    label: "Accept terms and conditions",
    size: "md",
    checked: false,
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    checkedIcon: { table: { disable: true } },
    uncheckedIcon: { table: { disable: true } },
    checked: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);
    return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { useState } from "react";
import { Checkbox } from "venomous-ui/react/components";

export default function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Accept terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `<Checkbox size="sm" label="Small checkbox" />
<Checkbox size="md" label="Medium checkbox" />
<Checkbox size="lg" label="Large checkbox" />`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked onChange={() => {}} />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked onChange={() => {}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox supports various states: unchecked, checked, and disabled.",
      },
      source: {
        code: `<Checkbox label="Unchecked" />
<Checkbox label="Checked" checked />
<Checkbox label="Disabled" disabled />
<Checkbox label="Disabled checked" disabled checked />`,
      },
    },
  },
};

export const CustomIcons: Story = {
  name: "Custom Icons",
  tags: ["!dev"],
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Custom icon checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        checkedIcon={<span style={{ color: "var(--VENOMOUSUI-color-theme)" }}>✓</span>}
        uncheckedIcon={<span style={{ color: "var(--VENOMOUSUI-text-tertiary)" }}>○</span>}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Provide `checkedIcon` and `uncheckedIcon` to use custom icons instead of native checkbox.",
      },
      source: {
        code: `<Checkbox
  label="Custom icon checkbox"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  checkedIcon={<Icon icon="mdi:checkbox-marked" />}
  uncheckedIcon={<Icon icon="mdi:checkbox-blank-outline" />}
/>`,
      },
    },
  },
};
