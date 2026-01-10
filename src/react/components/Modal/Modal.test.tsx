import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BACKDROP_CSS_CLASS_NAMES, COMPONENT_NAMES, MODAL_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Modal from "./Modal";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Modal", () => {
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
      <Modal isOpen={true}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`);
    expect(modal).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  // Does not render when isOpen is false
  it("does not render when isOpen is false", () => {
    renderWithTheme(
      <Modal isOpen={false}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`);
    expect(modal).not.toBeInTheDocument();
  });

  // onClose callback test - backdrop click
  it("calls onClose when backdrop is clicked with closeOnBackdropClick=true", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Modal isOpen={true} onClose={handleClose} closeOnBackdropClick={true}>
        <p>Modal content</p>
      </Modal>,
    );

    // Click on backdrop (not on modal content)
    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    expect(backdrop).toBeInTheDocument();
    fireEvent.click(backdrop!);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // closeOnBackdropClick=false test
  it("does not call onClose when backdrop is clicked with closeOnBackdropClick=false", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Modal isOpen={true} onClose={handleClose} closeOnBackdropClick={false}>
        <p>Modal content</p>
      </Modal>,
    );

    const backdrop = document.querySelector(`.${BACKDROP_CSS_CLASS_NAMES.base.className}`);
    fireEvent.click(backdrop!);

    expect(handleClose).not.toHaveBeenCalled();
  });

  // Click on modal content should not trigger onClose
  it("does not call onClose when clicking on modal content", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Modal isOpen={true} onClose={handleClose}>
        <p data-testid="modal-content">Modal content</p>
      </Modal>,
    );

    const content = screen.getByTestId("modal-content");
    fireEvent.click(content);

    expect(handleClose).not.toHaveBeenCalled();
  });

  // Escape key test - closeOnEscape=true
  it("calls onClose when Escape key is pressed with closeOnEscape=true", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Modal isOpen={true} onClose={handleClose} closeOnEscape={true}>
        <p>Modal content</p>
      </Modal>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // Escape key test - closeOnEscape=false
  it("does not call onClose when Escape key is pressed with closeOnEscape=false", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Modal isOpen={true} onClose={handleClose} closeOnEscape={false}>
        <p>Modal content</p>
      </Modal>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(handleClose).not.toHaveBeenCalled();
  });

  // ModalHeader render test
  it("renders ModalHeader when provided", () => {
    renderWithTheme(
      <Modal isOpen={true} ModalHeader={<h2>Header Title</h2>}>
        <p>Modal content</p>
      </Modal>,
    );

    expect(screen.getByText("Header Title")).toBeInTheDocument();
  });

  // ModalFooter render test
  it("renders ModalFooter when provided", () => {
    renderWithTheme(
      <Modal isOpen={true} ModalFooter={<button>Close</button>}>
        <p>Modal content</p>
      </Modal>,
    );

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  // Children renders inside Card
  it("renders children content", () => {
    renderWithTheme(
      <Modal isOpen={true}>
        <p>Modal content</p>
      </Modal>,
    );

    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  // Custom className test
  it("applies custom className", () => {
    renderWithTheme(
      <Modal isOpen={true} className="custom-modal">
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`);
    expect(modal).toHaveClass("custom-modal");
  });

  // Custom style test
  it("applies custom style", () => {
    renderWithTheme(
      <Modal isOpen={true} style={{ backgroundColor: "red" }}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`);
    expect(modal).toHaveStyle({ backgroundColor: "red" });
  });

  // Theme callback style test
  it("applies style from theme callback", () => {
    renderWithTheme(
      <Modal isOpen={true} style={(theme) => ({ padding: theme.spacing(4) })}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`);
    expect(modal).toHaveStyle({ padding: "16px" });
  });

  // maxWidth test - default
  it("applies default maxWidth (sm)", () => {
    renderWithTheme(
      <Modal isOpen={true}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`) as HTMLElement;
    expect(modal.style.getPropertyValue("--modal-max-width")).toBe(DESIGN_TOKENS.breakpoints.sm.max);
  });

  // maxWidth test - custom breakpoint
  it("applies custom maxWidth breakpoint", () => {
    renderWithTheme(
      <Modal isOpen={true} maxWidth="md">
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`) as HTMLElement;
    expect(modal.style.getPropertyValue("--modal-max-width")).toBe(DESIGN_TOKENS.breakpoints.md.max);
  });

  // maxHeight test - default
  it("applies default maxHeight (80vh)", () => {
    renderWithTheme(
      <Modal isOpen={true}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`) as HTMLElement;
    expect(modal.style.getPropertyValue("--modal-max-height")).toBe("80vh");
  });

  // maxHeight test - custom string
  it("applies custom maxHeight string", () => {
    renderWithTheme(
      <Modal isOpen={true} maxHeight="90vh">
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`) as HTMLElement;
    expect(modal.style.getPropertyValue("--modal-max-height")).toBe("90vh");
  });

  // maxHeight test - custom number (converts to px)
  it("applies custom maxHeight number (converts to px)", () => {
    renderWithTheme(
      <Modal isOpen={true} maxHeight={500}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`) as HTMLElement;
    expect(modal.style.getPropertyValue("--modal-max-height")).toBe("500px");
  });

  // displayName test
  it("has correct displayName", () => {
    expect(Modal.displayName).toBe(COMPONENT_NAMES.Modal);
  });

  // ARIA attributes test
  it("has correct ARIA attributes", () => {
    renderWithTheme(
      <Modal isOpen={true}>
        <p>Modal content</p>
      </Modal>,
    );

    const modal = document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`);
    expect(modal).toHaveAttribute("role", "dialog");
    expect(modal).toHaveAttribute("aria-modal", "true");
  });

  // Toggle visibility test
  it("toggles visibility when isOpen changes", () => {
    const { rerender } = renderWithTheme(
      <Modal isOpen={false}>
        <p>Modal content</p>
      </Modal>,
    );

    expect(document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`)).not.toBeInTheDocument();

    rerender(
      <ThemeProvider>
        <Modal isOpen={true}>
          <p>Modal content</p>
        </Modal>
      </ThemeProvider>,
    );

    expect(document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`)).toBeInTheDocument();

    rerender(
      <ThemeProvider>
        <Modal isOpen={false}>
          <p>Modal content</p>
        </Modal>
      </ThemeProvider>,
    );

    expect(document.querySelector(`.${MODAL_CSS_CLASS_NAMES.base.className}`)).not.toBeInTheDocument();
  });

  // Full modal with header, body, and footer test
  it("renders complete modal with header, body, and footer", () => {
    renderWithTheme(
      <Modal isOpen={true} ModalHeader={<h2>Title</h2>} ModalFooter={<button>Submit</button>}>
        <p>Content</p>
      </Modal>,
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  // Escape key cleanup test
  it("removes keydown listener when modal closes", () => {
    const handleClose = vi.fn();
    const { rerender } = renderWithTheme(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Modal content</p>
      </Modal>,
    );

    // Close modal
    rerender(
      <ThemeProvider>
        <Modal isOpen={false} onClose={handleClose}>
          <p>Modal content</p>
        </Modal>
      </ThemeProvider>,
    );

    // Reset mock
    handleClose.mockClear();

    // Press Escape - should not trigger onClose since modal is closed
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).not.toHaveBeenCalled();
  });
});
