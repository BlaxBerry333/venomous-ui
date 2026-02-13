import type { Meta, StoryObj } from "@storybook/react";
import { h } from "vue";

import BadgeVue from "@/vue/components/Badge/Badge.vue";
import { VueWrapper } from "../../wrappers";
import { BADGE_COLOR_SCHEME_OPTIONS } from "../constants";

import "@/core/styles/components/badge.css";
import "@/core/styles/variables/index.css";

const vueMailIcon = () =>
  h(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" },
    [h("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }), h("path", { d: "M22 7l-10 6L2 7" })],
  );

const meta: Meta = {
  title: "Vue Components/Badge",
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
    "#default": {
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
    content: 5,
    dot: false,
    max: 99,
    colorScheme: "error",
    hidden: false,
  },
  render: function Render(args) {
    return <VueWrapper component={BadgeVue} props={args} children={{ default: vueMailIcon }} />;
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/badge.css";
import { Badge } from "venomous-ui/vue";
</script>

<template>
  <Badge :content="5">
    <MailIcon />
  </Badge>
</template>`,
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
        <VueWrapper
          key={scheme}
          component={BadgeVue}
          props={{ content: 5, colorScheme: scheme }}
          children={{ default: vueMailIcon }}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badge supports 5 color schemes: theme, success, warning, error (default), and info.",
      },
      source: {
        language: "html",
        code: `<Badge :content="5" colorScheme="theme"><MailIcon /></Badge>
<Badge :content="5" colorScheme="success"><MailIcon /></Badge>
<Badge :content="5" colorScheme="warning"><MailIcon /></Badge>
<Badge :content="5" colorScheme="error"><MailIcon /></Badge>
<Badge :content="5" colorScheme="info"><MailIcon /></Badge>`,
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
      <VueWrapper
        component={BadgeVue}
        props={{ dot: true, colorScheme: "error" }}
        children={{ default: vueMailIcon }}
      />
      <VueWrapper
        component={BadgeVue}
        props={{ dot: true, colorScheme: "success" }}
        children={{ default: vueMailIcon }}
      />
      <VueWrapper component={BadgeVue} props={{ dot: true, colorScheme: "info" }} children={{ default: vueMailIcon }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use `dot` prop to display a small indicator without content. Useful for status indicators.",
      },
      source: {
        language: "html",
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
      <VueWrapper component={BadgeVue} props={{ content: 5 }} children={{ default: vueMailIcon }} />
      <VueWrapper component={BadgeVue} props={{ content: 99 }} children={{ default: vueMailIcon }} />
      <VueWrapper component={BadgeVue} props={{ content: 100 }} children={{ default: vueMailIcon }} />
      <VueWrapper component={BadgeVue} props={{ content: 1000, max: 999 }} children={{ default: vueMailIcon }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When `content` exceeds `max` (default 99), Badge displays "{max}+". Custom max values can be set.',
      },
      source: {
        language: "html",
        code: `<Badge :content="5"><MailIcon /></Badge>
<Badge :content="99"><MailIcon /></Badge>
<Badge :content="100"><MailIcon /></Badge>        <!-- shows "99+" -->
<Badge :content="1000" :max="999"><MailIcon /></Badge> <!-- shows "999+" -->`,
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
      <VueWrapper component={BadgeVue} props={{ content: 5 }} />
      <VueWrapper component={BadgeVue} props={{ content: "new", colorScheme: "success" }} />
      <VueWrapper component={BadgeVue} props={{ content: 100, colorScheme: "info" }} />
      <VueWrapper component={BadgeVue} props={{ dot: true, colorScheme: "warning" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badge can be used without children as a standalone inline element. Supports both number and string content.",
      },
      source: {
        language: "html",
        code: `<Badge :content="5" />
<Badge content="new" colorScheme="success" />
<Badge :content="100" colorScheme="info" />
<Badge dot colorScheme="warning" />`,
      },
    },
  },
};
