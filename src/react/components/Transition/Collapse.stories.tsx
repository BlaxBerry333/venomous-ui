import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon, List } from "@/react/components";

import { Transition } from "./index";

const meta = {
  title: "React/Components/<Transition.Collapse>",
  component: Transition.Collapse,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Render as a different HTML element.",
      table: {
        type: { summary: "React.ElementType" },
        defaultValue: { summary: '"div"' },
      },
      control: false,
    },
    open: {
      description: "Whether the collapse section is expanded.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "Content to show when expanded.",
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
          <Subtitle>Transition Collapse Component</Subtitle>

          <Markdown>
            {`
Pure collapse animation container with smooth CSS Grid-based height transition.<br />
Renders as \`<div>\` by default. Use \`as\` prop to change element type (e.g., \`as="li"\` for use inside lists).<br />
Works with any content - cards, lists, forms, etc.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { useState } from "react";
import { ThemeProvider, Transition } from "venomous-ui/react/components";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* Basic collapse */}
      <button onClick={() => setOpen(!open)}>
        {open ? "Close" : "Open"}
      </button>
      <Transition.Collapse open={open}>
        <div style={{ padding: 16, background: "#f5f5f5" }}>
          Collapsible content here
        </div>
      </Transition.Collapse>

      {/* As list item (for nested menus) */}
      <ul>
        <li>Parent Item</li>
        <Transition.Collapse as="li" open={open}>
          <ul>
            <li>Child Item 1</li>
            <li>Child Item 2</li>
          </ul>
        </Transition.Collapse>
      </ul>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{WithListExample.name}</Subtitle>
          <Description of={WithListExample} />
          <Canvas of={WithListExample} />

          <Subtitle>{FAQExample.name}</Subtitle>
          <Description of={FAQExample} />
          <Canvas of={FAQExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Transition.Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    open: true,
  },
  render: function RenderPlayground(args) {
    const [open, setOpen] = React.useState(args.open);

    // Sync with storybook controls
    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <div style={{ maxWidth: 400 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: 4,
            border: "1px solid #ccc",
            marginBottom: 8,
          }}
        >
          {open ? "Close" : "Open"}
        </button>
        <Transition.Collapse {...args} open={open}>
          <div style={{ padding: 16, background: "#f5f5f5", borderRadius: 4 }}>
            This content smoothly animates in and out using CSS Grid transitions.
          </div>
        </Transition.Collapse>
      </div>
    );
  },
};

// ============================
// Basic Example
// ============================
export const BasicExample: Story = {
  name: "Basic",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Simple collapsible section with a toggle button.",
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

<button onClick={() => setOpen(!open)}>
  {open ? 'Close' : 'Open'}
</button>
<Transition.Collapse open={open}>
  <div style={{ padding: 16, background: '#f5f5f5', marginTop: 8 }}>
    This content smoothly animates in and out.
  </div>
</Transition.Collapse>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [open, setOpen] = React.useState(true);

    return (
      <div style={{ maxWidth: 400 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        >
          {open ? "Close" : "Open"}
        </button>
        <Transition.Collapse open={open}>
          <div style={{ padding: 16, background: "#f5f5f5", marginTop: 8, borderRadius: 4 }}>
            This content smoothly animates in and out using CSS Grid transitions.
          </div>
        </Transition.Collapse>
      </div>
    );
  },
};

// ============================
// With List Example
// ============================
export const WithListExample: Story = {
  name: "With List",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: 'Use `as="li"` to render as a list item for nested list menus.',
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

<List spacing="small">
  <List.Item onClick={() => setOpen(!open)}>
    <List.ItemText primary="Click to toggle" />
  </List.Item>
  <Transition.Collapse as="li" open={open}>
    <List spacing="small">
      <List.Item style={{ paddingLeft: 32 }}>
        <List.ItemText primary="Child 1" />
      </List.Item>
      <List.Item style={{ paddingLeft: 32 }}>
        <List.ItemText primary="Child 2" />
      </List.Item>
    </List>
  </Transition.Collapse>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [open, setOpen] = React.useState(true);

    return (
      <List spacing="small" style={{ maxWidth: 300 }}>
        <List.Item
          onClick={() => setOpen(!open)}
          EndElement={
            <Icon
              name="mdi:chevron-down"
              width={20}
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          }
        >
          <List.ItemText primary="Click to toggle" />
        </List.Item>
        <Transition.Collapse as="li" open={open}>
          <List spacing="small">
            <List.Item style={{ paddingLeft: 32 }} onClick={() => {}}>
              <List.ItemText primary="Item 1" />
            </List.Item>
            <List.Item style={{ paddingLeft: 32 }} onClick={() => {}}>
              <List.ItemText primary="Item 2" />
            </List.Item>
            <List.Item style={{ paddingLeft: 32 }} onClick={() => {}}>
              <List.ItemText primary="Item 3" />
            </List.Item>
          </List>
        </Transition.Collapse>
      </List>
    );
  },
};

// ============================
// FAQ Example
// ============================
export const FAQExample: Story = {
  name: "FAQ Accordion",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Multiple collapsible sections forming an accordion-style FAQ.",
      },
      source: {
        code: `
const [openIndex, setOpenIndex] = useState<number | null>(0);

const faqs = [
  { q: "What is Transition.Collapse?", a: "A smooth height animation component." },
  { q: "How does it work?", a: "It uses CSS Grid transitions." },
];

{faqs.map((faq, i) => (
  <div key={i}>
    <button onClick={() => setOpenIndex(openIndex === i ? null : i)}>
      {faq.q}
    </button>
    <Transition.Collapse open={openIndex === i}>
      <p>{faq.a}</p>
    </Transition.Collapse>
  </div>
))}
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const faqs = [
      {
        q: "What is Transition.Collapse?",
        a: "A pure CSS-based collapse animation component that provides smooth height transitions without JavaScript calculations.",
      },
      {
        q: "How does it work?",
        a: "It uses CSS Grid's grid-template-rows property to animate from 0fr to 1fr, providing a smooth height transition.",
      },
      {
        q: "Can I use it with any content?",
        a: "Yes! It works with any content - text, images, lists, forms, or any other React components.",
      },
    ];

    return (
      <div style={{ maxWidth: 500 }}>
        {faqs.map((faq, i) => (
          <div key={faq.q} style={{ borderBottom: "1px solid #eee" }}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: "100%",
                padding: "16px 0",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {faq.q}
              <Icon
                name="mdi:chevron-down"
                width={20}
                style={{
                  transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
            <Transition.Collapse open={openIndex === i}>
              <p style={{ margin: 0, paddingBottom: 16, color: "#666" }}>{faq.a}</p>
            </Transition.Collapse>
          </div>
        ))}
      </div>
    );
  },
};
