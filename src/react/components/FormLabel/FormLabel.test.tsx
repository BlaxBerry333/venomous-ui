import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_LABEL_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import FormLabel from "./FormLabel";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("FormLabel", () => {
  it("renders with children", () => {
    renderWithTheme(<FormLabel>Username</FormLabel>);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders as label element", () => {
    renderWithTheme(<FormLabel>Email</FormLabel>);
    expect(screen.getByText("Email").tagName).toBe("LABEL");
  });

  it("applies base className", () => {
    renderWithTheme(<FormLabel>Test</FormLabel>);
    expect(screen.getByText("Test")).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.base.className);
  });

  it("applies required className when required", () => {
    renderWithTheme(<FormLabel required>Required Field</FormLabel>);
    expect(screen.getByText("Required Field")).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.required.className);
  });

  it("does not apply required className when not required", () => {
    renderWithTheme(<FormLabel>Optional Field</FormLabel>);
    expect(screen.getByText("Optional Field")).not.toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.required.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <FormLabel size="small">Small</FormLabel>
      </ThemeProvider>,
    );
    expect(screen.getByText("Small")).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <FormLabel size="medium">Medium</FormLabel>
      </ThemeProvider>,
    );
    expect(screen.getByText("Medium")).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <FormLabel size="large">Large</FormLabel>
      </ThemeProvider>,
    );
    expect(screen.getByText("Large")).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("has correct default size (medium)", () => {
    renderWithTheme(<FormLabel>Default</FormLabel>);
    expect(screen.getByText("Default")).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.sizeMedium.className);
  });

  it("applies htmlFor attribute", () => {
    renderWithTheme(<FormLabel htmlFor="username-input">Username</FormLabel>);
    expect(screen.getByText("Username")).toHaveAttribute("for", "username-input");
  });

  it("applies custom className", () => {
    renderWithTheme(<FormLabel className="custom-class">Custom</FormLabel>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<FormLabel ref={ref}>Ref Test</FormLabel>);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLLabelElement);
  });

  it("has correct displayName", () => {
    expect(FormLabel.displayName).toBe(COMPONENT_NAMES.FormLabel);
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(<FormLabel style={(theme) => ({ color: theme.semanticColors.success.main })}>Themed</FormLabel>);
    const label = screen.getByText("Themed");
    // The theme callback should apply the success color
    expect(label.style.color).toBeTruthy();
  });
});
