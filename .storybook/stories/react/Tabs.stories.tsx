import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import type { TTabsUnmountStrategy, TTabsVariant } from "@/core/types";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/react/components/Tabs";
import { TABS_ORIENTATION_OPTIONS, TABS_UNMOUNT_STRATEGY_OPTIONS, TABS_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/tabs.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Tabs> = {
  title: "React Components/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `Tabs organizes content into tabbed sections. A compound component with Tabs, List, Tab, and Panel.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
      subcomponents: [
        { name: "<Tabs.List>", component: TabsList },
        { name: "<Tabs.Tab>", component: TabsTab },
        { name: "<Tabs.Panel>", component: TabsPanel },
      ],
    },
  },
  argTypes: {
    defaultValue: {
      description: "Initial active tab value (uncontrolled mode)",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      description: "Active tab value (controlled mode)",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      description: "Callback when active tab changes",
      control: false,
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    variant: {
      description: "Visual style variant",
      control: "select",
      options: TABS_VARIANT_OPTIONS,
      table: {
        type: { summary: TABS_VARIANT_OPTIONS.map((v) => `"${v}"`).join(" | ") },
        defaultValue: { summary: '"line"' },
      },
    },
    orientation: {
      description: "Tab list orientation",
      control: "select",
      options: TABS_ORIENTATION_OPTIONS,
      table: {
        type: { summary: TABS_ORIENTATION_OPTIONS.map((o) => `"${o}"`).join(" | ") },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    unmountStrategy: {
      description: "How to handle inactive panel content",
      control: "select",
      options: TABS_UNMOUNT_STRATEGY_OPTIONS,
      table: {
        type: { summary: TABS_UNMOUNT_STRATEGY_OPTIONS.map((s) => `"${s}"`).join(" | ") },
        defaultValue: { summary: '"keepMounted"' },
      },
    },
    children: {
      description: "Tabs.List and Tabs.Panel components",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    className: {
      description: "Additional CSS class names",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * Basic Usage - Default story shown in Canvas as Playground
 */
export const Default: Story = {
  name: "Basic Usage",
  args: {
    variant: "line",
    orientation: "horizontal",
    unmountStrategy: "keepMounted",
    defaultValue: "tab1",
  },
  render: (args) => (
    <Tabs
      defaultValue={args.defaultValue}
      variant={args.variant}
      orientation={args.orientation}
      unmountStrategy={args.unmountStrategy}
    >
      <Tabs.List>
        <Tabs.Tab value="tab1">Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Security</Tabs.Tab>
        <Tabs.Tab value="tab3">Notifications</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <div style={{ padding: "16px 0" }}>
          <h3 style={{ margin: "0 0 8px" }}>Account Settings</h3>
          <p style={{ margin: 0 }}>Manage your account information and preferences.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <div style={{ padding: "16px 0" }}>
          <h3 style={{ margin: "0 0 8px" }}>Security Settings</h3>
          <p style={{ margin: 0 }}>Configure password, 2FA, and security options.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <div style={{ padding: "16px 0" }}>
          <h3 style={{ margin: "0 0 8px" }}>Notification Preferences</h3>
          <p style={{ margin: 0 }}>Choose what notifications you want to receive.</p>
        </div>
      </Tabs.Panel>
    </Tabs>
  ),
  parameters: {
    docs: {
      source: {
        code: `import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/tabs.css";
import { Tabs } from "venomous-ui/react";

export default function Demo() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Security</Tabs.Tab>
        <Tabs.Tab value="tab3">Notifications</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">Account settings content</Tabs.Panel>
      <Tabs.Panel value="tab2">Security settings content</Tabs.Panel>
      <Tabs.Panel value="tab3">Notification preferences</Tabs.Panel>
    </Tabs>
  );
}`,
      },
    },
  },
};

/**
 * Variants Demo
 */
function VariantsDemo() {
  const variants: TTabsVariant[] = ["line", "pill"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {variants.map((variant) => (
        <div key={variant}>
          <h4 style={{ margin: "0 0 12px", textTransform: "capitalize" }}>{variant}</h4>
          <Tabs defaultValue="tab1" variant={variant}>
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab One</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab Two</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab Three</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">
              <p style={{ margin: "16px 0 0" }}>Content for tab one with variant=&quot;{variant}&quot;</p>
            </Tabs.Panel>
            <Tabs.Panel value="tab2">
              <p style={{ margin: "16px 0 0" }}>Content for tab two</p>
            </Tabs.Panel>
            <Tabs.Panel value="tab3">
              <p style={{ margin: "16px 0 0" }}>Content for tab three</p>
            </Tabs.Panel>
          </Tabs>
        </div>
      ))}
    </div>
  );
}

export const Variants: Story = {
  name: "Variants",
  tags: ["!dev"],
  render: () => <VariantsDemo />,
  parameters: {
    docs: {
      description: {
        story: `Tabs supports two visual variants:
- **line**: Simple underline indicator (default)
- **pill**: Capsule-shaped chip style tabs`,
      },
      source: {
        code: `<Tabs defaultValue="tab1" variant="pill">
  <Tabs.List>
    <Tabs.Tab value="tab1">Tab One</Tabs.Tab>
    <Tabs.Tab value="tab2">Tab Two</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">Content</Tabs.Panel>
  <Tabs.Panel value="tab2">Content</Tabs.Panel>
</Tabs>`,
      },
    },
  },
};

/**
 * Vertical Orientation Demo
 */
export const VerticalOrientation: Story = {
  name: "Vertical Orientation",
  tags: ["!dev"],
  render: () => (
    <Tabs defaultValue="tab1" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="tab1">General</Tabs.Tab>
        <Tabs.Tab value="tab2">Privacy</Tabs.Tab>
        <Tabs.Tab value="tab3">Advanced</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <div style={{ padding: "0 16px" }}>
          <h3 style={{ margin: "0 0 8px" }}>General Settings</h3>
          <p style={{ margin: 0 }}>Configure general application settings.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <div style={{ padding: "0 16px" }}>
          <h3 style={{ margin: "0 0 8px" }}>Privacy Settings</h3>
          <p style={{ margin: 0 }}>Manage your privacy preferences.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <div style={{ padding: "0 16px" }}>
          <h3 style={{ margin: "0 0 8px" }}>Advanced Settings</h3>
          <p style={{ margin: 0 }}>Advanced configuration options.</p>
        </div>
      </Tabs.Panel>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Set `orientation="vertical"` for a vertical tab layout. Arrow Up/Down keys navigate between tabs in this mode.',
      },
      source: {
        code: `<Tabs defaultValue="tab1" orientation="vertical">
  <Tabs.List>
    <Tabs.Tab value="tab1">General</Tabs.Tab>
    <Tabs.Tab value="tab2">Privacy</Tabs.Tab>
    <Tabs.Tab value="tab3">Advanced</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">General content</Tabs.Panel>
  <Tabs.Panel value="tab2">Privacy content</Tabs.Panel>
  <Tabs.Panel value="tab3">Advanced content</Tabs.Panel>
</Tabs>`,
      },
    },
  },
};

/**
 * Disabled Tabs Demo
 */
export const DisabledTabs: Story = {
  name: "Disabled Tabs",
  tags: ["!dev"],
  render: () => (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Available</Tabs.Tab>
        <Tabs.Tab value="tab2" disabled>
          Coming Soon
        </Tabs.Tab>
        <Tabs.Tab value="tab3">Also Available</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <p style={{ margin: "16px 0 0" }}>This tab is available.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <p style={{ margin: "16px 0 0" }}>This content is not accessible.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <p style={{ margin: "16px 0 0" }}>This tab is also available.</p>
      </Tabs.Panel>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Individual tabs can be disabled using the `disabled` prop. Disabled tabs are skipped during keyboard navigation.",
      },
      source: {
        code: `<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Tab value="tab1">Available</Tabs.Tab>
    <Tabs.Tab value="tab2" disabled>Coming Soon</Tabs.Tab>
    <Tabs.Tab value="tab3">Also Available</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">Available content</Tabs.Panel>
  <Tabs.Panel value="tab2">Disabled content</Tabs.Panel>
  <Tabs.Panel value="tab3">Available content</Tabs.Panel>
</Tabs>`,
      },
    },
  },
};

/**
 * Controlled Mode Demo
 */
function ControlledDemo() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <p style={{ margin: "0 0 16px" }}>
        Active tab: <strong>{activeTab}</strong>
      </p>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="tab1">First</Tabs.Tab>
          <Tabs.Tab value="tab2">Second</Tabs.Tab>
          <Tabs.Tab value="tab3">Third</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">
          <p style={{ margin: "16px 0 0" }}>First panel content</p>
        </Tabs.Panel>
        <Tabs.Panel value="tab2">
          <p style={{ margin: "16px 0 0" }}>Second panel content</p>
        </Tabs.Panel>
        <Tabs.Panel value="tab3">
          <p style={{ margin: "16px 0 0" }}>Third panel content</p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export const Controlled: Story = {
  name: "Controlled Mode",
  tags: ["!dev"],
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Use `value` and `onValueChange` props for controlled mode, giving you full control over the active tab state.",
      },
      source: {
        code: `"use client";

import { useState } from "react";
import { Tabs } from "venomous-ui/react";

export default function Demo() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="tab1">First</Tabs.Tab>
        <Tabs.Tab value="tab2">Second</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">First content</Tabs.Panel>
      <Tabs.Panel value="tab2">Second content</Tabs.Panel>
    </Tabs>
  );
}`,
      },
    },
  },
};

