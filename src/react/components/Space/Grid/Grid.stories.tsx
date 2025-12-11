import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { CssReset } from "@/react/components/CssReset";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Grid from "./Grid";

const meta = {
  title: "React/Components/<Space.Grid>",
  component: Grid,
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
      description: "Gap between grid items, same as theme.spacing().",
      table: {
        type: { summary: '"none" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10' },
        defaultValue: { summary: '"none"' },
      },
      control: { type: "select" },
      options: ["none", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    columns: {
      description: "Number of columns, supports number or responsive object.",
      table: {
        type: { summary: "number | ResponsiveColumns" },
        defaultValue: { summary: "1" },
      },
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    children: {
      description: "Content to render inside the grid container.",
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
          <Subtitle>Styled Grid Component</Subtitle>

          <Markdown>
            {`
A styled grid layout component, built on top of the headless \`<Grid>\` component. The \`style\` prop supports a theme callback function.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Grid } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <Grid columns={3} spacing={4}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Grid>

      {/* With style callback for theme tokens */}
      <Grid
        columns={{ xs: 1, sm: 2, lg: 3 }}
        spacing={4}
        style={(theme) => ({
          padding: theme.spacing(6),
          backgroundColor: theme.color.background("base"),
        })}
      >
        <div>Themed Item 1</div>
        <div>Themed Item 2</div>
        <div>Themed Item 3</div>
      </Grid>
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
} satisfies Meta<typeof Grid>;

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
    columns: 3,
  },
  render: (args) => (
    <Grid {...args}>
      {[...Array(6).keys()].map((i) => (
        <div key={i} style={{ padding: 16, backgroundColor: "#e3f2fd", borderRadius: 4, textAlign: "center" }}>
          Item {i}
        </div>
      ))}
    </Grid>
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
<Grid
  columns={3}
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
</Grid>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Grid
        columns={3}
        spacing={4}
        style={(theme) => ({
          padding: theme.spacing(4),
          backgroundColor: theme.backgroundColor("float"),
          borderRadius: theme.borderRadius("medium"),
          boxShadow: theme.boxShadow("small"),
        })}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} style={{ padding: 12, backgroundColor: "#e3f2fd", borderRadius: 4, textAlign: "center" }}>
            Item {i}
          </div>
        ))}
      </Grid>
    );
  },
};

// ============================
// Responsive with Theme Example
// ============================
export const ResponsiveThemeExample: Story = {
  name: "Responsive with Theme",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Combine responsive columns with theme-based styling.",
      },
      source: {
        code: `
<Grid
  columns={{ xs: 1, sm: 2, lg: 3 }}
  spacing={4}
  style={(theme) => ({
    padding: theme.spacing(6),
    backgroundColor: theme.paletteColors.light,
    borderRadius: theme.borderRadius("large"),
  })}
>
  {items.map(item => <Card key={item.id} />)}
</Grid>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Grid
        columns={{ xs: 1, sm: 2, lg: 3 }}
        spacing={4}
        style={(theme) => ({
          padding: theme.spacing(6),
          backgroundColor: theme.paletteColors.light,
          borderRadius: theme.borderRadius("large"),
        })}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            style={{
              padding: 16,
              backgroundColor: "white",
              borderRadius: 4,
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            Card {i}
          </div>
        ))}
      </Grid>
    );
  },
};
