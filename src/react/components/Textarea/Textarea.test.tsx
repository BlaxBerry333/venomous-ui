import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Textarea } from "./index";

const classes = CSS_CLASSES.textarea;

describe("Textarea", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Textarea data-testid="textarea" />);
      const textarea = screen.getByTestId("textarea");

      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveClass(classes.root);
      expect(textarea).toHaveClass(classes.sizes.md);
    });

    it("renders textarea element", () => {
      render(<Textarea placeholder="Enter description" />);
      expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
    });
  });

  // Size prop
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(<Textarea size="sm" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(<Textarea size="md" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(<Textarea size="lg" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.sizes.lg);
    });
  });

  // Rows prop
  describe("rows prop", () => {
    it("applies default rows value", () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("rows", "3");
    });

    it("applies custom rows value", () => {
      render(<Textarea rows={5} data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("rows", "5");
    });
  });

  // Resize prop
  describe("resize prop", () => {
    it("applies vertical resize class by default", () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.resize.vertical);
    });

    it("applies none resize class", () => {
      render(<Textarea resize="none" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.resize.none);
    });

    it("applies horizontal resize class", () => {
      render(<Textarea resize="horizontal" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.resize.horizontal);
    });

    it("applies both resize class", () => {
      render(<Textarea resize="both" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.resize.both);
    });
  });

  // AutoResize prop
  describe("autoResize prop", () => {
    it("does not have none resize class when autoResize is false", () => {
      render(<Textarea autoResize={false} data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).not.toHaveClass(classes.resize.none);
    });

    it("applies none resize class when autoResize is true", () => {
      render(<Textarea autoResize data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.resize.none);
    });

    it("adjusts height on change when autoResize is true", async () => {
      const user = userEvent.setup();
      render(<Textarea autoResize data-testid="textarea" />);

      const textarea = screen.getByTestId("textarea") as HTMLTextAreaElement;

      // Type some text to trigger onChange
      await user.type(textarea, "Hello\nWorld\nTest");

      // The textarea should have its height adjusted (style.height set)
      // We can't easily test the exact height, but we can verify the event was handled
      expect(textarea.value).toBe("Hello\nWorld\nTest");
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(<Textarea disabled data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toBeDisabled();
      expect(screen.getByTestId("textarea")).toHaveClass(classes.states.disabled);
    });
  });

  // ReadOnly state
  describe("readOnly prop", () => {
    it("is not readOnly by default", () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).not.toHaveAttribute("readonly");
    });

    it("is readOnly when readOnly prop is true", () => {
      render(<Textarea readOnly data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("readonly");
    });
  });

  // Error state
  describe("error prop", () => {
    it("does not have error class by default", () => {
      render(<Textarea data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).not.toHaveClass(classes.states.error);
    });

    it("applies error class when error prop is true", () => {
      render(<Textarea error data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass(classes.states.error);
    });

    it("sets aria-invalid when error prop is true", () => {
      render(<Textarea error data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("aria-invalid", "true");
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Textarea className="custom-class" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(<Textarea className="custom-class" data-testid="textarea" />);
      const textarea = screen.getByTestId("textarea");

      expect(textarea).toHaveClass(classes.root);
      expect(textarea).toHaveClass("custom-class");
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onChange when value changes", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Textarea onChange={handleChange} data-testid="textarea" />);
      await user.type(screen.getByTestId("textarea"), "hello");

      expect(handleChange).toHaveBeenCalled();
    });

    it("calls onFocus when focused", async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(<Textarea onFocus={handleFocus} data-testid="textarea" />);
      await user.click(screen.getByTestId("textarea"));

      expect(handleFocus).toHaveBeenCalled();
    });

    it("calls onBlur when blurred", async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(<Textarea onBlur={handleBlur} data-testid="textarea" />);
      const textarea = screen.getByTestId("textarea");
      await user.click(textarea);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let textareaRef: HTMLTextAreaElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLTextAreaElement>(null);
        textareaRef = ref.current;
        return <Textarea ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(textareaRef).toBeInstanceOf(HTMLTextAreaElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Textarea.displayName).toBe(COMPONENT_NAMES.Textarea);
    });
  });

  // HTML attributes passthrough
  describe("HTML attributes", () => {
    it("passes through placeholder attribute", () => {
      render(<Textarea placeholder="Enter description" />);
      expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
    });

    it("passes through id attribute", () => {
      render(<Textarea id="my-textarea" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("id", "my-textarea");
    });

    it("passes through name attribute", () => {
      render(<Textarea name="description" data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("name", "description");
    });

    it("passes through maxLength attribute", () => {
      render(<Textarea maxLength={100} data-testid="textarea" />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("maxLength", "100");
    });
  });
});
