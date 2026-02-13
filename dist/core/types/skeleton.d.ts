/**
 * Skeleton component base types
 */
export type TSkeletonAnimation = "pulse" | "wave";
export type TSkeletonVariant = "rect" | "circle" | "text";
export interface TSkeletonBaseProps {
    /** Shape variant */
    variant?: TSkeletonVariant;
    /** Animation type, false to disable */
    animation?: TSkeletonAnimation | false;
    /** Width (number for px, string for custom units) */
    width?: number | string;
    /** Height (number for px, string for custom units) */
    height?: number | string;
    /** Additional CSS class names */
    className?: string;
}
//# sourceMappingURL=skeleton.d.ts.map