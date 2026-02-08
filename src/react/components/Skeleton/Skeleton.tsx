import { forwardRef, useMemo } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import type { TSkeletonProps } from "./Skeleton.types";

const classes = CSS_CLASSES.skeleton;

/**
 * Skeleton component for React
 *
 * A placeholder loading indicator with pulse or wave animation.
 * Use to show content layout while data is loading.
 */
export const Skeleton = forwardRef<HTMLSpanElement, TSkeletonProps>(function Skeleton(
  { variant = "rect", animation = "pulse", width, height, className = "", style, ...rest },
  ref,
) {
  const classNames = [
    classes.root,
    variant !== "rect" ? classes.variants[variant] : "",
    animation ? classes.animations[animation] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle = useMemo(() => {
    const s: React.CSSProperties = { ...style };
    if (width !== undefined) s.width = typeof width === "number" ? `${width}px` : width;
    if (height !== undefined) s.height = typeof height === "number" ? `${height}px` : height;
    return s;
  }, [width, height, style]);

  return <span ref={ref} className={classNames} style={mergedStyle} aria-hidden="true" {...rest} />;
});

Skeleton.displayName = COMPONENT_NAMES.Skeleton;
