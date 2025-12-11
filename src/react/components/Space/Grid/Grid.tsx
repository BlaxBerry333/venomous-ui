"use client";

import type { CSSProperties } from "react";
import React, { useId, useMemo } from "react";

import clsx from "clsx";

import { COMPONENT_NAMES } from "@/core/constants";
import { DESIGN_TOKENS, IBreakpoints } from "@/core/designs";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import { Box } from "../../Box";
import type { GridElement, GridProps, GridRenderElement, ResponsiveColumns } from "./Grid.types";

/**
 * Generate responsive CSS for grid columns (mobile-first approach)
 *
 * The smallest defined breakpoint becomes the base style (no media query),
 * and larger breakpoints use min-width media queries to override.
 *
 * @example
 * // Input: { sm: 2, lg: 4 }
 * // Output:
 * // .xxx { grid-template-columns: repeat(2, 1fr); }  // base (sm value)
 * // @media (min-width: 992px) { .xxx { grid-template-columns: repeat(4, 1fr); } }
 */
function generateResponsiveGridCSS(uniqueClassName: string, columns: ResponsiveColumns): string {
  const breakpointOrder: (keyof IBreakpoints)[] = ["xs", "sm", "md", "lg", "xl"];

  // Find defined breakpoints in order
  const definedBreakpoints = breakpointOrder.filter((bp) => columns[bp] !== undefined);

  if (definedBreakpoints.length === 0) return "";

  // First defined breakpoint is the base (no media query)
  const [baseBreakpoint, ...restBreakpoints] = definedBreakpoints;
  const baseColCount = columns[baseBreakpoint]!;

  const cssRules: string[] = [
    // Base style (smallest defined breakpoint, no media query)
    `.${uniqueClassName} { grid-template-columns: repeat(${baseColCount}, 1fr); }`,
  ];

  // Add media queries for remaining breakpoints
  for (const bp of restBreakpoints) {
    const colCount = columns[bp]!;
    cssRules.push(
      `@media (min-width: ${DESIGN_TOKENS.breakpoints[bp]}) { .${uniqueClassName} { grid-template-columns: repeat(${colCount}, 1fr); } }`,
    );
  }

  return cssRules.join("\n");
}

const Grid = React.memo(
  React.forwardRef<GridElement, GridProps>(
    ({ spacing = 0, columns = 1, className, style, children, ...restProps }, ref) => {
      const uniqueId = useId();
      const isResponsive = typeof columns === "object";

      // Generate unique className for responsive columns
      const responsiveClassName = isResponsive ? `VENOMOUS_UI__Grid-responsive-${uniqueId.replace(/:/g, "")}` : "";

      // Generate responsive CSS when columns is an object
      const responsiveCSS = useMemo(() => {
        if (!isResponsive) return "";
        return generateResponsiveGridCSS(responsiveClassName, columns as ResponsiveColumns);
      }, [isResponsive, responsiveClassName, columns]);

      // Inject responsive CSS - pass empty string when not responsive (no-op)
      useStyleInjection(responsiveClassName || "noop", responsiveCSS);

      const computedStyle = useComputedStyle(style);

      const gridStyle: CSSProperties = {
        display: "grid",
        gap: DESIGN_TOKENS.spacings[spacing],
        // Only set grid-template-columns for numeric columns
        ...(typeof columns === "number" && { gridTemplateColumns: `repeat(${columns}, 1fr)` }),
        ...computedStyle,
      };

      const gridClassName: string = clsx(COMPONENT_NAMES.SpaceGrid, isResponsive && responsiveClassName, className);

      return (
        <Box ref={ref} className={gridClassName} style={gridStyle} {...restProps}>
          {children}
        </Box>
      );
    },
  ),
) as (<E extends GridRenderElement = "div">(
  props: GridProps & { as?: E } & React.RefAttributes<GridElement>,
) => React.ReactElement | null) & { displayName?: string };

Grid.displayName = COMPONENT_NAMES.SpaceGrid;

export default Grid;
