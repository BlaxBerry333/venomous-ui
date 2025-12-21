import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Checkbox from "./Checkbox";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("FormField.Checkbox", () => {
  it("renders checkbox element", () => {
    renderWithTheme(<Checkbox label="Test" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders with label", () => {
    renderWithTheme(<Checkbox label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("applies base className to wrapper", () => {
    renderWithTheme(<Checkbox label="Test" />);
    const wrapper = screen.getByRole("checkbox").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.base.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Checkbox label="Test" size="small" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByRole("checkbox").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Checkbox label="Test" size="medium" />
      </ThemeProvider>,
    );
    wrapper = screen.getByRole("checkbox").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Checkbox label="Test" size="large" />
      </ThemeProvider>,
    );
    wrapper = screen.getByRole("checkbox").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("handles checked state", () => {
    renderWithTheme(<Checkbox label="Test" defaultChecked />);
    const checkbox = screen.getByRole("checkbox");
    const wrapper = checkbox.closest("label");
    expect(checkbox).toBeChecked();
    expect(wrapper).toHaveClass(FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.checked.className);
  });

  it("handles disabled state", () => {
    renderWithTheme(<Checkbox label="Test" disabled />);
    const checkbox = screen.getByRole("checkbox");
    const wrapper = checkbox.closest("label");
    expect(checkbox).toBeDisabled();
    expect(wrapper).toHaveClass(FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.disabled.className);
  });

  it("handles error state", () => {
    renderWithTheme(<Checkbox label="Test" error />);
    const wrapper = screen.getByRole("checkbox").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES.error.className);
  });

  it("handles onChange events", () => {
    const handleChange = vi.fn();
    renderWithTheme(<Checkbox label="Test" onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("toggles checked state in uncontrolled mode", () => {
    renderWithTheme(<Checkbox label="Test" />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Checkbox label="Test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });

  it("has correct displayName", () => {
    expect(Checkbox.displayName).toBe(COMPONENT_NAMES.FormFieldCheckbox);
  });

  it("applies custom className to wrapper", () => {
    renderWithTheme(<Checkbox label="Test" className="custom-class" />);
    const wrapper = screen.getByRole("checkbox").closest("label");
    expect(wrapper).toHaveClass("custom-class");
  });
});
