"use client";

import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { COMPONENT_NAMES, PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES } from "@/core/constants";
import { generateProgressPageLoadCSS } from "@/core/css";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { ProgressPageLoadElement, ProgressPageLoadProps } from "./PageLoad.types";

const PageLoad = React.memo(
  React.forwardRef<ProgressPageLoadElement, ProgressPageLoadProps>(
    ({ isLoading = false, value, className, style, ...restProps }, ref) => {
      const [progress, setProgress] = useState(0);
      const [visible, setVisible] = useState(false);
      const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
      const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

      /**
       * Inject component CSS
       */
      useStyleInjection(COMPONENT_NAMES.ProgressPageLoad, generateProgressPageLoadCSS());

      /**
       * Get component style
       */
      const computedStyle = useComputedStyle(style);

      /**
       * Handle loading state changes
       */
      useEffect(() => {
        // Clean up any existing intervals/timeouts
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        if (isLoading) {
          // Start loading
          setVisible(true);
          setProgress(0);

          // If value is provided, use it directly (determinate mode)
          if (value !== undefined) {
            setProgress(Math.min(Math.max(value, 0), 100));
          } else {
            // Indeterminate mode: simulate progress
            let currentProgress = 0;
            intervalRef.current = setInterval(() => {
              currentProgress += Math.random() * 10;
              if (currentProgress >= 90) {
                currentProgress = 90;
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                  intervalRef.current = null;
                }
              }
              setProgress(currentProgress);
            }, 200);
          }
        } else if (visible) {
          // Complete loading
          setProgress(100);
          timeoutRef.current = setTimeout(() => {
            setVisible(false);
            setProgress(0);
          }, 300);
        }

        return () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
      }, [isLoading, value, visible]);

      // Update progress when value changes in determinate mode
      useEffect(() => {
        if (isLoading && value !== undefined) {
          setProgress(Math.min(Math.max(value, 0), 100));
        }
      }, [isLoading, value]);

      /**
       * Get component className
       */
      const pageLoadClassName = clsx(
        PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.base.className,
        visible && PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.active.className,
        className,
      );

      return (
        <div
          ref={ref}
          className={pageLoadClassName}
          style={computedStyle}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-hidden={!visible}
          {...restProps}
        >
          <div className={PROGRESS_PAGE_LOAD_CSS_CLASS_NAMES.bar.className} style={{ width: `${progress}%` }} />
        </div>
      );
    },
  ),
);

PageLoad.displayName = COMPONENT_NAMES.ProgressPageLoad;

export default PageLoad;
