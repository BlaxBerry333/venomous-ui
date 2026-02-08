import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { h } from "vue";

import type { TDrawerPlacement, TDrawerSize } from "@/core/types";
import Button from "@/vue/components/Button/Button.vue";
import Drawer from "@/vue/components/Drawer/Drawer.vue";
import { VueWrapper } from "../../wrappers";
import { DRAWER_PLACEMENT_OPTIONS, DRAWER_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/drawer.css";
import "@/core/styles/variables/index.css";

// Close icon for demos (in real usage, use Iconify or your own icon)
const closeIconSlot = () =>
  h(
    "svg",
    {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
    },
    h("path", { d: "M12 4L4 12M4 4l8 8" }),
  );

const meta: Meta = {
  title: "Vue Components/Drawer",
  parameters: {
    docs: {
      description: {
        component: `Drawer is a panel that slides in from the edge of the screen.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
    },
  },
  argTypes: {
    placement: {
      description: "Edge from which the drawer slides in",
      control: "select",
      options: DRAWER_PLACEMENT_OPTIONS,
      table: {
        type: { summary: DRAWER_PLACEMENT_OPTIONS.map((p) => `"${p}"`).join(" | ") },
        defaultValue: { summary: '"right"' },
      },
    },
    size: {
      description: "The size of the drawer (width for left/right, height for top/bottom)",
      control: "select",
      options: DRAWER_SIZE_OPTIONS,
      table: {
        type: { summary: DRAWER_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    title: {
      description: "Drawer title - enables simple mode with auto-generated header",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    showCloseButton: {
      description: "Show close button in header (only when title is provided)",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnBackdrop: {
      description: "Close drawer when clicking the backdrop",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnEsc: {
      description: "Close drawer when pressing Escape key",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    open: {
      description: "Whether the drawer is open",
      control: false,
      table: {
        type: { summary: "boolean" },
      },
    },
    "@close": {
      description: "Event emitted when drawer requests to close",
      control: false,
      table: {
        type: { summary: "event" },
      },
    },
    "#footer": {
      description: "Slot for footer content (buttons, actions)",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
    "#default": {
      description: "Slot for drawer body content",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
    "#closeIcon": {
      description: "Slot for close icon (no default - must be provided by user, e.g. Iconify)",
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
 * Interactive Drawer Demo for Vue (Simple Mode)
 */
function VueDrawerDemo({
  placement = "right",
  size = "md",
  title = "Drawer Title",
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEsc = true,
}: {
  placement?: TDrawerPlacement;
  size?: TDrawerSize;
  title?: string;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <VueWrapper component={Button} props={{ onClick: () => setOpen(true) }} children="Open Drawer" />
      <VueWrapper
        component={Drawer}
        props={{
          open,
          placement,
          size,
          title,
          showCloseButton,
          closeOnBackdrop,
          closeOnEsc,
          onClose: () => setOpen(false),
        }}
        children={{
          default: () => h("p", { style: { margin: 0 } }, "This is the drawer content."),
          closeIcon: closeIconSlot,
          footer: () => [
            h(Button, { variant: "ghost", onClick: () => setOpen(false) }, { default: () => "Cancel" }),
            h(Button, { onClick: () => setOpen(false) }, { default: () => "Confirm" }),
          ],
        }}
      />
    </>
  );
}

/**
 * Basic Usage - Default story shown in Canvas as Playground
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    placement: "right",
    size: "md",
    title: "Drawer Title",
    showCloseButton: true,
    closeOnBackdrop: true,
    closeOnEsc: true,
  },
  render: (args) => <VueDrawerDemo {...args} />,
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/drawer.css";
import "venomous-ui/core/styles/components/button.css";
import { Drawer, Button } from "venomous-ui/vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open Drawer</Button>
  <Drawer :open="open" title="Drawer Title" @close="open = false">
    <template #closeIcon>
      <Icon icon="mdi:close" width="16" height="16" />
    </template>
    <p>This is the drawer content.</p>
    <template #footer>
      <Button variant="ghost" @click="open = false">Cancel</Button>
      <Button @click="open = false">Confirm</Button>
    </template>
  </Drawer>
</template>`,
      },
    },
  },
};

/**
 * Custom Mode Demo
 */
function CustomModeDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <VueWrapper component={Button} props={{ onClick: () => setOpen(true) }} children="Open Custom Drawer" />
      <VueWrapper
        component={Drawer}
        props={{
          open,
          onClose: () => setOpen(false),
        }}
        children={{
          default: () =>
            h("div", { style: { padding: "24px" } }, [
              h("h2", { style: { margin: "0 0 16px" } }, "Custom Header"),
              h(
                "p",
                { style: { margin: "0 0 16px" } },
                "This drawer uses custom mode - slot content is rendered directly.",
              ),
              h("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" } }, [
                h(Button, { variant: "ghost", onClick: () => setOpen(false) }, { default: () => "Cancel" }),
                h(Button, { onClick: () => setOpen(false) }, { default: () => "Confirm" }),
              ]),
            ]),
        }}
      />
    </>
  );
}

