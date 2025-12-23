import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import { Card } from "@/react/components/Card";
import Portal from "./Portal";

const meta = {
  title: "React/Components/<Portal>",
  component: Portal,
  tags: ["autodocs"],
  argTypes: {
    container: {
      description:
        "Target container for the portal. Supports CSS selector string, HTMLElement, or React ref. Defaults to document.body.",
      table: {
        type: { summary: "string | HTMLElement | RefObject<HTMLElement>" },
        defaultValue: { summary: "undefined (appends to body)" },
      },
      control: false,
    },
    children: {
      description: "Content to render inside the portal.",
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
          <Subtitle>Render children outside of the parent DOM hierarchy</Subtitle>

          <Markdown>
            {`
Portal renders its children into a DOM node that exists outside the DOM hierarchy of the parent component.<br />
This is useful for your components that need to "break out" of their container, such as modals, tooltips, and dropdowns.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`
import { Portal } from "venomous-ui/react/components";

// Default: renders to document.body
<Portal>
  <div className="modal">Modal content</div>
</Portal>

// With CSS selector
<Portal container="#modal-root">
  <div className="modal">Modal content</div>
</Portal>

// With HTMLElement
const container = document.getElementById("custom-root");
<Portal container={container}>
  <div className="modal">Modal content</div>
</Portal>

// With React ref
const containerRef = useRef<HTMLDivElement>(null);
<>
  <div ref={containerRef} id="portal-target" />
  <Portal container={containerRef}>
    <div className="modal">Modal content</div>
  </Portal>
</>
            `.trim()}
          />

          <Heading>Examples</Heading>

          <Subtitle>{ContainerTypesExample.name}</Subtitle>
          <Description of={ContainerTypesExample} />
          <Canvas of={ContainerTypesExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Portal>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  render: function RenderStory() {
    const [show, setShow] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setShow(!show)} text={show ? "Hide" : "Show"} />

        {show && (
          <Portal>
            <Card
              style={(theme) => ({
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                width: "200px",
                height: "200px",
                backgroundColor: theme.paletteColors.main,
              })}
            >
              <Button text="Close" onClick={() => setShow(false)} />
            </Card>
          </Portal>
        )}

        <p style={{ marginTop: "16px", color: "#737373", fontSize: "14px" }}>
          Open DevTools and inspect the DOM to see the portal content rendered at document.body
        </p>
      </div>
    );
  },
};

// ============================
// Container Types Example
// ============================
export const ContainerTypesExample: Story = {
  name: "Container Types Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Portal supports four container types: default (body), CSS selector, HTMLElement, and React ref.",
      },
      source: {
        code: `
// 1. Default (document.body)
<Portal>
  <div>Renders to body</div>
</Portal>

// 2. CSS Selector
<Portal container="#custom-root">
  <div>Renders to #custom-root</div>
</Portal>

// 3. HTMLElement
const element = document.getElementById("my-container");
<Portal container={element}>
  <div>Renders to HTMLElement</div>
</Portal>

// 4. React Ref
const containerRef = useRef<HTMLDivElement>(null);
<div ref={containerRef} />
<Portal container={containerRef}>
  <div>Renders to ref target</div>
</Portal>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const refContainerRef = React.useRef<HTMLDivElement>(null);
    const [elementContainer, setElementContainer] = React.useState<HTMLElement | null>(null);

    // Create a container element for selector example
    React.useEffect(() => {
      const existing = document.getElementById("selector-portal-root");
      if (!existing) {
        const div = document.createElement("div");
        div.id = "selector-portal-root";
        div.style.cssText = "padding: 12px; border: 2px dashed #7C3AED; border-radius: 8px; margin-top: 8px;";
        document.getElementById("selector-container-wrapper")?.appendChild(div);
      }
      return () => {
        document.getElementById("selector-portal-root")?.remove();
      };
    }, []);

    // Get HTMLElement reference for HTMLElement example
    React.useEffect(() => {
      const el = document.getElementById("element-portal-root");
      if (el) {
        setElementContainer(el);
      }
    }, []);

    const boxStyle: React.CSSProperties = {
      padding: "8px 12px",
      backgroundColor: "#7C3AED",
      color: "white",
      borderRadius: "4px",
      fontSize: "12px",
    };

    const containerStyle: React.CSSProperties = {
      padding: "12px",
      border: "2px dashed #7C3AED",
      borderRadius: "8px",
      marginTop: "8px",
    };

    const labelStyle: React.CSSProperties = {
      fontSize: "12px",
      color: "#a3a3a3",
      marginBottom: "4px",
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* 1. Default (body) */}
        <div>
          <div style={labelStyle}>1. Default (renders to document.body)</div>
          <Portal>
            <div
              style={{
                position: "sticky",
                bottom: "16px",
                right: "50%",
                zIndex: 1000,
                width: "100%",
                margin: "0 auto",
                ...boxStyle,
              }}
            >
              Portal to body
            </div>
          </Portal>
          <p style={{ fontSize: "12px", color: "#737373" }}>Check bottom-right corner of the page</p>
        </div>

        {/* 2. CSS Selector */}
        <div>
          <div style={labelStyle}>2. CSS Selector (container=&quot;#selector-portal-root&quot;)</div>
          <div id="selector-container-wrapper">
            <div id="selector-portal-root" style={containerStyle} />
          </div>
          <Portal container="#selector-portal-root">
            <div style={boxStyle}>Portal via selector</div>
          </Portal>
        </div>

        {/* 3. HTMLElement */}
        <div>
          <div style={labelStyle}>3. HTMLElement (container=&#123;element&#125;)</div>
          <div id="element-portal-root" style={containerStyle} />
          {elementContainer && (
            <Portal container={elementContainer}>
              <div style={boxStyle}>Portal via HTMLElement</div>
            </Portal>
          )}
        </div>

        {/* 4. React Ref */}
        <div>
          <div style={labelStyle}>4. React Ref (container=&#123;refContainerRef&#125;)</div>
          <div ref={refContainerRef} style={containerStyle} />
          <Portal container={refContainerRef}>
            <div style={boxStyle}>Portal via ref</div>
          </Portal>
        </div>
      </div>
    );
  },
};
