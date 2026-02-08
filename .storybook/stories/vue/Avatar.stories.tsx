import type { Meta, StoryObj } from "@storybook/react";

import AvatarVue from "@/vue/components/Avatar/Avatar.vue";
import BadgeVue from "@/vue/components/Badge/Badge.vue";
import { h } from "vue";
import { VueWrapper } from "../../wrappers";
import { AVATAR_SHAPE_OPTIONS, AVATAR_SIZE_OPTIONS } from "../constants";

import "@/core/styles/components/avatar.css";
import "@/core/styles/components/badge.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Avatar",
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
    "#icon": {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

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
    return <VueWrapper component={AvatarVue} props={args} />;
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/avatar.css";
import { Avatar } from "venomous-ui/vue";
</script>

<template>
  <Avatar src="/avatar.jpg" alt="John Doe" name="John Doe" />
</template>`,
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
      <VueWrapper component={AvatarVue} props={{ src: "https://i.pravatar.cc/150?u=sm", size: "sm", alt: "Small" }} />
      <VueWrapper component={AvatarVue} props={{ src: "https://i.pravatar.cc/150?u=md", size: "md", alt: "Medium" }} />
      <VueWrapper component={AvatarVue} props={{ src: "https://i.pravatar.cc/150?u=lg", size: "lg", alt: "Large" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar supports three sizes: sm (32px), md (40px, default), and lg (48px).",
      },
      source: {
        language: "html",
        code: `<Avatar src="/avatar.jpg" size="sm" />  <!-- 32px -->
<Avatar src="/avatar.jpg" size="md" />  <!-- 40px -->
<Avatar src="/avatar.jpg" size="lg" />  <!-- 48px -->`,
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
      <VueWrapper
        component={AvatarVue}
        props={{ src: "https://i.pravatar.cc/150?u=circle", shape: "circle", alt: "Circle" }}
      />
      <VueWrapper
        component={AvatarVue}
        props={{ src: "https://i.pravatar.cc/150?u=square", shape: "square", alt: "Square" }}
      />
      <VueWrapper component={AvatarVue} props={{ name: "John Doe", shape: "circle" }} />
      <VueWrapper component={AvatarVue} props={{ name: "John Doe", shape: "square" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar supports two shapes: circle (default) and square.",
      },
      source: {
        language: "html",
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
      <VueWrapper
        component={AvatarVue}
        props={{ src: "https://i.pravatar.cc/150?u=fallback", name: "Alice Wang", alt: "With image" }}
      />
      <VueWrapper component={AvatarVue} props={{ name: "Alice Wang" }} />
      <VueWrapper component={AvatarVue} props={{ name: "John Michael Doe" }} />
      <VueWrapper component={AvatarVue} props={{ alt: "Bob" }} />
      <VueWrapper component={AvatarVue} props={{}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Fallback priority: \`src\` (image) → \`name\` (initials) → \`#icon\` slot → \`alt\` (text) → empty.`,
      },
      source: {
        language: "html",
        code: `<Avatar src="/avatar.jpg" name="Alice Wang" />  <!-- image -->
<Avatar name="Alice Wang" />                     <!-- shows "AW" -->
<Avatar name="John Michael Doe" />               <!-- shows "JD" -->
<Avatar alt="Bob" />                             <!-- shows "Bob" -->
<Avatar />                                       <!-- empty -->`,
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
      <VueWrapper
        component={BadgeVue}
        props={{ dot: true, colorScheme: "success" }}
        children={{
          default: () => h(AvatarVue, { src: "https://i.pravatar.cc/150?u=badge1", name: "Alice" }),
        }}
      />
      <VueWrapper
        component={BadgeVue}
        props={{ content: 3 }}
        children={{
          default: () => h(AvatarVue, { src: "https://i.pravatar.cc/150?u=badge2", name: "Bob" }),
        }}
      />
      <VueWrapper
        component={BadgeVue}
        props={{ dot: true, colorScheme: "success" }}
        children={{
          default: () => h(AvatarVue, { name: "Charlie Davis", size: "lg" }),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Avatar works naturally with Badge. Wrap Avatar in Badge to show status indicators or notification counts.",
      },
      source: {
        language: "html",
        code: `<Badge dot colorScheme="success">
  <Avatar src="/avatar.jpg" name="Alice" />
</Badge>

<Badge :content="3">
  <Avatar src="/avatar.jpg" name="Bob" />
</Badge>`,
      },
    },
  },
};
