import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Radio } from "./index";

const classes = CSS_CLASSES.radio;

describe("Radio", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Radio data-testid="radio" />);
      const radio = screen.getByTestId("radio");

      expect(radio).toBeInTheDocument();
      expect(radio).toHaveAttribute("type", "radio");
    });

    it("renders radio element", () => {
      render(<Radio />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
    });

    it("renders label when provided", () => {
      render(<Radio label="Option A" />);
      expect(screen.getByText("Option A")).toBeInTheDocument();
    });
  });

  // Size prop
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(<Radio size="sm" label="Small" />);
      expect(screen.getByText("Small").closest("label")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(<Radio size="md" label="Medium" />);
      expect(screen.getByText("Medium").closest("label")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(<Radio size="lg" label="Large" />);
      expect(screen.getByText("Large").closest("label")).toHaveClass(classes.sizes.lg);
    });
  });

  // Checked state
  describe("checked prop", () => {
    it("is not checked by default", () => {
      render(<Radio />);
      expect(screen.getByRole("radio")).not.toBeChecked();
    });

    it("is checked when checked prop is true", () => {
      render(<Radio checked onChange={() => {}} />);
      expect(screen.getByRole("radio")).toBeChecked();
    });

    it("applies checked class when checked", () => {
      render(<Radio checked label="Checked" onChange={() => {}} />);
      expect(screen.getByText("Checked").closest("label")).toHaveClass(classes.states.checked);
    });
  });

  // Name and value props
  describe("name and value props", () => {
    it("passes through name attribute", () => {
      render(<Radio name="color" />);
      expect(screen.getByRole("radio")).toHaveAttribute("name", "color");
    });

    it("passes through value attribute", () => {
      render(<Radio value="red" />);
      expect(screen.getByRole("radio")).toHaveAttribute("value", "red");
    });

    it("groups radios by name", () => {
      render(
        <>
          <Radio name="color" value="red" label="Red" />
          <Radio name="color" value="blue" label="Blue" />
        </>,
      );

      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(2);
      expect(radios[0]).toHaveAttribute("name", "color");
      expect(radios[1]).toHaveAttribute("name", "color");
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(<Radio />);
      expect(screen.getByRole("radio")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(<Radio disabled label="Disabled" />);
      expect(screen.getByRole("radio")).toBeDisabled();
      expect(screen.getByText("Disabled").closest("label")).toHaveClass(classes.states.disabled);
    });
  });

  // Custom icons (custom mode)
  describe("custom icons", () => {
    it("renders in native mode by default", () => {
      render(<Radio label="Native" />);
      expect(screen.getByText("Native").closest("label")).not.toHaveClass(classes.custom);
    });

    it("renders in custom mode when icons provided", () => {
      render(
        <Radio
          label="Custom"
          checkedIcon={<span data-testid="checked-icon">●</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );
      expect(screen.getByText("Custom").closest("label")).toHaveClass(classes.custom);
    });

    it("shows unchecked icon when not checked", () => {
      render(
        <Radio
          checkedIcon={<span data-testid="checked-icon">●</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );
      expect(screen.getByTestId("unchecked-icon")).toBeInTheDocument();
    });

    it("shows checked icon when checked", () => {
      render(
        <Radio
          checked
          onChange={() => {}}
          checkedIcon={<span data-testid="checked-icon">●</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );
      expect(screen.getByTestId("checked-icon")).toBeInTheDocument();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Radio className="custom-class" label="Custom" />);
      expect(screen.getByText("Custom").closest("label")).toHaveClass("custom-class");
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onChange when clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Radio onChange={handleChange} />);
      await user.click(screen.getByRole("radio"));

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("does not call onChange when disabled", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Radio disabled onChange={handleChange} />);
      await user.click(screen.getByRole("radio"));

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let radioRef: HTMLInputElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLInputElement>(null);
        radioRef = ref.current;
        return <Radio ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(radioRef).toBeInstanceOf(HTMLInputElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Radio.displayName).toBe(COMPONENT_NAMES.Radio);
    });
  });

  // HTML attributes passthrough
  describe("HTML attributes", () => {
    it("passes through id attribute", () => {
      render(<Radio id="my-radio" />);
      expect(screen.getByRole("radio")).toHaveAttribute("id", "my-radio");
    });
  });
});
