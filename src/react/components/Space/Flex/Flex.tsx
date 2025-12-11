"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, SPACE_FLEX_CSS_CLASS_NAMES } from "@/core/constants";
import { SPACE_FLEX_CSS } from "@/core/css";
import { DESIGN_TOKENS } from "@/core/designs";
import { Box } from "@/react/components/Box";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { FlexElement, FlexProps, FlexRenderElement } from "./Flex.types";

const Flex = React.memo(
  React.forwardRef<FlexElement, FlexProps>(
    ({ spacing = 0, column = false, className, style, children, ...restProps }, ref) => {
      /**
       * inject component css
       */
      useStyleInjection(COMPONENT_NAMES.SpaceFlex, SPACE_FLEX_CSS);

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      const flexStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: column ? "column" : "row",
        gap: DESIGN_TOKENS.spacings[spacing],
        ...computedStyle,
      };

      /**
       * get component className
       */
      const flexClassName: string = clsx(SPACE_FLEX_CSS_CLASS_NAMES.base.className, className);

      return (
        <Box ref={ref} className={flexClassName} style={flexStyle} {...restProps}>
          {children}
        </Box>
      );
    },
  ),
) as (<E extends FlexRenderElement = "div">(
  props: FlexProps & { as?: E } & React.RefAttributes<FlexElement>,
) => React.ReactElement | null) & { displayName?: string };

Flex.displayName = COMPONENT_NAMES.SpaceFlex;

export default Flex;
