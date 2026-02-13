/**
 * Breadcrumb component types
 */
/**
 * Base props for Breadcrumb root component
 * Note: separator type is framework-specific — React extends to ReactNode, Vue uses #separator slot
 */
export interface TBreadcrumbBaseProps {
    /** Custom separator between items (default: "/"). React extends this to ReactNode. */
    separator?: string;
    /** Additional CSS class names */
    className?: string;
}
/**
 * Base props for Breadcrumb.Item component
 */
export interface TBreadcrumbItemBaseProps {
    /** Link URL — renders <a> when provided, <span> otherwise */
    href?: string;
    /** Marks this item as the current page (adds aria-current="page") */
    isCurrentPage?: boolean;
    /** Whether the item is disabled (renders span instead of link) */
    disabled?: boolean;
    /** Additional CSS class names */
    className?: string;
}
/**
 * Base props for Breadcrumb.Ellipsis component
 */
export interface TBreadcrumbEllipsisBaseProps {
    /** Additional CSS class names */
    className?: string;
}
//# sourceMappingURL=breadcrumb.d.ts.map