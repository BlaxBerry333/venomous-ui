import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { h, ref, type VNode } from "vue";

import Button from "@/vue/components/Button/Button.vue";
import Checkbox from "@/vue/components/Checkbox/Checkbox.vue";
import FormField from "@/vue/components/FormField/FormField.vue";
import Input from "@/vue/components/Input/Input.vue";
import RadioGroup from "@/vue/components/RadioGroup/RadioGroup.vue";
import Select from "@/vue/components/Select/Select.vue";
import Switch from "@/vue/components/Switch/Switch.vue";
import Textarea from "@/vue/components/Textarea/Textarea.vue";
import { VueWrapper } from "../../wrappers";
import { FORM_SIZE_OPTIONS, ORIENTATION_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/checkbox.css";
import "@/core/styles/components/form-field.css";
import "@/core/styles/components/input.css";
import "@/core/styles/components/radio.css";
import "@/core/styles/components/select.css";
import "@/core/styles/components/switch.css";
import "@/core/styles/components/textarea.css";
import "@/core/styles/components/tooltip.css";
import "@/core/styles/variables/index.css";

const CONTROL_POSITION_OPTIONS = ["start", "end"] as const;

const meta: Meta = {
  title: "Vue Components/FormField",
  parameters: {
    docs: {
      description: {
        component: `FormField wraps form controls with labels, error messages, and tooltips. Auto-injects accessibility attributes.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
    },
  },
  argTypes: {
    label: {
      description: "Label text for the form field",
      control: "text",
    },
    required: {
      description: "Whether the field is required",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: "Error message to display",
      control: "text",
    },
    tooltip: {
      description: "Tooltip content (string only)",
      control: "text",
    },
    size: {
      description: "Size of the label and error text",
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
    controlPosition: {
      description: "Position of control relative to label. Only works with horizontal orientation.",
      control: "select",
      options: [undefined, ...CONTROL_POSITION_OPTIONS],
      if: { arg: "orientation", eq: "horizontal" },
      table: {
        type: { summary: CONTROL_POSITION_OPTIONS.map((p) => `"${p}"`).join(" | ") },
      },
    },
    "#default": {
      description: "Slot for form control",
      control: false,
      table: { type: { summary: "slot" } },
    },
    "#tooltipIcon": {
      description: "Slot for tooltip icon",
      control: false,
      table: { type: { summary: "slot" } },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Basic Usage",
  render: function Render(args) {
    // Auto-show tooltipIcon when tooltip has value (color: inherit for error state)
    const children: Record<string, () => VNode | string> = {
      default: () => h(Input, { type: "email", placeholder: "Enter your email" }),
    };
    if (args.tooltip) {
      children.tooltipIcon = () => h("span", { style: { cursor: "help", color: "inherit" } }, "ⓘ");
    }
    return <VueWrapper component={FormField} props={args} children={children} />;
  },
  args: {
    label: "Email",
    size: "md",
    orientation: "vertical",
    controlPosition: undefined,
    required: false,
    error: "",
    tooltip: "",
  },
  argTypes: {
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    tooltipIcon: { table: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/form-field.css";
import "venomous-ui/core/styles/components/input.css";
import { FormField, Input } from "venomous-ui/vue";
import { ref } from "vue";

const email = ref("");
</script>

<template>
  <FormField label="Email">
    <Input v-model="email" type="email" placeholder="Enter your email" />
  </FormField>
</template>`,
      },
    },
  },
};

export const Required: Story = {
  name: "Required Field",
  tags: ["!dev"],
  render: () => (
    <VueWrapper
      component={FormField}
      props={{ label: "Username", required: true }}
      children={{ default: () => h(Input, { placeholder: "Enter username" }) }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Add `required` prop to display an asterisk next to the label.",
      },
      source: {
        language: "html",
        code: `<FormField label="Username" required>
  <Input placeholder="Enter username" />
</FormField>`,
      },
    },
  },
};

