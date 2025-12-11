"use client";

import React from "react";

import clsx from "clsx";

import { BOX_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { BOX_CSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { BoxElement, BoxProps, BoxRenderElement } from "./Box.types";

const Box = React.memo(
  React.forwardRef<BoxElement, BoxProps>(({ as: _as = "div", className, style, children, ...restProps }, ref) => {
    const Element = _as as React.ElementType;

    /**
     * inject component css
     */
    useStyleInjection(COMPONENT_NAMES.Box, BOX_CSS);

    /**
     * get component style
     */
    const computedStyle = useComputedStyle(style);

    /**
     * get component className
     */
    const iconClassName: string = clsx(BOX_CSS_CLASS_NAMES.base.className, className);

    return (
      <Element ref={ref} className={iconClassName} style={computedStyle} {...restProps}>
        {children}
      </Element>
    );
  }),
) as (<E extends BoxRenderElement = "div">(
  props: BoxProps & { as?: E } & React.RefAttributes<BoxElement>,
) => React.ReactElement | null) & { displayName?: string };

Box.displayName = COMPONENT_NAMES.Box;

export default Box;
