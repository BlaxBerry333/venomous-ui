import { ArgTypes, Canvas, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Avatar } from "@/react/components/Avatar";
import { Icon } from "@/react/components/Icon";
import Chip from "./Chip";

const meta = {
  title: "React/Components/<Chip>",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Visual variant/style.",
      type: { name: "string" },
      table: {
        type: { summary: '"filled" | "outlined"' },
        defaultValue: { summary: '"filled"' },
      },
      control: { type: "radio" },
      options: ["filled", "outlined"],
    },
    size: {
      description: "Size of the chip.",
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
        defaultValue: { summary: '"default"' },
      },
      control: { type: "select" },
      options: ["default", "primary", "success", "error", "warning", "info"],
    },
    disabled: {
      description: "Whether chip is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    selected: {
      description: "Whether chip is selected/active.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    clickable: {
      description: "Whether chip is clickable.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    deletable: {
      description: "Whether to show delete icon.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "Label text.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "text" },
    },
    Icon: {
      description: "Element to display on the left (icon, avatar, etc.).",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    DeleteIcon: {
      description: "Custom delete icon element.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    onDelete: {
      description: "Callback when delete icon is clicked.",
      table: {
        type: { summary: "() => void" },
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
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Compact element for tags, attributes, and actions</Subtitle>

          <Markdown>
            {`
Chips are compact elements that represent an input, attribute, or action.
They can be used to display tags, filter options, or trigger actions.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Chip } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      {/* Basic chip */}
      <Chip>Tag</Chip>

      {/* Outlined variant */}
      <Chip variant="outlined">Outlined</Chip>

      {/* With color */}
      <Chip color="primary">Primary</Chip>

      {/* Clickable */}
      <Chip clickable onClick={() => console.log('clicked')}>
        Click me
      </Chip>

      {/* Deletable */}
      <Chip deletable onDelete={() => console.log('deleted')}>
        Deletable
      </Chip>

      {/* With Icon */}
      <Chip Icon={<span>★</span>}>
        Favorite
      </Chip>
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{VariantsExample.name}</Heading>
          <Canvas of={VariantsExample} />

          <Heading>{SizesExample.name}</Heading>
          <Canvas of={SizesExample} />

          <Heading>{ColorsExample.name}</Heading>
          <Canvas of={ColorsExample} />

          <Heading>{ClickableExample.name}</Heading>
          <Canvas of={ClickableExample} />

          <Heading>{DeletableExample.name}</Heading>
          <Canvas of={DeletableExample} />

          <Heading>{WithIconExample.name}</Heading>
          <Canvas of={WithIconExample} />

          <Heading>{SelectableExample.name}</Heading>
          <Canvas of={SelectableExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    children: "Chip",
    variant: "filled",
    size: "medium",
    color: "default",
    disabled: false,
    selected: false,
    clickable: false,
    deletable: false,
  },
};

// ============================
// Variants Example
// ============================
export const VariantsExample: Story = {
  name: "Variants",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Chip supports `filled` and `outlined` variants.",
      },
      source: {
        code: `
<Chip variant="filled">Filled</Chip>
<Chip variant="outlined">Outlined</Chip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 12 }}>
        <Chip variant="filled">Filled</Chip>
        <Chip variant="outlined">Outlined</Chip>
      </div>
    );
  },
};

// ============================
// Sizes Example
// ============================
export const SizesExample: Story = {
  name: "Sizes",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Chip comes in three sizes: `small`, `medium`, and `large`.",
      },
      source: {
        code: `
<Chip size="small">Small</Chip>
<Chip size="medium">Medium</Chip>
<Chip size="large">Large</Chip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Chip size="small">Small</Chip>
        <Chip size="medium">Medium</Chip>
        <Chip size="large">Large</Chip>
      </div>
    );
  },
};

// ============================
// Colors Example
// ============================
export const ColorsExample: Story = {
  name: "Colors",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Chip supports multiple color themes for both filled and outlined variants.",
      },
      source: {
        code: `
{/* Filled */}
<Chip color="default">Default</Chip>
<Chip color="primary">Primary</Chip>
<Chip color="success">Success</Chip>
<Chip color="error">Error</Chip>
<Chip color="warning">Warning</Chip>
<Chip color="info">Info</Chip>

{/* Outlined */}
<Chip variant="outlined" color="default">Default</Chip>
<Chip variant="outlined" color="primary">Primary</Chip>
<Chip variant="outlined" color="success">Success</Chip>
<Chip variant="outlined" color="error">Error</Chip>
<Chip variant="outlined" color="warning">Warning</Chip>
<Chip variant="outlined" color="info">Info</Chip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Chip color="default">Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="error">Error</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="info">Info</Chip>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Chip variant="outlined" color="default">
            Default
          </Chip>
          <Chip variant="outlined" color="primary">
            Primary
          </Chip>
          <Chip variant="outlined" color="success">
            Success
          </Chip>
          <Chip variant="outlined" color="error">
            Error
          </Chip>
          <Chip variant="outlined" color="warning">
            Warning
          </Chip>
          <Chip variant="outlined" color="info">
            Info
          </Chip>
        </div>
      </div>
    );
  },
};

