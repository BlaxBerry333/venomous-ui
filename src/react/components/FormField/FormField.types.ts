import type { ReactElement, ReactNode } from "react";

import type { TFormFieldControlPosition, TFormSize, TOrientation } from "@/core/types";

export interface TFormFieldProps {
  /** Field label */
  label?: ReactNode;
  /** Whether the field is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Tooltip content (shown next to label) */
  tooltip?: string;
  /** Tooltip trigger icon */
  tooltipIcon?: ReactNode;
  /** Field size (affects label font size) */
  size?: TFormSize;
  /** Layout orientation */
  orientation?: TOrientation;
  /** Control position in horizontal layout (for checkbox/radio/switch) */
  controlPosition?: TFormFieldControlPosition;
  /** Custom class name */
  className?: string;
  /** Form control element - will receive auto-generated id and aria props */
  children: ReactElement;
}
