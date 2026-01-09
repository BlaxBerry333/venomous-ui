import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { List } from "../index";

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
A compound component for creating lists, including \`<List>\`, \`<List.Item>\`, \`<List.ItemText>\`, \`<List.Collapse>\`.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { useState } from "react";
import { ThemeProvider, List, Icon } from "venomous-ui/react/components";

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

          <Subtitle>{PolymorphicExample.name}</Subtitle>
          <Description of={PolymorphicExample} />
          <Canvas of={PolymorphicExample} />

          <Heading>Props</Heading>
          <ArgTypes />
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
  name: "Basic",
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
  name: "Dividers",
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
  name: "Spacing",
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
        {(["none", "small", "medium", "large"] as const).map((spacing) => (
          <div key={spacing}>
            <h4 style={{ margin: "0 0 12px 0" }}>{spacing}</h4>
            <List spacing={spacing} style={{ maxWidth: 180, backgroundColor: "#f5f5f5" }}>
              <List.Item>
                <List.ItemText primary="Item 1" style={{ color: "#000" }} />
              </List.Item>
              <List.Item>
                <List.ItemText primary="Item 2" style={{ color: "#000" }} />
              </List.Item>
              <List.Item>
                <List.ItemText primary="Item 3" style={{ color: "#000" }} />
              </List.Item>
            </List>
          </div>
        ))}
      </div>
    );
  },
};

// ============================
// Polymorphic Example
// ============================
export const PolymorphicExample: Story = {
  name: "Polymorphic",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `as` prop to render List as different elements (`ul`, `ol`, `div`, `nav`).",
      },
      source: {
        code: `
<List as="ol">
  <List.Item><List.ItemText primary="First" /></List.Item>
  <List.Item><List.ItemText primary="Second" /></List.Item>
</List>

<List as="div" divider>
  <List.Item as="div"><List.ItemText primary="Item 1" /></List.Item>
  <List.Item as="div"><List.ItemText primary="Item 2" /></List.Item>
</List>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>as="ol"</h4>
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
          <h4 style={{ margin: "0 0 12px 0" }}>as="div"</h4>
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
