import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { DESIGN_TOKENS, IBreakpoints } from "@/core/designs";
import { Button } from "@/react/components/Button";
import Modal from "./Modal";

const headerOptions = {
  None: undefined,
  "Sample Header": <h3 style={{ marginBottom: 16 }}>Modal Title</h3>,
};

const footerOptions = {
  None: undefined,
  "Sample Footer": <div style={{ marginTop: 16 }}>Modal Footer</div>,
};

const meta = {
  title: "React/Components/<Modal>",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      description: "Whether the modal is visible (controlled mode).",
      type: { name: "boolean", required: true },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    onClose: {
      description: "Callback fired when the modal requests to close.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
    },
    closeOnBackdropClick: {
      description: "Whether clicking the backdrop closes the modal.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    closeOnEscape: {
      description: "Whether pressing Escape key closes the modal.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    maxWidth: {
      description: "Maximum width of the modal content.Uses breakpoint keys from design tokens (xs, sm, md, lg, xl).",
      table: {
        type: { summary: "keyof IBreakpoints" },
        defaultValue: { summary: '"xs"' },
      },
      control: { type: "radio" },
      options: Object.keys(DESIGN_TOKENS.breakpoints),
    },
    maxHeight: {
      description: "Maximum height of the modal content.",
      table: {
        type: { summary: "CSSProperties['maxHeight']" },
        defaultValue: { summary: '"80vh"' },
      },
      control: { type: "text" },
    },
    ModalHeader: {
      description: "Content for the modal header section.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: Object.keys(headerOptions),
      mapping: headerOptions,
    },
    ModalFooter: {
      description: "Content for the modal footer section.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: { type: "radio" },
      options: Object.keys(footerOptions),
      mapping: footerOptions,
    },
    children: {
      description: "Content to render in the modal body.",
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
          <Subtitle>Dialog modal component</Subtitle>

          <Markdown>
            {`
\`<Modal>\` provides a dialog overlay that supports multiple closing methods, and built on top of \`<Backdrop>\` + \`<Card>\` components.<br />
Must be used within \`<ThemeProvider>\` component.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import React from "react";
import { Modal, Button } from "venomous-ui/react/components";

function ModalExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} text="Open Modal" />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        ModalHeader={<h3>Modal Title</h3>}
        ModalFooter={<Button onClick={() => setIsOpen(false)} text="Close" />}
      >
        <p>Modal body content goes here.</p>
      </Modal>
    </>
  );
}
            `.trim()}
          />

          <Heading>Examples</Heading>
          <Subtitle>{DifferentSizesExample.name}</Subtitle>
          <Description of={DifferentSizesExample} />
          <Canvas of={DifferentSizesExample} />

          <Subtitle>{CloseBehaviorExample.name}</Subtitle>
          <Description of={CloseBehaviorExample} />
          <Canvas of={CloseBehaviorExample} />

          <Subtitle>{ScrollableContentExample.name}</Subtitle>
          <Description of={ScrollableContentExample} />
          <Canvas of={ScrollableContentExample} />

          <Heading>Props</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    isOpen: false,
    onClose: undefined,
    closeOnBackdropClick: true,
    closeOnEscape: true,
    maxWidth: "xs",
    maxHeight: "80vh",
    style: undefined,
    className: undefined,
    ModalHeader: undefined,
    ModalFooter: undefined,
    children: undefined,
  },
  render: function RenderStory(args) {
    const [isOpen, setIsOpen] = React.useState(false);

    // Sync with args.isOpen for Storybook controls
    React.useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} text="Open Modal" />

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          closeOnBackdropClick={args.closeOnBackdropClick}
          closeOnEscape={args.closeOnEscape}
          maxWidth={args.maxWidth}
          maxHeight={args.maxHeight}
          style={args.style}
          className={args.className}
          ModalHeader={args.ModalHeader}
          ModalFooter={args.ModalFooter}
        >
          <p style={{ margin: 0, color: "#737373" }}>
            This is the modal body content. Click the backdrop, press Escape, or use the buttons to close.
          </p>
        </Modal>

        <p style={{ marginTop: "16px", color: "#737373", fontSize: "14px" }}>
          Modal renders through Portal with Backdrop support
        </p>
      </div>
    );
  },
};

