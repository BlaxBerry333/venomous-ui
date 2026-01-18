import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./index";

const meta = {
  title: "React/Components/<List.ItemText>",
  component: List.ItemText,
  tags: ["autodocs"],
  argTypes: {
    primary: {
      description: "Primary text content.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
    },
    secondary: {
      description: "Secondary text content (description).",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
    },
    ellipsis: {
      description: "Number of lines before truncating with ellipsis. 0 = no truncation.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number", min: 0, max: 5 },
    },
    children: {
      description: "Custom content. Used as primary if `primary` prop is not provided.",
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
          <Subtitle>List Item Text Component</Subtitle>

          <Markdown>
            {`
Text content for list items with primary and secondary text support.<br />
Must be used within \`<List.Item>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, List } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      <List>
        {/* Primary text only */}
        <List.Item>
          <List.ItemText primary="Primary Text" />
        </List.Item>

        {/* Primary and secondary text */}
        <List.Item>
          <List.ItemText
            primary="Primary Text"
            secondary="Secondary description text"
          />
        </List.Item>

        {/* With custom children */}
        <List.Item>
          <List.ItemText primary="Title">
            <span style={{ color: "blue" }}>Custom content here</span>
          </List.ItemText>
        </List.Item>

        {/* With ellipsis truncation */}
        <List.Item>
          <List.ItemText
            primary="Very long title that will be truncated..."
            secondary="Very long description that will also be truncated..."
            ellipsis={1}
          />
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

          <Subtitle>{EllipsisExample.name}</Subtitle>
          <Description of={EllipsisExample} />
          <Canvas of={EllipsisExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof List.ItemText>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    primary: "Primary Text",
    secondary: "Secondary description text",
    ellipsis: 0,
  },
  render: (args) => (
    <List style={{ maxWidth: 360 }}>
      <List.Item>
        <List.ItemText {...args} />
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
        story: "Use `primary` for main text and `secondary` for description.",
      },
      source: {
        code: `
<List.ItemText primary="Primary Text" />
<List.ItemText primary="Primary" secondary="Secondary text" />
<List.ItemText primary="With children">Custom content</List.ItemText>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <List style={{ maxWidth: 360 }}>
        <List.Item>
          <List.ItemText primary="Primary text only" />
        </List.Item>
        <List.Item>
          <List.ItemText primary="Primary text" secondary="With secondary description" />
        </List.Item>
        <List.Item>
          <List.ItemText primary="With children">
            <span style={{ color: "blue" }}>Custom styled content</span>
          </List.ItemText>
        </List.Item>
      </List>
    );
  },
};

// ============================
// Ellipsis Example
// ============================
export const EllipsisExample: Story = {
  name: "Ellipsis",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `ellipsis` prop to truncate text. `ellipsis={1}` for single-line, `ellipsis={2}` for two-line truncation.",
      },
      source: {
        code: `
<List.ItemText
  primary="Very long title..."
  secondary="Very long description..."
  ellipsis={1}
/>

<List.ItemText
  primary="Title"
  secondary="Two-line description that wraps..."
  ellipsis={2}
/>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const longText =
      "This is a very long text that should be truncated with ellipsis when it exceeds the available width of the container.";

    return (
      <List divider style={{ maxWidth: 250 }}>
        <List.Item>
          <List.ItemText primary={longText} secondary={longText} ellipsis={1} />
        </List.Item>
        <List.Item>
          <List.ItemText primary="Two-line ellipsis" secondary={longText} ellipsis={2} />
        </List.Item>
        <List.Item>
          <List.ItemText primary="No ellipsis (default)" secondary={longText} />
        </List.Item>
      </List>
    );
  },
};
