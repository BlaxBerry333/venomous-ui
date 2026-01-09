import React from "react";

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

          <Heading>Basic Usage</Heading>
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

          <Heading>Examples</Heading>

          <Subtitle>{ToggleModeExample.name}</Subtitle>
          <Description of={ToggleModeExample} />
          <Canvas of={ToggleModeExample} />

          <Subtitle>{ControlledWithPersistenceExample.name}</Subtitle>
          <Description of={ControlledWithPersistenceExample} />
          <Canvas of={ControlledWithPersistenceExample} />

          <Subtitle>{CustomPaletteColorsExample.name}</Subtitle>
          <Description of={CustomPaletteColorsExample} />
          <Canvas of={CustomPaletteColorsExample} />

          <Heading>Props</Heading>
          <ArgTypes />
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

// ============================
// Controlled Mode with Persistence Example
// ============================
export const ControlledWithPersistenceExample: Story = {
  name: "Controlled Mode with Persistence",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story:
          "Use controlled mode (`mode` + `onModeChange`) to manage theme state externally. This allows you to persist the theme preference to `localStorage`, cookies, or a database.",
      },
      source: {
        code: `
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider, Button } from "venomous-ui/react/components";
import { useThemeContext } from "venomous-ui/react/hooks";

type ThemeMode = "light" | "dark";
const STORAGE_KEY = "theme-mode";
const DEFAULT_MODE: ThemeMode = "light";

export function AppWithTheme({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_MODE);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === "light" || stored === "dark") {
      setModeState(stored);
    }
    setIsInitialized(true);
  }, []);

  // Persist to localStorage
  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  }, []);

  // Prevent hydration mismatch flash
  if (!isInitialized) return null;

  return (
    <ThemeProvider mode={mode} onModeChange={setMode}>
      {children}
    </ThemeProvider>
  );
}

export function ThemeToggle() {
  const { mode, toggleMode } = useThemeContext();
  return <Button text={\`Current: \${mode}\`} onClick={toggleMode} />;
}
        `.trim(),
      },
    },
  },
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
          padding: 16,
          backgroundColor: mode === "dark" ? "#1a1a1a" : "#ffffff",
          transition: "background-color 0.2s",
        }}
      >
        <p style={{ color: mode === "light" ? "#000000" : "#ffffff", marginBottom: 8 }}>
          In controlled mode, theme state is managed externally and persisted to localStorage.
        </p>
        <Button text={`Current: ${mode}`} onClick={toggleMode} />
      </div>
    );
  },
};

// ============================
// Custom Palette Colors Example
// ============================
export const CustomPaletteColorsExample: Story = {
  name: "Custom Palette Colors",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story:
          "Use `customDesignTokens.paletteColors` to customize the primary theme color. This can be combined with controlled mode to allow users to switch between color themes.",
      },
      source: {
        code: `
"use client";

import React from "react";
import { ThemeProvider, Button, Space } from "venomous-ui/react/components";
import type { IPaletteColors } from "venomous-ui/core/designs";

const PALETTE_PRESETS: Record<string, IPaletteColors> = {
  blue: { light: "#e3f2fd", main: "#1976d2", dark: "#1565c0" },
  green: { light: "#e8f5e9", main: "#2e7d32", dark: "#1b5e20" },
  purple: { light: "#f3e5f5", main: "#7b1fa2", dark: "#6a1b9a" },
  orange: { light: "#fff3e0", main: "#f57c00", dark: "#e65100" },
};

export function AppWithCustomPalette({ children }: { children: React.ReactNode }) {
  const [paletteKey, setPaletteKey] = React.useState<keyof typeof PALETTE_PRESETS>("blue");

  const paletteColors = PALETTE_PRESETS[paletteKey];

  return (
    <ThemeProvider customDesignTokens={{ paletteColors }}>
      <Space.Flex spacing={4}>
        {Object.keys(PALETTE_PRESETS).map((key) => (
          <Button
            key={key}
            text={key}
            variant={paletteKey === key ? "contained" : "outlined"}
            onClick={() => setPaletteKey(key)}
          />
        ))}
      </Space.Flex>

      {children}
    </ThemeProvider>
  );
}
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [paletteKey, setPaletteKey] = React.useState<string>("blue");

    const PALETTE_PRESETS: Record<string, { light: string; main: string; dark: string }> = {
      blue: { light: "#e3f2fd", main: "#1976d2", dark: "#1565c0" },
      green: { light: "#e8f5e9", main: "#2e7d32", dark: "#1b5e20" },
      purple: { light: "#f3e5f5", main: "#7b1fa2", dark: "#6a1b9a" },
      orange: { light: "#fff3e0", main: "#f57c00", dark: "#e65100" },
    };

    const paletteColors = PALETTE_PRESETS[paletteKey];

    return (
      <ThemeProvider defaultMode="light" customDesignTokens={{ paletteColors }}>
        <div style={{ padding: 16 }}>
          <p style={{ marginBottom: 16 }}>Select a color theme: {paletteKey}</p>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {Object.keys(PALETTE_PRESETS).map((key) => (
              <Button
                key={key}
                text={key}
                variant={paletteKey === key ? "contained" : "outlined"}
                onClick={() => setPaletteKey(key)}
              />
            ))}
          </div>
        </div>
      </ThemeProvider>
    );
  },
};
