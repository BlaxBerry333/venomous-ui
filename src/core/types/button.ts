/**
 * Button component base types
 * Extended by React and Vue implementations
 */

import type { TColorScheme, TSize, TVariant } from "./common";

export interface TButtonBaseProps {
  /** Button size */
  size?: TSize;
  /** Button variant */
  variant?: TVariant;
  /** Color scheme */
  colorScheme?: TColorScheme;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button takes full width */
  fullWidth?: boolean;
  /** Additional CSS class names */
  className?: string;
}