// ============================
// Clickable Example
// ============================
export const ClickableExample: Story = {
  name: "Clickable",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `clickable` prop or `onClick` handler to make chip interactive. Clickable chips have hover effects and cursor pointer.",
      },
      source: {
        code: `
<Chip clickable onClick={() => console.log('clicked')}>
  Click me
</Chip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", gap: 12 }}>
        <Chip clickable onClick={() => alert("Chip clicked!")}>
          Click me
        </Chip>
        <Chip variant="outlined" clickable onClick={() => alert("Outlined chip clicked!")}>
          Outlined clickable
        </Chip>
        <Chip color="primary" clickable onClick={() => alert("Primary chip clicked!")}>
          Primary clickable
        </Chip>
      </div>
    );
  },
};

// ============================
// Deletable Example
// ============================
export const DeletableExample: Story = {
  name: "Deletable",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `deletable` prop to show a delete icon. The `onDelete` callback is triggered when the icon is clicked.",
      },
      source: {
        code: `
<Chip deletable onDelete={() => console.log('deleted')}>
  Deletable
</Chip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [chips, setChips] = React.useState(["React", "Vue", "Angular", "Svelte"]);

    const handleDelete = (chipToDelete: string) => {
      setChips((prev) => prev.filter((chip) => chip !== chipToDelete));
    };

    return (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {chips.map((chip) => (
          <Chip key={chip} deletable onDelete={() => handleDelete(chip)}>
            {chip}
          </Chip>
        ))}
        {chips.length === 0 && (
          <button onClick={() => setChips(["React", "Vue", "Angular", "Svelte"])}>Reset chips</button>
        )}
      </div>
    );
  },
};

// ============================
// With Icon Element Example
// ============================
export const WithIconExample: Story = {
  name: "With Icon Element",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `Icon` prop to display an icon on the left side of the chip.",
      },
      source: {
        code: `
<Chip Icon={<span>★</span>}>Favorite</Chip>
<Chip Icon={<Icon icon="mdi:account" />} variant="outlined" color="primary" />
<Chip Icon={<Avatar size="small" imageSrc="https://xxx" style={{ marginRight: 4 }}  />}
>
  Avatar
</Chip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const StarIcon = () => (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );

    const CheckIcon = () => (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    );

    return (
      <div style={{ display: "flex", gap: 12 }}>
        <Chip Icon={<StarIcon />}>Favorite</Chip>
        <Chip Icon={<CheckIcon />} color="success">
          Completed
        </Chip>
        <Chip Icon={<Icon icon="mdi:account" />} variant="outlined" color="primary" />
        <Chip
          Icon={
            <Avatar
              size="small"
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              style={{ marginRight: 4 }}
            />
          }
        >
          Avatar
        </Chip>
      </div>
    );
  },
};

// ============================
// Selectable Example
// ============================
export const SelectableExample: Story = {
  name: "Selectable",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `selected` prop to show selected state. Combine with `clickable` for toggle behavior.",
      },
      source: {
        code: `
const [selected, setSelected] = useState(false);

<Chip
  selected={selected}
  clickable
  onClick={() => setSelected(!selected)}
>
  Toggle me
</Chip>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [selectedChips, setSelectedChips] = React.useState<string[]>(["React"]);

    const toggleChip = (chip: string) => {
      setSelectedChips((prev) => (prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]));
    };

    const chips = ["React", "Vue", "Angular", "Svelte", "Solid"];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {chips.map((chip) => (
            <Chip key={chip} selected={selectedChips.includes(chip)} clickable onClick={() => toggleChip(chip)}>
              {chip}
            </Chip>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {chips.map((chip) => (
            <Chip
              key={chip}
              variant="outlined"
              selected={selectedChips.includes(chip)}
              clickable
              onClick={() => toggleChip(chip)}
            >
              {chip}
            </Chip>
          ))}
        </div>
        <div style={{ fontSize: 14, color: "#666" }}>Selected: {selectedChips.join(", ") || "None"}</div>
      </div>
    );
  },
};
