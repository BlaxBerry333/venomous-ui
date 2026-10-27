import { HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** 'outlined' 描边 / 'elevated' 阴影；默认 'outlined' */
    variant?: 'outlined' | 'elevated';
}
export type CardSectionProps = HTMLAttributes<HTMLDivElement>;
export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;
//# sourceMappingURL=Card.type.d.ts.map