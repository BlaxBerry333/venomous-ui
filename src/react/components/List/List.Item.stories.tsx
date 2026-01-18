import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, Icon } from "@/react/components";

import { List } from "./index";

const meta = {
  title: "React/Components/<List.Item>",
  component: List.Item,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Render as a different HTML element.",
      table: {
        type: { summary: "React.ElementType" },
        defaultValue: { summary: '"li"' },
      },
      control: false,
    },
    selected: {
      description: "Whether the item is selected.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the item is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    onClick: {
      description: "Click handler. Makes the item interactive when provided.",
      table: {
        type: { summary: "(event: React.MouseEvent) => void" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    StartElement: {
      description: "Element to display at the start of the item (icon, avatar, etc.).",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    EndElement: {
      description: "Element to display at the end of the item (icon, action, etc.).",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "Item content (typically List.ItemText).",
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
          <Subtitle>List Item Component</Subtitle>

          <Markdown>
            {`
Individual list item with optional start/end elements, selection, and disabled states.<br />
Must be used within \`<List>\` component.
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
      {/* Basic interactive list */}
      <List>
        <List.Item
          selected={selected === "home"}
          onClick={() => setSelected("home")}
        >
          <List.ItemText primary="Home" secondary="Go to homepage" />
        </List.Item>
        <List.Item
          selected={selected === "profile"}
          onClick={() => setSelected("profile")}
        >
          <List.ItemText primary="Profile" />
        </List.Item>
        <List.Item disabled onClick={() => {}}>
          <List.ItemText primary="Disabled Item" />
        </List.Item>
      </List>

      {/* With icons */}
      <List>
        <List.Item
          onClick={() => {}}
          StartElement={<Icon name="mdi:home" width={24} />}
          EndElement={<Icon name="mdi:chevron-right" width={20} />}
        >
          <List.ItemText primary="Home" secondary="Go to homepage" />
        </List.Item>
      </List>

      {/* With avatar */}
      <List>
        <List.Item
          onClick={() => {}}
          StartElement={<Avatar size="medium">JD</Avatar>}
        >
          <List.ItemText primary="John Doe" secondary="john@example.com" />
        </List.Item>
      </List>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{InteractiveExample.name}</Subtitle>
          <Description of={InteractiveExample} />
          <Canvas of={InteractiveExample} />

          <Subtitle>{WithIconsExample.name}</Subtitle>
          <Description of={WithIconsExample} />
          <Canvas of={WithIconsExample} />

          <Subtitle>{WithAvatarsExample.name}</Subtitle>
          <Description of={WithAvatarsExample} />
          <Canvas of={WithAvatarsExample} />

          <Subtitle>{NestedExample.name}</Subtitle>
          <Description of={NestedExample} />
          <Canvas of={NestedExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof List.Item>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    selected: false,
    disabled: false,
  },
  render: (args) => (
    <List style={{ maxWidth: 360 }}>
      <List.Item {...args} onClick={() => {}}>
        <List.ItemText primary="List Item" secondary="Click to interact" />
      </List.Item>
    </List>
  ),
};

// ============================
// Interactive Example
// ============================
export const InteractiveExample: Story = {
  name: "Interactive",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Add `onClick` to make items interactive. Use `selected` and `disabled` props to control states.",
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
  name: "With Icons",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `StartElement` and `EndElement` props to add icons.",
      },
      source: {
        code: `
<List.Item
  StartElement={<Icon name="mdi:home" />}
  EndElement={<Icon name="mdi:chevron-right" />}
  onClick={() => {}}
>
  <List.ItemText primary="Home" />
</List.Item>
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
      </List>
    );
  },
};

// ============================
// With Avatars Example
// ============================
export const WithAvatarsExample: Story = {
  name: "With Avatars",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `StartElement` with Avatar component for contact lists.",
      },
      source: {
        code: `
<List.Item
  StartElement={<Avatar>JD</Avatar>}
  EndElement={<Icon name="mdi:message-outline" />}
  onClick={() => {}}
>
  <List.ItemText primary="John Doe" secondary="john@example.com" />
</List.Item>
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
// Nested Example
// ============================
export const NestedExample: Story = {
  name: "Nested (with style)",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `style={{ paddingLeft: ... }}` to add left padding for nested items.",
      },
      source: {
        code: `
<List>
  <List.Item><List.ItemText primary="Parent" /></List.Item>
  <List.Item style={{ paddingLeft: 32 }}><List.ItemText primary="Child (32px)" /></List.Item>
  <List.Item style={{ paddingLeft: 56 }}><List.ItemText primary="Grandchild (56px)" /></List.Item>
  <List.Item style={{ paddingLeft: 80 }}><List.ItemText primary="Great-grandchild (80px)" /></List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <List style={{ maxWidth: 360 }}>
        <List.Item onClick={() => {}}>
          <List.ItemText primary="Parent Item" />
        </List.Item>
        <List.Item style={{ paddingLeft: 32 }} onClick={() => {}}>
          <List.ItemText primary="Child" secondary="32px padding" />
        </List.Item>
        <List.Item style={{ paddingLeft: 56 }} onClick={() => {}}>
          <List.ItemText primary="Grandchild" secondary="56px padding" />
        </List.Item>
        <List.Item style={{ paddingLeft: 80 }} onClick={() => {}}>
          <List.ItemText primary="Great-grandchild" secondary="80px padding" />
        </List.Item>
      </List>
    );
  },
};
