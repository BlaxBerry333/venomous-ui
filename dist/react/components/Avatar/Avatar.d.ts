import React from "react";
import type { AvatarProps } from "./Avatar.types";
/**
 * Avatar content rendering flow:
 *
 * 1. children (highest priority) - Custom content, overrides everything
 * 2. imageSrc - Display image if provided and loads successfully
 * 3. fallbackText - Display text if imageSrc not provided or failed to load
 * 4. fallbackIcon - Display icon if no text
 * 5. Default icon - Person icon as last resort
 */
declare const Avatar: React.NamedExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map