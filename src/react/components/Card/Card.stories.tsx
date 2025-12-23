import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import type { CardProps } from "./Card.types";

const meta = {
  title: "React/Components/<Card>",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      description: "Whether the card is in loading state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the card is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    clickable: {
      description: "Enable clickable styles (hover/active effects).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "Card content.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    variant: {
      description: "Card visual variant.",
      type: { name: "string" },
      table: {
        type: { summary: '"elevated" | "outlined" | "filled"' },
        defaultValue: { summary: '"elevated"' },
      },
      control: { type: "radio" },
      options: ["elevated", "outlined", "filled"],
    },
    padding: {
      description: "Card padding size.",
      type: { name: "string" },
      table: {
        type: { summary: '"none" | "small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["none", "small", "medium", "large"],
    },
    radius: {
      description: "Card border radius.",
      type: { name: "string" },
      table: {
        type: { summary: '"none" | "small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["none", "small", "medium", "large"],
    },
    className: {
      description: "Additional CSS class names.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    onClick: {
      description: "Click event handler (only works when clickable is true).",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(event: MouseEvent<HTMLElement>) => void" },
      },
      control: { type: "radio" },
      options: [undefined, "handleClick"],
      mapping: {
        undefined: undefined,
        handleClick: () => console.log("clicked"),
      },
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
          <Subtitle>Styled Card Component</Subtitle>

          <Markdown>
            {`
A styled card component.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Card } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <Card variant="elevated" padding="medium">
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
      </Card>

      {/* With style callback for custom colors */}
      <Card
        variant="filled"
        style={(theme) => ({
          backgroundColor: theme.semanticColors.success.light,
        })}
      >
        <p>Success card</p>
      </Card>
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{VariantsExample.name}</Subtitle>
          <Description of={VariantsExample} />
          <Canvas of={VariantsExample} />

          <Subtitle>{PaddingExample.name}</Subtitle>
          <Description of={PaddingExample} />
          <Canvas of={PaddingExample} />

          <Subtitle>{RadiusExample.name}</Subtitle>
          <Description of={RadiusExample} />
          <Canvas of={RadiusExample} />

          <Subtitle>{ClickableExample.name}</Subtitle>
          <Description of={ClickableExample} />
          <Canvas of={ClickableExample} />

          <Subtitle>{StyleCallbackExample.name}</Subtitle>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    loading: false,
    disabled: false,
    clickable: false,
    variant: "elevated",
    padding: "medium",
    radius: "medium",
  },
  render: (args) => (
    <Card {...args}>
      <h3 style={{ margin: 0, marginBottom: 8 }}>Card Title</h3>
      <p style={{ margin: 0 }}>This is a styled card component with built-in styles.</p>
    </Card>
  ),
};

// ============================
// Variants Example
// ============================
export const VariantsExample: Story = {
  name: "Variants Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Three variants: `elevated` (shadow), `outlined` (border), `filled` (background).",
      },
      source: {
        code: `
<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="filled">Filled Card</Card>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {[...meta.argTypes.variant.options].map((variant) => (
          <Card key={variant} variant={variant as CardProps["variant"]}>
            <h4 style={{ margin: 0, marginBottom: 8 }}>{variant}</h4>
          </Card>
        ))}
      </div>
    );
  },
};

// ============================
// Padding Example
// ============================
export const PaddingExample: Story = {
  name: "Padding Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Four padding sizes: `none`, `small`, `medium`, `large`.",
      },
      source: {
        code: `
<Card padding="none">No padding</Card>
<Card padding="small">Small padding</Card>
<Card padding="medium">Medium padding</Card>
<Card padding="large">Large padding</Card>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {[...meta.argTypes.padding.options].map((padding) => (
          <Card key={padding} padding={padding as CardProps["padding"]}>
            <h4 style={{ margin: 0, marginBottom: 8 }}>{padding}</h4>
          </Card>
        ))}
      </div>
    );
  },
};

// ============================
// Radius Example
// ============================
export const RadiusExample: Story = {
  name: "Radius Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Four radius sizes: `none`, `small`, `medium`, `large`.",
      },
      source: {
        code: `
<Card radius="none">No radius</Card>
<Card radius="small">Small radius</Card>
<Card radius="medium">Medium radius</Card>
<Card radius="large">Large radius</Card>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <Card variant="outlined" radius="none">
          <span>None</span>
        </Card>
        <Card variant="outlined" radius="small">
          <span>Small</span>
        </Card>
        <Card variant="outlined" radius="medium">
          <span>Medium</span>
        </Card>
        <Card variant="outlined" radius="large">
          <span>Large</span>
        </Card>
      </div>
    );
  },
};

// ============================
// Clickable Example
// ============================
export const ClickableExample: Story = {
  name: "Clickable Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Clickable styled cards with different variants. Includes hover effects and loading states.",
      },
      source: {
        code: `
<Card variant="elevated" clickable onClick={() => alert("Clicked!")}>
  Clickable Elevated Card
</Card>
<Card variant="outlined" clickable disabled>
  Disabled Clickable Card
</Card>
<Card variant="filled" clickable loading>
  Loading Card
</Card>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

    return (
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <Card variant="elevated" clickable onClick={() => alert("Clicked!")}>
          <h4 style={{ margin: 0, marginBottom: 8 }}>Clickable</h4>
          <p style={{ margin: 0 }}>Click me!</p>
        </Card>
        <Card variant="outlined" clickable disabled>
          <h4 style={{ margin: 0, marginBottom: 8 }}>Disabled</h4>
          <p style={{ margin: 0 }}>Cannot click</p>
        </Card>
        <Card variant="filled" clickable loading={loading} onClick={handleClick}>
          <h4 style={{ margin: 0, marginBottom: 8 }}>Click to Load</h4>
          <p style={{ margin: 0 }}>{loading ? "Loading..." : "Click me!"}</p>
        </Card>
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
        story: "Use `style` prop with theme callback to apply semanticColors colors.",
      },
      source: {
        code: `
<Card
  variant="filled"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.success.light,
    borderLeft: \`4px solid \${theme.semanticColors.success.main}\`,
  })}
>
  <p>Success message</p>
</Card>
<Card
  variant="filled"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.warning.light,
    borderLeft: \`4px solid \${theme.semanticColors.warning.main}\`,
  })}
>
  <p>Warning message</p>
</Card>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
        <Card
          variant="filled"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.success.light,
            borderLeft: `4px solid ${theme.semanticColors.success.main}`,
          })}
        >
          <h4 style={{ margin: 0, marginBottom: 8 }}>Success</h4>
          <p style={{ margin: 0 }}>Operation completed successfully.</p>
        </Card>
        <Card
          variant="filled"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.warning.light,
            borderLeft: `4px solid ${theme.semanticColors.warning.main}`,
          })}
        >
          <h4 style={{ margin: 0, marginBottom: 8 }}>Warning</h4>
          <p style={{ margin: 0 }}>Please review before proceeding.</p>
        </Card>
        <Card
          variant="filled"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.error.light,
            borderLeft: `4px solid ${theme.semanticColors.error.main}`,
          })}
        >
          <h4 style={{ margin: 0, marginBottom: 8 }}>Error</h4>
          <p style={{ margin: 0 }}>Something went wrong.</p>
        </Card>
        <Card
          variant="filled"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.info.light,
            borderLeft: `4px solid ${theme.semanticColors.info.main}`,
          })}
        >
          <h4 style={{ margin: 0, marginBottom: 8 }}>Info</h4>
          <p style={{ margin: 0 }}>Here is some information.</p>
        </Card>
      </div>
    );
  },
};
