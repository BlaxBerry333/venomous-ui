import type { TBreadcrumbBaseProps, TBreadcrumbEllipsisBaseProps, TBreadcrumbItemBaseProps } from "../../../core/types";
import type { HTMLAttributes, ReactNode } from "react";
/**
 * Props for Breadcrumb root component
 */
export type TBreadcrumbProps = Omit<TBreadcrumbBaseProps, "separator"> & {
    /** Custom separator between items. Accepts string or ReactNode (e.g. Icon component). Default: "/" */
    separator?: ReactNode;
    /** Breadcrumb items */
    children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, keyof TBreadcrumbBaseProps>;
/**
 * Props for Breadcrumb.Item component
 */
export type TBreadcrumbItemProps = TBreadcrumbItemBaseProps & {
    /** Item content (link text or page name) */
    children: ReactNode;
} & Omit<HTMLAttributes<HTMLLIElement>, keyof TBreadcrumbItemBaseProps>;
/**
 * Props for Breadcrumb.Ellipsis component
 */
export type TBreadcrumbEllipsisProps = TBreadcrumbEllipsisBaseProps & {
    /** Custom ellipsis content (defaults to "…") */
    children?: ReactNode;
} & Omit<HTMLAttributes<HTMLLIElement>, keyof TBreadcrumbEllipsisBaseProps>;
//# sourceMappingURL=Breadcrumb.types.d.ts.map