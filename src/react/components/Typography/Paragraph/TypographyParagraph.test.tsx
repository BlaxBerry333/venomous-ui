import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import TypographyParagraph from "./TypographyParagraph";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("TypographyParagraph", () => {
  // Basic rendering
  it("renders children correctly", () => {
    renderWithTheme(<TypographyParagraph>Hello World</TypographyParagraph>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders as p element", () => {
    renderWithTheme(<TypographyParagraph>Test</TypographyParagraph>);
    expect(screen.getByText("Test").tagName).toBe("P");
  });

  // CSS classes
  it("applies base className", () => {
    renderWithTheme(<TypographyParagraph>Test</TypographyParagraph>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES.base.className);
  });

  it("applies custom className", () => {
    renderWithTheme(<TypographyParagraph className="custom-class">Test</TypographyParagraph>);
    expect(screen.getByText("Test")).toHaveClass("custom-class");
  });

  // Ellipsis
  it("does not apply ellipsis className when ellipsis is 0", () => {
    renderWithTheme(<TypographyParagraph ellipsis={0}>Test</TypographyParagraph>);
    expect(screen.getByText("Test")).not.toHaveClass(TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES.ellipsis.className);
  });

  it("applies ellipsis className when ellipsis > 0", () => {
    renderWithTheme(<TypographyParagraph ellipsis={2}>Test</TypographyParagraph>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES.ellipsis.className);
  });

  it("applies ellipsis styles when ellipsis > 0", () => {
    renderWithTheme(<TypographyParagraph ellipsis={3}>Test</TypographyParagraph>);
    const element = screen.getByText("Test");
    // Check inline style attributes
    expect(element).toHaveStyle({ overflow: "hidden" });
    // Ellipsis className should be applied
    expect(element).toHaveClass(TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES.ellipsis.className);
  });

  it("does not apply ellipsis styles when ellipsis is 0", () => {
    renderWithTheme(<TypographyParagraph ellipsis={0}>Test</TypographyParagraph>);
    const element = screen.getByText("Test");
    expect(element.style.display).not.toBe("-webkit-box");
  });

  it("does not apply ellipsis styles when ellipsis is negative", () => {
    renderWithTheme(<TypographyParagraph ellipsis={-1}>Test</TypographyParagraph>);
    const element = screen.getByText("Test");
    expect(element.style.display).not.toBe("-webkit-box");
  });

  // Style callback
  it("supports style as object", () => {
    renderWithTheme(<TypographyParagraph style={{ color: "red" }}>Test</TypographyParagraph>);
    expect(screen.getByText("Test")).toHaveStyle({ color: "red" });
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <TypographyParagraph style={(theme) => ({ color: theme.semanticColors.success.main })}>Test</TypographyParagraph>,
    );
    const element = screen.getByText("Test");
    // Theme callback should apply some color
    expect(element.style.color).toBeTruthy();
  });

  it("merges ellipsis styles with custom styles", () => {
    renderWithTheme(
      <TypographyParagraph ellipsis={2} style={{ color: "blue" }}>
        Test
      </TypographyParagraph>,
    );
    const element = screen.getByText("Test");
    expect(element).toHaveStyle({ color: "blue" });
    expect(element).toHaveStyle({ overflow: "hidden" });
    // Ellipsis className should be applied
    expect(element).toHaveClass(TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES.ellipsis.className);
  });

  // Ref forwarding
  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<TypographyParagraph ref={ref}>Test</TypographyParagraph>);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLParagraphElement);
  });

  // displayName
  it("has correct displayName", () => {
    expect(TypographyParagraph.displayName).toBe(COMPONENT_NAMES.TypographyParagraph);
  });

  // HTML attributes
  it("passes through HTML attributes", () => {
    renderWithTheme(
      <TypographyParagraph data-testid="paragraph" id="my-paragraph">
        Test
      </TypographyParagraph>,
    );
    const element = screen.getByTestId("paragraph");
    expect(element).toHaveAttribute("id", "my-paragraph");
  });
});
