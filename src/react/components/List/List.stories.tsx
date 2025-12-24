import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, Icon } from "@/react/components";

import { List } from "./index";

const meta = {
  title: "React/Components/<List>",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Render as a different HTML element.",
      table: {
        type: { summary: "React.ElementType" },
        defaultValue: { summary: '"ul"' },
      },
      control: false,
    },
    spacing: {
      description: "Spacing between list items.",
      type: { name: "string" },
      table: {
        type: { summary: '"none" | "small" | "medium" | "large"' },
        defaultValue: { summary: '"none"' },
      },
      control: { type: "radio" },
      options: ["none", "small", "medium", "large"],
    },
    divider: {
      description: "Show dividers between items.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "List content (List.Item components).",
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
          <Subtitle>Styled List Component</Subtitle>

          <Markdown>
            {`
A compound component for creating lists, including \`<List>\`, \`<List.Item>\`, \`<List.ItemText>\`.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { useState } from "react";
import { ThemeProvider, List, Icon, Avatar } from "venomous-ui/react/components";

function App() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ThemeProvider>
      {/* Basic list */}
      <List>
        <List.Item>
          <List.ItemText primary="Item 1" secondary="Description" />
        </List.Item>
        <List.Item>
          <List.ItemText primary="Item 2" secondary="Description" />
        </List.Item>
      </List>

      {/* Interactive list with selection */}
      <List divider>
        <List.Item
          selected={selected === "1"}
          onClick={() => setSelected("1")}
          StartElement={<Icon name="mdi:home" />}
        >
          <List.ItemText primary="Home" />
        </List.Item>
        <List.Item
          selected={selected === "2"}
          onClick={() => setSelected("2")}
          StartElement={<Icon name="mdi:cog" />}
        >
          <List.ItemText primary="Settings" />
        </List.Item>
      </List>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{WithDividersExample.name}</Subtitle>
          <Description of={WithDividersExample} />
          <Canvas of={WithDividersExample} />

          <Subtitle>{SpacingExample.name}</Subtitle>
          <Description of={SpacingExample} />
          <Canvas of={SpacingExample} />

          <Subtitle>{InteractiveExample.name}</Subtitle>
          <Description of={InteractiveExample} />
          <Canvas of={InteractiveExample} />

          <Subtitle>{WithIconsExample.name}</Subtitle>
          <Description of={WithIconsExample} />
          <Canvas of={WithIconsExample} />

          <Subtitle>{WithAvatarsExample.name}</Subtitle>
          <Description of={WithAvatarsExample} />
          <Canvas of={WithAvatarsExample} />

          <Subtitle>{EllipsisExample.name}</Subtitle>
          <Description of={EllipsisExample} />
          <Canvas of={EllipsisExample} />

          <Subtitle>{PolymorphicExample.name}</Subtitle>
          <Description of={PolymorphicExample} />
          <Canvas of={PolymorphicExample} />

          <Subtitle>{VirtualListDocsExample.name}</Subtitle>
          <Description of={VirtualListDocsExample} />
          <Source language="tsx" dark code={VirtualListDocsExample.parameters?.docs?.source?.code} />

          <Heading>Props</Heading>

          <Subtitle>{"<List>"}</Subtitle>
          <ArgTypes />

          <Subtitle>{"<List.Item>"}</Subtitle>
          <ArgTypes of={List.Item} />

          <Subtitle>{"<List.ItemText>"}</Subtitle>
          <ArgTypes of={List.ItemText} />
        </>
      ),
    },
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    spacing: "none",
    divider: false,
  },
  render: (args) => (
    <List {...args} style={{ maxWidth: 360 }}>
      <List.Item>
        <List.ItemText primary="Inbox" secondary="You have 4 new messages" />
      </List.Item>
      <List.Item>
        <List.ItemText primary="Sent" secondary="View sent messages" />
      </List.Item>
      <List.Item>
        <List.ItemText primary="Drafts" secondary="2 drafts saved" />
      </List.Item>
    </List>
  ),
};

// ============================
// Basic Example
// ============================
export const BasicExample: Story = {
  name: "Basic Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "A simple list with primary and secondary text.",
      },
      source: {
        code: `
<List>
  <List.Item>
    <List.ItemText primary="Inbox" secondary="You have 4 new messages" />
  </List.Item>
  <List.Item>
    <List.ItemText primary="Sent" secondary="View sent messages" />
  </List.Item>
  <List.Item>
    <List.ItemText primary="Drafts" secondary="2 drafts saved" />
  </List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <List style={{ maxWidth: 360 }}>
        <List.Item>
          <List.ItemText primary="Inbox" secondary="You have 4 new messages" />
        </List.Item>
        <List.Item>
          <List.ItemText primary="Sent" secondary="View sent messages" />
        </List.Item>
        <List.Item>
          <List.ItemText primary="Drafts" secondary="2 drafts saved" />
        </List.Item>
      </List>
    );
  },
};

