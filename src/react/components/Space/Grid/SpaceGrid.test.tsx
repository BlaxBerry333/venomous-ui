import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { SPACE_GRID_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Grid from "./SpaceGrid";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Grid", () => {
  it("renders children correctly", () => {
    renderWithTheme(
      <Grid>
        <span>Child 1</span>
        <span>Child 2</span>
      </Grid>,
    );
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("applies default grid styles", () => {
    renderWithTheme(<Grid data-testid="grid">Content</Grid>);
    const element = screen.getByTestId("grid");
    expect(element).toHaveStyle({ display: "grid", gap: "0px" });
  });

  it("applies spacing correctly", () => {
    renderWithTheme(
      <Grid spacing={4} data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element).toHaveStyle({ gap: "16px" });
  });

  it("applies numeric columns correctly", () => {
    renderWithTheme(
      <Grid columns={3} data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element).toHaveStyle({ gridTemplateColumns: "repeat(3, 1fr)" });
  });

  it("applies spacing 0 correctly", () => {
    renderWithTheme(
      <Grid spacing={0} data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element).toHaveStyle({ gap: "0px" });
  });

  it("renders with custom className", () => {
    renderWithTheme(
      <Grid className="custom-class" data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element).toHaveClass(SPACE_GRID_CSS_CLASS_NAMES.base.className);
    expect(element).toHaveClass("custom-class");
  });

  it("supports style as object", () => {
    renderWithTheme(
      <Grid style={{ backgroundColor: "red" }} data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element).toHaveStyle({ backgroundColor: "red" });
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <Grid style={(theme) => ({ backgroundColor: theme.semanticColors.success.main })} data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element).toHaveStyle({ backgroundColor: expect.any(String) });
  });

  it("renders as different HTML element using as prop", () => {
    renderWithTheme(
      <Grid as="section" data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element.tagName).toBe("SECTION");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null } as unknown as React.RefObject<HTMLDivElement>;
    renderWithTheme(<Grid ref={ref}>Content</Grid>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through additional HTML attributes", () => {
    renderWithTheme(
      <Grid id="test-id" aria-label="grid container" data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    expect(element).toHaveAttribute("id", "test-id");
    expect(element).toHaveAttribute("aria-label", "grid container");
  });

  it("applies responsive columns with unique className", () => {
    renderWithTheme(
      <Grid columns={{ xs: 1, md: 2, lg: 3 }} data-testid="grid">
        Content
      </Grid>,
    );
    const element = screen.getByTestId("grid");
    // Should have responsive className
    expect(element.className).toMatch(/VENOMOUS_UI__Grid-responsive/);
    // Should NOT have inline gridTemplateColumns (handled by CSS)
    expect(element.style.gridTemplateColumns).toBe("");
  });
});
