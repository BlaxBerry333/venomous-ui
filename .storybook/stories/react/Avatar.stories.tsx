import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@/react/components/Avatar";
import { Badge } from "@/react/components/Badge";
import { AVATAR_SHAPE_OPTIONS, AVATAR_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/avatar.css";
import "@/core/styles/components/badge.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Avatar> = {
  title: "React Components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: `
Avatar displays a user representation. Supports three sizes and two shapes.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    src: {
      description: "Image source URL",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      description: "Alt text for image",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      description: "User name — used to generate initials as fallback",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      description: "Size of the avatar",
      control: "select",
      options: AVATAR_SIZE_OPTIONS,
      table: {
        type: { summary: AVATAR_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    shape: {
      description: "Shape of the avatar",
      control: "select",
      options: AVATAR_SHAPE_OPTIONS,
      table: {
        type: { summary: AVATAR_SHAPE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"circle"' },
      },
    },
    icon: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * Basic Usage - Default story with controls
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    src: "https://i.pravatar.cc/150?u=venomous",
    alt: "John Doe",
    name: "John Doe",
    size: "md",
    shape: "circle",
  },
  render: function Render(args) {
    return <Avatar {...args} />;
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/avatar.css";
import { Avatar } from "venomous-ui/react";

export default function Demo() {
  return <Avatar src="/avatar.jpg" alt="John Doe" name="John Doe" />;
}`,
      },
    },
  },
};

/**
 * Sizes - sm, md, lg
 */
export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar src="https://i.pravatar.cc/150?u=sm" size="sm" alt="Small" />
      <Avatar src="https://i.pravatar.cc/150?u=md" size="md" alt="Medium" />
      <Avatar src="https://i.pravatar.cc/150?u=lg" size="lg" alt="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar supports three sizes: sm (32px), md (40px, default), and lg (48px).",
      },
      source: {
        code: `<Avatar src="/avatar.jpg" size="sm" />  {/* 32px */}
<Avatar src="/avatar.jpg" size="md" />  {/* 40px */}
<Avatar src="/avatar.jpg" size="lg" />  {/* 48px */}`,
      },
    },
  },
};

/**
 * Shapes - circle and square
 */
export const Shapes: Story = {
  name: "Shapes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar src="https://i.pravatar.cc/150?u=circle" shape="circle" alt="Circle" />
      <Avatar src="https://i.pravatar.cc/150?u=square" shape="square" alt="Square" />
      <Avatar name="John Doe" shape="circle" />
      <Avatar name="John Doe" shape="square" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar supports two shapes: circle (default) and square.",
      },
      source: {
        code: `<Avatar src="/avatar.jpg" shape="circle" />
<Avatar src="/avatar.jpg" shape="square" />
<Avatar name="John Doe" shape="circle" />
<Avatar name="John Doe" shape="square" />`,
      },
    },
  },
};

/**
 * Fallback - Image → Initials
 */
export const Fallback: Story = {
  name: "Fallback",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar src="https://i.pravatar.cc/150?u=fallback" name="Alice Wang" alt="With image" />
      <Avatar name="Alice Wang" />
      <Avatar name="John Michael Doe" />
      <Avatar alt="Bob" />
      <Avatar />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Fallback priority: \`src\` (image) → \`name\` (initials) → \`icon\` → \`alt\` (text) → empty.`,
      },
      source: {
        code: `<Avatar src="/avatar.jpg" name="Alice Wang" />  {/* image */}
<Avatar name="Alice Wang" />                     {/* shows "AW" */}
<Avatar name="John Michael Doe" />               {/* shows "JD" */}
<Avatar alt="Bob" />                             {/* shows "Bob" */}
<Avatar />                                       {/* empty */}`,
      },
    },
  },
};

/**
 * With Badge - Avatar + Badge combination
 */
export const WithBadge: Story = {
  name: "With Badge",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Badge dot colorScheme="success">
        <Avatar src="https://i.pravatar.cc/150?u=badge1" name="Alice" />
      </Badge>
      <Badge content={3}>
        <Avatar src="https://i.pravatar.cc/150?u=badge2" name="Bob" />
      </Badge>
      <Badge dot colorScheme="success">
        <Avatar name="Charlie Davis" size="lg" />
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Avatar works naturally with Badge. Wrap Avatar in Badge to show status indicators or notification counts.",
      },
      source: {
        code: `<Badge dot colorScheme="success">
  <Avatar src="/avatar.jpg" name="Alice" />
</Badge>

<Badge content={3}>
  <Avatar src="/avatar.jpg" name="Bob" />
</Badge>`,
      },
    },
  },
};
