import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/react/components/Skeleton";
import { SKELETON_ANIMATION_OPTIONS, SKELETON_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/skeleton.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Skeleton> = {
  title: "React Components/Skeleton",
  component: Skeleton,
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
    style: {
      table: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

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
    return <Skeleton {...args} />;
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/skeleton.css";
import { Skeleton } from "venomous-ui/react";

export default function Demo() {
  return <Skeleton width={200} height={20} />;
}`,
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
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Rect (default)</p>
        <Skeleton width={200} height={20} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Circle</p>
        <Skeleton variant="circle" width={48} height={48} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Text</p>
        <div style={{ width: 300, fontSize: 16 }}>
          <Skeleton variant="text" />
          <Skeleton variant="text" style={{ width: "80%" }} />
          <Skeleton variant="text" style={{ width: "60%" }} />
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
        code: `{/* Rectangle */}
<Skeleton width={200} height={20} />

{/* Circle */}
<Skeleton variant="circle" width={48} height={48} />

{/* Text lines */}
<Skeleton variant="text" />
<Skeleton variant="text" style={{ width: "80%" }} />`,
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
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Pulse (default)</p>
        <Skeleton animation="pulse" width={200} height={20} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Wave</p>
        <Skeleton animation="wave" width={200} height={20} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>No animation</p>
        <Skeleton animation={false} width={200} height={20} />
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
        code: `<Skeleton animation="pulse" width={200} height={20} />
<Skeleton animation="wave" width={200} height={20} />
<Skeleton animation={false} width={200} height={20} />`,
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
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <Skeleton variant="circle" width={40} height={40} />
        <div style={{ flex: 1 }}>
          <Skeleton width={120} height={14} style={{ marginBottom: 8 }} />
          <Skeleton width={80} height={12} />
        </div>
      </div>
      <Skeleton width="100%" height={160} style={{ marginBottom: 12 }} />
      <Skeleton variant="text" style={{ fontSize: 16 }} />
      <Skeleton variant="text" style={{ fontSize: 16, width: "80%" }} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compose multiple Skeleton elements to build custom loading layouts that match your content structure.",
      },
      source: {
        code: `{/* Card skeleton layout */}
<div style={{ width: 300, padding: 16 }}>
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <Skeleton variant="circle" width={40} height={40} />
    <div>
      <Skeleton width={120} height={14} />
      <Skeleton width={80} height={12} />
    </div>
  </div>
  <Skeleton width="100%" height={160} />
  <Skeleton variant="text" />
  <Skeleton variant="text" style={{ width: "80%" }} />
</div>`,
      },
    },
  },
};
