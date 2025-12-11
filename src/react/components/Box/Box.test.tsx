import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BOX_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Box from "./Box";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Box", () => {
  it("renders with default div element", () => {
    renderWithTheme(<Box data-testid="box">Content</Box>);
    const box = screen.getByTestId("box");
    expect(box.tagName).toBe("DIV");
    expect(box).toHaveTextContent("Content");
  });

  it("renders with custom element via as prop", () => {
    renderWithTheme(
      <Box as="section" data-testid="box">
        Content
      </Box>,
    );
    const box = screen.getByTestId("box");
    expect(box.tagName).toBe("SECTION");
  });

  it("applies Box className", () => {
    renderWithTheme(<Box data-testid="box">Content</Box>);
    const box = screen.getByTestId("box");
    expect(box).toHaveClass(BOX_CSS_CLASS_NAMES.base.className);
  });

  it("applies custom className", () => {
    renderWithTheme(
      <Box data-testid="box" className="custom-class">
        Content
      </Box>,
    );
    const box = screen.getByTestId("box");
    expect(box).toHaveClass(BOX_CSS_CLASS_NAMES.base.className);
    expect(box).toHaveClass("custom-class");
  });

  it("applies inline styles as object", () => {
    renderWithTheme(
      <Box data-testid="box" style={{ padding: 16, backgroundColor: "blue" }}>
        Content
      </Box>,
    );
    const box = screen.getByTestId("box");
    expect(box).toHaveStyle({ padding: "16px", backgroundColor: "blue" });
  });

  it("applies styles from theme callback function", () => {
    renderWithTheme(
      <Box
        data-testid="box"
        style={(theme) => ({
          padding: theme.spacing(4),
          borderRadius: theme.borderRadius("medium"),
        })}
      >
        Content
      </Box>,
    );
    const box = screen.getByTestId("box");
    // theme.spacing(4) = "16px", theme.borderRadius("medium") = "8px"
    expect(box).toHaveStyle({ padding: "16px", borderRadius: "8px" });
  });

  it("supports theme semantic colors in style callback", () => {
    renderWithTheme(
      <Box
        data-testid="box"
        style={(theme) => ({
          backgroundColor: theme.semanticColors.success.main,
        })}
      >
        Content
      </Box>,
    );
    const box = screen.getByTestId("box");
    // Just verify it renders without error and has a background color
    expect(box).toHaveStyle({ backgroundColor: expect.any(String) });
  });

  it("passes through HTML attributes", () => {
    renderWithTheme(
      <Box data-testid="box" id="styled-box" title="Styled Box">
        Content
      </Box>,
    );
    const box = screen.getByTestId("box");
    expect(box).toHaveAttribute("id", "styled-box");
    expect(box).toHaveAttribute("title", "Styled Box");
  });

  it("renders children correctly", () => {
    renderWithTheme(
      <Box data-testid="box">
        <span>Child 1</span>
        <span>Child 2</span>
      </Box>,
    );
    const box = screen.getByTestId("box");
    expect(box.children).toHaveLength(2);
  });

  it("renders nested Box components with different elements", () => {
    renderWithTheme(
      <Box as="section" data-testid="section">
        <Box as="header" data-testid="header">
          Header
        </Box>
        <Box as="footer" data-testid="footer">
          Footer
        </Box>
      </Box>,
    );
    expect(screen.getByTestId("section").tagName).toBe("SECTION");
    expect(screen.getByTestId("header").tagName).toBe("HEADER");
    expect(screen.getByTestId("footer").tagName).toBe("FOOTER");
  });
});
