import { fireEvent, render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { CHIP_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Chip from "./Chip";

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
      <Chip ref={ref}>Test</Chip>
    </ThemeProvider>
  );
}

describe("Chip", () => {
  it("renders with children", () => {
    renderWithTheme(<Chip>Tag</Chip>);
    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  it("applies base className", () => {
    renderWithTheme(<Chip data-testid="chip">Tag</Chip>);
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.base.className);
  });

  it("applies variant className - filled", () => {
    renderWithTheme(
      <Chip data-testid="chip" variant="filled">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.variantFilled.className);
  });

  it("applies variant className - outlined", () => {
    renderWithTheme(
      <Chip data-testid="chip" variant="outlined">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.variantOutlined.className);
  });

  it("applies size className - small", () => {
    renderWithTheme(
      <Chip data-testid="chip" size="small">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.sizeSmall.className);
  });

  it("applies size className - medium", () => {
    renderWithTheme(
      <Chip data-testid="chip" size="medium">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.sizeMedium.className);
  });

  it("applies size className - large", () => {
    renderWithTheme(
      <Chip data-testid="chip" size="large">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("applies color className - default", () => {
    renderWithTheme(
      <Chip data-testid="chip" color="default">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.colorDefault.className);
  });

  it("applies color className - primary", () => {
    renderWithTheme(
      <Chip data-testid="chip" color="primary">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.colorPrimary.className);
  });

  it("applies color className - success", () => {
    renderWithTheme(
      <Chip data-testid="chip" color="success">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.colorSuccess.className);
  });

  it("applies color className - error", () => {
    renderWithTheme(
      <Chip data-testid="chip" color="error">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.colorError.className);
  });

  it("applies color className - warning", () => {
    renderWithTheme(
      <Chip data-testid="chip" color="warning">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.colorWarning.className);
  });

  it("applies color className - info", () => {
    renderWithTheme(
      <Chip data-testid="chip" color="info">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.colorInfo.className);
  });

  it("applies disabled className when disabled", () => {
    renderWithTheme(
      <Chip data-testid="chip" disabled>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.disabled.className);
  });

  it("sets aria-disabled when disabled and clickable", () => {
    renderWithTheme(
      <Chip data-testid="chip" disabled clickable>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveAttribute("aria-disabled", "true");
  });

  it("applies selected className when selected", () => {
    renderWithTheme(
      <Chip data-testid="chip" selected>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.selected.className);
  });

  it("applies clickable className when clickable", () => {
    renderWithTheme(
      <Chip data-testid="chip" clickable>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.clickable.className);
    expect(chip).toHaveAttribute("role", "button");
  });

  it("applies clickable className when onClick is provided", () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <Chip data-testid="chip" onClick={handleClick}>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.clickable.className);
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <Chip data-testid="chip" onClick={handleClick}>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    fireEvent.click(chip);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <Chip data-testid="chip" onClick={handleClick} disabled>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    fireEvent.click(chip);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders delete icon when deletable", () => {
    renderWithTheme(<Chip deletable>Tag</Chip>);
    const deleteIcon = document.querySelector(`.${CHIP_CSS_CLASS_NAMES.deleteIcon.className}`);
    expect(deleteIcon).toBeInTheDocument();
  });

  it("does not render delete icon when not deletable", () => {
    renderWithTheme(<Chip>Tag</Chip>);
    const deleteIcon = document.querySelector(`.${CHIP_CSS_CLASS_NAMES.deleteIcon.className}`);
    expect(deleteIcon).not.toBeInTheDocument();
  });

  it("calls onDelete when delete icon is clicked", () => {
    const handleDelete = vi.fn();
    renderWithTheme(
      <Chip deletable onDelete={handleDelete}>
        Tag
      </Chip>,
    );
    const deleteIcon = document.querySelector(`.${CHIP_CSS_CLASS_NAMES.deleteIcon.className}`);
    fireEvent.click(deleteIcon!);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("does not call onDelete when disabled", () => {
    const handleDelete = vi.fn();
    renderWithTheme(
      <Chip deletable onDelete={handleDelete} disabled>
        Tag
      </Chip>,
    );
    const deleteIcon = document.querySelector(`.${CHIP_CSS_CLASS_NAMES.deleteIcon.className}`);
    fireEvent.click(deleteIcon!);
    expect(handleDelete).not.toHaveBeenCalled();
  });

  it("stops propagation when delete icon is clicked", () => {
    const handleClick = vi.fn();
    const handleDelete = vi.fn();
    renderWithTheme(
      <Chip deletable onDelete={handleDelete} onClick={handleClick}>
        Tag
      </Chip>,
    );
    const deleteIcon = document.querySelector(`.${CHIP_CSS_CLASS_NAMES.deleteIcon.className}`);
    fireEvent.click(deleteIcon!);
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders custom delete icon", () => {
    renderWithTheme(
      <Chip deletable DeleteIcon={<span data-testid="custom-delete">X</span>}>
        Tag
      </Chip>,
    );
    expect(screen.getByTestId("custom-delete")).toBeInTheDocument();
  });

  it("renders Icon", () => {
    renderWithTheme(<Chip Icon={<span data-testid="icon">★</span>}>Tag</Chip>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders label wrapper", () => {
    renderWithTheme(<Chip>Tag</Chip>);
    const label = document.querySelector(`.${CHIP_CSS_CLASS_NAMES.label.className}`);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Tag");
  });

  it("has correct displayName", () => {
    expect(Chip.displayName).toBe(COMPONENT_NAMES.Chip);
  });

  it("forwards ref to root element", () => {
    let refElement: HTMLDivElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(HTMLDivElement);
    expect(refElement).toHaveClass(CHIP_CSS_CLASS_NAMES.base.className);
  });

  it("applies custom className", () => {
    renderWithTheme(
      <Chip data-testid="chip" className="custom-class">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass("custom-class");
  });

  it("spreads additional props to root element", () => {
    renderWithTheme(
      <Chip data-testid="chip" aria-label="Custom chip">
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveAttribute("aria-label", "Custom chip");
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <Chip data-testid="chip" style={(theme) => ({ backgroundColor: theme.semanticColors.success.main })}>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip.style.backgroundColor).toBeTruthy();
  });

  it("has correct default values", () => {
    renderWithTheme(<Chip data-testid="chip">Tag</Chip>);
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.variantFilled.className);
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.sizeMedium.className);
    expect(chip).toHaveClass(CHIP_CSS_CLASS_NAMES.colorDefault.className);
    expect(chip).not.toHaveClass(CHIP_CSS_CLASS_NAMES.disabled.className);
    expect(chip).not.toHaveClass(CHIP_CSS_CLASS_NAMES.selected.className);
    expect(chip).not.toHaveClass(CHIP_CSS_CLASS_NAMES.clickable.className);
  });

  it("has tabIndex when clickable", () => {
    renderWithTheme(
      <Chip data-testid="chip" clickable>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveAttribute("tabIndex", "0");
  });

  it("has tabIndex -1 when clickable and disabled", () => {
    renderWithTheme(
      <Chip data-testid="chip" clickable disabled>
        Tag
      </Chip>,
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveAttribute("tabIndex", "-1");
  });
});
