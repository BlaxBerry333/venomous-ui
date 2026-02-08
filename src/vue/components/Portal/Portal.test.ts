import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Portal from "./Portal.vue";

describe("Portal", () => {
  describe("rendering", () => {
    it("renders children into document.body by default", () => {
      render(Portal, {
        slots: { default: '<div data-testid="portal-content">Content</div>' },
      });

      const content = screen.getByTestId("portal-content");
      expect(content).toBeInTheDocument();
      expect(content.parentElement).toBe(document.body);
    });

    it("renders children into custom container via to prop", () => {
      const container = document.createElement("div");
      container.setAttribute("id", "custom-container");
      document.body.appendChild(container);

      render(Portal, {
        props: { to: "#custom-container" },
        slots: { default: '<div data-testid="portal-content">Content</div>' },
      });

      const content = screen.getByTestId("portal-content");
      expect(content).toBeInTheDocument();
      expect(content.parentElement).toBe(container);

      document.body.removeChild(container);
    });
  });

  describe("disabled prop", () => {
    it("renders children in place when disabled is true", () => {
      const wrapper = document.createElement("div");
      wrapper.setAttribute("data-testid", "parent");
      document.body.appendChild(wrapper);

      render(Portal, {
        props: { disabled: true },
        slots: { default: '<div data-testid="portal-content">Content</div>' },
        container: wrapper,
      });

      const content = screen.getByTestId("portal-content");
      expect(content).toBeInTheDocument();

      const parent = screen.getByTestId("parent");
      expect(parent.contains(content)).toBe(true);

      document.body.removeChild(wrapper);
    });

    it("renders into portal when disabled is false (default)", () => {
      render(Portal, {
        props: { disabled: false },
        slots: { default: '<div data-testid="portal-content">Content</div>' },
      });

      const content = screen.getByTestId("portal-content");
      expect(content.parentElement).toBe(document.body);
    });
  });

  describe("multiple children", () => {
    it("renders multiple children", () => {
      render(Portal, {
        slots: {
          default: '<div data-testid="child1">Child 1</div><div data-testid="child2">Child 2</div>',
        },
      });

      expect(screen.getByTestId("child1")).toBeInTheDocument();
      expect(screen.getByTestId("child2")).toBeInTheDocument();
    });
  });

  describe("cleanup", () => {
    it("removes content from portal when unmounted", () => {
      const { unmount } = render(Portal, {
        slots: { default: '<div data-testid="portal-content">Content</div>' },
      });

      expect(screen.getByTestId("portal-content")).toBeInTheDocument();

      unmount();

      expect(screen.queryByTestId("portal-content")).not.toBeInTheDocument();
    });
  });
});
