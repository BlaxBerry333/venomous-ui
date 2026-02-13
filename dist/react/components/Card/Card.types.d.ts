import type { TCardBaseProps } from "../../../core/types";
import type { HTMLAttributes, ReactNode } from "react";
export interface TCardProps extends TCardBaseProps, Omit<HTMLAttributes<HTMLDivElement>, keyof TCardBaseProps> {
    children?: ReactNode;
}
//# sourceMappingURL=Card.types.d.ts.map