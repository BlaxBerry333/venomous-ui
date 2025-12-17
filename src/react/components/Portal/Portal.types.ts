import type { PropsWithChildren, RefObject } from "react";

export interface PortalProps extends PropsWithChildren {
  /**
   * Target container for the portal.
   *
   * Supports multiple formats:
   * - `string` - CSS selector (e.g., "#modal-root", ".portal-container")
   * - `HTMLElement` - Direct DOM element reference
   * - `RefObject<HTMLElement>` - React ref object
   * - `undefined` - Creates a new div and appends to document.body (default)
   */
  container?: string | HTMLElement | RefObject<HTMLElement | null>;
}
