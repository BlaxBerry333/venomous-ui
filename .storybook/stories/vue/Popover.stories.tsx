import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { h } from "vue";

import type { TPopoverPlacement, TPopoverTrigger } from "@/core/types";
import Button from "@/vue/components/Button/Button.vue";
import Popover from "@/vue/components/Popover/Popover.vue";
import { VueWrapper } from "../../wrappers";
import { POPOVER_PLACEMENT_OPTIONS, POPOVER_TRIGGER_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/popover.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Popover",
  parameters: {
    docs: {
      description: {
        component: `Popover displays rich content in a floating panel anchored to a trigger element.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
    },
  },
  argTypes: {
    placement: {
      description: "Popover placement relative to trigger",
      control: "select",
      options: POPOVER_PLACEMENT_OPTIONS,
      table: {
        type: { summary: POPOVER_PLACEMENT_OPTIONS.map((p) => `"${p}"`).join(" | ") },
        defaultValue: { summary: '"bottom"' },
      },
    },
    trigger: {
      description: "How to trigger the popover",
      control: "select",
      options: POPOVER_TRIGGER_OPTIONS,
      table: {
        type: { summary: POPOVER_TRIGGER_OPTIONS.map((t) => `"${t}"`).join(" | ") },
        defaultValue: { summary: '"click"' },
      },
    },
    closeOnClickOutside: {
      description: "Close when clicking outside the popover",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnEsc: {
      description: "Close when pressing Escape key",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    disabled: {
      description: "Whether popover is disabled",
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
      description: "Slot for popover content",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
    "@update:open": {
      description: "Event emitted when open state changes",
      control: false,
      table: {
        type: { summary: "event" },
      },
    },
    open: {
      description: "Controlled open state (v-model:open). Do not set this for uncontrolled mode.",
      control: false,
      table: {
        type: { summary: "boolean" },
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
function PopoverDemo(props: {
  content?: string;
  placement?: TPopoverPlacement;
  trigger?: TPopoverTrigger;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  disabled?: boolean;
}) {
  const {
    content = "This is a popover with some content.",
    placement = "bottom",
    trigger = "click",
    closeOnClickOutside = true,
    closeOnEsc = true,
    disabled = false,
  } = props;

  return (
    <div style={{ padding: "100px", display: "flex", justifyContent: "center" }}>
      <VueWrapper
        component={Popover}
        props={{ placement, trigger, closeOnClickOutside, closeOnEsc, disabled }}
        children={{
          default: () => h(Button, {}, { default: () => (trigger === "click" ? "Click me" : "Hover me") }),
          content: () => content,
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
    content: "This is a popover with some content.",
    placement: "bottom",
    trigger: "click",
    closeOnClickOutside: true,
    closeOnEsc: true,
    disabled: false,
  },
  render: (args) => <PopoverDemo {...args} />,
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/popover.css";
import "venomous-ui/core/styles/components/button.css";
import { Popover, Button } from "venomous-ui/vue";
</script>

<template>
  <Popover>
    <Button>Click me</Button>
    <template #content>
      This is a popover with some content.
    </template>
  </Popover>
</template>`,
      },
    },
  },
};

/**
 * Rich Content Demo
 */
export const RichContent: Story = {
  name: "Rich Content",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "120px", display: "flex", justifyContent: "center" }}>
      <VueWrapper
        component={Popover}
        children={{
          default: () => h(Button, {}, { default: () => "Show Profile Card" }),
          content: () =>
            h("div", {}, [
              h("h4", { style: { margin: "0 0 8px" } }, "User Profile"),
              h(
                "p",
                { style: { margin: "0 0 8px", color: "var(--VENOMOUSUI-text-secondary)" } },
                "View and edit your profile settings.",
              ),
              h(Button, { size: "sm" }, { default: () => "View Profile" }),
            ]),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Popover content slot can contain any Vue template, allowing for rich interactive content.",
      },
      source: {
        language: "html",
        code: `<Popover>
  <Button>Show Profile Card</Button>
  <template #content>
    <h4>User Profile</h4>
    <p>View and edit your profile settings.</p>
    <Button size="sm">View Profile</Button>
  </template>
</Popover>`,
      },
    },
  },
};

/**
 * Placements Demo
 */
