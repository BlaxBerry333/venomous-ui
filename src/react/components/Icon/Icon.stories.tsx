import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Space } from "../Space";
import { Typography } from "../Typography";
import Icon from "./Icon";

const meta = {
  title: "React/Components/<Icon>",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
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
      description: "Icon color. Supports preset colors or any valid CSS color value.",
      type: { name: "string" },
      table: {
        type: { summary: '"inherit" | "primary" | "success" | "error" | "warning" | "info" | string' },
        defaultValue: { summary: '"inherit"' },
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
A styled icon component built on top of the \`Iconify\` library ( See https://iconify.design/docs/icon-components/react/ ) <br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Icon } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic icon */}
      <Icon name="mdi:home" />

      {/* With preset color */}
      <Icon name="mdi:check-circle" color="success" />

      {/* With custom color */}
      <Icon name="mdi:heart" color="#e91e63" />

      {/* With size */}
      <Icon name="mdi:star" width={32} />
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{SizesExample.name}</Subtitle>
          <Description of={SizesExample} />
          <Canvas of={SizesExample} />

          <Subtitle>{ColorsExample.name}</Subtitle>
          <Description of={ColorsExample} />
          <Canvas of={ColorsExample} />

          <Subtitle>{CustomStyleExample.name}</Subtitle>
          <Description of={CustomStyleExample} />
          <Canvas of={CustomStyleExample} />

          <Subtitle>{PopularIconsExample.name}</Subtitle>
          <Description of={PopularIconsExample} />
          <Canvas of={PopularIconsExample} />

          <Heading>Props</Heading>
          <ArgTypes />
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
    name: "mdi:home",
    width: 24,
    color: "inherit",
  },
};

// ============================
// Sizes Example
// ============================
export const SizesExample: Story = {
  name: "Sizes Example",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Use the `width` prop to set icon size. The height will be the same as width.",
      },
      source: {
        code: `
<Icon name="mdi:home" width={16} />
<Icon name="mdi:home" width={20} />
<Icon name="mdi:home" width={24} />
<Icon name="mdi:home" width={32} />
<Icon name="mdi:home" width={48} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Icon name="mdi:home" width={16} />
        <Icon name="mdi:home" width={20} />
        <Icon name="mdi:home" width={24} />
        <Icon name="mdi:home" width={32} />
        <Icon name="mdi:home" width={48} />
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
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story:
          "Use the `color` prop to set icon color. Supports preset colors (`inherit`, `primary`, `success`, `error`, `warning`, `info`) or any CSS color value.",
      },
      source: {
        code: `
// Preset colors
<Icon name="mdi:circle" color="inherit" />
<Icon name="mdi:circle" color="primary" />
<Icon name="mdi:circle" color="success" />
<Icon name="mdi:circle" color="error" />
<Icon name="mdi:circle" color="warning" />
<Icon name="mdi:circle" color="info" />

// Custom colors
<Icon name="mdi:heart" color="#e91e63" />
<Icon name="mdi:star" color="gold" />
<Icon name="mdi:leaf" color="forestgreen"  />
<Icon name="mdi:water" color="deepskyblue"  />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Icon name="mdi:circle" color="inherit" />
          <Icon name="mdi:circle" color="primary" />
          <Icon name="mdi:circle" color="success" />
          <Icon name="mdi:circle" color="error" />
          <Icon name="mdi:circle" color="warning" />
          <Icon name="mdi:circle" color="info" />
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Icon name="mdi:heart" color="#e91e63" />
          <Icon name="mdi:star" color="gold" />
          <Icon name="mdi:leaf" color="forestgreen" />
          <Icon name="mdi:water" color="deepskyblue" />
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
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Use `style` prop for custom styles. It supports both a plain object and a theme callback function.",
      },
      source: {
        code: `
// Plain object style
<Icon
  name="mdi:account-circle"
  width={32}
  style={{ opacity: 0.5 }}
/>

// Theme callback style
<Icon
  name="mdi:palette"
  width={32}
  style={(theme) => ({ color: theme.paletteColors.main })}
/>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Icon name="mdi:account-circle" width={32} style={{ opacity: 0.5 }} />
        <Icon name="mdi:palette" width={32} style={(theme) => ({ color: theme.paletteColors.main })} />
      </div>
    );
  },
};

// ============================
// Popular Icons Example
// ============================
export const PopularIconsExample: Story = {
  name: "Popular Icons Example",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story:
          "Popular icon sets available through Iconify. Visit [icon-sets.iconify.design](https://icon-sets.iconify.design/) for the full catalog.",
      },
      source: {
        code: `
// MDI (Material Design Icons)
<Icon name="mdi:home" />
<Icon name="mdi:account" />
<Icon name="mdi:cog" />
<Icon name="mdi:magnify" />

// Solar (Modern UI icons)
<Icon name="solar:sun-bold" />
<Icon name="solar:moon-bold" />
<Icon name="solar:settings-bold" />
<Icon name="solar:bell-bold" />

// Lucide (Clean line icons)
<Icon name="lucide:heart" />
<Icon name="lucide:star" />
<Icon name="lucide:mail" />
<Icon name="lucide:calendar" />

// Logos (Brand logos)
<Icon name="logos:react" />
<Icon name="logos:vue" />
<Icon name="logos:typescript-icon" />
<Icon name="logos:github-icon" />

// Flagpack (Country flags)
<Icon name="flagpack:us" />
<Icon name="flagpack:cn" />
<Icon name="flagpack:jp" />
<Icon name="flagpack:gb-ukm" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const iconGroups = [
      {
        label: "MDI (Material Design Icons)",
        icons: ["mdi:home", "mdi:account", "mdi:cog", "mdi:magnify", "mdi:bell", "mdi:heart"],
      },
      {
        label: "Solar (Modern UI icons)",
        icons: [
          "solar:sun-bold",
          "solar:moon-bold",
          "solar:settings-bold",
          "solar:bell-bold",
          "solar:chat-round-dots-bold",
          "solar:trash-bin-trash-bold",
        ],
      },
      {
        label: "Lucide (Clean line icons)",
        icons: ["lucide:heart", "lucide:star", "lucide:mail", "lucide:calendar", "lucide:download", "lucide:upload"],
      },
      {
        label: "Logos (Brand logos)",
        icons: [
          "logos:react",
          "logos:vue",
          "logos:typescript-icon",
          "logos:github-icon",
          "logos:nodejs-icon",
          "logos:npm-icon",
        ],
      },
      {
        label: "Flagpack (Country flags)",
        icons: ["flagpack:us", "flagpack:cn", "flagpack:jp", "flagpack:gb-ukm", "flagpack:de", "flagpack:fr"],
      },
    ];

    return (
      <Space.Flex column spacing={10}>
        {iconGroups.map((group) => (
          <div key={group.label}>
            <Typography.Text>{group.label}</Typography.Text>
            <Space.Grid columns={{ xs: 6 }}>
              {group.icons.map((iconName) => (
                <div key={iconName} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <Icon name={iconName} width={24} />
                  <span style={{ fontSize: 10, color: "#999" }}>{iconName.split(":")[1]}</span>
                </div>
              ))}
            </Space.Grid>
          </div>
        ))}
      </Space.Flex>
    );
  },
};
