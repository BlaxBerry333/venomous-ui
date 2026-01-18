import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button, Card, Icon } from "@/react/components";

import { Transition } from "./index";

const meta = {
  title: "React/Components/<Transition.Fade>",
  component: Transition.Fade,
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
      description: "Whether the content is visible.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "Content to fade in/out.",
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
          <Subtitle>Transition Fade Component</Subtitle>

          <Markdown>
            {`
Pure fade animation container with smooth opacity transition.<br />
Renders as \`<div>\` by default. Use \`as\` prop to change element type.<br />
Ideal for modals, tooltips, notifications, and any content that needs to fade in/out.
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
      {/* Basic fade */}
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"}
      </button>
      <Transition.Fade open={open}>
        <div style={{ padding: 16, background: "#f5f5f5" }}>
          This content fades in and out smoothly.
        </div>
      </Transition.Fade>

      {/* As span (inline element) */}
      <p>
        Status:
        <Transition.Fade as="span" open={open}>
          <span style={{ color: "green" }}> Active</span>
        </Transition.Fade>
      </p>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{NotificationExample.name}</Subtitle>
          <Description of={NotificationExample} />
          <Canvas of={NotificationExample} />

          <Subtitle>{ImageGalleryExample.name}</Subtitle>
          <Description of={ImageGalleryExample} />
          <Canvas of={ImageGalleryExample} />

          <Subtitle>{OverlayExample.name}</Subtitle>
          <Description of={OverlayExample} />
          <Canvas of={OverlayExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Transition.Fade>;

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
            marginBottom: 16,
          }}
        >
          {open ? "Hide" : "Show"}
        </button>
        <Transition.Fade {...args} open={open}>
          <div style={{ padding: 16, background: "#f5f5f5", borderRadius: 4 }}>
            This content smoothly fades in and out using CSS opacity transitions.
          </div>
        </Transition.Fade>
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
        story: "Simple fade in/out with a toggle button.",
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

<button onClick={() => setOpen(!open)}>
  {open ? 'Hide' : 'Show'}
</button>
<Transition.Fade open={open}>
  <div style={{ padding: 16, background: '#f5f5f5', marginTop: 8 }}>
    This content smoothly fades in and out.
  </div>
</Transition.Fade>
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
          {open ? "Hide" : "Show"}
        </button>
        <Transition.Fade open={open}>
          <div style={{ padding: 16, background: "#f5f5f5", marginTop: 16, borderRadius: 4 }}>
            This content smoothly fades in and out using CSS opacity transitions.
          </div>
        </Transition.Fade>
      </div>
    );
  },
};

// ============================
// Notification Example
// ============================
export const NotificationExample: Story = {
  name: "Notification Toast",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Fade animation for notification-style messages that appear and disappear.",
      },
      source: {
        code: `
const [show, setShow] = useState(false);

<Button onClick={() => setShow(true)}>Show Notification</Button>

<Transition.Fade open={show}>
  <Card style={{ position: 'fixed', top: 16, right: 16 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Icon name="mdi:check-circle" color="green" />
      <span>Operation successful!</span>
      <button onClick={() => setShow(false)}>×</button>
    </div>
  </Card>
</Transition.Fade>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
      if (show) {
        const timer = setTimeout(() => setShow(false), 3000);
        return () => clearTimeout(timer);
      }
    }, [show]);

    return (
      <div>
        <Button onClick={() => setShow(true)}>Show Notification</Button>

        <Transition.Fade open={show}>
          <Card
            style={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Icon name="mdi:check-circle" width={20} color="#22c55e" />
              <span>Operation completed successfully!</span>
              <button
                onClick={() => setShow(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 4,
                  marginLeft: 8,
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#666",
                }}
              >
                ×
              </button>
            </div>
          </Card>
        </Transition.Fade>
      </div>
    );
  },
};

// ============================
// Image Gallery Example
// ============================
export const ImageGalleryExample: Story = {
  name: "Image Gallery",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Click thumbnails to switch images with fade effect.",
      },
      source: {
        code: `
const [activeIndex, setActiveIndex] = useState(0);
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

<div style={{ position: 'relative', width: 400, height: 300 }}>
  {images.map((src, i) => (
    <Transition.Fade
      key={src}
      open={activeIndex === i}
      style={{ position: 'absolute', inset: 0 }}
    >
      <img src={src} alt="" style={{ width: '100%', height: '100%' }} />
    </Transition.Fade>
  ))}
</div>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const images = [
      { color: "#3b82f6", label: "Blue" },
      { color: "#22c55e", label: "Green" },
      { color: "#f59e0b", label: "Orange" },
      { color: "#8b5cf6", label: "Purple" },
    ];

    return (
      <div style={{ maxWidth: 400 }}>
        {/* Main display */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            borderRadius: 8,
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          {images.map((img, i) => (
            <Transition.Fade
              key={img.label}
              open={activeIndex === i}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: img.color,
                color: "white",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {img.label}
            </Transition.Fade>
          ))}
        </div>

        {/* Thumbnails */}
        <div style={{ display: "flex", gap: 8 }}>
          {images.map((img, i) => (
            <button
              key={img.label}
              onClick={() => setActiveIndex(i)}
              style={{
                width: 60,
                height: 40,
                backgroundColor: img.color,
                border: activeIndex === i ? "3px solid #000" : "3px solid transparent",
                borderRadius: 4,
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            />
          ))}
        </div>
      </div>
    );
  },
};

// ============================
// Overlay Example
// ============================
export const OverlayExample: Story = {
  name: "Content Overlay",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Hover to reveal an overlay with fade effect. Common pattern for image cards.",
      },
      source: {
        code: `
const [hover, setHover] = useState(false);

<div
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  style={{ position: 'relative' }}
>
  <img src="image.jpg" alt="" />
  <Transition.Fade
    open={hover}
    style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button>View Details</Button>
  </Transition.Fade>
</div>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [hover, setHover] = React.useState(false);

    return (
      <div style={{ maxWidth: 300 }}>
        <p style={{ marginBottom: 8, color: "#666", fontSize: 14 }}>Hover over the card below:</p>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            borderRadius: 8,
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Background image placeholder */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 18,
            }}
          >
            <Icon name="mdi:image" width={48} />
          </div>

          {/* Overlay */}
          <Transition.Fade
            open={hover}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <h3 style={{ color: "white", margin: 0 }}>Beautiful Scene</h3>
            <Button variant="outlined" style={{ borderColor: "white", color: "white" }}>
              View Details
            </Button>
          </Transition.Fade>
        </div>
      </div>
    );
  },
};
