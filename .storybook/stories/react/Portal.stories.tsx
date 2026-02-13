import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";

import { Button } from "@/react/components/Button";
import { Portal } from "@/react/components/Portal";

import "@/core/styles/components/button.css";
import "@/core/styles/variables/index.css";

const meta: Meta<typeof Portal> = {
  title: "React Components/Portal",
  component: Portal,
  parameters: {
    docs: {
      description: {
        component: "Portal renders children into a DOM node outside the parent component hierarchy.",
      },
    },
  },
  argTypes: {
    disabled: {
      description: "When true, children render in place without portaling",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    container: {
      description: "Target container element",
      table: {
        type: { summary: "Element | null" },
      },
    },
    containerRef: {
      description: "Ref to the target container element",
      table: {
        type: { summary: "RefObject<Element | null>" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Portal>;

/**
 * Basic Portal Demo
 */
function PortalDemo() {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Portal Content</Button>

      <div
        ref={containerRef}
        style={{
          marginTop: 16,
          minHeight: 60,
          position: "relative",
        }}
      >
        {show && (
          <Portal containerRef={containerRef}>
            <div
              style={{
                padding: "16px 24px",
                backgroundColor: "var(--VENOMOUSUI-bg-primary)",
                border: "1px solid var(--VENOMOUSUI-border-color)",
                borderRadius: "8px",
                boxShadow: "var(--VENOMOUSUI-shadow-lg)",
              }}
            >
              This content is rendered via Portal!
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
}

export const Default: Story = {
  name: "Basic Usage",
  args: {
    disabled: false,
  },
  render: () => <PortalDemo />,
  parameters: {
    docs: {
      source: {
        code: `"use client";

import { useState } from "react";
import { Portal } from "venomous-ui/react";

export default function Demo() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Portal</button>

      {show && (
        <Portal>
          <div style={{ position: "fixed", bottom: 20, right: 20 }}>
            This content is rendered at document.body!
          </div>
        </Portal>
      )}
    </div>
  );
}`,
      },
    },
  },
};

/**
 * Custom Container Demo
 */
function CustomContainerDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} in Custom Container</Button>

      <div
        ref={containerRef}
        style={{
          marginTop: 16,
          padding: 16,
          minHeight: 100,
          border: "2px dashed var(--VENOMOUSUI-border-color)",
          borderRadius: 8,
          position: "relative",
        }}
      >
        <span style={{ color: "var(--VENOMOUSUI-text-secondary)" }}>Custom container (portal target)</span>

        {show && (
          <Portal containerRef={containerRef}>
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                padding: "8px 16px",
                backgroundColor: "var(--VENOMOUSUI-color-theme)",
                color: "white",
                borderRadius: 4,
              }}
            >
              Portaled here!
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
}

export const CustomContainer: Story = {
  name: "Custom Container",
  tags: ["!dev"],
  render: () => <CustomContainerDemo />,
  parameters: {
    docs: {
      description: {
        story: "Use `containerRef` to render portal content into a specific container instead of document.body.",
      },
      source: {
        code: `"use client";

import { useRef, useState } from "react";
import { Portal } from "venomous-ui/react";

export default function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>

      <div ref={containerRef} style={{ position: "relative" }}>
        Custom container
        {show && (
          <Portal containerRef={containerRef}>
            <div>Portaled into custom container!</div>
          </Portal>
        )}
      </div>
    </div>
  );
}`,
      },
    },
  },
};

/**
 * Disabled Demo
 */
function DisabledDemo() {
  return (
    <div
      style={{
        padding: 16,
        border: "1px solid var(--VENOMOUSUI-border-color)",
        borderRadius: 8,
      }}
    >
      <p style={{ margin: "0 0 8px" }}>Parent container:</p>
      <Portal disabled>
        <div
          style={{
            padding: "8px 16px",
            backgroundColor: "var(--VENOMOUSUI-bg-secondary)",
            borderRadius: 4,
          }}
        >
          This content stays in place (disabled=true)
        </div>
      </Portal>
    </div>
  );
}

export const Disabled: Story = {
  name: "Disabled",
  tags: ["!dev"],
  render: () => <DisabledDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "When `disabled={true}`, children render in place without being portaled. Useful for SSR or conditional portaling.",
      },
      source: {
        code: `<Portal disabled>
  <div>This renders in place, not portaled</div>
</Portal>`,
      },
    },
  },
};