export const CustomMode: Story = {
  name: "Custom Mode",
  tags: ["!dev"],
  render: () => <CustomModeDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "When no `title` prop is provided, slot content is rendered directly. This gives you full control over the drawer layout.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { Drawer, Button } from "venomous-ui/vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open Custom Drawer</Button>
  <Drawer :open="open" @close="open = false">
    <div style="padding: 24px">
      <h2>Custom Header</h2>
      <p>Full control over the layout.</p>
      <Button @click="open = false">Close</Button>
    </div>
  </Drawer>
</template>`,
      },
    },
  },
};

/**
 * Placements Demo
 */
function PlacementsDemo() {
  const [openPlacement, setOpenPlacement] = useState<TDrawerPlacement | null>(null);

  const placements: TDrawerPlacement[] = ["left", "right", "top", "bottom"];

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {placements.map((placement) => (
        <VueWrapper
          key={placement}
          component={Button}
          props={{ onClick: () => setOpenPlacement(placement) }}
          children={placement.charAt(0).toUpperCase() + placement.slice(1)}
        />
      ))}
      {placements.map((placement) => (
        <VueWrapper
          key={`drawer-${placement}`}
          component={Drawer}
          props={{
            open: openPlacement === placement,
            placement,
            title: `Placement: ${placement}`,
            onClose: () => setOpenPlacement(null),
          }}
          children={{
            default: () => h("p", { style: { margin: 0 } }, `This drawer slides in from the ${placement}.`),
            closeIcon: closeIconSlot,
            footer: () => h(Button, { onClick: () => setOpenPlacement(null) }, { default: () => "Close" }),
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
        story: `Drawer supports four placements:
- **left**: Slides in from the left edge
- **right**: Slides in from the right edge (default)
- **top**: Slides in from the top edge
- **bottom**: Slides in from the bottom edge`,
      },
      source: {
        language: "html",
        code: `<Drawer :open="open" placement="left" title="Left Drawer" @close="open = false">
  Content here
</Drawer>`,
      },
    },
  },
};

/**
 * Sizes Demo
 */
function SizesDemo() {
  const [openSize, setOpenSize] = useState<TDrawerSize | null>(null);

  const sizes: TDrawerSize[] = ["sm", "md", "lg", "xl", "full"];

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {sizes.map((size) => (
        <VueWrapper
          key={size}
          component={Button}
          props={{ onClick: () => setOpenSize(size) }}
          children={size.toUpperCase()}
        />
      ))}
      {sizes.map((size) => (
        <VueWrapper
          key={`drawer-${size}`}
          component={Drawer}
          props={{
            open: openSize === size,
            size,
            title: `Size: ${size.toUpperCase()}`,
            onClose: () => setOpenSize(null),
          }}
          children={{
            default: () => h("p", { style: { margin: 0 } }, `This drawer has size="${size}"`),
            closeIcon: closeIconSlot,
            footer: () => h(Button, { onClick: () => setOpenSize(null) }, { default: () => "Close" }),
          }}
        />
      ))}
    </div>
  );
}

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => <SizesDemo />,
  parameters: {
    docs: {
      description: {
        story: `Drawer supports five sizes:
- **sm**: 300px width (for left/right) or height (for top/bottom)
- **md**: 400px (default)
- **lg**: 600px
- **xl**: 800px
- **full**: Full screen`,
      },
      source: {
        language: "html",
        code: `<Drawer :open="open" size="lg" title="Large Drawer" @close="open = false">
  Content here
</Drawer>`,
      },
    },
  },
};

export const DisableCloseOnBackdrop: Story = {
  name: "Disable Close on Backdrop",
  tags: ["!dev"],
  render: () => <VueDrawerDemo closeOnBackdrop={false} />,
  parameters: {
    docs: {
      description: {
        story: 'Set `:closeOnBackdrop="false"` to prevent closing when clicking outside the drawer.',
      },
      source: {
        language: "html",
        code: `<Drawer :open="open" :closeOnBackdrop="false" title="Drawer" @close="open = false">
  Drawer content
</Drawer>`,
      },
    },
  },
};

export const DisableCloseOnEsc: Story = {
  name: "Disable Close on ESC",
  tags: ["!dev"],
  render: () => <VueDrawerDemo closeOnEsc={false} />,
  parameters: {
    docs: {
      description: {
        story: 'Set `:closeOnEsc="false"` to prevent closing when pressing the Escape key.',
      },
      source: {
        language: "html",
        code: `<Drawer :open="open" :closeOnEsc="false" title="Drawer" @close="open = false">
  Drawer content
</Drawer>`,
      },
    },
  },
};
