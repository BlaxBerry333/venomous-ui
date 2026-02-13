import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/react/components/Badge";
import { BADGE_COLOR_SCHEME_OPTIONS } from "../constants";

import "@/core/styles/components/badge.css";
import "@/core/styles/variables/index.css";

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
);

const meta: Meta<typeof Badge> = {
  title: "React Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `
Badge displays a small status indicator on a child element or standalone.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    content: {
      description: "Badge content (number or string). Ignored when dot=true",
      control: { type: "number" },
      table: {
        type: { summary: "number | string" },
      },
    },
    dot: {
      description: "Show as a small dot without content",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    max: {
      description: 'Maximum number to display. Shows "{max}+" when content exceeds',
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "99" },
      },
    },
    colorScheme: {
      description: "Color scheme",
      control: "select",
      options: BADGE_COLOR_SCHEME_OPTIONS,
      table: {
        type: { summary: BADGE_COLOR_SCHEME_OPTIONS.map((c) => `"${c}"`).join(" | ") },
        defaultValue: { summary: '"error"' },
      },
    },
    hidden: {
      description: "Hide the badge",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * Basic Usage - Default story with controls
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    content: 5,
    dot: false,
    max: 99,
    colorScheme: "error",
    hidden: false,
  },
  render: function Render(args) {
    return (
      <Badge {...args}>
        <MailIcon />
      </Badge>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/badge.css";
import { Badge } from "venomous-ui/react";

export default function Demo() {
  return (
    <Badge content={5}>
      <MailIcon />
    </Badge>
  );
}`,
      },
    },
  },
};

/**
 * Color Schemes - All 5 color schemes
 */
export const ColorSchemes: Story = {
  name: "Color Schemes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      {BADGE_COLOR_SCHEME_OPTIONS.map((scheme) => (
        <Badge key={scheme} content={5} colorScheme={scheme}>
          <MailIcon />
        </Badge>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badge supports 5 color schemes: theme, success, warning, error (default), and info.",
      },
      source: {
        code: `<Badge content={5} colorScheme="theme"><MailIcon /></Badge>
<Badge content={5} colorScheme="success"><MailIcon /></Badge>
<Badge content={5} colorScheme="warning"><MailIcon /></Badge>
<Badge content={5} colorScheme="error"><MailIcon /></Badge>
<Badge content={5} colorScheme="info"><MailIcon /></Badge>`,
      },
    },
  },
};

/**
 * Dot Badge - Small dot indicator
 */
export const DotBadge: Story = {
  name: "Dot Badge",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <Badge dot colorScheme="error">
        <MailIcon />
      </Badge>
      <Badge dot colorScheme="success">
        <MailIcon />
      </Badge>
      <Badge dot colorScheme="info">
        <MailIcon />
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use `dot` prop to display a small indicator without content. Useful for status indicators.",
      },
      source: {
        code: `<Badge dot colorScheme="error"><MailIcon /></Badge>
<Badge dot colorScheme="success"><MailIcon /></Badge>
<Badge dot colorScheme="info"><MailIcon /></Badge>`,
      },
    },
  },
};

/**
 * Max Count - Content exceeds max
 */
export const MaxCount: Story = {
  name: "Max Count",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <Badge content={5}>
        <MailIcon />
      </Badge>
      <Badge content={99}>
        <MailIcon />
      </Badge>
      <Badge content={100}>
        <MailIcon />
      </Badge>
      <Badge content={1000} max={999}>
        <MailIcon />
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When `content` exceeds `max` (default 99), Badge displays "{max}+". Custom max values can be set.',
      },
      source: {
        code: `<Badge content={5}><MailIcon /></Badge>
<Badge content={99}><MailIcon /></Badge>
<Badge content={100}><MailIcon /></Badge>        {/* shows "99+" */}
<Badge content={1000} max={999}><MailIcon /></Badge> {/* shows "999+" */}`,
      },
    },
  },
};

/**
 * Standalone - Badge without children
 */
export const Standalone: Story = {
  name: "Standalone",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Badge content={5} />
      <Badge content="new" colorScheme="success" />
      <Badge content={100} colorScheme="info" />
      <Badge dot colorScheme="warning" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badge can be used without children as a standalone inline element. Supports both number and string content.",
      },
      source: {
        code: `<Badge content={5} />
<Badge content="new" colorScheme="success" />
<Badge content={100} colorScheme="info" />
<Badge dot colorScheme="warning" />`,
      },
    },
  },
};
