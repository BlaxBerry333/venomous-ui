import { hexToHsl } from "./hexToHsl";
import { hslToHex } from "./hslToHex";

/**
 * Get a darker version of a hex color
 *
 * @param hex - Hex color string (e.g., "#3b82f6")
 * @param amount - Amount to darken (0-100), defaults to 10
 * @returns Darker hex color string
 *
 * @example
 * getDarker("#3b82f6")      // "#2563eb" (10% darker)
 * getDarker("#3b82f6", 20)  // "#1d4ed8" (20% darker)
 */
export function getDarker(hex: string, amount: number = 10): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;

  // Decrease lightness, capped at 0
  const newL = Math.max(0, hsl.l - amount);

  return hslToHex(hsl.h, hsl.s, newL);
}
