import { forwardRef, useEffect, useState } from "react";

import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { getAvatarInitials } from "@/core/helpers";
import type { TAvatarProps } from "./Avatar.types";

const classes = CSS_CLASSES.avatar;

/**
 * Avatar component for React
 *
 * Displays a user avatar with image, initials text, or custom icon.
 */
export const Avatar = forwardRef<HTMLSpanElement, TAvatarProps>(function Avatar(
  { src, alt, name, size = "md", shape = "circle", icon, className = "", ...rest },
  ref,
) {
  const [imgFailed, setImgFailed] = useState(false);

  // Reset imgFailed when src changes
  useEffect(() => {
    setImgFailed(false);
  }, [src]);

  const rootClassNames = [classes.root, classes.sizes[size], classes.shapes[shape], className]
    .filter(Boolean)
    .join(" ");

  const ariaLabel = alt || name || "avatar";

  // Render priority: src (image) → name (initials) → icon → alt (text)
  let content: React.ReactNode = null;

  if (src && !imgFailed) {
    content = <img className={classes.image} src={src} alt={alt || ""} onError={() => setImgFailed(true)} />;
  } else if (name) {
    content = <span className={classes.text}>{getAvatarInitials(name)}</span>;
  } else if (icon) {
    content = <span className={classes.icon}>{icon}</span>;
  } else if (alt) {
    content = <span className={classes.text}>{alt}</span>;
  }

  return (
    <span ref={ref} className={rootClassNames} role="img" aria-label={ariaLabel} {...rest}>
      {content}
    </span>
  );
});

Avatar.displayName = COMPONENT_NAMES.Avatar;
