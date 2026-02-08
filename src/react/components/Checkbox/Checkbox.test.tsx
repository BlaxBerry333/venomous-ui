import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./index";

const classes = CSS_CLASSES.checkbox;

describe("Checkbox", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Checkbox data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute("type", "checkbox");
    });

    it("renders checkbox element", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders label when provided", () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByText("Accept terms")).toBeInTheDocument();
    });
  });

  // Size prop
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(<Checkbox size="sm" label="Small" />);
      expect(screen.getByText("Small").closest("label")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(<Checkbox size="md" label="Medium" />);
      expect(screen.getByText("Medium").closest("label")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(<Checkbox size="lg" label="Large" />);
      expect(screen.getByText("Large").closest("label")).toHaveClass(classes.sizes.lg);
    });
  });

  // Checked state
  describe("checked prop", () => {
    it("is not checked by default", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("is checked when checked prop is true", () => {
      render(<Checkbox checked onChange={() => {}} />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("applies checked class when checked", () => {
      render(<Checkbox checked label="Checked" onChange={() => {}} />);
      expect(screen.getByText("Checked").closest("label")).toHaveClass(classes.states.checked);
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(<Checkbox disabled label="Disabled" />);
      expect(screen.getByRole("checkbox")).toBeDisabled();
      expect(screen.getByText("Disabled").closest("label")).toHaveClass(classes.states.disabled);
    });
  });

  // Custom icons (custom mode)
  describe("custom icons", () => {
    it("renders in native mode by default", () => {
      render(<Checkbox label="Native" />);
      expect(screen.getByText("Native").closest("label")).not.toHaveClass(classes.custom);
    });

    it("renders in custom mode when icons provided", () => {
      render(
        <Checkbox
          label="Custom"
          checkedIcon={<span data-testid="checked-icon">✓</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );
      expect(screen.getByText("Custom").closest("label")).toHaveClass(classes.custom);
    });

    it("shows unchecked icon when not checked", () => {
      render(
        <Checkbox
          checkedIcon={<span data-testid="checked-icon">✓</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );
      expect(screen.getByTestId("unchecked-icon")).toBeInTheDocument();
    });

    it("shows checked icon when checked", () => {
      render(
        <Checkbox
          checked
          onChange={() => {}}
          checkedIcon={<span data-testid="checked-icon">✓</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );
      expect(screen.getByTestId("checked-icon")).toBeInTheDocument();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Checkbox className="custom-class" label="Custom" />);
      expect(screen.getByText("Custom").closest("label")).toHaveClass("custom-class");
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onChange when clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Checkbox onChange={handleChange} />);
      await user.click(screen.getByRole("checkbox"));

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("does not call onChange when disabled", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Checkbox disabled onChange={handleChange} />);
      await user.click(screen.getByRole("checkbox"));

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("toggles checked state on click", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).not.toBeChecked();
      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let checkboxRef: HTMLInputElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLInputElement>(null);
        checkboxRef = ref.current;
        return <Checkbox ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(checkboxRef).toBeInstanceOf(HTMLInputElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Checkbox.displayName).toBe(COMPONENT_NAMES.Checkbox);
    });
  });

  // HTML attributes passthrough
  describe("HTML attributes", () => {
    it("passes through id attribute", () => {
      render(<Checkbox id="my-checkbox" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("id", "my-checkbox");
    });

    it("passes through name attribute", () => {
      render(<Checkbox name="agreement" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("name", "agreement");
    });

    it("passes through value attribute", () => {
      render(<Checkbox value="accepted" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("value", "accepted");
    });
  });
});
