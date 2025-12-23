"use client";

import React from "react";

import clsx from "clsx";

import { CARD_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateCardCSS } from "@/core/css";
import { Icon } from "@/react/components/Icon";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { CardElement, CardProps } from "./Card.types";

const Card = React.memo(
  React.forwardRef<CardElement, CardProps>(
    (
      {
        variant = "elevated",
        padding = "medium",
        radius = "medium",
        loading = false,
        disabled = false,
        clickable = false,
        className,
        style,
        children,
        onClick,
        ...restProps
      },
      ref,
    ) => {
      const isDisabled: boolean = disabled || loading;
      const isClickable: boolean = clickable && !isDisabled;

      /**
       * inject component css
       */
      const CARD_CSS: string = generateCardCSS();
      useStyleInjection(COMPONENT_NAMES.Card, CARD_CSS);

      /**
       * get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * get component className
       */
      const cardClassName: string = clsx(
        CARD_CSS_CLASS_NAMES.base.className,
        isDisabled && CARD_CSS_CLASS_NAMES.disabled.className,
        loading && CARD_CSS_CLASS_NAMES.loading.className,
        isClickable && CARD_CSS_CLASS_NAMES.clickable.className,
        variant === "elevated" && CARD_CSS_CLASS_NAMES.variantElevated.className,
        variant === "outlined" && CARD_CSS_CLASS_NAMES.variantOutlined.className,
        variant === "filled" && CARD_CSS_CLASS_NAMES.variantFilled.className,
        padding === "none" && CARD_CSS_CLASS_NAMES.paddingNone.className,
        padding === "small" && CARD_CSS_CLASS_NAMES.paddingSmall.className,
        padding === "medium" && CARD_CSS_CLASS_NAMES.paddingMedium.className,
        padding === "large" && CARD_CSS_CLASS_NAMES.paddingLarge.className,
        radius === "none" && CARD_CSS_CLASS_NAMES.radiusNone.className,
        radius === "small" && CARD_CSS_CLASS_NAMES.radiusSmall.className,
        radius === "medium" && CARD_CSS_CLASS_NAMES.radiusMedium.className,
        radius === "large" && CARD_CSS_CLASS_NAMES.radiusLarge.className,
        className,
      );

      return (
        <article
          ref={ref}
          className={cardClassName}
          style={computedStyle}
          onClick={onClick}
          aria-busy={loading || undefined}
          aria-disabled={isDisabled || undefined}
          {...restProps}
        >
          {loading && (
            <span className={CARD_CSS_CLASS_NAMES.loadingIcon.className}>
              <Icon name="svg-spinners:ring-resize" />
            </span>
          )}
          <div className={CARD_CSS_CLASS_NAMES.content.className}>{children}</div>
        </article>
      );
    },
  ),
);

Card.displayName = COMPONENT_NAMES.Card;

export default Card;
