import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import type { TModalSize } from "@/core/types";
import { Button } from "@/react/components/Button";
import { Modal } from "@/react/components/Modal";
import { MODAL_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/modal.css";
import "@/core/styles/variables/index.css";

// Close icon for demos (in real usage, use Iconify or your own icon)
const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M12 4L4 12M4 4l8 8" />
  </svg>
);

const meta: Meta<typeof Modal> = {
  title: "React Components/Modal",
  component: Modal,
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
    onClose: {
      description: "Callback when modal requests to close",
      control: false,
      table: {
        type: { summary: "(event?: Event) => void" },
      },
    },
    footer: {
      description: "Footer content (buttons, actions)",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      description: "Modal body content",
      control: false,
      table: {
        type: { summary: "ReactNode" },
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
    closeIcon: {
      description: "Close icon element (no default - must be provided by user, e.g. Iconify)",
      control: false,
      table: {
        type: { summary: "ReactNode" },
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
type Story = StoryObj<typeof Modal>;

/**
 * Interactive Modal Demo Component (Simple Mode)
 */
function ModalDemo({
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
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size={size}
        title="Modal Title"
        closeIcon={<CloseIcon />}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
        closeOnBackdrop={closeOnBackdrop}
        closeOnEsc={closeOnEsc}
      >
        <p style={{ margin: 0 }}>This is the modal content. {hintText}</p>
      </Modal>
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
  render: (args) => <ModalDemo size={args.size} closeOnBackdrop={args.closeOnBackdrop} closeOnEsc={args.closeOnEsc} />,
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/modal.css";
import "venomous-ui/core/styles/components/button.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Modal, Button } from "venomous-ui/react";

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal Title"
        closeIcon={<Icon icon="mdi:close" width="16" height="16" />}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>This is the modal content.</p>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Custom Mode Demo - Full control over modal content
 */
function CustomModeDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Custom Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "24px" }}>
          <h2 style={{ margin: "0 0 16px" }}>Custom Header</h2>
          <p style={{ margin: "0 0 16px" }}>This modal uses custom mode - children are rendered directly.</p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </div>
      </Modal>
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
          "When no `title` prop is provided, children are rendered directly. This gives you full control over the modal layout.",
      },
      source: {
        code: `"use client";

import { useState } from "react";
import { Modal, Button } from "venomous-ui/react";

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Custom Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "24px" }}>
          <h2>Custom Header</h2>
          <p>Full control over the layout.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Sizes Demo Component
 */
function SizesDemo() {
  const [openSize, setOpenSize] = useState<TModalSize | null>(null);

  const sizes: TModalSize[] = ["sm", "md", "lg", "xl", "full"];

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {sizes.map((size) => (
        <Button key={size} onClick={() => setOpenSize(size)}>
          {size.toUpperCase()}
        </Button>
      ))}
      {sizes.map((size) => (
        <Modal
          key={size}
          open={openSize === size}
          onClose={() => setOpenSize(null)}
          size={size}
          title={`Size: ${size.toUpperCase()}`}
          closeIcon={<CloseIcon />}
          footer={<Button onClick={() => setOpenSize(null)}>Close</Button>}
        >
          <p style={{ margin: 0 }}>This modal has size=&quot;{size}&quot;</p>
        </Modal>
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
        code: `<Modal open={open} onClose={onClose} size="lg" title="Large Modal">
  Content here
</Modal>`,
      },
    },
  },
};

export const DisableCloseOnBackdrop: Story = {
  name: "Disable Close on Backdrop",
  tags: ["!dev"],
  render: () => <ModalDemo closeOnBackdrop={false} />,
  parameters: {
    docs: {
      description: {
        story: "Set `closeOnBackdrop={false}` to prevent closing when clicking outside the modal.",
      },
      source: {
        code: `<Modal
  open={open}
  onClose={() => setOpen(false)}
  closeOnBackdrop={false}
  title="Modal Title"
>
  Modal content
</Modal>`,
      },
    },
  },
};

export const DisableCloseOnEsc: Story = {
  name: "Disable Close on ESC",
  tags: ["!dev"],
  render: () => <ModalDemo closeOnEsc={false} />,
  parameters: {
    docs: {
      description: {
        story: "Set `closeOnEsc={false}` to prevent closing when pressing the Escape key.",
      },
      source: {
        code: `<Modal
  open={open}
  onClose={() => setOpen(false)}
  closeOnEsc={false}
  title="Modal Title"
>
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
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="No Close Button"
          showCloseButton={false}
          footer={<Button onClick={() => setOpen(false)}>Close</Button>}
        >
          <p style={{ margin: 0 }}>This modal has no close button in the header.</p>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Set `showCloseButton={false}` to hide the close button in the header.",
      },
      source: {
        code: `<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="No Close Button"
  showCloseButton={false}
  footer={<Button onClick={() => setOpen(false)}>Close</Button>}
>
  Modal content
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
    // Example using a simple custom icon (in real usage, use Iconify)
    const CustomIcon = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    );
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Custom Close Icon"
          closeIcon={<CustomIcon />}
          footer={<Button onClick={() => setOpen(false)}>Close</Button>}
        >
          <p style={{ margin: 0 }}>This modal uses a custom close icon.</p>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`closeIcon\` prop to provide a close icon. Modal has no built-in icon - you must supply your own (Iconify recommended).`,
      },
      source: {
        code: `import { Icon } from "@iconify/react";

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="With Iconify"
  closeIcon={<Icon icon="mdi:close" width="20" height="20" />}
>
  Modal content
</Modal>`,
      },
    },
  },
};
