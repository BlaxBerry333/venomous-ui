import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "@/vue/components/Textarea/Textarea.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS, TEXTAREA_RESIZE_OPTIONS } from "../constants";

import "@/core/styles/components/textarea.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Textarea",
  parameters: {
    docs: {
      description: {
        component: `
Textarea is a multi-line text input field.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "The size of the textarea",
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
    rows: {
      description: "Number of visible text lines",
      control: "number",
    },
    resize: {
      description: "Resize behavior",
      control: "select",
      options: TEXTAREA_RESIZE_OPTIONS,
      table: {
        type: { summary: TEXTAREA_RESIZE_OPTIONS.map((r) => `"${r}"`).join(" | ") },
        defaultValue: { summary: '"vertical"' },
      },
    },
    autoResize: {
      description: "Whether to auto-resize based on content",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Whether the textarea is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      description: "Whether the textarea is read-only",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: "Whether the textarea is in an error state",
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
  render: (args) => <VueWrapper component={Textarea} props={args} />,
  args: {
    placeholder: "Enter text...",
    size: "md",
    rows: 3,
    resize: "vertical",
    autoResize: false,
    disabled: false,
    readOnly: false,
    error: false,
  },
  argTypes: {
    name: { table: { disable: true } },
    className: { table: { disable: true } },
    modelValue: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/textarea.css";
import { Textarea } from "venomous-ui/vue";
</script>

<template>
  <Textarea placeholder="Enter text..." :rows="4" />
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
      <VueWrapper component={Textarea} props={{ size: "sm", placeholder: "Small", rows: 3 }} />
      <VueWrapper component={Textarea} props={{ size: "md", placeholder: "Medium", rows: 3 }} />
      <VueWrapper component={Textarea} props={{ size: "lg", placeholder: "Large", rows: 3 }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textarea comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/textarea.css";
import { Textarea } from "venomous-ui/vue";
</script>

<template>
  <Textarea size="sm" placeholder="Small" :rows="3" />
  <Textarea size="md" placeholder="Medium" :rows="3" />
  <Textarea size="lg" placeholder="Large" :rows="3" />
</template>`,
      },
    },
  },
};

export const ResizeBehavior: Story = {
  name: "Resize Behavior",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
      <VueWrapper component={Textarea} props={{ resize: "none", placeholder: "No resize", rows: 3 }} />
      <VueWrapper component={Textarea} props={{ resize: "vertical", placeholder: "Vertical resize", rows: 3 }} />
      <VueWrapper component={Textarea} props={{ resize: "horizontal", placeholder: "Horizontal resize", rows: 3 }} />
      <VueWrapper component={Textarea} props={{ resize: "both", placeholder: "Both directions", rows: 3 }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Control resize behavior with the `resize` prop.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/textarea.css";
import { Textarea } from "venomous-ui/vue";
</script>

<template>
  <Textarea resize="none" placeholder="No resize" :rows="3" />
  <Textarea resize="vertical" placeholder="Vertical resize" :rows="3" />
  <Textarea resize="horizontal" placeholder="Horizontal resize" :rows="3" />
  <Textarea resize="both" placeholder="Both directions" :rows="3" />
</template>`,
      },
    },
  },
};

export const AutoResize: Story = {
  name: "Auto Resize",
  tags: ["!dev"],
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <VueWrapper
        component={Textarea}
        props={{ autoResize: true, placeholder: "Type to see auto-resize...", rows: 2 }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Enable `autoResize` to automatically adjust height based on content.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/textarea.css";
import { Textarea } from "venomous-ui/vue";
</script>

<template>
  <Textarea auto-resize placeholder="Type to see auto-resize..." :rows="2" />
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
      <VueWrapper component={Textarea} props={{ placeholder: "Normal", rows: 2 }} />
      <VueWrapper component={Textarea} props={{ placeholder: "Disabled", disabled: true, rows: 2 }} />
      <VueWrapper
        component={Textarea}
        props={{ placeholder: "Read-only", readOnly: true, modelValue: "Read-only content", rows: 2 }}
      />
      <VueWrapper component={Textarea} props={{ placeholder: "Error", error: true, rows: 2 }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textarea supports disabled, read-only, and error states.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/textarea.css";
import { Textarea } from "venomous-ui/vue";
</script>

<template>
  <Textarea placeholder="Normal" :rows="2" />
  <Textarea placeholder="Disabled" disabled :rows="2" />
  <Textarea placeholder="Read-only" read-only model-value="Read-only content" :rows="2" />
  <Textarea placeholder="Error" error :rows="2" />
</template>`,
      },
    },
  },
};
