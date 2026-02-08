import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { RadioGroup } from "./index";

const classes = CSS_CLASSES.radioGroup;

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

describe("RadioGroup", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<RadioGroup options={mockOptions} />);
      const radios = screen.getAllByRole("radio");

      expect(radios).toHaveLength(3);
    });

    it("renders all options with labels", () => {
      render(<RadioGroup options={mockOptions} />);

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    it("renders with radiogroup role", () => {
      render(<RadioGroup options={mockOptions} />);
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });
  });

  // Orientation prop
  describe("orientation prop", () => {
    it("applies vertical orientation class by default", () => {
      render(<RadioGroup options={mockOptions} />);
      expect(screen.getByRole("radiogroup")).toHaveClass(classes.orientations.vertical);
    });

    it("applies horizontal orientation class", () => {
      render(<RadioGroup options={mockOptions} orientation="horizontal" />);
      expect(screen.getByRole("radiogroup")).toHaveClass(classes.orientations.horizontal);
    });
  });

  // Value and selection
  describe("value prop", () => {
    it("no radio is checked when no value is set", () => {
      render(<RadioGroup options={mockOptions} />);
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio).not.toBeChecked();
      });
    });

    it("checks the radio matching the value", () => {
      render(<RadioGroup options={mockOptions} value="banana" />);
      const radios = screen.getAllByRole("radio");

      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).toBeChecked();
      expect(radios[2]).not.toBeChecked();
    });
  });

  // Name prop
  describe("name prop", () => {
    it("generates unique name if not provided", () => {
      render(<RadioGroup options={mockOptions} />);
      const radios = screen.getAllByRole("radio");
      const name = radios[0].getAttribute("name");

      expect(name).toBeTruthy();
      radios.forEach((radio) => {
        expect(radio).toHaveAttribute("name", name);
      });
    });

    it("uses provided name", () => {
      render(<RadioGroup options={mockOptions} name="fruit" />);
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio).toHaveAttribute("name", "fruit");
      });
    });
  });

  // Size prop
  describe("size prop", () => {
    it("passes size to all radio items", () => {
      render(<RadioGroup options={mockOptions} size="lg" />);
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio.closest("label")).toHaveClass(CSS_CLASSES.radio.sizes.lg);
      });
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("disables all radios when disabled prop is true", () => {
      render(<RadioGroup options={mockOptions} disabled />);
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio).toBeDisabled();
      });
    });

    it("disables specific option when option.disabled is true", () => {
      render(<RadioGroup options={optionsWithDisabled} />);
      const radios = screen.getAllByRole("radio");

      expect(radios[0]).not.toBeDisabled();
      expect(radios[1]).toBeDisabled();
      expect(radios[2]).not.toBeDisabled();
    });
  });

  // Event handling
  describe("event handling", () => {
    it("calls onChange when option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<RadioGroup options={mockOptions} onChange={handleChange} />);

      await user.click(screen.getByText("Banana"));

      expect(handleChange).toHaveBeenCalledWith("banana", mockOptions[1]);
    });

    it("calls onChange with correct option when different option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<RadioGroup options={mockOptions} value="apple" onChange={handleChange} />);

      await user.click(screen.getByText("Cherry"));

      expect(handleChange).toHaveBeenCalledWith("cherry", mockOptions[2]);
    });

    it("does not call onChange when disabled option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<RadioGroup options={optionsWithDisabled} onChange={handleChange} />);

      await user.click(screen.getByText("Banana"));

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when group is disabled", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<RadioGroup options={mockOptions} disabled onChange={handleChange} />);

      await user.click(screen.getByText("Banana"));

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Custom icons
  describe("custom icons", () => {
    it("passes custom icons to all radios", () => {
      render(
        <RadioGroup
          options={mockOptions}
          checkedIcon={<span data-testid="checked-icon">●</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(3);
    });

    it("shows checked icon for selected radio", () => {
      render(
        <RadioGroup
          options={mockOptions}
          value="banana"
          checkedIcon={<span data-testid="checked-icon">●</span>}
          uncheckedIcon={<span data-testid="unchecked-icon">○</span>}
        />,
      );

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(2);
      expect(screen.getByTestId("checked-icon")).toBeInTheDocument();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<RadioGroup options={mockOptions} className="custom-class" />);
      expect(screen.getByRole("radiogroup")).toHaveClass("custom-class");
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(RadioGroup.displayName).toBe(COMPONENT_NAMES.RadioGroup);
    });
  });
});