/**
 * Unmount Strategy Demo - Form state preservation
 */
function UnmountStrategyDemo() {
  const [strategy, setStrategy] = useState<TTabsUnmountStrategy>("keepMounted");

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <label style={{ marginRight: "8px" }}>Unmount Strategy:</label>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value as TTabsUnmountStrategy)}
          style={{ padding: "4px 8px" }}
        >
          <option value="keepMounted">keepMounted (preserves state)</option>
          <option value="unmountOnHide">unmountOnHide (no state preservation)</option>
        </select>
      </div>
      <Tabs key={strategy} defaultValue="tab1" unmountStrategy={strategy}>
        <Tabs.List>
          <Tabs.Tab value="tab1">Form Tab</Tabs.Tab>
          <Tabs.Tab value="tab2">Other Tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">
          <div style={{ padding: "16px 0" }}>
            <p style={{ margin: "0 0 12px" }}>
              Try typing in this input, switch to &quot;Other Tab&quot;, then come back:
            </p>
            <input type="text" placeholder="Type something..." style={{ padding: "8px", width: "200px" }} />
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="tab2">
          <p style={{ margin: "16px 0 0" }}>Switch back to &quot;Form Tab&quot; to see if your input was preserved.</p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export const UnmountStrategy: Story = {
  name: "Unmount Strategies",
  tags: ["!dev"],
  render: () => <UnmountStrategyDemo />,
  parameters: {
    docs: {
      description: {
        story: `The \`unmountStrategy\` prop controls how inactive panel content is handled:

- **keepMounted** (default): All panels stay in DOM. Form inputs preserve their state when switching tabs.
- **unmountOnHide**: Panels unmount when hidden. Memory optimal but no state preservation.

Try the demo: type in the input, switch tabs, and see if your input is preserved based on the strategy.`,
      },
      source: {
        code: `// Preserve form state (default)
<Tabs defaultValue="tab1" unmountStrategy="keepMounted">
  ...
</Tabs>

// Unmount when hidden (memory optimal)
<Tabs defaultValue="tab1" unmountStrategy="unmountOnHide">
  ...
</Tabs>`,
      },
    },
  },
};
