import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Card from "./Card.vue";

const classes = CSS_CLASSES.card;

describe("Card", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(Card, { attrs: { "data-testid": "card" }, slots: { default: "Card content" } });
      const card = screen.getByTestId("card");

      expect(card).toBeInTheDocument();
      expect(card).toHaveClass(classes.root);
      expect(card).toHaveClass(classes.variants.elevated);
    });

    it("renders slot content correctly", () => {
      render(Card, {
        slots: { default: '<span data-testid="child">Child content</span>' },
      });

      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Child content")).toBeInTheDocument();
    });
  });

  describe("variant prop", () => {
    it("applies elevated variant class (default)", () => {
      render(Card, { attrs: { "data-testid": "card" }, slots: { default: "Elevated" } });
      expect(screen.getByTestId("card")).toHaveClass(classes.variants.elevated);
    });

    it("applies outline variant class", () => {
      render(Card, {
        props: { variant: "outline" },
        attrs: { "data-testid": "card" },
        slots: { default: "Outline" },
      });
      expect(screen.getByTestId("card")).toHaveClass(classes.variants.outline);
    });

    it("applies filled variant class", () => {
      render(Card, {
        props: { variant: "filled" },
        attrs: { "data-testid": "card" },
        slots: { default: "Filled" },
      });
      expect(screen.getByTestId("card")).toHaveClass(classes.variants.filled);
    });
  });

  describe("clickable prop", () => {
    it("does not apply clickable class by default", () => {
      render(Card, { attrs: { "data-testid": "card" }, slots: { default: "Not clickable" } });
      const card = screen.getByTestId("card");

      expect(card).not.toHaveClass(classes.states.clickable);
      expect(card).not.toHaveAttribute("role");
      expect(card).not.toHaveAttribute("tabindex");
    });

    it("applies clickable class and a11y attributes when true", () => {
      render(Card, {
        props: { clickable: true },
        attrs: { "data-testid": "card" },
        slots: { default: "Clickable" },
      });
      const card = screen.getByTestId("card");

      expect(card).toHaveClass(classes.states.clickable);
      expect(card).toHaveAttribute("role", "button");
      expect(card).toHaveAttribute("tabindex", "0");
    });

    it("handles click on clickable card", async () => {
      const user = userEvent.setup();
      render(Card, {
        props: { clickable: true },
        attrs: { "data-testid": "card" },
        slots: { default: "Clickable" },
      });

      const card = screen.getByTestId("card");
      await user.click(card);
      // Clickable card should be focusable and interactive
      expect(card).toHaveAttribute("role", "button");
    });
  });

  describe("keyboard interaction", () => {
    it("emits click when Enter key is pressed on clickable card", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Card, {
        props: { clickable: true },
        attrs: { "data-testid": "card" },
        slots: { default: "Clickable" },
      });

      const card = screen.getByTestId("card");
      card.focus();
      await user.keyboard("{Enter}");

      expect(emitted()).toHaveProperty("click");
    });

    it("emits click when Space key is pressed on clickable card", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Card, {
        props: { clickable: true },
        attrs: { "data-testid": "card" },
        slots: { default: "Clickable" },
      });

      const card = screen.getByTestId("card");
      card.focus();
      await user.keyboard(" ");

      expect(emitted()).toHaveProperty("click");
    });

    it("does not emit click on keyboard when not clickable", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Card, {
        attrs: { "data-testid": "card" },
        slots: { default: "Not clickable" },
      });

      const card = screen.getByTestId("card");
      card.focus();
      await user.keyboard("{Enter}");
      await user.keyboard(" ");

      expect(emitted()).not.toHaveProperty("click");
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Card, {
        props: { className: "custom-class" },
        attrs: { "data-testid": "card" },
        slots: { default: "Custom" },
      });
      expect(screen.getByTestId("card")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(Card, {
        props: { className: "custom-class" },
        attrs: { "data-testid": "card" },
        slots: { default: "Custom" },
      });
      const card = screen.getByTestId("card");

      expect(card).toHaveClass(classes.root);
      expect(card).toHaveClass("custom-class");
    });
  });

  describe("HTML attributes", () => {
    it("passes through data-testid attribute", () => {
      render(Card, { attrs: { "data-testid": "my-card" }, slots: { default: "Card" } });
      expect(screen.getByTestId("my-card")).toBeInTheDocument();
    });

    it("passes through aria-label attribute", () => {
      render(Card, {
        props: { clickable: true },
        attrs: { "aria-label": "Interactive card", "data-testid": "card" },
        slots: { default: "Card" },
      });
      expect(screen.getByTestId("card")).toHaveAttribute("aria-label", "Interactive card");
    });
  });
});
