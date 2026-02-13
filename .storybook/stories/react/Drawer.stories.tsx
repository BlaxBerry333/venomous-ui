import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import type { TDrawerPlacement, TDrawerSize } from "@/core/types";
import { Button } from "@/react/components/Button";
import { Drawer } from "@/react/components/Drawer";
import { DRAWER_PLACEMENT_OPTIONS, DRAWER_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/drawer.css";
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

const meta: Meta<typeof Drawer> = {
  title: "React Components/Drawer",
  component: Drawer,
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
    onClose: {
      description: "Callback when drawer requests to close",
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
      description: "Drawer body content",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    closeIcon: {
      description: "Close icon element (no default - must be provided by user, e.g. Iconify)",
      control: false,
      table: {
        type: { summary: "ReactNode" },
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
type Story = StoryObj<typeof Drawer>;

/**
 * Interactive Drawer Demo Component
 */
function DrawerDemo(props: {
  placement?: TDrawerPlacement;
  size?: TDrawerSize;
  title?: string;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const {
    placement = "right",
    size = "md",
    title = "Drawer Title",
    showCloseButton = true,
    closeOnBackdrop = true,
    closeOnEsc = true,
  } = props;

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement={placement}
        size={size}
        title={title}
        showCloseButton={showCloseButton}
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
        <p style={{ margin: 0 }}>This is the drawer content.</p>
      </Drawer>
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
  render: (args) => <DrawerDemo {...args} />,
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/drawer.css";
import "venomous-ui/core/styles/components/button.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Drawer, Button } from "venomous-ui/react";

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Drawer Title"
        closeIcon={<Icon icon="mdi:close" width="16" height="16" />}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>This is the drawer content.</p>
      </Drawer>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Custom Mode Demo - Full control over drawer content
 */
function CustomModeDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Custom Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "24px" }}>
          <h2 style={{ margin: "0 0 16px" }}>Custom Header</h2>
          <p style={{ margin: "0 0 16px" }}>This drawer uses custom mode - children are rendered directly.</p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </div>
      </Drawer>
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
          "When no `title` prop is provided, children are rendered directly. This gives you full control over the drawer layout.",
      },
      source: {
        code: `"use client";

import { useState } from "react";
import { Drawer, Button } from "venomous-ui/react";

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Custom Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "24px" }}>
          <h2>Custom Header</h2>
          <p>Full control over the layout.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Drawer>
    </>
  );
}`,
      },
    },
  },
};

/**
 * Placements Demo Component
 */
function PlacementsDemo() {
  const [openPlacement, setOpenPlacement] = useState<TDrawerPlacement | null>(null);

  const placements: TDrawerPlacement[] = ["left", "right", "top", "bottom"];

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {placements.map((placement) => (
        <Button key={placement} onClick={() => setOpenPlacement(placement)}>
          {placement.charAt(0).toUpperCase() + placement.slice(1)}
        </Button>
      ))}
      {placements.map((placement) => (
        <Drawer
          key={placement}
          open={openPlacement === placement}
          onClose={() => setOpenPlacement(null)}
          placement={placement}
          title={`Placement: ${placement}`}
          closeIcon={<CloseIcon />}
          footer={<Button onClick={() => setOpenPlacement(null)}>Close</Button>}
        >
          <p style={{ margin: 0 }}>This drawer slides in from the {placement}.</p>
        </Drawer>
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
        code: `<Drawer open={open} onClose={onClose} placement="left" title="Left Drawer">
  Content here
</Drawer>`,
      },
    },
  },
};

/**
 * Sizes Demo Component
 */
function SizesDemo() {
  const [openSize, setOpenSize] = useState<TDrawerSize | null>(null);

  const sizes: TDrawerSize[] = ["sm", "md", "lg", "xl", "full"];

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {sizes.map((size) => (
        <Button key={size} onClick={() => setOpenSize(size)}>
          {size.toUpperCase()}
        </Button>
      ))}
      {sizes.map((size) => (
        <Drawer
          key={size}
          open={openSize === size}
          onClose={() => setOpenSize(null)}
          size={size}
          title={`Size: ${size.toUpperCase()}`}
          closeIcon={<CloseIcon />}
          footer={<Button onClick={() => setOpenSize(null)}>Close</Button>}
        >
          <p style={{ margin: 0 }}>This drawer has size=&quot;{size}&quot;</p>
        </Drawer>
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
        code: `<Drawer open={open} onClose={onClose} size="lg" title="Large Drawer">
  Content here
</Drawer>`,
      },
    },
  },
};

export const DisableCloseOnBackdrop: Story = {
  name: "Disable Close on Backdrop",
  tags: ["!dev"],
  render: () => <DrawerDemo closeOnBackdrop={false} />,
  parameters: {
    docs: {
      description: {
        story: "Set `closeOnBackdrop={false}` to prevent closing when clicking outside the drawer.",
      },
      source: {
        code: `<Drawer
  open={open}
  onClose={() => setOpen(false)}
  closeOnBackdrop={false}
  title="Drawer Title"
>
  Drawer content
</Drawer>`,
      },
    },
  },
};

export const DisableCloseOnEsc: Story = {
  name: "Disable Close on ESC",
  tags: ["!dev"],
  render: () => <DrawerDemo closeOnEsc={false} />,
  parameters: {
    docs: {
      description: {
        story: "Set `closeOnEsc={false}` to prevent closing when pressing the Escape key.",
      },
      source: {
        code: `<Drawer
  open={open}
  onClose={() => setOpen(false)}
  closeOnEsc={false}
  title="Drawer Title"
>
  Drawer content
</Drawer>`,
      },
    },
  },
};
