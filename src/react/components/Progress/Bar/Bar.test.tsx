import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it } from "vitest";

import { COMPONENT_NAMES, PROGRESS_BAR_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Bar from "./Bar";

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
      <Bar ref={ref} />
    </ThemeProvider>
  );
}

describe("Progress.Bar", () => {
  it("renders progressbar element", () => {
    renderWithTheme(<Bar />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("applies base className", () => {
    renderWithTheme(<Bar />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.base.className);
  });

  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Bar size="small" />
      </ThemeProvider>,
    );
    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Bar size="medium" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Bar size="large" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("applies preset color classNames", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Bar color="primary" />
      </ThemeProvider>,
    );
    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.colorPrimary.className);

    rerender(
      <ThemeProvider>
        <Bar color="success" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.colorSuccess.className);

    rerender(
      <ThemeProvider>
        <Bar color="error" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.colorError.className);

    rerender(
      <ThemeProvider>
        <Bar color="warning" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.colorWarning.className);

    rerender(
      <ThemeProvider>
        <Bar color="info" />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.colorInfo.className);
  });

  it("applies custom color via inline style", () => {
    renderWithTheme(<Bar color="#ff6b6b" value={50} />);
    const progressbar = screen.getByRole("progressbar");
    const fill = progressbar.querySelector(`.${PROGRESS_BAR_CSS_CLASS_NAMES.fill.className}`);
    expect(fill).toHaveStyle({ backgroundColor: "#ff6b6b" });
  });

  it("does not apply preset color className for custom color", () => {
    renderWithTheme(<Bar color="rgb(255, 100, 100)" />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).not.toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.colorPrimary.className);
    expect(progressbar).not.toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.colorSuccess.className);
  });

  it("sets aria-valuenow based on value prop", () => {
    renderWithTheme(<Bar value={50} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "50");
  });

  it("clamps value between 0 and 100", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Bar value={-10} />
      </ThemeProvider>,
    );
    let progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "0");

    rerender(
      <ThemeProvider>
        <Bar value={150} />
      </ThemeProvider>,
    );
    progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "100");
  });

  it("applies animated className when animated prop is true", () => {
    renderWithTheme(<Bar animated />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.animated.className);
  });

  it("removes aria-valuenow when animated", () => {
    renderWithTheme(<Bar animated />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).not.toHaveAttribute("aria-valuenow");
  });

  it("applies custom className", () => {
    renderWithTheme(<Bar className="custom-class" />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveClass("custom-class");
  });

  it("has correct displayName", () => {
    expect(Bar.displayName).toBe(COMPONENT_NAMES.ProgressBar);
  });

  it("sets aria-valuemin and aria-valuemax", () => {
    renderWithTheme(<Bar value={50} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
  });

  it("renders track and fill elements", () => {
    renderWithTheme(<Bar value={50} />);
    const progressbar = screen.getByRole("progressbar");
    const track = progressbar.querySelector(`.${PROGRESS_BAR_CSS_CLASS_NAMES.track.className}`);
    const fill = progressbar.querySelector(`.${PROGRESS_BAR_CSS_CLASS_NAMES.fill.className}`);
    expect(track).toBeInTheDocument();
    expect(fill).toBeInTheDocument();
  });

  it("sets fill width based on value", () => {
    renderWithTheme(<Bar value={75} />);
    const progressbar = screen.getByRole("progressbar");
    const fill = progressbar.querySelector(`.${PROGRESS_BAR_CSS_CLASS_NAMES.fill.className}`);
    expect(fill).toHaveStyle({ width: "75%" });
  });

  it("forwards ref to root element", () => {
    let refElement: HTMLDivElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(HTMLDivElement);
    expect(refElement).toHaveClass(PROGRESS_BAR_CSS_CLASS_NAMES.base.className);
  });

  it("spreads additional props to root element", () => {
    renderWithTheme(<Bar data-testid="custom-bar" />);
    expect(screen.getByTestId("custom-bar")).toBeInTheDocument();
  });
});
