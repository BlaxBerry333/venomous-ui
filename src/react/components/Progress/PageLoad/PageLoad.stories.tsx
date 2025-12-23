import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import PageLoad from "./PageLoad";

const meta = {
  title: "React/Components/<Progress.PageLoad>",
  component: PageLoad,
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      description: "Whether the loading indicator is active/visible.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    value: {
      description: "Progress value (0-100). When provided, shows determinate progress.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
      },
      control: { type: "range", min: 0, max: 100 },
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
          <Subtitle>Page loading progress indicator at top of page</Subtitle>

          <Markdown>
            {`
A fixed-position progress bar at the top of the page for indicating page loading state.
Similar to NProgress, it shows indeterminate progress when \`isLoading\` is true,
or determinate progress when a \`value\` is provided.

Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, Progress } from "venomous-ui/react/components";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ThemeProvider>
      {/* Indeterminate loading */}
      <Progress.PageLoad isLoading={isLoading} />

      {/* Determinate progress */}
      <Progress.PageLoad isLoading value={75} />
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{BasicExample.name}</Subtitle>
          <Description of={BasicExample} />
          <Canvas of={BasicExample} />

          <Subtitle>{DeterminateExample.name}</Subtitle>
          <Description of={DeterminateExample} />
          <Canvas of={DeterminateExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof PageLoad>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    isLoading: true,
  },
};

// ============================
// Basic Example
// ============================
export const BasicExample: Story = {
  name: "Basic Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Toggle loading state with `isLoading` prop. The progress bar shows indeterminate animation.",
      },
      source: {
        code: `
const [isLoading, setIsLoading] = useState(false);

<button onClick={() => setIsLoading(!isLoading)}>
  Toggle Loading
</button>
<Progress.PageLoad isLoading={isLoading} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [isLoading, setIsLoading] = useState(false);
    return (
      <div style={{ padding: 20 }}>
        <button onClick={() => setIsLoading(!isLoading)}>{isLoading ? "Stop Loading" : "Start Loading"}</button>
        <PageLoad isLoading={isLoading} />
      </div>
    );
  },
};

// ============================
// Determinate Example
// ============================
export const DeterminateExample: Story = {
  name: "Determinate Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Use `value` prop to show determinate progress (0-100).",
      },
      source: {
        code: `
<Progress.PageLoad isLoading value={25} />
<Progress.PageLoad isLoading value={50} />
<Progress.PageLoad isLoading value={75} />
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [value, setValue] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => {
      setIsLoading(true);
      setValue(0);
      const interval = setInterval(() => {
        setValue((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 200);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    };

    return (
      <div style={{ padding: 20 }}>
        <button onClick={startLoading} disabled={isLoading}>
          {isLoading ? `Loading ${value}%` : "Start Determinate Loading"}
        </button>
        <PageLoad isLoading={isLoading} value={value} />
      </div>
    );
  },
};
