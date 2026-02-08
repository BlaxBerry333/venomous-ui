import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Badge } from "./index";

const classes = CSS_CLASSES.badge;

describe("Badge", () => {
  describe("rendering", () => {
    it("renders standalone badge with content", () => {
      render(<Badge content={5} data-testid="badge" />);
      const badge = screen.getByTestId("badge");

      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(classes.root);
      expect(badge.tagName).toBe("SUP");
      expect(badge).toHaveTextContent("5");
    });

    it("renders nothing when no content and not dot", () => {
      const { container } = render(<Badge data-testid="badge" />);
      expect(container.querySelector("sup")).toBeNull();
    });

    it("renders attached badge with children", () => {
      render(
        <Badge content={3} data-testid="badge">
          <button>Click</button>
        </Badge>,
      );

      expect(screen.getByText("Click")).toBeInTheDocument();
      expect(screen.getByTestId("badge")).toHaveTextContent("3");
    });

    it("renders wrapper span in attached mode", () => {
      const { container } = render(
        <Badge content={1}>
          <span>Child</span>
        </Badge>,
      );

      expect(container.querySelector(`.${classes.wrapper}`)).toBeInTheDocument();
    });
  });

  describe("content prop", () => {
    it("displays number content", () => {
      render(<Badge content={42} data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveTextContent("42");
    });

    it("displays string content", () => {
      render(<Badge content="new" data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveTextContent("new");
    });

    it("hides badge when content is 0", () => {
      const { container } = render(<Badge content={0} />);
      expect(container.querySelector("sup")).toBeNull();
    });

    it("hides badge when content is negative", () => {
      const { container } = render(<Badge content={-1} />);
      expect(container.querySelector("sup")).toBeNull();
    });
  });

  describe("max prop", () => {
    it("shows max+ when content exceeds max", () => {
      render(<Badge content={100} max={99} data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveTextContent("99+");
    });

    it("shows exact number when content equals max", () => {
      render(<Badge content={99} max={99} data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveTextContent("99");
    });

    it("shows exact number when content is below max", () => {
      render(<Badge content={50} max={99} data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveTextContent("50");
    });

    it("uses custom max value", () => {
      render(<Badge content={10} max={9} data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveTextContent("9+");
    });
  });

  describe("dot prop", () => {
    it("renders dot badge without content", () => {
      render(<Badge dot data-testid="badge" />);
      const badge = screen.getByTestId("badge");

      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(classes.dot);
      expect(badge).toHaveTextContent("");
    });

    it("ignores content when dot is true", () => {
      render(<Badge dot content={5} data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveTextContent("");
    });
  });

  describe("colorScheme prop", () => {
    it("applies error color by default", () => {
      render(<Badge content={1} data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveClass(classes.colors.error);
    });

    it("applies theme color", () => {
      render(<Badge content={1} colorScheme="theme" data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveClass(classes.colors.theme);
    });

    it("applies success color", () => {
      render(<Badge content={1} colorScheme="success" data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveClass(classes.colors.success);
    });

    it("applies warning color", () => {
      render(<Badge content={1} colorScheme="warning" data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveClass(classes.colors.warning);
    });

    it("applies info color", () => {
      render(<Badge content={1} colorScheme="info" data-testid="badge" />);
      expect(screen.getByTestId("badge")).toHaveClass(classes.colors.info);
    });
  });

  describe("hidden prop", () => {
    it("hides badge when hidden is true", () => {
      const { container } = render(<Badge content={5} hidden />);
      expect(container.querySelector("sup")).toBeNull();
    });

    it("hides dot badge when hidden is true", () => {
      const { container } = render(<Badge dot hidden />);
      expect(container.querySelector("sup")).toBeNull();
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Badge content={1} className="custom" data-testid="badge" />);
      const badge = screen.getByTestId("badge");
      expect(badge).toHaveClass("custom");
      expect(badge).toHaveClass(classes.root);
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let badgeRef: HTMLElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLElement>(null);
        badgeRef = ref.current;
        return <Badge content={1} ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(badgeRef).toBeInstanceOf(HTMLElement);
    });

    it("forwards ref with callback", () => {
      const refCallback = vi.fn();
      render(<Badge content={1} ref={refCallback} />);

      expect(refCallback).toHaveBeenCalled();
    });
  });

  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Badge.displayName).toBe(COMPONENT_NAMES.Badge);
    });
  });
});
