import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_NUMBER_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Number from "./Number";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("FormField.Number", () => {
  it("renders input element", () => {
    renderWithTheme(<Number placeholder="Enter number" />);
    expect(screen.getByPlaceholderText("Enter number")).toBeInTheDocument();
  });

  it("renders as number input", () => {
    renderWithTheme(<Number placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute("type", "number");
  });

  it("applies base className to wrapper", () => {
    renderWithTheme(<Number placeholder="Test" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.base.className);
  });

  it("applies input className to input", () => {
    renderWithTheme(<Number placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.input.className);
  });

  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Number placeholder="Test" variant="outlined" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.variantOutlined.className);

    rerender(
      <ThemeProvider>
        <Number placeholder="Test" variant="filled" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.variantFilled.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Number placeholder="Test" size="small" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Number placeholder="Test" size="medium" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Number placeholder="Test" size="large" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("renders control buttons by default", () => {
    renderWithTheme(<Number placeholder="Test" />);
    expect(screen.getByLabelText("Decrease value")).toBeInTheDocument();
    expect(screen.getByLabelText("Increase value")).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    renderWithTheme(<Number placeholder="Test" disabled />);
    const input = screen.getByPlaceholderText("Test");
    const wrapper = input.parentElement;
    expect(input).toBeDisabled();
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.disabled.className);
  });

  it("handles error state", () => {
    renderWithTheme(<Number placeholder="Test" error />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.error.className);
  });

  it("handles focus state", () => {
    renderWithTheme(<Number placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    const wrapper = input.parentElement;

    fireEvent.focus(input);
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.focused.className);

    fireEvent.blur(input);
    expect(wrapper).not.toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.focused.className);
  });

  it("applies min and max attributes", () => {
    renderWithTheme(<Number placeholder="Test" min={0} max={100} />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toHaveAttribute("min", "0");
    expect(input).toHaveAttribute("max", "100");
  });

  it("applies step attribute", () => {
    renderWithTheme(<Number placeholder="Test" step={5} />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toHaveAttribute("step", "5");
  });

  it("handles onChange events", () => {
    const handleChange = vi.fn();
    renderWithTheme(<Number placeholder="Test" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Test");
    fireEvent.change(input, { target: { value: "42" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Number placeholder="Test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });

  it("has correct displayName", () => {
    expect(Number.displayName).toBe(COMPONENT_NAMES.FormFieldNumber);
  });

  it("applies custom className to wrapper", () => {
    renderWithTheme(<Number placeholder="Test" className="custom-class" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("increments value when clicking increment button", () => {
    renderWithTheme(<Number placeholder="Test" defaultValue={5} step={1} />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    const incrementBtn = screen.getByLabelText("Increase value");

    fireEvent.click(incrementBtn);
    expect(input.value).toBe("6");
  });

  it("decrements value when clicking decrement button", () => {
    renderWithTheme(<Number placeholder="Test" defaultValue={5} step={1} />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    const decrementBtn = screen.getByLabelText("Decrease value");

    fireEvent.click(decrementBtn);
    expect(input.value).toBe("4");
  });

  it("respects step value for increment/decrement", () => {
    renderWithTheme(<Number placeholder="Test" defaultValue={10} step={5} />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    const incrementBtn = screen.getByLabelText("Increase value");
    const decrementBtn = screen.getByLabelText("Decrease value");

    fireEvent.click(incrementBtn);
    expect(input.value).toBe("15");

    fireEvent.click(decrementBtn);
    expect(input.value).toBe("10");
  });

  it("clamps value to max when incrementing", () => {
    renderWithTheme(<Number placeholder="Test" defaultValue={9} max={10} step={2} />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    const incrementBtn = screen.getByLabelText("Increase value");

    fireEvent.click(incrementBtn);
    expect(input.value).toBe("10");
  });

  it("clamps value to min when result would be below min", () => {
    renderWithTheme(<Number placeholder="Test" min={5} step={1} />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;

    // Set value to 3 (below min), then increment
    // When incrementing from empty (0), result 1 would be below min 5
    // But clampValue should clamp to min
    fireEvent.change(input, { target: { value: "3" } });

    const incrementBtn = screen.getByLabelText("Increase value");
    fireEvent.click(incrementBtn);

    // 3 + 1 = 4, but 4 < 5 (min), so result is 5
    expect(input.value).toBe("5");
  });

  it("disables increment button when at max value", () => {
    renderWithTheme(<Number placeholder="Test" value={10} max={10} onChange={() => {}} />);
    const incrementBtn = screen.getByLabelText("Increase value");
    expect(incrementBtn).toBeDisabled();
  });

  it("disables decrement button when at min value", () => {
    renderWithTheme(<Number placeholder="Test" value={0} min={0} onChange={() => {}} />);
    const decrementBtn = screen.getByLabelText("Decrease value");
    expect(decrementBtn).toBeDisabled();
  });

  it("handles decimal step precision", () => {
    renderWithTheme(<Number placeholder="Test" defaultValue={1.0} step={0.1} />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    const incrementBtn = screen.getByLabelText("Increase value");

    fireEvent.click(incrementBtn);
    expect(input.value).toBe("1.1");
  });

  it("handles empty input value as 0 when incrementing", () => {
    renderWithTheme(<Number placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
    const incrementBtn = screen.getByLabelText("Increase value");

    // Input is empty, should treat as 0
    fireEvent.click(incrementBtn);
    expect(input.value).toBe("1");
  });

  it("handles invalid input value as 0 when incrementing", () => {
    renderWithTheme(<Number placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test") as HTMLInputElement;

    // Set invalid value
    fireEvent.change(input, { target: { value: "abc" } });

    const incrementBtn = screen.getByLabelText("Increase value");
    fireEvent.click(incrementBtn);
    expect(input.value).toBe("1");
  });

  it("disables control buttons when component is disabled", () => {
    renderWithTheme(<Number placeholder="Test" disabled />);
    const incrementBtn = screen.getByLabelText("Increase value");
    const decrementBtn = screen.getByLabelText("Decrease value");

    expect(incrementBtn).toBeDisabled();
    expect(decrementBtn).toBeDisabled();
  });

  it("applies fullWidth className by default", () => {
    renderWithTheme(<Number placeholder="Test" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.fullWidth.className);
  });

  it("does not apply fullWidth className when fullWidth is false", () => {
    renderWithTheme(<Number placeholder="Test" fullWidth={false} />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).not.toHaveClass(FORM_FIELD_NUMBER_CSS_CLASS_NAMES.fullWidth.className);
  });
});
