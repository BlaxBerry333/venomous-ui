import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Switch } from "@/react/components/Switch";
import { FORM_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/switch.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Switch> = {
  title: "React Components/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
Switch is a toggle control for binary states (on/off).

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "The size of the switch",
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
      description: "Whether the switch is checked (on)",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Whether the switch is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  name: "Basic Usage",
  args: {
    label: "Enable notifications",
    size: "md",
    checked: false,
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);
    return <Switch {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/switch.css";
import { useState } from "react";
import { Switch } from "venomous-ui/react/components";

export default function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      label="Enable notifications"
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
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Switch comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `<Switch size="sm" label="Small switch" />
<Switch size="md" label="Medium switch" />
<Switch size="lg" label="Large switch" />`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Switch label="Off" />
      <Switch label="On" checked onChange={() => {}} />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled checked onChange={() => {}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Switch supports various states: off, on, and disabled.",
      },
      source: {
        code: `<Switch label="Off" />
<Switch label="On" checked />
<Switch label="Disabled off" disabled />
<Switch label="Disabled on" disabled checked />`,
      },
    },
  },
};
