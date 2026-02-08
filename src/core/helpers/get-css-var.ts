/**
 * Get CSS variable value from :root
 * @param name - CSS variable name (with or without --)
 * @param fallback - Fallback value if variable not found
 * @returns Parsed number value or fallback
 */
export function getCssVar(name: string, fallback: number = 0): number {
  if (typeof document === "undefined") return fallback;
  const varName = name.startsWith("--") ? name : `--${name}`;
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}
