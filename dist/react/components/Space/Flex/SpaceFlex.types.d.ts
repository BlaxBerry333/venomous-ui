import { ISpacings } from "../../../../core/designs";
import type { BoxElement, BoxProps, BoxRenderElement } from "../../Box/Box.types";
export type SpaceFlexElement = BoxElement;
export type SpaceFlexRenderElement = BoxRenderElement;
export interface SpaceFlexProps extends BoxProps {
    /** Gap between children, same as theme.spacing() */
    spacing?: keyof ISpacings;
    /** Use column direction (flex-direction: column) */
    column?: boolean;
}
//# sourceMappingURL=SpaceFlex.types.d.ts.map