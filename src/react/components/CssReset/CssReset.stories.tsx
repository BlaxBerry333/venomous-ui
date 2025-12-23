import { Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import CssReset from "./CssReset";

const meta = {
  title: "React/Components/<CssReset>",
  component: CssReset,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>CSS Reset Component</Subtitle>

          <Markdown>
            {`
A CSS normalization component used to unify default styles across different browsers, based on [modern-normalize](https://github.com/sindresorhus/modern-normalize).<br />
This component renders as \`null\` on the page, meaning it has no visual output.

After the component is mounted, a \`<style>\` tag will be injected into the \`<head>\` of the \`<html>\` document ( only be injected once and will not be duplicated ). The \`<style>\` tag will be removed from the \`<head>\` after the component is unmounted.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { CssReset, ThemeProvider, Button } from "venomous-ui/react/components";
    
function App() {
  return (
    <ThemeProvider>
      <CssReset />
      <Button text="Click me" />
    </ThemeProvider>
  );
}`}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof CssReset>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Default
// ============================
export const Playground: Story = {
  name: "Default",
  render: () => (
    <div style={{ padding: 16 }}>
      <p style={{ marginBottom: 16 }}>
        The <code>&lt;CssReset /&gt;</code> component has been applied to this page.
      </p>
      <p style={{ marginBottom: 16 }}>
        It normalizes browser default styles and provides a consistent baseline for styling.
      </p>
      <p>
        <strong>Note:</strong> This component renders nothing visible - it only injects CSS into the document head.
      </p>
    </div>
  ),
};
