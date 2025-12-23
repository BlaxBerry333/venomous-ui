import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/react/components/Icon";
import Button from "./Button";

const meta = {
  title: "React/Components/<Button>",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      description: "Whether the button is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    loading: {
      description: "Whether the button is in loading state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "Whether the button should take full width of its container.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    text: {
      description: "Button text content.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    StartElement: {
      description: "Element displayed before the text (e.g., icon).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<Icon />"],
      mapping: {
        undefined: undefined,
        "<Icon />": <Icon name="solar:asteroid-bold" />,
      },
    },
    EndElement: {
      description: "Element displayed after the text (e.g., icon).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<Icon />"],
      mapping: {
        undefined: undefined,
        "<Icon />": <Icon name="solar:asteroid-bold" />,
      },
    },
    children: {
      description: "Custom content, overrides text/startElement/endElement.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "Custom Content"],
      mapping: {
        undefined: undefined,
        "Custom Content": <div style={{ height: 10, width: 50, backgroundColor: "pink" }} />,
      },
    },
    onClick: {
      description: "Click event handler.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(event: MouseEvent<HTMLButtonElement>) => void" },
      },
      control: false,
    },
    type: {
      description: "HTML button type attribute.",
      table: {
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: '"button"' },
      },
      control: false,
    },
    variant: {
      description: "Button variant style.",
      type: { name: "string" },
      table: {
        type: { summary: '"contained" | "outlined" | "text"' },
        defaultValue: { summary: '"contained"' },
      },
      control: { type: "radio" },
      options: ["contained", "outlined", "text"],
    },
    size: {
      description: "Button size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    color: {
      description: "Color theme.",
      type: { name: "string" },
      table: {
        type: { summary: '"default" | "primary" | "success" | "error" | "warning" | "info"' },
        defaultValue: { summary: '"primary"' },
      },
      control: { type: "radio" },
      options: ["default", "primary", "success", "error", "warning", "info"],
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
        type: { summary: " React.CSSProperties | ((theme: Theme) => React.CSSProperties)" },
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Styled Button Component</Subtitle>

          <Markdown>
            {`
A styled button component. Built on top of the \`<button>\` tag.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Button } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <Button
        variant="contained"
        size="medium"
        text="Click me"
      />

      {/* With color prop */}
      <Button text="Success" color="success" />
      <Button text="Error" color="error" />
      <Button text="Warning" color="warning" variant="outlined" />
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{VariantsExample.name}</Subtitle>
          <Description of={VariantsExample} />
          <Canvas of={VariantsExample} />

          <Subtitle>{SizesExample.name}</Subtitle>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Subtitle>{ColorsExample.name}</Subtitle>
          <Description of={ColorsExample} />
          <Canvas of={ColorsExample} />

          <Subtitle>{WithIconExample.name}</Subtitle>
          <Description of={WithIconExample} />
          <Canvas of={WithIconExample} />

          <Subtitle>{StatesExample.name}</Subtitle>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />

          <Subtitle>{CustomStyleExample.name}</Subtitle>
          <Description of={CustomStyleExample} />
          <Canvas of={CustomStyleExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    text: "Button",
    StartElement: undefined,
    EndElement: undefined,
    children: undefined,
    disabled: false,
    loading: false,
    fullWidth: false,
    variant: "contained",
    size: "medium",
    color: "primary",
  },
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
        story: "Three variants: `contained`、`outlined`、`text`.",
      },
      source: {
        code: `
<Button variant="contained" text="Contained" />
<Button variant="outlined" text="Outlined" />
<Button variant="text" text="Text" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button variant="contained" text="Contained" />
        <Button variant="outlined" text="Outlined" />
        <Button variant="text" text="Text" />
      </div>
    );
  },
};

