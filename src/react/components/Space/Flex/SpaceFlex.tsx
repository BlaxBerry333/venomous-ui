"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, SPACE_FLEX_CSS_CLASS_NAMES } from "@/core/constants";
import { generateSpaceFlexCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { SpaceFlexElement, SpaceFlexProps, SpaceFlexRenderElement } from "./SpaceFlex.types";

const SpaceFlex = React.memo(
  React.forwardRef<SpaceFlexElement, SpaceFlexProps>(
    ({ as: _as = "div", spacing = 0, column = false, className, style, children, ...restProps }, ref) => {
      const Element = _as as React.ElementType;

      /**
       * inject component css
       */
      const SPACE_FLEX_CSS: string = generateSpaceFlexCSS();
      useStyleInjection(COMPONENT_NAMES.SpaceFlex, SPACE_FLEX_CSS);

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component className
       */
      const flexClassName: string = clsx(
        SPACE_FLEX_CSS_CLASS_NAMES.base.className,
        column && SPACE_FLEX_CSS_CLASS_NAMES.column.className,
        SPACE_FLEX_CSS_CLASS_NAMES[`spacing${spacing}` as keyof typeof SPACE_FLEX_CSS_CLASS_NAMES]?.className,
        className,
      );

      return (
        <Element ref={ref} className={flexClassName} style={computedStyle} {...restProps}>
          {children}
        </Element>
      );
    },
  ),
) as (<E extends SpaceFlexRenderElement = "div">(
  props: SpaceFlexProps & { as?: E } & React.RefAttributes<SpaceFlexElement>,
) => React.ReactElement | null) & { displayName?: string };

SpaceFlex.displayName = COMPONENT_NAMES.SpaceFlex;

export default SpaceFlex;
