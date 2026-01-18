import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../../core/theme";
export type TypographyParagraphElement = HTMLParagraphElement;
export interface TypographyParagraphProps extends Omit<HTMLAttributes<TypographyParagraphElement>, "style"> {
    /** Children content */
    children?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
    /**
     * Number of lines before truncation with ellipsis.
     * 0 = no truncation (default)
     */
    ellipsis?: number;
}
//# sourceMappingURL=TypographyParagraph.types.d.ts.map