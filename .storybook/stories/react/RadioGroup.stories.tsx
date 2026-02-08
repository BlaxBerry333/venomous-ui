import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { RadioGroup } from "@/react/components/RadioGroup";
import { FORM_SIZE_OPTIONS, FRUIT_OPTIONS, FRUIT_OPTIONS_WITH_DISABLED, ORIENTATION_OPTIONS } from "../constants";

import "@/core/styles/components/radio.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof RadioGroup> = {
  title: "React Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: `
RadioGroup is a managed group of radio buttons for selecting a single option from multiple choices.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "The size of all radios in the group",
      control: "select",
      options: FORM_SIZE_OPTIONS,
      table: {
        type: { summary: FORM_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    orientation: {
      description: "Layout direction of the radio buttons",
      control: "select",
      options: ORIENTATION_OPTIONS,
      table: {
        type: { summary: ORIENTATION_OPTIONS.map((o) => `"${o}"`).join(" | ") },
        defaultValue: { summary: '"vertical"' },
      },
    },
    disabled: {
      description: "Whether all radios in the group are disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    options: {
      description: "Array of radio options",
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  name: "Basic Usage",
  args: {
    size: "md",
    orientation: "vertical",
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    name: { table: { disable: true } },
    options: { table: { disable: true } },
    checkedIcon: { table: { disable: true } },
    uncheckedIcon: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  render: function Render(args) {
    const [value, setValue] = useState<string | number | undefined>();
    return <RadioGroup {...args} options={FRUIT_OPTIONS} value={value} onChange={(v) => setValue(v)} />;
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/radio.css";
import { useState } from "react";
import { RadioGroup } from "venomous-ui/react/components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export default function Demo() {
  const [value, setValue] = useState<string | number | undefined>();
  return (
    <RadioGroup
      options={options}
      value={value}
      onChange={(v) => setValue(v)}
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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <RadioGroup size="sm" options={FRUIT_OPTIONS} />
      <RadioGroup size="md" options={FRUIT_OPTIONS} />
      <RadioGroup size="lg" options={FRUIT_OPTIONS} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "RadioGroup comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `<RadioGroup size="sm" options={options} />
<RadioGroup size="md" options={options} />
<RadioGroup size="lg" options={options} />`,
      },
    },
  },
};

export const Orientation: Story = {
  name: "Orientation",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Vertical (default)</p>
        <RadioGroup orientation="vertical" options={FRUIT_OPTIONS} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Horizontal</p>
        <RadioGroup orientation="horizontal" options={FRUIT_OPTIONS} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "RadioGroup can be laid out vertically or horizontally.",
      },
      source: {
        code: `<RadioGroup orientation="vertical" options={options} />
<RadioGroup orientation="horizontal" options={options} />`,
      },
    },
  },
};

export const WithValue: Story = {
  name: "With Initial Value",
  tags: ["!dev"],
  render: () => <RadioGroup options={FRUIT_OPTIONS} value="banana" />,
  parameters: {
    docs: {
      description: {
        story: "RadioGroup can have an initial value set.",
      },
      source: {
        code: `<RadioGroup options={options} value="banana" />`,
      },
    },
  },
};

export const DisabledOptions: Story = {
  name: "Disabled Options",
  tags: ["!dev"],
  render: () => <RadioGroup options={FRUIT_OPTIONS_WITH_DISABLED} />,
  parameters: {
    docs: {
      description: {
        story: "Individual options can be disabled by setting `disabled: true` on the option object.",
      },
      source: {
        code: `const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" },
];

<RadioGroup options={options} />`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <RadioGroup options={FRUIT_OPTIONS} />
      <RadioGroup options={FRUIT_OPTIONS} disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "RadioGroup supports disabled state.",
      },
      source: {
        code: `<RadioGroup options={options} />
<RadioGroup options={options} disabled />`,
      },
    },
  },
};

export const CustomIcons: Story = {
  name: "Custom Icons",
  tags: ["!dev"],
  render: function Render() {
    const [value, setValue] = useState<string | number | undefined>("apple");
    return (
      <RadioGroup
        options={FRUIT_OPTIONS}
        value={value}
        onChange={(v) => setValue(v)}
        checkedIcon={<span style={{ color: "var(--VENOMOUSUI-color-theme)" }}>●</span>}
        uncheckedIcon={<span style={{ color: "var(--VENOMOUSUI-text-tertiary)" }}>○</span>}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Provide `checkedIcon` and `uncheckedIcon` to use custom icons for all radios in the group.",
      },
      source: {
        code: `<RadioGroup
  options={options}
  value={value}
  onChange={(v) => setValue(v)}
  checkedIcon={<Icon icon="mdi:radiobox-marked" />}
  uncheckedIcon={<Icon icon="mdi:radiobox-blank" />}
/>`,
      },
    },
  },
};
