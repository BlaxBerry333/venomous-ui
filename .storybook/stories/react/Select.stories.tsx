import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Select, SelectOption } from "@/react/components/Select";
import { FORM_SIZE_OPTIONS, FRUIT_OPTIONS_EXTENDED, FRUIT_OPTIONS_EXTENDED_WITH_DISABLED } from "../constants";

import "@/core/styles/components/select.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Select> = {
  title: "React Components/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `Select is a dropdown for choosing a single option from a list.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
      subcomponents: [{ name: "<Select.Option>", component: SelectOption }],
    },
  },
  argTypes: {
    size: {
      description: "The size of the select",
      control: "select",
      options: FORM_SIZE_OPTIONS,
      table: {
        type: { summary: FORM_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    placeholder: {
      description: "Placeholder text when no option is selected",
      control: "text",
    },
    disabled: {
      description: "Whether the select is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: "Whether the select is in an error state",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    options: {
      description: "Array of options to display",
      control: false,
      table: {
        type: { summary: "Array<{ value: string | number; label: string; disabled?: boolean }>" },
      },
    },
    dropdownIcon: {
      description: "Custom dropdown icon element",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    selectedIcon: {
      description: "Custom icon for selected option",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      description: "Custom mode: SelectOption components for custom rendering",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    className: {
      description: "Additional CSS class names",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      description: "Currently selected value",
      control: false,
      table: {
        type: { summary: "string | number" },
      },
    },
    onChange: {
      description: "Callback when selection changes",
      control: false,
      table: {
        type: { summary: "(value: string | number, option: Option) => void" },
      },
    },
    maxHeight: {
      description: "Maximum height of dropdown",
      control: "number",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "300" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  name: "Basic Usage",
  render: function Render(args) {
    const [value, setValue] = useState<string | number | undefined>();
    return <Select {...args} options={FRUIT_OPTIONS_EXTENDED} value={value} onChange={(v) => setValue(v)} />;
  },
  args: {
    placeholder: "Select a fruit",
    size: "md",
    maxHeight: 300,
    disabled: false,
    readOnly: false,
    error: false,
  },
  argTypes: {
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    options: { table: { disable: true } },
    dropdownIcon: { table: { disable: true } },
    selectedIcon: { table: { disable: true } },
    children: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { useState } from "react";
import { Select } from "venomous-ui/react/components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export default function Demo() {
  const [value, setValue] = useState<string | number | undefined>();
  return (
    <Select
      options={options}
      value={value}
      onChange={(v) => setValue(v)}
      placeholder="Select a fruit"
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
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <Select size="sm" options={FRUIT_OPTIONS_EXTENDED} placeholder="Small" />
      <Select size="md" options={FRUIT_OPTIONS_EXTENDED} placeholder="Medium" />
      <Select size="lg" options={FRUIT_OPTIONS_EXTENDED} placeholder="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `<Select size="sm" options={options} placeholder="Small" />
<Select size="md" options={options} placeholder="Medium" />
<Select size="lg" options={options} placeholder="Large" />`,
      },
    },
  },
};

export const WithValue: Story = {
  name: "With Initial Value",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <Select options={FRUIT_OPTIONS_EXTENDED} value="cherry" placeholder="Select a fruit" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select can have an initial value set.",
      },
      source: {
        code: `<Select options={options} value="cherry" placeholder="Select a fruit" />`,
      },
    },
  },
};

export const DisabledOptions: Story = {
  name: "Disabled Options",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <Select options={FRUIT_OPTIONS_EXTENDED_WITH_DISABLED} placeholder="Some options are disabled" />
    </div>
  ),
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

<Select options={options} placeholder="Some options are disabled" />`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <Select options={FRUIT_OPTIONS_EXTENDED} placeholder="Normal" />
      <Select options={FRUIT_OPTIONS_EXTENDED} placeholder="Disabled" disabled />
      <Select options={FRUIT_OPTIONS_EXTENDED} placeholder="Error" error />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select supports disabled and error states.",
      },
      source: {
        code: `<Select options={options} placeholder="Normal" />
<Select options={options} placeholder="Disabled" disabled />
<Select options={options} placeholder="Error" error />`,
      },
    },
  },
};

export const CustomDropdownIcon: Story = {
  name: "Custom Dropdown Icon",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <Select options={FRUIT_OPTIONS_EXTENDED} placeholder="Select a fruit" dropdownIcon={<span>▼</span>} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Provide a custom `dropdownIcon` to replace the default dropdown indicator.",
      },
      source: {
        code: `<Select
  options={options}
  placeholder="Select a fruit"
  dropdownIcon={<Icon icon="mdi:chevron-down" />}
/>`,
      },
    },
  },
};

export const KeyboardNavigation: Story = {
  name: "Keyboard Navigation",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <p style={{ marginBottom: "12px", fontSize: "14px", color: "var(--VENOMOUSUI-text-secondary)" }}>
        Try these keyboard shortcuts:
        <br />• Enter/Space/ArrowDown: Open dropdown
        <br />• ArrowUp/ArrowDown: Navigate options
        <br />• Enter: Select option
        <br />• Escape: Close dropdown
      </p>
      <Select options={FRUIT_OPTIONS_EXTENDED} placeholder="Focus and use keyboard" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select supports full keyboard navigation for accessibility.",
      },
    },
  },
};

