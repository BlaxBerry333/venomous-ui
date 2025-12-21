import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_PASSWORD_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Password from "./Password";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("FormField.Password", () => {
  it("renders input element", () => {
    renderWithTheme(<Password placeholder="Enter password" />);
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });

  it("renders as password input by default", () => {
    renderWithTheme(<Password placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute("type", "password");
  });

  it("applies base className to wrapper", () => {
    renderWithTheme(<Password placeholder="Test" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.base.className);
  });

  it("applies input className to input", () => {
    renderWithTheme(<Password placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.input.className);
  });

  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Password placeholder="Test" variant="outlined" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.variantOutlined.className);

    rerender(
      <ThemeProvider>
        <Password placeholder="Test" variant="filled" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.variantFilled.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Password placeholder="Test" size="small" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Password placeholder="Test" size="medium" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Password placeholder="Test" size="large" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("renders visibility toggle button by default", () => {
    renderWithTheme(<Password placeholder="Test" />);
    expect(screen.getByLabelText("Show password")).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    renderWithTheme(<Password placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    const toggleButton = screen.getByLabelText("Show password");

    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("Hide password")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Hide password"));
    expect(input).toHaveAttribute("type", "password");
  });

  it("handles disabled state", () => {
    renderWithTheme(<Password placeholder="Test" disabled />);
    const input = screen.getByPlaceholderText("Test");
    const wrapper = input.parentElement;
    expect(input).toBeDisabled();
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.disabled.className);
  });

  it("handles error state", () => {
    renderWithTheme(<Password placeholder="Test" error />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.error.className);
  });

  it("handles focus state", () => {
    renderWithTheme(<Password placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    const wrapper = input.parentElement;

    fireEvent.focus(input);
    expect(wrapper).toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.focused.className);

    fireEvent.blur(input);
    expect(wrapper).not.toHaveClass(FORM_FIELD_PASSWORD_CSS_CLASS_NAMES.focused.className);
  });

  it("handles onChange events", () => {
    const handleChange = vi.fn();
    renderWithTheme(<Password placeholder="Test" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Test");
    fireEvent.change(input, { target: { value: "secret" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Password placeholder="Test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });

  it("has correct displayName", () => {
    expect(Password.displayName).toBe(COMPONENT_NAMES.FormFieldPassword);
  });

  it("applies custom className to wrapper", () => {
    renderWithTheme(<Password placeholder="Test" className="custom-class" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass("custom-class");
  });
});
