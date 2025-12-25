import type { CSSProperties, HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import type { ITheme } from "../../../core/theme";
import type { AvatarSize, AvatarVariant } from "../../../core/types";
export type AvatarElement = HTMLDivElement;
export interface AvatarProps extends Omit<HTMLAttributes<AvatarElement>, "style"> {
    /** Avatar size */
    size?: AvatarSize;
    /** Avatar shape variant */
    variant?: AvatarVariant;
    /**
     * Image source URL (supports imported image modules).
     * When provided, Avatar displays the image.
     * If image fails to load, falls back to fallbackText or fallbackIcon.
     */
    imageSrc?: string;
    /** Alt text for the image */
    alt?: string;
    /**
     * Fallback text displayed when imageSrc is not provided or fails to load.
     * Typically used for user initials (e.g., "JD" for John Doe).
     */
    fallbackText?: string;
    /**
     * Fallback icon displayed when imageSrc is not provided or fails to load,
     * and fallbackText is not provided.
     */
    fallbackIcon?: ReactNode;
    /** Props passed to the img element (supports data-* attributes) */
    ImageProps?: ImgHTMLAttributes<HTMLImageElement> & Record<`data-${string}`, string>;
    /** Callback when image fails to load */
    onImageLoadError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    /** Custom class name */
    className?: string;
    /** Custom styles, supports object or theme callback function */
    style?: CSSProperties | ((theme: ITheme) => CSSProperties);
    /**
     * Custom content that completely overrides the default rendering.
     * When provided, imageSrc/fallbackText/fallbackIcon are ignored.
     */
    children?: ReactNode;
}
//# sourceMappingURL=Avatar.types.d.ts.map