import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SPACE_FLEX_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Flex from "./Flex";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Flex", () => {
  it("renders children correctly", () => {
    renderWithTheme(
      <Flex>
        <span>Child 1</span>
        <span>Child 2</span>
      </Flex>,
    );
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("applies default flex styles", () => {
    renderWithTheme(<Flex data-testid="flex">Content</Flex>);
    const element = screen.getByTestId("flex");
    expect(element).toHaveStyle({ display: "flex", flexDirection: "row", gap: "0px" });
  });

  it("applies column direction when column prop is true", () => {
    renderWithTheme(
      <Flex column data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element).toHaveStyle({ flexDirection: "column" });
  });

  it("applies spacing correctly", () => {
    renderWithTheme(
      <Flex spacing={4} data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element).toHaveStyle({ gap: "16px" });
  });

  it("applies spacing 0 correctly", () => {
    renderWithTheme(
      <Flex spacing={0} data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element).toHaveStyle({ gap: "0px" });
  });

  it("renders with custom className", () => {
    renderWithTheme(
      <Flex className="custom-class" data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element).toHaveClass(SPACE_FLEX_CSS_CLASS_NAMES.base.className);
    expect(element).toHaveClass("custom-class");
  });

  it("supports style as object", () => {
    renderWithTheme(
      <Flex style={{ backgroundColor: "red" }} data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element).toHaveStyle({ backgroundColor: "red" });
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <Flex style={(theme) => ({ backgroundColor: theme.semanticColors.success.main })} data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element).toHaveStyle({ backgroundColor: expect.any(String) });
  });

  it("renders as different HTML element using as prop", () => {
    renderWithTheme(
      <Flex as="nav" data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element.tagName).toBe("NAV");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null } as unknown as React.RefObject<HTMLDivElement>;
    renderWithTheme(<Flex ref={ref}>Content</Flex>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through additional HTML attributes", () => {
    renderWithTheme(
      <Flex id="test-id" aria-label="flex container" data-testid="flex">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex");
    expect(element).toHaveAttribute("id", "test-id");
    expect(element).toHaveAttribute("aria-label", "flex container");
  });
});
