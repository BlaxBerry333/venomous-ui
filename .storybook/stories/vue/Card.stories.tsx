import type { Meta, StoryObj } from "@storybook/react";
import { h } from "vue";

import type { TCardVariant } from "@/core/types";
import Button from "@/vue/components/Button/Button.vue";
import Card from "@/vue/components/Card/Card.vue";
import { VueWrapper } from "../../wrappers";
import { CARD_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/card.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Card",
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
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Card Component for Vue Storybook
 */
function CardWithChildren({
  variant = "elevated",
  clickable = false,
}: {
  variant?: TCardVariant;
  clickable?: boolean;
}) {
  return (
    <div style={{ width: 350 }}>
      <VueWrapper
        component={Card}
        props={{ variant, clickable, style: "padding: 16px" }}
        children={{
          default: () =>
            h("div", [
              h("h3", { style: { margin: "0 0 8px" } }, "Card Title"),
              h("p", { style: { margin: "0 0 16px", color: "#666" } }, "Card description goes here."),
              h("p", { style: { margin: "0 0 16px" } }, "This is the card body content."),
              h("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" } }, [
                h(Button, { variant: "ghost", size: "sm" }, { default: () => "Cancel" }),
                h(Button, { size: "sm" }, { default: () => "Submit" }),
              ]),
            ]),
        }}
      />
    </div>
  );
}

/**
 * Basic Usage - Default story shown in Canvas as Playground
 */
export const Default: Story = {
  name: "Basic Usage",
  render: (args) => <CardWithChildren variant={args.variant as TCardVariant} clickable={args.clickable as boolean} />,
  args: {
    variant: "elevated",
    clickable: false,
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/card.css";
import "venomous-ui/core/styles/components/button.css";
import { Card, Button } from "venomous-ui/vue";
</script>

<template>
  <Card style="width: 350px; padding: 16px">
    <h3>Card Title</h3>
    <p>Card description goes here.</p>
    <p>This is the card body content.</p>
    <div style="display: flex; gap: 8px; justify-content: flex-end">
      <Button variant="ghost" size="sm">Cancel</Button>
      <Button size="sm">Submit</Button>
    </div>
  </Card>
</template>`,
      },
    },
  },
};

export const Variants: Story = {
  name: "Variants",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <div style={{ width: 200 }}>
        <VueWrapper
          component={Card}
          props={{ variant: "elevated", style: "padding: 16px" }}
          children={{
            default: () =>
              h("div", [
                h("h3", { style: { margin: "0 0 8px" } }, "Elevated"),
                h("p", { style: { margin: 0 } }, "With shadow effect"),
              ]),
          }}
        />
      </div>
      <div style={{ width: 200 }}>
        <VueWrapper
          component={Card}
          props={{ variant: "outline", style: "padding: 16px" }}
          children={{
            default: () =>
              h("div", [
                h("h3", { style: { margin: "0 0 8px" } }, "Outline"),
                h("p", { style: { margin: 0 } }, "With border"),
              ]),
          }}
        />
      </div>
      <div style={{ width: 200 }}>
        <VueWrapper
          component={Card}
          props={{ variant: "filled", style: "padding: 16px" }}
          children={{
            default: () =>
              h("div", [
                h("h3", { style: { margin: "0 0 8px" } }, "Filled"),
                h("p", { style: { margin: 0 } }, "With background"),
              ]),
          }}
        />
      </div>
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
        language: "html",
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
      <div style={{ width: 200 }}>
        <VueWrapper
          component={Card}
          props={{ clickable: true, variant: "elevated", style: "padding: 16px" }}
          children={{
            default: () =>
              h("div", [
                h("h3", { style: { margin: "0 0 4px" } }, "Elevated"),
                h("p", { style: { margin: "0 0 8px", fontSize: "14px", color: "#666" } }, "Clickable card"),
                h("p", { style: { margin: 0 } }, "Hover to see the effect"),
              ]),
          }}
        />
      </div>
      <div style={{ width: 200 }}>
        <VueWrapper
          component={Card}
          props={{ clickable: true, variant: "outline", style: "padding: 16px" }}
          children={{
            default: () =>
              h("div", [
                h("h3", { style: { margin: "0 0 4px" } }, "Outline"),
                h("p", { style: { margin: "0 0 8px", fontSize: "14px", color: "#666" } }, "Clickable card"),
                h("p", { style: { margin: 0 } }, "Hover to see the effect"),
              ]),
          }}
        />
      </div>
      <div style={{ width: 200 }}>
        <VueWrapper
          component={Card}
          props={{ clickable: true, variant: "filled", style: "padding: 16px" }}
          children={{
            default: () =>
              h("div", [
                h("h3", { style: { margin: "0 0 4px" } }, "Filled"),
                h("p", { style: { margin: "0 0 8px", fontSize: "14px", color: "#666" } }, "Clickable card"),
                h("p", { style: { margin: 0 } }, "Hover to see the effect"),
              ]),
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Add `clickable` prop to enable hover and active states for interactive cards. Also adds `role="button"`, `tabIndex={0}`, and keyboard support (Enter/Space).',
      },
      source: {
        language: "html",
        code: `<Card clickable @click="handleClick">
  Clickable card
</Card>`,
      },
    },
  },
};

export const SimpleCard: Story = {
  name: "Simple Card",
  tags: ["!dev"],
  render: () => (
    <div style={{ width: 300 }}>
      <VueWrapper
        component={Card}
        props={{ style: "padding: 16px" }}
        children={{
          default: () => "A simple card with just content.",
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Cards can be used with just children for simple content.",
      },
      source: {
        language: "html",
        code: `<Card style="padding: 16px">
  A simple card with just content.
</Card>`,
      },
    },
  },
};
