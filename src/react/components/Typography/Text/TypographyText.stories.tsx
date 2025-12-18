import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import TypographyText from "./TypographyText";

const meta = {
  title: "React/Components/<Typography.Text>",
  component: TypographyText,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Render as different inline element.",
      type: { name: "string" },
      table: {
        type: {
          summary: '"span" | "small" | "strong" | "em" | "mark" | "del" | "ins" | "sub" | "sup" | "code" | "kbd"',
        },
        defaultValue: { summary: '"span"' },
      },
      control: { type: "select" },
      options: ["span", "small", "strong", "em", "mark", "del", "ins", "sub", "sup", "code", "kbd"],
    },
    children: {
      description: "Text content.",
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
          <Subtitle>An inline text component with semantic element support</Subtitle>

          <Markdown>
            {`
\`<Typography.Text>\` renders inline text elements via the \`as\` prop. Supports span, strong, em, code, kbd, mark, del, ins, sub, sup, and small elements.<br />
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
      {/* Different inline elements */}
      <p>
        <Typography.Text>Normal text</Typography.Text>
        <Typography.Text as="strong">Bold text</Typography.Text>
        <Typography.Text as="em">Italic text</Typography.Text>
        <Typography.Text as="code">Code text</Typography.Text>
      </p>

      {/* With style callback */}
      <Typography.Text style={(theme) => ({ color: theme.semanticColors.success.main })}>
        Success text
      </Typography.Text>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{ElementsExample.name}</Subtitle>
          <Description of={ElementsExample} />
          <Canvas of={ElementsExample} />

          <Subtitle>{StyleCallbackExample.name}</Subtitle>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />

          <Subtitle>{InlineUsageExample.name}</Subtitle>
          <Description of={InlineUsageExample} />
          <Canvas of={InlineUsageExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof TypographyText>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    as: "span",
    children: "This is some text",
  },
};

// ============================
// Elements Example
// ============================
export const ElementsExample: Story = {
  name: "Elements Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Different inline elements for various text styles.",
      },
      source: {
        code: `
<Typography.Text>Normal text</Typography.Text>
<Typography.Text as="strong">Bold text</Typography.Text>
<Typography.Text as="em">Italic text</Typography.Text>
<Typography.Text as="small">Small text</Typography.Text>
<Typography.Text as="code">Code text</Typography.Text>
<Typography.Text as="kbd">Keyboard</Typography.Text>
<Typography.Text as="mark">Highlighted</Typography.Text>
<Typography.Text as="del">Deleted</Typography.Text>
<Typography.Text as="ins">Inserted</Typography.Text>
<Typography.Text as="sub">Subscript</Typography.Text>
<Typography.Text as="sup">Superscript</Typography.Text>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p>
          <TypographyText>Normal text (span)</TypographyText>
        </p>
        <p>
          <TypographyText as="strong">Bold text (strong)</TypographyText>
        </p>
        <p>
          <TypographyText as="em">Italic text (em)</TypographyText>
        </p>
        <p>
          <TypographyText as="small">Small text (small)</TypographyText>
        </p>
        <p>
          <TypographyText as="code">Code text (code)</TypographyText>
        </p>
        <p>
          Press <TypographyText as="kbd">Ctrl</TypographyText> + <TypographyText as="kbd">C</TypographyText> to copy
        </p>
        <p>
          <TypographyText as="mark">Highlighted text (mark)</TypographyText>
        </p>
        <p>
          <TypographyText as="del">Deleted text (del)</TypographyText>
        </p>
        <p>
          <TypographyText as="ins">Inserted text (ins)</TypographyText>
        </p>
        <p>
          H<TypographyText as="sub">2</TypographyText>O (subscript)
        </p>
        <p>
          E=mc<TypographyText as="sup">2</TypographyText> (superscript)
        </p>
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
  parameters: {
    docs: {
      description: {
        story: "Use theme callback to apply dynamic styles.",
      },
      source: {
        code: `
<Typography.Text style={(theme) => ({ color: theme.palette.main })}>
  Themed text
</Typography.Text>

<Typography.Text style={(theme) => ({ color: theme.semanticColors.success.main })}>
  Success text
</Typography.Text>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p>
          <TypographyText style={(theme) => ({ color: theme.semanticColors.success.main })}>
            Success text
          </TypographyText>
        </p>
        <p>
          <TypographyText style={(theme) => ({ color: theme.semanticColors.warning.main })}>
            Warning text
          </TypographyText>
        </p>
        <p>
          <TypographyText style={(theme) => ({ color: theme.semanticColors.error.main })}>Error text</TypographyText>
        </p>
      </div>
    );
  },
};

// ============================
// Inline Usage Example
// ============================
export const InlineUsageExample: Story = {
  name: "Inline Usage Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Using Typography.Text inline within paragraphs.",
      },
      source: {
        code: `
<p>
  This is a paragraph with <Typography.Text as="strong">bold</Typography.Text>,{" "}
  <Typography.Text as="em">italic</Typography.Text>, and{" "}
  <Typography.Text as="code">code</Typography.Text> text.
</p>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <p>
        This is a paragraph with <TypographyText as="strong">bold</TypographyText>,{" "}
        <TypographyText as="em">italic</TypographyText>, and <TypographyText as="code">code</TypographyText> text. You
        can also add <TypographyText as="mark">highlighted</TypographyText> sections or show{" "}
        <TypographyText as="del">deleted</TypographyText> content.
      </p>
    );
  },
};
