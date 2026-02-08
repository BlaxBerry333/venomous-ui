import { COMPONENT_NAMES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Portal } from "./index";

describe("Portal", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders children into document.body by default", () => {
      render(
        <Portal>
          <div data-testid="portal-content">Content</div>
        </Portal>,
      );

      const content = screen.getByTestId("portal-content");
      expect(content).toBeInTheDocument();
      expect(content.parentElement).toBe(document.body);
    });

    it("renders children into custom container element", () => {
      const container = document.createElement("div");
      container.setAttribute("data-testid", "custom-container");
      document.body.appendChild(container);

      render(
        <Portal container={container}>
          <div data-testid="portal-content">Content</div>
        </Portal>,
      );

      const content = screen.getByTestId("portal-content");
      expect(content).toBeInTheDocument();
      expect(content.parentElement).toBe(container);

      // Cleanup
      document.body.removeChild(container);
    });

    it("renders children into container via containerRef", () => {
      const container = document.createElement("div");
      container.setAttribute("data-testid", "ref-container");
      document.body.appendChild(container);

      const containerRef = { current: container };

      render(
        <Portal containerRef={containerRef}>
          <div data-testid="portal-content">Content</div>
        </Portal>,
      );

      const content = screen.getByTestId("portal-content");
      expect(content).toBeInTheDocument();
      expect(content.parentElement).toBe(container);

      // Cleanup
      document.body.removeChild(container);
    });

    it("prefers container prop over containerRef", () => {
      const container1 = document.createElement("div");
      const container2 = document.createElement("div");
      container1.setAttribute("data-testid", "container1");
      container2.setAttribute("data-testid", "container2");
      document.body.appendChild(container1);
      document.body.appendChild(container2);

      const containerRef = { current: container2 };

      render(
        <Portal container={container1} containerRef={containerRef}>
          <div data-testid="portal-content">Content</div>
        </Portal>,
      );

      const content = screen.getByTestId("portal-content");
      expect(content.parentElement).toBe(container1);

      // Cleanup
      document.body.removeChild(container1);
      document.body.removeChild(container2);
    });
  });

  // Disabled prop
  describe("disabled prop", () => {
    it("renders children in place when disabled is true", () => {
      render(
        <div data-testid="parent">
          <Portal disabled>
            <div data-testid="portal-content">Content</div>
          </Portal>
        </div>,
      );

      const content = screen.getByTestId("portal-content");
      expect(content).toBeInTheDocument();

      // Should be inside the parent div, not directly in body
      const parent = screen.getByTestId("parent");
      expect(parent.contains(content)).toBe(true);
    });

    it("renders into portal when disabled is false (default)", () => {
      render(
        <div data-testid="parent">
          <Portal disabled={false}>
            <div data-testid="portal-content">Content</div>
          </Portal>
        </div>,
      );

      const content = screen.getByTestId("portal-content");
      const parent = screen.getByTestId("parent");

      // Should NOT be inside the parent div
      expect(parent.contains(content)).toBe(false);
      // Should be in document.body
      expect(content.parentElement).toBe(document.body);
    });
  });

  // Multiple children
  describe("multiple children", () => {
    it("renders multiple children", () => {
      render(
        <Portal>
          <div data-testid="child1">Child 1</div>
          <div data-testid="child2">Child 2</div>
        </Portal>,
      );

      expect(screen.getByTestId("child1")).toBeInTheDocument();
      expect(screen.getByTestId("child2")).toBeInTheDocument();
    });
  });

  // Null container handling
  describe("null container handling", () => {
    it("falls back to document.body when container is null", () => {
      render(
        <Portal container={null}>
          <div data-testid="portal-content">Content</div>
        </Portal>,
      );

      const content = screen.getByTestId("portal-content");
      expect(content.parentElement).toBe(document.body);
    });

    it("falls back to document.body when containerRef.current is null", () => {
      const containerRef = { current: null };

      render(
        <Portal containerRef={containerRef}>
          <div data-testid="portal-content">Content</div>
        </Portal>,
      );

      const content = screen.getByTestId("portal-content");
      expect(content.parentElement).toBe(document.body);
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(Portal.displayName).toBe(COMPONENT_NAMES.Portal);
    });
  });

  // Cleanup
  describe("cleanup", () => {
    it("removes content from portal when unmounted", () => {
      const { unmount } = render(
        <Portal>
          <div data-testid="portal-content">Content</div>
        </Portal>,
      );

      expect(screen.getByTestId("portal-content")).toBeInTheDocument();

      unmount();

      expect(screen.queryByTestId("portal-content")).not.toBeInTheDocument();
    });
  });
});
