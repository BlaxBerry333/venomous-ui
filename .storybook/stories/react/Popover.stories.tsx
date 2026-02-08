import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import type { TPopoverPlacement, TPopoverTrigger } from "@/core/types";
import { Button } from "@/react/components/Button";
import { Popover } from "@/react/components/Popover";
import { POPOVER_PLACEMENT_OPTIONS, POPOVER_TRIGGER_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/popover.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Popover> = {
  title: "React Components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `Popover displays rich content in a floating panel anchored to a trigger element.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
    },
  },
  argTypes: {
    content: {
      description: "Popover content (string or ReactNode)",
      control: "text",
      table: {
        type: { summary: "ReactNode" },
      },
    },
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
    children: {
      description: "Trigger element",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onOpenChange: {
      description: "Callback when open state changes",
      control: false,
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    open: {
      description: "Controlled open state. Do not set this for uncontrolled mode.",
      control: false,
      table: {
        type: { summary: "boolean" },
      },
    },
    className: {
      description: "Additional CSS class names for popover",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

/**
 * Custom args type for Stories (content is string for Storybook controls)
 */
interface PopoverDemoArgs {
  content?: string;
  placement?: TPopoverPlacement;
  trigger?: TPopoverTrigger;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  disabled?: boolean;
}

type Story = StoryObj<PopoverDemoArgs>;

/**
 * Demo component that respects args
 */
function PopoverDemo(props: PopoverDemoArgs) {
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
      <Popover
        content={content}
        placement={placement}
        trigger={trigger}
        closeOnClickOutside={closeOnClickOutside}
        closeOnEsc={closeOnEsc}
        disabled={disabled}
      >
        <Button>{trigger === "click" ? "Click me" : "Hover me"}</Button>
      </Popover>
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
        code: `import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/popover.css";
import "venomous-ui/core/styles/components/button.css";
import { Popover, Button } from "venomous-ui/react";

export default function Demo() {
  return (
    <Popover content="This is a popover with some content.">
      <Button>Click me</Button>
    </Popover>
  );
}`,
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
      <Popover
        content={
          <div>
            <h4 style={{ margin: "0 0 8px" }}>User Profile</h4>
            <p style={{ margin: "0 0 8px", color: "var(--VENOMOUSUI-text-secondary)" }}>
              View and edit your profile settings.
            </p>
            <Button size="sm">View Profile</Button>
          </div>
        }
      >
        <Button>Show Profile Card</Button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Popover content can be any React node, allowing for rich interactive content.",
      },
      source: {
        code: `<Popover
  content={
    <div>
      <h4>User Profile</h4>
      <p>View and edit your profile settings.</p>
      <Button size="sm">View Profile</Button>
    </div>
  }
>
  <Button>Show Profile Card</Button>
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
        <Popover key={placement} content={`Popover on ${placement}`} placement={placement}>
          <Button>{placement.charAt(0).toUpperCase() + placement.slice(1)}</Button>
        </Popover>
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
        code: `<Popover content="Content" placement="top">
  <Button>Click me</Button>
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
      <Popover content="Click to open (default)" trigger="click">
        <Button>Click Trigger</Button>
      </Popover>
      <Popover content="Hover to open" trigger="hover">
        <Button>Hover Trigger</Button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `trigger="hover"` to show the popover on mouse hover instead of click.',
      },
      source: {
        code: `<Popover content="Hover to open" trigger="hover">
  <Button>Hover me</Button>
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
      <Button variant="outline" onClick={() => setOpen(!open)}>
        Toggle Popover: {open ? "Open" : "Closed"}
      </Button>
      <Popover content="This popover is controlled externally." open={open} onOpenChange={setOpen}>
        <Button>Controlled Popover</Button>
      </Popover>
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
        story:
          "Use `open` and `onOpenChange` props for controlled mode. This allows you to manage the popover state externally.",
      },
      source: {
        code: `"use client";

import { useState } from "react";

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      content="Controlled popover"
      open={open}
      onOpenChange={setOpen}
    >
      <Button>Click me</Button>
    </Popover>
  );
}`,
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
      <Popover content="Click outside won't close this popover." closeOnClickOutside={false}>
        <Button>Click me</Button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Set `closeOnClickOutside={false}` to prevent the popover from closing when clicking outside.",
      },
      source: {
        code: `<Popover content="Content" closeOnClickOutside={false}>
  <Button>Click me</Button>
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
      <Popover content="Pressing ESC won't close this popover." closeOnEsc={false}>
        <Button>Click me</Button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Set `closeOnEsc={false}` to prevent the popover from closing when pressing the Escape key.",
      },
      source: {
        code: `<Popover content="Content" closeOnEsc={false}>
  <Button>Click me</Button>
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
      <Popover content="I won't appear" disabled>
        <Button>Disabled Popover</Button>
      </Popover>
      <Popover content="I will appear">
        <Button>Enabled Popover</Button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Set `disabled={true}` to prevent the popover from appearing.",
      },
      source: {
        code: `<Popover content="Won't appear" disabled>
  <Button>No popover</Button>
</Popover>`,
      },
    },
  },
};
