import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Breadcrumb } from "./index";

const classes = CSS_CLASSES.breadcrumb;

describe("Breadcrumb", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>,
      );
      const nav = screen.getByTestId("breadcrumb");

      expect(nav).toBeInTheDocument();
      expect(nav.tagName).toBe("NAV");
      expect(nav).toHaveClass(classes.root);
      expect(nav).toHaveAttribute("aria-label", "Breadcrumb");
    });

    it("renders ol list inside nav", () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByTestId("breadcrumb").querySelector("ol")).toHaveClass(classes.list);
    });

    it("renders multiple items with separators", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Docs</Breadcrumb.Item>
          <Breadcrumb.Item>Guide</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Docs")).toBeInTheDocument();
      expect(screen.getByText("Guide")).toBeInTheDocument();

      // 2 separators for 3 items
      const separators = document.querySelectorAll(`.${classes.separator}`);
      expect(separators).toHaveLength(2);
    });
  });

  describe("separator prop", () => {
    it("uses / as default separator", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item>A</Breadcrumb.Item>
          <Breadcrumb.Item>B</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const separator = document.querySelector(`.${classes.separator}`);
      expect(separator).toHaveTextContent("/");
    });

    it("uses custom string separator", () => {
      render(
        <Breadcrumb separator=">">
          <Breadcrumb.Item>A</Breadcrumb.Item>
          <Breadcrumb.Item>B</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const separator = document.querySelector(`.${classes.separator}`);
      expect(separator).toHaveTextContent(">");
    });

    it("uses custom element separator", () => {
      render(
        <Breadcrumb separator={<span data-testid="custom-sep">→</span>}>
          <Breadcrumb.Item>A</Breadcrumb.Item>
          <Breadcrumb.Item>B</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByTestId("custom-sep")).toBeInTheDocument();
    });

    it("separators have aria-hidden", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item>A</Breadcrumb.Item>
          <Breadcrumb.Item>B</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const separatorLi = document.querySelector(`[aria-hidden="true"]`);
      expect(separatorLi).toBeInTheDocument();
    });
  });

  describe("Breadcrumb.Item", () => {
    it("renders text as span when no href", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const text = document.querySelector(`.${classes.text}`);
      expect(text?.tagName).toBe("SPAN");
      expect(text).toHaveTextContent("Home");
    });

    it("renders link when href is provided", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const link = document.querySelector(`.${classes.link}`);
      expect(link?.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "/home");
    });

    it("renders span with aria-current when isCurrentPage", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item isCurrentPage>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const text = document.querySelector(`.${classes.textCurrent}`);
      expect(text).toBeInTheDocument();
      expect(text).toHaveAttribute("aria-current", "page");
    });

    it("renders span instead of link when isCurrentPage even with href", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/page" isCurrentPage>
            Current
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(document.querySelector("a")).toBeNull();
      expect(document.querySelector(`.${classes.text}`)).toBeInTheDocument();
    });

    it("renders disabled item as span with aria-disabled", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/page" disabled>
            Disabled
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(document.querySelector("a")).toBeNull();
      const text = document.querySelector(`.${classes.text}`);
      expect(text).toHaveAttribute("aria-disabled", "true");

      const li = document.querySelector(`.${classes.itemDisabled}`);
      expect(li).toBeInTheDocument();
    });
  });

  describe("Breadcrumb.Ellipsis", () => {
    it("renders ellipsis with default character", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Ellipsis />
          <Breadcrumb.Item>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      const ellipsis = document.querySelector(`.${classes.ellipsis}`);
      expect(ellipsis).toBeInTheDocument();
      expect(ellipsis).toHaveTextContent("…");
    });

    it("renders ellipsis with custom children", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Ellipsis>
            <span data-testid="custom-ellipsis">...</span>
          </Breadcrumb.Ellipsis>
          <Breadcrumb.Item>Current</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(screen.getByTestId("custom-ellipsis")).toBeInTheDocument();
    });

    it("ellipsis has presentation role", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Ellipsis />
        </Breadcrumb>,
      );

      const ellipsis = document.querySelector(`.${classes.ellipsis}`);
      expect(ellipsis).toHaveAttribute("role", "presentation");
    });
  });

  describe("className prop", () => {
    it("applies custom className to Breadcrumb", () => {
      render(
        <Breadcrumb className="custom" data-testid="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>,
      );
      const nav = screen.getByTestId("breadcrumb");
      expect(nav).toHaveClass("custom");
      expect(nav).toHaveClass(classes.root);
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref to nav element", () => {
      let navRef: HTMLElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLElement>(null);
        navRef = ref.current;
        return (
          <Breadcrumb ref={ref}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
        );
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(navRef).toBeInstanceOf(HTMLElement);
    });

    it("forwards ref with callback", () => {
      const refCallback = vi.fn();
      render(
        <Breadcrumb ref={refCallback}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>,
      );

      expect(refCallback).toHaveBeenCalled();
    });
  });

  describe("flattenChildren", () => {
    it("handles nested arrays of children", () => {
      const items = [
        <Breadcrumb.Item key="a">A</Breadcrumb.Item>,
        [<Breadcrumb.Item key="b">B</Breadcrumb.Item>, <Breadcrumb.Item key="c">C</Breadcrumb.Item>],
      ];
      render(<Breadcrumb>{items}</Breadcrumb>);

      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
      expect(screen.getByText("C")).toBeInTheDocument();

      // 2 separators for 3 items
      const separators = document.querySelectorAll(`.${classes.separator}`);
      expect(separators).toHaveLength(2);
    });

    it("filters out non-element children (null, undefined, strings)", () => {
      render(
        <Breadcrumb>
          {null}
          <Breadcrumb.Item>Only</Breadcrumb.Item>
          {undefined}
        </Breadcrumb>,
      );

      expect(screen.getByText("Only")).toBeInTheDocument();
      // No separators since there's only 1 valid element
      expect(document.querySelectorAll(`.${classes.separator}`)).toHaveLength(0);
    });
  });

  describe("displayName", () => {
    it("has correct displayName for Breadcrumb", () => {
      expect(Breadcrumb.displayName).toBe(COMPONENT_NAMES.Breadcrumb);
    });

    it("has correct displayName for Breadcrumb.Item", () => {
      expect(Breadcrumb.Item.displayName).toBe(`${COMPONENT_NAMES.Breadcrumb}.Item`);
    });

    it("has correct displayName for Breadcrumb.Ellipsis", () => {
      expect(Breadcrumb.Ellipsis.displayName).toBe(`${COMPONENT_NAMES.Breadcrumb}.Ellipsis`);
    });
  });
});
