import type { Meta, StoryObj } from "@storybook/react";

import SkeletonVue from "@/vue/components/Skeleton/Skeleton.vue";
import { VueWrapper } from "../../wrappers";
import { SKELETON_ANIMATION_OPTIONS, SKELETON_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/skeleton.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Skeleton",
  parameters: {
    docs: {
      description: {
        component: `Skeleton is a placeholder loading indicator that previews content layout while data loads.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
    },
  },
  argTypes: {
    variant: {
      description: "Shape variant of the skeleton",
      control: "select",
      options: SKELETON_VARIANT_OPTIONS,
      table: {
        type: { summary: SKELETON_VARIANT_OPTIONS.map((v) => `"${v}"`).join(" | ") },
        defaultValue: { summary: '"rect"' },
      },
    },
    animation: {
      description: "Animation type, or false to disable",
      control: "select",
      options: [false, ...SKELETON_ANIMATION_OPTIONS],
      table: {
        type: { summary: '"pulse" | "wave" | false' },
        defaultValue: { summary: '"pulse"' },
      },
    },
    width: {
      description: "Width (number for px, string for custom units)",
      control: { type: "number" },
      table: {
        type: { summary: "number | string" },
      },
    },
    height: {
      description: "Height (number for px, string for custom units)",
      control: { type: "number" },
      table: {
        type: { summary: "number | string" },
      },
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
 * Basic Usage - Default story shown in Canvas as Playground
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    variant: "rect",
    animation: "pulse",
    width: 200,
    height: 20,
  },
  render: function Render(args) {
    return <VueWrapper component={SkeletonVue} props={args} />;
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/skeleton.css";
import { Skeleton } from "venomous-ui/vue";
</script>

<template>
  <Skeleton :width="200" :height="20" />
</template>`,
      },
    },
  },
};

/**
 * Shapes - rect, circle, text
 */
export const Shapes: Story = {
  name: "Shapes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Rect (default)</p>
        <VueWrapper component={SkeletonVue} props={{ width: 200, height: 20 }} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Circle</p>
        <VueWrapper component={SkeletonVue} props={{ variant: "circle", width: 48, height: 48 }} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Text</p>
        <div style={{ width: 300, fontSize: 16 }}>
          <VueWrapper component={SkeletonVue} props={{ variant: "text" }} />
          <VueWrapper component={SkeletonVue} props={{ variant: "text", style: "width: 80%" }} />
          <VueWrapper component={SkeletonVue} props={{ variant: "text", style: "width: 60%" }} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Skeleton supports three shape variants:
- **rect**: Rectangle shape (default), uses \`border-radius: md\`
- **circle**: Circular shape, uses \`border-radius: full\`
- **text**: Text line placeholder, scaled to match text line height`,
      },
      source: {
        language: "html",
        code: `<!-- Rectangle -->
<Skeleton :width="200" :height="20" />

<!-- Circle -->
<Skeleton variant="circle" :width="48" :height="48" />

<!-- Text lines -->
<Skeleton variant="text" />
<Skeleton variant="text" style="width: 80%" />`,
      },
    },
  },
};

/**
 * Animations - pulse, wave, none
 */
export const Animations: Story = {
  name: "Animations",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Pulse (default)</p>
        <VueWrapper component={SkeletonVue} props={{ animation: "pulse", width: 200, height: 20 }} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Wave</p>
        <VueWrapper component={SkeletonVue} props={{ animation: "wave", width: 200, height: 20 }} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>No animation</p>
        <VueWrapper component={SkeletonVue} props={{ animation: false, width: 200, height: 20 }} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Two built-in animations:
- **pulse**: Opacity fading effect (default)
- **wave**: Shimmer light sweep effect
- **false**: Disable animation`,
      },
      source: {
        language: "html",
        code: `<Skeleton animation="pulse" :width="200" :height="20" />
<Skeleton animation="wave" :width="200" :height="20" />
<Skeleton :animation="false" :width="200" :height="20" />`,
      },
    },
  },
};

/**
 * Composable Layout - Card skeleton example
 */
export const ComposableLayout: Story = {
  name: "Composable Layout",
  tags: ["!dev"],
  render: () => (
    <div style={{ width: 300, padding: 16, border: "1px solid #e5e5e5", borderRadius: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: 16 }}>
        <VueWrapper component={SkeletonVue} props={{ variant: "circle", width: 40, height: 40 }} />
        <div style={{ flex: 1 }}>
          <VueWrapper component={SkeletonVue} props={{ width: 120, height: 14, style: "margin-bottom: 8px" }} />
          <VueWrapper component={SkeletonVue} props={{ width: 80, height: 12 }} />
        </div>
      </div>
      <VueWrapper component={SkeletonVue} props={{ width: "100%", height: 160, style: "margin-bottom: 12px" }} />
      <VueWrapper component={SkeletonVue} props={{ variant: "text", style: "font-size: 16px" }} />
      <VueWrapper component={SkeletonVue} props={{ variant: "text", style: "font-size: 16px; width: 80%" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compose multiple Skeleton elements to build custom loading layouts that match your content structure.",
      },
      source: {
        language: "html",
        code: `<!-- Card skeleton layout -->
<div style="width: 300px; padding: 16px">
  <div style="display: flex; align-items: center; gap: 12px">
    <Skeleton variant="circle" :width="40" :height="40" />
    <div>
      <Skeleton :width="120" :height="14" />
      <Skeleton :width="80" :height="12" />
    </div>
  </div>
  <Skeleton width="100%" :height="160" />
  <Skeleton variant="text" />
  <Skeleton variant="text" style="width: 80%" />
</div>`,
      },
    },
  },
};
