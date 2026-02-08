import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./index";

const classes = CSS_CLASSES.button;

describe("Button", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button", { name: "Click me" });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(classes.root);
      expect(button).toHaveClass(classes.sizes.md);
      expect(button).toHaveClass(classes.variants.solid);
    });

    it("renders children correctly", () => {
      render(
        <Button>
          <span data-testid="child">Child content</span>
        </Button>,
      );

      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Child content")).toBeInTheDocument();
    });
  });

  // Size props
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(<Button size="sm">Small</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(<Button size="md">Medium</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(<Button size="lg">Large</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.sizes.lg);
    });
  });

  // Variant props
  describe("variant prop", () => {
    it("applies solid variant class (default)", () => {
      render(<Button variant="solid">Solid</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.variants.solid);
    });

    it("applies outline variant class", () => {
      render(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.variants.outline);
    });

    it("applies ghost variant class", () => {
      render(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.variants.ghost);
    });

    it("applies link variant class", () => {
      render(<Button variant="link">Link</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.variants.link);
    });
  });

  // Color scheme props
  describe("colorScheme prop", () => {
    it("does not apply color class for theme (default)", () => {
      render(<Button colorScheme="theme">Theme</Button>);
      const button = screen.getByRole("button");

      expect(button).not.toHaveClass(classes.colors.theme);
      expect(button).not.toHaveClass(classes.colors.success);
    });

    it("applies success color class", () => {
      render(<Button colorScheme="success">Success</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.colors.success);
    });

    it("applies warning color class", () => {
      render(<Button colorScheme="warning">Warning</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.colors.warning);
    });

    it("applies error color class", () => {
      render(<Button colorScheme="error">Error</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.colors.error);
    });

    it("applies info color class", () => {
      render(<Button colorScheme="info">Info</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.colors.info);
    });
  });

  // Full width prop
  describe("fullWidth prop", () => {
    it("does not apply fullWidth class by default", () => {
      render(<Button>Normal</Button>);
      expect(screen.getByRole("button")).not.toHaveClass(classes.states.fullWidth);
    });

    it("applies fullWidth class when true", () => {
      render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole("button")).toHaveClass(classes.states.fullWidth);
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(<Button>Enabled</Button>);
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Button className="custom-class">Custom</Button>);
      expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole("button");

      expect(button).toHaveClass(classes.root);
      expect(button).toHaveClass("custom-class");
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onClick when clicked", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole("button"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>,
      );
      await user.click(screen.getByRole("button"));

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let buttonRef: HTMLButtonElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLButtonElement>(null);
        buttonRef = ref.current;
        return <Button ref={ref}>Button</Button>;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(buttonRef).toBeInstanceOf(HTMLButtonElement);
    });

    it("forwards ref with callback", () => {
      const refCallback = vi.fn();
      render(<Button ref={refCallback}>Button</Button>);

      expect(refCallback).toHaveBeenCalled();
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Button.displayName).toBe(COMPONENT_NAMES.Button);
    });
  });

  // HTML attributes passthrough
  describe("HTML attributes", () => {
    it("passes through type attribute", () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    it("passes through aria-label attribute", () => {
      render(<Button aria-label="Close menu">X</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Close menu");
    });

    it("passes through data-testid attribute", () => {
      render(<Button data-testid="my-button">Button</Button>);
      expect(screen.getByTestId("my-button")).toBeInTheDocument();
    });
  });
});
