import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta = {
  title: "React/Components/<Icon>",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "Icon name from Iconify. See https://icon-sets.iconify.design/ for available icons.",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    width: {
      description: "Icon width and height in pixels.",
      type: { name: "number" },
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "20" },
      },
      control: { type: "number", min: 1, max: 100, step: 1 },
    },
    color: {
      description: "Icon color. Accepts any valid CSS color value.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "color" },
    },
    className: {
      description: "Additional CSS class names.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    style: {
      description: "Custom styles. Supports object or theme callback function.",
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
          <Subtitle>Styled Icon Component</Subtitle>

          <Markdown>
            {`
A styled icon component, built on top of the headless \`<Icon>\` component. But \`style\` prop also supports a theme callback function.<br />
Must be used within \`<ThemeProvider>\` component.

After the component is mounted, a \`<style>\` tag will be injected into the \`<head>\` of the \`<html>\` document ( only be injected once and will not be duplicated ). The \`<style>\` tag will be removed from the \`<head>\` after the component is unmounted.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Icon } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Use color prop */}
      <Icon icon="mdi:check-circle" color="#22c55e" width={24} />

      {/* Use style callback with theme */}
      <Icon
        icon="mdi:alert-circle"
        width={24}
        style={(theme) => ({ color: theme.semantic.warning.main })}
      />
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
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    icon: "mdi:home",
    width: 20,
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
        story: "Use `style` prop with theme callback to access semantic colors from theme.",
      },
      source: {
        code: `
<Icon
  icon="mdi:check-circle"
  style={(theme) => ({ color: theme.semanticColors.success.main })}
/>
<Icon
  icon="mdi:alert-circle"
  style={(theme) => ({ color: theme.semanticColors.warning.main })}
/>
<Icon
  icon="mdi:close-circle"
  style={(theme) => ({ color: theme.semanticColors.error.main })}
/>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Icon icon="mdi:check-circle" style={(theme) => ({ color: theme.semanticColors.success.main })} />
        <Icon icon="mdi:alert-circle" style={(theme) => ({ color: theme.semanticColors.warning.main })} />
        <Icon icon="mdi:close-circle" style={(theme) => ({ color: theme.semanticColors.error.main })} />
      </div>
    );
  },
};
