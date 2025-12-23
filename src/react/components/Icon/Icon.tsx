"use client";

import React from "react";

import { Icon as IconifyIcon } from "@iconify/react";
import clsx from "clsx";

import { COMPONENT_NAMES, ICON_CSS_CLASS_NAMES } from "@/core/constants";
import { generateIconCSS } from "@/core/css";
import type { IconPresetColor } from "@/core/types";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { IconElement, IconProps } from "./Icon.types";

const PRESET_COLORS: IconPresetColor[] = ["inherit", "primary", "success", "error", "warning", "info"];

const Icon = React.memo(
  React.forwardRef<IconElement, IconProps>(({ name, width = 20, color, className, style, ...restProps }, ref) => {
    /**
     * inject component css
     */
    const ICON_CSS: string = generateIconCSS();
    useStyleInjection(COMPONENT_NAMES.Icon, ICON_CSS);

    /**
     * Determine if color is a preset color or custom color
     */
    const isPresetColor = color && PRESET_COLORS.includes(color as IconPresetColor);
    const customColor = color && !isPresetColor ? color : undefined;

    /**
     * get component style
     */
    const computedStyle = useComputedStyle(style);
    const finalStyle = customColor ? { ...computedStyle, color: customColor } : computedStyle;

    /**
     * get component className
     */
    const iconClassName: string = clsx(
      ICON_CSS_CLASS_NAMES.base.className,
      color === "inherit" && ICON_CSS_CLASS_NAMES.colorInherit.className,
      color === "primary" && ICON_CSS_CLASS_NAMES.colorPrimary.className,
      color === "success" && ICON_CSS_CLASS_NAMES.colorSuccess.className,
      color === "error" && ICON_CSS_CLASS_NAMES.colorError.className,
      color === "warning" && ICON_CSS_CLASS_NAMES.colorWarning.className,
      color === "info" && ICON_CSS_CLASS_NAMES.colorInfo.className,
      className,
    );

    return (
      <IconifyIcon
        ref={ref}
        icon={name}
        className={iconClassName}
        style={finalStyle}
        width={width}
        height={width}
        {...restProps}
      />
    );
  }),
);

Icon.displayName = COMPONENT_NAMES.Icon;

export default Icon;
