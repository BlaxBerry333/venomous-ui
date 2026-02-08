import type { Meta, StoryObj } from "@storybook/react";
import { h } from "vue";

import Select from "@/vue/components/Select/Select.vue";
import SelectOption from "@/vue/components/Select/SelectOption.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS, FRUIT_OPTIONS_EXTENDED, FRUIT_OPTIONS_EXTENDED_WITH_DISABLED } from "../constants";

import "@/core/styles/components/select.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Select",
  parameters: {
    docs: {
      description: {
        component: `Select is a dropdown for choosing a single option from a list.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
      subcomponents: [
        {
          name: "<SelectOption>",
          argTypes: {
            value: {
              name: "value",
              description: "Option value",
              table: { type: { summary: "string | number" } },
            },
            disabled: {
              name: "disabled",
              description: "Whether the option is disabled",
              table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
            },
          },
        },
      ],
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
      description: "Slot for custom dropdown icon",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
    modelValue: {
      description: "Currently selected value (v-model)",
      control: false,
      table: {
        type: { summary: "string | number" },
      },
    },
    maxHeight: {
      description: "Maximum height of dropdown",
      control: false,
      table: {
        type: { summary: "number | string" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Basic Usage",
  render: (args) => <VueWrapper component={Select} props={{ ...args, options: FRUIT_OPTIONS_EXTENDED }} />,
  args: {
    placeholder: "Select a fruit",
    size: "md",
    disabled: false,
    readOnly: false,
    error: false,
  },
  argTypes: {
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    options: { table: { disable: true } },
    "#dropdownIcon": { table: { disable: true } },
    "#selectedIcon": { table: { disable: true } },
    "#default": { table: { disable: true } },
    modelValue: { table: { disable: true } },
    "@change": { table: { disable: true } },
    maxHeight: { table: { disable: true } },
    dropdownIcon: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { Select } from "venomous-ui/vue";
import { ref } from "vue";

const value = ref<string | number | undefined>();
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];
</script>

<template>
  <Select
    v-model="value"
    :options="options"
    placeholder="Select a fruit"
  />
</template>`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <VueWrapper component={Select} props={{ size: "sm", options: FRUIT_OPTIONS_EXTENDED, placeholder: "Small" }} />
      <VueWrapper component={Select} props={{ size: "md", options: FRUIT_OPTIONS_EXTENDED, placeholder: "Medium" }} />
      <VueWrapper component={Select} props={{ size: "lg", options: FRUIT_OPTIONS_EXTENDED, placeholder: "Large" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { Select } from "venomous-ui/vue";
</script>

<template>
  <Select size="sm" :options="options" placeholder="Small" />
  <Select size="md" :options="options" placeholder="Medium" />
  <Select size="lg" :options="options" placeholder="Large" />
</template>`,
      },
    },
  },
};

export const WithValue: Story = {
  name: "With Initial Value",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <VueWrapper
        component={Select}
        props={{ options: FRUIT_OPTIONS_EXTENDED, modelValue: "cherry", placeholder: "Select a fruit" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select can have an initial value set.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { Select } from "venomous-ui/vue";
import { ref } from "vue";

const value = ref("cherry");
</script>

<template>
  <Select v-model="value" :options="options" placeholder="Select a fruit" />
</template>`,
      },
    },
  },
};

export const DisabledOptions: Story = {
  name: "Disabled Options",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <VueWrapper
        component={Select}
        props={{ options: FRUIT_OPTIONS_EXTENDED_WITH_DISABLED, placeholder: "Some options are disabled" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Individual options can be disabled by setting `disabled: true` on the option object.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { Select } from "venomous-ui/vue";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" },
];
</script>

<template>
  <Select :options="options" placeholder="Some options are disabled" />
</template>`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <VueWrapper component={Select} props={{ options: FRUIT_OPTIONS_EXTENDED, placeholder: "Normal" }} />
      <VueWrapper
        component={Select}
        props={{ options: FRUIT_OPTIONS_EXTENDED, placeholder: "Disabled", disabled: true }}
      />
      <VueWrapper component={Select} props={{ options: FRUIT_OPTIONS_EXTENDED, placeholder: "Error", error: true }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select supports disabled and error states.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { Select } from "venomous-ui/vue";
</script>

<template>
  <Select :options="options" placeholder="Normal" />
  <Select :options="options" placeholder="Disabled" disabled />
  <Select :options="options" placeholder="Error" error />
</template>`,
      },
    },
  },
};

