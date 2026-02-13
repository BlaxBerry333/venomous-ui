import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useRef, useState } from "react";

import { createToastStore } from "@/core/helpers/toast-store";
import type { TToastPlacement, TToastType } from "@/core/types";
import ButtonVue from "@/vue/components/Button/Button.vue";
import ToasterVue from "@/vue/components/Toast/Toaster.vue";
import { h } from "vue";
import { VueWrapper } from "../../wrappers";
import { TOAST_PLACEMENT_OPTIONS, TOAST_TYPE_OPTIONS } from "../constants";

import "@/core/styles/components/button.css";
import "@/core/styles/components/toast.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Toast",
  parameters: {
    docs: {
      description: {
        component: `
Toast provides lightweight notification messages. Use the imperative \`toast\` API to trigger notifications from anywhere in your app.

**CSS Reference:** See [CSS Classes](?path=/docs/core-css-classes--docs) and [CSS Variables](?path=/docs/core-css-variables--docs) for styling options.
        `,
      },
    },
  },
  argTypes: {
    icons: {
      table: { disable: true },
    },
    type: {
      description: "Toast type — determines color",
      control: "select",
      options: TOAST_TYPE_OPTIONS,
      table: {
        type: { summary: TOAST_TYPE_OPTIONS.map((t) => `"${t}"`).join(" | ") },
        defaultValue: { summary: '"info"' },
      },
    },
    title: {
      description: "Main title text",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      description: "Optional description text",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    duration: {
      description: "Auto-close duration (ms), 0 to disable",
      control: { type: "number", min: 0, step: 500 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4000" },
      },
    },
    closable: {
      description: "Show close button",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    placement: {
      description: "Toast display placement",
      control: "select",
      options: TOAST_PLACEMENT_OPTIONS,
      table: {
        type: { summary: TOAST_PLACEMENT_OPTIONS.map((p) => `"${p}"`).join(" | ") },
        defaultValue: { summary: '"top"' },
      },
    },
    store: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Usage - Interactive demo with controls
 */
function ToastDemo(props: {
  type?: TToastType;
  title?: string;
  description?: string;
  duration?: number;
  closable?: boolean;
  placement?: TToastPlacement;
}) {
  const {
    type = "info",
    title = "Notification",
    description = "",
    duration = 4000,
    closable = true,
    placement = "top",
  } = props;

  const { store, toast } = useMemo(() => createToastStore(), []);

  return (
    <>
      <VueWrapper
        component={ButtonVue}
        props={{
          onClick: () =>
            toast(title, {
              type,
              description: description || undefined,
              duration,
              closable,
            }),
        }}
        children={{ default: () => h("span", "Show Toast") }}
      />
      <VueWrapper component={ToasterVue} props={{ store, placement }} />
    </>
  );
}

export const Default: Story = {
  name: "Basic Usage",
  args: {
    type: "success",
    title: "Saved successfully",
    description: "Your changes have been saved.",
    duration: 4000,
    closable: true,
    placement: "top",
  },
  render: function Render(args) {
    return (
      <ToastDemo
        type={args.type as TToastType}
        title={args.title as string}
        description={args.description as string}
        duration={args.duration as number}
        closable={args.closable as boolean}
        placement={args.placement as TToastPlacement}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import "venomous-ui/core/styles/variables/index.css";
import "venomous-ui/core/styles/components/toast.css";
import { toast } from "venomous-ui/core/helpers";
import { Toaster } from "venomous-ui/vue";

function handleSave() {
  toast.success("Saved successfully", {
    description: "Your changes have been saved.",
  });
}
</script>

<template>
  <button @click="handleSave">Save</button>
  <Toaster placement="top" />
</template>`,
      },
    },
  },
};

/**
 * Types - success, error, warning, info
 */
export const Types: Story = {
  name: "Types",
  tags: ["!dev"],
  render: function Render() {
    const { store, toast } = useMemo(() => createToastStore(), []);
    const types: TToastType[] = ["success", "error", "warning", "info"];
    return (
      <>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {types.map((type) => (
            <VueWrapper
              key={type}
              component={ButtonVue}
              props={{
                onClick: () =>
                  toast(type.charAt(0).toUpperCase() + type.slice(1), {
                    type,
                    description: `This is a ${type} message.`,
                  }),
              }}
              children={{ default: () => h("span", type) }}
            />
          ))}
        </div>
        <VueWrapper component={ToasterVue} props={{ store, placement: "top-end" }} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Toast supports four types: `success`, `error`, `warning`, and `info`. Each type has a distinct color indicator.",
      },
      source: {
        language: "html",
        code: `<script setup>
import { toast } from "venomous-ui/core/helpers";
</script>

<template>
  <button @click="toast.success('Success', { description: 'Operation completed.' })">Success</button>
  <button @click="toast.error('Error', { description: 'Something went wrong.' })">Error</button>
  <button @click="toast.warning('Warning', { description: 'Please check.' })">Warning</button>
  <button @click="toast.info('Info', { description: 'Here is some info.' })">Info</button>
</template>`,
      },
    },
  },
};

/**
 * Placements - 6 positions
 */
export const Placements: Story = {
  name: "Placements",
  tags: ["!dev"],
  render: function Render() {
    const { store, toast } = useMemo(() => createToastStore(), []);
    const [placement, setPlacement] = useState<TToastPlacement>("top");
    const placements: TToastPlacement[] = ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"];
    return (
      <>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {placements.map((p) => (
            <VueWrapper
              key={p}
              component={ButtonVue}
              props={{
                variant: p === placement ? "solid" : "outline",
                onClick: () => {
                  toast.dismiss();
                  setPlacement(p);
                  toast.info(p, { description: `Placed at ${p}` });
                },
              }}
              children={{ default: () => h("span", p) }}
            />
          ))}
        </div>
        <VueWrapper component={ToasterVue} props={{ store, placement }} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Toast supports six placements: `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`.",
      },
      source: {
        language: "html",
        code: `<Toaster placement="top-end" />`,
      },
    },
  },
};

/**
 * Auto Close - duration and hover pause
 */
export const AutoClose: Story = {
  name: "Auto Close",
  tags: ["!dev"],
  render: function Render() {
    const { store, toast } = useMemo(() => createToastStore(), []);
    return (
      <>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <VueWrapper
            component={ButtonVue}
            props={{ onClick: () => toast.info("2 seconds", { duration: 2000 }) }}
            children={{ default: () => h("span", "2s") }}
          />
          <VueWrapper
            component={ButtonVue}
            props={{ onClick: () => toast.info("5 seconds", { duration: 5000 }) }}
            children={{ default: () => h("span", "5s") }}
          />
          <VueWrapper
            component={ButtonVue}
            props={{ onClick: () => toast.info("No auto close", { duration: 0 }) }}
            children={{ default: () => h("span", "Persistent") }}
          />
        </div>
        <VueWrapper component={ToasterVue} props={{ store, placement: "top-end" }} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Control auto-close duration with the `duration` option. Set to `0` to disable auto-close. Hovering over a toast pauses the timer.",
      },
      source: {
        language: "html",
        code: `<script setup>
import { toast } from "venomous-ui/core/helpers";
</script>

<template>
  <button @click="toast.info('Quick', { duration: 2000 })">2s</button>
  <button @click="toast.info('Persistent', { duration: 0 })">Persistent</button>
</template>`,
      },
    },
  },
};

/**
 * Dismiss - programmatic close
 */
export const Dismiss: Story = {
  name: "Dismiss",
  tags: ["!dev"],
  render: function Render() {
    const { store, toast } = useMemo(() => createToastStore(), []);
    const idsRef = useRef<string[]>([]);
    return (
      <>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <VueWrapper
            component={ButtonVue}
            props={{
              onClick: () => {
                idsRef.current.push(toast.success("New toast", { duration: 0 }));
              },
            }}
            children={{ default: () => h("span", "Create Toast") }}
          />
          <VueWrapper
            component={ButtonVue}
            props={{
              variant: "outline",
              onClick: () => {
                const id = idsRef.current.pop();
                if (id) toast.dismiss(id);
              },
            }}
            children={{ default: () => h("span", "Dismiss Last") }}
          />
          <VueWrapper
            component={ButtonVue}
            props={{ variant: "outline", onClick: () => toast.dismiss() }}
            children={{ default: () => h("span", "Dismiss All") }}
          />
        </div>
        <VueWrapper component={ToasterVue} props={{ store, placement: "top-end" }} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Use `toast.dismiss(id)` to close a specific toast, or `toast.dismiss()` to close all toasts.",
      },
      source: {
        language: "html",
        code: `<script setup>
import { toast } from "venomous-ui/core/helpers";

const id = toast.success("Saved!");

// Dismiss specific toast
toast.dismiss(id);

// Dismiss all toasts
toast.dismiss();
</script>`,
      },
    },
  },
};
