import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Card } from "./index";

const classes = CSS_CLASSES.card;

describe("Card", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Card data-testid="card">Card content</Card>);
      const card = screen.getByTestId("card");

      expect(card).toBeInTheDocument();
      expect(card).toHaveClass(classes.root);
      expect(card).toHaveClass(classes.variants.elevated);
    });

    it("renders children correctly", () => {
      render(
        <Card>
          <span data-testid="child">Child content</span>
        </Card>,
      );

      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Child content")).toBeInTheDocument();
    });
  });

  // Variant props
  describe("variant prop", () => {
    it("applies elevated variant class (default)", () => {
      render(<Card data-testid="card">Elevated</Card>);
      expect(screen.getByTestId("card")).toHaveClass(classes.variants.elevated);
    });

    it("applies outline variant class", () => {
      render(
        <Card variant="outline" data-testid="card">
          Outline
        </Card>,
      );
      expect(screen.getByTestId("card")).toHaveClass(classes.variants.outline);
    });

    it("applies filled variant class", () => {
      render(
        <Card variant="filled" data-testid="card">
          Filled
        </Card>,
      );
      expect(screen.getByTestId("card")).toHaveClass(classes.variants.filled);
    });
  });

  // Clickable prop
  describe("clickable prop", () => {
    it("does not apply clickable class by default", () => {
      render(<Card data-testid="card">Not clickable</Card>);
      const card = screen.getByTestId("card");

      expect(card).not.toHaveClass(classes.states.clickable);
      expect(card).not.toHaveAttribute("role");
      expect(card).not.toHaveAttribute("tabindex");
    });

    it("applies clickable class and a11y attributes when true", () => {
      render(
        <Card clickable data-testid="card">
          Clickable
        </Card>,
      );
      const card = screen.getByTestId("card");

      expect(card).toHaveClass(classes.states.clickable);
      expect(card).toHaveAttribute("role", "button");
      expect(card).toHaveAttribute("tabindex", "0");
    });

    it("calls onClick when clicked", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Card clickable onClick={handleClick} data-testid="card">
          Clickable
        </Card>,
      );

      await user.click(screen.getByTestId("card"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  // Keyboard interaction for clickable cards
  describe("keyboard interaction", () => {
    it("triggers onClick when Enter key is pressed on clickable card", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Card clickable onClick={handleClick} data-testid="card">
          Clickable
        </Card>,
      );

      const card = screen.getByTestId("card");
      card.focus();
      await user.keyboard("{Enter}");

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("triggers onClick when Space key is pressed on clickable card", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Card clickable onClick={handleClick} data-testid="card">
          Clickable
        </Card>,
      );

      const card = screen.getByTestId("card");
      card.focus();
      await user.keyboard(" ");

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not trigger onClick on keyboard when not clickable", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Card onClick={handleClick} data-testid="card">
          Not clickable
        </Card>,
      );

      const card = screen.getByTestId("card");
      card.focus();
      await user.keyboard("{Enter}");
      await user.keyboard(" ");

      expect(handleClick).not.toHaveBeenCalled();
    });

    it("calls custom onKeyDown handler", async () => {
      const user = userEvent.setup();
      const handleKeyDown = vi.fn();

      render(
        <Card clickable onKeyDown={handleKeyDown} data-testid="card">
          Clickable
        </Card>,
      );

      const card = screen.getByTestId("card");
      card.focus();
      await user.keyboard("{Enter}");

      expect(handleKeyDown).toHaveBeenCalled();
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(
        <Card className="custom-class" data-testid="card">
          Custom
        </Card>,
      );
      expect(screen.getByTestId("card")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(
        <Card className="custom-class" data-testid="card">
          Custom
        </Card>,
      );
      const card = screen.getByTestId("card");

      expect(card).toHaveClass(classes.root);
      expect(card).toHaveClass("custom-class");
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let cardRef: HTMLDivElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLDivElement>(null);
        cardRef = ref.current;
        return <Card ref={ref}>Card</Card>;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(cardRef).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref with callback", () => {
      const refCallback = vi.fn();
      render(<Card ref={refCallback}>Card</Card>);

      expect(refCallback).toHaveBeenCalled();
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Card.displayName).toBe(COMPONENT_NAMES.Card);
    });
  });

  // HTML attributes passthrough
  describe("HTML attributes", () => {
    it("passes through data-testid attribute", () => {
      render(<Card data-testid="my-card">Card</Card>);
      expect(screen.getByTestId("my-card")).toBeInTheDocument();
    });

    it("passes through aria-label attribute", () => {
      render(
        <Card clickable aria-label="Interactive card" data-testid="card">
          Card
        </Card>,
      );
      expect(screen.getByTestId("card")).toHaveAttribute("aria-label", "Interactive card");
    });

    it("passes onClick to non-clickable card (no keyboard trigger)", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Card onClick={handleClick} data-testid="card">
          Not clickable
        </Card>,
      );

      await user.click(screen.getByTestId("card"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
