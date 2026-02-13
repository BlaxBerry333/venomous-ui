import type { Meta, StoryObj } from "@storybook/react";

import Switch from "@/vue/components/Switch/Switch.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/switch.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Switch",
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
      description: "Whether the switch is on (uncontrolled)",
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Basic Usage",
  render: (args) => <VueWrapper component={Switch} props={args} />,
  args: {
    label: "Enable notifications",
    size: "md",
    checked: false,
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    modelValue: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/switch.css";
import { Switch } from "venomous-ui/vue";
import { ref } from "vue";

const enabled = ref(false);
</script>

<template>
  <Switch v-model="enabled" label="Enable notifications" />
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
      <VueWrapper component={Switch} props={{ size: "sm", label: "Small switch" }} />
      <VueWrapper component={Switch} props={{ size: "md", label: "Medium switch" }} />
      <VueWrapper component={Switch} props={{ size: "lg", label: "Large switch" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Switch comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/switch.css";
import { Switch } from "venomous-ui/vue";
</script>

<template>
  <Switch size="sm" label="Small switch" />
  <Switch size="md" label="Medium switch" />
  <Switch size="lg" label="Large switch" />
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
      <VueWrapper component={Switch} props={{ label: "Off" }} />
      <VueWrapper component={Switch} props={{ label: "On", checked: true }} />
      <VueWrapper component={Switch} props={{ label: "Disabled off", disabled: true }} />
      <VueWrapper component={Switch} props={{ label: "Disabled on", disabled: true, checked: true }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Switch supports various states: off, on, and disabled.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/switch.css";
import { Switch } from "venomous-ui/vue";
</script>

<template>
  <Switch label="Off" />
  <Switch label="On" :checked="true" />
  <Switch label="Disabled off" disabled />
  <Switch label="Disabled on" disabled :checked="true" />
</template>`,
      },
    },
  },
};
