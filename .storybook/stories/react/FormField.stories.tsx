import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "@/react/components/Button";
import { Checkbox } from "@/react/components/Checkbox";
import { FormField } from "@/react/components/FormField";
import { Input } from "@/react/components/Input";
import { RadioGroup } from "@/react/components/RadioGroup";
import { Select } from "@/react/components/Select";
import { Switch } from "@/react/components/Switch";
import { Textarea } from "@/react/components/Textarea";
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

const meta: Meta<typeof FormField> = {
  title: "React Components/FormField",
  component: FormField,
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
    children: {
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
    tooltipIcon: {
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
    className: {
      control: false,
      table: { type: { summary: "string" } },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  name: "Basic Usage",
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
  render: function Render(args) {
    const [value, setValue] = useState("");
    // Auto-show tooltipIcon when tooltip has value (color: inherit for error state)
    const tooltipIcon = args.tooltip ? <span style={{ cursor: "help", color: "inherit" }}>ⓘ</span> : undefined;
    return (
      <FormField {...args} tooltipIcon={tooltipIcon}>
        <Input type="email" placeholder="Enter your email" value={value} onChange={(e) => setValue(e.target.value)} />
      </FormField>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/form-field.css";
import "venomous-ui/core/styles/components/input.css";
import { useState } from "react";
import { FormField, Input } from "venomous-ui/react/components";

export default function Demo() {
  const [value, setValue] = useState("");
  return (
    <FormField label="Email">
      <Input
        type="email"
        placeholder="Enter your email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormField>
  );
}`,
      },
    },
  },
};

export const Required: Story = {
  name: "Required Field",
  tags: ["!dev"],
  render: () => (
    <FormField label="Username" required>
      <Input placeholder="Enter username" />
    </FormField>
  ),
  parameters: {
    docs: {
      description: {
        story: "Add `required` prop to display an asterisk next to the label.",
      },
      source: {
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
    <FormField label="Email" error="Please enter a valid email address">
      <Input type="email" placeholder="Enter your email" />
    </FormField>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Pass an error message to display validation errors. The control will automatically receive `error` and `aria-invalid` props.",
      },
      source: {
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
    <FormField
      label="Password"
      tooltip="Password must be at least 8 characters"
      tooltipIcon={<span style={{ cursor: "help", color: "inherit" }}>ⓘ</span>}
    >
      <Input type="password" placeholder="Enter password" />
    </FormField>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Add `tooltip` and `tooltipIcon` to provide additional help information. Use `color: inherit` on the icon to inherit error state color.",
      },
      source: {
        code: `<FormField
  label="Password"
  tooltip="Password must be at least 8 characters"
  tooltipIcon={<Icon icon="mdi:information" style={{ color: "inherit" }} />}
>
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
      <FormField label="Small label" size="sm">
        <Input size="sm" placeholder="Small input" />
      </FormField>
      <FormField label="Medium label" size="md">
        <Input size="md" placeholder="Medium input" />
      </FormField>
      <FormField label="Large label" size="lg">
        <Input size="lg" placeholder="Large input" />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "FormField comes in three sizes that affect the label and error text.",
      },
      source: {
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
      <FormField label="Remember me" orientation="horizontal" controlPosition="start">
        <Checkbox defaultChecked />
      </FormField>
      <FormField label="Enable notifications" orientation="horizontal" controlPosition="start">
        <Switch defaultChecked />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `orientation="horizontal"` with `controlPosition` to place checkboxes or switches inline with labels.',
      },
      source: {
        code: `<FormField label="Remember me" orientation="horizontal" controlPosition="start">
  <Checkbox />
</FormField>
<FormField label="Enable notifications" orientation="horizontal" controlPosition="start">
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
      <FormField label="Control at start" orientation="horizontal" controlPosition="start">
        <Checkbox defaultChecked />
      </FormField>
      <FormField label="Control at end" orientation="horizontal" controlPosition="end">
        <Checkbox defaultChecked />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'In horizontal layout, use `controlPosition="start"` or `controlPosition="end"` to position the control.',
      },
      source: {
        code: `<FormField label="Control at start" orientation="horizontal" controlPosition="start">
  <Checkbox />
</FormField>
<FormField label="Control at end" orientation="horizontal" controlPosition="end">
  <Checkbox />
</FormField>`,
      },
    },
  },
};

export const UncontrolledForm: Story = {
  name: "Complete Form (Uncontrolled)",
  tags: ["!dev"],
  render: function Render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }}
      >
        <FormField label="Email" required>
          <Input name="email" type="email" placeholder="you@example.com" />
        </FormField>

        <FormField
          label="Password"
          required
          tooltip="At least 8 characters"
          tooltipIcon={<span style={{ cursor: "help", color: "inherit" }}>ⓘ</span>}
        >
          <Input name="password" type="password" placeholder="Enter password" />
        </FormField>

        <FormField label="Country" required>
          <Select
            name="country"
            options={[
              { value: "us", label: "United States" },
              { value: "uk", label: "United Kingdom" },
              { value: "ca", label: "Canada" },
            ]}
            placeholder="Select a country"
          />
        </FormField>

        <FormField label="Plan" required>
          <RadioGroup
            name="plan"
            options={[
              { value: "free", label: "Free" },
              { value: "pro", label: "Pro ($10/mo)" },
              { value: "enterprise", label: "Enterprise ($50/mo)" },
            ]}
          />
        </FormField>

        <FormField label="Bio">
          <Textarea name="bio" placeholder="Tell us about yourself..." rows={3} />
        </FormField>

        <FormField label="Subscribe to newsletter" orientation="horizontal" controlPosition="start">
          <Checkbox name="newsletter" />
        </FormField>

        <FormField label="I accept the terms" orientation="horizontal" controlPosition="start" required>
          <Checkbox name="terms" />
        </FormField>

        <Button type="submit">Submit</Button>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uncontrolled form using native form submission. Each control has a `name` attribute for FormData collection.",
      },
      source: {
        code: `function UncontrolledForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Email" required>
        <Input name="email" type="email" placeholder="you@example.com" />
      </FormField>

      <FormField label="Password" required tooltip="At least 8 characters" tooltipIcon={<Icon icon="mdi:information" style={{ color: "inherit" }} />}>
        <Input name="password" type="password" placeholder="Enter password" />
      </FormField>

      <FormField label="Country" required>
        <Select name="country" options={countries} placeholder="Select a country" />
      </FormField>

      <FormField label="Plan" required>
        <RadioGroup name="plan" options={plans} />
      </FormField>

      <FormField label="Bio">
        <Textarea name="bio" placeholder="Tell us about yourself..." rows={3} />
      </FormField>

      <FormField label="Subscribe to newsletter" orientation="horizontal" controlPosition="start">
        <Checkbox name="newsletter" />
      </FormField>

      <FormField label="I accept the terms" orientation="horizontal" controlPosition="start" required>
        <Checkbox name="terms" />
      </FormField>

      <Button type="submit">Submit</Button>
    </form>
  );
}`,
      },
    },
  },
};

export const ControlledForm: Story = {
  name: "Complete Form (Controlled)",
  tags: ["!dev"],
  render: function Render() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      country: "" as string | number | undefined,
      plan: "" as string | number | undefined,
      bio: "",
      newsletter: false,
      terms: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};

      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password && formData.password.length < 8)
        newErrors.password = "Password must be at least 8 characters";
      if (!formData.country) newErrors.country = "Please select a country";
      if (!formData.plan) newErrors.plan = "Please select a plan";
      if (!formData.bio) newErrors.bio = "Bio is required";
      if (!formData.terms) newErrors.terms = "You must accept the terms";

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        alert(JSON.stringify(formData, null, 2));
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }}
      >
        <FormField label="Email" required error={errors.email}>
          <Input
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </FormField>

        <FormField
          label="Password"
          required
          error={errors.password}
          tooltip="At least 8 characters"
          tooltipIcon={<span style={{ cursor: "help", color: "inherit" }}>ⓘ</span>}
        >
          <Input
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </FormField>

        <FormField label="Country" required error={errors.country}>
          <Select
            options={[
              { value: "us", label: "United States" },
              { value: "uk", label: "United Kingdom" },
              { value: "ca", label: "Canada" },
            ]}
            value={formData.country}
            onChange={(v) => setFormData({ ...formData, country: v })}
            placeholder="Select a country"
          />
        </FormField>

        <FormField label="Plan" required error={errors.plan}>
          <RadioGroup
            options={[
              { value: "free", label: "Free" },
              { value: "pro", label: "Pro ($10/mo)" },
              { value: "enterprise", label: "Enterprise ($50/mo)" },
            ]}
            value={formData.plan}
            onChange={(v) => setFormData({ ...formData, plan: v })}
          />
        </FormField>

        <FormField label="Bio" required error={errors.bio}>
          <Textarea
            placeholder="Tell us about yourself..."
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            rows={3}
          />
        </FormField>

        <FormField label="Subscribe to newsletter" orientation="horizontal" controlPosition="start">
          <Checkbox
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          />
        </FormField>

        <FormField
          label="I accept the terms"
          orientation="horizontal"
          controlPosition="start"
          required
          error={errors.terms}
        >
          <Checkbox checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} />
        </FormField>

        <Button type="submit">Submit</Button>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled form with React state for validation and error handling.",
      },
      source: {
        code: `function ControlledForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: undefined,
    plan: undefined,
    bio: "",
    newsletter: false,
    terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.plan) newErrors.plan = "Please select a plan";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Email" required error={errors.email}>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormField>

      <FormField label="Password" required error={errors.password}>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </FormField>

      <FormField label="Country" required error={errors.country}>
        <Select
          options={countries}
          value={formData.country}
          onChange={(v) => setFormData({ ...formData, country: v })}
        />
      </FormField>

      <FormField label="Plan" required error={errors.plan}>
        <RadioGroup
          options={plans}
          value={formData.plan}
          onChange={(v) => setFormData({ ...formData, plan: v })}
        />
      </FormField>

      <FormField label="Bio">
        <Textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </FormField>

      <FormField label="Newsletter" orientation="horizontal" controlPosition="start">
        <Checkbox
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
        />
      </FormField>

      <FormField label="Terms" orientation="horizontal" controlPosition="start" required error={errors.terms}>
        <Checkbox
          checked={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
        />
      </FormField>

      <Button type="submit">Submit</Button>
    </form>
  );
}`,
      },
    },
  },
};
