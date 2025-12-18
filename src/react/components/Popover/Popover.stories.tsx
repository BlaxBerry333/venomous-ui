import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import { Space } from "@/react/components/Space";
import Popover from "./Popover";
import { PopoverProps } from "./Popover.types";

const placements: PopoverProps["placement"][] = [
  "top-start",
  "top",
  "top-end",
  "left-start",
  "left",
  "left-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
];

const meta = {
  title: "React/Components/<Popover>",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      description: "Trigger element that activates the popover (click to toggle).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    placement: {
      description: "Position of the popover relative to the trigger.",
      table: {
        type: { summary: "Placement" },
        defaultValue: { summary: '"bottom"' },
      },
      control: { type: "radio" },
      options: placements,
    },
    offset: {
      description: "Distance between the popover and the trigger in pixels.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: { type: "number" },
    },
    onOpen: {
      description: "Callback when popover opens.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    onClose: {
      description: "Callback when popover closes.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    children: {
      description: "Content to render in the popover.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    className: {
      description: "Additional CSS class names.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Floating content triggered by click</Subtitle>

          <Markdown>
            {`
\`<Popover>\` displays floating content relative to a trigger element. It is ideal for interactive content like menus, forms, dropdowns or any content that requires user interaction.<br />
Only supports click to trigger.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import React from "react";
import { Popover, Button } from "venomous-ui/react/components";

function PopoverExample() {
  return (
    <Popover
      trigger={<Button text="Click me" />}
      placement="bottom"
    >
      <p>Popover content</p>
    </Popover>
  );
}
            `.trim()}
          />

          <Heading>Examples</Heading>
          <Subtitle>{PlacementsExample.name}</Subtitle>
          <Description of={PlacementsExample} />
          <Canvas of={PlacementsExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    trigger: undefined,
    placement: "bottom",
    offset: 8,
    onOpen: undefined,
    onClose: undefined,
    className: undefined,
    children: undefined,
  },
  render: function RenderStory(args) {
    return (
      <div style={{ padding: "100px", display: "flex", justifyContent: "center" }}>
        <Popover
          trigger={<Button text="Click me" />}
          placement={args.placement}
          offset={args.offset}
          className={args.className}
        >
          <p>This is the popover content.</p>
        </Popover>
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
          "Popover supports 12 different placement options. The popover will automatically flip if it overflows the viewport.",
      },
      source: {
        language: "tsx",
        code: `
<Popover placement="top" trigger={<Button text="Top" />}>Content</Popover>
<Popover placement="bottom" trigger={<Button text="Bottom" />}>Content</Popover>
<Popover placement="left" trigger={<Button text="Left" />}>Content</Popover>
<Popover placement="right" trigger={<Button text="Right" />}>Content</Popover>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Space.Grid columns={3} spacing={4}>
        {placements.map((placement) => (
          <Popover
            key={placement}
            trigger={<Button text={placement} style={{ width: "100%" }} />}
            placement={placement}
          >
            <p>{placement}</p>
          </Popover>
        ))}
      </Space.Grid>
    );
  },
};
