import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Badge, Icon } from "@/react/components";

import { Tabs } from "./index";

const meta = {
  title: "React/Components/<Tabs>",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "Current active tab value (controlled mode).",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    defaultValue: {
      description: "Default active tab value (uncontrolled mode).",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "Callback when tab changes.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(value: string) => void" },
      },
      control: false,
    },
    variant: {
      description: "Visual variant of the tabs.",
      type: { name: "string" },
      table: {
        type: { summary: '"underline" | "enclosed" | "pills"' },
        defaultValue: { summary: '"underline"' },
      },
      control: { type: "radio" },
      options: ["underline", "enclosed", "pills"],
    },
    size: {
      description: "Size of the tabs.",
      type: { name: "string" },
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    orientation: {
      description: "Orientation of the tabs.",
      type: { name: "string" },
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    fullWidth: {
      description: "Whether tabs should take full width.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Disable all tabs.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "Tabs content (Tabs.List and Tabs.Panel).",
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
          <Subtitle>Styled Tabs Component</Subtitle>

          <Markdown>
            {`
A compound component for creating tabbed interfaces, including \`<Tabs>\`、\`<Tabs.Tab>\`、\`<Tabs.List>\`、\`<Tabs.Panel>\`.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Tabs } from "venomous-ui/react/components";

function App() {
  // for Controlled mode
  const [value, setValue] = useState("tab1");

  return (
    <ThemeProvider>
      {/* Uncontrolled mode */}
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        <Tabs.Panel value="tab3">Content 3</Tabs.Panel>
      </Tabs>

      {/* Controlled mode */}
      <Tabs value={value} onChange={setValue}>
        ...
      </Tabs>
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

          <Subtitle>{VerticalOrientationExample.name}</Subtitle>
          <Description of={VerticalOrientationExample} />
          <Canvas of={VerticalOrientationExample} />

          <Subtitle>{WithIconsExample.name}</Subtitle>
          <Description of={WithIconsExample} />
          <Canvas of={WithIconsExample} />

          <Subtitle>{DisabledExample.name}</Subtitle>
          <Description of={DisabledExample} />
          <Canvas of={DisabledExample} />

          <Subtitle>{FullWidthExample.name}</Subtitle>
          <Description of={FullWidthExample} />
          <Canvas of={FullWidthExample} />

          <Subtitle>{ControlledExample.name}</Subtitle>
          <Description of={ControlledExample} />
          <Canvas of={ControlledExample} />

          <Subtitle>{KeepMountedExample.name}</Subtitle>
          <Description of={KeepMountedExample} />
          <Canvas of={KeepMountedExample} />

          <Heading>Props</Heading>

          <Subtitle>{"<Tabs>"}</Subtitle>
          <ArgTypes />

          <Subtitle>{"<Tabs.List>"}</Subtitle>
          <ArgTypes of={Tabs.List} />

          <Subtitle>{"<Tabs.Tab>"}</Subtitle>
          <ArgTypes of={Tabs.Tab} />

          <Subtitle>{"<Tabs.Panel>"}</Subtitle>
          <ArgTypes of={Tabs.Panel} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    defaultValue: "tab1",
    variant: "underline",
    size: "medium",
    orientation: "horizontal",
    fullWidth: false,
    disabled: false,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="tab1">Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Security</Tabs.Tab>
        <Tabs.Tab value="tab3">Notifications</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <h3 style={{ margin: "0 0 8px 0" }}>Account Settings</h3>
        <p style={{ margin: 0 }}>Manage your account information, profile picture, and preferences.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <h3 style={{ margin: "0 0 8px 0" }}>Security Settings</h3>
        <p style={{ margin: 0 }}>Update your password, enable two-factor authentication, and manage sessions.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <h3 style={{ margin: "0 0 8px 0" }}>Notification Preferences</h3>
        <p style={{ margin: 0 }}>Configure email notifications, push notifications, and alert preferences.</p>
      </Tabs.Panel>
    </Tabs>
  ),
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
        story: "Three variants: `underline` (default), `enclosed`, `pills`.",
      },
      source: {
        code: `
<Tabs defaultValue="tab1" variant="underline">
  <Tabs.List>
    <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
    <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
  <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
</Tabs>

<Tabs defaultValue="tab1" variant="enclosed">...</Tabs>
<Tabs defaultValue="tab1" variant="pills">...</Tabs>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Underline (default)</h4>
          <Tabs defaultValue="tab1" variant="underline">
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Enclosed</h4>
          <Tabs defaultValue="tab1" variant="enclosed">
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Pills</h4>
          <Tabs defaultValue="tab1" variant="pills">
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>
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
        story: "Three size options: `small`, `medium` (default), `large`.",
      },
      source: {
        code: `
<Tabs defaultValue="tab1" size="small">...</Tabs>
<Tabs defaultValue="tab1" size="medium">...</Tabs>
<Tabs defaultValue="tab1" size="large">...</Tabs>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Small</h4>
          <Tabs defaultValue="tab1" size="small">
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Medium (default)</h4>
          <Tabs defaultValue="tab1" size="medium">
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Large</h4>
          <Tabs defaultValue="tab1" size="large">
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>
      </div>
    );
  },
};

// ============================
// Vertical Orientation Example
// ============================
export const VerticalOrientationExample: Story = {
  name: "Vertical Orientation Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: 'Use `orientation="vertical"` for vertical tab layouts. Works with all variants.',
      },
      source: {
        code: `
<Tabs defaultValue="tab1" orientation="vertical">
  <Tabs.List>
    <Tabs.Tab value="tab1">Account</Tabs.Tab>
    <Tabs.Tab value="tab2">Security</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">Account content</Tabs.Panel>
  <Tabs.Panel value="tab2">Security content</Tabs.Panel>
</Tabs>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Underline Vertical</h4>
          <Tabs defaultValue="tab1" orientation="vertical" variant="underline">
            <Tabs.List>
              <Tabs.Tab value="tab1">Account</Tabs.Tab>
              <Tabs.Tab value="tab2">Security</Tabs.Tab>
              <Tabs.Tab value="tab3">Notifications</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Account settings content goes here.</Tabs.Panel>
            <Tabs.Panel value="tab2">Security settings content goes here.</Tabs.Panel>
            <Tabs.Panel value="tab3">Notification preferences content goes here.</Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Enclosed Vertical</h4>
          <Tabs defaultValue="tab1" orientation="vertical" variant="enclosed">
            <Tabs.List>
              <Tabs.Tab value="tab1">Account</Tabs.Tab>
              <Tabs.Tab value="tab2">Security</Tabs.Tab>
              <Tabs.Tab value="tab3">Notifications</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Account settings content goes here.</Tabs.Panel>
            <Tabs.Panel value="tab2">Security settings content goes here.</Tabs.Panel>
            <Tabs.Panel value="tab3">Notification preferences content goes here.</Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Pills Vertical</h4>
          <Tabs defaultValue="tab1" orientation="vertical" variant="pills">
            <Tabs.List>
              <Tabs.Tab value="tab1">Account</Tabs.Tab>
              <Tabs.Tab value="tab2">Security</Tabs.Tab>
              <Tabs.Tab value="tab3">Notifications</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Account settings content goes here.</Tabs.Panel>
            <Tabs.Panel value="tab2">Security settings content goes here.</Tabs.Panel>
            <Tabs.Panel value="tab3">Notification preferences content goes here.</Tabs.Panel>
          </Tabs>
        </div>
      </div>
    );
  },
};

// ============================
// With Icons Example
// ============================
export const WithIconsExample: Story = {
  name: "With Icons Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `StartIcon` and `EndIcon` props on `<Tabs.Tab>` to add icons.",
      },
      source: {
        code: `
<Tabs defaultValue="home" variant="pills">
  <Tabs.List>
    <Tabs.Tab value="home" StartIcon={<Icon name="mdi:home" />}>
      Home
    </Tabs.Tab>
    <Tabs.Tab value="settings" StartIcon={<Icon name="mdi:cog" />}>
      Settings
    </Tabs.Tab>
    <Tabs.Tab
      value="notifications"
      StartIcon={<Icon name="mdi:bell" />}
      EndIcon={<Badge content={5} size="small" color="error"><span /></Badge>}
    >
      Alerts
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="home">Home content</Tabs.Panel>
  <Tabs.Panel value="settings">Settings content</Tabs.Panel>
  <Tabs.Panel value="notifications">Notifications content</Tabs.Panel>
</Tabs>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Tabs defaultValue="home" variant="pills">
        <Tabs.List>
          <Tabs.Tab value="home" StartIcon={<Icon name="mdi:home" />}>
            Home
          </Tabs.Tab>
          <Tabs.Tab value="search" StartIcon={<Icon name="mdi:magnify" />}>
            Search
          </Tabs.Tab>
          <Tabs.Tab value="settings" StartIcon={<Icon name="mdi:cog" />}>
            Settings
          </Tabs.Tab>
          <Tabs.Tab
            value="notifications"
            StartIcon={<Icon name="mdi:bell" />}
            EndIcon={
              <Badge content={5} size="small" color="error">
                <span />
              </Badge>
            }
          >
            Alerts
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="home">Welcome to the home page!</Tabs.Panel>
        <Tabs.Panel value="search">Search for anything...</Tabs.Panel>
        <Tabs.Panel value="settings">Configure your settings here.</Tabs.Panel>
        <Tabs.Panel value="notifications">You have 5 new notifications.</Tabs.Panel>
      </Tabs>
    );
  },
};

// ============================
// Disabled Example
// ============================
export const DisabledExample: Story = {
  name: "Disabled Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Individual tabs can be disabled with the `disabled` prop. Use `disabled` on the root `Tabs` to disable all tabs.",
      },
      source: {
        code: `
{/* Individual tab disabled */}
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Tab value="tab1">Active</Tabs.Tab>
    <Tabs.Tab value="tab2" disabled>Disabled</Tabs.Tab>
  </Tabs.List>
  ...
</Tabs>

{/* All tabs disabled */}
<Tabs defaultValue="tab1" disabled>
  ...
</Tabs>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>Individual Tab Disabled</h4>
          <Tabs defaultValue="tab1">
            <Tabs.List>
              <Tabs.Tab value="tab1">Active</Tabs.Tab>
              <Tabs.Tab value="tab2" disabled>
                Disabled
              </Tabs.Tab>
              <Tabs.Tab value="tab3">Active</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px 0" }}>All Tabs Disabled</h4>
          <Tabs defaultValue="tab1" disabled>
            <Tabs.List>
              <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
            <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
            <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
          </Tabs>
        </div>
      </div>
    );
  },
};

