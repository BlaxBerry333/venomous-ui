"use client";

import React from "react";
import { createPortal } from "react-dom";

import { COMPONENT_NAMES } from "@/core/constants";
import type { PortalProps } from "./Portal.types";

const Portal = React.memo<PortalProps>(({ children, container }) => {
  const [mountNode, setMountNode] = React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    // SSR guard
    if (typeof document === "undefined") {
      return;
    }

    let targetNode: HTMLElement | null = null;
    let shouldCleanup = false;

    if (container === undefined) {
      // Create a new div and append to body
      targetNode = document.createElement("div");
      targetNode.setAttribute("data-portal", COMPONENT_NAMES.Portal);
      document.body.appendChild(targetNode);
      shouldCleanup = true;
    } else {
      // Resolve the provided container
      targetNode = resolveContainer(container);

      if (!targetNode) {
        const containerDesc = typeof container === "string" ? `selector "${container}"` : "provided container";
        console.error(`Portal: Could not find ${containerDesc}`);
      }
    }

    setMountNode(targetNode);

    return () => {
      if (shouldCleanup && targetNode && targetNode.parentNode) {
        targetNode.parentNode.removeChild(targetNode);
      }
    };
  }, [container]);

  // Don't render anything if no mount node (SSR or container not found)
  if (!mountNode) {
    return null;
  }

  return createPortal(children, mountNode);
});

Portal.displayName = COMPONENT_NAMES.Portal;

export default Portal;

/**
 * Resolves the container from various input types
 */
function resolveContainer(container: PortalProps["container"]): HTMLElement | null {
  // String selector
  if (typeof container === "string") {
    return document.querySelector(container);
  }

  // RefObject
  if (container && "current" in container) {
    return container.current;
  }

  // HTMLElement
  if (container instanceof HTMLElement) {
    return container;
  }

  return null;
}