function PlacementsDemo() {
  const placements: TPopoverPlacement[] = ["top", "bottom", "left", "right"];

  return (
    <div style={{ padding: "120px", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
      {placements.map((placement) => (
        <VueWrapper
          key={placement}
          component={Popover}
          props={{ placement }}
          children={{
            default: () => h(Button, {}, { default: () => placement.charAt(0).toUpperCase() + placement.slice(1) }),
            content: () => `Popover on ${placement}`,
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
        story: `Popover supports four placements:
- **top**: Appears above the trigger
- **bottom**: Appears below the trigger (default)
- **left**: Appears to the left of the trigger
- **right**: Appears to the right of the trigger`,
      },
      source: {
        language: "html",
        code: `<Popover placement="top">
  <Button>Click me</Button>
  <template #content>Content</template>
</Popover>`,
      },
    },
  },
};

/**
 * Hover Trigger Demo
 */
export const HoverTrigger: Story = {
  name: "Hover Trigger",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "100px", display: "flex", gap: "24px", justifyContent: "center" }}>
      <VueWrapper
        component={Popover}
        props={{ trigger: "click" }}
        children={{
          default: () => h(Button, {}, { default: () => "Click Trigger" }),
          content: () => "Click to open (default)",
        }}
      />
      <VueWrapper
        component={Popover}
        props={{ trigger: "hover" }}
        children={{
          default: () => h(Button, {}, { default: () => "Hover Trigger" }),
          content: () => "Hover to open",
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `trigger="hover"` to show the popover on mouse hover instead of click.',
      },
      source: {
        language: "html",
        code: `<Popover trigger="hover">
  <Button>Hover me</Button>
  <template #content>Hover to open</template>
</Popover>`,
      },
    },
  },
};

/**
 * Controlled Mode Demo
 */
function ControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "100px", display: "flex", gap: "16px", justifyContent: "center", alignItems: "center" }}>
      <VueWrapper
        component={Button}
        props={{ variant: "outline", onClick: () => setOpen(!open) }}
        children={`Toggle Popover: ${open ? "Open" : "Closed"}`}
      />
      <VueWrapper
        component={Popover}
        props={{
          open,
          "onUpdate:open": setOpen,
        }}
        children={{
          default: () => h(Button, {}, { default: () => "Controlled Popover" }),
          content: () => "This popover is controlled externally.",
        }}
      />
    </div>
  );
}

export const ControlledMode: Story = {
  name: "Controlled Mode",
  tags: ["!dev"],
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story: "Use `v-model:open` for controlled mode. This allows you to manage the popover state externally.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = !open">Toggle: {{ open ? 'Open' : 'Closed' }}</Button>
  <Popover v-model:open="open">
    <Button>Controlled Popover</Button>
    <template #content>Controlled popover</template>
  </Popover>
</template>`,
      },
    },
  },
};

/**
 * Disable Close on Click Outside
 */
export const DisableCloseOnClickOutside: Story = {
  name: "Disable Close on Click Outside",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "100px", display: "flex", justifyContent: "center" }}>
      <VueWrapper
        component={Popover}
        props={{ closeOnClickOutside: false }}
        children={{
          default: () => h(Button, {}, { default: () => "Click me" }),
          content: () => "Click outside won't close this popover.",
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set `:closeOnClickOutside="false"` to prevent the popover from closing when clicking outside.',
      },
      source: {
        language: "html",
        code: `<Popover :closeOnClickOutside="false">
  <Button>Click me</Button>
  <template #content>Content</template>
</Popover>`,
      },
    },
  },
};

/**
 * Disable Close on ESC
 */
export const DisableCloseOnEsc: Story = {
  name: "Disable Close on ESC",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "100px", display: "flex", justifyContent: "center" }}>
      <VueWrapper
        component={Popover}
        props={{ closeOnEsc: false }}
        children={{
          default: () => h(Button, {}, { default: () => "Click me" }),
          content: () => "Pressing ESC won't close this popover.",
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set `:closeOnEsc="false"` to prevent the popover from closing when pressing the Escape key.',
      },
      source: {
        language: "html",
        code: `<Popover :closeOnEsc="false">
  <Button>Click me</Button>
  <template #content>Content</template>
</Popover>`,
      },
    },
  },
};

/**
 * Disabled State
 */
export const Disabled: Story = {
  name: "Disabled",
  tags: ["!dev"],
  render: () => (
    <div style={{ padding: "100px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <VueWrapper
        component={Popover}
        props={{ disabled: true }}
        children={{
          default: () => h(Button, {}, { default: () => "Disabled Popover" }),
          content: () => "I won't appear",
        }}
      />
      <VueWrapper
        component={Popover}
        children={{
          default: () => h(Button, {}, { default: () => "Enabled Popover" }),
          content: () => "I will appear",
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Set `disabled` to prevent the popover from appearing.",
      },
      source: {
        language: "html",
        code: `<Popover disabled>
  <Button>No popover</Button>
  <template #content>Won't appear</template>
</Popover>`,
      },
    },
  },
};