export const WithError: Story = {
  name: "With Error",
  tags: ["!dev"],
  render: () => (
    <VueWrapper
      component={FormField}
      props={{ label: "Email", error: "Please enter a valid email address" }}
      children={{ default: () => h(Input, { type: "email", placeholder: "Enter your email" }) }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Pass an error message to display validation errors. The control will automatically receive `error` and `aria-invalid` props.",
      },
      source: {
        language: "html",
        code: `<FormField label="Email" error="Please enter a valid email address">
  <Input type="email" placeholder="Enter your email" />
</FormField>`,
      },
    },
  },
};

export const WithTooltip: Story = {
  name: "With Tooltip",
  tags: ["!dev"],
  render: () => (
    <VueWrapper
      component={FormField}
      props={{ label: "Password", tooltip: "Password must be at least 8 characters" }}
      children={{
        default: () => h(Input, { type: "password", placeholder: "Enter password" }),
        tooltipIcon: () => h("span", { style: { cursor: "help", color: "inherit" } }, "ⓘ"),
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Add `tooltip` prop and `tooltipIcon` slot to provide additional help information. Use `color: inherit` on the icon to inherit error state color.",
      },
      source: {
        language: "html",
        code: `<FormField label="Password" tooltip="Password must be at least 8 characters">
  <template #tooltipIcon>
    <Icon icon="mdi:information" style="color: inherit" />
  </template>
  <Input type="password" placeholder="Enter password" />
</FormField>`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px" }}>
      <VueWrapper
        component={FormField}
        props={{ label: "Small label", size: "sm" }}
        children={{ default: () => h(Input, { size: "sm", placeholder: "Small input" }) }}
      />
      <VueWrapper
        component={FormField}
        props={{ label: "Medium label", size: "md" }}
        children={{ default: () => h(Input, { size: "md", placeholder: "Medium input" }) }}
      />
      <VueWrapper
        component={FormField}
        props={{ label: "Large label", size: "lg" }}
        children={{ default: () => h(Input, { size: "lg", placeholder: "Large input" }) }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "FormField comes in three sizes that affect the label and error text.",
      },
      source: {
        language: "html",
        code: `<FormField label="Small label" size="sm">
  <Input size="sm" placeholder="Small input" />
</FormField>
<FormField label="Medium label" size="md">
  <Input size="md" placeholder="Medium input" />
</FormField>
<FormField label="Large label" size="lg">
  <Input size="lg" placeholder="Large input" />
</FormField>`,
      },
    },
  },
};

export const HorizontalLayout: Story = {
  name: "Horizontal Layout",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <VueWrapper
        component={FormField}
        props={{ label: "Remember me", orientation: "horizontal", controlPosition: "start" }}
        children={{ default: () => h(Checkbox) }}
      />
      <VueWrapper
        component={FormField}
        props={{ label: "Enable notifications", orientation: "horizontal", controlPosition: "start" }}
        children={{ default: () => h(Switch) }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `orientation="horizontal"` with `controlPosition` to place checkboxes or switches inline with labels.',
      },
      source: {
        language: "html",
        code: `<FormField label="Remember me" orientation="horizontal" control-position="start">
  <Checkbox />
</FormField>
<FormField label="Enable notifications" orientation="horizontal" control-position="start">
  <Switch />
</FormField>`,
      },
    },
  },
};

export const ControlPositions: Story = {
  name: "Control Positions",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <VueWrapper
        component={FormField}
        props={{ label: "Control at start", orientation: "horizontal", controlPosition: "start" }}
        children={{ default: () => h(Checkbox) }}
      />
      <VueWrapper
        component={FormField}
        props={{ label: "Control at end", orientation: "horizontal", controlPosition: "end" }}
        children={{ default: () => h(Checkbox) }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'In horizontal layout, use `controlPosition="start"` or `controlPosition="end"` to position the control.',
      },
      source: {
        language: "html",
        code: `<FormField label="Control at start" orientation="horizontal" control-position="start">
  <Checkbox />
</FormField>
<FormField label="Control at end" orientation="horizontal" control-position="end">
  <Checkbox />
</FormField>`,
      },
    },
  },
};

