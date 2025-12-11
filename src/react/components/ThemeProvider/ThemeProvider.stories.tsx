import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import { useThemeContext } from "@/react/hooks";
import ThemeProvider from "./ThemeProvider";

const meta = {
  title: "React/Components/<ThemeProvider>",
  component: ThemeProvider,
  tags: ["autodocs"],
  argTypes: {
    defaultMode: {
      description: " Initial theme mode (uncontrolled mode).",
      type: { name: "string" },
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: '"light"' },
      },
      control: false,
    },
    mode: {
      description: "Theme mode (controlled mode).",
      type: { name: "string" },
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: '"light"' },
      },
      control: false,
    },
    onModeChange: {
      description: "Callback when mode changes (controlled mode).",
      table: {
        category: "Events",
        type: { summary: "(mode: ThemeMode) => void" },
      },
      control: false,
    },
    customDesignTokens: {
      description: "Design tokens to customize theme.",
      table: {
        type: { summary: "DesignTokensOverrides" },
      },
      control: false,
    },
    children: {
      description: "Child components.",
      type: { name: "string", required: true },
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Theme Context Provider</Subtitle>

          <Markdown>
            {`
A global theme context provider component that supplies theme information to all styled child components.<br />
This component renders as a wrapper for all styled components, meaning it has no visual output.

            `}
          </Markdown>

          <Heading>Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, CssReset, ButtonStyled } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <CssReset />  {/* Optional: include if you want CSS normalization */}
      <ButtonStyled text="Click me" />
    </ThemeProvider>
  );
}`}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{ToggleModeExample.name}</Heading>
          <Description of={ToggleModeExample} />
          <Canvas of={ToggleModeExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    defaultMode: "light",
    children: null,
  },
  render: () => (
    <div style={{ padding: 16 }}>
      <p>ThemeProvider is active. Toggle Storybook&apos;s dark mode to see changes.</p>
    </div>
  ),
};

// ============================
// Toggle Mode Example
// ============================
export const ToggleModeExample: Story = {
  name: "Toggle Mode Example",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Use `toggleMode` from ThemeContext to switch between light and dark mode.",
      },
      source: {
        code: `
import { useContext } from "react";
import { ThemeProvider, ThemeContext, ButtonStyled } from "venomous-ui/react/components";

function ThemeToggle() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div>
      <p>Current mode: {mode}</p>
      <ButtonStyled text="Toggle Theme" onClick={toggleMode} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}
        `.trim(),
      },
    },
  },
  /**
   * Demo component that uses its own ThemeProvider in uncontrolled mode
   * to demonstrate toggleMode functionality.
   *
   * The global Storybook decorator uses controlled mode (mode prop),
   * which prevents internal toggleMode from working. This demo wraps with
   * its own ThemeProvider using defaultMode (uncontrolled) instead.
   *
   * Key: ThemeToggleDemo must be a child of this inner ThemeProvider,
   * so useThemeContext() gets the uncontrolled provider's context.
   */
  decorators: [
    (Story) => (
      <ThemeProvider defaultMode="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  render: function RenderStory() {
    const { mode, toggleMode } = useThemeContext();

    return (
      <div
        style={{
          minHeight: 400,
          padding: 16,
          backgroundColor: mode === "dark" ? "#1a1a1a" : "#ffffff",
          transition: "background-color 0.2s",
        }}
      >
        <p style={{ color: mode === "light" ? "#000000" : "#ffffff", marginBottom: 16 }}>Current mode: {mode}</p>
        <Button text="Toggle Theme" onClick={toggleMode} />
      </div>
    );
  },
};
