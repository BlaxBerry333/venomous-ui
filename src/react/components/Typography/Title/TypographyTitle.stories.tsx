import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import TypographyTitle from "./TypographyTitle";

const meta = {
  title: "React/Components/<Typography.Title>",
  component: TypographyTitle,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Render as h1-h6 element.",
      type: { name: "string" },
      table: {
        type: { summary: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"' },
        defaultValue: { summary: '"h3"' },
      },
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    children: {
      description: "Title content.",
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
        type: { summary: "CSSProperties | ((theme: ITheme) => CSSProperties)" },
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>A heading component with semantic h1-h6 support</Subtitle>

          <Markdown>
            {`
\`<Typography.Title>\` renders a styled heading element (h1-h6) via the \`as\` prop. Each level has predefined font sizes based on design tokens.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Typography } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Different heading levels */}
      <Typography.Title as="h1">Heading 1</Typography.Title>
      <Typography.Title as="h2">Heading 2</Typography.Title>
      <Typography.Title as="h3">Heading 3</Typography.Title>

      {/* With style callback */}
      <Typography.Title as="h2" style={(theme) => ({ color: theme.semanticColors.success.main })}>
        Success Title
      </Typography.Title>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{LevelsExample.name}</Subtitle>
          <Description of={LevelsExample} />
          <Canvas of={LevelsExample} />

          <Subtitle>{StyleCallbackExample.name}</Subtitle>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof TypographyTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    as: "h3",
    children: "This is a title",
  },
};

// ============================
// Levels Example
// ============================
export const LevelsExample: Story = {
  name: "Levels Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "All heading levels from h1 to h6.",
      },
      source: {
        code: `
<Typography.Title as="h1">Heading 1</Typography.Title>
<Typography.Title as="h2">Heading 2</Typography.Title>
<Typography.Title as="h3">Heading 3</Typography.Title>
<Typography.Title as="h4">Heading 4</Typography.Title>
<Typography.Title as="h5">Heading 5</Typography.Title>
<Typography.Title as="h6">Heading 6</Typography.Title>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <TypographyTitle as="h1">Heading 1 (32px)</TypographyTitle>
        <TypographyTitle as="h2">Heading 2 (26px)</TypographyTitle>
        <TypographyTitle as="h3">Heading 3 (22px)</TypographyTitle>
        <TypographyTitle as="h4">Heading 4 (20px)</TypographyTitle>
        <TypographyTitle as="h5">Heading 5 (18px)</TypographyTitle>
        <TypographyTitle as="h6">Heading 6 (16px)</TypographyTitle>
      </div>
    );
  },
};

// ============================
// Style Callback Example
// ============================
export const StyleCallbackExample: Story = {
  name: "Style Callback Example",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Use theme callback to apply dynamic styles.",
      },
      source: {
        code: `
<Typography.Title as="h2" style={(theme) => ({ color: theme.palette.main })}>
  Themed Title
</Typography.Title>

<Typography.Title as="h3" style={(theme) => ({ color: theme.semanticColors.success.main })}>
  Success Title
</Typography.Title>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <TypographyTitle as="h3" style={(theme) => ({ color: theme.semanticColors.success.main })}>
          Success Title
        </TypographyTitle>
        <TypographyTitle as="h3" style={(theme) => ({ color: theme.semanticColors.warning.main })}>
          Warning Title
        </TypographyTitle>
        <TypographyTitle as="h3" style={(theme) => ({ color: theme.semanticColors.error.main })}>
          Error Title
        </TypographyTitle>
      </div>
    );
  },
};
