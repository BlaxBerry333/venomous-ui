"use client";

import React, { useId, useMemo } from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, SPACE_GRID_CSS_CLASS_NAMES } from "@/core/constants";
import { generateResponsiveGridCSS, generateSpaceGridCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type {
  SpaceGridElement,
  SpaceGridProps,
  SpaceGridRenderElement,
  SpaceGridResponsiveColumns,
} from "./SpaceGrid.types";

const SpaceGrid = React.memo(
  React.forwardRef<SpaceGridElement, SpaceGridProps>(
    ({ as: _as = "div", spacing = 0, columns = 1, className, style, children, ...restProps }, ref) => {
      const Element = _as as React.ElementType;
      const uniqueId = useId();
      const isResponsive = typeof columns === "object";

      /**
       * inject component css
       */
      const SPACE_GRID_CSS: string = generateSpaceGridCSS();
      useStyleInjection(COMPONENT_NAMES.SpaceGrid, SPACE_GRID_CSS);

      /**
       * inject responsive css (only when columns is responsive object)
       */
      const responsiveClassName = isResponsive ? `VENOMOUS_UI__Grid-responsive-${uniqueId.replace(/:/g, "")}` : "";
      const responsiveCSS = useMemo(() => {
        if (!isResponsive) return "";
        return generateResponsiveGridCSS(responsiveClassName, columns as SpaceGridResponsiveColumns);
      }, [isResponsive, responsiveClassName, columns]);

      useStyleInjection(responsiveClassName || "noop", responsiveCSS);

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component className
       */
      const gridClassName: string = clsx(
        SPACE_GRID_CSS_CLASS_NAMES.base.className,
        SPACE_GRID_CSS_CLASS_NAMES[`spacing${spacing}` as keyof typeof SPACE_GRID_CSS_CLASS_NAMES]?.className,
        // For numeric columns, use pre-defined className (columns1-12)
        typeof columns === "number" &&
          SPACE_GRID_CSS_CLASS_NAMES[`columns${columns}` as keyof typeof SPACE_GRID_CSS_CLASS_NAMES]?.className,
        // For responsive columns, use dynamic className
        isResponsive && responsiveClassName,
        className,
      );

      return (
        <Element ref={ref} className={gridClassName} style={computedStyle} {...restProps}>
          {children}
        </Element>
      );
    },
  ),
) as (<E extends SpaceGridRenderElement = "div">(
  props: SpaceGridProps & { as?: E } & React.RefAttributes<SpaceGridElement>,
) => React.ReactElement | null) & { displayName?: string };

SpaceGrid.displayName = COMPONENT_NAMES.SpaceGrid;

export default SpaceGrid;