export const UncontrolledForm: Story = {
  name: "Complete Form (Uncontrolled)",
  tags: ["!dev"],
  render: () => {
    const countries = [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
    ];
    const plans = [
      { value: "free", label: "Free" },
      { value: "pro", label: "Pro ($10/mo)" },
      { value: "enterprise", label: "Enterprise ($50/mo)" },
    ];

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
        style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }}
      >
        <VueWrapper
          component={FormField}
          props={{ label: "Email", required: true }}
          children={{ default: () => h(Input, { type: "email", placeholder: "you@example.com" }) }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Password", required: true, tooltip: "At least 8 characters" }}
          children={{
            default: () => h(Input, { type: "password", placeholder: "Enter password" }),
            tooltipIcon: () => h("span", { style: { cursor: "help", color: "inherit" } }, "ⓘ"),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Country", required: true }}
          children={{
            default: () => h(Select, { name: "country", options: countries, placeholder: "Select a country" }),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Plan", required: true }}
          children={{
            default: () => h(RadioGroup, { name: "plan", options: plans }),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Bio" }}
          children={{ default: () => h(Textarea, { placeholder: "Tell us about yourself...", rows: 3 }) }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Subscribe to newsletter", orientation: "horizontal", controlPosition: "start" }}
          children={{ default: () => h(Checkbox) }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "I accept the terms", orientation: "horizontal", controlPosition: "start", required: true }}
          children={{ default: () => h(Checkbox) }}
        />

        <VueWrapper component={Button} props={{ type: "submit" }} children="Submit" />
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Uncontrolled form example. In Vue, use v-model for two-way binding with form controls.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { FormField, Input, Select, RadioGroup, Textarea, Checkbox, Button } from "venomous-ui/vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <FormField label="Email" required>
      <Input type="email" placeholder="you@example.com" />
    </FormField>

    <FormField label="Password" required tooltip="At least 8 characters">
      <template #tooltipIcon>
        <Icon icon="mdi:information" style="color: inherit" />
      </template>
      <Input type="password" placeholder="Enter password" />
    </FormField>

    <FormField label="Country" required>
      <Select name="country" :options="countries" placeholder="Select a country" />
    </FormField>

    <FormField label="Plan" required>
      <RadioGroup name="plan" :options="plans" />
    </FormField>

    <FormField label="Bio">
      <Textarea placeholder="Tell us about yourself..." :rows="3" />
    </FormField>

    <FormField label="Subscribe to newsletter" orientation="horizontal" control-position="start">
      <Checkbox />
    </FormField>

    <FormField label="I accept the terms" orientation="horizontal" control-position="start" required>
      <Checkbox />
    </FormField>

    <Button type="submit">Submit</Button>
  </form>
</template>`,
      },
    },
  },
};

export const ControlledForm: Story = {
  name: "Complete Form (Controlled)",
  tags: ["!dev"],
  render: function Render() {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const formRef = ref({
      email: "",
      password: "",
      country: undefined as string | number | undefined,
      plan: undefined as string | number | undefined,
      bio: "",
      newsletter: false,
      terms: false,
    });

    const countries = [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
    ];
    const plans = [
      { value: "free", label: "Free" },
      { value: "pro", label: "Pro ($10/mo)" },
      { value: "enterprise", label: "Enterprise ($50/mo)" },
    ];

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      const form = formRef.value;

      if (!form.email) newErrors.email = "Email is required";
      if (!form.password) newErrors.password = "Password is required";
      if (form.password && form.password.length < 8) newErrors.password = "Password must be at least 8 characters";
      if (!form.country) newErrors.country = "Please select a country";
      if (!form.plan) newErrors.plan = "Please select a plan";
      if (!form.bio) newErrors.bio = "Bio is required";
      if (!form.terms) newErrors.terms = "You must accept the terms";

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        alert(JSON.stringify(form, null, 2));
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }}
      >
        <VueWrapper
          component={FormField}
          props={{ label: "Email", required: true, error: errors.email }}
          children={{
            default: () =>
              h(Input, {
                type: "email",
                placeholder: "you@example.com",
                modelValue: formRef.value.email,
                "onUpdate:modelValue": (v: string) => (formRef.value.email = v),
              }),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Password", required: true, error: errors.password, tooltip: "At least 8 characters" }}
          children={{
            default: () =>
              h(Input, {
                type: "password",
                placeholder: "Enter password",
                modelValue: formRef.value.password,
                "onUpdate:modelValue": (v: string) => (formRef.value.password = v),
              }),
            tooltipIcon: () => h("span", { style: { cursor: "help", color: "inherit" } }, "ⓘ"),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Country", required: true, error: errors.country }}
          children={{
            default: () =>
              h(Select, {
                options: countries,
                placeholder: "Select a country",
                modelValue: formRef.value.country,
                "onUpdate:modelValue": (v: string | number) => (formRef.value.country = v),
              }),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Plan", required: true, error: errors.plan }}
          children={{
            default: () =>
              h(RadioGroup, {
                options: plans,
                modelValue: formRef.value.plan,
                "onUpdate:modelValue": (v: string | number) => (formRef.value.plan = v),
              }),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Bio", required: true, error: errors.bio }}
          children={{
            default: () =>
              h(Textarea, {
                placeholder: "Tell us about yourself...",
                rows: 3,
                modelValue: formRef.value.bio,
                "onUpdate:modelValue": (v: string) => (formRef.value.bio = v),
              }),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{ label: "Subscribe to newsletter", orientation: "horizontal", controlPosition: "start" }}
          children={{
            default: () =>
              h(Checkbox, {
                modelValue: formRef.value.newsletter,
                "onUpdate:modelValue": (v: boolean) => (formRef.value.newsletter = v),
              }),
          }}
        />

        <VueWrapper
          component={FormField}
          props={{
            label: "I accept the terms",
            orientation: "horizontal",
            controlPosition: "start",
            required: true,
            error: errors.terms,
          }}
          children={{
            default: () =>
              h(Checkbox, {
                modelValue: formRef.value.terms,
                "onUpdate:modelValue": (v: boolean) => (formRef.value.terms = v),
              }),
          }}
        />

        <VueWrapper component={Button} props={{ type: "submit" }} children="Submit" />
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled form with validation and error handling using Vue's reactive refs.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { FormField, Input, Select, RadioGroup, Textarea, Checkbox, Button } from "venomous-ui/vue";
import { Icon } from "@iconify/vue";
import { ref, reactive } from "vue";

const form = reactive({
  email: "",
  password: "",
  country: undefined,
  plan: undefined,
  bio: "",
  newsletter: false,
  terms: false,
});

const errors = ref<Record<string, string>>({});

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
];

const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro ($10/mo)" },
  { value: "enterprise", label: "Enterprise ($50/mo)" },
];

function handleSubmit() {
  const newErrors: Record<string, string> = {};

  if (!form.email) newErrors.email = "Email is required";
  if (!form.password) newErrors.password = "Password is required";
  if (!form.country) newErrors.country = "Please select a country";
  if (!form.plan) newErrors.plan = "Please select a plan";
  if (!form.terms) newErrors.terms = "You must accept the terms";

  errors.value = newErrors;

  if (Object.keys(newErrors).length === 0) {
    console.log(form);
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <FormField label="Email" required :error="errors.email">
      <Input v-model="form.email" type="email" placeholder="you@example.com" />
    </FormField>

    <FormField label="Password" required :error="errors.password" tooltip="At least 8 characters">
      <template #tooltipIcon>
        <Icon icon="mdi:information" style="color: inherit" />
      </template>
      <Input v-model="form.password" type="password" placeholder="Enter password" />
    </FormField>

    <FormField label="Country" required :error="errors.country">
      <Select v-model="form.country" :options="countries" placeholder="Select a country" />
    </FormField>

    <FormField label="Plan" required :error="errors.plan">
      <RadioGroup v-model="form.plan" :options="plans" />
    </FormField>

    <FormField label="Bio">
      <Textarea v-model="form.bio" placeholder="Tell us about yourself..." :rows="3" />
    </FormField>

    <FormField label="Subscribe to newsletter" orientation="horizontal" control-position="start">
      <Checkbox v-model="form.newsletter" />
    </FormField>

    <FormField label="I accept the terms" orientation="horizontal" control-position="start" required :error="errors.terms">
      <Checkbox v-model="form.terms" />
    </FormField>

    <Button type="submit">Submit</Button>
  </form>
</template>`,
      },
    },
  },
};