// ============================
// With Dividers Example
// ============================
export const WithDividersExample: Story = {
  name: "With Dividers Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `divider` prop to add visual separators between items.",
      },
      source: {
        code: `
<List divider>
  <List.Item>
    <List.ItemText primary="Item 1" />
  </List.Item>
  <List.Item>
    <List.ItemText primary="Item 2" />
  </List.Item>
  <List.Item>
    <List.ItemText primary="Item 3" />
  </List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <List divider style={{ maxWidth: 360 }}>
        <List.Item>
          <List.ItemText primary="Item 1" secondary="Description for item 1" />
        </List.Item>
        <List.Item>
          <List.ItemText primary="Item 2" secondary="Description for item 2" />
        </List.Item>
        <List.Item>
          <List.ItemText primary="Item 3" secondary="Description for item 3" />
        </List.Item>
      </List>
    );
  },
};

// ============================
// Spacing Example
// ============================
export const SpacingExample: Story = {
  name: "Spacing Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Four spacing options: `none` (default), `small`, `medium`, `large`.",
      },
      source: {
        code: `
<List spacing="none">...</List>
<List spacing="small">...</List>
<List spacing="medium">...</List>
<List spacing="large">...</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>None (default)</h4>
          <List spacing="none" style={{ maxWidth: 200, backgroundColor: "#f0f4f8" }}>
            <List.Item>
              <List.ItemText primary="Item 1" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 2" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 3" style={{ color: "#000000" }} />
            </List.Item>
          </List>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Small</h4>
          <List spacing="small" style={{ maxWidth: 200, backgroundColor: "#e8f5e9" }}>
            <List.Item>
              <List.ItemText primary="Item 1" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 2" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 3" style={{ color: "#000000" }} />
            </List.Item>
          </List>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Medium</h4>
          <List spacing="medium" style={{ maxWidth: 200, backgroundColor: "#fff3e0" }}>
            <List.Item>
              <List.ItemText primary="Item 1" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 2" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 3" style={{ color: "#000000" }} />
            </List.Item>
          </List>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Large</h4>
          <List spacing="large" style={{ maxWidth: 200, backgroundColor: "#e3f2fd" }}>
            <List.Item>
              <List.ItemText primary="Item 1" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 2" style={{ color: "#000000" }} />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Item 3" style={{ color: "#000000" }} />
            </List.Item>
          </List>
        </div>
      </div>
    );
  },
};

