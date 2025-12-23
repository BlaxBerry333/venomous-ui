import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/react/components/Button";
import { Icon } from "@/react/components/Icon";

import { Space } from "../Space";
import { ToastProviderProps } from "./Toast.types";
import ToastProvider from "./ToastProvider";
import { useToast } from "./useToast";

const placements: ToastProviderProps["placement"][] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const meta = {
  title: "React/Components/<Toast>",
  component: ToastProvider,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      description: "Toast placement position.",
      type: { name: "string" },
      table: {
        type: { summary: '"top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"' },
        defaultValue: { summary: '"top-right"' },
      },
      control: { type: "select" },
      options: placements,
    },
    duration: {
      description: "Default auto-dismiss duration in milliseconds.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4000" },
      },
      control: { type: "number" },
    },
    maxCount: {
      description: "Maximum number of toasts to display at once.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
      control: { type: "number" },
    },
    gap: {
      description: "Gap between toasts in pixels.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "12" },
      },
      control: { type: "number" },
    },
    offset: {
      description: "Offset from viewport edge.",
      table: {
        type: { summary: "number | { x?: number; y?: number }" },
        defaultValue: { summary: "16" },
      },
      control: { type: "number" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Displays brief, non-blocking notifications</Subtitle>

          <Markdown>
            {`
Toast provides a way to display brief messages to users without interrupting their workflow.
Uses a Provider + Hook pattern for easy imperative API access.

Must be used within \`<ThemeProvider>\` and \`<ToastProvider>\` components.
            `}
          </Markdown>

          <Heading>Basic Usage</Heading>
          <Source
            language="tsx"
            dark
            code={`"use client";

import { ThemeProvider, ToastProvider, useToast, Button } from "venomous-ui/react/components";

function App() {
  return (
    <ThemeProvider>
      <ToastProvider placement="top-right" duration={4000}>
        <MyComponent />
      </ToastProvider>
    </ThemeProvider>
  );
}

function MyComponent() {
  const toast = useToast();

  return (
    <div>
      <Button onClick={() => toast.success("Saved successfully!")}>
        Save
      </Button>
      <Button onClick={() => toast.error("Something went wrong")}>
        Error
      </Button>
    </div>
  );
}`}
          />

          <Heading>Examples</Heading>

          <Subtitle>{MethodsExample.name}</Subtitle>
          <Description of={MethodsExample} />
          <Canvas of={MethodsExample} />

          <Subtitle>{LoadingSetToSuccessExample.name}</Subtitle>
          <Description of={LoadingSetToSuccessExample} />
          <Canvas of={LoadingSetToSuccessExample} />

          <Subtitle>{WithDescriptionExample.name}</Subtitle>
          <Description of={WithDescriptionExample} />
          <Canvas of={WithDescriptionExample} />

          <Subtitle>{WithActionExample.name}</Subtitle>
          <Description of={WithActionExample} />
          <Canvas of={WithActionExample} />

          <Subtitle>{CustomIconExample.name}</Subtitle>
          <Description of={CustomIconExample} />
          <Canvas of={CustomIconExample} />

          <Subtitle>{PlacementsExample.name}</Subtitle>
          <Description of={PlacementsExample} />
          <Canvas of={PlacementsExample} />

          <Heading>Props</Heading>
          <ArgTypes />

          <Heading>useToast Hook</Heading>
          <Markdown>
            {`
The \`useToast\` hook provides a set of methods for displaying toast notifications.<br/>
Must be used within a \`<ToastProvider>\` component.
            `}
          </Markdown>
          <Source
            language="tsx"
            dark
            code={`const toast = useToast();

// Basic methods
toast.success(title, options?);
toast.error(title, options?);
toast.warning(title, options?);
toast.info(title, options?);
toast.loading(title, options?);

// Advanced methods
toast.open({ variant, title, ...options });
toast.set(id, options);  // Update existing toast
toast.close(id);         // Close specific toast
toast.closeAll();        // Close all toasts
`}
          />
          <Source
            language="tsx"
            dark
            code={`
// Options
{
  description?: ReactNode;  // Additional description text or custom content
  duration?: number;        // Auto-dismiss duration (0 = no auto-dismiss)
  closable?: boolean;       // Show close button (default: true)
  showIcon?: boolean;       // Show variant icon (default: true)
  icon?: Icon;              // Custom icon element
  action?: Action;          // Custom action button(s)
  onClose?: () => void;     // Callback when toast closes
}`}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  args: {
    placement: "top-right",
    duration: 4000,
    maxCount: 5,
    gap: 12,
    offset: 16,
  },
  render: function RenderStory(args) {
    return (
      <ToastProvider {...args}>
        <VariantsDemo />
      </ToastProvider>
    );
  },
};

// ============================
// Methods Example
// ============================
export const MethodsExample: Story = {
  name: "Methods",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        code: `
const toast = useToast();

// Basic methods - shorthand for common variants
toast.success("Success message");
toast.error("Error message");
toast.warning("Warning message");
toast.info("Info message");
toast.loading("Loading...");

// Advanced methods
toast.open({ variant: "success", title: "Custom toast", description: "With options" });
toast.close(id);         // Close specific toast
toast.closeAll();        // Close all toasts

// Update existing toast using set(id, options)
// All toast methods return { id } which can be used with set()
const { id } = toast.loading("Processing...");
await asyncOperation();
toast.set(id, {
  variant: "success",
  title: "Complete!",
  description: "Operation finished",
  duration: 3000,
});
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <ToastProvider>
        <VariantsDemo />
      </ToastProvider>
    );
  },
};

// ============================
// Loading set to Success Example
// ============================
export const LoadingSetToSuccessExample: Story = {
  name: "Loading set to Success/Error",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use `toast.set()` method to update toast from loading state to success/error state after an async operation.",
      },
      source: {
        code: `
// Loading → Success
const handleSave = async () => {
  const { id } = toast.loading("Saving...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  toast.set(id, {
    variant: "success",
    title: "Saved successfully!",
    duration: 3000,
  });
};

// Loading → Error
const handleError = async () => {
  const { id } = toast.loading("Uploading...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  toast.set(id, {
    variant: "error",
    title: "Upload failed",
    description: "Network error occurred",
    duration: 5000,
  });
};
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <ToastProvider>
        <LoadingToSuccessDemo />
      </ToastProvider>
    );
  },
};

