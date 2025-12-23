import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CARD_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Card from "./Card";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Card", () => {
  it("renders with children", () => {
    renderWithTheme(<Card>Card Content</Card>);
    expect(screen.getByRole("article")).toHaveTextContent("Card Content");
  });

  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Card variant="elevated">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.variantElevated.className);

    rerender(
      <ThemeProvider>
        <Card variant="outlined">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.variantOutlined.className);

    rerender(
      <ThemeProvider>
        <Card variant="filled">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.variantFilled.className);
  });

  it("applies padding className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Card padding="none">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.paddingNone.className);

    rerender(
      <ThemeProvider>
        <Card padding="small">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.paddingSmall.className);

    rerender(
      <ThemeProvider>
        <Card padding="medium">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.paddingMedium.className);

    rerender(
      <ThemeProvider>
        <Card padding="large">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.paddingLarge.className);
  });

  it("applies radius className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Card radius="none">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.radiusNone.className);

    rerender(
      <ThemeProvider>
        <Card radius="small">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.radiusSmall.className);

    rerender(
      <ThemeProvider>
        <Card radius="medium">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.radiusMedium.className);

    rerender(
      <ThemeProvider>
        <Card radius="large">Content</Card>
      </ThemeProvider>,
    );
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.radiusLarge.className);
  });

  it("has correct default props", () => {
    renderWithTheme(<Card>Content</Card>);
    const card = screen.getByRole("article");
    expect(card).toHaveClass(CARD_CSS_CLASS_NAMES.variantElevated.className);
    expect(card).toHaveClass(CARD_CSS_CLASS_NAMES.paddingMedium.className);
    expect(card).toHaveClass(CARD_CSS_CLASS_NAMES.radiusMedium.className);
  });

  it("handles click events when onClick provided", () => {
    const handleClick = vi.fn();
    renderWithTheme(<Card onClick={handleClick}>Content</Card>);
    fireEvent.click(screen.getByRole("article"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies clickable className when clickable prop is true", () => {
    renderWithTheme(<Card clickable>Content</Card>);
    expect(screen.getByRole("article")).toHaveClass(CARD_CSS_CLASS_NAMES.clickable.className);
  });

  it("does not apply clickable className when clickable is false even with onClick", () => {
    const handleClick = vi.fn();
    renderWithTheme(<Card onClick={handleClick}>Content</Card>);
    expect(screen.getByRole("article")).not.toHaveClass(CARD_CSS_CLASS_NAMES.clickable.className);
  });

  it("does not apply clickable className when disabled", () => {
    renderWithTheme(
      <Card clickable disabled>
        Content
      </Card>,
    );
    expect(screen.getByRole("article")).not.toHaveClass(CARD_CSS_CLASS_NAMES.clickable.className);
  });

  it("does not apply clickable className when loading", () => {
    renderWithTheme(
      <Card clickable loading>
        Content
      </Card>,
    );
    expect(screen.getByRole("article")).not.toHaveClass(CARD_CSS_CLASS_NAMES.clickable.className);
  });

  it("applies loading state", () => {
    renderWithTheme(<Card loading>Content</Card>);
    expect(screen.getByRole("article")).toHaveAttribute("aria-busy", "true");
  });

  it("applies disabled state", () => {
    renderWithTheme(<Card disabled>Content</Card>);
    expect(screen.getByRole("article")).toHaveAttribute("aria-disabled", "true");
  });

  it("applies custom className", () => {
    renderWithTheme(<Card className="custom-class">Content</Card>);
    expect(screen.getByRole("article")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Card ref={ref}>Content</Card>);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLElement);
  });

  it("has correct displayName", () => {
    expect(Card.displayName).toBe(COMPONENT_NAMES.Card);
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(<Card style={(theme) => ({ backgroundColor: theme.paletteColors.main })}>Content</Card>);
    const card = screen.getByRole("article");
    expect(card).toHaveStyle({ backgroundColor: expect.any(String) });
  });
});