// ============================
// Different Sizes Example
// ============================
export const DifferentSizesExample: Story = {
  name: "Different Sizes",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Modal supports different maxWidth values using breakpoint keys.",
      },
      source: {
        language: "tsx",
        code: `
<Modal isOpen={isOpen} maxWidth="sm" onClose={handleClose}>
  Small modal (sm: 767px) - default
</Modal>

<Modal isOpen={isOpen} maxWidth="md" onClose={handleClose}>
  Medium modal (md: 1023px)
</Modal>

<Modal isOpen={isOpen} maxWidth="lg" onClose={handleClose}>
  Large modal (lg: 1279px)
</Modal>

<Modal isOpen={isOpen} maxWidth="xl" onClose={handleClose}>
  Extra large modal (xl: 1536px)
</Modal>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [openModal, setOpenModal] = React.useState<string | null>(null);

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {["xs", "sm", "md", "lg", "xl"].map((size) => (
          <Button key={size} onClick={() => setOpenModal(size)} text={`${size} Modal`} />
        ))}

        {openModal !== null && (
          <Modal
            isOpen={openModal !== null}
            onClose={() => setOpenModal(null)}
            maxWidth={openModal as keyof IBreakpoints}
          >
            <p>Max width: {DESIGN_TOKENS.breakpoints[openModal as keyof IBreakpoints].max}</p>
          </Modal>
        )}
      </div>
    );
  },
};

// ============================
// Close Behavior Example
// ============================
export const CloseBehaviorExample: Story = {
  name: "Close Behavior Options",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Control how the modal can be closed with `closeOnBackdropClick` and `closeOnEscape` props.",
      },
      source: {
        language: "tsx",
        code: `
// Disable backdrop click
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  closeOnBackdropClick={false}
>
  Can only close with Escape key or explicit action
</Modal>

// Disable Escape key
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  closeOnEscape={false}
>
  Can only close with backdrop click or explicit action
</Modal>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [openModal, setOpenModal] = React.useState<string | null>(null);

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={() => setOpenModal("noBackdrop")} text="No Backdrop Close" />
        <Button onClick={() => setOpenModal("noEscape")} text="No Escape Close" />
        <Button onClick={() => setOpenModal("buttonOnly")} text="Button Only Close" />

        <Modal
          isOpen={openModal === "noBackdrop"}
          onClose={() => setOpenModal(null)}
          closeOnBackdropClick={false}
          ModalHeader={<h3 style={{ margin: 0 }}>No Backdrop Close</h3>}
          ModalFooter={<Button onClick={() => setOpenModal(null)} text="Close" />}
        >
          <p style={{ margin: 0 }}>Clicking the backdrop will NOT close this modal. Use Escape key or the button.</p>
        </Modal>

        <Modal
          isOpen={openModal === "noEscape"}
          onClose={() => setOpenModal(null)}
          closeOnEscape={false}
          ModalHeader={<h3 style={{ margin: 0 }}>No Escape Close</h3>}
          ModalFooter={<Button onClick={() => setOpenModal(null)} text="Close" />}
        >
          <p style={{ margin: 0 }}>Pressing Escape will NOT close this modal. Click backdrop or use the button.</p>
        </Modal>

        <Modal
          isOpen={openModal === "buttonOnly"}
          onClose={() => setOpenModal(null)}
          closeOnBackdropClick={false}
          closeOnEscape={false}
          ModalHeader={<h3 style={{ margin: 0 }}>Button Only Close</h3>}
          ModalFooter={<Button onClick={() => setOpenModal(null)} text="Close" />}
        >
          <p style={{ margin: 0 }}>This modal can only be closed by clicking the button.</p>
        </Modal>
      </div>
    );
  },
};

// ============================
// Scrollable Content Example
// ============================
export const ScrollableContentExample: Story = {
  name: "Scrollable Content",
  tags: ["!dev"],
  args: Playground.args,
  parameters: {
    docs: {
      description: {
        story: "Modal body scrolls when content exceeds maxHeight.",
      },
      source: {
        language: "tsx",
        code: `
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  maxHeight="400px"
  ModalHeader={<div style={{ height: "40px", backgroundColor: "red" }}>Modal Header</div>}
  ModalFooter={<div style={{ height: "40px", backgroundColor: "blue" }}>Modal Footer</div>}
>
  <div style={{ height: "200vh", backgroundColor: "pink" }} />
</Modal>
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)} text="Open Scrollable Modal" />

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          maxHeight="400px"
          ModalHeader={<div style={{ height: "40px", backgroundColor: "red" }}>Modal Header</div>}
          ModalFooter={<div style={{ height: "40px", backgroundColor: "blue" }}>Modal Footer</div>}
        >
          <div style={{ height: "200vh", backgroundColor: "pink" }} />
        </Modal>
      </div>
    );
  },
};
