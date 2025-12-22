import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "@/react/components/Button";
import { FormField } from "@/react/components/FormField";
import FormControl from "./FormControl";

const meta = {
  title: "React/Components/<FormControl>",
  component: FormControl,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Label text for the form field.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    row: {
      description: "Whether to display horizontally (label on the left).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    labelWidth: {
      description: "Label width when `row=true`. Accepts number (px) or string.",
      table: {
        type: { summary: "string | number" },
      },
      control: { type: "text" },
    },
    labelAlign: {
      description: "Label text alignment when `row=true`.",
      type: { name: "string" },
      table: {
        type: { summary: '"left" | "right"' },
        defaultValue: { summary: '"right"' },
      },
      control: { type: "radio" },
      options: ["left", "right"],
    },
    labelTooltip: {
      description: "Tooltip content to show next to label.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    required: {
      description: "Whether the field is required (shows * indicator).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    helperText: {
      description: "Helper text shown below the field.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    error: {
      description: "Whether the field has an error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    errorMessage: {
      description: "Error message (overrides helperText when error=true).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    size: {
      description: "Size of the form control.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    children: {
      description: "Form field element (Input, Select, Checkbox, etc.).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    className: {
      description: "Additional CSS class names.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    style: {
      description: "Custom styles, supports object or theme callback function.",
      table: {
        type: { summary: "React.CSSProperties | ((theme: Theme) => React.CSSProperties)" },
      },
      control: false,
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Form control component for form layout</Subtitle>

          <Markdown>
            {`
A container component that combines a form field with label, helper text, and error handling.
Supports both vertical and horizontal (row) layouts.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, FormControl, FormField } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <FormControl label="Username" required>
        <FormField.Text placeholder="Enter username" />
      </FormControl>

      {/* With helper text */}
      <FormControl label="Email" helperText="We'll never share your email">
        <FormField.Text type="email" />
      </FormControl>

      {/* With error */}
      <FormControl label="Password" error errorMessage="Password is required">
        <FormField.Password />
      </FormControl>

      {/* Horizontal layout */}
      <FormControl row label="Username" labelWidth={100}>
        <FormField.Text />
      </FormControl>

      {/* With tooltip */}
      <FormControl label="API Key" labelTooltip="Find this in your settings">
        <FormField.Text />
      </FormControl>
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{VerticalLayoutExample.name}</Heading>
          <Description of={VerticalLayoutExample} />
          <Canvas of={VerticalLayoutExample} />

          <Heading>{HorizontalLayoutExample.name}</Heading>
          <Description of={HorizontalLayoutExample} />
          <Canvas of={HorizontalLayoutExample} />

          <Heading>{WithTooltipExample.name}</Heading>
          <Description of={WithTooltipExample} />
          <Canvas of={WithTooltipExample} />

          <Heading>{ErrorStateExample.name}</Heading>
          <Description of={ErrorStateExample} />
          <Canvas of={ErrorStateExample} />

          <Heading>{FormExample.name}</Heading>
          <Description of={FormExample} />
          <Canvas of={FormExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormControl>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    label: "Username",
    required: false,
    row: false,
    labelWidth: 100,
    labelAlign: "right",
    labelTooltip: "",
    helperText: "Enter your username",
    error: false,
    errorMessage: "",
    size: "medium",
    children: null,
  },
  render: function RenderStory(args) {
    const { children: _, ...restArgs } = args;
    return (
      <div style={{ width: 300 }}>
        <FormControl {...restArgs}>
          <FormField.Text placeholder="Enter username" />
        </FormControl>
      </div>
    );
  },
};

// ============================
// Vertical Layout Example
// ============================
export const VerticalLayoutExample: Story = {
  name: "Vertical Layout",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Default vertical layout with label on top.",
      },
      source: {
        code: `
<FormControl label="Username" required helperText="Choose a unique username">
  <FormField.Text placeholder="Enter username" />
</FormControl>

<FormControl label="Email">
  <FormField.Text type="email" placeholder="Enter email" />
</FormControl>

<FormControl label="Bio">
  <FormField.Textarea placeholder="Tell us about yourself" />
</FormControl>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ width: 300, display: "flex", flexDirection: "column", gap: 16 }}>
        <FormControl label="Username" required helperText="Choose a unique username">
          <FormField.Text placeholder="Enter username" />
        </FormControl>

        <FormControl label="Email">
          <FormField.Text type="email" placeholder="Enter email" />
        </FormControl>

        <FormControl label="Bio">
          <FormField.Textarea placeholder="Tell us about yourself" />
        </FormControl>
      </div>
    );
  },
};

