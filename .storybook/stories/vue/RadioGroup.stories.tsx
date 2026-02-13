import type { Meta, StoryObj } from "@storybook/react";

import RadioGroup from "@/vue/components/RadioGroup/RadioGroup.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS, FRUIT_OPTIONS, FRUIT_OPTIONS_WITH_DISABLED, ORIENTATION_OPTIONS } from "../constants";

import "@/core/styles/components/radio.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/RadioGroup",
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
      description: "The size of the radio buttons",
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
      description: "Whether all radio buttons are disabled",
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
  render: (args) => <VueWrapper component={RadioGroup} props={{ ...args, options: FRUIT_OPTIONS }} />,
  args: {
    size: "md",
    orientation: "vertical",
    disabled: false,
  },
  argTypes: {
    className: { table: { disable: true } },
    name: { table: { disable: true } },
    options: { table: { disable: true } },
    "#checkedIcon": { table: { disable: true } },
    "#uncheckedIcon": { table: { disable: true } },
    modelValue: { table: { disable: true } },
    "@change": { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/radio.css";
import { RadioGroup } from "venomous-ui/vue";
import { ref } from "vue";

const value = ref<string | number | undefined>();
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];
</script>

<template>
  <RadioGroup v-model="value" :options="options" />
</template>`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <VueWrapper component={RadioGroup} props={{ size: "sm", options: FRUIT_OPTIONS, modelValue: "apple" }} />
      <VueWrapper component={RadioGroup} props={{ size: "md", options: FRUIT_OPTIONS, modelValue: "apple" }} />
      <VueWrapper component={RadioGroup} props={{ size: "lg", options: FRUIT_OPTIONS, modelValue: "apple" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "RadioGroup comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/radio.css";
import { RadioGroup } from "venomous-ui/vue";
</script>

<template>
  <RadioGroup size="sm" :options="options" />
  <RadioGroup size="md" :options="options" />
  <RadioGroup size="lg" :options="options" />
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
          component={RadioGroup}
          props={{ orientation: "vertical", options: FRUIT_OPTIONS, modelValue: "apple" }}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 500 }}>Horizontal</p>
        <VueWrapper
          component={RadioGroup}
          props={{ orientation: "horizontal", options: FRUIT_OPTIONS, modelValue: "apple" }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "RadioGroup supports vertical (default) and horizontal orientations.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/radio.css";
import { RadioGroup } from "venomous-ui/vue";
</script>

<template>
  <RadioGroup orientation="vertical" :options="options" />
  <RadioGroup orientation="horizontal" :options="options" />
</template>`,
      },
    },
  },
};

export const WithValue: Story = {
  name: "With Initial Value",
  tags: ["!dev"],
  render: () => <VueWrapper component={RadioGroup} props={{ options: FRUIT_OPTIONS, modelValue: "banana" }} />,
  parameters: {
    docs: {
      description: {
        story: "RadioGroup can have an initial value set.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/radio.css";
import { RadioGroup } from "venomous-ui/vue";
import { ref } from "vue";

const value = ref("banana");
</script>

<template>
  <RadioGroup v-model="value" :options="options" />
</template>`,
      },
    },
  },
};

export const DisabledOptions: Story = {
  name: "Disabled Options",
  tags: ["!dev"],
  render: () => <VueWrapper component={RadioGroup} props={{ options: FRUIT_OPTIONS_WITH_DISABLED }} />,
  parameters: {
    docs: {
      description: {
        story: "Individual options can be disabled by setting `disabled: true` on the option object.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/radio.css";
import { RadioGroup } from "venomous-ui/vue";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" },
];
</script>

<template>
  <RadioGroup :options="options" />
</template>`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <VueWrapper component={RadioGroup} props={{ options: FRUIT_OPTIONS }} />
      <VueWrapper component={RadioGroup} props={{ options: FRUIT_OPTIONS, disabled: true }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "RadioGroup supports disabled state.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/radio.css";
import { RadioGroup } from "venomous-ui/vue";
</script>

<template>
  <RadioGroup :options="options" />
  <RadioGroup :options="options" disabled />
</template>`,
      },
    },
  },
};
