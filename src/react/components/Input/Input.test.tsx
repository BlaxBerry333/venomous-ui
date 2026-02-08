import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./index";

const classes = CSS_CLASSES.input;

describe("Input", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");

      expect(input).toBeInTheDocument();
      expect(input).toHaveClass(classes.root);
      expect(input.parentElement).toHaveClass(classes.wrapper);
      expect(input.parentElement).toHaveClass(classes.sizes.md);
    });

    it("renders input element", () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });
  });

  // Type prop
  describe("type prop", () => {
    it("renders text type by default", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("type", "text");
    });

    it("renders password type", () => {
      render(<Input type="password" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("type", "password");
    });

    it("renders email type", () => {
      render(<Input type="email" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("type", "email");
    });

    it("renders number type", () => {
      render(<Input type="number" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("type", "number");
    });
  });

  // Size prop
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(<Input size="sm" data-testid="input" />);
      expect(screen.getByTestId("input").parentElement).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(<Input size="md" data-testid="input" />);
      expect(screen.getByTestId("input").parentElement).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(<Input size="lg" data-testid="input" />);
      expect(screen.getByTestId("input").parentElement).toHaveClass(classes.sizes.lg);
    });
  });

  // Prefix and Suffix
  describe("prefix and suffix", () => {
    it("renders prefix content", () => {
      render(<Input prefix={<span data-testid="prefix">$</span>} />);
      expect(screen.getByTestId("prefix")).toBeInTheDocument();
      expect(screen.getByTestId("prefix").parentElement).toHaveClass(classes.prefix);
    });

    it("renders suffix content", () => {
      render(<Input suffix={<span data-testid="suffix">.00</span>} />);
      expect(screen.getByTestId("suffix")).toBeInTheDocument();
      expect(screen.getByTestId("suffix").parentElement).toHaveClass(classes.suffix);
    });

    it("renders both prefix and suffix", () => {
      render(<Input prefix={<span data-testid="prefix">$</span>} suffix={<span data-testid="suffix">.00</span>} />);
      expect(screen.getByTestId("prefix")).toBeInTheDocument();
      expect(screen.getByTestId("suffix")).toBeInTheDocument();
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(<Input disabled data-testid="input" />);
      expect(screen.getByTestId("input")).toBeDisabled();
      expect(screen.getByTestId("input").parentElement).toHaveClass(classes.states.disabled);
    });
  });

  // ReadOnly state
  describe("readOnly prop", () => {
    it("is not readOnly by default", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input")).not.toHaveAttribute("readonly");
    });

    it("is readOnly when readOnly prop is true", () => {
      render(<Input readOnly data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("readonly");
    });
  });

  // Error state
  describe("error prop", () => {
    it("does not have error class by default", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input").parentElement).not.toHaveClass(classes.states.error);
    });

    it("applies error class when error prop is true", () => {
      render(<Input error data-testid="input" />);
      expect(screen.getByTestId("input").parentElement).toHaveClass(classes.states.error);
    });

    it("sets aria-invalid when error prop is true", () => {
      render(<Input error data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("aria-invalid", "true");
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className to wrapper", () => {
      render(<Input className="custom-class" data-testid="input" />);
      expect(screen.getByTestId("input").parentElement).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(<Input className="custom-class" data-testid="input" />);
      const wrapper = screen.getByTestId("input").parentElement;

      expect(wrapper).toHaveClass(classes.wrapper);
      expect(wrapper).toHaveClass("custom-class");
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onChange when value changes", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Input onChange={handleChange} data-testid="input" />);
      await user.type(screen.getByTestId("input"), "hello");

      expect(handleChange).toHaveBeenCalled();
    });

    it("calls onFocus when focused", async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(<Input onFocus={handleFocus} data-testid="input" />);
      await user.click(screen.getByTestId("input"));

      expect(handleFocus).toHaveBeenCalled();
    });

    it("calls onBlur when blurred", async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(<Input onBlur={handleBlur} data-testid="input" />);
      const input = screen.getByTestId("input");
      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let inputRef: HTMLInputElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLInputElement>(null);
        inputRef = ref.current;
        return <Input ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(inputRef).toBeInstanceOf(HTMLInputElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Input.displayName).toBe(COMPONENT_NAMES.Input);
    });
  });

  // HTML attributes passthrough
  describe("HTML attributes", () => {
    it("passes through placeholder attribute", () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    it("passes through id attribute", () => {
      render(<Input id="my-input" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("id", "my-input");
    });

    it("passes through name attribute", () => {
      render(<Input name="username" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("name", "username");
    });

    it("passes through maxLength attribute", () => {
      render(<Input maxLength={10} data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("maxLength", "10");
    });

    it("passes through autoComplete attribute", () => {
      render(<Input autoComplete="off" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute("autoComplete", "off");
    });
  });
});
