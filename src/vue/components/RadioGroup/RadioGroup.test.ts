import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Radio from "../Radio/Radio.vue";
import RadioGroup from "./RadioGroup.vue";

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
  describe("rendering", () => {
    it("renders with default props", () => {
      render(RadioGroup, { props: { options: mockOptions } });
      const radios = screen.getAllByRole("radio");

      expect(radios).toHaveLength(3);
    });

    it("renders all options with labels", () => {
      render(RadioGroup, { props: { options: mockOptions } });

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    it("renders with radiogroup role", () => {
      render(RadioGroup, { props: { options: mockOptions } });
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });
  });

  describe("orientation prop", () => {
    it("applies vertical orientation class by default", () => {
      render(RadioGroup, { props: { options: mockOptions } });
      expect(screen.getByRole("radiogroup")).toHaveClass(classes.orientations.vertical);
    });

    it("applies horizontal orientation class", () => {
      render(RadioGroup, { props: { options: mockOptions, orientation: "horizontal" } });
      expect(screen.getByRole("radiogroup")).toHaveClass(classes.orientations.horizontal);
    });
  });

  describe("value prop", () => {
    it("no radio is checked when no modelValue is set", () => {
      render(RadioGroup, { props: { options: mockOptions } });
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio).not.toBeChecked();
      });
    });

    it("checks the radio matching the modelValue", () => {
      render(RadioGroup, { props: { options: mockOptions, modelValue: "banana" } });
      const radios = screen.getAllByRole("radio");

      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).toBeChecked();
      expect(radios[2]).not.toBeChecked();
    });
  });

  describe("name prop", () => {
    it("generates unique name if not provided", () => {
      render(RadioGroup, { props: { options: mockOptions } });
      const radios = screen.getAllByRole("radio");
      const name = radios[0].getAttribute("name");

      expect(name).toBeTruthy();
      radios.forEach((radio) => {
        expect(radio).toHaveAttribute("name", name);
      });
    });

    it("uses provided name", () => {
      render(RadioGroup, { props: { options: mockOptions, name: "fruit" } });
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio).toHaveAttribute("name", "fruit");
      });
    });
  });

  describe("size prop", () => {
    it("passes size to all radio items", () => {
      render(RadioGroup, { props: { options: mockOptions, size: "lg" } });
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio.closest("label")).toHaveClass(CSS_CLASSES.radio.sizes.lg);
      });
    });
  });

  describe("disabled prop", () => {
    it("disables all radios when disabled prop is true", () => {
      render(RadioGroup, { props: { options: mockOptions, disabled: true } });
      const radios = screen.getAllByRole("radio");

      radios.forEach((radio) => {
        expect(radio).toBeDisabled();
      });
    });

    it("disables specific option when option.disabled is true", () => {
      render(RadioGroup, { props: { options: optionsWithDisabled } });
      const radios = screen.getAllByRole("radio");

      expect(radios[0]).not.toBeDisabled();
      expect(radios[1]).toBeDisabled();
      expect(radios[2]).not.toBeDisabled();
    });
  });

  describe("event handling", () => {
    it("emits change when option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(RadioGroup, { props: { options: mockOptions } });

      await user.click(screen.getByText("Banana"));

      expect(emitted()).toHaveProperty("change");
      expect(emitted().change[0]).toEqual(["banana", mockOptions[1]]);
    });

    it("emits update:modelValue when option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(RadioGroup, { props: { options: mockOptions } });

      await user.click(screen.getByText("Cherry"));

      expect(emitted()).toHaveProperty("update:modelValue");
      expect(emitted()["update:modelValue"][0]).toEqual(["cherry"]);
    });

    it("does not emit when disabled option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(RadioGroup, { props: { options: optionsWithDisabled } });

      await user.click(screen.getByText("Banana"));

      expect(emitted()).not.toHaveProperty("change");
    });

    it("does not emit when group is disabled", async () => {
      const user = userEvent.setup();
      const { emitted } = render(RadioGroup, { props: { options: mockOptions, disabled: true } });

      await user.click(screen.getByText("Banana"));

      expect(emitted()).not.toHaveProperty("change");
    });
  });

  describe("custom icons", () => {
    it("passes custom icons to all radios", () => {
      render(RadioGroup, {
        props: { options: mockOptions },
        slots: {
          checkedIcon: '<span data-testid="checked-icon">●</span>',
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(3);
    });

    it("shows checked icon for selected radio", () => {
      render(RadioGroup, {
        props: { options: mockOptions, modelValue: "banana" },
        slots: {
          checkedIcon: '<span data-testid="checked-icon">●</span>',
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });

      expect(screen.getAllByTestId("unchecked-icon")).toHaveLength(2);
      expect(screen.getByTestId("checked-icon")).toBeInTheDocument();
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(RadioGroup, { props: { options: mockOptions, className: "custom-class" } });
      expect(screen.getByRole("radiogroup")).toHaveClass("custom-class");
    });
  });
});

describe("Radio (direct rendering)", () => {
  it("checks radio when modelValue matches value", () => {
    render(Radio, {
      props: { modelValue: "apple", value: "apple", label: "Apple" },
    });
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("does not check radio when modelValue does not match value", () => {
    render(Radio, {
      props: { modelValue: "banana", value: "apple", label: "Apple" },
    });
    expect(screen.getByRole("radio")).not.toBeChecked();
  });
});
