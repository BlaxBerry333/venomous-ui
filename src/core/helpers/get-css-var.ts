/**
 * Get CSS variable value from :root
 * @param name - CSS variable name (with or without --)
 * @param fallback - Fallback value if variable not found
 * @returns Parsed number value or fallback
 */
export function getCssVar(name: string, fallback: number = 0): number {
  const varName = name.startsWith("--") ? name : `--${name}`;
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return parseInt(value, 10) || fallback;
}
