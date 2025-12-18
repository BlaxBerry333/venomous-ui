import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import Drawer from "./Drawer";
import type { DrawerAnchor } from "./Drawer.types";

const headerOptions = {
  None: undefined,
  "Sample Header": <h3 style={{ marginBottom: 16 }}>Drawer Title</h3>,
};

const footerOptions = {
  None: undefined,
  "Sample Footer": <div style={{ marginTop: 16 }}>Drawer Footer</div>,
};

const meta = {
  title: "React/Components/<Drawer>",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      description: "Whether the drawer is visible (controlled mode).",
      type: { name: "boolean", required: true },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    onClose: {
      description: "Callback fired when the drawer requests to close.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    anchor: {
      description: "Which edge of the screen the drawer slides from.",
      table: {
        type: { summary: '"left" | "right" | "top" | "bottom"' },
        defaultValue: { summary: '"left"' },
      },
      control: { type: "radio" },
      options: ["left", "right", "top", "bottom"],
    },
    closeOnBackdropClick: {
      description: "Whether clicking the backdrop closes the drawer.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    closeOnEscape: {
      description: "Whether pressing Escape key closes the drawer.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    DrawerHeader: {
      description: "Content for the drawer header section.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: Object.keys(headerOptions),
      mapping: headerOptions,
    },
    DrawerFooter: {
      description: "Content for the drawer footer section.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: Object.keys(footerOptions),
      mapping: footerOptions,
    },
    children: {
      description: "Content to render in the drawer body.",
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
      description: "Custom styles. Use to set width (left/right) or height (top/bottom).",
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
          <Subtitle>Slide-in panel component</Subtitle>

          <Markdown>
            {`
\`<Drawer>\` provides a slide-in panel from any edge of the screen, built on top of \`<Portal>\` + \`<Backdrop>\` components.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import React from "react";
import { Drawer, Button } from "venomous-ui/react/components";

function DrawerExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} text="Open Drawer" />

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchor="left"
        DrawerHeader={<h3>Navigation</h3>}
      >
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </Drawer>
    </>
  );
}
            `.trim()}
          />

          <Heading>Examples</Heading>
          <Subtitle>{DifferentAnchorsExample.name}</Subtitle>
          <Description of={DifferentAnchorsExample} />
          <Canvas of={DifferentAnchorsExample} />

          <Subtitle>{CloseBehaviorExample.name}</Subtitle>
          <Description of={CloseBehaviorExample} />
          <Canvas of={CloseBehaviorExample} />

          <Subtitle>{ScrollableContentExample.name}</Subtitle>
          <Description of={ScrollableContentExample} />
          <Canvas of={ScrollableContentExample} />

          <Subtitle>{WithHeaderFooterExample.name}</Subtitle>
          <Description of={WithHeaderFooterExample} />
          <Canvas of={WithHeaderFooterExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    isOpen: false,
    onClose: undefined,
    anchor: "left",
    closeOnBackdropClick: true,
    closeOnEscape: true,
    style: undefined,
    className: undefined,
    DrawerHeader: "None",
    DrawerFooter: "None",
    children: undefined,
  },
  render: function RenderStory(args) {
    const [isOpen, setIsOpen] = React.useState(false);

    // Sync with args.isOpen for Storybook controls
    React.useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} text="Open Drawer" />

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          anchor={args.anchor}
          closeOnBackdropClick={args.closeOnBackdropClick}
          closeOnEscape={args.closeOnEscape}
          style={(_) => ({
            width: "300px",
            ...args.style,
          })}
          className={args.className}
          DrawerHeader={args.DrawerHeader}
          DrawerFooter={args.DrawerFooter}
        >
          <div style={{ height: "200vh" }}>
            This is the drawer body content. Click the backdrop, press Escape, or use the buttons to close.
          </div>
        </Drawer>
      </div>
    );
  },
};

