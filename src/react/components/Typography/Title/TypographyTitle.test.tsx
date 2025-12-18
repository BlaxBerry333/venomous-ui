import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, TYPOGRAPHY_TITLE_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import TypographyTitle from "./TypographyTitle";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("TypographyTitle", () => {
  // Basic rendering
  it("renders children correctly", () => {
    renderWithTheme(<TypographyTitle as="h1">Hello World</TypographyTitle>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  // Heading levels
  it("renders as h1 element when as='h1'", () => {
    renderWithTheme(<TypographyTitle as="h1">Test</TypographyTitle>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders as h2 element when as='h2'", () => {
    renderWithTheme(<TypographyTitle as="h2">Test</TypographyTitle>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders as h3 element when as='h3'", () => {
    renderWithTheme(<TypographyTitle as="h3">Test</TypographyTitle>);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("renders as h4 element when as='h4'", () => {
    renderWithTheme(<TypographyTitle as="h4">Test</TypographyTitle>);
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  it("renders as h5 element when as='h5'", () => {
    renderWithTheme(<TypographyTitle as="h5">Test</TypographyTitle>);
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });

  it("renders as h6 element when as='h6'", () => {
    renderWithTheme(<TypographyTitle as="h6">Test</TypographyTitle>);
    expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
  });

  it("defaults to h3 when as is not provided", () => {
    // @ts-expect-error - testing default behavior
    renderWithTheme(<TypographyTitle>Test</TypographyTitle>);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  // CSS classes
  it("applies base className", () => {
    renderWithTheme(<TypographyTitle as="h1">Test</TypographyTitle>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.base.className);
  });

  it("applies h1 level className", () => {
    renderWithTheme(<TypographyTitle as="h1">Test</TypographyTitle>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH1.className);
  });

  it("applies h2 level className", () => {
    renderWithTheme(<TypographyTitle as="h2">Test</TypographyTitle>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH2.className);
  });

  it("applies h3 level className", () => {
    renderWithTheme(<TypographyTitle as="h3">Test</TypographyTitle>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH3.className);
  });

  it("applies h4 level className", () => {
    renderWithTheme(<TypographyTitle as="h4">Test</TypographyTitle>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH4.className);
  });

  it("applies h5 level className", () => {
    renderWithTheme(<TypographyTitle as="h5">Test</TypographyTitle>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH5.className);
  });

  it("applies h6 level className", () => {
    renderWithTheme(<TypographyTitle as="h6">Test</TypographyTitle>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TITLE_CSS_CLASS_NAMES.levelH6.className);
  });

  it("applies custom className", () => {
    renderWithTheme(
      <TypographyTitle as="h1" className="custom-class">
        Test
      </TypographyTitle>,
    );
    expect(screen.getByText("Test")).toHaveClass("custom-class");
  });

  // Style callback
  it("supports style as object", () => {
    renderWithTheme(
      <TypographyTitle as="h1" style={{ color: "red" }}>
        Test
      </TypographyTitle>,
    );
    expect(screen.getByText("Test")).toHaveStyle({ color: "red" });
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <TypographyTitle as="h1" style={(theme) => ({ color: theme.semanticColors.success.main })}>
        Test
      </TypographyTitle>,
    );
    const element = screen.getByText("Test");
    // Theme callback should apply some color
    expect(element.style.color).toBeTruthy();
  });

  // Ref forwarding
  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(
      <TypographyTitle as="h1" ref={ref}>
        Test
      </TypographyTitle>,
    );
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLHeadingElement);
  });

  // displayName
  it("has correct displayName", () => {
    expect(TypographyTitle.displayName).toBe(COMPONENT_NAMES.TypographyTitle);
  });

  // HTML attributes
  it("passes through HTML attributes", () => {
    renderWithTheme(
      <TypographyTitle as="h1" data-testid="title" id="my-title">
        Test
      </TypographyTitle>,
    );
    const element = screen.getByTestId("title");
    expect(element).toHaveAttribute("id", "my-title");
  });
});
