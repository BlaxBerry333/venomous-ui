"use client";

import React from "react";

import clsx from "clsx";

import { AVATAR_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { generateAvatarCSS } from "@/core/css";
import { Icon } from "@/react/components/Icon";
import { useComputedStyle, useStyleInjection } from "@/react/hooks";
import type { AvatarElement, AvatarProps } from "./Avatar.types";

/**
 * Avatar content rendering flow:
 *
 * 1. children (highest priority) - Custom content, overrides everything
 * 2. imageSrc - Display image if provided and loads successfully
 * 3. fallbackText - Display text if imageSrc not provided or failed to load
 * 4. fallbackIcon - Display icon if no text
 * 5. Default icon - Person icon as last resort
 */
const Avatar = React.memo(
  React.forwardRef<AvatarElement, AvatarProps>(
    (
      {
        size = "medium",
        variant = "circular",
        imageSrc,
        alt,
        fallbackText,
        fallbackIcon,
        ImageProps,
        onImageLoadError,
        className,
        style,
        children,
        ...restProps
      },
      ref,
    ) => {
      const [imageError, setImageError] = React.useState(false);

      /**
       * 1. Inject component CSS
       */
      const AVATAR_CSS = generateAvatarCSS();
      useStyleInjection(COMPONENT_NAMES.Avatar, AVATAR_CSS);

      /**
       * 2. Compute style (supports theme callback function)
       */
      const computedStyle = useComputedStyle(style);

      /**
       * 3. Handle image error - triggers fallback rendering
       */
      const handleImageError = React.useCallback(
        (event: React.SyntheticEvent<HTMLImageElement>) => {
          setImageError(true);
          onImageLoadError?.(event);
        },
        [onImageLoadError],
      );

      /**
       * 4. Reset error state when imageSrc changes
       */
      React.useEffect(() => {
        setImageError(false);
      }, [imageSrc]);

      /**
       * 5. Build className
       */
      const hasValidImage = imageSrc && !imageError;
      const avatarClassName = clsx(
        AVATAR_CSS_CLASS_NAMES.base.className,
        size === "small" && AVATAR_CSS_CLASS_NAMES.sizeSmall.className,
        size === "medium" && AVATAR_CSS_CLASS_NAMES.sizeMedium.className,
        size === "large" && AVATAR_CSS_CLASS_NAMES.sizeLarge.className,
        variant === "circular" && AVATAR_CSS_CLASS_NAMES.variantCircular.className,
        variant === "rounded" && AVATAR_CSS_CLASS_NAMES.variantRounded.className,
        variant === "square" && AVATAR_CSS_CLASS_NAMES.variantSquare.className,
        hasValidImage && AVATAR_CSS_CLASS_NAMES.hasImage.className,
        className,
      );

      /**
       * 6. Render content based on priority
       */
      const renderContent = () => {
        // Priority 1: Custom children
        if (children) {
          return children;
        }

        // Priority 2: Image (if valid)
        if (hasValidImage) {
          return (
            <img
              src={imageSrc}
              alt={alt}
              className={AVATAR_CSS_CLASS_NAMES.image.className}
              onError={handleImageError}
              {...ImageProps}
            />
          );
        }

        // Priority 3: Fallback text
        if (fallbackText) {
          return <span className={AVATAR_CSS_CLASS_NAMES.fallback.className}>{fallbackText}</span>;
        }

        // Priority 4: Fallback icon
        if (fallbackIcon) {
          return <span className={AVATAR_CSS_CLASS_NAMES.fallback.className}>{fallbackIcon}</span>;
        }

        // Priority 5: Default person icon
        return (
          <span className={AVATAR_CSS_CLASS_NAMES.fallback.className}>
            <Icon icon="mdi:account" />
          </span>
        );
      };

      return (
        <div
          ref={ref}
          className={avatarClassName}
          style={computedStyle}
          role="img"
          aria-label={alt || fallbackText || "avatar"}
          {...restProps}
        >
          {renderContent()}
        </div>
      );
    },
  ),
);

Avatar.displayName = COMPONENT_NAMES.Avatar;

export default Avatar;
