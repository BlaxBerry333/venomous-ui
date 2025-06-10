import { useMemo } from 'react';
import type { BadgeProps } from './index.types';

export default function useBadge({ position, color }: Pick<BadgeProps, 'position' | 'color'>) {
  const badgePlacementAttributes = useMemo<{
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
    transform: string;
  }>(() => {
    switch (position) {
      case 'top-left':
        return {
          vertical: 'top',
          horizontal: 'left',
          transform: 'translate(-2px, -2px)',
        };
      case 'bottom-left':
        return {
          vertical: 'bottom',
          horizontal: 'left',
          transform: 'translate(-2px, 2px)',
        };
      case 'bottom-right':
        return {
          vertical: 'bottom',
          horizontal: 'right',
          transform: 'translate(2px, 2px)',
        };
      case 'top-right':
      default:
        return {
          vertical: 'top',
          horizontal: 'right',
          transform: 'translate(2px, -2px)',
        };
    }
  }, [position]);

  const badgeColor = useMemo<string>(() => {
    switch (color) {
      case 'auto':
        return 'inherit';
      case 'success':
        return 'success.main';
      case 'primary':
        return 'primary.main';
      case 'error':
      default:
        return 'error.main';
    }
  }, [color]);

  return {
    badgePlacementAttributes,
    badgeColor,
  };
}
