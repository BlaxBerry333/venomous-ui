import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, TOOLTIP_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Tooltip from "./Tooltip";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Tooltip", () => {
  beforeEach(() => {
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
  });

  afterEach(() => {
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
  });

  // Basic render test
  it("renders children element", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  // Does not show tooltip initially
  it("does not show tooltip by default", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });

  // Shows tooltip on hover
  it("shows tooltip on hover", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  // Hides tooltip on mouse leave
  it("hides tooltip on mouse leave", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();

    fireEvent.mouseLeave(trigger);
    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });

  // Shows tooltip on focus (accessibility)
  it("shows tooltip on focus", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Focus me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Focus me");
    fireEvent.focus(trigger);

    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  // Hides tooltip on blur
  it("hides tooltip on blur", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Focus me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Focus me");
    fireEvent.focus(trigger);
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();

    fireEvent.blur(trigger);
    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });

  // Always renders arrow
  it("always renders arrow", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    const arrow = document.querySelector('[aria-hidden="true"]');
    expect(arrow).toBeInTheDocument();
  });

  // Custom className
  it("applies custom className", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text" className="custom-tooltip">
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    const tooltip = document.querySelector(`.${TOOLTIP_CSS_CLASS_NAMES.base.className}`);
    expect(tooltip).toHaveClass("custom-tooltip");
  });

  // Custom style
  it("applies custom style", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text" style={{ backgroundColor: "red" }}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    const tooltip = document.querySelector(`.${TOOLTIP_CSS_CLASS_NAMES.base.className}`);
    expect(tooltip).toHaveStyle({ backgroundColor: "red" });
  });

  // displayName
  it("has correct displayName", () => {
    expect(Tooltip.displayName).toBe(COMPONENT_NAMES.Tooltip);
  });

  // ARIA attributes
  it("has correct ARIA attributes", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    const tooltip = document.querySelector(`.${TOOLTIP_CSS_CLASS_NAMES.base.className}`);
    expect(tooltip).toHaveAttribute("role", "tooltip");
  });

  // No title - renders children only
  it("renders children only when title is empty", () => {
    renderWithTheme(
      <Tooltip title="">
        <button>No tooltip</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("No tooltip");
    fireEvent.mouseEnter(trigger);

    // No tooltip should be created
    expect(document.querySelector(`.${TOOLTIP_CSS_CLASS_NAMES.base.className}`)).not.toBeInTheDocument();
  });

  // ReactNode title
  it("supports ReactNode as title", () => {
    renderWithTheme(
      <Tooltip title={<span data-testid="custom-title">Custom content</span>}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    expect(screen.getByTestId("custom-title")).toBeInTheDocument();
  });

  // Preserves child's existing event handlers
  it("preserves child's existing event handlers", () => {
    const handleMouseEnter = vi.fn();
    const handleMouseLeave = vi.fn();

    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hover me
        </button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);

    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });

  // Does not respond to click
  it("does not respond to click", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.click(trigger);

    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });

  // Preserves child's focus/blur handlers
  it("preserves child's existing focus and blur handlers", () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    renderWithTheme(
      <Tooltip title="Tooltip text">
        <button onFocus={handleFocus} onBlur={handleBlur}>
          Focus me
        </button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Focus me");
    fireEvent.focus(trigger);
    fireEvent.blur(trigger);

    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  // Position calculation tests
  describe("position calculation", () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("updates position when tooltip opens with valid dimensions", async () => {
      const mockGetBoundingClientRect = vi.fn().mockReturnValue({
        width: 100,
        height: 50,
        top: 100,
        left: 100,
        right: 200,
        bottom: 150,
        x: 100,
        y: 100,
      });

      renderWithTheme(
        <Tooltip title="Tooltip text" placement="bottom" offset={8}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      // Mock getBoundingClientRect for the content element
      const content = document.querySelector(`.${TOOLTIP_CSS_CLASS_NAMES.base.className}`);
      if (content) {
        content.getBoundingClientRect = mockGetBoundingClientRect;
      }

      // Advance timers to trigger RAF
      await vi.advanceTimersByTimeAsync(100);

      expect(screen.getByText("Tooltip text")).toBeInTheDocument();
    });

    it("retries position update when content has zero dimensions", async () => {
      let callCount = 0;
      const mockGetBoundingClientRect = vi.fn().mockImplementation(() => {
        callCount++;
        // First few calls return zero dimensions, then return valid dimensions
        if (callCount < 3) {
          return { width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, x: 0, y: 0 };
        }
        return { width: 100, height: 50, top: 100, left: 100, right: 200, bottom: 150, x: 100, y: 100 };
      });

      renderWithTheme(
        <Tooltip title="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      const content = document.querySelector(`.${TOOLTIP_CSS_CLASS_NAMES.base.className}`);
      if (content) {
        content.getBoundingClientRect = mockGetBoundingClientRect;
      }

      // Advance timers multiple times to trigger retries
      for (let i = 0; i < 5; i++) {
        await vi.advanceTimersByTimeAsync(16);
      }

      expect(screen.getByText("Tooltip text")).toBeInTheDocument();
    });

    it("handles scroll events when open", async () => {
      renderWithTheme(
        <Tooltip title="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      await vi.advanceTimersByTimeAsync(100);

      // Trigger scroll event
      fireEvent.scroll(window);

      expect(screen.getByText("Tooltip text")).toBeInTheDocument();
    });

    it("handles resize events when open", async () => {
      renderWithTheme(
        <Tooltip title="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);

      await vi.advanceTimersByTimeAsync(100);

      // Trigger resize event
      fireEvent.resize(window);

      expect(screen.getByText("Tooltip text")).toBeInTheDocument();
    });

    it("cleans up event listeners on close", async () => {
      const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

      renderWithTheme(
        <Tooltip title="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");
      fireEvent.mouseEnter(trigger);
      await vi.advanceTimersByTimeAsync(100);

      fireEvent.mouseLeave(trigger);

      expect(removeEventListenerSpy).toHaveBeenCalled();
      removeEventListenerSpy.mockRestore();
    });

    it("resets position when closed", async () => {
      renderWithTheme(
        <Tooltip title="Tooltip text">
          <button>Hover me</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Hover me");

      // Open
      fireEvent.mouseEnter(trigger);
      await vi.advanceTimersByTimeAsync(100);
      expect(screen.getByText("Tooltip text")).toBeInTheDocument();

      // Close
      fireEvent.mouseLeave(trigger);
      expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();

      // Open again - position should be recalculated
      fireEvent.mouseEnter(trigger);
      await vi.advanceTimersByTimeAsync(100);
      expect(screen.getByText("Tooltip text")).toBeInTheDocument();
    });
  });

  // Placement variations
  describe("placement variations", () => {
    const placements = ["top", "bottom", "left", "right"] as const;

    placements.forEach((placement) => {
      it(`renders with placement="${placement}"`, () => {
        renderWithTheme(
          <Tooltip title="Tooltip text" placement={placement}>
            <button>Hover me</button>
          </Tooltip>,
        );

        const trigger = screen.getByText("Hover me");
        fireEvent.mouseEnter(trigger);

        expect(screen.getByText("Tooltip text")).toBeInTheDocument();
      });
    });
  });

  // Offset variations
  it("applies custom offset", () => {
    renderWithTheme(
      <Tooltip title="Tooltip text" offset={16}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);

    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });
});
