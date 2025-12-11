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
        "<Icon />": <Icon icon="solar:asteroid-bold" />,
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
        "<Icon />": <Icon icon="solar:asteroid-bold" />,
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
A styled button component, built on top of the headless \`<Button>\` component. But \`style\` prop also supports a theme callback function.<br />
Must be used within \`<ThemeProvider>\` component.

After the component is mounted, a \`<style>\` tag will be injected into the \`<head>\` of the \`<html>\` document ( only be injected once and will not be duplicated ). The \`<style>\` tag will be removed from the \`<head>\` after the component is unmounted.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, ButtonStyled } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic usage */}
      <ButtonStyled
        variant="contained"
        size="medium"
        text="Click me"
      />

      {/* With style callback for semantic colors */}
      <ButtonStyled
        text="Success"
        style={(theme) => ({
          backgroundColor: theme.semantic.success.main,
          color: "#ffffff",
        })}
      />
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{VariantsExample.name}</Heading>
          <Description of={VariantsExample} />
          <Canvas of={VariantsExample} />

          <Heading>{SizesExample.name}</Heading>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Heading>{WithIconExample.name}</Heading>
          <Description of={WithIconExample} />
          <Canvas of={WithIconExample} />

          <Heading>{StatesExample.name}</Heading>
          <Description of={StatesExample} />
          <Canvas of={StatesExample} />

          <Heading>{StyleCallbackExample.name}</Heading>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />
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
<ButtonStyled variant="contained" text="Contained" />
<ButtonStyled variant="outlined" text="Outlined" />
<ButtonStyled variant="text" text="Text" />
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
<ButtonStyled size="small" text="Small" />
<ButtonStyled size="medium" text="Medium" />
<ButtonStyled size="large" text="Large" />
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
<ButtonStyled
  text="Save"
  startElement={<Icon icon="mdi:content-save" />}
/>
<ButtonStyled
  variant="outlined"
  text="Delete"
  startElement={<Icon icon="mdi:delete" />}
/>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button text="Save" StartElement={<Icon icon="mdi:content-save" />} />
        <Button variant="outlined" text="Delete" StartElement={<Icon icon="mdi:delete" />} />
        <Button variant="text" text="Add" StartElement={<Icon icon="mdi:plus" />} />
        <Button text="Next" EndElement={<Icon icon="mdi:arrow-right" />} />
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
<ButtonStyled text="Disabled" disabled />
<ButtonStyled text="Loading" loading />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Button text="Normal" />
        <Button text="Disabled" disabled />
        <Button text="Loading" loading />
        <Button variant="outlined" text="Disabled" disabled />
        <Button variant="outlined" text="Loading" loading />
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
        story: "Use `style` prop with theme callback to apply semantic colors.",
      },
      source: {
        code: `
<Button
  text="Success"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.success.main,
    color: "#ffffff",
  })}
/>
<Button
  text="Warning"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.warning.main,
    color: "#ffffff",
  })}
/>
<Button
  text="Error"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.error.main,
    color: "#ffffff",
  })}
/>
<Button
  text="Info"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.info.main,
    color: "#ffffff",
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
          text="Success"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.success.main,
            color: "#ffffff",
          })}
        />
        <Button
          text="Warning"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.warning.main,
            color: "#ffffff",
          })}
        />
        <Button
          text="Error"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.error.main,
            color: "#ffffff",
          })}
        />
        <Button
          text="Info"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.info.main,
            color: "#ffffff",
          })}
        />
      </div>
    );
  },
};
