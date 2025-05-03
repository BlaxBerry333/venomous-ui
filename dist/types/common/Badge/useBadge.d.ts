import type { BadgeProps } from './Badge.types';
export default function useBadge({ position, color }: Pick<BadgeProps, 'position' | 'color'>): {
    badgePlacementAttributes: {
        vertical: "top" | "bottom";
        horizontal: "left" | "right";
        transform: string;
    };
    badgeColor: string;
};
