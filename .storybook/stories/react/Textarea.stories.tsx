import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@/react/components/Textarea";
import { FORM_SIZE_OPTIONS, TEXTAREA_RESIZE_OPTIONS } from "../constants";

import "@/core/styles/components/textarea.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Textarea> = {
  title: "React Components/Textarea",
  component: Textarea,
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
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
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
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  name: "Basic Usage",
  args: {
    placeholder: "Enter description...",
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
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/textarea.css";
import { Textarea } from "venomous-ui/react/components";

export default function Demo() {
  return <Textarea placeholder="Enter description..." />;
}`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textarea comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `<Textarea size="sm" placeholder="Small" />
<Textarea size="md" placeholder="Medium" />
<Textarea size="lg" placeholder="Large" />`,
      },
    },
  },
};

export const Rows: Story = {
  name: "Rows",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
      <Textarea rows={2} placeholder="2 rows" />
      <Textarea rows={5} placeholder="5 rows" />
      <Textarea rows={8} placeholder="8 rows" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Control the initial height with the `rows` prop.",
      },
      source: {
        code: `<Textarea rows={2} placeholder="2 rows" />
<Textarea rows={5} placeholder="5 rows" />
<Textarea rows={8} placeholder="8 rows" />`,
      },
    },
  },
};

export const ResizeBehavior: Story = {
  name: "Resize Behavior",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
      <Textarea resize="none" placeholder="No resize" />
      <Textarea resize="vertical" placeholder="Vertical resize (default)" />
      <Textarea resize="horizontal" placeholder="Horizontal resize" />
      <Textarea resize="both" placeholder="Both directions" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Control the resize behavior with the `resize` prop.",
      },
      source: {
        code: `<Textarea resize="none" placeholder="No resize" />
<Textarea resize="vertical" placeholder="Vertical resize (default)" />
<Textarea resize="horizontal" placeholder="Horizontal resize" />
<Textarea resize="both" placeholder="Both directions" />`,
      },
    },
  },
};

export const AutoResize: Story = {
  name: "Auto Resize",
  tags: ["!dev"],
  args: {
    autoResize: true,
    placeholder: "Type to see auto-resize in action...",
  },
  parameters: {
    docs: {
      description: {
        story: "Enable `autoResize` to automatically adjust height based on content.",
      },
      source: {
        code: `<Textarea autoResize placeholder="Type to see auto-resize in action..." />`,
      },
    },
  },
};

export const States: Story = {
  name: "States",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
      <Textarea placeholder="Normal" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Read-only" readOnly value="Read-only content" />
      <Textarea placeholder="Error" error />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textarea supports disabled, read-only, and error states.",
      },
      source: {
        code: `<Textarea placeholder="Normal" />
<Textarea placeholder="Disabled" disabled />
<Textarea placeholder="Read-only" readOnly value="Read-only content" />
<Textarea placeholder="Error" error />`,
      },
    },
  },
};
