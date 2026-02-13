import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { h } from "vue";

import type { TModalSize } from "@/core/types";
import Button from "@/vue/components/Button/Button.vue";
import Modal from "@/vue/components/Modal/Modal.vue";
import { VueWrapper } from "../../wrappers";
import { MODAL_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/modal.css";
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
  title: "Vue Components/Modal",
  parameters: {
    docs: {
      description: {
        component: `
Modal is a dialog overlay that requires user interaction.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    open: {
      description: "Whether the modal is open",
      control: false,
      table: {
        type: { summary: "boolean" },
      },
    },
    "@close": {
      description: "Event emitted when modal requests to close",
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
      description: "Slot for modal body content",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
    title: {
      description: "Modal title - enables simple mode with auto-generated header",
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
    "#closeIcon": {
      description: "Slot for close icon (no default - must be provided by user, e.g. Iconify)",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
    size: {
      description: "The size of the modal",
      control: "select",
      options: MODAL_SIZE_OPTIONS,
      table: {
        type: { summary: MODAL_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    closeOnBackdrop: {
      description: "Close modal when clicking the backdrop",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnEsc: {
      description: "Close modal when pressing Escape key",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive Modal Demo for Vue (Simple Mode)
 */
function VueModalDemo({
  size = "md",
  closeOnBackdrop = true,
  closeOnEsc = true,
}: {
  size?: TModalSize;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
}) {
  const [open, setOpen] = useState(false);

  // Build hint text based on close options
  const hints: string[] = [];
  if (closeOnEsc) hints.push("press ESC");
  if (closeOnBackdrop) hints.push("click backdrop");
  const hintText = hints.length > 0 ? `You can ${hints.join(" or ")} to close.` : "Use the buttons to close.";

  return (
    <>
      <VueWrapper component={Button} props={{ onClick: () => setOpen(true) }} children="Open Modal" />
      <VueWrapper
        component={Modal}
        props={{
          open,
          size,
          title: "Modal Title",
          closeOnBackdrop,
          closeOnEsc,
          onClose: () => setOpen(false),
        }}
        children={{
          default: () => h("p", { style: { margin: 0 } }, `This is the modal content. ${hintText}`),
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
    size: "md",
    title: "Modal Title",
    showCloseButton: true,
    closeOnBackdrop: true,
    closeOnEsc: true,
  },
  render: (args) => (
    <VueModalDemo size={args.size} closeOnBackdrop={args.closeOnBackdrop} closeOnEsc={args.closeOnEsc} />
  ),
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/modal.css";
import "venomous-ui/core/styles/components/button.css";
import { Modal, Button } from "venomous-ui/vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open Modal</Button>
  <Modal :open="open" title="Modal Title" @close="open = false">
    <template #closeIcon>
      <Icon icon="mdi:close" width="16" height="16" />
    </template>
    <p>This is the modal content.</p>
    <template #footer>
      <Button variant="ghost" @click="open = false">Cancel</Button>
      <Button @click="open = false">Confirm</Button>
    </template>
  </Modal>
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
      <VueWrapper component={Button} props={{ onClick: () => setOpen(true) }} children="Open Custom Modal" />
      <VueWrapper
        component={Modal}
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
                "This modal uses custom mode - slot content is rendered directly.",
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
          "When no `title` prop is provided, slot content is rendered directly. This gives you full control over the modal layout.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { Modal, Button } from "venomous-ui/vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open Custom Modal</Button>
  <Modal :open="open" @close="open = false">
    <div style="padding: 24px">
      <h2>Custom Header</h2>
      <p>Full control over the layout.</p>
      <Button @click="open = false">Close</Button>
    </div>
  </Modal>
</template>`,
      },
    },
  },
};

/**
 * Sizes Demo
 */
