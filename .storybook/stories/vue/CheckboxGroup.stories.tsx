import type { Meta, StoryObj } from "@storybook/react";

import CheckboxGroup from "@/vue/components/CheckboxGroup/CheckboxGroup.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS, FRUIT_OPTIONS, FRUIT_OPTIONS_WITH_DISABLED, ORIENTATION_OPTIONS } from "../constants";

import "@/core/styles/components/checkbox.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/CheckboxGroup",
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
      description: "The size of the checkboxes",
      control: "select",
      options: FORM_SIZE_OPTIONS,
      table: {
        type: { summary: FORM_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    orientation: {
      description: "Layout orientation",
      control: "select",
      options: ORIENTATION_OPTIONS,
      table: {
        type: { summary: ORIENTATION_OPTIONS.map((o) => `"${o}"`).join(" | ") },
        defaultValue: { summary: '"vertical"' },
      },
    },
    disabled: {
      description: "Whether all checkboxes are disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    options: {
      description: "Array of options to display",
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Basic Usage",
  render: (args) => <VueWrapper component={CheckboxGroup} props={{ ...args, options: FRUIT_OPTIONS }} />,
  args: {
    size: "md",
    orientation: "vertical",
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    "#checkedIcon": { table: { disable: true } },
    "#uncheckedIcon": { table: { disable: true } },
    options: { table: { disable: true } },
    modelValue: { table: { disable: true } },
    "@change": { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { CheckboxGroup } from "venomous-ui/vue";
import { ref } from "vue";

const values = ref<(string | number)[]>([]);
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];
</script>

<template>
  <CheckboxGroup v-model="values" :options="options" />
</template>`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Small</p>
        <VueWrapper component={CheckboxGroup} props={{ size: "sm", options: FRUIT_OPTIONS, modelValue: ["apple"] }} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Medium</p>
        <VueWrapper component={CheckboxGroup} props={{ size: "md", options: FRUIT_OPTIONS, modelValue: ["apple"] }} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Large</p>
        <VueWrapper component={CheckboxGroup} props={{ size: "lg", options: FRUIT_OPTIONS, modelValue: ["apple"] }} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { CheckboxGroup } from "venomous-ui/vue";
</script>

<template>
  <CheckboxGroup size="sm" :options="options" />
  <CheckboxGroup size="md" :options="options" />
  <CheckboxGroup size="lg" :options="options" />
</template>`,
      },
    },
  },
};

export const Orientations: Story = {
  name: "Orientations",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 500 }}>Vertical (default)</p>
        <VueWrapper
          component={CheckboxGroup}
          props={{ orientation: "vertical", options: FRUIT_OPTIONS, modelValue: ["apple", "cherry"] }}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 500 }}>Horizontal</p>
        <VueWrapper
          component={CheckboxGroup}
          props={{ orientation: "horizontal", options: FRUIT_OPTIONS, modelValue: ["apple", "cherry"] }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup supports vertical (default) and horizontal orientations.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { CheckboxGroup } from "venomous-ui/vue";
</script>

<template>
  <CheckboxGroup orientation="vertical" :options="options" />
  <CheckboxGroup orientation="horizontal" :options="options" />
</template>`,
      },
    },
  },
};

export const WithValue: Story = {
  name: "With Initial Values",
  tags: ["!dev"],
  render: () => (
    <VueWrapper component={CheckboxGroup} props={{ options: FRUIT_OPTIONS, modelValue: ["apple", "cherry"] }} />
  ),
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup can have initial values set as an array.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { CheckboxGroup } from "venomous-ui/vue";
import { ref } from "vue";

const values = ref(["apple", "cherry"]);
</script>

<template>
  <CheckboxGroup v-model="values" :options="options" />
</template>`,
      },
    },
  },
};

export const DisabledOptions: Story = {
  name: "Disabled Options",
  tags: ["!dev"],
  render: () => <VueWrapper component={CheckboxGroup} props={{ options: FRUIT_OPTIONS_WITH_DISABLED }} />,
  parameters: {
    docs: {
      description: {
        story: "Individual options can be disabled by setting `disabled: true` on the option object.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { CheckboxGroup } from "venomous-ui/vue";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" },
];
</script>

<template>
  <CheckboxGroup :options="options" />
</template>`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Normal</p>
        <VueWrapper component={CheckboxGroup} props={{ options: FRUIT_OPTIONS }} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 500 }}>Disabled</p>
        <VueWrapper component={CheckboxGroup} props={{ options: FRUIT_OPTIONS, disabled: true }} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "CheckboxGroup supports disabled state.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/checkbox.css";
import { CheckboxGroup } from "venomous-ui/vue";
</script>

<template>
  <CheckboxGroup :options="options" />
  <CheckboxGroup :options="options" disabled />
</template>`,
      },
    },
  },
};
