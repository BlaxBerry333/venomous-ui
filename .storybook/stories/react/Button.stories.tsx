import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import { BUTTON_COLOR_SCHEME_OPTIONS, BUTTON_SIZE_OPTIONS, BUTTON_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Button> = {
  title: "React Components/Button",
  component: Button,
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
    className: {
      description: "Additional CSS class names",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      description: "Button content",
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Basic Usage - Default story shown in Canvas as Playground
 * The canvas and source code serve as the basic usage example
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    children: "Button",
    size: "md",
    variant: "solid",
    colorScheme: "theme",
    disabled: false,
    fullWidth: false,
  },
  parameters: {
    docs: {
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/react";

export default function Demo() {
  return <Button>Button</Button>;
}`,
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button comes in three sizes: small, medium, and large.",
      },
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/react";

export default function Demo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`,
      },
    },
  },
};

export const Variants: Story = {
  name: "Variants",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
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
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/react";

export default function Demo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`,
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
        <Button variant="solid" colorScheme="theme">
          Theme
        </Button>
        <Button variant="solid" colorScheme="success">
          Success
        </Button>
        <Button variant="solid" colorScheme="warning">
          Warning
        </Button>
        <Button variant="solid" colorScheme="error">
          Error
        </Button>
        <Button variant="solid" colorScheme="info">
          Info
        </Button>
      </div>
      {/* Outline */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button variant="outline" colorScheme="theme">
          Theme
        </Button>
        <Button variant="outline" colorScheme="success">
          Success
        </Button>
        <Button variant="outline" colorScheme="warning">
          Warning
        </Button>
        <Button variant="outline" colorScheme="error">
          Error
        </Button>
        <Button variant="outline" colorScheme="info">
          Info
        </Button>
      </div>
      {/* Ghost */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button variant="ghost" colorScheme="theme">
          Theme
        </Button>
        <Button variant="ghost" colorScheme="success">
          Success
        </Button>
        <Button variant="ghost" colorScheme="warning">
          Warning
        </Button>
        <Button variant="ghost" colorScheme="error">
          Error
        </Button>
        <Button variant="ghost" colorScheme="info">
          Info
        </Button>
      </div>
      {/* Link */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button variant="link" colorScheme="theme">
          Theme
        </Button>
        <Button variant="link" colorScheme="success">
          Success
        </Button>
        <Button variant="link" colorScheme="warning">
          Warning
        </Button>
        <Button variant="link" colorScheme="error">
          Error
        </Button>
        <Button variant="link" colorScheme="info">
          Info
        </Button>
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
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/react";

export default function Demo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Solid */}
      <Button variant="solid" colorScheme="theme">Theme</Button>
      <Button variant="solid" colorScheme="success">Success</Button>
      ...

      {/* Outline */}
      <Button variant="outline" colorScheme="theme">Theme</Button>
      ...

      {/* Ghost */}
      <Button variant="ghost" colorScheme="theme">Theme</Button>
      ...

      {/* Link */}
      <Button variant="link" colorScheme="theme">Theme</Button>
      ...
    </div>
  );
}`,
      },
    },
  },
};

export const Disabled: Story = {
  name: "Disabled",
  tags: ["!dev"],
  args: {
    children: "Disabled",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled buttons are not interactive and have reduced opacity.",
      },
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/react";

export default function Demo() {
  return <Button disabled>Disabled</Button>;
}`,
      },
    },
  },
};

export const FullWidth: Story = {
  name: "Full Width",
  tags: ["!dev"],
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Full width button stretches to fill its container.",
      },
      source: {
        code: `"use client";

import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/button.css";
import { Button } from "venomous-ui/react";

export default function Demo() {
  return <Button fullWidth>Full Width Button</Button>;
}`,
      },
    },
  },
};
