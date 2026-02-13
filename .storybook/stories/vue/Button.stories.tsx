import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/vue/components/Button/Button.vue";
import { VueWrapper } from "../../wrappers";
import { BUTTON_COLOR_SCHEME_OPTIONS, BUTTON_SIZE_OPTIONS, BUTTON_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Button",
  parameters: {
    docs: {
      description: {
        component: `
Button is a clickable interactive element that triggers an action.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "The size of the button",
      control: "select",
      options: BUTTON_SIZE_OPTIONS,
      table: {
        type: { summary: BUTTON_SIZE_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"md"' },
      },
    },
    variant: {
      description: "The visual style variant of the button",
      control: "select",
      options: BUTTON_VARIANT_OPTIONS,
      table: {
        type: { summary: BUTTON_VARIANT_OPTIONS.map((v) => `"${v}"`).join(" | ") },
        defaultValue: { summary: '"solid"' },
      },
    },
    colorScheme: {
      description: "The color scheme of the button",
      control: "select",
      options: BUTTON_COLOR_SCHEME_OPTIONS,
      table: {
        type: { summary: BUTTON_COLOR_SCHEME_OPTIONS.map((c) => `"${c}"`).join(" | ") },
        defaultValue: { summary: '"theme"' },
      },
    },
    disabled: {
      description: "Whether the button is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      description: "Whether the button takes full width of its container",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Usage - Default story shown in Canvas as Playground
 * The canvas and source code serve as the basic usage example
 */
export const Default: Story = {
  name: "Basic Usage",
  render: (args) => <VueWrapper component={Button} props={args} children="Button" />,
  args: {
    size: "md",
    variant: "solid",
    colorScheme: "theme",
    disabled: false,
    fullWidth: false,
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/vue";
</script>

<template>
  <Button>Button</Button>
</template>`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <VueWrapper component={Button} props={{ size: "sm" }} children="Small" />
      <VueWrapper component={Button} props={{ size: "md" }} children="Medium" />
      <VueWrapper component={Button} props={{ size: "lg" }} children="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button comes in three sizes: small, medium, and large.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/vue";
</script>

<template>
  <div style="display: flex; align-items: center; gap: 8px">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
</template>`,
      },
    },
  },
};

export const Variants: Story = {
  name: "Variants",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <VueWrapper component={Button} props={{ variant: "solid" }} children="Solid" />
      <VueWrapper component={Button} props={{ variant: "outline" }} children="Outline" />
      <VueWrapper component={Button} props={{ variant: "ghost" }} children="Ghost" />
      <VueWrapper component={Button} props={{ variant: "link" }} children="Link" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Button supports four visual variants:
- **Solid**: Filled background (default)
- **Outline**: Border with transparent background
- **Ghost**: No border or background
- **Link**: Styled as a link`,
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/vue";
</script>

<template>
  <div style="display: flex; align-items: center; gap: 8px">
    <Button variant="solid">Solid</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
</template>`,
      },
    },
  },
};

export const ColorSchemes: Story = {
  name: "Color Schemes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Solid */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <VueWrapper component={Button} props={{ variant: "solid", colorScheme: "theme" }} children="Theme" />
        <VueWrapper component={Button} props={{ variant: "solid", colorScheme: "success" }} children="Success" />
        <VueWrapper component={Button} props={{ variant: "solid", colorScheme: "warning" }} children="Warning" />
        <VueWrapper component={Button} props={{ variant: "solid", colorScheme: "error" }} children="Error" />
        <VueWrapper component={Button} props={{ variant: "solid", colorScheme: "info" }} children="Info" />
      </div>
      {/* Outline */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <VueWrapper component={Button} props={{ variant: "outline", colorScheme: "theme" }} children="Theme" />
        <VueWrapper component={Button} props={{ variant: "outline", colorScheme: "success" }} children="Success" />
        <VueWrapper component={Button} props={{ variant: "outline", colorScheme: "warning" }} children="Warning" />
        <VueWrapper component={Button} props={{ variant: "outline", colorScheme: "error" }} children="Error" />
        <VueWrapper component={Button} props={{ variant: "outline", colorScheme: "info" }} children="Info" />
      </div>
      {/* Ghost */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <VueWrapper component={Button} props={{ variant: "ghost", colorScheme: "theme" }} children="Theme" />
        <VueWrapper component={Button} props={{ variant: "ghost", colorScheme: "success" }} children="Success" />
        <VueWrapper component={Button} props={{ variant: "ghost", colorScheme: "warning" }} children="Warning" />
        <VueWrapper component={Button} props={{ variant: "ghost", colorScheme: "error" }} children="Error" />
        <VueWrapper component={Button} props={{ variant: "ghost", colorScheme: "info" }} children="Info" />
      </div>
      {/* Link */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <VueWrapper component={Button} props={{ variant: "link", colorScheme: "theme" }} children="Theme" />
        <VueWrapper component={Button} props={{ variant: "link", colorScheme: "success" }} children="Success" />
        <VueWrapper component={Button} props={{ variant: "link", colorScheme: "warning" }} children="Warning" />
        <VueWrapper component={Button} props={{ variant: "link", colorScheme: "error" }} children="Error" />
        <VueWrapper component={Button} props={{ variant: "link", colorScheme: "info" }} children="Info" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Button supports multiple color schemes for different semantic meanings. Each row shows a different variant (solid, outline, ghost, link).",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/vue";
</script>

<template>
  <!-- Solid -->
  <Button variant="solid" color-scheme="theme">Theme</Button>
  <Button variant="solid" color-scheme="success">Success</Button>
  <Button variant="solid" color-scheme="warning">Warning</Button>
  <Button variant="solid" color-scheme="error">Error</Button>
  <Button variant="solid" color-scheme="info">Info</Button>

  <!-- Outline -->
  <Button variant="outline" color-scheme="theme">Theme</Button>
  <Button variant="outline" color-scheme="success">Success</Button>
  ...

  <!-- Ghost -->
  <Button variant="ghost" color-scheme="theme">Theme</Button>
  ...

  <!-- Link -->
  <Button variant="link" color-scheme="theme">Theme</Button>
  ...
</template>`,
      },
    },
  },
};

export const Disabled: Story = {
  name: "Disabled",
  tags: ["!dev"],
  render: (args) => <VueWrapper component={Button} props={args} children="Disabled" />,
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled buttons are not interactive and have reduced opacity.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/vue";
</script>

<template>
  <Button disabled>Disabled</Button>
</template>`,
      },
    },
  },
};

export const FullWidth: Story = {
  name: "Full Width",
  tags: ["!dev"],
  render: (args) => <VueWrapper component={Button} props={args} children="Full Width Button" />,
  args: {
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Full width button stretches to fill its container.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/vue";
</script>

<template>
  <Button full-width>Full Width Button</Button>
</template>`,
      },
    },
  },
};
