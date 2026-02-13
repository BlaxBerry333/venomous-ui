import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Skeleton } from "./index";

const classes = CSS_CLASSES.skeleton;

describe("Skeleton", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Skeleton data-testid="skeleton" />);
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
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass(classes.root);
      // rect variant doesn't add an extra class
      expect(skeleton).not.toHaveClass(classes.variants.circle);
      expect(skeleton).not.toHaveClass(classes.variants.text);
    });

    it("applies circle variant", () => {
      render(<Skeleton variant="circle" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.variants.circle);
    });

    it("applies text variant", () => {
      render(<Skeleton variant="text" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.variants.text);
    });
  });

  describe("animation prop", () => {
    it("applies pulse animation (default)", () => {
      render(<Skeleton data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.animations.pulse);
    });

    it("applies wave animation", () => {
      render(<Skeleton animation="wave" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveClass(classes.animations.wave);
    });

    it("disables animation when false", () => {
      render(<Skeleton animation={false} data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).not.toHaveClass(classes.animations.pulse);
      expect(skeleton).not.toHaveClass(classes.animations.wave);
    });
  });

  describe("width and height props", () => {
    it("applies width as px when number", () => {
      render(<Skeleton width={200} data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveStyle({ width: "200px" });
    });

    it("applies width as custom unit when string", () => {
      render(<Skeleton width="50%" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveStyle({ width: "50%" });
    });

    it("applies height as px when number", () => {
      render(<Skeleton height={40} data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveStyle({ height: "40px" });
    });

    it("applies height as custom unit when string", () => {
      render(<Skeleton height="100%" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveStyle({ height: "100%" });
    });

    it("applies both width and height", () => {
      render(<Skeleton width={100} height={100} data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ width: "100px", height: "100px" });
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Skeleton className="custom" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("custom");
      expect(skeleton).toHaveClass(classes.root);
    });
  });

  describe("style prop", () => {
    it("merges style with width/height", () => {
      render(<Skeleton width={100} style={{ borderRadius: "8px" }} data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ width: "100px", borderRadius: "8px" });
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let skeletonRef: HTMLSpanElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLSpanElement>(null);
        skeletonRef = ref.current;
        return <Skeleton ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(skeletonRef).toBeInstanceOf(HTMLSpanElement);
    });

    it("forwards ref with callback", () => {
      const refCallback = vi.fn();
      render(<Skeleton ref={refCallback} />);

      expect(refCallback).toHaveBeenCalled();
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Skeleton.displayName).toBe(COMPONENT_NAMES.Skeleton);
    });
  });

  describe("HTML attributes", () => {
    it("passes through data-testid attribute", () => {
      render(<Skeleton data-testid="my-skeleton" />);
      expect(screen.getByTestId("my-skeleton")).toBeInTheDocument();
    });
  });
});
