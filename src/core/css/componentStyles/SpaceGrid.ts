import { SPACE_GRID_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS, IBreakpoints } from "@/core/designs";

/**
 * Generate CSS for Space.Grid
 */
export function generateSpaceGridCSS(): string {
  const base = SPACE_GRID_CSS_CLASS_NAMES.base.className;

  // Generate spacing classes
  const spacingCSS = Object.entries(DESIGN_TOKENS.spacings)
    .map(([key, value]) => {
      const spacingClass = SPACE_GRID_CSS_CLASS_NAMES[`spacing${key}` as keyof typeof SPACE_GRID_CSS_CLASS_NAMES];
      if (!spacingClass) return "";
      return `.${spacingClass.className} { gap: ${value}; }`;
    })
    .filter(Boolean)
    .join("\n");

  // Generate columns classes (1-12)
  const columnsCSS = Array.from({ length: 12 }, (_, i) => i + 1)
    .map((num) => {
      const columnsClass = SPACE_GRID_CSS_CLASS_NAMES[`columns${num}` as keyof typeof SPACE_GRID_CSS_CLASS_NAMES];
      if (!columnsClass) return "";
      return `.${columnsClass.className} { grid-template-columns: repeat(${num}, 1fr); }`;
    })
    .filter(Boolean)
    .join("\n");

  return `
/* ${SPACE_GRID_CSS_CLASS_NAMES.base.description} */
.${base} {
  box-sizing: border-box;
  display: grid;
  min-width: 0;
}

/* Spacing classes */
${spacingCSS}

/* Columns classes */
${columnsCSS}
  `.trim();
}

/**
 * Generate responsive CSS for grid columns (mobile-first approach)
 *
 * The smallest defined breakpoint becomes the base style (no media query),
 * and larger breakpoints use min-width media queries to override.
 *
 * @example
 * // Input: { sm: 2, lg: 4 }
 * // Output:
 * // .xxx { grid-template-columns: repeat(2, 1fr); }  // base (sm value)
 * // @media (min-width: 992px) { .xxx { grid-template-columns: repeat(4, 1fr); } }
 */
export function generateResponsiveGridCSS(
  uniqueClassName: string,
  columns: Partial<Record<keyof IBreakpoints, number>>,
): string {
  const breakpointOrder: (keyof IBreakpoints)[] = ["xs", "sm", "md", "lg", "xl"];

  // Find defined breakpoints in order
  const definedBreakpoints = breakpointOrder.filter((bp) => columns[bp] !== undefined);

  if (definedBreakpoints.length === 0) return "";

  // First defined breakpoint is the base (no media query)
  const [baseBreakpoint, ...restBreakpoints] = definedBreakpoints;
  const baseColCount = columns[baseBreakpoint]!;

  const cssRules: string[] = [
    // Base style (smallest defined breakpoint, no media query)
    `.${uniqueClassName} { grid-template-columns: repeat(${baseColCount}, 1fr); }`,
  ];

  // Add media queries for remaining breakpoints
  for (const bp of restBreakpoints) {
    const colCount = columns[bp]!;
    cssRules.push(
      `@media (min-width: ${DESIGN_TOKENS.breakpoints[bp]}) { .${uniqueClassName} { grid-template-columns: repeat(${colCount}, 1fr); } }`,
    );
  }

  return cssRules.join("\n");
}
