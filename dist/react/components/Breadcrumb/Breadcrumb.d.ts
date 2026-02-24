import type { TBreadcrumbProps } from "./Breadcrumb.types";
/**
 * Breadcrumb root component
 * Renders a <nav> with an <ol> list inside
 * Automatically inserts separator nodes between children
 */
export declare const Breadcrumb: React.ForwardRefExoticComponent<TBreadcrumbProps & React.RefAttributes<HTMLElement>> & {
    Item: typeof BreadcrumbItem;
    Ellipsis: typeof BreadcrumbEllipsis;
};
/**
 * Breadcrumb.Item component
 * Renders <li> with either <a> (when href provided) or <span>
 */
declare const BreadcrumbItem: import("react").ForwardRefExoticComponent<import("../../../core/types").TBreadcrumbItemBaseProps & {
    children: import("react").ReactNode;
} & Omit<import("react").HTMLAttributes<HTMLLIElement>, keyof import("../../../core/types").TBreadcrumbItemBaseProps> & import("react").RefAttributes<HTMLLIElement>>;
/**
 * Breadcrumb.Ellipsis component
 * Renders <li> with ellipsis placeholder (…)
 */
declare const BreadcrumbEllipsis: import("react").ForwardRefExoticComponent<import("../../../core/types").TBreadcrumbEllipsisBaseProps & {
    children?: import("react").ReactNode;
} & Omit<import("react").HTMLAttributes<HTMLLIElement>, "className"> & import("react").RefAttributes<HTMLLIElement>>;
export { BreadcrumbEllipsis, BreadcrumbItem };
//# sourceMappingURL=Breadcrumb.d.ts.map