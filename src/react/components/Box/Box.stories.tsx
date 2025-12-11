import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";

const meta = {
  title: "React/Components/<Box>",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "HTML element to render as.",
      type: { name: "string" },
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
    children: {
      description: "Content to render inside the box.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
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
          <Subtitle>A polymorphic container component</Subtitle>

          <Markdown>
            {`
\`<Box>\` can be rendered as different underlying HTML elements using the \`as\` prop.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Box } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <Box as="section" style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
        Content
      </Box>

      {/* With style callback for theme tokens */}
      <Box style={(theme) => ({ padding: theme.spacing(4), backgroundColor: theme.color.background("float") })}>
        Themed Content
      </Box>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>
          <Subtitle>{StyleCallbackExample.name}</Subtitle>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    as: "div",
    children: "Box Content",
  },
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
        story: "the `style` props accept both standard CSS objects and theme callback functions.",
      },
      source: {
        code: `
<BoxStyled
  style={(theme) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.backgroundColor("float"),
    color: theme.semanticColors.error.main,
    borderWidth: theme.strokeWidth("small"),
    borderColor: theme.borderColor("primary"),
    borderStyle: "solid",
  })}
>
  Float Background
</BoxStyled>

<BoxStyled
  style={(theme) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.paletteColors.main,
    color: "#FFFFFF",
  })}
>
  Primary Theme
</BoxStyled>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16 }}>
        <Box
          style={(theme) => ({
            padding: theme.spacing(4),
            backgroundColor: theme.backgroundColor("float"),
            color: theme.semanticColors.error.main,
            borderWidth: theme.strokeWidth("small"),
            borderColor: theme.borderColor("primary"),
            borderStyle: "solid",
          })}
        >
          Float Background
        </Box>
        <Box
          style={(theme) => ({
            padding: theme.spacing(4),
            backgroundColor: theme.paletteColors.main,
            color: "#FFFFFF",
          })}
        >
          Primary Theme
        </Box>
      </div>
    );
  },
};
