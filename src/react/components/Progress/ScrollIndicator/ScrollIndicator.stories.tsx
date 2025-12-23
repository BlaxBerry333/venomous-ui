import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import ScrollIndicator from "./ScrollIndicator";

const meta = {
  title: "React/Components/<Progress.ScrollIndicator>",
  component: ScrollIndicator,
  tags: ["autodocs"],
  argTypes: {
    target: {
      description: "Target element to track scroll progress. If not provided, tracks window scroll.",
      table: {
        type: { summary: "HTMLElement | null" },
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
          <Subtitle>Scroll progress indicator at top of page</Subtitle>

          <Markdown>
            {`
A fixed-position progress bar at the top of the page that shows reading/scroll progress.
By default, it tracks window scroll. You can provide a \`target\` element to track
scroll progress of a specific scrollable container.

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
  return (
    <ThemeProvider>
      {/* Track window scroll */}
      <Progress.ScrollIndicator />

      {/* Track specific element scroll */}
      <Progress.ScrollIndicator target={scrollableRef.current} />
    </ThemeProvider>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{ContainerExample.name}</Subtitle>
          <Description of={ContainerExample} />
          <Canvas of={ContainerExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof ScrollIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {},
  render: function RenderStory() {
    return (
      <div style={{ padding: 20 }}>
        <ScrollIndicator />
        <p>Scroll the page to see the indicator at the top.</p>
        <div style={{ height: "300vh" }} />
      </div>
    );
  },
};

// ============================
// Container Example
// ============================
export const ContainerExample: Story = {
  name: "Container Example",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Track scroll progress of a specific scrollable container using `target` prop.",
      },
      source: {
        code: `
const containerRef = useRef<HTMLDivElement>(null);

<Progress.ScrollIndicator target={containerRef.current} />
<div ref={containerRef} style={{ height: 200, overflow: "auto" }}>
  {/* Long content */}
</div>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <div style={{ padding: 20 }}>
        <p>This example shows scroll progress relative to the window. Scroll the page to see the indicator update.</p>
        <ScrollIndicator />
        <div style={{ height: 800, background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)" }}>
          <p style={{ padding: 20 }}>Scroll down to see the progress indicator change...</p>
        </div>
      </div>
    );
  },
};
