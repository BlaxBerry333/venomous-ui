import type { Meta, StoryObj } from "@storybook/react";
import { h } from "vue";

import Input from "@/vue/components/Input/Input.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS, INPUT_TYPE_OPTIONS } from "../constants";

import "@/core/styles/components/input.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Input",
  parameters: {
    docs: {
      description: {
        component: `
Input is a text field for user input.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    type: {
      description: "Input type",
      control: "select",
      options: INPUT_TYPE_OPTIONS,
      table: {
        type: { summary: INPUT_TYPE_OPTIONS.map((t) => `"${t}"`).join(" | ") },
        defaultValue: { summary: '"text"' },
      },
    },
    size: {
      description: "The size of the input",
      control: "select",
      options: FORM_SIZE_OPTIONS,
      table: {
        type: { summary: FORM_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    placeholder: {
      description: "Placeholder text",
      control: "text",
    },
    disabled: {
      description: "Whether the input is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      description: "Whether the input is read-only",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: "Whether the input is in an error state",
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
  render: (args) => <VueWrapper component={Input} props={args} />,
  args: {
    placeholder: "Enter text...",
    size: "md",
    type: "text",
    disabled: false,
    readOnly: false,
    error: false,
  },
  argTypes: {
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    "#prefix": { table: { disable: true } },
    "#suffix": { table: { disable: true } },
    modelValue: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/input.css";
import { Input } from "venomous-ui/vue";
</script>

<template>
  <Input placeholder="Enter text..." />
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
      <VueWrapper component={Input} props={{ size: "sm", placeholder: "Small" }} />
      <VueWrapper component={Input} props={{ size: "md", placeholder: "Medium" }} />
      <VueWrapper component={Input} props={{ size: "lg", placeholder: "Large" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/input.css";
import { Input } from "venomous-ui/vue";
</script>

<template>
  <Input size="sm" placeholder="Small" />
  <Input size="md" placeholder="Medium" />
  <Input size="lg" placeholder="Large" />
</template>`,
      },
    },
  },
};

export const Types: Story = {
  name: "Types",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <VueWrapper component={Input} props={{ type: "text", placeholder: "Text" }} />
      <VueWrapper component={Input} props={{ type: "email", placeholder: "Email" }} />
      <VueWrapper component={Input} props={{ type: "password", placeholder: "Password" }} />
      <VueWrapper component={Input} props={{ type: "number", placeholder: "Number" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input supports various HTML input types.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/input.css";
import { Input } from "venomous-ui/vue";
</script>

<template>
  <Input type="text" placeholder="Text" />
  <Input type="email" placeholder="Email" />
  <Input type="password" placeholder="Password" />
  <Input type="number" placeholder="Number" />
</template>`,
      },
    },
  },
};

export const WithPrefixSuffix: Story = {
  name: "With Prefix & Suffix",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <VueWrapper component={Input} props={{ placeholder: "Amount" }} children={{ prefix: () => h("span", "$") }} />
      <VueWrapper component={Input} props={{ placeholder: "Price" }} children={{ suffix: () => h("span", ".00") }} />
      <VueWrapper
        component={Input}
        props={{ placeholder: "domain" }}
        children={{
          prefix: () => h("span", "https://"),
          suffix: () => h("span", ".com"),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input supports prefix and suffix slots for icons, text, or other elements.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/input.css";
import { Input } from "venomous-ui/vue";
</script>

<template>
  <Input placeholder="Amount">
    <template #prefix>$</template>
  </Input>
  <Input placeholder="Price">
    <template #suffix>.00</template>
  </Input>
  <Input placeholder="domain">
    <template #prefix>https://</template>
    <template #suffix>.com</template>
  </Input>
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
      <VueWrapper component={Input} props={{ placeholder: "Normal" }} />
      <VueWrapper component={Input} props={{ placeholder: "Disabled", disabled: true }} />
      <VueWrapper
        component={Input}
        props={{ placeholder: "Read-only", readOnly: true, modelValue: "Read-only value" }}
      />
      <VueWrapper component={Input} props={{ placeholder: "Error", error: true }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input supports disabled, read-only, and error states.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/input.css";
import { Input } from "venomous-ui/vue";
</script>

<template>
  <Input placeholder="Normal" />
  <Input placeholder="Disabled" disabled />
  <Input placeholder="Read-only" read-only model-value="Read-only value" />
  <Input placeholder="Error" error />
</template>`,
      },
    },
  },
};