// ============================
// With Description Example
// ============================
export const WithDescriptionExample: Story = {
  name: "With Description",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Add a description for more detailed information. The `description` option accepts `ReactNode`, allowing custom content.",
      },
      source: {
        code: `
// Simple text description
toast.success("File uploaded", {
  description: "Your file has been uploaded successfully."
});

// Custom ReactNode description
toast.info("New version available", {
  description: (
    <span>
      Version <strong>2.0.0</strong> is ready.{" "}
      <a href="#">View changelog</a>
    </span>
  ),
});
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <ToastProvider>
        <WithDescriptionDemo />
      </ToastProvider>
    );
  },
};

// ============================
// With Action Example
// ============================
export const WithActionExample: Story = {
  name: "With Action",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "Add custom action buttons for user interactions like Undo. The `action` option accepts `ReactNode`.",
      },
      source: {
        code: `
// action accepts ReactNode - typically buttons
const { id } = toast.success("Item deleted", {
  duration: 5000,
  action: (
    <Space.Flex spacing={2}>
      <Button
        size="small"
        text="OK"
        onClick={() => {
          toast.close(id);
          toast.success("Successfully restored");
        }}
      />
      <Button
        size="small"
        text="Close "
        onClick={() => {
          toast.close(id);
        }}
      />
    </Space.Flex>
  ),
});
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <ToastProvider>
        <WithActionDemo />
      </ToastProvider>
    );
  },
};

