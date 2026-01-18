import type { CSSProperties, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
type AsProp<E extends React.ElementType> = {
    /** Render as a different HTML element */
    as?: E;
};
type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);
type PolymorphicComponentProps<E extends React.ElementType, Props = object> = Props & AsProp<E> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;
export type FadeElement = HTMLDivElement | HTMLElement;
interface FadeBaseProps {
    /** Whether the content is visible */
    open?: boolean;
    /** Children content */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
}
export type FadeProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, FadeBaseProps>;
export {};
//# sourceMappingURL=Fade.types.d.ts.map