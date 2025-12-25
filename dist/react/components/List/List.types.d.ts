import type { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
import type { ListSpacing } from "../../../core/types";
type AsProp<E extends React.ElementType> = {
    /** Render as a different HTML element */
    as?: E;
};
type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);
type PolymorphicComponentProps<E extends React.ElementType, Props = object> = Props & AsProp<E> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;
export type ListElement = HTMLUListElement | HTMLOListElement | HTMLDivElement | HTMLElement;
interface ListBaseProps {
    /** Spacing between list items */
    spacing?: ListSpacing;
    /** Show dividers between items */
    divider?: boolean;
    /** Children content */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
export type ListProps<E extends React.ElementType = "ul"> = PolymorphicComponentProps<E, ListBaseProps>;
export type ListItemElement = HTMLLIElement | HTMLDivElement | HTMLElement;
interface ListItemBaseProps {
    /** Whether the item is selected */
    selected?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Click handler - when provided, item becomes interactive */
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    /** Element to render at the start of the item */
    StartElement?: ReactNode;
    /** Element to render at the end of the item */
    EndElement?: ReactNode;
    /** Children content */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
export type ListItemProps<E extends React.ElementType = "li"> = PolymorphicComponentProps<E, ListItemBaseProps>;
export type ListItemTextElement = HTMLDivElement;
export interface ListItemTextProps extends Omit<HTMLAttributes<ListItemTextElement>, "style"> {
    /** Primary text content */
    primary?: ReactNode;
    /** Secondary text content */
    secondary?: ReactNode;
    /**
     * Number of lines before truncation with ellipsis.
     * 0 = no truncation (default)
     * 1 = single line ellipsis
     * 2+ = multi-line ellipsis (uses -webkit-line-clamp)
     */
    ellipsis?: number;
    /** Children content (alternative to primary) */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
export {};
//# sourceMappingURL=List.types.d.ts.map