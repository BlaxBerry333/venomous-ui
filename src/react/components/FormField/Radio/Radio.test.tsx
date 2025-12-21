import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, FORM_FIELD_RADIO_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Radio from "./Radio";
import type { RadioOption } from "./Radio.types";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

const basicOptions: RadioOption[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("FormField.Radio", () => {
  it("renders radiogroup", () => {
    renderWithTheme(<Radio options={basicOptions} />);
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("renders all options", () => {
    renderWithTheme(<Radio options={basicOptions} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("renders radio inputs", () => {
    renderWithTheme(<Radio options={basicOptions} />);
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
  });

  it("applies group className", () => {
    renderWithTheme(<Radio options={basicOptions} />);
    expect(screen.getByRole("radiogroup")).toHaveClass(FORM_FIELD_RADIO_CSS_CLASS_NAMES.group.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Radio options={basicOptions} size="small" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass(FORM_FIELD_RADIO_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Radio options={basicOptions} size="medium" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass(FORM_FIELD_RADIO_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Radio options={basicOptions} size="large" />
      </ThemeProvider>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass(FORM_FIELD_RADIO_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("applies column className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Radio options={basicOptions} column={false} />
      </ThemeProvider>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass(FORM_FIELD_RADIO_CSS_CLASS_NAMES.horizontal.className);

    rerender(
      <ThemeProvider>
        <Radio options={basicOptions} column={true} />
      </ThemeProvider>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass(FORM_FIELD_RADIO_CSS_CLASS_NAMES.vertical.className);
  });

  it("handles checked state with defaultValue", () => {
    renderWithTheme(<Radio options={basicOptions} defaultValue="option2" />);
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toBeChecked();
    expect(radios[2]).not.toBeChecked();
  });

  it("handles disabled state for group", () => {
    renderWithTheme(<Radio options={basicOptions} disabled />);
    const radios = screen.getAllByRole("radio");
    radios.forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });

  it("handles disabled state for individual option", () => {
    const optionsWithDisabled: RadioOption[] = [
      { value: "1", label: "Enabled" },
      { value: "2", label: "Disabled", disabled: true },
    ];
    renderWithTheme(<Radio options={optionsWithDisabled} />);
    const radios = screen.getAllByRole("radio");
    expect(radios[0]).not.toBeDisabled();
    expect(radios[1]).toBeDisabled();
  });

  it("handles onChange events", () => {
    const handleChange = vi.fn();
    renderWithTheme(<Radio options={basicOptions} onChange={handleChange} />);
    const radios = screen.getAllByRole("radio");

    fireEvent.click(radios[1]);
    expect(handleChange).toHaveBeenCalledWith("option2");
  });

  it("changes selection in uncontrolled mode", () => {
    renderWithTheme(<Radio options={basicOptions} />);
    const radios = screen.getAllByRole("radio");

    fireEvent.click(radios[0]);
    expect(radios[0]).toBeChecked();

    fireEvent.click(radios[2]);
    expect(radios[0]).not.toBeChecked();
    expect(radios[2]).toBeChecked();
  });

  it("has correct displayName", () => {
    expect(Radio.displayName).toBe(COMPONENT_NAMES.FormFieldRadio);
  });

  it("applies custom className to group", () => {
    renderWithTheme(<Radio options={basicOptions} className="custom-class" />);
    expect(screen.getByRole("radiogroup")).toHaveClass("custom-class");
  });
});
