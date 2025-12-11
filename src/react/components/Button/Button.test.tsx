import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { BUTTON_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Button from "./Button";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Button", () => {
  it("renders with text prop", () => {
    renderWithTheme(<Button text="Click me" />);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Button text="Button" variant="contained" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.variantContained.className);

    rerender(
      <ThemeProvider>
        <Button text="Button" variant="outlined" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.variantOutlined.className);

    rerender(
      <ThemeProvider>
        <Button text="Button" variant="text" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.variantText.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Button text="Button" size="small" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Button text="Button" size="medium" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Button text="Button" size="large" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("has correct default props", () => {
    renderWithTheme(<Button text="Button" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(BUTTON_CSS_CLASS_NAMES.variantContained.className);
    expect(button).toHaveClass(BUTTON_CSS_CLASS_NAMES.sizeMedium.className);
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    renderWithTheme(<Button text="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    renderWithTheme(<Button text="Disabled" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is disabled when loading prop is true", () => {
    renderWithTheme(<Button text="Loading" loading />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies loading className", () => {
    renderWithTheme(<Button text="Loading" loading />);
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.loading.className);
  });

  it("applies fullWidth className", () => {
    renderWithTheme(<Button text="Full Width" fullWidth />);
    expect(screen.getByRole("button")).toHaveClass(BUTTON_CSS_CLASS_NAMES.fullWidth.className);
  });

  it("applies custom className", () => {
    renderWithTheme(<Button text="Custom" className="custom-class" />);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("renders StartElement and EndElement", () => {
    renderWithTheme(
      <Button
        text="Button"
        StartElement={<span data-testid="start">Start</span>}
        EndElement={<span data-testid="end">End</span>}
      />,
    );
    expect(screen.getByTestId("start")).toBeInTheDocument();
    expect(screen.getByTestId("end")).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Button text="Ref" ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
  });

  it("has correct displayName", () => {
    expect(Button.displayName).toBe(COMPONENT_NAMES.Button);
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <Button text="Themed" style={(theme) => ({ backgroundColor: theme.semanticColors.success.main })} />,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: expect.any(String) });
  });
});
