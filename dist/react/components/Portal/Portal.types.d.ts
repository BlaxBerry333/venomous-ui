import type { TPortalBaseProps } from "../../../core/types";
import type { ReactNode, RefObject } from "react";
export interface TPortalProps extends TPortalBaseProps {
    /** Content to render in the portal */
    children: ReactNode;
    /** Target container element */
    container?: Element | null;
    /** Ref to the target container element */
    containerRef?: RefObject<Element | null>;
}
//# sourceMappingURL=Portal.types.d.ts.map