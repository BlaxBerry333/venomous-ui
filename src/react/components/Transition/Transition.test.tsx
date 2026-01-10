import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TRANSITION_COLLAPSE_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components";

import { Transition } from "./index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Transition.Collapse", () => {
  describe("Basic Rendering", () => {
    it("renders collapse with children", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse">
          <div>Child 1</div>
          <div>Child 2</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).toBeInTheDocument();
      expect(screen.getByText("Child 1")).toBeInTheDocument();
      expect(screen.getByText("Child 2")).toBeInTheDocument();
    });

    it("applies base className", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).toHaveClass(TRANSITION_COLLAPSE_CSS_CLASS_NAMES.base.className);
    });

    it("applies open className when open is true", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).toHaveClass(TRANSITION_COLLAPSE_CSS_CLASS_NAMES.open.className);
    });

    it("does not apply open className when open is false", () => {
      renderWithTheme(
        <Transition.Collapse open={false} data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).not.toHaveClass(TRANSITION_COLLAPSE_CSS_CLASS_NAMES.open.className);
    });

    it("renders as div by default", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse").tagName).toBe("DIV");
    });

    it("wraps children in content div", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse">
          <span data-testid="child">Content</span>
        </Transition.Collapse>,
      );

      const contentWrapper = screen
        .getByTestId("collapse")
        .querySelector(`.${TRANSITION_COLLAPSE_CSS_CLASS_NAMES.content.className}`);
      expect(contentWrapper).toBeInTheDocument();
      expect(contentWrapper?.querySelector('[data-testid="child"]')).toBeInTheDocument();
    });
  });

  describe("Polymorphic as prop", () => {
    it("renders as li when specified", () => {
      renderWithTheme(
        <ul>
          <Transition.Collapse as="li" open data-testid="collapse">
            <div>Content</div>
          </Transition.Collapse>
        </ul>,
      );

      expect(screen.getByTestId("collapse").tagName).toBe("LI");
    });

    it("renders as section when specified", () => {
      renderWithTheme(
        <Transition.Collapse as="section" open data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse").tagName).toBe("SECTION");
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse" className="custom-collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).toHaveClass("custom-collapse");
    });

    it("supports style as theme callback function", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse" style={(theme) => ({ marginTop: theme.spacing(2) })}>
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse").style.marginTop).toBeTruthy();
    });

    it("supports style as object", () => {
      renderWithTheme(
        <Transition.Collapse open data-testid="collapse" style={{ backgroundColor: "red" }}>
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse").style.backgroundColor).toBe("red");
    });
  });

  describe("Default open state", () => {
    it("defaults to closed (open=false)", () => {
      renderWithTheme(
        <Transition.Collapse data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).not.toHaveClass(TRANSITION_COLLAPSE_CSS_CLASS_NAMES.open.className);
    });
  });

  describe("Accessibility", () => {
    it("sets aria-hidden to true when closed", () => {
      renderWithTheme(
        <Transition.Collapse open={false} data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).toHaveAttribute("aria-hidden", "true");
    });

    it("sets aria-hidden to false when open", () => {
      renderWithTheme(
        <Transition.Collapse open={true} data-testid="collapse">
          <div>Content</div>
        </Transition.Collapse>,
      );

      expect(screen.getByTestId("collapse")).toHaveAttribute("aria-hidden", "false");
    });
  });
});
