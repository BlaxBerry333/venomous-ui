import { CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Skeleton from "./Skeleton.vue";

const classes = CSS_CLASSES.skeleton;

describe("Skeleton", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(Skeleton, { attrs: { "data-testid": "skeleton" } });
      const skeleton = screen.getByTestId("skeleton");

      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveClass(classes.root);
      expect(skeleton).toHaveClass(classes.animations.pulse);
      expect(skeleton).toHaveAttribute("aria-hidden", "true");
      expect(skeleton.tagName).toBe("SPAN");
    });
  });

  describe("variant prop", () => {
    it("applies rect variant (default, no extra class)", () => {
      render(Skeleton, { attrs: { "data-testid": "skeleton" } });
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass(classes.root);
      expect(skeleton).not.toHaveClass(classes.variants.circle);
      expect(skeleton).not.toHaveClass(classes.variants.text);
    });

    it("applies circle variant", () => {
      render(Skeleton, { props: { variant: "circle" }, attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.variants.circle);
    });

    it("applies text variant", () => {
      render(Skeleton, { props: { variant: "text" }, attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.variants.text);
    });
  });

  describe("animation prop", () => {
    it("applies pulse animation (default)", () => {
      render(Skeleton, { attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.animations.pulse);
    });

    it("applies wave animation", () => {
      render(Skeleton, { props: { animation: "wave" }, attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.animations.wave);
    });

    it("disables animation when false", () => {
      render(Skeleton, { props: { animation: false }, attrs: { "data-testid": "skeleton" } });
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).not.toHaveClass(classes.animations.pulse);
      expect(skeleton).not.toHaveClass(classes.animations.wave);
    });
  });

  describe("width and height props", () => {
    it("applies width as px when number", () => {
      render(Skeleton, { props: { width: 200 }, attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveStyle({ width: "200px" });
    });

    it("applies width as custom unit when string", () => {
      render(Skeleton, { props: { width: "50%" }, attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveStyle({ width: "50%" });
    });

    it("applies height as px when number", () => {
      render(Skeleton, { props: { height: 40 }, attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveStyle({ height: "40px" });
    });

    it("applies height as custom unit when string", () => {
      render(Skeleton, { props: { height: "100%" }, attrs: { "data-testid": "skeleton" } });
      expect(screen.getByTestId("skeleton")).toHaveStyle({ height: "100%" });
    });

    it("applies both width and height", () => {
      render(Skeleton, {
        props: { width: 100, height: 100 },
        attrs: { "data-testid": "skeleton" },
      });
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ width: "100px", height: "100px" });
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Skeleton, { props: { className: "custom" }, attrs: { "data-testid": "skeleton" } });
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("custom");
      expect(skeleton).toHaveClass(classes.root);
    });
  });

  describe("HTML attributes", () => {
    it("passes through data-testid attribute", () => {
      render(Skeleton, { attrs: { "data-testid": "my-skeleton" } });
      expect(screen.getByTestId("my-skeleton")).toBeInTheDocument();
    });
  });
});
