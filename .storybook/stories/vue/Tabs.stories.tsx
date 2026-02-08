import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { h } from "vue";

import type { TTabsUnmountStrategy, TTabsVariant } from "@/core/types";
import Tabs from "@/vue/components/Tabs/Tabs.vue";
import TabsList from "@/vue/components/Tabs/TabsList.vue";
import TabsPanel from "@/vue/components/Tabs/TabsPanel.vue";
import TabsTab from "@/vue/components/Tabs/TabsTab.vue";
import { VueWrapper } from "../../wrappers";
import { TABS_ORIENTATION_OPTIONS, TABS_UNMOUNT_STRATEGY_OPTIONS, TABS_VARIANT_OPTIONS } from "../constants";

import "@/core/styles/components/tabs.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Tabs",
  parameters: {
    docs: {
      description: {
        component: `Tabs organizes content into tabbed sections. A compound component with Tabs, List, Tab, and Panel.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.`,
      },
      subcomponents: [
        {
          name: "<TabsList>",
          argTypes: {
            className: {
              name: "className",
              description: "Additional CSS class names",
              table: { type: { summary: "string" }, defaultValue: { summary: '""' } },
            },
          },
        },
        {
          name: "<TabsTab>",
          argTypes: {
            value: {
              name: "value",
              description: "Unique value identifying this tab",
              table: { type: { summary: "string" } },
            },
            disabled: {
              name: "disabled",
              description: "Whether the tab is disabled",
              table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
            },
          },
        },
        {
          name: "<TabsPanel>",
          argTypes: {
            value: {
              name: "value",
              description: "Value of the corresponding tab",
              table: { type: { summary: "string" } },
            },
          },
        },
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
    modelValue: {
      description: "Active tab value (v-model, controlled mode)",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    "@update:modelValue": {
      description: "Event emitted when active tab changes",
      control: false,
      table: {
        type: { summary: "event" },
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
    "#default": {
      description: "TabsList and TabsPanel components",
      control: false,
      table: {
        type: { summary: "slot" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Helper to render Vue Tabs structure
 */
function renderTabs({
  variant = "line",
  orientation = "horizontal",
  unmountStrategy = "keepMounted",
  defaultValue = "tab1",
}: {
  variant?: TTabsVariant;
  orientation?: "horizontal" | "vertical";
  unmountStrategy?: TTabsUnmountStrategy;
  defaultValue?: string;
}) {
  return (
    <VueWrapper
      component={Tabs}
      props={{ defaultValue, variant, orientation, unmountStrategy }}
      children={{
        default: () => [
          h(TabsList, null, {
            default: () => [
              h(TabsTab, { value: "tab1" }, { default: () => "Account" }),
              h(TabsTab, { value: "tab2" }, { default: () => "Security" }),
              h(TabsTab, { value: "tab3" }, { default: () => "Notifications" }),
            ],
          }),
          h(
            TabsPanel,
            { value: "tab1" },
            {
              default: () =>
                h("div", { style: { padding: "16px 0" } }, [
                  h("h3", { style: { margin: "0 0 8px" } }, "Account Settings"),
                  h("p", { style: { margin: 0 } }, "Manage your account information and preferences."),
                ]),
            },
          ),
          h(
            TabsPanel,
            { value: "tab2" },
            {
              default: () =>
                h("div", { style: { padding: "16px 0" } }, [
                  h("h3", { style: { margin: "0 0 8px" } }, "Security Settings"),
                  h("p", { style: { margin: 0 } }, "Configure password, 2FA, and security options."),
                ]),
            },
          ),
          h(
            TabsPanel,
            { value: "tab3" },
            {
              default: () =>
                h("div", { style: { padding: "16px 0" } }, [
                  h("h3", { style: { margin: "0 0 8px" } }, "Notification Preferences"),
                  h("p", { style: { margin: 0 } }, "Choose what notifications you want to receive."),
                ]),
            },
          ),
        ],
      }}
    />
  );
}

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
  render: (args) =>
    renderTabs({
      variant: args.variant,
      orientation: args.orientation,
      unmountStrategy: args.unmountStrategy,
      defaultValue: args.defaultValue,
    }),
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/tabs.css";
import { Tabs, TabsList, TabsTab, TabsPanel } from "venomous-ui/vue";
</script>

<template>
  <Tabs default-value="tab1">
    <TabsList>
      <TabsTab value="tab1">Account</TabsTab>
      <TabsTab value="tab2">Security</TabsTab>
      <TabsTab value="tab3">Notifications</TabsTab>
    </TabsList>
    <TabsPanel value="tab1">Account settings content</TabsPanel>
    <TabsPanel value="tab2">Security settings content</TabsPanel>
    <TabsPanel value="tab3">Notification preferences</TabsPanel>
  </Tabs>
</template>`,
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
          <VueWrapper
            component={Tabs}
            props={{ defaultValue: "tab1", variant }}
            children={{
              default: () => [
                h(TabsList, null, {
                  default: () => [
                    h(TabsTab, { value: "tab1" }, { default: () => "Tab One" }),
                    h(TabsTab, { value: "tab2" }, { default: () => "Tab Two" }),
                    h(TabsTab, { value: "tab3" }, { default: () => "Tab Three" }),
                  ],
                }),
                h(
                  TabsPanel,
                  { value: "tab1" },
                  {
                    default: () =>
                      h("p", { style: { margin: "16px 0 0" } }, `Content for tab one with variant="${variant}"`),
                  },
                ),
                h(
                  TabsPanel,
                  { value: "tab2" },
                  {
                    default: () => h("p", { style: { margin: "16px 0 0" } }, "Content for tab two"),
                  },
                ),
                h(
                  TabsPanel,
                  { value: "tab3" },
                  {
                    default: () => h("p", { style: { margin: "16px 0 0" } }, "Content for tab three"),
                  },
                ),
              ],
            }}
          />
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
        language: "html",
        code: `<Tabs default-value="tab1" variant="pill">
  <TabsList>
    <TabsTab value="tab1">Tab One</TabsTab>
    <TabsTab value="tab2">Tab Two</TabsTab>
  </TabsList>
  <TabsPanel value="tab1">Content</TabsPanel>
  <TabsPanel value="tab2">Content</TabsPanel>
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
    <VueWrapper
      component={Tabs}
      props={{ defaultValue: "tab1", orientation: "vertical" }}
      children={{
        default: () => [
          h(TabsList, null, {
            default: () => [
              h(TabsTab, { value: "tab1" }, { default: () => "General" }),
              h(TabsTab, { value: "tab2" }, { default: () => "Privacy" }),
              h(TabsTab, { value: "tab3" }, { default: () => "Advanced" }),
            ],
          }),
          h(
            TabsPanel,
            { value: "tab1" },
            {
              default: () =>
                h("div", { style: { padding: "0 16px" } }, [
                  h("h3", { style: { margin: "0 0 8px" } }, "General Settings"),
                  h("p", { style: { margin: 0 } }, "Configure general application settings."),
                ]),
            },
          ),
          h(
            TabsPanel,
            { value: "tab2" },
            {
              default: () =>
                h("div", { style: { padding: "0 16px" } }, [
                  h("h3", { style: { margin: "0 0 8px" } }, "Privacy Settings"),
                  h("p", { style: { margin: 0 } }, "Manage your privacy preferences."),
                ]),
            },
          ),
          h(
            TabsPanel,
            { value: "tab3" },
            {
              default: () =>
                h("div", { style: { padding: "0 16px" } }, [
                  h("h3", { style: { margin: "0 0 8px" } }, "Advanced Settings"),
                  h("p", { style: { margin: 0 } }, "Advanced configuration options."),
                ]),
            },
          ),
        ],
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Set `orientation="vertical"` for a vertical tab layout. Arrow Up/Down keys navigate between tabs in this mode.',
      },
      source: {
        language: "html",
        code: `<Tabs default-value="tab1" orientation="vertical">
  <TabsList>
    <TabsTab value="tab1">General</TabsTab>
    <TabsTab value="tab2">Privacy</TabsTab>
    <TabsTab value="tab3">Advanced</TabsTab>
  </TabsList>
  <TabsPanel value="tab1">General content</TabsPanel>
  <TabsPanel value="tab2">Privacy content</TabsPanel>
  <TabsPanel value="tab3">Advanced content</TabsPanel>
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
    <VueWrapper
      component={Tabs}
      props={{ defaultValue: "tab1" }}
      children={{
        default: () => [
          h(TabsList, null, {
            default: () => [
              h(TabsTab, { value: "tab1" }, { default: () => "Available" }),
              h(TabsTab, { value: "tab2", disabled: true }, { default: () => "Coming Soon" }),
              h(TabsTab, { value: "tab3" }, { default: () => "Also Available" }),
            ],
          }),
          h(
            TabsPanel,
            { value: "tab1" },
            {
              default: () => h("p", { style: { margin: "16px 0 0" } }, "This tab is available."),
            },
          ),
          h(
            TabsPanel,
            { value: "tab2" },
            {
              default: () => h("p", { style: { margin: "16px 0 0" } }, "This content is not accessible."),
            },
          ),
          h(
            TabsPanel,
            { value: "tab3" },
            {
              default: () => h("p", { style: { margin: "16px 0 0" } }, "This tab is also available."),
            },
          ),
        ],
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Individual tabs can be disabled using the `disabled` prop. Disabled tabs are skipped during keyboard navigation.",
      },
      source: {
        language: "html",
        code: `<Tabs default-value="tab1">
  <TabsList>
    <TabsTab value="tab1">Available</TabsTab>
    <TabsTab value="tab2" disabled>Coming Soon</TabsTab>
    <TabsTab value="tab3">Also Available</TabsTab>
  </TabsList>
  <TabsPanel value="tab1">Available content</TabsPanel>
  <TabsPanel value="tab2">Disabled content</TabsPanel>
  <TabsPanel value="tab3">Available content</TabsPanel>
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
      <VueWrapper
        component={Tabs}
        props={{
          modelValue: activeTab,
          "onUpdate:modelValue": setActiveTab,
        }}
        children={{
          default: () => [
            h(TabsList, null, {
              default: () => [
                h(TabsTab, { value: "tab1" }, { default: () => "First" }),
                h(TabsTab, { value: "tab2" }, { default: () => "Second" }),
                h(TabsTab, { value: "tab3" }, { default: () => "Third" }),
              ],
            }),
            h(
              TabsPanel,
              { value: "tab1" },
              {
                default: () => h("p", { style: { margin: "16px 0 0" } }, "First panel content"),
              },
            ),
            h(
              TabsPanel,
              { value: "tab2" },
              {
                default: () => h("p", { style: { margin: "16px 0 0" } }, "Second panel content"),
              },
            ),
            h(
              TabsPanel,
              { value: "tab3" },
              {
                default: () => h("p", { style: { margin: "16px 0 0" } }, "Third panel content"),
              },
            ),
          ],
        }}
      />
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
        story: "Use `v-model` for controlled mode, giving you full control over the active tab state.",
      },
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { Tabs, TabsList, TabsTab, TabsPanel } from "venomous-ui/vue";
import { ref } from "vue";

const activeTab = ref("tab1");
</script>

<template>
  <Tabs v-model="activeTab">
    <TabsList>
      <TabsTab value="tab1">First</TabsTab>
      <TabsTab value="tab2">Second</TabsTab>
    </TabsList>
    <TabsPanel value="tab1">First content</TabsPanel>
    <TabsPanel value="tab2">Second content</TabsPanel>
  </Tabs>
</template>`,
      },
    },
  },
};

/**
 * Unmount Strategy Demo
 */
function UnmountStrategyDemo() {
  const [strategy, setStrategy] = useState<TTabsUnmountStrategy>("keepMounted");
  const [key, setKey] = useState(0);

  const handleStrategyChange = (newStrategy: TTabsUnmountStrategy) => {
    setStrategy(newStrategy);
    setKey((k) => k + 1);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <label style={{ marginRight: "8px" }}>Unmount Strategy:</label>
        <select
          value={strategy}
          onChange={(e) => handleStrategyChange(e.target.value as TTabsUnmountStrategy)}
          style={{ padding: "4px 8px" }}
        >
          <option value="keepMounted">keepMounted (preserves state)</option>
          <option value="unmountOnHide">unmountOnHide (no state preservation)</option>
        </select>
      </div>
      <VueWrapper
        key={key}
        component={Tabs}
        props={{ defaultValue: "tab1", unmountStrategy: strategy }}
        children={{
          default: () => [
            h(TabsList, null, {
              default: () => [
                h(TabsTab, { value: "tab1" }, { default: () => "Form Tab" }),
                h(TabsTab, { value: "tab2" }, { default: () => "Other Tab" }),
              ],
            }),
            h(
              TabsPanel,
              { value: "tab1" },
              {
                default: () =>
                  h("div", { style: { padding: "16px 0" } }, [
                    h(
                      "p",
                      { style: { margin: "0 0 12px" } },
                      'Try typing in this input, switch to "Other Tab", then come back:',
                    ),
                    h("input", {
                      type: "text",
                      placeholder: "Type something...",
                      style: { padding: "8px", width: "200px" },
                    }),
                  ]),
              },
            ),
            h(
              TabsPanel,
              { value: "tab2" },
              {
                default: () =>
                  h(
                    "p",
                    { style: { margin: "16px 0 0" } },
                    'Switch back to "Form Tab" to see if your input was preserved.',
                  ),
              },
            ),
          ],
        }}
      />
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
        story: `The \`unmount-strategy\` prop controls how inactive panel content is handled:

- **keepMounted** (default): All panels stay in DOM. Form inputs preserve their state when switching tabs.
- **unmountOnHide**: Panels unmount when hidden. Memory optimal but no state preservation.

Try the demo: type in the input, switch tabs, and see if your input is preserved based on the strategy.`,
      },
      source: {
        language: "html",
        code: `<!-- Preserve form state (default) -->
<Tabs default-value="tab1" unmount-strategy="keepMounted">
  ...
</Tabs>

<!-- Unmount when hidden (memory optimal) -->
<Tabs default-value="tab1" unmount-strategy="unmountOnHide">
  ...
</Tabs>`,
      },
    },
  },
};
