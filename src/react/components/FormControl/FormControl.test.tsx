import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it } from "vitest";

import { COMPONENT_NAMES, FORM_CONTROL_CSS_CLASS_NAMES, FORM_LABEL_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import FormControl from "./FormControl";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

function RefTestWrapper({ onRef }: { onRef: (el: HTMLDivElement | null) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    onRef(ref.current);
  }, [onRef]);
  return (
    <ThemeProvider>
      <FormControl ref={ref}>
        <input />
      </FormControl>
    </ThemeProvider>
  );
}

describe("FormControl", () => {
  it("renders children", () => {
    renderWithTheme(
      <FormControl>
        <input data-testid="input" />
      </FormControl>,
    );
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("applies base className", () => {
    renderWithTheme(
      <FormControl data-testid="form-control">
        <input />
      </FormControl>,
    );
    const control = screen.getByTestId("form-control");
    expect(control).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.base.className);
  });

  it("renders label when provided", () => {
    renderWithTheme(
      <FormControl label="Username">
        <input />
      </FormControl>,
    );
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("applies required indicator to label", () => {
    renderWithTheme(
      <FormControl label="Username" required>
        <input />
      </FormControl>,
    );
    const label = screen.getByText("Username").closest("label");
    expect(label).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.required.className);
  });

  it("renders helper text", () => {
    renderWithTheme(
      <FormControl helperText="Enter your username">
        <input />
      </FormControl>,
    );
    expect(screen.getByText("Enter your username")).toBeInTheDocument();
  });

  it("shows error message instead of helper text when error is true", () => {
    renderWithTheme(
      <FormControl helperText="Enter your username" error errorMessage="Username is required">
        <input />
      </FormControl>,
    );
    expect(screen.queryByText("Enter your username")).not.toBeInTheDocument();
    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });

  it("applies error className when error is true", () => {
    renderWithTheme(
      <FormControl data-testid="form-control" error>
        <input />
      </FormControl>,
    );
    const control = screen.getByTestId("form-control");
    expect(control).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.error.className);
  });

  it("applies row className when row is true", () => {
    renderWithTheme(
      <FormControl data-testid="form-control" row label="Username">
        <input />
      </FormControl>,
    );
    const control = screen.getByTestId("form-control");
    expect(control).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.row.className);
  });

  it("applies labelWidth style when row is true", () => {
    renderWithTheme(
      <FormControl row label="Username" labelWidth={120}>
        <input />
      </FormControl>,
    );
    const labelWrapper = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.labelWrapper.className}`);
    expect(labelWrapper).toHaveStyle({ width: "120px" });
  });

  it("applies labelWidth as string when provided", () => {
    renderWithTheme(
      <FormControl row label="Username" labelWidth="100px">
        <input />
      </FormControl>,
    );
    const labelWrapper = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.labelWrapper.className}`);
    expect(labelWrapper).toHaveStyle({ width: "100px" });
  });

  it("applies labelAlign style when row is true", () => {
    renderWithTheme(
      <FormControl row label="Username" labelAlign="left">
        <input />
      </FormControl>,
    );
    const labelWrapper = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.labelWrapper.className}`);
    expect(labelWrapper).toHaveStyle({ textAlign: "left" });
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <FormControl data-testid="form-control" size="small">
          <input />
        </FormControl>
      </ThemeProvider>,
    );
    let control = screen.getByTestId("form-control");
    expect(control).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <FormControl data-testid="form-control" size="medium">
          <input />
        </FormControl>
      </ThemeProvider>,
    );
    control = screen.getByTestId("form-control");
    expect(control).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <FormControl data-testid="form-control" size="large">
          <input />
        </FormControl>
      </ThemeProvider>,
    );
    control = screen.getByTestId("form-control");
    expect(control).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("has correct displayName", () => {
    expect(FormControl.displayName).toBe(COMPONENT_NAMES.FormControl);
  });

  it("forwards ref to root element", () => {
    let refElement: HTMLDivElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(HTMLDivElement);
    expect(refElement).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.base.className);
  });

  it("spreads additional props to root element", () => {
    renderWithTheme(
      <FormControl data-testid="custom-control" aria-label="Form control">
        <input />
      </FormControl>,
    );
    const control = screen.getByTestId("custom-control");
    expect(control).toHaveAttribute("aria-label", "Form control");
  });

  it("applies custom className", () => {
    renderWithTheme(
      <FormControl data-testid="form-control" className="custom-class">
        <input />
      </FormControl>,
    );
    const control = screen.getByTestId("form-control");
    expect(control).toHaveClass("custom-class");
  });

  it("renders field wrapper", () => {
    renderWithTheme(
      <FormControl>
        <input />
      </FormControl>,
    );
    const field = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.field.className}`);
    expect(field).toBeInTheDocument();
  });

  it("renders content wrapper in row layout", () => {
    renderWithTheme(
      <FormControl row label="Username">
        <input />
      </FormControl>,
    );
    const content = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.content.className}`);
    expect(content).toBeInTheDocument();
  });

  it("does not render content wrapper in vertical layout", () => {
    renderWithTheme(
      <FormControl label="Username">
        <input />
      </FormControl>,
    );
    const content = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.content.className}`);
    expect(content).not.toBeInTheDocument();
  });

  it("renders helper text with correct className", () => {
    renderWithTheme(
      <FormControl helperText="Help text">
        <input />
      </FormControl>,
    );
    const helperText = screen.getByText("Help text");
    expect(helperText).toHaveClass(FORM_CONTROL_CSS_CLASS_NAMES.helperText.className);
  });

  it("does not render helper text when not provided", () => {
    renderWithTheme(
      <FormControl>
        <input />
      </FormControl>,
    );
    const helperText = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.helperText.className}`);
    expect(helperText).not.toBeInTheDocument();
  });

  it("does not render label when not provided", () => {
    renderWithTheme(
      <FormControl>
        <input />
      </FormControl>,
    );
    const labelWrapper = document.querySelector(`.${FORM_CONTROL_CSS_CLASS_NAMES.labelWrapper.className}`);
    expect(labelWrapper).not.toBeInTheDocument();
  });

  it("passes size to FormLabel", () => {
    renderWithTheme(
      <FormControl label="Username" size="large">
        <input />
      </FormControl>,
    );
    const label = screen.getByText("Username").closest("label");
    expect(label).toHaveClass(FORM_LABEL_CSS_CLASS_NAMES.sizeLarge.className);
  });
});