// ============================
// Full Width Example
// ============================
export const FullWidthExample: Story = {
  name: "Full Width Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `fullWidth` prop to make tabs take equal width across the container.",
      },
      source: {
        code: `
<Tabs defaultValue="tab1" fullWidth variant="pills">
  <Tabs.List>
    <Tabs.Tab value="tab1">Daily</Tabs.Tab>
    <Tabs.Tab value="tab2">Weekly</Tabs.Tab>
    <Tabs.Tab value="tab3">Monthly</Tabs.Tab>
  </Tabs.List>
  ...
</Tabs>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Tabs defaultValue="tab1" fullWidth variant="pills">
        <Tabs.List>
          <Tabs.Tab value="tab1">Daily</Tabs.Tab>
          <Tabs.Tab value="tab2">Weekly</Tabs.Tab>
          <Tabs.Tab value="tab3">Monthly</Tabs.Tab>
          <Tabs.Tab value="tab4">Yearly</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Daily statistics view</Tabs.Panel>
        <Tabs.Panel value="tab2">Weekly statistics view</Tabs.Panel>
        <Tabs.Panel value="tab3">Monthly statistics view</Tabs.Panel>
        <Tabs.Panel value="tab4">Yearly statistics view</Tabs.Panel>
      </Tabs>
    );
  },
};

// ============================
// Controlled Example
// ============================
export const ControlledExample: Story = {
  name: "Controlled Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `value` and `onChange` props for controlled mode to manage tab state externally.",
      },
      source: {
        code: `
const [activeTab, setActiveTab] = useState("tab1");

<Tabs value={activeTab} onChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
    <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
  <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
</Tabs>

{/* External controls */}
<button onClick={() => setActiveTab("tab1")}>Go to Tab 1</button>
<button onClick={() => setActiveTab("tab2")}>Go to Tab 2</button>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [activeTab, setActiveTab] = React.useState("tab1");

    return (
      <div>
        <p style={{ margin: "0 0 16px 0" }}>
          Current tab: <strong>{activeTab}</strong>
        </p>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
        </Tabs>
        <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
          <button onClick={() => setActiveTab("tab1")}>Go to Tab 1</button>
          <button onClick={() => setActiveTab("tab2")}>Go to Tab 2</button>
          <button onClick={() => setActiveTab("tab3")}>Go to Tab 3</button>
        </div>
      </div>
    );
  },
};

// ============================
// Keep Mounted Example
// ============================
export const KeepMountedExample: Story = {
  name: "Keep Mounted Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `keepMounted` on `<Tabs.Panel>` to keep the panel mounted when inactive. Useful for preserving form state.",
      },
      source: {
        code: `
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
    <Tabs.Tab value="tab2">Tab 2 (keeps state)</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">Unmounts when hidden</Tabs.Panel>
  <Tabs.Panel value="tab2" keepMounted>
    <input type="text" placeholder="Type here..." />
    {/* Input value preserved when switching tabs */}
  </Tabs.Panel>
</Tabs>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2 (with state)</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content for Tab 1 - unmounts when hidden</Tabs.Panel>
        <Tabs.Panel value="tab2" keepMounted>
          <p>This panel keeps its state when switching tabs.</p>
          <p>Try typing in the input below, then switch tabs and come back:</p>
          <input type="text" placeholder="Type something..." style={{ marginTop: 8, padding: 8, width: "100%" }} />
        </Tabs.Panel>
        <Tabs.Panel value="tab3">Content for Tab 3 - unmounts when hidden</Tabs.Panel>
      </Tabs>
    );
  },
};
