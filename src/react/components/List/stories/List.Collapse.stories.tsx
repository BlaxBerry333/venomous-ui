import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/react/components";

import { List } from "../index";

const meta = {
  title: "React/Components/<List.Collapse>/Collapse",
  component: List.Collapse,
  tags: ["autodocs"],
  argTypes: {
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
      description: "Content to show when expanded (typically nested List.Item components).",
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
          <Subtitle>List Collapse Component</Subtitle>

          <Markdown>
            {`
Collapsible container for nested list items with smooth CSS Grid-based height animation.<br />
Must be used within \`<List>\` component. Combine with \`depth\` prop on items for nested menus.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`
const [open, setOpen] = useState(false);

<List>
  <List.Item onClick={() => setOpen(!open)}>
    <List.ItemText primary="Parent" />
  </List.Item>
  <List.Collapse open={open}>
    <List.Item depth={1}>
      <List.ItemText primary="Child 1" />
    </List.Item>
    <List.Item depth={1}>
      <List.ItemText primary="Child 2" />
    </List.Item>
  </List.Collapse>
</List>
            `.trim()}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{NestedMenuExample.name}</Subtitle>
          <Description of={NestedMenuExample} />
          <Canvas of={NestedMenuExample} />

          <Subtitle>{VirtualListExample.name}</Subtitle>
          <Description of={VirtualListExample} />
          <Source language="tsx" dark code={VirtualListExample.parameters?.docs?.source?.code} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof List.Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Basic Example
// ============================
export const BasicExample: Story = {
  name: "Basic",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Simple collapsible section with `open` prop controlling visibility.",
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

<List>
  <List.Item onClick={() => setOpen(!open)}>
    <List.ItemText primary="Click to toggle" />
  </List.Item>
  <List.Collapse open={open}>
    <List.Item depth={1}>
      <List.ItemText primary="Hidden content" />
    </List.Item>
  </List.Collapse>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [open, setOpen] = React.useState(true);

    return (
      <List style={{ maxWidth: 300 }}>
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
        <List.Collapse open={open}>
          <List.Item depth={1} onClick={() => {}}>
            <List.ItemText primary="Item 1" />
          </List.Item>
          <List.Item depth={1} onClick={() => {}}>
            <List.ItemText primary="Item 2" />
          </List.Item>
          <List.Item depth={1} onClick={() => {}}>
            <List.ItemText primary="Item 3" />
          </List.Item>
        </List.Collapse>
      </List>
    );
  },
};

// ============================
// Nested Menu Example
// ============================
export const NestedMenuExample: Story = {
  name: "Nested Menu",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Multiple collapsible sections with icons, creating a sidebar menu pattern.",
      },
      source: {
        code: `
const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

const toggle = (key: string) => {
  setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
};

<List>
  <List.Item
    onClick={() => toggle("settings")}
    StartElement={<Icon name="mdi:cog" />}
    EndElement={<Icon name="mdi:chevron-down" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />}
  >
    <List.ItemText primary="Settings" />
  </List.Item>
  <List.Collapse open={openSections.settings}>
    <List.Item depth={1} StartElement={<Icon name="mdi:account" />}>
      <List.ItemText primary="Account" />
    </List.Item>
    <List.Item depth={1} StartElement={<Icon name="mdi:bell" />}>
      <List.ItemText primary="Notifications" />
    </List.Item>
  </List.Collapse>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
      inbox: true,
    });

    const toggle = (key: string) => {
      setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <List style={{ maxWidth: 300 }}>
        {/* Inbox section */}
        <List.Item
          onClick={() => toggle("inbox")}
          StartElement={<Icon name="mdi:inbox" width={24} />}
          EndElement={
            <Icon
              name="mdi:chevron-down"
              width={20}
              style={{
                transform: openSections.inbox ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          }
        >
          <List.ItemText primary="Inbox" />
        </List.Item>
        <List.Collapse open={openSections.inbox}>
          <List.Item depth={1} onClick={() => {}}>
            <List.ItemText primary="Primary" secondary="12 new" />
          </List.Item>
          <List.Item depth={1} onClick={() => {}}>
            <List.ItemText primary="Social" secondary="3 new" />
          </List.Item>
          <List.Item depth={1} onClick={() => {}}>
            <List.ItemText primary="Promotions" secondary="8 new" />
          </List.Item>
        </List.Collapse>

        {/* Settings section */}
        <List.Item
          onClick={() => toggle("settings")}
          StartElement={<Icon name="mdi:cog" width={24} />}
          EndElement={
            <Icon
              name="mdi:chevron-down"
              width={20}
              style={{
                transform: openSections.settings ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          }
        >
          <List.ItemText primary="Settings" />
        </List.Item>
        <List.Collapse open={openSections.settings}>
          <List.Item StartElement={<Icon name="mdi:account" width={24} />} depth={1} onClick={() => {}}>
            <List.ItemText primary="Account" />
          </List.Item>
          <List.Item StartElement={<Icon name="mdi:shield-account" width={24} />} depth={1} onClick={() => {}}>
            <List.ItemText primary="Privacy" />
          </List.Item>
          <List.Item StartElement={<Icon name="mdi:bell" width={24} />} depth={1} onClick={() => {}}>
            <List.ItemText primary="Notifications" />
          </List.Item>
        </List.Collapse>

        {/* Help - no children */}
        <List.Item onClick={() => {}} StartElement={<Icon name="mdi:help-circle" width={24} />}>
          <List.ItemText primary="Help" />
        </List.Item>
      </List>
    );
  },
};

// ============================
// Virtual List Example
// ============================
export const VirtualListExample: Story = {
  name: "Virtual List Integration",
  tags: ["!dev"],
  render: () => <></>,
  parameters: {
    docs: {
      description: {
        story: `
For lists with hundreds or thousands of items, use a virtual rendering library like @tanstack/react-virtual or react-window.
        `,
      },
      source: {
        code: `"use client";

import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { List, Avatar } from 'venomous-ui/react/components';

function VirtualContactList({ contacts }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: contacts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72,
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
            >
              <List.ItemText primary={contact.name} secondary={contact.email} />
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
