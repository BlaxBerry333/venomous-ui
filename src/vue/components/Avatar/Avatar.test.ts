import { CSS_CLASSES } from "@/core/constants";
import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Avatar from "./Avatar.vue";

const classes = CSS_CLASSES.avatar;

describe("Avatar", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(Avatar, { attrs: { "data-testid": "avatar" } });
      const avatar = screen.getByTestId("avatar");

      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveClass(classes.root);
      expect(avatar).toHaveClass(classes.sizes.md);
      expect(avatar).toHaveClass(classes.shapes.circle);
      expect(avatar).toHaveAttribute("role", "img");
      expect(avatar).toHaveAttribute("aria-label", "avatar");
    });

    it("renders image when src is provided", () => {
      render(Avatar, {
        props: { src: "https://example.com/photo.jpg", alt: "John" },
        attrs: { "data-testid": "avatar" },
      });
      const avatar = screen.getByTestId("avatar");
      const img = avatar.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "https://example.com/photo.jpg");
    });

    it("renders initials when name is provided without src", () => {
      render(Avatar, {
        props: { name: "John Doe" },
        attrs: { "data-testid": "avatar" },
      });

      expect(screen.getByText("JD")).toBeInTheDocument();
      expect(screen.getByTestId("avatar")).toHaveAttribute("aria-label", "John Doe");
    });

    it("renders icon fallback when no src and no name", () => {
      render(Avatar, {
        slots: { icon: '<span data-testid="custom-icon">★</span>' },
        attrs: { "data-testid": "avatar" },
      });

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("renders alt text fallback when no src, no name, no icon", () => {
      render(Avatar, {
        props: { alt: "fallback" },
        attrs: { "data-testid": "avatar" },
      });

      expect(screen.getByText("fallback")).toBeInTheDocument();
      expect(screen.getByTestId("avatar")).toHaveAttribute("aria-label", "fallback");
    });
  });

  describe("image error fallback", () => {
    it("resets imgFailed when src changes", async () => {
      const { rerender } = render(Avatar, {
        props: { src: "https://bad.url/photo.jpg", name: "Jane Smith" },
        attrs: { "data-testid": "avatar" },
      });

      // Trigger image error
      const img = screen.getByTestId("avatar").querySelector("img");
      await fireEvent.error(img!);
      expect(screen.getByText("JS")).toBeInTheDocument();

      // Change src — should reset imgFailed and show image again
      await rerender({ src: "https://new.url/photo.jpg", name: "Jane Smith" });
      const newImg = screen.getByTestId("avatar").querySelector("img");
      expect(newImg).toBeInTheDocument();
      expect(newImg).toHaveAttribute("src", "https://new.url/photo.jpg");
    });

    it("falls back to initials when image fails to load", async () => {
      render(Avatar, {
        props: { src: "https://bad.url/photo.jpg", name: "Jane Smith" },
        attrs: { "data-testid": "avatar" },
      });

      const img = screen.getByTestId("avatar").querySelector("img");
      expect(img).toBeInTheDocument();

      await fireEvent.error(img!);

      expect(screen.getByText("JS")).toBeInTheDocument();
      expect(screen.getByTestId("avatar").querySelector("img")).toBeNull();
    });
  });

  describe("size prop", () => {
    it("applies sm size", () => {
      render(Avatar, { props: { size: "sm" }, attrs: { "data-testid": "avatar" } });
      expect(screen.getByTestId("avatar")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size (default)", () => {
      render(Avatar, { attrs: { "data-testid": "avatar" } });
      expect(screen.getByTestId("avatar")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size", () => {
      render(Avatar, { props: { size: "lg" }, attrs: { "data-testid": "avatar" } });
      expect(screen.getByTestId("avatar")).toHaveClass(classes.sizes.lg);
    });
  });

  describe("shape prop", () => {
    it("applies circle shape (default)", () => {
      render(Avatar, { attrs: { "data-testid": "avatar" } });
      expect(screen.getByTestId("avatar")).toHaveClass(classes.shapes.circle);
    });

    it("applies square shape", () => {
      render(Avatar, { props: { shape: "square" }, attrs: { "data-testid": "avatar" } });
      expect(screen.getByTestId("avatar")).toHaveClass(classes.shapes.square);
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Avatar, { props: { className: "custom" }, attrs: { "data-testid": "avatar" } });
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("custom");
      expect(avatar).toHaveClass(classes.root);
    });
  });

  describe("HTML attributes", () => {
    it("passes through data-testid attribute", () => {
      render(Avatar, { attrs: { "data-testid": "my-avatar" } });
      expect(screen.getByTestId("my-avatar")).toBeInTheDocument();
    });
  });
});
