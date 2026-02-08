import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { CheckboxGroup } from "./index";

const classes = CSS_CLASSES.checkboxGroup;

const mockOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

const optionsWithDisabled = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "cherry", label: "Cherry" },
];

describe("CheckboxGroup", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<CheckboxGroup options={mockOptions} />);
      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes).toHaveLength(3);
    });

    it("renders all options with labels", () => {
      render(<CheckboxGroup options={mockOptions} />);

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    it("renders with group role", () => {
      render(<CheckboxGroup options={mockOptions} />);
      expect(screen.getByRole("group")).toBeInTheDocument();
    });
  });

  // Orientation prop
  describe("orientation prop", () => {
    it("applies vertical orientation class by default", () => {
      render(<CheckboxGroup options={mockOptions} />);
      expect(screen.getByRole("group")).toHaveClass(classes.orientations.vertical);
    });

    it("applies horizontal orientation class", () => {
      render(<CheckboxGroup options={mockOptions} orientation="horizontal" />);
      expect(screen.getByRole("group")).toHaveClass(classes.orientations.horizontal);
    });
  });

  // Value and selection
  describe("value prop", () => {
    it("no checkbox is checked when value is empty", () => {
      render(<CheckboxGroup options={mockOptions} value={[]} />);
      const checkboxes = screen.getAllByRole("checkbox");

      checkboxes.forEach((checkbox) => {
        expect(checkbox).not.toBeChecked();
      });
    });

    it("checks checkboxes matching the value array", () => {
      render(<CheckboxGroup options={mockOptions} value={["apple", "cherry"]} />);
      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).not.toBeChecked();
      expect(checkboxes[2]).toBeChecked();
    });

    it("checks single value", () => {
      render(<CheckboxGroup options={mockOptions} value={["banana"]} />);
      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes[0]).not.toBeChecked();
      expect(checkboxes[1]).toBeChecked();
      expect(checkboxes[2]).not.toBeChecked();
    });
  });

  // Size prop
  describe("size prop", () => {
    it("passes size to all checkbox items", () => {
      render(<CheckboxGroup options={mockOptions} size="lg" />);
      const checkboxes = screen.getAllByRole("checkbox");

      checkboxes.forEach((checkbox) => {
        expect(checkbox.closest("label")).toHaveClass(CSS_CLASSES.checkbox.sizes.lg);
      });
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("disables all checkboxes when disabled prop is true", () => {
      render(<CheckboxGroup options={mockOptions} disabled />);
      const checkboxes = screen.getAllByRole("checkbox");

      checkboxes.forEach((checkbox) => {
        expect(checkbox).toBeDisabled();
      });
    });

    it("disables specific option when option.disabled is true", () => {
      render(<CheckboxGroup options={optionsWithDisabled} />);
      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes[0]).not.toBeDisabled();
      expect(checkboxes[1]).toBeDisabled();
      expect(checkboxes[2]).not.toBeDisabled();
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onChange with added value when unchecked option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<CheckboxGroup options={mockOptions} value={["apple"]} onChange={handleChange} />);

      await user.click(screen.getByText("Banana"));

      expect(handleChange).toHaveBeenCalledWith(["apple", "banana"], mockOptions[1], true);
    });

    it("calls onChange with removed value when checked option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<CheckboxGroup options={mockOptions} value={["apple", "banana"]} onChange={handleChange} />);

      await user.click(screen.getByText("Banana"));

      expect(handleChange).toHaveBeenCalledWith(["apple"], mockOptions[1], false);
    });

    it("calls onChange with first value when empty and option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<CheckboxGroup options={mockOptions} value={[]} onChange={handleChange} />);

      await user.click(screen.getByText("Cherry"));

      expect(handleChange).toHaveBeenCalledWith(["cherry"], mockOptions[2], true);
    });

    it("does not call onChange when disabled option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<CheckboxGroup options={optionsWithDisabled} onChange={handleChange} />);

      await user.click(screen.getByText("Banana"));

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when group is disabled", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<CheckboxGroup options={mockOptions} disabled onChange={handleChange} />);

      await user.click(screen.getByText("Banana"));

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Custom icons
  describe("custom icons", () => {
    it("passes custom icons to all checkboxes", () => {
      render(
        <CheckboxGroup
          options={mockOptions}
          checkedIcon={<span data-testid="checked-icon">✓</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(3);
    });

    it("shows checked icon for selected checkboxes", () => {
      render(
        <CheckboxGroup
          options={mockOptions}
          value={["apple", "cherry"]}
          checkedIcon={<span data-testid="checked-icon">✓</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );

      expect(screen.getAllByTestId("checked-icon")).toHaveLength(2);
      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(1);
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<CheckboxGroup options={mockOptions} className="custom-class" />);
      expect(screen.getByRole("group")).toHaveClass("custom-class");
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(CheckboxGroup.displayName).toBe(COMPONENT_NAMES.CheckboxGroup);
    });
  });
});
