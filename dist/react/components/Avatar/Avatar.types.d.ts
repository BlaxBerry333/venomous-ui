import type { TAvatarBaseProps } from "../../../core/types";
import type { HTMLAttributes, ReactNode } from "react";
export type TAvatarProps = TAvatarBaseProps & {
    /** Custom fallback icon (rendered when no src and no name) */
    icon?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, keyof TAvatarBaseProps>;
//# sourceMappingURL=Avatar.types.d.ts.map