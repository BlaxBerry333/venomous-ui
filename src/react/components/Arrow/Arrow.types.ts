import type { CSSProperties } from "react";

import type { ArrowDirection } from "@/core/types/components";

export interface ArrowProps {
  /**
   * Direction the arrow points toward
   */
  direction: ArrowDirection;

  /**
   * Arrow color
   * @default "currentColor"
   */
  color?: string;

  /**
   * Arrow size in pixels
   * @default 8
   */
  size?: number;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Custom styles
   */
  style?: CSSProperties;
}
