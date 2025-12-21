import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_SELECT_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Select from "./Select";
import type { SelectOptionOrGroup } from "./Select.types";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

const basicOptions: SelectOptionOrGroup[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

const groupedOptions: SelectOptionOrGroup[] = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
    ],
  },
  {
    label: "Vegetables",
    options: [{ value: "carrot", label: "Carrot" }],
  },
];

describe("FormField.Select", () => {
  it("renders with placeholder", () => {
    renderWithTheme(<Select options={basicOptions} placeholder="Select fruit" />);
    expect(screen.getByText("Select fruit")).toBeInTheDocument();
  });

  it("applies base className", () => {
    renderWithTheme(<Select options={basicOptions} />);
    const wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.base.className);
  });

  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Select options={basicOptions} variant="outlined" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.variantOutlined.className);

    rerender(
      <ThemeProvider>
        <Select options={basicOptions} variant="filled" />
      </ThemeProvider>,
    );
    wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.variantFilled.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Select options={basicOptions} size="small" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Select options={basicOptions} size="medium" />
      </ThemeProvider>,
    );
    wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Select options={basicOptions} size="large" />
      </ThemeProvider>,
    );
    wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("handles disabled state", () => {
    renderWithTheme(<Select options={basicOptions} disabled />);
    const wrapper = screen.getByRole("button").parentElement;
    const button = screen.getByRole("button");
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.disabled.className);
    expect(button).toBeDisabled();
  });

  it("handles error state", () => {
    renderWithTheme(<Select options={basicOptions} error />);
    const wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.error.className);
  });

  it("opens dropdown on click", async () => {
    renderWithTheme(<Select options={basicOptions} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    // The dropdown is rendered in a Portal, verify aria-expanded is set
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("displays options when open", async () => {
    renderWithTheme(<Select options={basicOptions} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });
  });

  it("selects an option", async () => {
    const handleChange = vi.fn();
    renderWithTheme(<Select options={basicOptions} onChange={handleChange} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Apple"));

    expect(handleChange).toHaveBeenCalledWith("apple");
  });

  it("displays selected value", () => {
    renderWithTheme(<Select options={basicOptions} defaultValue="banana" />);
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("renders grouped options", async () => {
    renderWithTheme(<Select options={groupedOptions} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Fruits")).toBeInTheDocument();
      expect(screen.getByText("Vegetables")).toBeInTheDocument();
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Carrot")).toBeInTheDocument();
    });
  });

  it("shows clear button when clearable and has value", async () => {
    renderWithTheme(<Select options={basicOptions} clearable defaultValue="apple" />);
    expect(screen.getByLabelText("Clear selection")).toBeInTheDocument();
  });

  it("clears selection when clear button clicked", async () => {
    const handleChange = vi.fn();
    renderWithTheme(<Select options={basicOptions} clearable defaultValue="apple" onChange={handleChange} />);

    fireEvent.click(screen.getByLabelText("Clear selection"));

    expect(handleChange).toHaveBeenCalledWith(undefined);
  });

  it("shows search input when searchable", async () => {
    renderWithTheme(<Select options={basicOptions} searchable />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });
  });

  it("filters options based on search", async () => {
    renderWithTheme(<Select options={basicOptions} searchable />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "app" } });

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
  });

  it("has correct displayName", () => {
    expect(Select.displayName).toBe(COMPONENT_NAMES.FormFieldSelect);
  });

  it("closes dropdown when clicking toggle button again", async () => {
    const handleClose = vi.fn();
    renderWithTheme(<Select options={basicOptions} onClose={handleClose} />);
    const button = screen.getByRole("button");

    // Open dropdown
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Close dropdown by clicking again
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(handleClose).toHaveBeenCalled();
  });

  it("closes dropdown when clicking outside", async () => {
    const handleClose = vi.fn();
    renderWithTheme(<Select options={basicOptions} onClose={handleClose} />);
    const button = screen.getByRole("button");

    // Open dropdown
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Click outside
    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
    expect(handleClose).toHaveBeenCalled();
  });

  it("closes dropdown when pressing Escape key", async () => {
    const handleClose = vi.fn();
    renderWithTheme(<Select options={basicOptions} onClose={handleClose} />);
    const button = screen.getByRole("button");

    // Open dropdown
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Press Escape
    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
    expect(handleClose).toHaveBeenCalled();
  });

  it("filters grouped options based on search", async () => {
    renderWithTheme(<Select options={groupedOptions} searchable />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "car" } });

    // Should show Carrot but not Apple/Banana
    expect(screen.getByText("Carrot")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
    // Should still show Vegetables group label
    expect(screen.getByText("Vegetables")).toBeInTheDocument();
    // Should not show Fruits group as no matches
    expect(screen.queryByText("Fruits")).not.toBeInTheDocument();
  });

  it("calls onOpen when dropdown opens", async () => {
    const handleOpen = vi.fn();
    renderWithTheme(<Select options={basicOptions} onOpen={handleOpen} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(handleOpen).toHaveBeenCalled();
  });

  it("does not open when disabled", () => {
    const handleOpen = vi.fn();
    renderWithTheme(<Select options={basicOptions} disabled onOpen={handleOpen} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(handleOpen).not.toHaveBeenCalled();
  });

  it("handles disabled options", async () => {
    const optionsWithDisabled: SelectOptionOrGroup[] = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana", disabled: true },
    ];
    const handleChange = vi.fn();
    renderWithTheme(<Select options={optionsWithDisabled} onChange={handleChange} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Banana")).toBeInTheDocument();
    });

    // Click disabled option
    fireEvent.click(screen.getByText("Banana"));

    // Should not call onChange and dropdown should still be open
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("applies fullWidth className by default", () => {
    renderWithTheme(<Select options={basicOptions} />);
    const wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.fullWidth.className);
  });

  it("does not apply fullWidth className when fullWidth is false", () => {
    renderWithTheme(<Select options={basicOptions} fullWidth={false} />);
    const wrapper = screen.getByRole("button").parentElement;
    expect(wrapper).not.toHaveClass(FORM_FIELD_SELECT_CSS_CLASS_NAMES.fullWidth.className);
  });

  it("supports controlled value", () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <ThemeProvider>
        <Select options={basicOptions} value="apple" onChange={handleChange} />
      </ThemeProvider>,
    );
    expect(screen.getByText("Apple")).toBeInTheDocument();

    rerender(
      <ThemeProvider>
        <Select options={basicOptions} value="banana" onChange={handleChange} />
      </ThemeProvider>,
    );
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("uses custom search placeholder", async () => {
    renderWithTheme(<Select options={basicOptions} searchable searchPlaceholder="Type to search..." />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Type to search...")).toBeInTheDocument();
    });
  });

  it("updates position on scroll and resize", async () => {
    // Mock getBoundingClientRect to return non-zero dimensions
    const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
      width: 200,
      height: 40,
      top: 100,
      left: 100,
      right: 300,
      bottom: 140,
      x: 100,
      y: 100,
      toJSON: () => {},
    });

    renderWithTheme(<Select options={basicOptions} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    // Trigger scroll event
    fireEvent.scroll(window);

    // Trigger resize event
    fireEvent.resize(window);

    // Dropdown should still be open
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Restore original
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  it("focuses search input when searchable dropdown opens", async () => {
    // Mock getBoundingClientRect to return non-zero dimensions
    const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
      width: 200,
      height: 40,
      top: 100,
      left: 100,
      right: 300,
      bottom: 140,
      x: 100,
      y: 100,
      toJSON: () => {},
    });

    renderWithTheme(<Select options={basicOptions} searchable />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText("Search...");
      expect(searchInput).toBeInTheDocument();
      // Verify search input gets focused
      expect(document.activeElement).toBe(searchInput);
    });

    // Restore original
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  it("resets search query when reopening dropdown", async () => {
    renderWithTheme(<Select options={basicOptions} searchable />);
    const button = screen.getByRole("button");

    // Open and search
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "app" } });
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();

    // Close
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");

    // Reopen - search should be reset
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText("Banana")).toBeInTheDocument();
    });
  });

  it("handles search with no matches gracefully", async () => {
    renderWithTheme(<Select options={basicOptions} searchable />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "xyz" } });

    // All options should be filtered out
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
    expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
  });
});
