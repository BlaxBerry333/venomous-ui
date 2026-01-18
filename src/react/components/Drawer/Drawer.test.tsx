import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BACKDROP_CSS_CLASS_NAMES, COMPONENT_NAMES, DRAWER_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Drawer from "./Drawer";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Drawer", () => {
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
    renderWithTheme(
      <Drawer isOpen={true}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toBeInTheDocument();
    expect(screen.getByText("Drawer content")).toBeInTheDocument();
  });

  // Drawer is hidden when isOpen is false (still in DOM for animation purposes)
  it("is hidden when isOpen is false", () => {
    renderWithTheme(
      <Drawer isOpen={false}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveAttribute("data-open", "false");
  });

  // Default anchor is left
  it("applies left anchor by default", () => {
    renderWithTheme(
      <Drawer isOpen={true}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveClass(DRAWER_CSS_CLASS_NAMES.anchorLeft.className);
  });

  // Anchor right test
  it("applies right anchor class", () => {
    renderWithTheme(
      <Drawer isOpen={true} anchor="right">
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveClass(DRAWER_CSS_CLASS_NAMES.anchorRight.className);
  });

  // Anchor top test
  it("applies top anchor class", () => {
    renderWithTheme(
      <Drawer isOpen={true} anchor="top">
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveClass(DRAWER_CSS_CLASS_NAMES.anchorTop.className);
  });

  // Anchor bottom test
  it("applies bottom anchor class", () => {
    renderWithTheme(
      <Drawer isOpen={true} anchor="bottom">
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveClass(DRAWER_CSS_CLASS_NAMES.anchorBottom.className);
  });

  // data-open attribute test
  it("sets data-open attribute correctly", () => {
    renderWithTheme(
      <Drawer isOpen={true}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveAttribute("data-open", "true");
  });

  // onClose callback test - backdrop click
  it("calls onClose when backdrop is clicked with closeOnBackdropClick=true", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Drawer isOpen={true} onClose={handleClose} closeOnBackdropClick={true}>
        <p>Drawer content</p>
      </Drawer>,
    );

    // Click on backdrop (not on drawer content)
    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toBeInTheDocument();
    fireEvent.click(backdrop!);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // closeOnBackdropClick=false test
  it("does not call onClose when backdrop is clicked with closeOnBackdropClick=false", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Drawer isOpen={true} onClose={handleClose} closeOnBackdropClick={false}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    fireEvent.click(backdrop!);

    expect(handleClose).not.toHaveBeenCalled();
  });

  // Click on drawer content should not trigger onClose
  it("does not call onClose when clicking on drawer content", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Drawer isOpen={true} onClose={handleClose}>
        <p data-testid="drawer-content">Drawer content</p>
      </Drawer>,
    );

    const content = screen.getByTestId("drawer-content");
    fireEvent.click(content);

    expect(handleClose).not.toHaveBeenCalled();
  });

  // Escape key test - closeOnEscape=true
  it("calls onClose when Escape key is pressed with closeOnEscape=true", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Drawer isOpen={true} onClose={handleClose} closeOnEscape={true}>
        <p>Drawer content</p>
      </Drawer>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // Escape key test - closeOnEscape=false
  it("does not call onClose when Escape key is pressed with closeOnEscape=false", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Drawer isOpen={true} onClose={handleClose} closeOnEscape={false}>
        <p>Drawer content</p>
      </Drawer>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(handleClose).not.toHaveBeenCalled();
  });

  // DrawerHeader render test
  it("renders DrawerHeader when provided", () => {
    renderWithTheme(
      <Drawer isOpen={true} DrawerHeader={<h2>Header Title</h2>}>
        <p>Drawer content</p>
      </Drawer>,
    );

    expect(screen.getByText("Header Title")).toBeInTheDocument();
  });

  // DrawerFooter render test
  it("renders DrawerFooter when provided", () => {
    renderWithTheme(
      <Drawer isOpen={true} DrawerFooter={<button>Close</button>}>
        <p>Drawer content</p>
      </Drawer>,
    );

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  // Children renders
  it("renders children content", () => {
    renderWithTheme(
      <Drawer isOpen={true}>
        <p>Drawer content</p>
      </Drawer>,
    );

    expect(screen.getByText("Drawer content")).toBeInTheDocument();
  });

  // Custom className test
  it("applies custom className", () => {
    renderWithTheme(
      <Drawer isOpen={true} className="custom-drawer">
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveClass("custom-drawer");
  });

  // Custom style test
  it("applies custom style", () => {
    renderWithTheme(
      <Drawer isOpen={true} style={{ backgroundColor: "red" }}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveStyle({ backgroundColor: "red" });
  });

  // Theme callback style test
  it("applies style from theme callback", () => {
    renderWithTheme(
      <Drawer isOpen={true} style={(theme) => ({ padding: theme.spacing(4) })}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveStyle({ padding: "16px" });
  });

  // displayName test
  it("has correct displayName", () => {
    expect(Drawer.displayName).toBe(COMPONENT_NAMES.Drawer);
  });

  // ARIA attributes test
  it("has correct ARIA attributes", () => {
    renderWithTheme(
      <Drawer isOpen={true}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveAttribute("role", "dialog");
    expect(drawer).toHaveAttribute("aria-modal", "true");
  });

  // Toggle data-open attribute when isOpen changes
  it("toggles data-open attribute when isOpen changes", () => {
    const { rerender } = renderWithTheme(
      <Drawer isOpen={false}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveAttribute("data-open", "false");

    rerender(
      <ThemeProvider>
        <Drawer isOpen={true}>
          <p>Drawer content</p>
        </Drawer>
      </ThemeProvider>,
    );

    expect(drawer).toHaveAttribute("data-open", "true");

    rerender(
      <ThemeProvider>
        <Drawer isOpen={false}>
          <p>Drawer content</p>
        </Drawer>
      </ThemeProvider>,
    );

    expect(drawer).toHaveAttribute("data-open", "false");
  });

  // Full drawer with header, body, and footer test
  it("renders complete drawer with header, body, and footer", () => {
    renderWithTheme(
      <Drawer isOpen={true} DrawerHeader={<h2>Title</h2>} DrawerFooter={<button>Submit</button>}>
        <p>Content</p>
      </Drawer>,
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  // Escape key cleanup test
  it("removes keydown listener when drawer closes", () => {
    const handleClose = vi.fn();
    const { rerender } = renderWithTheme(
      <Drawer isOpen={true} onClose={handleClose}>
        <p>Drawer content</p>
      </Drawer>,
    );

    // Close drawer
    rerender(
      <ThemeProvider>
        <Drawer isOpen={false} onClose={handleClose}>
          <p>Drawer content</p>
        </Drawer>
      </ThemeProvider>,
    );

    // Reset mock
    handleClose.mockClear();

    // Press Escape - should not trigger onClose since drawer is closed
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).not.toHaveBeenCalled();
  });

  // Custom width style for left/right anchors
  it("applies custom width via style for left anchor", () => {
    renderWithTheme(
      <Drawer isOpen={true} anchor="left" style={{ width: "400px" }}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveStyle({ width: "400px" });
  });

  // Custom height style for top/bottom anchors
  it("applies custom height via style for bottom anchor", () => {
    renderWithTheme(
      <Drawer isOpen={true} anchor="bottom" style={{ height: "300px" }}>
        <p>Drawer content</p>
      </Drawer>,
    );

    const drawer = document.querySelector(`.${DRAWER_CSS_CLASS_NAMES.base.className}`);
    expect(drawer).toHaveStyle({ height: "300px" });
  });
});
