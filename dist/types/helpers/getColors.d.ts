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
export default function getColors(color: string): {
    origin: string;
    light: string;
    dark: string;
    opacity: string;
};