// ============================
// Interactive Example
// ============================
export const InteractiveExample: Story = {
  name: "Interactive Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Add `onClick` to items to make them interactive. Use `selected` and `disabled` props to control item states. Selection is managed externally with `useState`.",
      },
      source: {
        code: `
const [selected, setSelected] = useState<string | null>(null);

<List divider>
  <List.Item
    selected={selected === "inbox"}
    onClick={() => setSelected("inbox")}
  >
    <List.ItemText primary="Inbox" />
  </List.Item>
  <List.Item
    selected={selected === "sent"}
    onClick={() => setSelected("sent")}
  >
    <List.ItemText primary="Sent" />
  </List.Item>
  <List.Item disabled onClick={() => setSelected("trash")}>
    <List.ItemText primary="Trash (disabled)" />
  </List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [selected, setSelected] = React.useState<string | null>("inbox");

    return (
      <List divider style={{ maxWidth: 360 }}>
        <List.Item selected={selected === "inbox"} onClick={() => setSelected("inbox")}>
          <List.ItemText primary="Inbox" secondary="4 new messages" />
        </List.Item>
        <List.Item selected={selected === "sent"} onClick={() => setSelected("sent")}>
          <List.ItemText primary="Sent" secondary="View sent messages" />
        </List.Item>
        <List.Item selected={selected === "drafts"} onClick={() => setSelected("drafts")}>
          <List.ItemText primary="Drafts" secondary="2 drafts saved" />
        </List.Item>
        <List.Item disabled onClick={() => setSelected("trash")}>
          <List.ItemText primary="Trash" secondary="Disabled item" />
        </List.Item>
      </List>
    );
  },
};

// ============================
// With Icons Example
// ============================
export const WithIconsExample: Story = {
  name: "With Icons Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `StartElement` and `EndElement` props to add icons or other elements.",
      },
      source: {
        code: `
<List divider>
  <List.Item
    StartElement={<Icon name="mdi:home" />}
    EndElement={<Icon name="mdi:chevron-right" />}
    onClick={() => console.log("Home")}
  >
    <List.ItemText primary="Home" />
  </List.Item>
  <List.Item
    StartElement={<Icon name="mdi:cog" />}
    EndElement={<Icon name="mdi:chevron-right" />}
    onClick={() => console.log("Settings")}
  >
    <List.ItemText primary="Settings" />
  </List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [selected, setSelected] = React.useState<string | null>(null);

    return (
      <List divider style={{ maxWidth: 360 }}>
        <List.Item
          selected={selected === "home"}
          onClick={() => setSelected("home")}
          StartElement={<Icon name="mdi:home" width={24} />}
          EndElement={<Icon name="mdi:chevron-right" width={20} />}
        >
          <List.ItemText primary="Home" secondary="Go to homepage" />
        </List.Item>
        <List.Item
          selected={selected === "profile"}
          onClick={() => setSelected("profile")}
          StartElement={<Icon name="mdi:account" width={24} />}
          EndElement={<Icon name="mdi:chevron-right" width={20} />}
        >
          <List.ItemText primary="Profile" secondary="View your profile" />
        </List.Item>
        <List.Item
          selected={selected === "settings"}
          onClick={() => setSelected("settings")}
          StartElement={<Icon name="mdi:cog" width={24} />}
          EndElement={<Icon name="mdi:chevron-right" width={20} />}
        >
          <List.ItemText primary="Settings" secondary="App settings" />
        </List.Item>
        <List.Item
          selected={selected === "logout"}
          onClick={() => setSelected("logout")}
          StartElement={<Icon name="mdi:logout" width={24} />}
        >
          <List.ItemText primary="Logout" />
        </List.Item>
      </List>
    );
  },
};

// ============================
// With Avatars Example
// ============================
export const WithAvatarsExample: Story = {
  name: "With Avatars Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `StartElement` with Avatar component for contact lists or user lists.",
      },
      source: {
        code: `
<List divider>
  <List.Item
    StartElement={<Avatar src="https://..." alt="John Doe" />}
    onClick={() => console.log("John")}
  >
    <List.ItemText primary="John Doe" secondary="john@example.com" />
  </List.Item>
  <List.Item
    StartElement={<Avatar>JD</Avatar>}
    onClick={() => console.log("Jane")}
  >
    <List.ItemText primary="Jane Doe" secondary="jane@example.com" />
  </List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [selected, setSelected] = React.useState<string | null>(null);

    const contacts = [
      { id: "1", name: "John Doe", email: "john@example.com", avatar: "JD" },
      { id: "2", name: "Jane Smith", email: "jane@example.com", avatar: "JS" },
      { id: "3", name: "Bob Wilson", email: "bob@example.com", avatar: "BW" },
      { id: "4", name: "Alice Brown", email: "alice@example.com", avatar: "AB" },
    ];

    return (
      <List divider style={{ maxWidth: 360 }}>
        {contacts.map((contact) => (
          <List.Item
            key={contact.id}
            selected={selected === contact.id}
            onClick={() => setSelected(contact.id)}
            StartElement={<Avatar size="medium">{contact.avatar}</Avatar>}
            EndElement={<Icon name="mdi:message-outline" width={20} />}
          >
            <List.ItemText primary={contact.name} secondary={contact.email} />
          </List.Item>
        ))}
      </List>
    );
  },
};

// ============================
// Ellipsis Example
// ============================
export const EllipsisExample: Story = {
  name: "Ellipsis Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `ellipsis` prop on `<List.ItemText>` to truncate text. Set `ellipsis={1}` for single-line ellipsis, or `ellipsis={2}` for multi-line.",
      },
      source: {
        code: `
<List divider>
  <List.Item>
    <List.ItemText
      primary="Very long title that will be truncated"
      secondary="Very long description that will be truncated to show ellipsis"
      ellipsis={1}
    />
  </List.Item>
  <List.Item>
    <List.ItemText
      primary="Multi-line truncation"
      secondary="This text allows up to 2 lines before being truncated with ellipsis"
      ellipsis={2}
    />
  </List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <List divider style={{ maxWidth: 200 }}>
        <List.Item>
          <List.ItemText
            primary="This is a very long title that should be truncated with ellipsis"
            secondary="This is a very long description that should also be truncated with ellipsis after a single line"
            ellipsis={1}
          />
        </List.Item>
        <List.Item>
          <List.ItemText
            primary="Multi-line Title Example"
            secondary="This is a very long description that should also be truncated with ellipsis after a single line"
            ellipsis={2}
          />
        </List.Item>
        <List.Item>
          <List.ItemText
            primary="No ellipsis (default)"
            secondary="This is a very long description that should also be truncated with ellipsis after a single line"
          />
        </List.Item>
      </List>
    );
  },
};