// ============================
// Sizes Example
// ============================
export const SizesExample: Story = {
  name: "Sizes Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Three `size` options: `small`、`medium`、`large`.",
      },
      source: {
        code: `
<Button size="small" text="Small" />
<Button size="medium" text="Medium" />
<Button size="large" text="Large" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button size="small" text="Small" />
        <Button size="medium" text="Medium" />
        <Button size="large" text="Large" />
      </div>
    );
  },
};

// ============================
// Colors Example
// ============================
export const ColorsExample: Story = {
  name: "Colors Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Six color options: `default`, `primary`, `success`, `error`, `warning`, `info`.",
      },
      source: {
        code: `
// Contained variant with colors
<Button color="default" text="Default" />
<Button color="primary" text="Primary" />
<Button color="success" text="Success" />
<Button color="error" text="Error" />
<Button color="warning" text="Warning" />
<Button color="info" text="Info" />

// Outlined variant with colors
<Button variant="outlined" color="success" text="Success" />
<Button variant="outlined" color="error" text="Error" />

// Text variant with colors
<Button variant="text" color="success" text="Success" />
<Button variant="text" color="error" text="Error" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <Button color="default" text="Default" />
          <Button color="primary" text="Primary" />
          <Button color="success" text="Success" />
          <Button color="error" text="Error" />
          <Button color="warning" text="Warning" />
          <Button color="info" text="Info" />
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="outlined" color="default" text="Default" />
          <Button variant="outlined" color="primary" text="Primary" />
          <Button variant="outlined" color="success" text="Success" />
          <Button variant="outlined" color="error" text="Error" />
          <Button variant="outlined" color="warning" text="Warning" />
          <Button variant="outlined" color="info" text="Info" />
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="text" color="default" text="Default" />
          <Button variant="text" color="primary" text="Primary" />
          <Button variant="text" color="success" text="Success" />
          <Button variant="text" color="error" text="Error" />
          <Button variant="text" color="warning" text="Warning" />
          <Button variant="text" color="info" text="Info" />
        </div>
      </div>
    );
  },
};

// ============================
// With Icon Example
// ============================
export const WithIconExample: Story = {
  name: "With Icon Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Combine styled buttons with icons using `startElement` and `endElement` props.",
      },
      source: {
        code: `
<Button
  text="Save"
  startElement={<Icon name="mdi:content-save" />}
/>
<Button
  variant="outlined"
  text="Delete"
  startElement={<Icon name="mdi:delete" />}
/>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button text="Save" StartElement={<Icon name="mdi:content-save" />} />
        <Button variant="outlined" text="Delete" StartElement={<Icon name="mdi:delete" />} />
        <Button variant="text" text="Add" StartElement={<Icon name="mdi:plus" />} />
        <Button text="Next" EndElement={<Icon name="mdi:arrow-right" />} />
      </div>
    );
  },
};

// ============================
// States Example
// ============================
export const StatesExample: Story = {
  name: "States Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Buttons can be `disabled` or in `loading` state.",
      },
      source: {
        code: `
// Contained
<Button text="Normal" />
<Button text="Disabled" disabled />
<Button text="Loading" loading />

// Outlined
<Button variant="outlined" text="Normal" />
<Button variant="outlined" text="Disabled" disabled />
<Button variant="outlined" text="Loading" loading />

// Text
<Button variant="text" text="Normal" />
<Button variant="text" text="Disabled" disabled />
<Button variant="text" text="Loading" loading />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Button text="Normal" />
          <Button text="Disabled" disabled />
          <Button text="Loading" loading />
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Button variant="outlined" text="Normal" />
          <Button variant="outlined" text="Disabled" disabled />
          <Button variant="outlined" text="Loading" loading />
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Button variant="text" text="Normal" />
          <Button variant="text" text="Disabled" disabled />
          <Button variant="text" text="Loading" loading />
        </div>
      </div>
    );
  },
};

// ============================
// Custom Style Example
// ============================
export const CustomStyleExample: Story = {
  name: "Custom Style Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use the `style` prop to apply custom styles. It supports both a plain object and a theme callback function.",
      },
      source: {
        code: `
<Button
  text="Gradient Background"
  style={{
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: 20,
  }}
/>

<Button
  text="Capsule"
  variant="outlined"
  style={(theme) => ({
    borderRadius: theme.borderRadius("full"),
  })}
/>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button
          text="Gradient Background"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: 20,
          }}
        />
        <Button
          text="Capsule"
          variant="outlined"
          style={(theme) => ({
            borderRadius: theme.borderRadius("full"),
          })}
        />
      </div>
    );
  },
};