// ============================
// Different Anchors Example
// ============================
export const DifferentAnchorsExample: Story = {
  name: "Different Anchors",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Drawer can slide in from any edge of the screen using the `anchor` prop.",
      },
      source: {
        language: "tsx",
        code: `
<Drawer isOpen={isOpen} anchor="left" onClose={handleClose}>
  Left drawer (default)
</Drawer>

<Drawer isOpen={isOpen} anchor="right" onClose={handleClose}>
  Right drawer
</Drawer>

<Drawer isOpen={isOpen} anchor="top" onClose={handleClose}>
  Top drawer
</Drawer>

<Drawer isOpen={isOpen} anchor="bottom" onClose={handleClose}>
  Bottom drawer
</Drawer>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [openDrawer, setOpenDrawer] = React.useState<DrawerAnchor | null>(null);

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {(["left", "right", "top", "bottom"] as const).map((anchor) => (
          <Button key={anchor} onClick={() => setOpenDrawer(anchor)} text={`${anchor} Drawer`} />
        ))}

        {openDrawer !== null && (
          <Drawer isOpen={openDrawer !== null} onClose={() => setOpenDrawer(null)} anchor={openDrawer}>
            <h3 style={{ margin: "0 0 16px 0" }}>{openDrawer.charAt(0).toUpperCase() + openDrawer.slice(1)} Drawer</h3>
            <p style={{ margin: 0 }}>This drawer slides in from the {openDrawer} edge.</p>
          </Drawer>
        )}
      </div>
    );
  },
};

// ============================
// Close Behavior Example
// ============================
export const CloseBehaviorExample: Story = {
  name: "Close Behavior Options",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Control how the drawer can be closed with `closeOnBackdropClick` and `closeOnEscape` props.",
      },
      source: {
        language: "tsx",
        code: `
// Disable backdrop click
<Drawer
  isOpen={isOpen}
  onClose={handleClose}
  closeOnBackdropClick={false}
>
  Can only close with Escape key or explicit action
</Drawer>

// Disable Escape key
<Drawer
  isOpen={isOpen}
  onClose={handleClose}
  closeOnEscape={false}
>
  Can only close with backdrop click or explicit action
</Drawer>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [openDrawer, setOpenDrawer] = React.useState<string | null>(null);

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={() => setOpenDrawer("noBackdrop")} text="No Backdrop Close" />
        <Button onClick={() => setOpenDrawer("noEscape")} text="No Escape Close" />
        <Button onClick={() => setOpenDrawer("buttonOnly")} text="Button Only Close" />

        <Drawer
          isOpen={openDrawer === "noBackdrop"}
          onClose={() => setOpenDrawer(null)}
          closeOnBackdropClick={false}
          DrawerHeader={<h3 style={{ margin: 0 }}>No Backdrop Close</h3>}
          DrawerFooter={<Button onClick={() => setOpenDrawer(null)} text="Close" />}
        >
          <p style={{ margin: "16px 0" }}>
            Clicking the backdrop will NOT close this drawer. Use Escape key or the button.
          </p>
        </Drawer>

        <Drawer
          isOpen={openDrawer === "noEscape"}
          onClose={() => setOpenDrawer(null)}
          closeOnEscape={false}
          DrawerHeader={<h3 style={{ margin: 0 }}>No Escape Close</h3>}
          DrawerFooter={<Button onClick={() => setOpenDrawer(null)} text="Close" />}
        >
          <p style={{ margin: "16px 0" }}>
            Pressing Escape will NOT close this drawer. Click backdrop or use the button.
          </p>
        </Drawer>

        <Drawer
          isOpen={openDrawer === "buttonOnly"}
          onClose={() => setOpenDrawer(null)}
          closeOnBackdropClick={false}
          closeOnEscape={false}
          DrawerHeader={<h3 style={{ margin: 0 }}>Button Only Close</h3>}
          DrawerFooter={<Button onClick={() => setOpenDrawer(null)} text="Close" />}
        >
          <p style={{ margin: "16px 0" }}>This drawer can only be closed by clicking the button.</p>
        </Drawer>
      </div>
    );
  },
};

