import { CSS_CLASSES } from "@/core/constants";
import { fireEvent, render, screen } from "@testing-library/vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { defineComponent, h, inject, nextTick } from "vue";
import Input from "../Input/Input.vue";
import Textarea from "../Textarea/Textarea.vue";
import FormField from "./FormField.vue";

// Helper component that injects formFieldErrorId to trigger the computed
const ErrorIdReader = defineComponent({
  setup() {
    const errorId = inject<{ value: string | undefined }>("formFieldErrorId");
    return () => h("span", { "data-testid": "error-id-value" }, errorId?.value ?? "none");
  },
});

const classes = CSS_CLASSES.formField;

describe("FormField", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(FormField, {
        props: { label: "Email" },
        slots: { default: () => h(Input) },
      });

      expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("renders children", () => {
      render(FormField, {
        props: { label: "Name" },
        slots: { default: () => h(Input, { placeholder: "Enter name" }) },
      });

      expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    });

    it("renders without label", () => {
      const { container } = render(FormField, {
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector("input")).toBeInTheDocument();
    });
  });

  describe("label prop", () => {
    it("renders label text", () => {
      render(FormField, {
        props: { label: "Username" },
        slots: { default: () => h(Input) },
      });

      expect(screen.getByText("Username")).toBeInTheDocument();
    });

    it("renders label with for linked to field id", () => {
      render(FormField, {
        props: { label: "Email" },
        slots: { default: () => h(Input) },
      });

      const label = screen.getByText("Email");
      expect(label).toHaveAttribute("for");
    });
  });

  describe("required prop", () => {
    it("does not show required indicator by default", () => {
      render(FormField, {
        props: { label: "Email" },
        slots: { default: () => h(Input) },
      });

      expect(screen.queryByText("*")).not.toBeInTheDocument();
    });

    it("shows required indicator when required is true", () => {
      render(FormField, {
        props: { label: "Email", required: true },
        slots: { default: () => h(Input) },
      });

      expect(screen.getByText("*")).toBeInTheDocument();
      expect(screen.getByText("*")).toHaveClass(classes.required);
    });
  });

  describe("error prop", () => {
    it("does not show error message by default", () => {
      render(FormField, {
        props: { label: "Email" },
        slots: { default: () => h(Input) },
      });

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("shows error message when error is provided", () => {
      render(FormField, {
        props: { label: "Email", error: "Invalid email address" },
        slots: { default: () => h(Input) },
      });

      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("applies error class when error is provided", () => {
      const { container } = render(FormField, {
        props: { label: "Email", error: "Invalid email" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.states.error);
    });

    it("passes error state to child Input component via provide/inject", () => {
      const { container } = render(FormField, {
        props: { label: "Email", error: "Invalid email" },
        slots: { default: () => h(Input) },
      });

      const inputWrapper = container.querySelector(`.${CSS_CLASSES.input.wrapper}`);
      expect(inputWrapper).toHaveClass(CSS_CLASSES.input.states.error);
    });

    it("passes error state to child Textarea component via provide/inject", () => {
      const { container } = render(FormField, {
        props: { label: "Bio", error: "Bio is required" },
        slots: { default: () => h(Textarea) },
      });

      const textarea = container.querySelector("textarea");
      expect(textarea).toHaveClass(CSS_CLASSES.textarea.states.error);
    });
  });

  describe("size prop", () => {
    it("applies sm size class", () => {
      const { container } = render(FormField, {
        props: { label: "Email", size: "sm" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      const { container } = render(FormField, {
        props: { label: "Email", size: "md" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      const { container } = render(FormField, {
        props: { label: "Email", size: "lg" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.sizes.lg);
    });
  });

  describe("orientation prop", () => {
    it("applies vertical orientation class by default", () => {
      const { container } = render(FormField, {
        props: { label: "Email" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.orientations.vertical);
    });

    it("applies horizontal orientation class", () => {
      const { container } = render(FormField, {
        props: { label: "Email", orientation: "horizontal" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.orientations.horizontal);
    });
  });

  describe("controlPosition prop", () => {
    it("does not apply control position class by default", () => {
      const { container } = render(FormField, {
        props: { label: "Remember me", orientation: "horizontal" },
        slots: { default: () => h(Input) },
      });

      const root = container.querySelector(`.${classes.root}`);
      expect(root).not.toHaveClass(classes.controlPositions.start);
      expect(root).not.toHaveClass(classes.controlPositions.end);
    });

    it("applies start control position class", () => {
      const { container } = render(FormField, {
        props: { label: "Remember me", orientation: "horizontal", controlPosition: "start" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.controlPositions.start);
    });

    it("applies end control position class", () => {
      const { container } = render(FormField, {
        props: { label: "Remember me", orientation: "horizontal", controlPosition: "end" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass(classes.controlPositions.end);
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      const { container } = render(FormField, {
        props: { label: "Email", className: "custom-class" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.root}`)).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      const { container } = render(FormField, {
        props: { label: "Email", className: "custom-class" },
        slots: { default: () => h(Input) },
      });

      const root = container.querySelector(`.${classes.root}`);
      expect(root).toHaveClass(classes.root);
      expect(root).toHaveClass("custom-class");
    });
  });

  describe("tooltip", () => {
    it("renders tooltip when tooltip prop and tooltipIcon slot are provided", () => {
      render(FormField, {
        props: { label: "Email", tooltip: "Enter your email" },
        slots: {
          default: () => h(Input),
          tooltipIcon: '<span data-testid="tip-icon">?</span>',
        },
      });

      expect(screen.getByTestId("tip-icon")).toBeInTheDocument();
    });

    it("does not render tooltip when only tooltip prop is provided without tooltipIcon slot", () => {
      const { container } = render(FormField, {
        props: { label: "Email", tooltip: "Enter your email" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector(`.${classes.tooltipTrigger}`)).toBeNull();
    });
  });

  describe("non-element children", () => {
    it("renders plain text children", () => {
      render(FormField, {
        props: { label: "Field" },
        slots: { default: "plain text" },
      });
      expect(screen.getByText("plain text")).toBeInTheDocument();
    });
  });

  describe("error id injection", () => {
    it("provides error id to child when error exists", () => {
      render(FormField, {
        props: { label: "Email", error: "Required" },
        slots: { default: () => h(Input) },
      });

      const errorEl = screen.getByRole("alert");
      expect(errorEl).toHaveAttribute("id");
      expect(errorEl.id).toContain("form-field-error-");
    });

    it("does not provide error id when no error", () => {
      const { container } = render(FormField, {
        props: { label: "Email" },
        slots: { default: () => h(Input) },
      });

      expect(container.querySelector('[role="alert"]')).toBeNull();
    });
  });

  describe("formFieldErrorId provide", () => {
    it("provides errorId when error exists", () => {
      render(FormField, {
        props: { label: "Email", error: "Required" },
        slots: { default: () => h(ErrorIdReader) },
      });

      const errorIdEl = screen.getByTestId("error-id-value");
      expect(errorIdEl.textContent).toContain("form-field-error-");
    });

    it("provides undefined when no error exists", () => {
      render(FormField, {
        props: { label: "Email" },
        slots: { default: () => h(ErrorIdReader) },
      });

      const errorIdEl = screen.getByTestId("error-id-value");
      expect(errorIdEl.textContent).toBe("none");
    });
  });

  describe("tooltip slot", () => {
    afterEach(() => {
      vi.useRealTimers();
    });

    it("renders tooltip slot content when tooltip slot and tooltipIcon slot are both provided", () => {
      render(FormField, {
        props: { label: "Email" },
        slots: {
          default: () => h(Input),
          tooltip: '<span data-testid="tooltip-content">Help text</span>',
          tooltipIcon: '<span data-testid="tip-icon">?</span>',
        },
      });

      expect(screen.getByTestId("tip-icon")).toBeInTheDocument();
    });

    it("renders tooltip text as slot fallback content when hovered", async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true });

      render(FormField, {
        props: { label: "Email", tooltip: "Help text" },
        slots: {
          default: () => h(Input),
          tooltipIcon: () => h("span", { "data-testid": "tip-icon" }, "?"),
        },
      });

      const tipIcon = screen.getByTestId("tip-icon");
      const triggerSpan = tipIcon.closest("[style*='contents']") || tipIcon.parentElement;
      await fireEvent.mouseEnter(triggerSpan!);
      vi.advanceTimersByTime(300);
      await nextTick();

      expect(screen.getByRole("tooltip")).toBeInTheDocument();
      expect(screen.getByText("Help text")).toBeInTheDocument();
    });
  });
});
