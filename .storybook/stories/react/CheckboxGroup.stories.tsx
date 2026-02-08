import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox } from "@/react/components/Checkbox";
import { CheckboxGroup } from "@/react/components/CheckboxGroup";
import { FORM_SIZE_OPTIONS, FRUIT_OPTIONS, FRUIT_OPTIONS_WITH_DISABLED, ORIENTATION_OPTIONS } from "../constants";

import "@/core/styles/components/checkbox.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof CheckboxGroup> = {
  title: "React Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: `
CheckboxGroup is a managed group of checkboxes for selecting multiple options.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "The size of all checkboxes in the group",
      control: "select",
      options: FORM_SIZE_OPTIONS,
      table: {
        type: { summary: FORM_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    orientation: {
      description: "Layout direction of the checkboxes",
      control: "select",
      options: ORIENTATION_OPTIONS,
      table: {
        type: { summary: ORIENTATION_OPTIONS.map((o) => `"${o}"`).join(" | ") },
        defaultValue: { summary: '"vertical"' },
      },
    },
    disabled: {
      description: "Whether all checkboxes in the group are disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    options: {
      description: "Array of checkbox options",
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  name: "Basic Usage",
  args: {
    size: "md",
    orientation: "vertical",
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    checkedIcon: { table: { disable: true } },
    uncheckedIcon: { table: { disable: true } },
    options: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  render: function Render(args) {
    const [values, setValues] = useState<(string | number)[]>([]);
    return <CheckboxGroup {...args} options={FRUIT_OPTIONS} value={values} onChange={(v) => setValues(v)} />;
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { useState } from "react";
import { CheckboxGroup } from "venomous-ui/react/components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export default function Demo() {
  const [values, setValues] = useState<(string | number)[]>([]);
  return (
    <CheckboxGroup
      options={options}
      value={values}
      onChange={(v) => setValues(v)}
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
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Small</p>
        <CheckboxGroup size="sm" options={FRUIT_OPTIONS} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Medium</p>
        <CheckboxGroup size="md" options={FRUIT_OPTIONS} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Large</p>
        <CheckboxGroup size="lg" options={FRUIT_OPTIONS} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `<CheckboxGroup size="sm" options={options} />
<CheckboxGroup size="md" options={options} />
<CheckboxGroup size="lg" options={options} />`,
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
        <CheckboxGroup orientation="vertical" options={FRUIT_OPTIONS} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Horizontal</p>
        <CheckboxGroup orientation="horizontal" options={FRUIT_OPTIONS} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup can be laid out vertically or horizontally.",
      },
      source: {
        code: `<CheckboxGroup orientation="vertical" options={options} />
<CheckboxGroup orientation="horizontal" options={options} />`,
      },
    },
  },
};

export const WithValue: Story = {
  name: "With Initial Values",
  tags: ["!dev"],
  render: () => <CheckboxGroup options={FRUIT_OPTIONS} value={["apple", "cherry"]} />,
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup can have initial values set as an array.",
      },
      source: {
        code: `<CheckboxGroup options={options} value={["apple", "cherry"]} />`,
      },
    },
  },
};

export const DisabledOptions: Story = {
  name: "Disabled Options",
  tags: ["!dev"],
  render: () => <CheckboxGroup options={FRUIT_OPTIONS_WITH_DISABLED} />,
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

<CheckboxGroup options={options} />`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Normal</p>
        <CheckboxGroup options={FRUIT_OPTIONS} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Disabled</p>
        <CheckboxGroup options={FRUIT_OPTIONS} disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup supports disabled state.",
      },
      source: {
        code: `<CheckboxGroup options={options} />
<CheckboxGroup options={options} disabled />`,
      },
    },
  },
};

export const CustomIcons: Story = {
  name: "Custom Icons",
  tags: ["!dev"],
  render: function Render() {
    const [values, setValues] = useState<(string | number)[]>(["apple"]);
    return (
      <CheckboxGroup
        options={FRUIT_OPTIONS}
        value={values}
        onChange={(v) => setValues(v)}
        checkedIcon={<span style={{ color: "var(--VENOMOUSUI-color-theme)" }}>✓</span>}
        uncheckedIcon={<span style={{ color: "var(--VENOMOUSUI-text-tertiary)" }}>○</span>}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Provide `checkedIcon` and `uncheckedIcon` to use custom icons for all checkboxes in the group.",
      },
      source: {
        code: `<CheckboxGroup
  options={options}
  value={values}
  onChange={(v) => setValues(v)}
  checkedIcon={<Icon icon="mdi:checkbox-marked" />}
  uncheckedIcon={<Icon icon="mdi:checkbox-blank-outline" />}
/>`,
      },
    },
  },
};

export const SelectAll: Story = {
  name: "Select All Pattern",
  tags: ["!dev"],
  render: function Render() {
    const [values, setValues] = useState<(string | number)[]>([]);
    const allValues = FRUIT_OPTIONS.map((o) => o.value);
    const isAllSelected = values.length === allValues.length;
    const isIndeterminate = values.length > 0 && values.length < allValues.length;

    const handleSelectAll = () => {
      if (isAllSelected) {
        setValues([]);
      } else {
        setValues(allValues);
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ paddingBottom: "8px", borderBottom: "1px solid var(--VENOMOUSUI-border)" }}>
          <Checkbox label="Select All" checked={isAllSelected || isIndeterminate} onChange={handleSelectAll} />
        </div>
        <CheckboxGroup options={FRUIT_OPTIONS} value={values} onChange={(v) => setValues(v)} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of implementing a "Select All" pattern with CheckboxGroup.',
      },
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { useState } from "react";
import { Checkbox, CheckboxGroup } from "venomous-ui/react/components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export default function Demo() {
  const [values, setValues] = useState<(string | number)[]>([]);
  const allValues = options.map((o) => o.value);
  const isAllSelected = values.length === allValues.length;
  const isIndeterminate = values.length > 0 && values.length < allValues.length;

  const handleSelectAll = () => {
    setValues(isAllSelected ? [] : allValues);
  };

  return (
    <div>
      <Checkbox
        label="Select All"
        checked={isAllSelected || isIndeterminate}
        onChange={handleSelectAll}
      />
      <CheckboxGroup
        options={options}
        value={values}
        onChange={(v) => setValues(v)}
      />
    </div>
  );
}`,
      },
    },
  },
};