// ============================
// Scrollable Content Example
// ============================
export const ScrollableContentExample: Story = {
  name: "Scrollable Content",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Drawer content scrolls when it exceeds the drawer height.",
      },
      source: {
        language: "tsx",
        code: `
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  DrawerHeader={<div style={{ height: "40px", backgroundColor: "red" }}>Drawer Header</div>}
  DrawerFooter={<div style={{ height: "40px", backgroundColor: "blue" }}>Drawer Footer</div>}
>
  <div style={{ height: "200vh", backgroundColor: "pink" }} />
</Drawer>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} text="Open Scrollable Drawer" />

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          DrawerHeader={<div style={{ height: "40px", backgroundColor: "red" }}>Drawer Header</div>}
          DrawerFooter={<div style={{ height: "40px", backgroundColor: "blue" }}>Drawer Footer</div>}
        >
          <div style={{ height: "200vh", backgroundColor: "pink" }} />
        </Drawer>
      </div>
    );
  },
};

// ============================
// With Header Footer Example
// ============================
export const WithHeaderFooterExample: Story = {
  name: "With Header & Footer",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Drawer supports optional header and footer sections via `DrawerHeader` and `DrawerFooter` props.",
      },
      source: {
        language: "tsx",
        code: `
<Drawer
  isOpen={isOpen}
  onClose={handleClose}
  DrawerHeader={<h3>Settings</h3>}
  DrawerFooter={
    <div style={{ display: "flex", gap: "8px" }}>
      <Button onClick={handleClose} text="Cancel" variant="outlined" />
      <Button onClick={handleSave} text="Save" />
    </div>
  }
>
  <form>
    {/* Form content */}
  </form>
</Drawer>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} text="Open Settings Drawer" />

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          anchor="right"
          style={{ width: "400px" }}
          DrawerHeader={
            <div style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "16px", marginBottom: "16px" }}>
              <h3 style={{ margin: 0 }}>Settings</h3>
            </div>
          }
          DrawerFooter={
            <div
              style={{
                borderTop: "1px solid #e5e5e5",
                paddingTop: "16px",
                marginTop: "16px",
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={() => setIsOpen(false)} text="Cancel" variant="outlined" />
              <Button onClick={() => setIsOpen(false)} text="Save" />
            </div>
          }
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontWeight: 500 }}>Username</span>
              <input
                type="text"
                defaultValue="john_doe"
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #e5e5e5" }}
              />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontWeight: 500 }}>Email</span>
              <input
                type="email"
                defaultValue="john@example.com"
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #e5e5e5" }}
              />
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input type="checkbox" defaultChecked />
              <span>Receive notifications</span>
            </label>
          </div>
        </Drawer>
      </div>
    );
  },
};

// ============================
// Custom Size Example
// ============================
export const CustomSizeExample: Story = {
  name: "Custom Size",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Use the `style` prop to customize drawer width (for left/right) or height (for top/bottom).",
      },
      source: {
        language: "tsx",
        code: `
// Custom width for left/right drawer
<Drawer
  isOpen={isOpen}
  anchor="right"
  style={{ width: "500px" }}
  onClose={handleClose}
>
  Wide right drawer
</Drawer>

// Custom height for top/bottom drawer
<Drawer
  isOpen={isOpen}
  anchor="bottom"
  style={{ height: "300px" }}
  onClose={handleClose}
>
  Short bottom drawer
</Drawer>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [openDrawer, setOpenDrawer] = React.useState<string | null>(null);

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={() => setOpenDrawer("wideRight")} text="Wide Right (500px)" />
        <Button onClick={() => setOpenDrawer("shortBottom")} text="Short Bottom (200px)" />

        <Drawer
          isOpen={openDrawer === "wideRight"}
          onClose={() => setOpenDrawer(null)}
          anchor="right"
          style={{ width: "500px" }}
        >
          <h3 style={{ margin: "0 0 16px 0" }}>Wide Right Drawer</h3>
          <p style={{ margin: 0 }}>This drawer has a custom width of 500px.</p>
        </Drawer>

        <Drawer
          isOpen={openDrawer === "shortBottom"}
          onClose={() => setOpenDrawer(null)}
          anchor="bottom"
          style={{ height: "200px" }}
        >
          <h3 style={{ margin: "0 0 16px 0" }}>Short Bottom Drawer</h3>
          <p style={{ margin: 0 }}>This drawer has a custom height of 200px.</p>
        </Drawer>
      </div>
    );
  },
};
