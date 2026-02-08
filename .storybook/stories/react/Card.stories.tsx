import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import { Card } from "@/react/components/Card";
import { CARD_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/card.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Card> = {
  title: "React Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `Card is a styled container with variant styles and optional clickable behavior.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual style variant of the card",
      control: "select",
      options: CARD_VARIANT_OPTIONS,
      table: {
        type: { summary: CARD_VARIANT_OPTIONS.map((v) => `"${v}"`).join(" | ") },
        defaultValue: { summary: '"elevated"' },
      },
    },
    clickable: {
      description: 'Enable hover effects for interactive cards. Adds role="button" and keyboard support.',
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      description: "Additional CSS class names",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Basic Usage - Default story shown in Canvas as Playground
 */
export const Default: Story = {
  name: "Basic Usage",
  render: (args) => (
    <Card {...args} style={{ width: 350, padding: 16 }}>
      <h3 style={{ margin: "0 0 8px" }}>Card Title</h3>
      <p style={{ margin: "0 0 16px", color: "#666" }}>Card description goes here.</p>
      <p style={{ margin: "0 0 16px" }}>This is the card body content. You can put any content here.</p>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Submit</Button>
      </div>
    </Card>
  ),
  args: {
    variant: "elevated",
    clickable: false,
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/card.css";
import "venomous-ui/core/styles/components/button.css";
import { Card, Button } from "venomous-ui/react";

export default function Demo() {
  return (
    <Card style={{ width: 350, padding: 16 }}>
      <h3>Card Title</h3>
      <p>Card description goes here.</p>
      <p>This is the card body content.</p>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Submit</Button>
      </div>
    </Card>
  );
}`,
      },
    },
  },
};

export const Variants: Story = {
  name: "Variants",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card variant="elevated" style={{ width: 200, padding: 16 }}>
        <h3 style={{ margin: "0 0 8px" }}>Elevated</h3>
        <p style={{ margin: 0 }}>With shadow effect</p>
      </Card>
      <Card variant="outline" style={{ width: 200, padding: 16 }}>
        <h3 style={{ margin: "0 0 8px" }}>Outline</h3>
        <p style={{ margin: 0 }}>With border</p>
      </Card>
      <Card variant="filled" style={{ width: 200, padding: 16 }}>
        <h3 style={{ margin: "0 0 8px" }}>Filled</h3>
        <p style={{ margin: 0 }}>With background</p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Card supports three visual variants:
- **Elevated**: With shadow effect (default)
- **Outline**: With border
- **Filled**: With secondary background color`,
      },
      source: {
        code: `<Card variant="elevated">Elevated</Card>
<Card variant="outline">Outline</Card>
<Card variant="filled">Filled</Card>`,
      },
    },
  },
};

export const Clickable: Story = {
  name: "Clickable",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card clickable variant="elevated" style={{ width: 200, padding: 16 }}>
        <h3 style={{ margin: "0 0 4px" }}>Elevated</h3>
        <p style={{ margin: "0 0 8px", fontSize: 14, color: "#666" }}>Clickable card</p>
        <p style={{ margin: 0 }}>Hover to see the effect</p>
      </Card>
      <Card clickable variant="outline" style={{ width: 200, padding: 16 }}>
        <h3 style={{ margin: "0 0 4px" }}>Outline</h3>
        <p style={{ margin: "0 0 8px", fontSize: 14, color: "#666" }}>Clickable card</p>
        <p style={{ margin: 0 }}>Hover to see the effect</p>
      </Card>
      <Card clickable variant="filled" style={{ width: 200, padding: 16 }}>
        <h3 style={{ margin: "0 0 4px" }}>Filled</h3>
        <p style={{ margin: "0 0 8px", fontSize: 14, color: "#666" }}>Clickable card</p>
        <p style={{ margin: 0 }}>Hover to see the effect</p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Add `clickable` prop to enable hover and active states for interactive cards. Also adds `role="button"`, `tabIndex={0}`, and keyboard support (Enter/Space).',
      },
      source: {
        code: `<Card clickable onClick={() => console.log("clicked")}>
  Clickable card
</Card>`,
      },
    },
  },
};

export const SimpleCard: Story = {
  name: "Simple Card",
  tags: ["!dev"],
  render: () => <Card style={{ width: 300, padding: 16 }}>A simple card with just content.</Card>,
  parameters: {
    docs: {
      description: {
        story: "Cards can be used with just children for simple content.",
      },
      source: {
        code: `<Card style={{ padding: 16 }}>
  A simple card with just content.
</Card>`,
      },
    },
  },
};
