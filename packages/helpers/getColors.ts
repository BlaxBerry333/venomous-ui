import { alpha, darken, lighten } from '@mui/material/styles';

/**
 * Get colors from a single color
 *
 * @param color Color to get colors from, can be hex, rgb, rgba, hsl, hsla, etc.
 *
 * @example
 * ```ts
 * const { origin, light, dark, opacity } = getColors("#009688");
 * ```
 */
export default function getColors(color: string) {
  return {
    origin: color,
    light: lighten(color, 0.5),
    dark: darken(color, 0.5),
    opacity: alpha(color, 0.2),
  };
}
