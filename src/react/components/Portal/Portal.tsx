import { createPortal } from "react-dom";

import { COMPONENT_NAMES } from "@/core/constants";
import type { TPortalProps } from "./Portal.types";

/**
 * Portal component for React
 * Renders children into a DOM node outside the parent hierarchy
 */
export function Portal({ children, container, containerRef, disabled = false }: TPortalProps) {
  // SSR safety check - only render portal on client
  /* v8 ignore next -- @preserve SSR environment cannot be simulated in jsdom */
  if (typeof document === "undefined") {
    return null;
  }

  if (disabled) {
    return <>{children}</>;
  }

  const targetContainer = container ?? containerRef?.current ?? document.body;

  return createPortal(children, targetContainer);
}

Portal.displayName = COMPONENT_NAMES.Portal;
