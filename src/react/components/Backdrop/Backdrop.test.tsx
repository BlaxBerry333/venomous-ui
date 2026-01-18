import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BACKDROP_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Backdrop from "./Backdrop";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Backdrop", () => {
  beforeEach(() => {
    // Clean up any portal containers from previous tests
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
  });

  afterEach(() => {
    // Clean up after each test
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
  });

  // Basic render test - isOpen true
  it("renders when isOpen is true", () => {
    renderWithTheme(<Backdrop isOpen={true} data-testid="backdrop" />);

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toBeInTheDocument();
  });

  // Backdrop is hidden when isOpen is false (still in DOM for animation purposes)
  it("is hidden when isOpen is false", () => {
    renderWithTheme(<Backdrop isOpen={false} />);

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).not.toHaveClass(BACKDROP_CSS_CLASS_NAMES.open.className);
    expect(backdrop).toHaveAttribute("aria-hidden", "true");
  });

  // onClick callback test
  it("calls onClick when backdrop is clicked", () => {
    const handleClick = vi.fn();
    renderWithTheme(<Backdrop isOpen={true} onClick={handleClick} />);

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toBeInTheDocument();

    fireEvent.click(backdrop!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Click on children should not trigger onClick
  it("does not call onClick when clicking on children", () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <Backdrop isOpen={true} onClick={handleClick}>
        <div data-testid="child-content">Child Content</div>
      </Backdrop>,
    );

    const child = screen.getByTestId("child-content");
    fireEvent.click(child);

    expect(handleClick).not.toHaveBeenCalled();
  });

  // Children render test
  it("renders children correctly", () => {
    renderWithTheme(
      <Backdrop isOpen={true}>
        <div data-testid="modal-content">Modal Content</div>
      </Backdrop>,
    );

    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  // Custom className test
  it("applies custom className", () => {
    renderWithTheme(<Backdrop isOpen={true} className="custom-backdrop" />);

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toHaveClass("custom-backdrop");
  });

  // Custom style test
  it("applies custom style", () => {
    renderWithTheme(<Backdrop isOpen={true} style={{ backgroundColor: "red" }} />);

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toHaveStyle({ backgroundColor: "red" });
  });

  // Theme callback style test
  it("applies style from theme callback", () => {
    renderWithTheme(<Backdrop isOpen={true} style={(theme) => ({ zIndex: theme.zIndex("large") })} />);

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toHaveStyle({ zIndex: "300" });
  });

  // displayName test
  it("has correct displayName", () => {
    expect(Backdrop.displayName).toBe(COMPONENT_NAMES.Backdrop);
  });

  // Portal render test - should be rendered to body
  it("renders through Portal to document.body", () => {
    renderWithTheme(
      <div data-testid="parent">
        <Backdrop isOpen={true}>
          <div data-testid="backdrop-content">Content</div>
        </Backdrop>
      </div>,
    );

    const parent = screen.getByTestId("parent");
    const backdropContent = screen.getByTestId("backdrop-content");

    // Backdrop content should not be inside parent
    expect(parent.contains(backdropContent)).toBe(false);

    // Should be rendered in portal container
    const portalContainer = document.querySelector(`[data-portal="${COMPONENT_NAMES.Portal}"]`);
    expect(portalContainer).toBeInTheDocument();
    expect(portalContainer?.contains(backdropContent)).toBe(true);
  });

  // Toggle visibility test - checks open class toggling
  it("toggles open class when isOpen changes", () => {
    const { rerender } = renderWithTheme(<Backdrop isOpen={false} />);

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).not.toHaveClass(BACKDROP_CSS_CLASS_NAMES.open.className);

    rerender(
      <ThemeProvider>
        <Backdrop isOpen={true} />
      </ThemeProvider>,
    );

    expect(backdrop).toHaveClass(BACKDROP_CSS_CLASS_NAMES.open.className);

    rerender(
      <ThemeProvider>
        <Backdrop isOpen={false} />
      </ThemeProvider>,
    );

    expect(backdrop).not.toHaveClass(BACKDROP_CSS_CLASS_NAMES.open.className);
  });
});
