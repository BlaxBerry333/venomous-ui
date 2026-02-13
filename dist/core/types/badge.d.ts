/**
 * Badge component base types
 */
import type { TColorScheme } from "./common";
export interface TBadgeBaseProps {
    /** Badge content (number or string). Ignored when dot=true */
    content?: number | string;
    /** Show as a small dot without content */
    dot?: boolean;
    /** Maximum number to display. Shows "{max}+" when content exceeds. Only works when content is number */
    max?: number;
    /** Color scheme */
    colorScheme?: TColorScheme;
    /** Hide the badge */
    hidden?: boolean;
    /** Additional CSS class names */
    className?: string;
}
//# sourceMappingURL=badge.d.ts.map