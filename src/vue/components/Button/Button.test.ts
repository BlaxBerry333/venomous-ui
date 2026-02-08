import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Button from "./Button.vue";

const classes = CSS_CLASSES.button;

describe("Button", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(Button, { slots: { default: "Click me" } });
      const button = screen.getByRole("button", { name: "Click me" });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(classes.root);
      expect(button).toHaveClass(classes.sizes.md);
      expect(button).toHaveClass(classes.variants.solid);
    });

    it("renders slot content correctly", () => {
      render(Button, {
        slots: { default: '<span data-testid="child">Child content</span>' },
      });

      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Child content")).toBeInTheDocument();
    });
  });

  describe("size prop", () => {
    it("applies sm size class", () => {
      render(Button, { props: { size: "sm" }, slots: { default: "Small" } });
      expect(screen.getByRole("button")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(Button, { props: { size: "md" }, slots: { default: "Medium" } });
      expect(screen.getByRole("button")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(Button, { props: { size: "lg" }, slots: { default: "Large" } });
      expect(screen.getByRole("button")).toHaveClass(classes.sizes.lg);
    });
  });

  describe("variant prop", () => {
    it("applies solid variant class (default)", () => {
      render(Button, { props: { variant: "solid" }, slots: { default: "Solid" } });
      expect(screen.getByRole("button")).toHaveClass(classes.variants.solid);
    });

    it("applies outline variant class", () => {
      render(Button, { props: { variant: "outline" }, slots: { default: "Outline" } });
      expect(screen.getByRole("button")).toHaveClass(classes.variants.outline);
    });

    it("applies ghost variant class", () => {
      render(Button, { props: { variant: "ghost" }, slots: { default: "Ghost" } });
      expect(screen.getByRole("button")).toHaveClass(classes.variants.ghost);
    });

    it("applies link variant class", () => {
      render(Button, { props: { variant: "link" }, slots: { default: "Link" } });
      expect(screen.getByRole("button")).toHaveClass(classes.variants.link);
    });
  });

  describe("colorScheme prop", () => {
    it("does not apply color class for theme (default)", () => {
      render(Button, { props: { colorScheme: "theme" }, slots: { default: "Theme" } });
      const button = screen.getByRole("button");

      expect(button).not.toHaveClass(classes.colors.theme);
      expect(button).not.toHaveClass(classes.colors.success);
    });

    it("applies success color class", () => {
      render(Button, { props: { colorScheme: "success" }, slots: { default: "Success" } });
      expect(screen.getByRole("button")).toHaveClass(classes.colors.success);
    });

    it("applies warning color class", () => {
      render(Button, { props: { colorScheme: "warning" }, slots: { default: "Warning" } });
      expect(screen.getByRole("button")).toHaveClass(classes.colors.warning);
    });

    it("applies error color class", () => {
      render(Button, { props: { colorScheme: "error" }, slots: { default: "Error" } });
      expect(screen.getByRole("button")).toHaveClass(classes.colors.error);
    });

    it("applies info color class", () => {
      render(Button, { props: { colorScheme: "info" }, slots: { default: "Info" } });
      expect(screen.getByRole("button")).toHaveClass(classes.colors.info);
    });
  });

  describe("fullWidth prop", () => {
    it("does not apply fullWidth class by default", () => {
      render(Button, { slots: { default: "Normal" } });
      expect(screen.getByRole("button")).not.toHaveClass(classes.states.fullWidth);
    });

    it("applies fullWidth class when true", () => {
      render(Button, { props: { fullWidth: true }, slots: { default: "Full Width" } });
      expect(screen.getByRole("button")).toHaveClass(classes.states.fullWidth);
    });
  });

  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(Button, { slots: { default: "Enabled" } });
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(Button, { props: { disabled: true }, slots: { default: "Disabled" } });
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Button, { props: { className: "custom-class" }, slots: { default: "Custom" } });
      expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(Button, { props: { className: "custom-class" }, slots: { default: "Custom" } });
      const button = screen.getByRole("button");

      expect(button).toHaveClass(classes.root);
      expect(button).toHaveClass("custom-class");
    });
  });

  describe("event handling", () => {
    it("calls click handler when clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Button, { slots: { default: "Click me" } });

      await user.click(screen.getByRole("button"));

      expect(emitted()).toHaveProperty("click");
    });

    it("does not emit click when disabled", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Button, {
        props: { disabled: true },
        slots: { default: "Disabled" },
      });

      await user.click(screen.getByRole("button"));

      expect(emitted()).not.toHaveProperty("click");
    });
  });

  describe("HTML attributes", () => {
    it("passes through type attribute", () => {
      render(Button, { attrs: { type: "submit" }, slots: { default: "Submit" } });
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    it("passes through aria-label attribute", () => {
      render(Button, { attrs: { "aria-label": "Close menu" }, slots: { default: "X" } });
      expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Close menu");
    });

    it("passes through data-testid attribute", () => {
      render(Button, { attrs: { "data-testid": "my-button" }, slots: { default: "Button" } });
      expect(screen.getByTestId("my-button")).toBeInTheDocument();
    });
  });
});
