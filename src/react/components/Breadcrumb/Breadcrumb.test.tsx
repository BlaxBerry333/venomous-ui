import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ThemeProvider } from "@/react/components/ThemeProvider";

import { Breadcrumb } from "./index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Breadcrumb", () => {
  describe("Rendering", () => {
    it("renders breadcrumb with items", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item active>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Products")).toBeInTheDocument();
      expect(screen.getByText("Current")).toBeInTheDocument();
    });

    it("renders as nav element by default", () => {
      renderWithTheme(
        <Breadcrumb data-testid="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const nav = screen.getByTestId("breadcrumb");
      expect(nav.tagName).toBe("NAV");
    });

    it("renders with custom element using as prop", () => {
      renderWithTheme(
        <Breadcrumb as="div" data-testid="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const div = screen.getByTestId("breadcrumb");
      expect(div.tagName).toBe("DIV");
    });

    it("renders ordered list inside nav", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const ol = document.querySelector("ol");
      expect(ol).toBeInTheDocument();
    });

    it("renders items as list items", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const listItems = document.querySelectorAll("li");
      expect(listItems.length).toBe(2);
    });
  });

  describe("Separator", () => {
    it("renders default separator between items", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByText("/")).toBeInTheDocument();
    });

    it("renders custom text separator", () => {
      renderWithTheme(
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByText(">")).toBeInTheDocument();
    });

    it("renders custom element separator", () => {
      renderWithTheme(
        <Breadcrumb separator={<span data-testid="custom-sep">→</span>}>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByTestId("custom-sep")).toBeInTheDocument();
    });

    it("does not render separator after last item", () => {
      renderWithTheme(
        <Breadcrumb separator="/">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item active>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const separators = screen.getAllByText("/");
      expect(separators.length).toBe(2); // Only 2 separators for 3 items
    });

    it("separator has aria-hidden attribute", () => {
      renderWithTheme(
        <Breadcrumb separator="/">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const separator = screen.getByText("/");
      expect(separator).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("Breadcrumb.Item", () => {
    it("renders as anchor by default", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe("A");
    });

    it("renders with href attribute", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/home");
    });

    it("renders with custom element using as prop", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item as="button" onClick={() => {}}>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("renders with icon", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#" icon={<span data-testid="icon">🏠</span>}>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("handles click events", () => {
      const handleClick = vi.fn();

      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item as="button" onClick={handleClick}>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Active State", () => {
    it("renders active item with aria-current", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const activeItem = screen.getByText("Current");
      expect(activeItem).toHaveAttribute("aria-current", "page");
    });

    it("renders active item as span by default", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const activeItem = screen.getByText("Current");
      expect(activeItem.tagName).toBe("SPAN");
    });

    it("applies active class to item wrapper", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item active>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const li = document.querySelector("li");
      expect(li?.className).toContain("--active");
    });
  });

  describe("Disabled State", () => {
    it("renders disabled item with aria-disabled", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#" disabled>
            Disabled
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      const disabledItem = screen.getByText("Disabled");
      expect(disabledItem).toHaveAttribute("aria-disabled", "true");
    });

    it("applies disabled class to item wrapper", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#" disabled>
            Disabled
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      const li = document.querySelector("li");
      expect(li?.className).toContain("--disabled");
    });
  });

  describe("Collapse", () => {
    it("collapses items when exceeding maxItems", () => {
      renderWithTheme(
        <Breadcrumb maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
          <Breadcrumb.Item href="#">First</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Second</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Third</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Fourth</Breadcrumb.Item>
          <Breadcrumb.Item active>Last</Breadcrumb.Item>
        </Breadcrumb>,
      );

      // Should show: First, ..., Last
      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Last")).toBeInTheDocument();
      expect(screen.getByText("...")).toBeInTheDocument();

      // Hidden items
      expect(screen.queryByText("Second")).not.toBeInTheDocument();
      expect(screen.queryByText("Third")).not.toBeInTheDocument();
      expect(screen.queryByText("Fourth")).not.toBeInTheDocument();
    });

    it("expands collapsed items on click", () => {
      renderWithTheme(
        <Breadcrumb maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
          <Breadcrumb.Item href="#">First</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Second</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Third</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Fourth</Breadcrumb.Item>
          <Breadcrumb.Item active>Last</Breadcrumb.Item>
        </Breadcrumb>,
      );

      // Click ellipsis button
      fireEvent.click(screen.getByText("..."));

      // All items should now be visible
      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();
      expect(screen.getByText("Third")).toBeInTheDocument();
      expect(screen.getByText("Fourth")).toBeInTheDocument();
      expect(screen.getByText("Last")).toBeInTheDocument();

      // Ellipsis should be gone
      expect(screen.queryByText("...")).not.toBeInTheDocument();
    });

    it("does not collapse when items equal maxItems", () => {
      renderWithTheme(
        <Breadcrumb maxItems={3}>
          <Breadcrumb.Item href="#">First</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Second</Breadcrumb.Item>
          <Breadcrumb.Item active>Third</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();
      expect(screen.getByText("Third")).toBeInTheDocument();
      expect(screen.queryByText("...")).not.toBeInTheDocument();
    });

    it("respects itemsBeforeCollapse and itemsAfterCollapse", () => {
      renderWithTheme(
        <Breadcrumb maxItems={4} itemsBeforeCollapse={2} itemsAfterCollapse={1}>
          <Breadcrumb.Item href="#">A</Breadcrumb.Item>
          <Breadcrumb.Item href="#">B</Breadcrumb.Item>
          <Breadcrumb.Item href="#">C</Breadcrumb.Item>
          <Breadcrumb.Item href="#">D</Breadcrumb.Item>
          <Breadcrumb.Item active>E</Breadcrumb.Item>
        </Breadcrumb>,
      );

      // Should show: A, B, ..., E
      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
      expect(screen.getByText("...")).toBeInTheDocument();
      expect(screen.getByText("E")).toBeInTheDocument();

      // Hidden
      expect(screen.queryByText("C")).not.toBeInTheDocument();
      expect(screen.queryByText("D")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has aria-label on nav element", () => {
      renderWithTheme(
        <Breadcrumb data-testid="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const nav = screen.getByTestId("breadcrumb");
      expect(nav).toHaveAttribute("aria-label", "Breadcrumb");
    });

    it("collapsed button has aria-label", () => {
      renderWithTheme(
        <Breadcrumb maxItems={2}>
          <Breadcrumb.Item href="#">A</Breadcrumb.Item>
          <Breadcrumb.Item href="#">B</Breadcrumb.Item>
          <Breadcrumb.Item active>C</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Show more breadcrumbs");
    });
  });

  describe("Styling", () => {
    it("applies custom className to root", () => {
      renderWithTheme(
        <Breadcrumb className="custom-class" data-testid="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const nav = screen.getByTestId("breadcrumb");
      expect(nav.className).toContain("custom-class");
    });

    it("applies custom className to item", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#" className="custom-item">
            Home
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      const link = screen.getByRole("link");
      expect(link.className).toContain("custom-item");
    });

    it("applies inline style to root", () => {
      renderWithTheme(
        <Breadcrumb style={{ marginTop: "20px" }} data-testid="breadcrumb">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const nav = screen.getByTestId("breadcrumb");
      expect(nav).toHaveStyle({ marginTop: "20px" });
    });

    it("applies inline style to item", () => {
      renderWithTheme(
        <Breadcrumb>
          <Breadcrumb.Item href="#" style={{ fontWeight: "bold" }}>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveStyle({ fontWeight: "bold" });
    });
  });
});
