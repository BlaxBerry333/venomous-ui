import { hexToHsl } from "./hexToHsl";
import { hslToHex } from "./hslToHex";

/**
 * Get a lighter version of a hex color
 *
 * @param hex - Hex color string (e.g., "#3b82f6")
 * @param amount - Amount to lighten (0-100), defaults to 10
 * @returns Lighter hex color string
 *
 * @example
 * getLighter("#3b82f6")      // "#5a9af7" (10% lighter)
 * getLighter("#3b82f6", 20)  // "#7ab2f9" (20% lighter)
 */
export function getLighter(hex: string, amount: number = 10): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;

  // Increase lightness, capped at 100
  const newL = Math.min(100, hsl.l + amount);

  return hslToHex(hsl.h, hsl.s, newL);
}
