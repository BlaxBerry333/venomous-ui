import { HTMLAttributes } from 'react';
export type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** 颜色，默认 'neutral' */
    variant?: BadgeVariant;
}
//# sourceMappingURL=Badge.type.d.ts.map