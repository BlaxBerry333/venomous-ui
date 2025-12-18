import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import Tooltip from "./Tooltip";
import { TooltipProps } from "./Tooltip.types";

const placements: TooltipProps["placement"][] = ["top", "bottom", "left", "right"];

const meta = {
  title: "React/Components/<Tooltip>",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Trigger element - must be a single React element.",
      table: {
        type: { summary: "ReactElement" },
      },
      control: false,
    },
    title: {
      description: "Tooltip content.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    placement: {
      description: "Position of the tooltip relative to the trigger.",
      table: {
        type: { summary: "SimplePlacement" },
        defaultValue: { summary: '"top"' },
      },
      control: { type: "radio" },
      options: placements,
    },
    offset: {
      description: "Distance between the tooltip and the trigger in pixels.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: { type: "number" },
    },
    className: {
      description: "Additional CSS class names.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    style: {
      description: "Custom styles for the tooltip content.",
      table: {
        type: { summary: "React.CSSProperties | ((theme: Theme) => React.CSSProperties)" },
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Simple text hints on hover</Subtitle>

          <Markdown>
            {`
\`<Tooltip>\` displays informative text when hovering over an element. It is ideal for simple text hints, labels, descriptions or any content that always shows with an arrow pointing to the trigger.<br />
Only supports hover to trigger.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import React from "react";
import { Tooltip, Button } from "venomous-ui/react/components";

function TooltipExample() {
  return (
    <Tooltip title="This is a tooltip">
      <Button text="Hover me" />
    </Tooltip>
  );
}
            `.trim()}
          />

          <Heading>Examples</Heading>
          <Subtitle>{PlacementsExample.name}</Subtitle>
          <Description of={PlacementsExample} />
          <Canvas of={PlacementsExample} />

          <Subtitle>{RichContentExample.name}</Subtitle>
          <Description of={RichContentExample} />
          <Canvas of={RichContentExample} />

          <Subtitle>{TabFocusSupportExample.name}</Subtitle>
          <Description of={TabFocusSupportExample} />
          <Canvas of={TabFocusSupportExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    title: "This is a tooltip",
    placement: "top",
    offset: 8,
    style: undefined,
    className: undefined,
    children: <Button text="Hover me" />,
  },
  render: function RenderStory(args) {
    return (
      <div style={{ padding: "100px", display: "flex", justifyContent: "center" }}>
        <Tooltip
          title={args.title}
          placement={args.placement}
          offset={args.offset}
          style={args.style}
          className={args.className}
        >
          <Button text="Hover me" />
        </Tooltip>
      </div>
    );
  },
};

// ============================
// Placements Example
// ============================
export const PlacementsExample: Story = {
  name: "Placements",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip supports 4 placement options: top, bottom, left, right. The tooltip will automatically flip if it overflows the viewport.",
      },
      source: {
        language: "tsx",
        code: `
<Tooltip title="Top" placement="top"><Button text="Top" /></Tooltip>
<Tooltip title="Bottom" placement="bottom"><Button text="Bottom" /></Tooltip>
<Tooltip title="Left" placement="left"><Button text="Left" /></Tooltip>
<Tooltip title="Right" placement="right"><Button text="Right" /></Tooltip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div
        style={{
          display: "flex",
          gap: "32px",
          padding: "100px",
          justifyContent: "center",
        }}
      >
        {placements.map((placement) => (
          <Tooltip key={placement} title={placement} placement={placement}>
            <Button text={placement} />
          </Tooltip>
        ))}
      </div>
    );
  },
};

// ============================
// Rich Content Example
// ============================
export const RichContentExample: Story = {
  name: "Rich Content",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Tooltip `title` prop accepts ReactNode, allowing for rich content.",
      },
      source: {
        language: "tsx",
        code: `
<Tooltip
  title={
    <div>
      <strong>Title</strong>
      <p>Description text</p>
    </div>
  }
>
  <Button text="Rich tooltip" />
</Tooltip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: "32px", padding: "100px", justifyContent: "center" }}>
        <Tooltip title="Simple text tooltip">
          <Button text="Simple text" />
        </Tooltip>

        <Tooltip
          title={
            <div>
              <strong style={{ display: "block", marginBottom: "4px" }}>Rich Tooltip</strong>
              <span style={{ opacity: 0.8 }}>With multiple lines of content</span>
            </div>
          }
        >
          <Button text="Rich content" />
        </Tooltip>

        <Tooltip
          title={
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "18px" }}>💡</span>
              <span>Pro tip: Use keyboard shortcuts!</span>
            </div>
          }
        >
          <Button text="With emoji" />
        </Tooltip>
      </div>
    );
  },
};

// ============================
// Tab Focus Support Example
// ============================
export const TabFocusSupportExample: Story = {
  name: "TabFocus Support",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Tooltip also appears on focus for keyboard accessibility. Try tabbing to the button.",
      },
      source: {
        language: "tsx",
        code: `
<Tooltip title="Accessible tooltip">
  <Button text="Tab to focus" />
</Tooltip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: "32px", padding: "100px", justifyContent: "center" }}>
        <Tooltip title="Appears on focus too!">
          <Button text="Tab to focus me" />
        </Tooltip>

        <Tooltip title="Keyboard accessible">
          <Button text="Or me" />
        </Tooltip>
      </div>
    );
  },
};