// ============================
// Horizontal Layout Example
// ============================
export const HorizontalLayoutExample: Story = {
  name: "Horizontal Layout",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Horizontal layout with `row` prop. Use `labelWidth` to control label column width.",
      },
      source: {
        code: `
<FormControl row label="Username" labelWidth={80} required>
  <FormField.Text placeholder="Enter username" />
</FormControl>

<FormControl row label="Password" labelWidth={80} required>
  <FormField.Password placeholder="Enter password" />
</FormControl>

<FormControl row label="Remember" labelWidth={80}>
  <FormField.Checkbox label="Keep me logged in" />
</FormControl>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ width: 400, display: "flex", flexDirection: "column", gap: 16 }}>
        <FormControl row label="Username" labelWidth={80} required>
          <FormField.Text placeholder="Enter username" />
        </FormControl>

        <FormControl row label="Password" labelWidth={80} required>
          <FormField.Password placeholder="Enter password" />
        </FormControl>

        <FormControl row label="Remember" labelWidth={80}>
          <FormField.Checkbox label="Keep me logged in" />
        </FormControl>
      </div>
    );
  },
};

// ============================
// With Tooltip Example
// ============================
export const WithTooltipExample: Story = {
  name: "With Tooltip",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Add `labelTooltip` to display helpful information next to the label.",
      },
      source: {
        code: `
<FormControl
  label="API Key"
  labelTooltip="You can find your API key in Settings > Developer"
  required
>
  <FormField.Text placeholder="Enter API key" />
</FormControl>

<FormControl
  row
  label="Secret"
  labelWidth={80}
  labelTooltip="Keep this secret and never share it"
>
  <FormField.Password placeholder="Enter secret" />
</FormControl>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ width: 400, display: "flex", flexDirection: "column", gap: 16 }}>
        <FormControl label="API Key" labelTooltip="You can find your API key in Settings > Developer" required>
          <FormField.Text placeholder="Enter API key" />
        </FormControl>

        <FormControl row label="Secret" labelWidth={80} labelTooltip="Keep this secret and never share it">
          <FormField.Password placeholder="Enter secret" />
        </FormControl>
      </div>
    );
  },
};

// ============================
// Error State Example
// ============================
export const ErrorStateExample: Story = {
  name: "Error State",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `error` and `errorMessage` to display validation errors. Error message overrides helper text.",
      },
      source: {
        code: `
<FormControl
  label="Email"
  required
  helperText="We'll send a verification email"
  error
  errorMessage="Please enter a valid email address"
>
  <FormField.Text type="email" error placeholder="Enter email" />
</FormControl>

<FormControl
  label="Password"
  required
  error
  errorMessage="Password must be at least 8 characters"
>
  <FormField.Password error placeholder="Enter password" />
</FormControl>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ width: 300, display: "flex", flexDirection: "column", gap: 16 }}>
        <FormControl
          label="Email"
          required
          helperText="We'll send a verification email"
          error
          errorMessage="Please enter a valid email address"
        >
          <FormField.Text type="email" error placeholder="Enter email" />
        </FormControl>

        <FormControl label="Password" required error errorMessage="Password must be at least 8 characters">
          <FormField.Password error placeholder="Enter password" />
        </FormControl>
      </div>
    );
  },
};

// ============================
// Form Example
// ============================
export const FormExample: Story = {
  name: "Form Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Complete form example with native HTML form submission.",
      },
      source: {
        code: `
<form
  onSubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
  }}
>
  <FormControl label="Username" required>
    <FormField.Text name="username" placeholder="Enter username" />
  </FormControl>

  <FormControl label="Email" required helperText="We'll never share your email">
    <FormField.Text name="email" type="email" placeholder="Enter email" />
  </FormControl>

  <FormControl label="Password" required>
    <FormField.Password name="password" placeholder="Enter password" />
  </FormControl>

  <FormControl label="Gender">
    <FormField.Radio
      name="gender"
      options={[
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ]}
    />
  </FormControl>

  <FormControl label="Country">
    <FormField.Select
      placeholder="Select country"
      options={[
        { value: "us", label: "United States" },
        { value: "cn", label: "China" },
        { value: "jp", label: "Japan" },
      ]}
    />
  </FormControl>

  <FormControl>
    <FormField.Checkbox name="agree" label="I agree to the terms and conditions" />
  </FormControl>

  <Button type="submit">Submit</Button>
</form>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      console.log("Form submitted:", Object.fromEntries(formData));
      alert("Form submitted! Check console for data.");
    };

    return (
      <form onSubmit={handleSubmit} style={{ width: 350, display: "flex", flexDirection: "column", gap: 16 }}>
        <FormControl label="Username" required>
          <FormField.Text name="username" placeholder="Enter username" />
        </FormControl>

        <FormControl label="Email" required helperText="We'll never share your email">
          <FormField.Text name="email" type="email" placeholder="Enter email" />
        </FormControl>

        <FormControl label="Password" required>
          <FormField.Password name="password" placeholder="Enter password" />
        </FormControl>

        <FormControl label="Gender">
          <FormField.Radio
            name="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
        </FormControl>

        <FormControl label="Country">
          <FormField.Select
            placeholder="Select country"
            options={[
              { value: "us", label: "United States" },
              { value: "cn", label: "China" },
              { value: "jp", label: "Japan" },
            ]}
          />
        </FormControl>

        <FormControl>
          <FormField.Checkbox name="agree" label="I agree to the terms and conditions" />
        </FormControl>

        <div style={{ marginTop: 8 }}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  },
};