// ============================
// Polymorphic Example
// ============================
export const PolymorphicExample: Story = {
  name: "Polymorphic Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `as` prop to render List as different elements. Common patterns include `ol` for numbered lists or `div` for semantic flexibility.",
      },
      source: {
        code: `
{/* Ordered list */}
<List as="ol">
  <List.Item>
    <List.ItemText primary="First item" />
  </List.Item>
  <List.Item>
    <List.ItemText primary="Second item" />
  </List.Item>
</List>

{/* Navigation list */}
<List as="nav">
  <List.Item as="a" href="/home">
    <List.ItemText primary="Home" />
  </List.Item>
  <List.Item as="a" href="/about">
    <List.ItemText primary="About" />
  </List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>As Ordered List (ol)</h4>
          <List as="ol" style={{ maxWidth: 200 }}>
            <List.Item>
              <List.ItemText primary="First item" />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Second item" />
            </List.Item>
            <List.Item>
              <List.ItemText primary="Third item" />
            </List.Item>
          </List>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>As Div (for custom semantics)</h4>
          <List as="div" divider style={{ maxWidth: 200 }}>
            <List.Item as="div">
              <List.ItemText primary="Item 1" />
            </List.Item>
            <List.Item as="div">
              <List.ItemText primary="Item 2" />
            </List.Item>
            <List.Item as="div">
              <List.ItemText primary="Item 3" />
            </List.Item>
          </List>
        </div>
      </div>
    );
  },
};

// ============================
// Virtual List Docs Example
// ============================
export const VirtualListDocsExample: Story = {
  name: "Virtual List Integration Example",
  tags: ["!dev"],
  render: () => <></>,
  parameters: {
    docs: {
      description: {
        story: `
For lists with hundreds or thousands of items, we recommend using a virtual rendering library:

- [@tanstack/react-virtual](https://tanstack.com/virtual/latest) : Lightweight and flexible
- [react-window](https://github.com/bvaughn/react-window) : Popular and well-maintained
        `,
      },
      source: {
        code: `"use client";

import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { List, Avatar } from 'venomous-ui/react/components';

// This approach provides smooth scrolling performance even with 10,000+ items.
function VirtualContactList({ contacts }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: contacts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72, // Approximate item height
    overscan: 5,
  });

  return (
    <div ref={parentRef} style={{ height: 400, overflow: 'auto' }}>
      <List
        as="div"
        style={{
          height: virtualizer.getTotalSize(),
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const contact = contacts[virtualItem.index];
          return (
            <List.Item
              key={contact.id}
              as="div"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: virtualItem.size,
                transform: \`translateY(\${virtualItem.start}px)\`,
              }}
              StartElement={<Avatar>{contact.initials}</Avatar>}
              onClick={() => handleSelect(contact.id)}
            >
              <List.ItemText
                primary={contact.name}
                secondary={contact.email}
              />
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}`.trim(),
      },
    },
  },
};