export const CustomDropdownIcon: Story = {
  name: "Custom Dropdown Icon",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <VueWrapper
        component={Select}
        props={{ options: FRUIT_OPTIONS_EXTENDED, placeholder: "Select a fruit" }}
        children={{ dropdownIcon: () => h("span", "▼") }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Provide a `dropdownIcon` slot to replace the default dropdown indicator.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { Select } from "venomous-ui/vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <Select :options="options" placeholder="Select a fruit">
    <template #dropdownIcon>
      <Icon icon="mdi:chevron-down" />
    </template>
  </Select>
</template>`,
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
      <VueWrapper
        component={Select}
        props={{ options: FRUIT_OPTIONS_EXTENDED, placeholder: "Focus and use keyboard" }}
      />
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
  name: "Custom Mode (with SelectOption)",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <VueWrapper
        component={Select}
        props={{ placeholder: "Select a fruit" }}
        children={{
          default: () =>
            FRUIT_OPTIONS_EXTENDED.map((option) =>
              h(SelectOption, { key: option.value, value: option.value }, () => option.label),
            ),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Custom Mode** allows you to render custom content in the dropdown using \`SelectOption\` components in the default slot.

This is useful when you need:
- Custom option rendering (icons, avatars, complex layouts)
- Virtual list for large datasets
- Grouped options with custom headers

When the default slot is provided, the \`options\` prop is ignored.
        `,
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/select.css";
import { Select, SelectOption } from "venomous-ui/vue";
import { ref } from "vue";

const value = ref<string | number | undefined>();
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];
</script>

<template>
  <Select v-model="value" placeholder="Select a fruit">
    <SelectOption
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </SelectOption>
  </Select>
</template>`,
      },
    },
  },
};

export const CustomModeWithVirtualList: Story = {
  name: "Custom Mode (Virtual List Example)",
  tags: ["!dev"],
  render: () => {
    // Generate a large list of options for demonstration
    const largeOptions = Array.from({ length: 1000 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
    }));

    // Only show first 10 for demo
    const visibleOptions = largeOptions.slice(0, 10);

    return (
      <div style={{ maxWidth: "300px" }}>
        <p style={{ marginBottom: "12px", fontSize: "14px", color: "var(--VENOMOUSUI-text-secondary)" }}>
          This example shows how to use custom mode with a large dataset.
          <br />
          In production, wrap your options with a virtual list library.
        </p>
        <VueWrapper
          component={Select}
          props={{ placeholder: "Select from 1000 options" }}
          children={{
            default: () => [
              ...visibleOptions.map((option) =>
                h(SelectOption, { key: option.value, value: option.value }, () => option.label),
              ),
              h(
                "div",
                {
                  style: { padding: "8px 12px", color: "var(--VENOMOUSUI-text-tertiary)", fontSize: "12px" },
                },
                `... and ${largeOptions.length - visibleOptions.length} more (use virtual list)`,
              ),
            ],
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
For large datasets (thousands of options), use custom mode with a virtual list library like \`vue-virtual-scroller\`.

This approach:
- Renders only visible items for performance
- Allows full customization of option rendering
- Works seamlessly with SelectOption components
        `,
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { ref } from "vue";
import { RecycleScroller } from "vue-virtual-scroller";
import { Select, SelectOption } from "venomous-ui/vue";

const value = ref<string | number | undefined>();
const largeOptions = Array.from({ length: 10000 }, (_, i) => ({
  value: \`option-\${i}\`,
  label: \`Option \${i + 1}\`,
}));
</script>

<template>
  <Select v-model="value" placeholder="Select an option">
    <RecycleScroller
      :items="largeOptions"
      :item-size="36"
      key-field="value"
      v-slot="{ item }"
    >
      <SelectOption :value="item.value">
        {{ item.label }}
      </SelectOption>
    </RecycleScroller>
  </Select>
</template>`,
      },
    },
  },
};
