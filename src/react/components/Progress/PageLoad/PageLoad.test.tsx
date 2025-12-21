import { act, render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import PageLoad from "./PageLoad";

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
      <PageLoad ref={ref} />
    </ThemeProvider>
  );
}

describe("Progress.PageLoad", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders progressbar element", () => {
    renderWithTheme(<PageLoad />);
    expect(screen.getByRole("progressbar", { hidden: true })).toBeInTheDocument();
  });

  it("applies base className", () => {
    renderWithTheme(<PageLoad />);
    const progressbar = screen.getByRole("progressbar", { hidden: true });
    expect(progressbar).toHaveClass(PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.base.className);
  });

  it("is hidden by default (not loading)", () => {
    renderWithTheme(<PageLoad />);
    const progressbar = screen.getByRole("progressbar", { hidden: true });
    expect(progressbar).not.toHaveClass(PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.active.className);
    expect(progressbar).toHaveAttribute("aria-hidden", "true");
  });

  it("shows active state when isLoading is true", () => {
    renderWithTheme(<PageLoad isLoading />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.active.className);
    expect(progressbar).toHaveAttribute("aria-hidden", "false");
  });

  it("uses value prop for determinate progress", () => {
    renderWithTheme(<PageLoad isLoading value={75} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "75");
  });

  it("clamps value between 0 and 100", () => {
    const { rerender } = render(
      <ThemeProvider>
        <PageLoad isLoading value={-10} />
      </ThemeProvider>,
    );
    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "0");

    rerender(
      <ThemeProvider>
        <PageLoad isLoading value={150} />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "100");
  });

  it("applies custom className", () => {
    renderWithTheme(<PageLoad className="custom-class" />);
    const progressbar = screen.getByRole("progressbar", { hidden: true });
    expect(progressbar).toHaveClass("custom-class");
  });

  it("has correct displayName", () => {
    expect(PageLoad.displayName).toBe(COMPONENT_NAMES.ProgressPageLoad);
  });

  it("sets aria-valuemin and aria-valuemax", () => {
    renderWithTheme(<PageLoad isLoading />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
  });

  it("renders bar element", () => {
    renderWithTheme(<PageLoad />);
    const progressbar = screen.getByRole("progressbar", { hidden: true });
    const bar = progressbar.querySelector(`.${PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.bar.className}`);
    expect(bar).toBeInTheDocument();
  });

  it("forwards ref to root element", () => {
    let refElement: HTMLDivElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(HTMLDivElement);
    expect(refElement).toHaveClass(PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.base.className);
  });

  it("spreads additional props to root element", () => {
    renderWithTheme(<PageLoad data-testid="custom-pageload" />);
    expect(screen.getByTestId("custom-pageload")).toBeInTheDocument();
  });

  it("sets bar width based on progress value", () => {
    renderWithTheme(<PageLoad isLoading value={50} />);
    const progressbar = screen.getByRole("progressbar");
    const bar = progressbar.querySelector(`.${PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.bar.className}`);
    expect(bar).toHaveStyle({ width: "50%" });
  });

  it("simulates progress in indeterminate mode", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    renderWithTheme(<PageLoad isLoading />);
    const progressbar = screen.getByRole("progressbar");

    // Initial state
    expect(progressbar).toHaveAttribute("aria-valuenow", "0");

    // After first interval tick (200ms)
    act(() => {
      vi.advanceTimersByTime(200);
    });

    // Progress should have increased (0.5 * 10 = 5)
    expect(progressbar).toHaveAttribute("aria-valuenow", "5");

    vi.restoreAllMocks();
  });

  it("stops at 90% in indeterminate mode", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    renderWithTheme(<PageLoad isLoading />);
    const progressbar = screen.getByRole("progressbar");

    // Advance time enough to reach 90%
    act(() => {
      vi.advanceTimersByTime(4000);
    });

    // Should cap at 90
    expect(Number(progressbar.getAttribute("aria-valuenow"))).toBeLessThanOrEqual(90);

    vi.restoreAllMocks();
  });

  it("completes to 100% and hides after loading stops", () => {
    const { rerender } = render(
      <ThemeProvider>
        <PageLoad isLoading />
      </ThemeProvider>,
    );

    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.active.className);

    // Stop loading
    rerender(
      <ThemeProvider>
        <PageLoad isLoading={false} />
      </ThemeProvider>,
    );

    // Should immediately show 100%
    expect(progressbar).toHaveAttribute("aria-valuenow", "100");

    // After 300ms timeout, should hide
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(progressbar).not.toHaveClass(PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.active.className);
  });

  it("updates progress when value prop changes", () => {
    const { rerender } = render(
      <ThemeProvider>
        <PageLoad isLoading value={25} />
      </ThemeProvider>,
    );

    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "25");

    rerender(
      <ThemeProvider>
        <PageLoad isLoading value={75} />
      </ThemeProvider>,
    );

    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "75");
  });

  it("cleans up intervals on unmount", () => {
    const clearIntervalSpy = vi.spyOn(global, "clearInterval");
    const { unmount } = renderWithTheme(<PageLoad isLoading />);

    // Advance time to create interval
    act(() => {
      vi.advanceTimersByTime(200);
    });

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
