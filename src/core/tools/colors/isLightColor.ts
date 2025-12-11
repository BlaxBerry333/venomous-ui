/**
 * Determine if a hex color is considered "light"
 *
 * Uses relative luminance formula (WCAG standard) to calculate
 * perceived brightness of a color.
 *
 * @param hex - Hex color string (e.g., "#ffffff")
 * @param threshold - Luminance threshold (0-1), defaults to 0.5
 * @returns true if the color is light, false if dark
 *
 * @example
 * isLightColor("#ffffff")  // true
 * isLightColor("#000000")  // false
 * isLightColor("#3b82f6")  // false (blue is perceived as dark)
 */
export function isLightColor(hex: string, threshold: number = 0.5): boolean {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return true; // Default to light if invalid

  const r = parseInt(result[1], 16) / 255;
  const g = parseInt(result[2], 16) / 255;
  const b = parseInt(result[3], 16) / 255;

  // Convert to linear RGB
  const toLinear = (c: number): number => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };

  // Calculate relative luminance (WCAG formula)
  const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  return luminance > threshold;
}
