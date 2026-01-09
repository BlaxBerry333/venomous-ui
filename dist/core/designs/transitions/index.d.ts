/**
 * Standard easing function for consistent animations
 */
export declare const TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
/**
 * | Key              | Value                                              | Usage                           |
 * |:-----------------|:---------------------------------------------------|:--------------------------------|
 * | fast             | all 100ms cubic-bezier(0.4, 0, 0.2, 1)             | Quick interactions              |
 * | normal           | all 200ms cubic-bezier(0.4, 0, 0.2, 1)             | Normal animations               |
 * | slow             | all 300ms cubic-bezier(0.4, 0, 0.2, 1)             | Emphasized animations           |
 * | colors           | background-color, border-color, color 150ms        | Theme mode switching            |
 * | colorsAndShadow  | colors + box-shadow 150ms                          | Form fields, interactive cards  |
 * | transform        | transform 150ms                                    | Scale, translate animations     |
 * | transformFast    | transform 100ms                                    | Quick scale animations (button) |
 * | opacity          | opacity 150ms                                      | Fade animations                 |
 * | progress         | width/stroke-dashoffset 300ms                      | Progress bar/circle animations  |
 */
export declare const TRANSITIONS: ITransitions;
export type ITransitions = {
    /** Quick interactions (100ms) */
    fast: string;
    /** Normal animations (200ms) */
    normal: string;
    /** Emphasized animations (300ms) */
    slow: string;
    /** Color transitions for theme switching (150ms) - background-color, border-color, color */
    colors: string;
    /** Color + shadow transitions for interactive elements (150ms) */
    colorsAndShadow: string;
    /** Transform transition (150ms) */
    transform: string;
    /** Fast transform transition (100ms) - for button press feedback */
    transformFast: string;
    /** Opacity transition (150ms) */
    opacity: string;
    /** Progress animation timing (300ms) - use with width or stroke-dashoffset */
    progress: string;
};
//# sourceMappingURL=index.d.ts.map