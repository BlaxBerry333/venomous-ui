"use client";

import React from "react";

import { Icon as IconifyIcon } from "@iconify/react";
import clsx from "clsx";

import { COMPONENT_NAMES, ICON_CSS_CLASS_NAMES } from "@/core/constants";
import { generateIconBaseCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { IconElement, IconProps } from "./Icon.types";

const Icon = React.memo(
  React.forwardRef<IconElement, IconProps>(({ width = 20, className, style, ...restProps }, ref) => {
    /**
     * inject component css
     */
    const ICON_CSS: string = generateIconBaseCSS();
    useStyleInjection(COMPONENT_NAMES.Icon, ICON_CSS);

    /**
     * get component style
     */
    const computedStyle = useComputedStyle(style);

    /**
     * get component className
     */
    const iconClassName: string = clsx(ICON_CSS_CLASS_NAMES.base.className, className);

    return (
      <IconifyIcon
        ref={ref}
        className={iconClassName}
        style={computedStyle}
        width={width}
        height={width}
        {...restProps}
      />
    );
  }),
);

Icon.displayName = COMPONENT_NAMES.Icon;

export default Icon;
