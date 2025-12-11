/**
 * Convert hex color to rgba format
 * @param hex - Hex color string (e.g., "#ff0000" or "ff0000")
 * @param alpha - Alpha value (0-1), defaults to 1
 * @returns RGBA color string
 */
export function hexToRgba(hex: string, alpha: number = 1): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
