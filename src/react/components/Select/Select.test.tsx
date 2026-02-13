import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./index";

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
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Select options={mockOptions} />);
      const trigger = screen.getByRole("button");

      expect(trigger).toBeInTheDocument();
      expect(trigger).toHaveClass(classes.trigger);
    });

    it("renders placeholder when no value is selected", () => {
      render(<Select options={mockOptions} placeholder="Choose an option" />);
      expect(screen.getByText("Choose an option")).toBeInTheDocument();
    });

    it("renders selected option label when value is set", () => {
      render(<Select options={mockOptions} value="apple" />);
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
  });

  // Size prop
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(<Select options={mockOptions} size="sm" />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(<Select options={mockOptions} size="md" />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(<Select options={mockOptions} size="lg" />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.sizes.lg);
    });
  });

  // Dropdown behavior
  describe("dropdown behavior", () => {
    it("opens dropdown on click", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("closes dropdown on second click", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.click(screen.getByRole("button"));
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("renders all options when open", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      await user.click(screen.getByRole("button"));

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    it("applies open class when dropdown is open", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.open);
    });
  });

  // Selection
  describe("selection", () => {
    it("calls onChange when option is selected", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Select options={mockOptions} onChange={handleChange} />);

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      expect(handleChange).toHaveBeenCalledWith("banana", mockOptions[1]);
    });

    it("closes dropdown after selection", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} onChange={() => {}} />);

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("marks selected option with selected class", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} value="banana" />);

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.selected);
    });
  });

  // Disabled options
  describe("disabled options", () => {
    it("renders disabled option with disabled class", async () => {
      const user = userEvent.setup();
      render(<Select options={optionsWithDisabled} />);

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.disabled);
    });

    it("does not call onChange when disabled option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Select options={optionsWithDisabled} onChange={handleChange} />);

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Disabled state
  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(<Select options={mockOptions} />);
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(<Select options={mockOptions} disabled />);
      expect(screen.getByRole("button")).toBeDisabled();
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.disabled);
    });

    it("does not open dropdown when disabled", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} disabled />);

      await user.click(screen.getByRole("button"));
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  // ReadOnly state
  describe("readOnly prop", () => {
    it("does not have readonly class by default", () => {
      render(<Select options={mockOptions} />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).not.toHaveClass(classes.states.readonly);
    });

    it("applies readonly class when readOnly prop is true", () => {
      render(<Select options={mockOptions} readOnly />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.readonly);
    });

    it("does not open dropdown when readOnly", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} readOnly />);

      await user.click(screen.getByRole("button"));
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  // Error state
  describe("error prop", () => {
    it("does not have error class by default", () => {
      render(<Select options={mockOptions} />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).not.toHaveClass(classes.states.error);
    });

    it("applies error class when error prop is true", () => {
      render(<Select options={mockOptions} error />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass(classes.states.error);
    });

    it("sets aria-invalid when error prop is true", () => {
      render(<Select options={mockOptions} error />);
      expect(screen.getByRole("button")).toHaveAttribute("aria-invalid", "true");
    });
  });

  // Keyboard navigation
  describe("keyboard navigation", () => {
    it("opens dropdown on Enter key", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on Space key", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      screen.getByRole("button").focus();
      await user.keyboard(" ");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on ArrowDown key", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown on ArrowUp key", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowUp}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("closes dropdown on Escape key", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.keyboard("{Escape}");
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("navigates options with arrow keys", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveClass(classes.optionStates.highlighted);

      await user.keyboard("{ArrowDown}");
      expect(options[1]).toHaveClass(classes.optionStates.highlighted);
    });

    it("selects highlighted option on Enter", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Select options={mockOptions} onChange={handleChange} />);

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{Enter}");

      expect(handleChange).toHaveBeenCalledWith("banana", mockOptions[1]);
    });

    it("navigates up with ArrowUp key", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveClass(classes.optionStates.highlighted);

      // Go to last option with ArrowUp (wraps around)
      await user.keyboard("{ArrowUp}");
      expect(options[2]).toHaveClass(classes.optionStates.highlighted);

      // Go back up
      await user.keyboard("{ArrowUp}");
      expect(options[1]).toHaveClass(classes.optionStates.highlighted);
    });

    it("closes dropdown on Tab key", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.keyboard("{Tab}");
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("selects highlighted option on Space", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Select options={mockOptions} onChange={handleChange} />);

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");
      await user.keyboard(" ");

      expect(handleChange).toHaveBeenCalledWith("banana", mockOptions[1]);
    });

    it("wraps around when navigating past end", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

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

    it("does not select when no option is highlighted on Enter", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Select options={mockOptions} onChange={handleChange} />);

      // Open dropdown by clicking (highlightedIndex stays at -1)
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      // Press Enter without highlighting any option
      await user.keyboard("{Enter}");

      expect(handleChange).not.toHaveBeenCalled();
      // Dropdown should still be open
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("does not select disabled option on Enter", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Select options={optionsWithDisabled} onChange={handleChange} />);

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}"); // Navigate to disabled "Banana"
      await user.keyboard("{Enter}");

      expect(handleChange).not.toHaveBeenCalled();
      // Dropdown should still be open
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Select options={mockOptions} className="custom-class" />);
      expect(screen.getByRole("button").closest(`.${classes.root}`)).toHaveClass("custom-class");
    });
  });

  // ARIA attributes
  describe("accessibility", () => {
    it("has aria-haspopup attribute", () => {
      render(<Select options={mockOptions} />);
      expect(screen.getByRole("button")).toHaveAttribute("aria-haspopup", "listbox");
    });

    it("has aria-expanded attribute", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} />);

      expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
    });

    it("options have aria-selected attribute", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} value="banana" />);

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");

      expect(options[0]).toHaveAttribute("aria-selected", "false");
      expect(options[1]).toHaveAttribute("aria-selected", "true");
      expect(options[2]).toHaveAttribute("aria-selected", "false");
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Select.displayName).toBe(COMPONENT_NAMES.Select);
    });
  });

  // Additional props
  describe("additional props", () => {
    it("renders hidden input with name prop", () => {
      render(<Select options={mockOptions} name="fruit" value="apple" />);
      const hiddenInput = document.querySelector('input[type="hidden"][name="fruit"]');
      expect(hiddenInput).toBeInTheDocument();
      expect(hiddenInput).toHaveValue("apple");
    });

    it("renders dropdownIcon when provided", () => {
      render(<Select options={mockOptions} dropdownIcon={<span data-testid="dropdown-icon">▼</span>} />);
      expect(screen.getByTestId("dropdown-icon")).toBeInTheDocument();
    });

    it("applies maxHeight as string", async () => {
      const user = userEvent.setup();
      render(<Select options={mockOptions} maxHeight="50vh" />);

      await user.click(screen.getByRole("button"));
      const listbox = screen.getByRole("listbox");
      // Check that the style attribute contains the maxHeight value
      expect(listbox.style.maxHeight).toBe("50vh");
    });
  });

  // Custom mode with Select.Option
  describe("custom mode (with children)", () => {
    it("renders children instead of options when provided", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
    });

    it("calls onChange when custom option is selected", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <Select onChange={handleChange} placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      expect(handleChange).toHaveBeenCalledWith("banana", { value: "banana", label: "banana" });
    });

    it("closes dropdown after custom option selection", async () => {
      const user = userEvent.setup();
      render(
        <Select onChange={() => {}} placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("marks selected custom option with selected class", async () => {
      const user = userEvent.setup();
      render(
        <Select value="banana" placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.selected);
    });

    it("renders disabled custom option with disabled class", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana" disabled>
            Banana
          </Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      const options = screen.getAllByRole("option");
      const bananaOption = options.find((opt) => opt.textContent?.includes("Banana"));

      expect(bananaOption).toHaveClass(classes.optionStates.disabled);
    });

    it("does not call onChange when disabled custom option is clicked", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <Select onChange={handleChange} placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana" disabled>
            Banana
          </Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      await user.click(screen.getByText("Banana"));

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("displays value when in custom mode", async () => {
      render(
        <Select value="banana" placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      // In custom mode, it shows the value as string
      expect(screen.getByText("banana")).toBeInTheDocument();
    });

    it("highlights option on hover", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      const bananaOption = screen.getByText("Banana").closest('[role="option"]');

      await user.hover(bananaOption!);

      expect(bananaOption).toHaveClass(classes.optionStates.highlighted);
    });

    it("Select.Option has correct displayName", () => {
      expect(Select.Option.displayName).toBe("Select.Option");
    });

    it("opens dropdown with ArrowDown in custom mode without highlighting", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowDown}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
      // In custom mode, no option should be highlighted via index
      const options = screen.getAllByRole("option");
      options.forEach((opt) => {
        expect(opt).not.toHaveClass(classes.optionStates.highlighted);
      });
    });

    it("opens dropdown with ArrowUp in custom mode", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
        </Select>,
      );

      screen.getByRole("button").focus();
      await user.keyboard("{ArrowUp}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown with Enter in custom mode", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
        </Select>,
      );

      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("opens dropdown with Space in custom mode", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
        </Select>,
      );

      screen.getByRole("button").focus();
      await user.keyboard(" ");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("closes dropdown on Tab key in custom mode", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      await user.keyboard("{Tab}");
      await waitFor(() => {
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
      });
    });

    it("ignores arrow keys when open in custom mode", async () => {
      const user = userEvent.setup();
      render(
        <Select placeholder="Select a fruit">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
        </Select>,
      );

      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("listbox")).toBeInTheDocument();

      // Arrow keys should not do anything in custom mode (no crash, dropdown stays open)
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowUp}");
      await user.keyboard("{Enter}");
      await user.keyboard(" ");

      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("throws error when Select.Option is used outside Select", () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      expect(() => {
        render(<Select.Option value="test">Test</Select.Option>);
      }).toThrow("Select.Option must be used within a Select component with children");

      consoleSpy.mockRestore();
    });
  });
});
