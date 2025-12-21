"use client";

import React, { useCallback, useEffect, useState } from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES } from "@/core/constants";
import { generateProgressScrollIndicatorCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { ProgressScrollIndicatorElement, ProgressScrollIndicatorProps } from "./ScrollIndicator.types";

const ScrollIndicator = React.memo(
  React.forwardRef<ProgressScrollIndicatorElement, ProgressScrollIndicatorProps>(
    ({ target, className, style, ...restProps }, ref) => {
      const [scrollProgress, setScrollProgress] = useState(0);

      /**
       * Inject component CSS
       */
      useStyleInjection(COMPONENT_NAMES.ProgressScrollIndicator, generateProgressScrollIndicatorCSS());

      /**
       * Get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Calculate scroll progress
       */
      const calculateProgress = useCallback(() => {
        let scrollTop: number;
        let scrollHeight: number;
        let clientHeight: number;

        if (target) {
          scrollTop = target.scrollTop;
          scrollHeight = target.scrollHeight;
          clientHeight = target.clientHeight;
        } else {
          scrollTop = window.scrollY || document.documentElement.scrollTop;
          scrollHeight = document.documentElement.scrollHeight;
          clientHeight = window.innerHeight;
        }

        const maxScroll = scrollHeight - clientHeight;
        if (maxScroll <= 0) {
          setScrollProgress(0);
          return;
        }

        const progress = (scrollTop / maxScroll) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      }, [target]);

      /**
       * Set up scroll listener
       */
      useEffect(() => {
        const scrollTarget = target || window;

        // Calculate initial progress
        calculateProgress();

        scrollTarget.addEventListener("scroll", calculateProgress, { passive: true });

        return () => {
          scrollTarget.removeEventListener("scroll", calculateProgress);
        };
      }, [target, calculateProgress]);

      /**
       * Get component className
       */
      const scrollIndicatorClassName = clsx(PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES.base.className, className);

      return (
        <div
          ref={ref}
          className={scrollIndicatorClassName}
          style={computedStyle}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
          {...restProps}
        >
          <div
            className={PROGRESS_SCROLL_INDICATOR_CSS_CLASS_NAMES.bar.className}
            style={{ transform: `scaleX(${scrollProgress / 100})` }}
          />
        </div>
      );
    },
  ),
);

ScrollIndicator.displayName = COMPONENT_NAMES.ProgressScrollIndicator;

export default ScrollIndicator;
