import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import CheckboxGroup from "./CheckboxGroup.vue";

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
  describe("rendering", () => {
    it("renders with default props", () => {
      render(CheckboxGroup, { props: { options: mockOptions } });
      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes).toHaveLength(3);
    });

    it("renders all options with labels", () => {
      render(CheckboxGroup, { props: { options: mockOptions } });

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    it("renders with group role", () => {
      render(CheckboxGroup, { props: { options: mockOptions } });
      expect(screen.getByRole("group")).toBeInTheDocument();
    });
  });

  describe("orientation prop", () => {
    it("applies vertical orientation class by default", () => {
      render(CheckboxGroup, { props: { options: mockOptions } });
      expect(screen.getByRole("group")).toHaveClass(classes.orientations.vertical);
    });

    it("applies horizontal orientation class", () => {
      render(CheckboxGroup, { props: { options: mockOptions, orientation: "horizontal" } });
      expect(screen.getByRole("group")).toHaveClass(classes.orientations.horizontal);
    });
  });

  describe("value prop", () => {
    it("no checkbox is checked when modelValue is empty", () => {
      render(CheckboxGroup, { props: { options: mockOptions, modelValue: [] } });
      const checkboxes = screen.getAllByRole("checkbox");

      checkboxes.forEach((checkbox) => {
        expect(checkbox).not.toBeChecked();
      });
    });

    it("checks checkboxes after clicking", async () => {
      const user = userEvent.setup();
      render(CheckboxGroup, {
        props: { options: mockOptions, modelValue: [] },
      });

      await user.click(screen.getByText("Apple"));
      await user.click(screen.getByText("Cherry"));

      const checkboxes = screen.getAllByRole("checkbox");
      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).not.toBeChecked();
      expect(checkboxes[2]).toBeChecked();
    });

    it("checks single checkbox after clicking", async () => {
      const user = userEvent.setup();
      render(CheckboxGroup, {
        props: { options: mockOptions, modelValue: [] },
      });

      await user.click(screen.getByText("Banana"));

      const checkboxes = screen.getAllByRole("checkbox");
      expect(checkboxes[0]).not.toBeChecked();
      expect(checkboxes[1]).toBeChecked();
      expect(checkboxes[2]).not.toBeChecked();
    });
  });

  describe("size prop", () => {
    it("passes size to all checkbox items", () => {
      render(CheckboxGroup, { props: { options: mockOptions, size: "lg" } });
      const checkboxes = screen.getAllByRole("checkbox");

      checkboxes.forEach((checkbox) => {
        expect(checkbox.closest("label")).toHaveClass(CSS_CLASSES.checkbox.sizes.lg);
      });
    });
  });

  describe("disabled prop", () => {
    it("disables all checkboxes when disabled prop is true", () => {
      render(CheckboxGroup, { props: { options: mockOptions, disabled: true } });
      const checkboxes = screen.getAllByRole("checkbox");

      checkboxes.forEach((checkbox) => {
        expect(checkbox).toBeDisabled();
      });
    });

    it("disables specific option when option.disabled is true", () => {
      render(CheckboxGroup, { props: { options: optionsWithDisabled } });
      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes[0]).not.toBeDisabled();
      expect(checkboxes[1]).toBeDisabled();
      expect(checkboxes[2]).not.toBeDisabled();
    });
  });

  describe("event handling", () => {
    it("emits change with added value when unchecked option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(CheckboxGroup, {
        props: { options: mockOptions, modelValue: ["apple"] },
      });

      await user.click(screen.getByText("Banana"));

      expect(emitted()).toHaveProperty("change");
      expect(emitted().change[0]).toEqual([["apple", "banana"], mockOptions[1], true]);
    });

    it("emits change with unchecked=false when checked option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(CheckboxGroup, {
        props: { options: mockOptions, modelValue: [] },
      });

      // First click to check
      await user.click(screen.getByText("Banana"));
      // Second click to uncheck
      await user.click(screen.getByText("Banana"));

      expect(emitted().change).toHaveLength(2);
      // Second emission should have checked=false
      expect((emitted().change as unknown[][])[1][2]).toBe(false);
    });

    it("emits update:modelValue when option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(CheckboxGroup, {
        props: { options: mockOptions, modelValue: [] },
      });

      await user.click(screen.getByText("Cherry"));

      expect(emitted()).toHaveProperty("update:modelValue");
      expect(emitted()["update:modelValue"][0]).toEqual([["cherry"]]);
    });

    it("does not emit when disabled option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(CheckboxGroup, { props: { options: optionsWithDisabled } });

      await user.click(screen.getByText("Banana"));

      expect(emitted()).not.toHaveProperty("change");
    });

    it("does not emit when group is disabled", async () => {
      const user = userEvent.setup();
      const { emitted } = render(CheckboxGroup, {
        props: { options: mockOptions, disabled: true },
      });

      await user.click(screen.getByText("Banana"));

      expect(emitted()).not.toHaveProperty("change");
    });
  });

  describe("custom icons", () => {
    it("passes custom icons to all checkboxes", () => {
      render(CheckboxGroup, {
        props: { options: mockOptions },
        slots: {
          checkedIcon: '<span data-testid="checked-icon">✓</span>',
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(3);
    });

    it("renders all unchecked icons when no value selected", () => {
      render(CheckboxGroup, {
        props: { options: mockOptions, modelValue: [] },
        slots: {
          checkedIcon: '<span data-testid="checked-icon">✓</span>',
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(3);
      expect(screen.queryAllByTestId("checked-icon")).toHaveLength(0);
    });

    it("forwards only checkedIcon slot when only checkedIcon is provided", () => {
      render(CheckboxGroup, {
        props: { options: mockOptions },
        slots: {
          checkedIcon: '<span data-testid="checked-icon">✓</span>',
        },
      });

      // Custom mode should still be applied (checkedIcon slot is present)
      const checkboxes = screen.getAllByRole("checkbox");
      checkboxes.forEach((checkbox) => {
        expect(checkbox.closest("label")).toHaveClass(CSS_CLASSES.checkbox.custom);
      });
    });

    it("forwards only uncheckedIcon slot when only uncheckedIcon is provided", () => {
      render(CheckboxGroup, {
        props: { options: mockOptions },
        slots: {
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(3);
      const checkboxes = screen.getAllByRole("checkbox");
      checkboxes.forEach((checkbox) => {
        expect(checkbox.closest("label")).toHaveClass(CSS_CLASSES.checkbox.custom);
      });
    });
  });

  describe("modelValue edge cases", () => {
    it("handles click when modelValue is not provided (uses default empty array)", async () => {
      const user = userEvent.setup();
      const { emitted } = render(CheckboxGroup, {
        props: { options: mockOptions },
      });

      await user.click(screen.getByText("Apple"));

      expect(emitted()).toHaveProperty("update:modelValue");
      expect(emitted()["update:modelValue"][0]).toEqual([["apple"]]);
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(CheckboxGroup, { props: { options: mockOptions, className: "custom-class" } });
      expect(screen.getByRole("group")).toHaveClass("custom-class");
    });
  });
});
