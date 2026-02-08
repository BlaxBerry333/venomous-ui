import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";
import Select from "./Select.vue";
import SelectOption from "./SelectOption.vue";

const classes = CSS_CLASSES.select;

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

describe("Select", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(Select, { props: { options: mockOptions } });
      const trigger = screen.getByRole("button");

      expect(trigger).toBeInTheDocument();
      expect(trigger).toHaveClass(classes.trigger);
    });

    it("renders placeholder when no value is selected", () => {
      render(Select, { props: { options: mockOptions, placeholder: "Choose an option" } });
      expect(screen.getByText("Choose an option")).toBeInTheDocument();
    });

    it("renders selected option label when value is set", () => {
      render(Select, { props: { options: mockOptions, modelValue: "apple" } });
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });

    it("syncs currentValue when modelValue changes externally", async () => {
      const { rerender } = render(Select, {
        props: { options: mockOptions, modelValue: "apple" },
      });

      expect(screen.getByText("Apple")).toBeInTheDocument();

      await rerender({ options: mockOptions, modelValue: "banana" });

      expect(screen.getByText("Banana")).toBeInTheDocument();
    });
  });

  describe("size prop", () => {
    it("applies sm size class", () => {
      render(Select, { props: { options: mockOptions, size: "sm" } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(Select, { props: { options: mockOptions } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(Select, { props: { options: mockOptions, size: "lg" } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.sizes.lg);
    });
  });

  describe("dropdown behavior", () => {
    it("opens dropdown on click", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("closes dropdown on second click", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.click(screen.getByRole("button"));
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("renders all options when open", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    it("applies open class when dropdown is open", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.open);
    });
  });

  describe("selection", () => {
    it("emits change when option is selected", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      expect(emitted()).toHaveProperty("change");
      expect(emitted().change[0]).toEqual(["banana", mockOptions[1]]);
    });

    it("closes dropdown after selection", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("marks selected option with selected class", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions, modelValue: "banana" } });

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.selected);
    });
  });

  describe("disabled options", () => {
    it("renders disabled option with disabled class", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: optionsWithDisabled } });

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.disabled);
    });

    it("does not emit change when disabled option is clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Select, { props: { options: optionsWithDisabled } });

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      expect(emitted()).not.toHaveProperty("change");
    });
  });

  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(Select, { props: { options: mockOptions } });
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(Select, { props: { options: mockOptions, disabled: true } });
      expect(screen.getByRole("button")).toBeDisabled();
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.disabled);
    });

    it("does not open dropdown when disabled", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions, disabled: true } });

      await user.click(screen.getByRole("button"));
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  describe("readOnly prop", () => {
    it("does not have readonly class by default", () => {
      render(Select, { props: { options: mockOptions } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).not.toHaveClass(classes.states.readonly);
    });

    it("applies readonly class when readOnly prop is true", () => {
      render(Select, { props: { options: mockOptions, readOnly: true } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.readonly);
    });

    it("does not open dropdown when readOnly", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions, readOnly: true } });

      await user.click(screen.getByRole("button"));
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  describe("error prop", () => {
    it("does not have error class by default", () => {
      render(Select, { props: { options: mockOptions } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).not.toHaveClass(classes.states.error);
    });

    it("applies error class when error prop is true", () => {
      render(Select, { props: { options: mockOptions, error: true } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.error);
    });

    it("sets aria-invalid when error prop is true", () => {
      render(Select, { props: { options: mockOptions, error: true } });
      expect(screen.getByRole("button")).toHaveAttribute("aria-invalid", "true");
    });
  });

  describe("keyboard navigation", () => {
    it("opens dropdown on Enter key", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on Space key", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard(" ");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on ArrowDown key", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("closes dropdown on Escape key", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.keyboard("{Escape}");
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("navigates options with arrow keys", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveClass(classes.optionStates.highlighted);

      await user.keyboard("{ArrowDown}");
      expect(options[1]).toHaveClass(classes.optionStates.highlighted);
    });

    it("selects highlighted option on Enter", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{Enter}");

      expect(emitted()).toHaveProperty("change");
      expect(emitted().change[0]).toEqual(["banana", mockOptions[1]]);
    });

    it("wraps around when navigating past end", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      const options = screen.getAllByRole("option");

      // Navigate to the end
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");
      expect(options[2]).toHaveClass(classes.optionStates.highlighted);

      // Wrap around to start
      await user.keyboard("{ArrowDown}");
      expect(options[0]).toHaveClass(classes.optionStates.highlighted);
    });

    it("does not select disabled option on Enter", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Select, { props: { options: optionsWithDisabled } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}"); // Navigate to disabled "Banana"
      await user.keyboard("{Enter}");

      expect(emitted()).not.toHaveProperty("change");
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on ArrowUp key", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowUp}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("navigates options with ArrowUp key", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveClass(classes.optionStates.highlighted);

      await user.keyboard("{ArrowUp}");
      expect(options[2]).toHaveClass(classes.optionStates.highlighted);
    });

    it("closes dropdown on Tab key", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.keyboard("{Tab}");
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Select, { props: { options: mockOptions, className: "custom-class" } });
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass("custom-class");
    });
  });

  describe("accessibility", () => {
    it("has aria-haspopup attribute", () => {
      render(Select, { props: { options: mockOptions } });
      expect(screen.getByRole("button")).toHaveAttribute("aria-haspopup", "listbox");
    });

    it("has aria-expanded attribute", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions } });

      expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
    });

    it("options have aria-selected attribute", async () => {
      const user = userEvent.setup();
      render(Select, { props: { options: mockOptions, modelValue: "banana" } });

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");

      expect(options[0]).toHaveAttribute("aria-selected", "false");
      expect(options[1]).toHaveAttribute("aria-selected", "true");
      expect(options[2]).toHaveAttribute("aria-selected", "false");
    });
  });

  describe("additional props", () => {
    it("renders hidden input with name prop", () => {
      render(Select, { props: { options: mockOptions, name: "fruit", modelValue: "apple" } });
      const hiddenInput = document.querySelector('input[type="hidden"][name="fruit"]');
      expect(hiddenInput).toBeInTheDocument();
      expect(hiddenInput).toHaveValue("apple");
    });

    it("renders dropdownIcon slot when provided", () => {
      render(Select, {
        props: { options: mockOptions },
        slots: { dropdownIcon: '<span data-testid="dropdown-icon">▼</span>' },
      });
      expect(screen.getByTestId("dropdown-icon")).toBeInTheDocument();
    });
  });

  describe("custom mode (with default slot)", () => {
    it("renders children instead of options when slot provided", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
      });

      await user.click(screen.getByRole("button"));

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
    });

    it("emits change when custom option is selected", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit" @change="onChange">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
        setup() {
          return { onChange };
        },
      });

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      expect(onChange).toHaveBeenCalled();
    });

    it("marks selected custom option with selected class", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select modelValue="banana" placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
      });

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.selected);
    });

    it("renders disabled custom option with disabled class", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana" disabled>Banana</SelectOption>
          </Select>
        `,
      });

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.disabled);
    });

    it("opens dropdown on ArrowDown in custom mode", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
      });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("selects option via Space key in simple mode", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Select, { props: { options: mockOptions } });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");
      await user.keyboard(" ");

      expect(emitted()).toHaveProperty("change");
      expect(emitted().change[0]).toEqual(["apple", mockOptions[0]]);
    });

    it("displays modelValue in custom mode", () => {
      render({
        components: { Select, SelectOption },
        template: `
          <Select modelValue="apple" placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
          </Select>
        `,
      });

      expect(screen.getByText("apple")).toBeInTheDocument();
    });

    it("opens dropdown on ArrowUp in custom mode", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
      });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowUp}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on Enter in custom mode", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
          </Select>
        `,
      });

      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on Space in custom mode", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
          </Select>
        `,
      });

      screen.getByRole("button").focus();
      await user.keyboard(" ");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("does not highlight options when opening via keyboard in custom mode", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
      });

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      const options = screen.getAllByRole("option");
      options.forEach((opt) => {
        expect(opt).not.toHaveClass(classes.optionStates.highlighted);
      });
    });

    it("ignores arrow keys when dropdown is open in custom mode", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
      });

      await user.click(screen.getByRole("button"));
      await user.keyboard("{ArrowDown}");

      const options = screen.getAllByRole("option");
      options.forEach((opt) => {
        expect(opt).not.toHaveClass(classes.optionStates.highlighted);
      });
    });

    it("shows placeholder when no modelValue in custom mode", () => {
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Pick one">
            <SelectOption value="apple">Apple</SelectOption>
          </Select>
        `,
      });

      expect(screen.getByText("Pick one")).toBeInTheDocument();
    });

    it("renders dropdownIcon slot in custom mode", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select">
            <template #dropdownIcon><span data-testid="custom-icon">▼</span></template>
            <SelectOption value="apple">Apple</SelectOption>
          </Select>
        `,
      });

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("throws error when SelectOption is used outside Select", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      expect(() => {
        render(SelectOption, { props: { value: "test" }, slots: { default: "Test" } });
      }).toThrow();

      consoleSpy.mockRestore();
    });

    it("closes custom mode dropdown on Tab key", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select a fruit">
            <SelectOption value="apple">Apple</SelectOption>
            <SelectOption value="banana">Banana</SelectOption>
          </Select>
        `,
      });

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.keyboard("{Tab}");
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("does not render selectedIcon when option is not selected", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select placeholder="Select">
            <SelectOption value="apple">
              Apple
              <template #selectedIcon><span data-testid="check-icon">✓</span></template>
            </SelectOption>
          </Select>
        `,
      });

      await user.click(screen.getByRole("button"));
      expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
    });

    it("renders selectedIcon slot when option is selected", async () => {
      const user = userEvent.setup();
      render({
        components: { Select, SelectOption },
        template: `
          <Select modelValue="banana" placeholder="Select a fruit">
            <SelectOption value="apple">
              Apple
              <template #selectedIcon><span data-testid="check-icon">✓</span></template>
            </SelectOption>
            <SelectOption value="banana">
              Banana
              <template #selectedIcon><span data-testid="check-icon">✓</span></template>
            </SelectOption>
          </Select>
        `,
      });

      await user.click(screen.getByRole("button"));
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    });
  });
});
