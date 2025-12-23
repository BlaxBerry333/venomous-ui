import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it } from "vitest";

import { BADGE_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Badge from "./Badge";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

function RefTestWrapper({ onRef }: { onRef: (el: HTMLSpanElement | null) => void }) {
  const ref = useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    onRef(ref.current);
  }, [onRef]);
  return (
    <ThemeProvider>
      <Badge ref={ref} content={5}>
        <span>Test</span>
      </Badge>
    </ThemeProvider>
  );
}

describe("Badge", () => {
  it("renders with children", () => {
    renderWithTheme(
      <Badge content={5}>
        <span data-testid="child">Child</span>
      </Badge>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("applies root className", () => {
    renderWithTheme(
      <Badge data-testid="badge" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.root.className);
  });

  it("renders badge element", () => {
    renderWithTheme(
      <Badge content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badgeElement = document.querySelector(`.${BADGE_CSS_CLASS_NAMES.badge.className}`);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent("5");
  });

  it("applies variant className - standard", () => {
    renderWithTheme(
      <Badge data-testid="badge" variant="standard" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.variantStandard.className);
  });

  it("applies variant className - dot", () => {
    renderWithTheme(
      <Badge data-testid="badge" variant="dot">
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.variantDot.className);
  });

  it("dot variant does not show content", () => {
    renderWithTheme(
      <Badge variant="dot" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badgeElement = document.querySelector(`.${BADGE_CSS_CLASS_NAMES.badge.className}`);
    expect(badgeElement).toHaveTextContent("");
  });

  it("applies size className - small", () => {
    renderWithTheme(
      <Badge data-testid="badge" size="small" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.sizeSmall.className);
  });

  it("applies size className - medium", () => {
    renderWithTheme(
      <Badge data-testid="badge" size="medium" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.sizeMedium.className);
  });

  it("applies size className - large", () => {
    renderWithTheme(
      <Badge data-testid="badge" size="large" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.sizeLarge.className);
  });

  it("applies color className - default", () => {
    renderWithTheme(
      <Badge data-testid="badge" color="default" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.colorDefault.className);
  });

  it("applies color className - primary", () => {
    renderWithTheme(
      <Badge data-testid="badge" color="primary" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.colorPrimary.className);
  });

  it("applies color className - success", () => {
    renderWithTheme(
      <Badge data-testid="badge" color="success" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.colorSuccess.className);
  });

  it("applies color className - error", () => {
    renderWithTheme(
      <Badge data-testid="badge" color="error" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.colorError.className);
  });

  it("applies color className - warning", () => {
    renderWithTheme(
      <Badge data-testid="badge" color="warning" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.colorWarning.className);
  });

  it("applies color className - info", () => {
    renderWithTheme(
      <Badge data-testid="badge" color="info" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.colorInfo.className);
  });

  it("applies anchorOrigin className - top-right", () => {
    renderWithTheme(
      <Badge data-testid="badge" anchorOrigin="top-right" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.anchorTopRight.className);
  });

  it("applies anchorOrigin className - top-left", () => {
    renderWithTheme(
      <Badge data-testid="badge" anchorOrigin="top-left" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.anchorTopLeft.className);
  });

  it("applies anchorOrigin className - bottom-right", () => {
    renderWithTheme(
      <Badge data-testid="badge" anchorOrigin="bottom-right" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.anchorBottomRight.className);
  });

  it("applies anchorOrigin className - bottom-left", () => {
    renderWithTheme(
      <Badge data-testid="badge" anchorOrigin="bottom-left" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.anchorBottomLeft.className);
  });

  it("applies invisible className when invisible is true", () => {
    renderWithTheme(
      <Badge data-testid="badge" invisible content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.invisible.className);
  });

  it("displays max+ when content exceeds max", () => {
    renderWithTheme(
      <Badge content={150} max={99}>
        <span>Child</span>
      </Badge>,
    );
    const badgeElement = document.querySelector(`.${BADGE_CSS_CLASS_NAMES.badge.className}`);
    expect(badgeElement).toHaveTextContent("99+");
  });

  it("displays content when content is less than or equal to max", () => {
    renderWithTheme(
      <Badge content={50} max={99}>
        <span>Child</span>
      </Badge>,
    );
    const badgeElement = document.querySelector(`.${BADGE_CSS_CLASS_NAMES.badge.className}`);
    expect(badgeElement).toHaveTextContent("50");
  });

  it("hides badge when content is 0 and showZero is false", () => {
    renderWithTheme(
      <Badge data-testid="badge" content={0} showZero={false}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.invisible.className);
  });

  it("shows badge when content is 0 and showZero is true", () => {
    renderWithTheme(
      <Badge data-testid="badge" content={0} showZero>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).not.toHaveClass(BADGE_CSS_CLASS_NAMES.invisible.className);
  });

  it("hides badge when content is empty", () => {
    renderWithTheme(
      <Badge data-testid="badge">
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.invisible.className);
  });

  it("renders string content", () => {
    renderWithTheme(
      <Badge content="New">
        <span>Child</span>
      </Badge>,
    );
    const badgeElement = document.querySelector(`.${BADGE_CSS_CLASS_NAMES.badge.className}`);
    expect(badgeElement).toHaveTextContent("New");
  });

  it("renders custom ReactNode content", () => {
    renderWithTheme(
      <Badge content={<span data-testid="custom-content">!</span>}>
        <span>Child</span>
      </Badge>,
    );
    expect(screen.getByTestId("custom-content")).toBeInTheDocument();
  });

  it("has correct displayName", () => {
    expect(Badge.displayName).toBe(COMPONENT_NAMES.Badge);
  });

  it("forwards ref to root element", () => {
    let refElement: HTMLSpanElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(HTMLSpanElement);
    expect(refElement).toHaveClass(BADGE_CSS_CLASS_NAMES.root.className);
  });

  it("applies custom className", () => {
    renderWithTheme(
      <Badge data-testid="badge" className="custom-class" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass("custom-class");
  });

  it("spreads additional props to root element", () => {
    renderWithTheme(
      <Badge data-testid="badge" aria-label="Notifications" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveAttribute("aria-label", "Notifications");
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <Badge
        data-testid="badge"
        content={5}
        style={(theme) => ({ backgroundColor: theme.semanticColors.success.main })}
      >
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge.style.backgroundColor).toBeTruthy();
  });

  it("has correct default values", () => {
    renderWithTheme(
      <Badge data-testid="badge" content={5}>
        <span>Child</span>
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.variantStandard.className);
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.sizeMedium.className);
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.colorError.className);
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.anchorTopRight.className);
    expect(badge).not.toHaveClass(BADGE_CSS_CLASS_NAMES.invisible.className);
  });

  it("works without children (standalone mode)", () => {
    renderWithTheme(<Badge data-testid="badge" variant="dot" />);
    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(BADGE_CSS_CLASS_NAMES.variantDot.className);
  });
});
