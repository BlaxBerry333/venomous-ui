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
export declare function isLightColor(hex: string, threshold?: number): boolean;
//# sourceMappingURL=isLightColor.d.ts.map