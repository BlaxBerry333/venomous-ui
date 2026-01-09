import { ICssVariableNames } from "../../../core/constants";
/**
 * Get CSS var() reference string using callback pattern
 *
 * @param selector - Callback function to select a CSS variable name
 * @returns var(--venomous-...) string for use in CSS
 *
 * @example
 * ```typescript
 * const css = `
 *   .Button {
 *     background: ${getCssVar(v => v.palette.main)};
 *     color: ${getCssVar(v => v.text.primary)};
 *     box-shadow: ${getCssVar(v => v.shadow.small)};
 *   }
 * `;
 * ```
 * Resulting CSS:
 * ```css
 * .Button {
 *   background: var(--venomous-palette-main);
 *   color: var(--venomous-text-primary);
 *   box-shadow: var(--venomous-shadow-small);
 * }
 * ```
 */
export declare function getCssVar(selector: (variables: ICssVariableNames) => string): string;
//# sourceMappingURL=getCssVar.d.ts.map