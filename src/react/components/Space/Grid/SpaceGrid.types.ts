import type { IBreakpoints, ISpacings } from "@/core/designs";
import type { BoxElement, BoxProps, BoxRenderElement } from "../../Box/Box.types";

export type SpaceGridResponsiveColumns = Partial<Record<keyof IBreakpoints, number>>;

export type SpaceGridElement = BoxElement;
export type SpaceGridRenderElement = BoxRenderElement;

export interface SpaceGridProps extends BoxProps {
  /** Gap between grid items, same as theme.spacing() */
  spacing?: keyof ISpacings;
  /** Number of columns, supports number or responsive object */
  columns?: number | SpaceGridResponsiveColumns;
}
