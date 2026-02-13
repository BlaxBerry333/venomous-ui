import type { Meta, StoryObj } from "@storybook/react";

import type { TTooltipPlacement } from "@/core/types";
import { Button } from "@/react/components/Button";
import { Tooltip } from "@/react/components/Tooltip";
import { TOOLTIP_PLACEMENT_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/tooltip.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Tooltip> = {
  title: "React Components/Tooltip",
  component: Tooltip,
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
      description: "Tooltip text content",
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
        defaultValue: { summary: "200" },
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
    children: {
      description: "Trigger element",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    className: {
      description: "Additional CSS class names for tooltip",
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
 * Custom args type for Stories (subset of props for Storybook controls)
 */
interface TooltipDemoArgs {
  content?: string;
  placement?: TTooltipPlacement;
  delay?: number;
  disabled?: boolean;
}

type Story = StoryObj<TooltipDemoArgs>;

/**
 * Demo component that respects args
 */
function TooltipDemo(props: TooltipDemoArgs) {
  const { content = "This is a tooltip", placement = "top", delay = 200, disabled = false } = props;

  return (
    <div style={{ padding: "60px", display: "flex", justifyContent: "center" }}>
      <Tooltip content={content} placement={placement} delay={delay} disabled={disabled}>
        <Button>Hover me</Button>
      </Tooltip>
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
        code: `import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/tooltip.css";
import "venomous-ui/core/styles/components/button.css";
import { Tooltip, Button } from "venomous-ui/react";

export default function Demo() {
  return (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}`,
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
        <Tooltip key={placement} content={`Tooltip on ${placement}`} placement={placement}>
          <Button>{placement.charAt(0).toUpperCase() + placement.slice(1)}</Button>
        </Tooltip>
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
      <Tooltip content="No delay" delay={0}>
        <Button>No Delay</Button>
      </Tooltip>
      <Tooltip content="300ms delay" delay={300}>
        <Button>300ms Delay</Button>
      </Tooltip>
      <Tooltip content="500ms delay" delay={500}>
        <Button>500ms Delay</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use the `delay` prop to add a delay before the tooltip appears. This prevents tooltips from appearing during quick mouse movements.",
      },
      source: {
        code: `<Tooltip content="Appears after 300ms" delay={300}>
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
      <Tooltip content="I won't appear" disabled>
        <Button>Disabled Tooltip</Button>
      </Tooltip>
      <Tooltip content="I will appear">
        <Button>Enabled Tooltip</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Set `disabled={true}` to prevent the tooltip from appearing.",
      },
      source: {
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
      <Tooltip content="Button tooltip">
        <Button>Button</Button>
      </Tooltip>
      <Tooltip content="Link tooltip">
        <a href="#" style={{ color: "var(--VENOMOUSUI-text-link)" }}>
          Link
        </a>
      </Tooltip>
      <Tooltip content="Icon tooltip">
        <span style={{ cursor: "pointer", fontSize: "24px" }}>⭐</span>
      </Tooltip>
      <Tooltip content="Text tooltip">
        <span style={{ textDecoration: "underline dotted", cursor: "help" }}>hover text</span>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip can wrap any element - buttons, links, icons, or text.",
      },
      source: {
        code: `<Tooltip content="Icon tooltip">
  <span style={{ cursor: "pointer" }}>⭐</span>
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
      <Tooltip content="Focus me with Tab key">
        <Button>Tab to focus</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tooltips are keyboard accessible. They appear when the trigger element receives focus (via Tab key) and hide on blur.",
      },
      source: {
        code: `// Tooltip appears on focus for keyboard users
<Tooltip content="Accessible tooltip">
  <Button>Tab to focus</Button>
</Tooltip>`,
      },
    },
  },
};
