import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./index";

const classes = CSS_CLASSES.switch;

describe("Switch", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Switch />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument();
      expect(checkbox.closest("label")).toHaveClass(classes.root);
      expect(checkbox.closest("label")).toHaveClass(classes.sizes.md);
    });

    it("renders switch with track and thumb", () => {
      render(<Switch />);
      const label = screen.getByRole("checkbox").closest("label");

      expect(label?.querySelector(`.${classes.track}`)).toBeInTheDocument();
      expect(label?.querySelector(`.${classes.thumb}`)).toBeInTheDocument();
    });
  });

  // Size prop
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(<Switch size="sm" />);
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(<Switch size="md" />);
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(<Switch size="lg" />);
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.sizes.lg);
    });
  });

  // Checked state
  describe("checked prop", () => {
    it("is not checked by default", () => {
      render(<Switch />);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("is checked when checked prop is true", () => {
      render(<Switch checked onChange={() => {}} />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("applies checked class when checked", () => {
      render(<Switch checked onChange={() => {}} />);
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.states.checked);
    });

    it("does not apply checked class when not checked", () => {
      render(<Switch />);
      expect(screen.getByRole("checkbox").closest("label")).not.toHaveClass(classes.states.checked);
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(<Switch />);
      expect(screen.getByRole("checkbox")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(<Switch disabled />);
      expect(screen.getByRole("checkbox")).toBeDisabled();
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.states.disabled);
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Switch className="custom-class" />);
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(<Switch className="custom-class" />);
      const label = screen.getByRole("checkbox").closest("label");

      expect(label).toHaveClass(classes.root);
      expect(label).toHaveClass("custom-class");
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onChange when clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Switch onChange={handleChange} />);
      await user.click(screen.getByRole("checkbox"));

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("does not call onChange when disabled", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Switch disabled onChange={handleChange} />);
      await user.click(screen.getByRole("checkbox"));

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("toggles checked state on click", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Switch onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).not.toBeChecked();
      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let switchRef: HTMLInputElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLInputElement>(null);
        switchRef = ref.current;
        return <Switch ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(switchRef).toBeInstanceOf(HTMLInputElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Switch.displayName).toBe(COMPONENT_NAMES.Switch);
    });
  });

  // HTML attributes passthrough
  describe("HTML attributes", () => {
    it("passes through id attribute", () => {
      render(<Switch id="my-switch" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("id", "my-switch");
    });

    it("passes through name attribute", () => {
      render(<Switch name="notifications" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("name", "notifications");
    });
  });

  // Label prop
  describe("label prop", () => {
    it("renders label text when provided", () => {
      render(<Switch label="Enable notifications" />);
      expect(screen.getByText("Enable notifications")).toBeInTheDocument();
      expect(screen.getByText("Enable notifications")).toHaveClass(classes.label);
    });

    it("does not render label element when not provided", () => {
      render(<Switch />);
      expect(document.querySelector(`.${classes.label}`)).toBeNull();
    });
  });

  // Keyboard accessibility
  describe("keyboard accessibility", () => {
    it("can be toggled with space key", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Switch onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      checkbox.focus();
      await user.keyboard(" ");

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