function SizesDemo() {
  const [openSize, setOpenSize] = useState<TModalSize | null>(null);

  const sizes: TModalSize[] = ["sm", "md", "lg", "xl", "full"];

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
          key={`modal-${size}`}
          component={Modal}
          props={{
            open: openSize === size,
            size,
            title: `Size: ${size.toUpperCase()}`,
            onClose: () => setOpenSize(null),
          }}
          children={{
            default: () => h("p", { style: { margin: 0 } }, `This modal has size="${size}"`),
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
        story: `Modal supports five sizes:
- **sm**: 400px max-width
- **md**: 500px max-width (default)
- **lg**: 700px max-width
- **xl**: 900px max-width
- **full**: Full screen`,
      },
      source: {
        language: "html",
        code: `<Modal :open="open" size="lg" title="Large Modal" @close="open = false">
  Content here
</Modal>`,
      },
    },
  },
};

export const DisableCloseOnBackdrop: Story = {
  name: "Disable Close on Backdrop",
  tags: ["!dev"],
  render: () => <VueModalDemo closeOnBackdrop={false} />,
  parameters: {
    docs: {
      description: {
        story: 'Set `:close-on-backdrop="false"` to prevent closing when clicking outside the modal.',
      },
      source: {
        language: "html",
        code: `<Modal :open="open" :close-on-backdrop="false" title="Modal" @close="open = false">
  Modal content
</Modal>`,
      },
    },
  },
};

export const DisableCloseOnEsc: Story = {
  name: "Disable Close on ESC",
  tags: ["!dev"],
  render: () => <VueModalDemo closeOnEsc={false} />,
  parameters: {
    docs: {
      description: {
        story: 'Set `:close-on-esc="false"` to prevent closing when pressing the Escape key.',
      },
      source: {
        language: "html",
        code: `<Modal :open="open" :close-on-esc="false" title="Modal" @close="open = false">
  Modal content
</Modal>`,
      },
    },
  },
};

export const WithoutCloseButton: Story = {
  name: "Without Close Button",
  tags: ["!dev"],
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <VueWrapper component={Button} props={{ onClick: () => setOpen(true) }} children="Open Modal" />
        <VueWrapper
          component={Modal}
          props={{
            open,
            title: "No Close Button",
            showCloseButton: false,
            onClose: () => setOpen(false),
          }}
          children={{
            default: () => h("p", { style: { margin: 0 } }, "This modal has no close button in the header."),
            footer: () => h(Button, { onClick: () => setOpen(false) }, { default: () => "Close" }),
          }}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Set `:show-close-button="false"` to hide the close button in the header.',
      },
      source: {
        language: "html",
        code: `<Modal :open="open" title="No Close Button" :show-close-button="false" @close="open = false">
  Modal content
  <template #footer>
    <Button @click="open = false">Close</Button>
  </template>
</Modal>`,
      },
    },
  },
};

export const CustomCloseIcon: Story = {
  name: "Custom Close Icon",
  tags: ["!dev"],
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <VueWrapper component={Button} props={{ onClick: () => setOpen(true) }} children="Open Modal" />
        <VueWrapper
          component={Modal}
          props={{
            open,
            title: "Custom Close Icon",
            onClose: () => setOpen(false),
          }}
          children={{
            default: () => h("p", { style: { margin: 0 } }, "This modal uses a custom close icon."),
            footer: () => h(Button, { onClick: () => setOpen(false) }, { default: () => "Close" }),
            closeIcon: () =>
              h(
                "svg",
                { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor" },
                h("path", {
                  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                }),
              ),
          }}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`#closeIcon\` slot to provide a close icon. Modal has no built-in icon - you must supply your own (Iconify recommended).`,
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { Modal, Button } from "venomous-ui/vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open Modal</Button>
  <Modal :open="open" title="With Iconify" @close="open = false">
    <template #closeIcon>
      <Icon icon="mdi:close" width="20" height="20" />
    </template>
    Modal content
  </Modal>
</template>`,
      },
    },
  },
};
