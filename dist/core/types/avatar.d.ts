/**
 * Avatar component base types
 */
import type { TSize } from "./common";
export interface TAvatarBaseProps {
    /** Image source URL */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** User name — used to generate initials when no src or src fails to load */
    name?: string;
    /** Size of the avatar */
    size?: TSize;
    /** Shape of the avatar */
    shape?: "circle" | "square";
    /** Additional CSS class names */
    className?: string;
}
//# sourceMappingURL=avatar.d.ts.map