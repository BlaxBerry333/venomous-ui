import type { Meta, StoryObj } from "@storybook/react";
import { h } from "vue";

import type { TTooltipPlacement } from "@/core/types";
import Button from "@/vue/components/Button/Button.vue";
import Tooltip from "@/vue/components/Tooltip/Tooltip.vue";
import { VueWrapper } from "../../wrappers";
import { TOOLTIP_PLACEMENT_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/tooltip.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Tooltip",
  parameters: {
    docs: {
      description: {
        component: `Tooltip displays helpful text when hovering over or focusing on an element.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
    },
  },
  argTypes: {
    content: {
      description: "Tooltip text content (optional when using #content slot)",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    placement: {
      description: "Tooltip placement relative to trigger",
      control: "select",
      options: TOOLTIP_PLACEMENT_OPTIONS,
      table: {
        type: { summary: TOOLTIP_PLACEMENT_OPTIONS.map((p) => `"${p}"`).join(" | ") },
        defaultValue: { summary: '"top"' },
      },
    },
    delay: {
      description: "Delay before showing tooltip (ms)",
      control: { type: "number", min: 0, max: 1000, step: 50 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    disabled: {
      description: "Whether tooltip is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    "#default": {
      description: "Slot for trigger element",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
    "#content": {
      description: "Slot for custom tooltip content (alternative to content prop)",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Demo component that respects args
 */
function TooltipDemo(props: { content?: string; placement?: TTooltipPlacement; delay?: number; disabled?: boolean }) {
  const { content = "This is a tooltip", placement = "top", delay = 200, disabled = false } = props;

  return (
    <div style={{ padding: "60px", display: "flex", justifyContent: "center" }}>
      <VueWrapper
        component={Tooltip}
        props={{ content, placement, delay, disabled }}
        children={{
          default: () => h(Button, {}, { default: () => "Hover me" }),
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
  args: {
    content: "This is a tooltip",
    placement: "top",
    delay: 200,
    disabled: false,
  },
  render: (args) => <TooltipDemo {...args} />,
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/tooltip.css";
import "venomous-ui/core/styles/components/button.css";
import { Tooltip, Button } from "venomous-ui/vue";
</script>

<template>
  <Tooltip content="This is a tooltip">
    <Button>Hover me</Button>
  </Tooltip>
</template>`,
      },
    },
  },
};

/**
 * Placements Demo
 */
function PlacementsDemo() {
  const placements: TTooltipPlacement[] = ["top", "bottom", "left", "right"];

  return (
    <div style={{ padding: "80px", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
      {placements.map((placement) => (
        <VueWrapper
          key={placement}
          component={Tooltip}
          props={{ content: `Tooltip on ${placement}`, placement }}
          children={{
            default: () => h(Button, {}, { default: () => placement.charAt(0).toUpperCase() + placement.slice(1) }),
          }}
        />
      ))}
    </div>
  );
}

export const Placements: Story = {
  name: "Placements",
  tags: ["!dev"],
  render: () => <PlacementsDemo />,
  parameters: {
    docs: {
      description: {
        story: `Tooltip supports four placements:
- **top**: Appears above the trigger (default)
- **bottom**: Appears below the trigger
- **left**: Appears to the left of the trigger
- **right**: Appears to the right of the trigger`,
      },
      source: {
        language: "html",
        code: `<Tooltip content="Tooltip text" placement="bottom">
  <Button>Hover me</Button>
</Tooltip>`,
      },
    },
  },
};

/**
 * With Delay Demo
 */
export const WithDelay: Story = {
  name: "With Delay",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "60px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <VueWrapper
        component={Tooltip}
        props={{ content: "No delay (default)", delay: 0 }}
        children={{
          default: () => h(Button, {}, { default: () => "No Delay" }),
        }}
      />
      <VueWrapper
        component={Tooltip}
        props={{ content: "300ms delay", delay: 300 }}
        children={{
          default: () => h(Button, {}, { default: () => "300ms Delay" }),
        }}
      />
      <VueWrapper
        component={Tooltip}
        props={{ content: "500ms delay", delay: 500 }}
        children={{
          default: () => h(Button, {}, { default: () => "500ms Delay" }),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use the `delay` prop to add a delay before the tooltip appears. This prevents tooltips from appearing during quick mouse movements.",
      },
      source: {
        language: "html",
        code: `<Tooltip content="Appears after 300ms" :delay="300">
  <Button>Hover me</Button>
</Tooltip>`,
      },
    },
  },
};

/**
 * Disabled State Demo
 */
export const Disabled: Story = {
  name: "Disabled",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "60px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <VueWrapper
        component={Tooltip}
        props={{ content: "I won't appear", disabled: true }}
        children={{
          default: () => h(Button, {}, { default: () => "Disabled Tooltip" }),
        }}
      />
      <VueWrapper
        component={Tooltip}
        props={{ content: "I will appear" }}
        children={{
          default: () => h(Button, {}, { default: () => "Enabled Tooltip" }),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Set `disabled` to prevent the tooltip from appearing.",
      },
      source: {
        language: "html",
        code: `<Tooltip content="Won't appear" disabled>
  <Button>No tooltip</Button>
</Tooltip>`,
      },
    },
  },
};

