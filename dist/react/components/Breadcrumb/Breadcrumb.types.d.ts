import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
type AsProp<E extends React.ElementType> = {
    as?: E;
};
type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);
type PolymorphicComponentProps<E extends React.ElementType, Props = object> = Props & AsProp<E> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;
export type BreadcrumbElement = HTMLElement;
interface BreadcrumbBaseProps {
    /** Custom separator element (default: "/") */
    separator?: ReactNode;
    /** Maximum number of items to display before collapsing */
    maxItems?: number;
    /** Number of items to show before the collapsed ellipsis (default: 1) */
    itemsBeforeCollapse?: number;
    /** Number of items to show after the collapsed ellipsis (default: 1) */
    itemsAfterCollapse?: number;
    /** Children content (Breadcrumb.Item elements) */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
export type BreadcrumbProps<E extends React.ElementType = "nav"> = PolymorphicComponentProps<E, BreadcrumbBaseProps>;
export type BreadcrumbItemElement = HTMLElement;
/**
 * BreadcrumbItem component props for user consumption.
 * For polymorphic usage with custom elements, use PolymorphicBreadcrumbItemProps<E>.
 */
export interface BreadcrumbItemProps {
    /** Polymorphic element type (default: "a", or "span" when active) */
    as?: React.ElementType;
    /** Whether this is the current/active page */
    active?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Icon element to display before the text */
    icon?: ReactNode;
    /** Link URL (when using default "a" element) */
    href?: string;
    /** Children content (link text) */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
/**
 * Internal polymorphic props type for component implementation.
 * Provides full type safety when using custom elements via `as` prop.
 */
export type PolymorphicBreadcrumbItemProps<E extends React.ElementType = "a"> = PolymorphicComponentProps<E, Omit<BreadcrumbItemProps, "as" | "href">>;
export interface BreadcrumbSeparatorProps extends Omit<HTMLAttributes<HTMLSpanElement>, "style"> {
    /** Separator content */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
export {};
//# sourceMappingURL=Breadcrumb.types.d.ts.map