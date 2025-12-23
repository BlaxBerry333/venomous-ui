import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/react/components/Icon";
import Avatar from "./Avatar";

const meta = {
  title: "React/Components/<Avatar>",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Avatar size.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    variant: {
      description: "Avatar shape variant.",
      type: { name: "string" },
      table: {
        type: { summary: '"circular" | "rounded" | "square"' },
        defaultValue: { summary: '"circular"' },
      },
      control: { type: "radio" },
      options: ["circular", "rounded", "square"],
    },
    imageSrc: {
      description: "Image source URL (supports imported image modules).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    alt: {
      description: "Alt text for the image (also used as aria-label).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
      if: { arg: "imageSrc", truthy: true },
    },
    fallbackText: {
      description: "Fallback text displayed when image is not provided or fails to load (typically initials).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
      if: { arg: "imageSrc", truthy: false },
    },
    fallbackIcon: {
      description: "Fallback icon displayed when no image or text is available.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<Icon />"],
      mapping: {
        undefined: undefined,
        "<Icon />": <Icon name="mdi:star" />,
      },
      if: { arg: "fallbackText", truthy: false },
    },
    ImageProps: {
      description: "Props passed to the img element.",
      table: {
        type: { summary: "ImgHTMLAttributes<HTMLImageElement>" },
      },
      control: false,
      if: { arg: "imageSrc", truthy: true },
    },
    onImageLoadError: {
      description: "Callback when image fails to load.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(event: SyntheticEvent<HTMLImageElement>) => void" },
      },
      control: false,
      if: { arg: "imageSrc", truthy: true },
    },
    children: {
      description: "Children elements (highest priority, overrides all other content).",
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
          <Subtitle>Styled Avatar Component</Subtitle>

          <Markdown>
            {`
A styled avatar component that displays user profile images, text initials, or icons.
Supports automatic fallback when image fails to load.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Avatar } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Image avatar */}
      <Avatar imageSrc="/user.jpg" alt="John Doe" />

      {/* Text initials (fallback) */}
      <Avatar fallbackText="JD" />

      {/* Custom icon (fallback) */}
      <Avatar fallbackIcon={<Icon name="mdi:account-group" />} />

      {/* Image with fallback text (shows text if image fails) */}
      <Avatar imageSrc="/user.jpg" fallbackText="JD" />

      {/* With style callback */}
      <Avatar
        fallbackText="AB"
        style={(theme) => ({
          backgroundColor: theme.paletteColors.main,
          color: "#ffffff",
        })}
      />
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{FallbackExample.name}</Heading>
          <Description of={FallbackExample} />
          <Canvas of={FallbackExample} />

          <Heading>{StyleCallbackExample.name}</Heading>
          <Description of={StyleCallbackExample} />
          <Canvas of={StyleCallbackExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    imageSrc: "https://i.pravatar.cc/150?img=7",
    alt: "User Avatar",
    fallbackText: "",
    fallbackIcon: undefined,
    size: "medium",
    variant: "circular",
  },
};

// ============================
// Fallback Example
// ============================
export const FallbackExample: Story = {
  name: "Fallback Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Content rendering priority: `children` > `imageSrc` > `fallbackText` > `fallbackIcon`.",
      },
      source: {
        code: `
{/* Custom fallback icon */}
<Avatar>
  <Icon name="mdi:star" width={40} />
</Avatar>

{/* Image load success */}
 <Avatar imageSrc="/valid.jpg" alt="User" />

{/* Image load failure - falls back to text */}
<Avatar imageSrc="/invalid.jpg" fallbackText="FB" />

{/* Image load failure - falls back to icon */}
<Avatar imageSrc="/invalid.jpg" fallbackIcon={<Icon name="mdi:alert" />} />

{/* Image load failure - falls back to default */}
<Avatar imageSrc="/invalid.jpg" />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Avatar>
          <Icon name="mdi:star" width={40} />
        </Avatar>
        <Avatar imageSrc={Playground.args?.imageSrc} alt="User" />
        <Avatar imageSrc="/invalid-image-url.jpg" fallbackText="FB" />
        <Avatar imageSrc="/invalid-image-url.jpg" fallbackIcon={<Icon name="mdi:alert" />} />
        <Avatar imageSrc="/invalid-image-url.jpg" />
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
<Avatar
  fallbackText="S"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.success.main,
    color: "#ffffff",
  })}
/>
<Avatar
  fallbackText="W"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.warning.main,
    color: "#ffffff",
  })}
/>
<Avatar
  fallbackText="E"
  style={(theme) => ({
    backgroundColor: theme.semanticColors.error.main,
    color: "#ffffff",
  })}
/>
<Avatar
  fallbackText="I"
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
        <Avatar
          fallbackText="S"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.success.main,
            color: "#ffffff",
          })}
        />
        <Avatar
          fallbackText="W"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.warning.main,
            color: "#ffffff",
          })}
        />
        <Avatar
          fallbackText="E"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.error.main,
            color: "#ffffff",
          })}
        />
        <Avatar
          fallbackText="I"
          style={(theme) => ({
            backgroundColor: theme.semanticColors.info.main,
            color: "#ffffff",
          })}
        />
      </div>
    );
  },
};
