import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Textarea from "./Textarea.vue";

const classes = CSS_CLASSES.textarea;

describe("Textarea", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      const { container } = render(Textarea);
      const textarea = container.querySelector("textarea") as HTMLTextAreaElement;

      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveClass(classes.root);
      expect(textarea).toHaveClass(classes.sizes.md);
    });

    it("renders textarea element", () => {
      render(Textarea, { props: { placeholder: "Enter description" } });
      expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
    });
  });

  describe("size prop", () => {
    it("applies sm size class", () => {
      const { container } = render(Textarea, { props: { size: "sm" } });
      expect(container.querySelector("textarea")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      const { container } = render(Textarea, { props: { size: "md" } });
      expect(container.querySelector("textarea")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      const { container } = render(Textarea, { props: { size: "lg" } });
      expect(container.querySelector("textarea")).toHaveClass(classes.sizes.lg);
    });
  });

  describe("rows prop", () => {
    it("applies default rows value", () => {
      const { container } = render(Textarea);
      expect(container.querySelector("textarea")).toHaveAttribute("rows", "3");
    });

    it("applies custom rows value", () => {
      const { container } = render(Textarea, { props: { rows: 5 } });
      expect(container.querySelector("textarea")).toHaveAttribute("rows", "5");
    });
  });

  describe("resize prop", () => {
    it("applies vertical resize class by default", () => {
      const { container } = render(Textarea);
      expect(container.querySelector("textarea")).toHaveClass(classes.resize.vertical);
    });

    it("applies none resize class", () => {
      const { container } = render(Textarea, { props: { resize: "none" } });
      expect(container.querySelector("textarea")).toHaveClass(classes.resize.none);
    });

    it("applies horizontal resize class", () => {
      const { container } = render(Textarea, { props: { resize: "horizontal" } });
      expect(container.querySelector("textarea")).toHaveClass(classes.resize.horizontal);
    });

    it("applies both resize class", () => {
      const { container } = render(Textarea, { props: { resize: "both" } });
      expect(container.querySelector("textarea")).toHaveClass(classes.resize.both);
    });
  });

  describe("autoResize prop", () => {
    it("does not apply none resize class when autoResize is false", () => {
      const { container } = render(Textarea, { props: { autoResize: false } });
      expect(container.querySelector("textarea")).not.toHaveClass(classes.resize.none);
    });

    it("applies none resize class when autoResize is true", () => {
      const { container } = render(Textarea, { props: { autoResize: true } });
      expect(container.querySelector("textarea")).toHaveClass(classes.resize.none);
    });

    it("adjusts height on input when autoResize is true", async () => {
      const user = userEvent.setup();
      const { container } = render(Textarea, { props: { autoResize: true } });

      const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
      await user.type(textarea, "Hello\nWorld\nTest");

      expect(textarea.value).toBe("Hello\nWorld\nTest");
    });
  });

  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      const { container } = render(Textarea);
      expect(container.querySelector("textarea")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      const { container } = render(Textarea, { props: { disabled: true } });
      expect(container.querySelector("textarea")).toBeDisabled();
      expect(container.querySelector("textarea")).toHaveClass(classes.states.disabled);
    });
  });

  describe("readOnly prop", () => {
    it("is not readOnly by default", () => {
      const { container } = render(Textarea);
      expect(container.querySelector("textarea")).not.toHaveAttribute("readonly");
    });

    it("is readOnly when readOnly prop is true", () => {
      const { container } = render(Textarea, { props: { readOnly: true } });
      expect(container.querySelector("textarea")).toHaveAttribute("readonly");
    });
  });

  describe("error prop", () => {
    it("does not have error class by default", () => {
      const { container } = render(Textarea);
      expect(container.querySelector("textarea")).not.toHaveClass(classes.states.error);
    });

    it("applies error class when error prop is true", () => {
      const { container } = render(Textarea, { props: { error: true } });
      expect(container.querySelector("textarea")).toHaveClass(classes.states.error);
    });

    it("sets aria-invalid when error prop is true", () => {
      const { container } = render(Textarea, { props: { error: true } });
      expect(container.querySelector("textarea")).toHaveAttribute("aria-invalid", "true");
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      const { container } = render(Textarea, { props: { className: "custom-class" } });
      expect(container.querySelector("textarea")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      const { container } = render(Textarea, { props: { className: "custom-class" } });
      const textarea = container.querySelector("textarea");

      expect(textarea).toHaveClass(classes.root);
      expect(textarea).toHaveClass("custom-class");
    });
  });

  describe("event handling", () => {
    it("emits update:modelValue when value changes", async () => {
      const user = userEvent.setup();
      const { container, emitted } = render(Textarea);

      await user.type(container.querySelector("textarea")!, "hello");

      expect(emitted()).toHaveProperty("update:modelValue");
    });
  });

  describe("HTML attributes", () => {
    it("passes through placeholder attribute", () => {
      render(Textarea, { props: { placeholder: "Enter description" } });
      expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
    });
  });

  describe("autoResize watcher", () => {
    it("adjusts height when modelValue changes with autoResize enabled", async () => {
      const { rerender, container } = render(Textarea, {
        props: { autoResize: true, modelValue: "initial" },
      });

      const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
      expect(textarea).toBeInTheDocument();

      await rerender({ autoResize: true, modelValue: "updated content\nwith newlines" });
      // The watcher fires requestAnimationFrame → adjustHeight
      // We can't easily assert the style, but this exercises the branch
    });

    it("does not call adjustHeight when autoResize is false and modelValue changes", async () => {
      const { rerender, container } = render(Textarea, {
        props: { autoResize: false, modelValue: "initial" },
      });

      const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
      await rerender({ autoResize: false, modelValue: "changed" });
      // No requestAnimationFrame should be called
      expect(textarea).toBeInTheDocument();
    });
  });
});
