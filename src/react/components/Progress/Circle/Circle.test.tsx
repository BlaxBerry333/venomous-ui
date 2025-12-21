import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it } from "vitest";

import { COMPONENT_NAMES, PROGRESS_CIRCLE_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Circle from "./Circle";

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
      <Circle ref={ref} />
    </ThemeProvider>
  );
}

describe("Progress.Circle", () => {
  it("renders progressbar element", () => {
    renderWithTheme(<Circle />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("applies base className", () => {
    renderWithTheme(<Circle />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.base.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Circle size="small" />
      </ThemeProvider>,
    );
    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Circle size="medium" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Circle size="large" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("applies preset color classNames", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Circle color="primary" />
      </ThemeProvider>,
    );
    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorPrimary.className);

    rerender(
      <ThemeProvider>
        <Circle color="success" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorSuccess.className);

    rerender(
      <ThemeProvider>
        <Circle color="error" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorError.className);

    rerender(
      <ThemeProvider>
        <Circle color="warning" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorWarning.className);

    rerender(
      <ThemeProvider>
        <Circle color="info" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorInfo.className);
  });

  it("applies custom color via inline style on fill circle", () => {
    renderWithTheme(<Circle color="#ff6b6b" value={50} />);
    const progressbar = screen.getByRole("progressbar");
    const fill = progressbar.querySelector(`.${PROGRESS_CIRCLE_CSS_CLASS_NAMES.fill.className}`);
    expect(fill).toHaveStyle({ stroke: "#ff6b6b" });
  });

  it("does not apply preset color className for custom color", () => {
    renderWithTheme(<Circle color="rgb(255, 100, 100)" />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).not.toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorPrimary.className);
    expect(progressbar).not.toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.colorSuccess.className);
  });

  it("sets aria-valuenow based on value prop", () => {
    renderWithTheme(<Circle value={50} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "50");
  });

  it("clamps value between 0 and 100", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Circle value={-10} />
      </ThemeProvider>,
    );
    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "0");

    rerender(
      <ThemeProvider>
        <Circle value={150} />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "100");
  });

  it("shows label when showLabel is true", () => {
    renderWithTheme(<Circle value={75} showLabel />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("shows custom label when provided", () => {
    renderWithTheme(<Circle value={50} showLabel label="Done" />);
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("shows empty label area when animated without custom label", () => {
    renderWithTheme(<Circle animated showLabel />);
    const progressbar = screen.getByRole("progressbar");
    const label = progressbar.querySelector(`.${PROGRESS_CIRCLE_CSS_CLASS_NAMES.label.className}`);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("");
  });

  it("shows custom label when animated with custom label", () => {
    renderWithTheme(<Circle animated showLabel label="Loading..." />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("does not show label when showLabel is false", () => {
    renderWithTheme(<Circle value={50} />);
    const progressbar = screen.getByRole("progressbar");
    const label = progressbar.querySelector(`.${PROGRESS_CIRCLE_CSS_CLASS_NAMES.label.className}`);
    expect(label).not.toBeInTheDocument();
  });

  it("applies animated className when animated prop is true", () => {
    renderWithTheme(<Circle animated />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.animated.className);
  });

  it("removes aria-valuenow when animated", () => {
    renderWithTheme(<Circle animated />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).not.toHaveAttribute("aria-valuenow");
  });

  it("renders SVG element with correct structure", () => {
    renderWithTheme(<Circle value={50} />);
    const progressbar = screen.getByRole("progressbar");
    const svg = progressbar.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.svg.className);

    const track = svg?.querySelector(`.${PROGRESS_CIRCLE_CSS_CLASS_NAMES.track.className}`);
    const fill = svg?.querySelector(`.${PROGRESS_CIRCLE_CSS_CLASS_NAMES.fill.className}`);
    expect(track).toBeInTheDocument();
    expect(fill).toBeInTheDocument();
  });

  it("applies custom className", () => {
    renderWithTheme(<Circle className="custom-class" />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass("custom-class");
  });

  it("has correct displayName", () => {
    expect(Circle.displayName).toBe(COMPONENT_NAMES.ProgressCircle);
  });

  it("sets aria-valuemin and aria-valuemax", () => {
    renderWithTheme(<Circle value={50} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
  });

  it("forwards ref to root element", () => {
    let refElement: HTMLDivElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(HTMLDivElement);
    expect(refElement).toHaveClass(PROGRESS_CIRCLE_CSS_CLASS_NAMES.base.className);
  });

  it("spreads additional props to root element", () => {
    renderWithTheme(<Circle data-testid="custom-circle" />);
    expect(screen.getByTestId("custom-circle")).toBeInTheDocument();
  });

  it("renders label element with correct className", () => {
    renderWithTheme(<Circle value={50} showLabel />);
    const progressbar = screen.getByRole("progressbar");
    const label = progressbar.querySelector(`.${PROGRESS_CIRCLE_CSS_CLASS_NAMES.label.className}`);
    expect(label).toBeInTheDocument();
  });

  it("rounds percentage to nearest integer", () => {
    renderWithTheme(<Circle value={33.7} showLabel />);
    expect(screen.getByText("34%")).toBeInTheDocument();
  });
});
