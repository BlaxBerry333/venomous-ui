import { render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES } from "@/core/constants";
import Portal from "./Portal";

describe("Portal", () => {
  beforeEach(() => {
    // Clean up any portal containers from previous tests
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
  });

  afterEach(() => {
    // Clean up after each test
    document.querySelectorAll("[data-portal]").forEach((el) => el.remove());
    document.querySelectorAll("[data-testid='custom-container']").forEach((el) => el.remove());
  });

  // Basic render test
  it("renders children to document.body by default", () => {
    render(
      <Portal>
        <div data-testid="portal-content">Content</div>
      </Portal>,
    );

    const content = screen.getByTestId("portal-content");
    expect(content).toBeInTheDocument();
    expect(content.textContent).toBe("Content");

    // Verify it's rendered in a portal container appended to body
    const portalContainer = document.querySelector(`[data-portal="${COMPONENT_NAMES.Portal}"]`);
    expect(portalContainer).toBeInTheDocument();
    expect(portalContainer?.contains(content)).toBe(true);
  });

  // CSS selector test
  it("renders children to specified container selector", () => {
    // Create a custom container
    const customContainer = document.createElement("div");
    customContainer.id = "custom-portal-root";
    customContainer.setAttribute("data-testid", "custom-container");
    document.body.appendChild(customContainer);

    render(
      <Portal container="#custom-portal-root">
        <div data-testid="portal-content">Content in custom container</div>
      </Portal>,
    );

    const content = screen.getByTestId("portal-content");
    expect(content).toBeInTheDocument();
    expect(customContainer.contains(content)).toBe(true);
  });

  // HTMLElement test
  it("renders children to specified HTMLElement", () => {
    const customContainer = document.createElement("div");
    customContainer.setAttribute("data-testid", "custom-container");
    document.body.appendChild(customContainer);

    render(
      <Portal container={customContainer}>
        <div data-testid="portal-content">Content in element</div>
      </Portal>,
    );

    const content = screen.getByTestId("portal-content");
    expect(content).toBeInTheDocument();
    expect(customContainer.contains(content)).toBe(true);
  });

  // Ref test
  it("renders children to specified ref", () => {
    function TestComponent() {
      const containerRef = React.useRef<HTMLDivElement>(null);

      return (
        <>
          <div ref={containerRef} data-testid="ref-container" />
          <Portal container={containerRef}>
            <div data-testid="portal-content">Content in ref</div>
          </Portal>
        </>
      );
    }

    render(<TestComponent />);

    const content = screen.getByTestId("portal-content");
    const refContainer = screen.getByTestId("ref-container");
    expect(content).toBeInTheDocument();
    expect(refContainer.contains(content)).toBe(true);
  });

  // Cleanup test
  it("cleans up auto-created container on unmount", () => {
    const { unmount } = render(
      <Portal>
        <div>Content</div>
      </Portal>,
    );

    // Verify portal container exists
    const portalContainer = document.querySelector(`[data-portal="${COMPONENT_NAMES.Portal}"]`);
    expect(portalContainer).toBeInTheDocument();

    // Unmount
    unmount();

    // Verify portal container is removed
    const portalContainerAfter = document.querySelector(`[data-portal="${COMPONENT_NAMES.Portal}"]`);
    expect(portalContainerAfter).not.toBeInTheDocument();
  });

  // User-provided container should not be removed
  it("does not remove user-provided container on unmount", () => {
    const customContainer = document.createElement("div");
    customContainer.id = "user-container";
    customContainer.setAttribute("data-testid", "custom-container");
    document.body.appendChild(customContainer);

    const { unmount } = render(
      <Portal container="#user-container">
        <div>Content</div>
      </Portal>,
    );

    unmount();

    // User-provided container should still exist
    expect(document.getElementById("user-container")).toBeInTheDocument();
  });

  // Error handling test
  it("logs error when container selector not found", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <Portal container="#non-existent-container">
        <div data-testid="portal-content">Content</div>
      </Portal>,
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Could not find selector "#non-existent-container"'),
    );

    consoleSpy.mockRestore();
  });

  // displayName test
  it("has correct displayName", () => {
    expect(Portal.displayName).toBe(COMPONENT_NAMES.Portal);
  });

  // Multiple children test
  it("renders multiple children correctly", () => {
    render(
      <Portal>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </Portal>,
    );

    expect(screen.getByTestId("child-1")).toBeInTheDocument();
    expect(screen.getByTestId("child-2")).toBeInTheDocument();
  });

  // Fragment children test
  it("renders fragment children correctly", () => {
    render(
      <Portal>
        <>
          <div data-testid="fragment-child-1">Fragment Child 1</div>
          <div data-testid="fragment-child-2">Fragment Child 2</div>
        </>
      </Portal>,
    );

    expect(screen.getByTestId("fragment-child-1")).toBeInTheDocument();
    expect(screen.getByTestId("fragment-child-2")).toBeInTheDocument();
  });

  // Null children test
  it("handles null children gracefully", () => {
    render(<Portal>{null}</Portal>);

    const portalContainer = document.querySelector(`[data-portal="${COMPONENT_NAMES.Portal}"]`);
    expect(portalContainer).toBeInTheDocument();
    expect(portalContainer?.children.length).toBe(0);
  });
});
