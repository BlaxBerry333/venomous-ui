import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_TEXT_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Text from "./Text";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("FormField.Text", () => {
  it("renders input element", () => {
    renderWithTheme(<Text placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders as text input", () => {
    renderWithTheme(<Text placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute("type", "text");
  });

  it("applies base className to wrapper", () => {
    renderWithTheme(<Text placeholder="Test" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.base.className);
  });

  it("applies input className to input", () => {
    renderWithTheme(<Text placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.input.className);
  });

  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Text placeholder="Test" variant="outlined" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.variantOutlined.className);

    rerender(
      <ThemeProvider>
        <Text placeholder="Test" variant="filled" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.variantFilled.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Text placeholder="Test" size="small" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Text placeholder="Test" size="medium" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Text placeholder="Test" size="large" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("has correct default props", () => {
    renderWithTheme(<Text placeholder="Test" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.variantOutlined.className);
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.sizeMedium.className);
  });

  it("handles disabled state", () => {
    renderWithTheme(<Text placeholder="Test" disabled />);
    const input = screen.getByPlaceholderText("Test");
    const wrapper = input.parentElement;
    expect(input).toBeDisabled();
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.disabled.className);
  });

  it("handles error state", () => {
    renderWithTheme(<Text placeholder="Test" error />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.error.className);
  });

  it("handles focus state", () => {
    renderWithTheme(<Text placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    const wrapper = input.parentElement;

    fireEvent.focus(input);
    expect(wrapper).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.focused.className);

    fireEvent.blur(input);
    expect(wrapper).not.toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.focused.className);
  });

  it("renders prefix element", () => {
    renderWithTheme(<Text placeholder="Test" prefix={<span data-testid="prefix">P</span>} />);
    expect(screen.getByTestId("prefix")).toBeInTheDocument();
    expect(screen.getByTestId("prefix").parentElement).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.prefix.className);
  });

  it("renders suffix element", () => {
    renderWithTheme(<Text placeholder="Test" suffix={<span data-testid="suffix">S</span>} />);
    expect(screen.getByTestId("suffix")).toBeInTheDocument();
    expect(screen.getByTestId("suffix").parentElement).toHaveClass(FORM_FIELD_TEXT_CSS_CLASS_NAMES.suffix.className);
  });

  it("handles onChange events", () => {
    const handleChange = vi.fn();
    renderWithTheme(<Text placeholder="Test" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Test");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("handles onFocus and onBlur events", () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    renderWithTheme(<Text placeholder="Test" onFocus={handleFocus} onBlur={handleBlur} />);
    const input = screen.getByPlaceholderText("Test");

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Text placeholder="Test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });

  it("has correct displayName", () => {
    expect(Text.displayName).toBe(COMPONENT_NAMES.FormFieldText);
  });

  it("applies custom className to wrapper", () => {
    renderWithTheme(<Text placeholder="Test" className="custom-class" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass("custom-class");
  });
});
