import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { h } from "vue";

import Button from "@/vue/components/Button/Button.vue";
import Portal from "@/vue/components/Portal/Portal.vue";
import { VueWrapper } from "../../wrappers";

import "@/core/styles/components/button.css";
import "@/core/styles/variables/index.css";

const meta: Meta = {
  title: "Vue Components/Portal",
  parameters: {
    docs: {
      description: {
        component: "Portal renders children into a DOM node outside the parent component hierarchy.",
      },
    },
  },
  argTypes: {
    to: {
      description: "Target selector or element (default: 'body')",
      control: "text",
      table: {
        type: { summary: "string | Element" },
        defaultValue: { summary: '"body"' },
      },
    },
    disabled: {
      description: "When true, children render in place without portaling",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

/**
 * Basic Portal Demo for Vue
 */
function PortalDemo() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <VueWrapper
        component={Button}
        props={{ onClick: () => setShow(!show) }}
        children={show ? "Hide Portal Content" : "Show Portal Content"}
      />

      <div
        id="vue-portal-target"
        style={{
          marginTop: 16,
          minHeight: 60,
          position: "relative",
        }}
      >
        {show && (
          <VueWrapper
            component={Portal}
            props={{ to: "#vue-portal-target" }}
            children={{
              default: () =>
                h(
                  "div",
                  {
                    style: {
                      padding: "16px 24px",
                      backgroundColor: "var(--VENOMOUSUI-bg-primary)",
                      border: "1px solid var(--VENOMOUSUI-border-color)",
                      borderRadius: "8px",
                      boxShadow: "var(--VENOMOUSUI-shadow-lg)",
                    },
                  },
                  "This content is rendered via Portal!",
                ),
            }}
          />
        )}
      </div>
    </div>
  );
}

export const Default: Story = {
  name: "Basic Usage",
  args: {
    to: "body",
    disabled: false,
  },
  render: () => <PortalDemo />,
  parameters: {
    docs: {
      source: {
        language: "html",
        code: `<script setup lang="ts">
import { Portal } from "venomous-ui/vue";
import { ref } from "vue";

const show = ref(false);
</script>

<template>
  <button @click="show = !show">Toggle Portal</button>

  <Portal v-if="show">
    <div style="position: fixed; bottom: 20px; right: 20px;">
      This content is rendered at document.body!
    </div>
  </Portal>
</template>`,
      },
    },
  },
};

export const CustomTarget: Story = {
  name: "Custom Target",
  tags: ["!dev"],
  render: () => (
    <div>
      <div
        id="portal-target"
        style={{
          padding: 16,
          minHeight: 80,
          border: "2px dashed var(--VENOMOUSUI-border-color)",
          borderRadius: 8,
          position: "relative",
        }}
      >
        <span style={{ color: "var(--VENOMOUSUI-text-secondary)" }}>Custom target (#portal-target)</span>
        <VueWrapper
          component={Portal}
          props={{ to: "#portal-target" }}
          children={{
            default: () =>
              h(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    padding: "8px 16px",
                    backgroundColor: "var(--VENOMOUSUI-color-theme)",
                    color: "white",
                    borderRadius: "4px",
                  },
                },
                "Portaled here!",
              ),
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use the `to` prop with a CSS selector to render portal content into a specific container.",
      },
      source: {
        language: "html",
        code: `<template>
  <div id="custom-container">
    Custom container
    <Portal to="#custom-container">
      <div>Portaled into custom container!</div>
    </Portal>
  </div>
</template>`,
      },
    },
  },
};

export const Disabled: Story = {
  name: "Disabled",
  tags: ["!dev"],
  render: () => (
    <div
      style={{
        padding: 16,
        border: "1px solid var(--VENOMOUSUI-border-color)",
        borderRadius: 8,
      }}
    >
      <p style={{ margin: "0 0 8px" }}>Parent container:</p>
      <VueWrapper
        component={Portal}
        props={{ disabled: true }}
        children={{
          default: () =>
            h(
              "div",
              {
                style: {
                  padding: "8px 16px",
                  backgroundColor: "var(--VENOMOUSUI-bg-secondary)",
                  borderRadius: "4px",
                },
              },
              "This content stays in place (disabled=true)",
            ),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "When `disabled` is true, children render in place without being teleported.",
      },
      source: {
        language: "html",
        code: `<Portal disabled>
  <div>This renders in place, not teleported</div>
</Portal>`,
      },
    },
  },
};
