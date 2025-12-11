import type { IBreakpoints, ISpacings } from "@/core/designs";
import type { BoxElement, BoxProps, BoxRenderElement } from "../../Box/Box.types";

/** Responsive columns configuration */
export type ResponsiveColumns = Partial<Record<keyof IBreakpoints, number>>;

export type GridElement = BoxElement;
export type GridRenderElement = BoxRenderElement;

export interface GridProps extends BoxProps {
  /** Gap between grid items, same as theme.spacing() */
  spacing?: keyof ISpacings;
  /** Number of columns, supports number or responsive object */
  columns?: number | ResponsiveColumns;
}
