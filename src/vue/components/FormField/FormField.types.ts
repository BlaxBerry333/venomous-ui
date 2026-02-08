import type { TFormFieldControlPosition, TFormSize, TOrientation } from "@/core/types";

export interface TFormFieldProps {
  /** Field label */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Tooltip content (use with #tooltipIcon slot) */
  tooltip?: string;
  /** Field size (affects label font size) */
  size?: TFormSize;
  /** Layout orientation */
  orientation?: TOrientation;
  /** Control position in horizontal layout (for checkbox/radio/switch) */
  controlPosition?: TFormFieldControlPosition;
  /** Custom class name */
  className?: string;
}