/**
 * On Different Elements
 */
export const OnDifferentElements: Story = {
  name: "On Different Elements",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "60px", display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
      <VueWrapper
        component={Tooltip}
        props={{ content: "Button tooltip" }}
        children={{
          default: () => h(Button, {}, { default: () => "Button" }),
        }}
      />
      <VueWrapper
        component={Tooltip}
        props={{ content: "Link tooltip" }}
        children={{
          default: () => h("a", { href: "#", style: { color: "var(--VENOMOUSUI-text-link)" } }, "Link"),
        }}
      />
      <VueWrapper
        component={Tooltip}
        props={{ content: "Icon tooltip" }}
        children={{
          default: () => h("span", { style: { cursor: "pointer", fontSize: "24px" } }, "⭐"),
        }}
      />
      <VueWrapper
        component={Tooltip}
        props={{ content: "Text tooltip" }}
        children={{
          default: () => h("span", { style: { textDecoration: "underline dotted", cursor: "help" } }, "hover text"),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip can wrap any element - buttons, links, icons, or text.",
      },
      source: {
        language: "html",
        code: `<Tooltip content="Icon tooltip">
  <span style="cursor: pointer">⭐</span>
</Tooltip>`,
      },
    },
  },
};

/**
 * Keyboard Accessible
 */
export const KeyboardAccessible: Story = {
  name: "Keyboard Accessible",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "60px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <VueWrapper
        component={Tooltip}
        props={{ content: "Focus me with Tab key" }}
        children={{
          default: () => h(Button, {}, { default: () => "Tab to focus" }),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tooltips are keyboard accessible. They appear when the trigger element receives focus (via Tab key) and hide on blur.",
      },
      source: {
        language: "html",
        code: `<!-- Tooltip appears on focus for keyboard users -->
<Tooltip content="Accessible tooltip">
  <Button>Tab to focus</Button>
</Tooltip>`,
      },
    },
  },
};

/**
 * Custom Content Slot
 */
export const CustomContentSlot: Story = {
  name: "Custom Content Slot",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "60px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <VueWrapper
        component={Tooltip}
        props={{ placement: "top" }}
        children={{
          default: () => h(Button, {}, { default: () => "Hover for rich content" }),
          content: () =>
            h("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, [
              h("span", { style: { fontSize: "16px" } }, "✨"),
              h("span", {}, "Rich tooltip content"),
            ]),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use the `#content` slot for custom tooltip content instead of the `content` prop. This allows rich content like icons, formatted text, or complex layouts.",
      },
      source: {
        language: "html",
        code: `<Tooltip placement="top">
  <Button>Hover for rich content</Button>
  <template #content>
    <div style="display: flex; align-items: center; gap: 8px">
      <span>✨</span>
      <span>Rich tooltip content</span>
    </div>
  </template>
</Tooltip>`,
      },
    },
  },
};
