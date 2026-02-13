import type { TTooltipBaseProps } from "../../../core/types";
import type { ReactElement } from "react";
export interface TTooltipProps extends Omit<TTooltipBaseProps, "content"> {
    /** Tooltip content text */
    content: string;
    /** Trigger element (must be a single React element) */
    children: ReactElement;
}
//# sourceMappingURL=Tooltip.types.d.ts.map