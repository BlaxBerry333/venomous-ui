import { act, fireEvent, render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import ScrollIndicator from "./ScrollIndicator";

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
      <ScrollIndicator ref={ref} />
    </ThemeProvider>
  );
}

describe("Progress.ScrollIndicator", () => {
  beforeEach(() => {
    // Mock window scroll properties
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
    Object.defineProperty(window, "innerHeight", { value: 800, writable: true });
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 2000, writable: true });
    Object.defineProperty(document.documentElement, "scrollTop", { value: 0, writable: true });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders progressbar element", () => {
    renderWithTheme(<ScrollIndicator />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("applies base className", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES.base.className);
  });

  it("renders bar element", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");
    const bar = progressbar.querySelector(`.${PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES.bar.className}`);
    expect(bar).toBeInTheDocument();
  });

  it("applies custom className", () => {
    renderWithTheme(<ScrollIndicator className="custom-class" />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass("custom-class");
  });

  it("has correct displayName", () => {
    expect(ScrollIndicator.displayName).toBe(COMPONENT_NAMES.ProgressScrollIndicator);
  });

  it("sets aria-valuemin and aria-valuemax", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
  });

  it("has aria-label for accessibility", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-label", "Reading progress");
  });

  it("starts with 0 progress at page top", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "0");
  });

  it("forwards ref to root element", () => {
    let refElement: HTMLDivElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(HTMLDivElement);
    expect(refElement).toHaveClass(PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES.base.className);
  });

  it("spreads additional props to root element", () => {
    renderWithTheme(<ScrollIndicator data-testid="custom-scroll-indicator" />);
    expect(screen.getByTestId("custom-scroll-indicator")).toBeInTheDocument();
  });

  it("sets bar transform based on scroll progress", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");
    const bar = progressbar.querySelector(`.${PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES.bar.className}`);
    expect(bar).toHaveStyle({ transform: "scaleX(0)" });
  });

  it("updates progress on window scroll", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");

    // Simulate scroll to 50%
    Object.defineProperty(window, "scrollY", { value: 600, writable: true });

    act(() => {
      fireEvent.scroll(window);
    });

    expect(progressbar).toHaveAttribute("aria-valuenow", "50");
  });

  it("handles scroll to bottom (100%)", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");

    // Simulate scroll to bottom (scrollHeight - innerHeight = 1200)
    Object.defineProperty(window, "scrollY", { value: 1200, writable: true });

    act(() => {
      fireEvent.scroll(window);
    });

    expect(progressbar).toHaveAttribute("aria-valuenow", "100");
  });

  it("handles page with no scrollable content", () => {
    // Page content fits in viewport
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 800, writable: true });

    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).toHaveAttribute("aria-valuenow", "0");
  });

  it("works with custom target element", () => {
    const targetElement = document.createElement("div");
    Object.defineProperty(targetElement, "scrollTop", { value: 100, writable: true });
    Object.defineProperty(targetElement, "scrollHeight", { value: 500, writable: true });
    Object.defineProperty(targetElement, "clientHeight", { value: 200, writable: true });

    renderWithTheme(<ScrollIndicator target={targetElement} />);
    const progressbar = screen.getByRole("progressbar");

    // 100 / (500 - 200) = 100 / 300 = 33.33%
    expect(progressbar).toHaveAttribute("aria-valuenow", "33");
  });

  it("clamps progress between 0 and 100", () => {
    renderWithTheme(<ScrollIndicator />);
    const progressbar = screen.getByRole("progressbar");

    // Even if somehow scrollY exceeds max
    Object.defineProperty(window, "scrollY", { value: 2000, writable: true });

    act(() => {
      fireEvent.scroll(window);
    });

    expect(Number(progressbar.getAttribute("aria-valuenow"))).toBeLessThanOrEqual(100);
  });

  it("removes scroll listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderWithTheme(<ScrollIndicator />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  });

  it("adds scroll listener with passive option", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");
    renderWithTheme(<ScrollIndicator />);

    expect(addEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function), { passive: true });
  });
});
