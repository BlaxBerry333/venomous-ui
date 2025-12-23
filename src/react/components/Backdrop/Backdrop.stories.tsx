import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import { Card } from "@/react/components/Card";
import { CssReset } from "@/react/components/CssReset";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Backdrop from "./Backdrop";

const meta = {
  title: "React/Components/<Backdrop>",
  component: Backdrop,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <CssReset />
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    isOpen: {
      description: "Whether the backdrop is visible (controlled mode).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    onClick: {
      description:
        "Callback fired when the backdrop is clicked. Note: Clicking on children does not trigger this callback.",
      table: {
        type: { summary: "MouseEventHandler<HTMLDivElement>" },
      },
      control: false,
    },
    children: {
      description: "Content to render inside the backdrop (e.g., modal content).",
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
    style: {
      description: "Custom styles, supports object or theme callback function.",
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
          <Subtitle>Overlay backdrop for modals, drawers, and dialogs</Subtitle>

          <Markdown>
            {`
\`<Backdrop>\` provides a semi-transparent overlay that sits behind modal content.<br />
It's typically used as a building block for \`<Modal>\`、\`<Drawer>\`、 and \`<Dialog>\` components..<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import React from "react";
import { Backdrop, Button, Card } from "venomous-ui/react/components";

function ModalExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} text="Open Modal" />

      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Card style={{ maxWidth: "400px" }}>
          <Button onClick={() => setIsOpen(false)} text="Close" />
        </Card>
      </Backdrop>
    </>
  );
}
            `.trim()}
          />

          <Heading>Examples</Heading>

          <Subtitle>{CustomStyleExample.name}</Subtitle>
          <Description of={CustomStyleExample} />
          <Canvas of={CustomStyleExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    isOpen: false,
    onClick: undefined,
    style: undefined,
    className: undefined,
    children: undefined,
  },
  render: function RenderStory() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} text="Open Backdrop" />

        <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <Card
            style={(theme) => ({
              padding: theme.spacing(6),
              maxWidth: "400px",
              textAlign: "center",
            })}
          >
            <h3 style={{ margin: "0 0 16px" }}>Modal Content</h3>
            <p style={{ margin: "0 0 16px", color: "#737373" }}>
              Click the backdrop (outside this card) to close, or use the button below.
            </p>
            <Button onClick={() => setIsOpen(false)} text="Close" />
          </Card>
        </Backdrop>

        <p style={{ marginTop: "16px", color: "#737373", fontSize: "14px" }}>
          The backdrop renders through Portal to document.body
        </p>
      </div>
    );
  },
};

// ============================
// Custom Style Example
// ============================
export const CustomStyleExample: Story = {
  name: "Custom Style Example",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Backdrop supports theme callback function for custom styling.",
      },
      source: {
        language: "tsx",
        code: `
<Backdrop
  isOpen={isOpen}
  onClick={handleClose}
  style={(theme) => ({
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(4px)",
  })}
>
  <Card>Modal content</Card>
</Backdrop>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} text="Open with Custom Style" />

        <Backdrop
          isOpen={isOpen}
          onClick={() => setIsOpen(false)}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Card
            style={{
              padding: "24px",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: "0 0 16px" }}>Blur Effect</h3>
            <p style={{ margin: "0 0 16px", color: "#737373" }}>Custom backdrop with darker overlay and blur effect.</p>
            <Button onClick={() => setIsOpen(false)} text="Close" />
          </Card>
        </Backdrop>
      </div>
    );
  },
};
