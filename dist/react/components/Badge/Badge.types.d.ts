import type { TBadgeBaseProps } from "../../../core/types";
import type { HTMLAttributes, ReactNode } from "react";
export type TBadgeProps = TBadgeBaseProps & {
    children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, keyof TBadgeBaseProps>;
//# sourceMappingURL=Badge.types.d.ts.map