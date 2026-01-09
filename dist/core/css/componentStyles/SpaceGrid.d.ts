import { IBreakpoints } from "../../../core/designs";
/**
 * Generate CSS for Space.Grid
 */
export declare function generateSpaceGridCSS(): string;
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
export declare function generateResponsiveGridCSS(uniqueClassName: string, columns: Partial<Record<keyof IBreakpoints, number>>): string;
//# sourceMappingURL=SpaceGrid.d.ts.map