export const CustomMode: Story = {
  name: "Custom Mode (with Select.Option)",
  tags: ["!dev"],
  render: function Render(args) {
    const [value, setValue] = useState<string | number | undefined>();
    return (
      <div style={{ maxWidth: "300px" }}>
        <Select {...args} value={value} onChange={(v) => setValue(v)}>
          {FRUIT_OPTIONS_EXTENDED.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
    );
  },
  args: {
    placeholder: "Select a fruit",
    size: "md",
    disabled: false,
    error: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Custom Mode** allows you to render custom content in the dropdown using \`Select.Option\` components as children.

This is useful when you need:
- Custom option rendering (icons, avatars, complex layouts)
- Virtual list for large datasets
- Grouped options with custom headers

When children are provided, the \`options\` prop is ignored.
        `,
      },
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { useState } from "react";
import { Select } from "venomous-ui/react/components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export default function Demo() {
  const [value, setValue] = useState<string | number | undefined>();
  return (
    <Select value={value} onChange={(v) => setValue(v)} placeholder="Select a fruit">
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
}`,
      },
    },
  },
};

export const CustomModeWithVirtualList: Story = {
  name: "Custom Mode (Virtual List Example)",
  tags: ["!dev"],
  render: function Render() {
    const [value, setValue] = useState<string | number | undefined>();

    // Generate a large list of options
    const largeOptions = Array.from({ length: 1000 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
    }));

    // Simple windowing - only render visible items
    // In production, use a library like react-virtual or react-window
    const visibleCount = 10;
    const visibleOptions = largeOptions.slice(0, visibleCount);

    return (
      <div style={{ maxWidth: "300px" }}>
        <p style={{ marginBottom: "12px", fontSize: "14px", color: "var(--VENOMOUSUI-text-secondary)" }}>
          This example shows how to use custom mode with a large dataset.
          <br />
          In production, wrap your options with a virtual list library.
        </p>
        <Select value={value} onChange={(v) => setValue(v)} placeholder="Select from 1000 options">
          {visibleOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
          <div style={{ padding: "8px 12px", color: "var(--VENOMOUSUI-text-tertiary)", fontSize: "12px" }}>
            ... and {largeOptions.length - visibleCount} more (use virtual list)
          </div>
        </Select>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
For large datasets (thousands of options), use custom mode with a virtual list library like \`@tanstack/react-virtual\` or \`react-window\`.

This approach:
- Renders only visible items for performance
- Allows full customization of option rendering
- Works seamlessly with Select.Option components
        `,
      },
      source: {
        code: `"use client";

import { useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Select } from "venomous-ui/react/components";

const largeOptions = Array.from({ length: 10000 }, (_, i) => ({
  value: \`option-\${i}\`,
  label: \`Option \${i + 1}\`,
}));

export default function Demo() {
  const [value, setValue] = useState<string | number | undefined>();
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: largeOptions.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 36,
  });

  return (
    <Select value={value} onChange={(v) => setValue(v)} placeholder="Select an option">
      <div ref={parentRef} style={{ height: "300px", overflow: "auto" }}>
        <div style={{ height: virtualizer.getTotalSize(), position: "relative" }}>
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const option = largeOptions[virtualRow.index];
            return (
              <Select.Option
                key={option.value}
                value={option.value}
                style={{
                  position: "absolute",
                  top: virtualRow.start,
                  height: virtualRow.size,
                }}
              >
                {option.label}
              </Select.Option>
            );
          })}
        </div>
      </div>
    </Select>
  );
}`,
      },
    },
  },
};