// ============================
// Custom Icon Example
// ============================
export const CustomIconExample: Story = {
  name: "Custom Icon",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Use custom icons or hide the icon entirely with `showIcon: false`. The `icon` option accepts `ReactNode`.",
      },
      source: {
        code: `
// icon accepts ReactNode - custom icon component
toast.loading("Uploading...", {
  icon: <Icon icon="mdi:cloud-upload" />,
});

// Emoji as icon
toast.success("Achievement!", {
  icon: <span>🏆</span>,
});

// Hide icon entirely
toast.info("Plain message", {
  showIcon: false,
});
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    return (
      <ToastProvider>
        <CustomIconDemo />
      </ToastProvider>
    );
  },
};

// ============================
// Placements Example
// ============================
export const PlacementsExample: Story = {
  name: "Placements",
  args: Playground.args,
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "Configure toast placement via `ToastProvider`. Options: `top-right`, `top-center`, `top-left`, `bottom-right`, `bottom-center`, `bottom-left`.",
      },
      source: {
        code: `
<ToastProvider placement="top-right">
  <App />
</ToastProvider>

<ToastProvider placement="bottom-center">
  <App />
</ToastProvider>
        `.trim(),
      },
    },
  },
  render: function RenderStory(args) {
    return (
      <ToastProvider placement={args.placement}>
        <PlacementsDemo />
      </ToastProvider>
    );
  },
};

// ============================
// Demo Components
// ============================

function VariantsDemo() {
  const toast = useToast();

  const handleSet = async () => {
    // toast methods return { id } which can be used with set()
    const { id } = toast.loading("Processing...");

    // Simulate async operation
    await new Promise((r) => setTimeout(r, 1500));

    // Update the toast using set(id, options)
    toast.set(id, {
      variant: "success",
      title: "Complete!",
      description: "Operation finished successfully",
      duration: 3000,
    });
  };

  return (
    <Space.Flex column spacing={2}>
      <Space.Flex spacing={2} style={{ flexWrap: "wrap" }}>
        <Button onClick={() => toast.success("Success message")} text="success( )" />
        <Button onClick={() => toast.error("Error message")} text="error( )" />
        <Button onClick={() => toast.warning("Warning message")} text="warning( )" />
        <Button onClick={() => toast.info("Info message")} text="info( )" />
      </Space.Flex>

      <Space.Flex spacing={2} style={{ flexWrap: "wrap" }}>
        <Button onClick={() => toast.loading("Loading...")} text="loading( )" />
        <Button
          text="open( )"
          onClick={() =>
            toast.open({
              variant: "success",
              title: "Custom toast",
              description: "Created with open()",
            })
          }
        />
        <Button onClick={handleSet} text="set( id )" />
        <Button onClick={() => toast.closeAll()} variant="outlined" text="closeAll( )" />
      </Space.Flex>
    </Space.Flex>
  );
}

function WithDescriptionDemo() {
  const toast = useToast();

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        onClick={() =>
          toast.success("File uploaded", {
            description: "Your file has been uploaded successfully.",
          })
        }
      >
        Text Description
      </Button>
      <Button
        onClick={() =>
          toast.error("Upload failed", {
            description: "Please check your network connection and try again.",
          })
        }
      >
        Error Description
      </Button>
      <Button
        onClick={() =>
          toast.info("New version available", {
            description: (
              <span>
                Version <strong>2.0.0</strong> is ready.{" "}
                <a href="#" style={{ color: "inherit", textDecoration: "underline" }}>
                  View changelog
                </a>
              </span>
            ),
          })
        }
      >
        Custom ReactNode
      </Button>
    </div>
  );
}

function WithActionDemo() {
  const toast = useToast();

  const handleDelete = () => {
    const { id } = toast.info("Hello", {
      duration: 5000,
      action: (
        <Space.Flex spacing={2}>
          <Button
            size="small"
            text="OK"
            onClick={() => {
              toast.close(id);
              toast.success("Successfully restored");
            }}
          />
          <Button
            size="small"
            text="Close "
            onClick={() => {
              toast.close(id);
            }}
          />
        </Space.Flex>
      ),
    });
  };

  return <Button onClick={handleDelete}>With Actions</Button>;
}

function LoadingToSuccessDemo() {
  const toast = useToast();

  const handleSave = async () => {
    const { id } = toast.loading("Saving...");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.set(id, {
      variant: "success",
      title: "Saved successfully!",
      duration: 3000,
    });
  };

  const handleSaveWithError = async () => {
    const { id } = toast.loading("Uploading...");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.set(id, {
      variant: "error",
      title: "Upload failed",
      description: "Network error occurred",
      duration: 5000,
    });
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button onClick={handleSave}>Loading → Success</Button>
      <Button onClick={handleSaveWithError}>Loading → Error</Button>
    </div>
  );
}

function CustomIconDemo() {
  const toast = useToast();

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        onClick={() =>
          toast.loading("Uploading...", {
            icon: <Icon icon="mdi:cloud-upload" />,
          })
        }
      >
        Custom Upload Icon
      </Button>
      <Button
        onClick={() =>
          toast.info("New message", {
            icon: <Icon icon="mdi:message" />,
          })
        }
      >
        Message Icon
      </Button>
      <Button
        onClick={() =>
          toast.success("Achievement unlocked!", {
            icon: <span>🏆</span>,
          })
        }
      >
        Emoji Icon
      </Button>
      <Button
        onClick={() =>
          toast.info("No icon toast", {
            showIcon: false,
          })
        }
      >
        No Icon
      </Button>
    </div>
  );
}

function PlacementsDemo() {
  const toast = useToast();

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {placements.map((p) => (
        <Button key={p} onClick={() => toast.info(`Toast at ${p}`)}>
          {p}
        </Button>
      ))}
      <Button onClick={() => toast.closeAll()} variant="outlined">
        Close All
      </Button>
    </div>
  );
}
