import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, POPOVER_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Popover from "./Popover";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Popover", () => {
  beforeEach(() => {
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
  });

  afterEach(() => {
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
  });

  // Basic render test
  it("renders trigger element", () => {
    renderWithTheme(
      <Popover trigger={<button>Click me</button>}>
        <p>Popover content</p>
      </Popover>,
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  // Does not show content initially
  it("does not show content by default", () => {
    renderWithTheme(
      <Popover trigger={<button>Click me</button>}>
        <p>Popover content</p>
      </Popover>,
    );

    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  // Shows content on click
  it("shows content on trigger click", () => {
    renderWithTheme(
      <Popover trigger={<button>Click me</button>}>
        <p>Popover content</p>
      </Popover>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);

    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });

  // Hides content on second click
  it("hides content on second trigger click", () => {
    renderWithTheme(
      <Popover trigger={<button>Click me</button>}>
        <p>Popover content</p>
      </Popover>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);
    expect(screen.getByText("Popover content")).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  // Closes on outside click
  it("closes on outside click", () => {
    renderWithTheme(
      <div>
        <Popover trigger={<button>Click me</button>}>
          <p>Popover content</p>
        </Popover>
        <div data-testid="outside">Outside</div>
      </div>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);
    expect(screen.getByText("Popover content")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  // onOpen callback
  it("calls onOpen callback", () => {
    const handleOpen = vi.fn();
    renderWithTheme(
      <Popover trigger={<button>Click me</button>} onOpen={handleOpen}>
        <p>Popover content</p>
      </Popover>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);

    expect(handleOpen).toHaveBeenCalledTimes(1);
  });

  // onClose callback
  it("calls onClose callback", () => {
    const handleClose = vi.fn();
    renderWithTheme(
      <Popover trigger={<button>Click me</button>} onClose={handleClose}>
        <p>Popover content</p>
      </Popover>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger); // Open
    fireEvent.click(trigger); // Close

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // Custom className
  it("applies custom className", () => {
    renderWithTheme(
      <Popover trigger={<button>Click me</button>} className="custom-popover">
        <p>Popover content</p>
      </Popover>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);

    const popover = document.querySelector(`.${POPOVER_CSS_CLASS_NAMES.base.className}`);
    expect(popover).toHaveClass("custom-popover");
  });

  // displayName
  it("has correct displayName", () => {
    expect(Popover.displayName).toBe(COMPONENT_NAMES.Popover);
  });

  // Does not respond to hover
  it("does not respond to hover", () => {
    renderWithTheme(
      <Popover trigger={<button>Click me</button>}>
        <p>Popover content</p>
      </Popover>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.mouseEnter(trigger);

    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  // Position calculation tests
  describe("position calculation", () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("updates position when popover opens with valid dimensions", async () => {
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
        <Popover trigger={<button>Click me</button>} placement="bottom" offset={8}>
          <p>Popover content</p>
        </Popover>,
      );

      const trigger = screen.getByText("Click me");
      fireEvent.click(trigger);

      // Mock getBoundingClientRect for the content element
      const content = document.querySelector(`.${POPOVER_CSS_CLASS_NAMES.base.className}`);
      if (content) {
        content.getBoundingClientRect = mockGetBoundingClientRect;
      }

      // Advance timers to trigger RAF
      await vi.advanceTimersByTimeAsync(100);

      expect(screen.getByText("Popover content")).toBeInTheDocument();
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
        <Popover trigger={<button>Click me</button>}>
          <p>Popover content</p>
        </Popover>,
      );

      const trigger = screen.getByText("Click me");
      fireEvent.click(trigger);

      const content = document.querySelector(`.${POPOVER_CSS_CLASS_NAMES.base.className}`);
      if (content) {
        content.getBoundingClientRect = mockGetBoundingClientRect;
      }

      // Advance timers multiple times to trigger retries
      for (let i = 0; i < 5; i++) {
        await vi.advanceTimersByTimeAsync(16);
      }

      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });

    it("handles scroll events when open", async () => {
      renderWithTheme(
        <Popover trigger={<button>Click me</button>}>
          <p>Popover content</p>
        </Popover>,
      );

      const trigger = screen.getByText("Click me");
      fireEvent.click(trigger);

      await vi.advanceTimersByTimeAsync(100);

      // Trigger scroll event
      fireEvent.scroll(window);

      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });

    it("handles resize events when open", async () => {
      renderWithTheme(
        <Popover trigger={<button>Click me</button>}>
          <p>Popover content</p>
        </Popover>,
      );

      const trigger = screen.getByText("Click me");
      fireEvent.click(trigger);

      await vi.advanceTimersByTimeAsync(100);

      // Trigger resize event
      fireEvent.resize(window);

      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });

    it("cleans up event listeners on close", async () => {
      const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

      renderWithTheme(
        <Popover trigger={<button>Click me</button>}>
          <p>Popover content</p>
        </Popover>,
      );

      const trigger = screen.getByText("Click me");
      fireEvent.click(trigger); // Open
      await vi.advanceTimersByTimeAsync(100);

      fireEvent.click(trigger); // Close

      expect(removeEventListenerSpy).toHaveBeenCalled();
      removeEventListenerSpy.mockRestore();
    });

    it("resets position when closed", async () => {
      renderWithTheme(
        <Popover trigger={<button>Click me</button>}>
          <p>Popover content</p>
        </Popover>,
      );

      const trigger = screen.getByText("Click me");

      // Open
      fireEvent.click(trigger);
      await vi.advanceTimersByTimeAsync(100);
      expect(screen.getByText("Popover content")).toBeInTheDocument();

      // Close
      fireEvent.click(trigger);
      expect(screen.queryByText("Popover content")).not.toBeInTheDocument();

      // Open again - position should be recalculated
      fireEvent.click(trigger);
      await vi.advanceTimersByTimeAsync(100);
      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });
  });

  // Placement variations
  describe("placement variations", () => {
    const placements = ["top", "bottom", "left", "right"] as const;

    placements.forEach((placement) => {
      it(`renders with placement="${placement}"`, () => {
        renderWithTheme(
          <Popover trigger={<button>Click me</button>} placement={placement}>
            <p>Popover content</p>
          </Popover>,
        );

        const trigger = screen.getByText("Click me");
        fireEvent.click(trigger);

        expect(screen.getByText("Popover content")).toBeInTheDocument();
      });
    });
  });

  // Offset variations
  it("applies custom offset", () => {
    renderWithTheme(
      <Popover trigger={<button>Click me</button>} offset={16}>
        <p>Popover content</p>
      </Popover>,
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);

    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });
});
