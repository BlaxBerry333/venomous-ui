import type { Meta, StoryObj } from "@storybook/react";
import { h } from "vue";

import Checkbox from "@/vue/components/Checkbox/Checkbox.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/checkbox.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Checkbox",
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
      description: "Whether the checkbox is checked (uncontrolled)",
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
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Basic Usage",
  render: (args) => <VueWrapper component={Checkbox} props={args} />,
  args: {
    label: "Accept terms and conditions",
    size: "md",
    checked: false,
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    "#checkedIcon": { table: { disable: true } },
    "#uncheckedIcon": { table: { disable: true } },
    checked: { table: { disable: true } },
    modelValue: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { Checkbox } from "venomous-ui/vue";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <Checkbox v-model="checked" label="Accept terms and conditions" />
</template>`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <VueWrapper component={Checkbox} props={{ size: "sm", label: "Small checkbox" }} />
      <VueWrapper component={Checkbox} props={{ size: "md", label: "Medium checkbox" }} />
      <VueWrapper component={Checkbox} props={{ size: "lg", label: "Large checkbox" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { Checkbox } from "venomous-ui/vue";
</script>

<template>
  <Checkbox size="sm" label="Small checkbox" />
  <Checkbox size="md" label="Medium checkbox" />
  <Checkbox size="lg" label="Large checkbox" />
</template>`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <VueWrapper component={Checkbox} props={{ label: "Unchecked" }} />
      <VueWrapper component={Checkbox} props={{ label: "Checked", checked: true }} />
      <VueWrapper component={Checkbox} props={{ label: "Disabled", disabled: true }} />
      <VueWrapper component={Checkbox} props={{ label: "Disabled checked", disabled: true, checked: true }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox supports various states: unchecked, checked, and disabled.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { Checkbox } from "venomous-ui/vue";
</script>

<template>
  <Checkbox label="Unchecked" />
  <Checkbox label="Checked" :checked="true" />
  <Checkbox label="Disabled" disabled />
  <Checkbox label="Disabled checked" disabled :checked="true" />
</template>`,
      },
    },
  },
};

export const CustomIcons: Story = {
  name: "Custom Icons",
  tags: ["!dev"],
  render: () => (
    <VueWrapper
      component={Checkbox}
      props={{ label: "Custom icon checkbox" }}
      children={{
        checkedIcon: () => h("span", { style: { color: "var(--VENOMOUSUI-color-theme)" } }, "✓"),
        uncheckedIcon: () => h("span", { style: { color: "var(--VENOMOUSUI-text-tertiary)" } }, "○"),
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Provide `checkedIcon` and `uncheckedIcon` slots to use custom icons instead of native checkbox.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { Checkbox } from "venomous-ui/vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <Checkbox label="Custom icon checkbox">
    <template #checkedIcon>
      <Icon icon="mdi:checkbox-marked" />
    </template>
    <template #uncheckedIcon>
      <Icon icon="mdi:checkbox-blank-outline" />
    </template>
  </Checkbox>
</template>`,
      },
    },
  },
};
