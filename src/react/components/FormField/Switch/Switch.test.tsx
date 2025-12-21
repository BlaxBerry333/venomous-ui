import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_SWITCH_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Switch from "./Switch";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("FormField.Switch", () => {
  it("renders switch element", () => {
    renderWithTheme(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("applies base className to wrapper", () => {
    renderWithTheme(<Switch />);
    const wrapper = screen.getByRole("switch").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_SWITCH_CSS_CLASS_NAMES.base.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Switch size="small" />
      </ThemeProvider>,
    );
    let wrapper = screen.getByRole("switch").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_SWITCH_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Switch size="medium" />
      </ThemeProvider>,
    );
    wrapper = screen.getByRole("switch").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_SWITCH_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Switch size="large" />
      </ThemeProvider>,
    );
    wrapper = screen.getByRole("switch").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_SWITCH_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("handles checked state", () => {
    renderWithTheme(<Switch defaultChecked />);
    const switchEl = screen.getByRole("switch");
    const wrapper = switchEl.closest("label");
    expect(switchEl).toBeChecked();
    expect(wrapper).toHaveClass(FORM_FIELD_SWITCH_CSS_CLASS_NAMES.checked.className);
  });

  it("handles disabled state", () => {
    renderWithTheme(<Switch disabled />);
    const switchEl = screen.getByRole("switch");
    const wrapper = switchEl.closest("label");
    expect(switchEl).toBeDisabled();
    expect(wrapper).toHaveClass(FORM_FIELD_SWITCH_CSS_CLASS_NAMES.disabled.className);
  });

  it("handles error state", () => {
    renderWithTheme(<Switch error />);
    const wrapper = screen.getByRole("switch").closest("label");
    expect(wrapper).toHaveClass(FORM_FIELD_SWITCH_CSS_CLASS_NAMES.error.className);
  });

  it("handles onChange events", () => {
    const handleChange = vi.fn();
    renderWithTheme(<Switch onChange={handleChange} />);
    const switchEl = screen.getByRole("switch");
    fireEvent.click(switchEl);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("toggles checked state in uncontrolled mode", () => {
    renderWithTheme(<Switch />);
    const switchEl = screen.getByRole("switch");

    expect(switchEl).not.toBeChecked();
    fireEvent.click(switchEl);
    expect(switchEl).toBeChecked();
    fireEvent.click(switchEl);
    expect(switchEl).not.toBeChecked();
  });

  it("has aria-checked attribute", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Switch checked={false} onChange={() => {}} />
      </ThemeProvider>,
    );
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");

    rerender(
      <ThemeProvider>
        <Switch checked={true} onChange={() => {}} />
      </ThemeProvider>,
    );
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Switch ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });

  it("has correct displayName", () => {
    expect(Switch.displayName).toBe(COMPONENT_NAMES.FormFieldSwitch);
  });

  it("applies custom className to wrapper", () => {
    renderWithTheme(<Switch className="custom-class" />);
    const wrapper = screen.getByRole("switch").closest("label");
    expect(wrapper).toHaveClass("custom-class");
  });
});
