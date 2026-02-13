/**
 * Card component base types
 */
export type TCardVariant = "elevated" | "outline" | "filled";
export interface TCardBaseProps {
    /** Card variant style */
    variant?: TCardVariant;
    /** Enable hover effect for clickable cards */
    clickable?: boolean;
    /** Additional CSS class names */
    className?: string;
}
//# sourceMappingURL=card.d.ts.map