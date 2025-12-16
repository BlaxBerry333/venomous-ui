import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/react/components/Card";
import Flex from "./SpaceFlex";

const meta = {
  title: "React/Components/<Space.Flex>",
  component: Flex,
  tags: ["autodocs"],
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
        type: { summary: "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10" },
        defaultValue: { summary: '"none"' },
      },
      control: { type: "number", min: 0, max: 10, step: 1 },
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
      {[...Array(6).keys()].map((i) => (
        <Card key={i} variant="outlined" style={{ textAlign: "center" }}>
          Item {i}
        </Card>
      ))}
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
<Space.lex
  spacing={10}
  style={(theme) => ({
    backgroundColor: theme.paletteColors.light,
    color: "#FFFFFF",
  })}
>
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <div key={i} style={{ textAlign: "center" }}>
      Item {i}
    </div>
  ))}
</Space.Flex>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Flex
        spacing={10}
        style={(theme) => ({
          backgroundColor: theme.paletteColors.light,
          color: "#FFFFFF",
        })}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} style={{ textAlign: "center" }}>
            Item {i}
          </div>
        ))}
      </Flex>
    );
  },
};
