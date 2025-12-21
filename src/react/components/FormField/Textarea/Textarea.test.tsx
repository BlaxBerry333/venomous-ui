import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Textarea from "./Textarea";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("FormField.Textarea", () => {
  it("renders textarea element", () => {
    renderWithTheme(<Textarea placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders as textarea element", () => {
    renderWithTheme(<Textarea placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test").tagName).toBe("TEXTAREA");
  });

  it("applies base className to wrapper", () => {
    renderWithTheme(<Textarea placeholder="Test" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.base.className);
  });

  it("applies textarea className to textarea", () => {
    renderWithTheme(<Textarea placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.textarea.className);
  });

  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Textarea placeholder="Test" variant="outlined" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.variantOutlined.className);

    rerender(
      <ThemeProvider>
        <Textarea placeholder="Test" variant="filled" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.variantFilled.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Textarea placeholder="Test" size="small" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Textarea placeholder="Test" size="medium" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Textarea placeholder="Test" size="large" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("applies resize className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Textarea placeholder="Test" resize="none" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeNone.className);

    rerender(
      <ThemeProvider>
        <Textarea placeholder="Test" resize="vertical" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeVertical.className);

    rerender(
      <ThemeProvider>
        <Textarea placeholder="Test" resize="horizontal" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeHorizontal.className);

    rerender(
      <ThemeProvider>
        <Textarea placeholder="Test" resize="both" />
      </ThemeProvider>,
    );
    wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.resizeBoth.className);
  });

  it("handles disabled state", () => {
    renderWithTheme(<Textarea placeholder="Test" disabled />);
    const textarea = screen.getByPlaceholderText("Test");
    const wrapper = textarea.parentElement;
    expect(textarea).toBeDisabled();
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.disabled.className);
  });

  it("handles error state", () => {
    renderWithTheme(<Textarea placeholder="Test" error />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.error.className);
  });

  it("handles focus state", () => {
    renderWithTheme(<Textarea placeholder="Test" />);
    const textarea = screen.getByPlaceholderText("Test");
    const wrapper = textarea.parentElement;

    fireEvent.focus(textarea);
    expect(wrapper).toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.focused.className);

    fireEvent.blur(textarea);
    expect(wrapper).not.toHaveClass(FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES.focused.className);
  });

  it("sets default rows from minRows", () => {
    renderWithTheme(<Textarea placeholder="Test" minRows={5} />);
    const textarea = screen.getByPlaceholderText("Test");
    expect(textarea).toHaveAttribute("rows", "5");
  });

  it("handles onChange events", () => {
    const handleChange = vi.fn();
    renderWithTheme(<Textarea placeholder="Test" onChange={handleChange} />);
    const textarea = screen.getByPlaceholderText("Test");
    fireEvent.change(textarea, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Textarea placeholder="Test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("has correct displayName", () => {
    expect(Textarea.displayName).toBe(COMPONENT_NAMES.FormFieldTextarea);
  });

  it("applies custom className to wrapper", () => {
    renderWithTheme(<Textarea placeholder="Test" className="custom-class" />);
    const wrapper = screen.getByPlaceholderText("Test").parentElement;
    expect(wrapper).toHaveClass("custom-class");
  });
});
