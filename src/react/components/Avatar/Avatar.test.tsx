import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Avatar } from "./index";

const classes = CSS_CLASSES.avatar;

describe("Avatar", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(<Avatar data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");

      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveClass(classes.root);
      expect(avatar).toHaveClass(classes.sizes.md);
      expect(avatar).toHaveClass(classes.shapes.circle);
      expect(avatar).toHaveAttribute("role", "img");
      expect(avatar).toHaveAttribute("aria-label", "avatar");
    });

    it("renders image when src is provided", () => {
      render(<Avatar src="https://example.com/photo.jpg" alt="John" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      const img = avatar.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "https://example.com/photo.jpg");
    });

    it("renders initials when name is provided without src", () => {
      render(<Avatar name="John Doe" data-testid="avatar" />);

      expect(screen.getByText("JD")).toBeInTheDocument();
      expect(screen.getByTestId("avatar")).toHaveAttribute("aria-label", "John Doe");
    });

    it("renders icon fallback when no src and no name", () => {
      const icon = <span data-testid="custom-icon">★</span>;
      render(<Avatar icon={icon} data-testid="avatar" />);

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("renders alt text fallback when no src, no name, no icon", () => {
      render(<Avatar alt="fallback" data-testid="avatar" />);

      expect(screen.getByText("fallback")).toBeInTheDocument();
      expect(screen.getByTestId("avatar")).toHaveAttribute("aria-label", "fallback");
    });
  });

  describe("image error fallback", () => {
    it("falls back to initials when image fails to load", () => {
      render(<Avatar src="https://bad.url/photo.jpg" name="Jane Smith" data-testid="avatar" />);

      const img = screen.getByTestId("avatar").querySelector("img");
      expect(img).toBeInTheDocument();

      fireEvent.error(img!);

      expect(screen.getByText("JS")).toBeInTheDocument();
      expect(screen.queryByRole("img", { hidden: true })?.querySelector("img")).toBeNull();
    });
  });

  describe("size prop", () => {
    it("applies sm size", () => {
      render(<Avatar size="sm" data-testid="avatar" />);
      expect(screen.getByTestId("avatar")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size (default)", () => {
      render(<Avatar data-testid="avatar" />);
      expect(screen.getByTestId("avatar")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size", () => {
      render(<Avatar size="lg" data-testid="avatar" />);
      expect(screen.getByTestId("avatar")).toHaveClass(classes.sizes.lg);
    });
  });

  describe("shape prop", () => {
    it("applies circle shape (default)", () => {
      render(<Avatar data-testid="avatar" />);
      expect(screen.getByTestId("avatar")).toHaveClass(classes.shapes.circle);
    });

    it("applies square shape", () => {
      render(<Avatar shape="square" data-testid="avatar" />);
      expect(screen.getByTestId("avatar")).toHaveClass(classes.shapes.square);
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(<Avatar className="custom" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("custom");
      expect(avatar).toHaveClass(classes.root);
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref correctly", () => {
      let avatarRef: HTMLSpanElement | null = null;
      function TestComponent() {
        const ref = useRef<HTMLSpanElement>(null);
        avatarRef = ref.current;
        return <Avatar ref={ref} />;
      }
      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(avatarRef).toBeInstanceOf(HTMLSpanElement);
    });

    it("forwards ref with callback", () => {
      const refCallback = vi.fn();
      render(<Avatar ref={refCallback} />);

      expect(refCallback).toHaveBeenCalled();
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Avatar.displayName).toBe(COMPONENT_NAMES.Avatar);
    });
  });

  describe("HTML attributes", () => {
    it("passes through data-testid attribute", () => {
      render(<Avatar data-testid="my-avatar" />);
      expect(screen.getByTestId("my-avatar")).toBeInTheDocument();
    });
  });
});
