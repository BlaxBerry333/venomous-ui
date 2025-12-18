import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Space } from "@/react/components/Space";
import TypographyParagraph from "./TypographyParagraph";

const meta = {
  title: "React/Components/<Typography.Paragraph>",
  component: TypographyParagraph,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Paragraph content.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    ellipsis: {
      description: "Number of lines before truncation with ellipsis. 0 = no truncation.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number" },
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
          <Subtitle>A paragraph component with ellipsis support</Subtitle>

          <Markdown>
            {`
\`<Typography.Paragraph>\` renders a styled \`<p>\` element with support for multi-line text truncation via the \`ellipsis\` prop.<br />
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
      {/* Basic usage */}
      <Typography.Paragraph>
        This is a paragraph of text.
      </Typography.Paragraph>

      {/* With ellipsis truncation */}
      <Typography.Paragraph ellipsis={2}>
        Long text that will be truncated after 2 lines...
      </Typography.Paragraph>

      {/* With style callback */}
      <Typography.Paragraph style={(theme) => ({ color: theme.semanticColors.success.main })}>
        Success colored paragraph.
      </Typography.Paragraph>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{EllipsisExample.name}</Subtitle>
          <Description of={EllipsisExample} />
          <Canvas of={EllipsisExample} />

          <Subtitle>{StyleCallbackExample.name}</Subtitle>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof TypographyParagraph>;

export default meta;

type Story = StoryObj<typeof meta>;

const LONG_TEXT =
  "The identity of the longest word in English depends on the definition of word and of length.Words may be derived naturally from the language's roots or formed by coinage and construction. Additionally, comparisons are complicated because place names may be considered words, technical terms may be arbitrarily long, and the addition of suffixes and prefixes may extend the length of words to create grammatically correct but unused or novel words. Different dictionaries include and omit different words.The length of a word may also be understood in multiple ways. Most commonly, length is based on orthography (conventional spelling rules) and counting the number of written letters. Alternate, but less common, approaches include phonology (the spoken language) and the number of phonemes (sounds)";

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    children: "This is a paragraph of text.",
    ellipsis: 0,
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
        story: "Truncate text after a specified number of lines with ellipsis.",
      },
      source: {
        code: `
<Typography.Paragraph ellipsis={1}>
  Long text that will be truncated after 1 line...
</Typography.Paragraph>

<Typography.Paragraph ellipsis={2}>
  Long text that will be truncated after 2 lines...
</Typography.Paragraph>

<Typography.Paragraph ellipsis={3}>
  Long text that will be truncated after 3 lines...
</Typography.Paragraph>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Space.Flex column spacing={4}>
        <div>
          <strong>ellipsis=1:</strong>
          <TypographyParagraph ellipsis={1}>{LONG_TEXT}</TypographyParagraph>
        </div>
        <div>
          <strong>ellipsis=2:</strong>
          <TypographyParagraph ellipsis={2}>{LONG_TEXT}</TypographyParagraph>
        </div>
        <div>
          <strong>ellipsis=3:</strong>
          <TypographyParagraph ellipsis={3}>{LONG_TEXT}</TypographyParagraph>
        </div>
      </Space.Flex>
    );
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
        story: "The `style` prop accepts both standard CSS objects and theme callback functions.",
      },
      source: {
        code: `
<Typography.Paragraph style={(theme) => ({ color: theme.semanticColors.success.main })}>
  Success colored paragraph.
</Typography.Paragraph>

<Typography.Paragraph style={(theme) => ({ color: theme.semanticColors.warning.main })}>
  Warning colored paragraph.
</Typography.Paragraph>

<Typography.Paragraph style={(theme) => ({ color: theme.semanticColors.error.main })}>
  Error colored paragraph.
</Typography.Paragraph>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Space.Flex column spacing={4}>
        <TypographyParagraph style={(theme) => ({ color: theme.semanticColors.success.main })}>
          Success colored paragraph.
        </TypographyParagraph>
        <TypographyParagraph style={(theme) => ({ color: theme.semanticColors.warning.main })}>
          Warning colored paragraph.
        </TypographyParagraph>
        <TypographyParagraph style={(theme) => ({ color: theme.semanticColors.error.main })}>
          Error colored paragraph.
        </TypographyParagraph>
      </Space.Flex>
    );
  },
};
