import { ISpacings } from "@/core/designs";
import type { BoxElement, BoxProps, BoxRenderElement } from "../../Box/Box.types";

export type FlexElement = BoxElement;
export type FlexRenderElement = BoxRenderElement;

export interface FlexProps extends BoxProps {
  /** Gap between children, same as theme.spacing() */
  spacing?: keyof ISpacings;
  /** Use column direction (flex-direction: column) */
  column?: boolean;
}
