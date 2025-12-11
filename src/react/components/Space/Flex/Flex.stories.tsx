import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { CssReset } from "@/react/components/CssReset";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Flex from "./Flex";

const meta = {
  title: "React/Components/<Space.Flex>",
  component: Flex,
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
    as: {
      description: "HTML element to render as.",
      table: {
        type: {
          summary:
            '"div" | "span" | "section" | "main" | "aside" | "header" | "footer" | "nav" | "figure" | "figcaption"',
        },
        defaultValue: { summary: '"div"' },
      },
      control: { type: "radio" },
      options: ["div", "span", "section", "main", "aside", "header", "footer", "nav", "figure", "figcaption"],
    },
    spacing: {
      description: "Gap between children, same as theme.spacing().",
      table: {
        type: { summary: '"none" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10' },
        defaultValue: { summary: '"none"' },
      },
      control: { type: "select" },
      options: ["none", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    column: {
      description: "Use column direction (flex-direction: column).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "Content to render inside the flex container.",
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
        type: { summary: "CSSProperties | ((theme: Theme) => CSSProperties)" },
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Styled Flex Component</Subtitle>

          <Markdown>
            {`
A styled flex layout component, built on top of the headless \`<Flex>\` component. The \`style\` prop supports a theme callback function.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Flex } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <Flex spacing={4}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>

      {/* With style callback for theme tokens */}
      <Flex
        spacing={4}
        style={(theme) => ({
          padding: theme.spacing(4),
          backgroundColor: theme.color.background("float"),
          borderRadius: theme.radius("medium"),
        })}
      >
        <div>Themed Item 1</div>
        <div>Themed Item 2</div>
      </Flex>
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{StyleCallbackExample.name}</Heading>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    as: "div",
    spacing: 4,
    column: false,
  },
  render: (args) => (
    <Flex {...args}>
      <div style={{ padding: 16, backgroundColor: "#e3f2fd", borderRadius: 4 }}>Item 1</div>
      <div style={{ padding: 16, backgroundColor: "#e3f2fd", borderRadius: 4 }}>Item 2</div>
      <div style={{ padding: 16, backgroundColor: "#e3f2fd", borderRadius: 4 }}>Item 3</div>
    </Flex>
  ),
};

// ============================
// Style Callback Example
// ============================
export const StyleCallbackExample: Story = {
  name: "Style Callback Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `style` prop with theme callback to access design tokens.",
      },
      source: {
        code: `
<Flex
  spacing={4}
  style={(theme) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.backgroundColor("float"),
    borderRadius: theme.borderRadius("medium"),
    boxShadow: theme.boxShadow("small"),
  })}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Flex
        spacing={4}
        style={(theme) => ({
          padding: theme.spacing(4),
          backgroundColor: theme.backgroundColor("float"),
          borderRadius: theme.borderRadius("medium"),
          boxShadow: theme.borderRadius("small"),
        })}
      >
        <div style={{ padding: 12, backgroundColor: "#e3f2fd", borderRadius: 4 }}>Item 1</div>
        <div style={{ padding: 12, backgroundColor: "#e3f2fd", borderRadius: 4 }}>Item 2</div>
        <div style={{ padding: 12, backgroundColor: "#e3f2fd", borderRadius: 4 }}>Item 3</div>
      </Flex>
    );
  },
};
