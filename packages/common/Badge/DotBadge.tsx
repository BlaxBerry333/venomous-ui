import MuiBadge from '@mui/material/Badge';
import { memo } from 'react';
import type { DotBadgeComponentType } from './Badge.types';
import useBadge from './useBadge';

const DotBadge: DotBadgeComponentType = memo(
  ({ children, isVisible, position = 'top-right', color = 'error' }) => {
    const { badgePlacementAttributes, badgeColor } = useBadge({ position, color });
    const { vertical, horizontal, transform } = badgePlacementAttributes;

    return (
      <MuiBadge
        className="VenomousUI-DotBadge"
        variant="dot"
        invisible={!isVisible}
        anchorOrigin={{ vertical, horizontal }}
        sx={{
          '.MuiBadge-badge': {
            ...(isVisible
              ? {
                  transform,
                  color: badgeColor,
                  backgroundColor: badgeColor,
                  boxShadow: '0 0 0 2px transparent',
                  '&::after': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    animation: 'ripple 1.2s infinite ease-in-out',
                    border: '2px solid currentColor',
                    content: '""',
                  },
                  '@keyframes ripple': {
                    '0%': { transform: 'scale(.8)', opacity: 1 },
                    '100%': { transform: 'scale(2.4)', opacity: 0 },
                  },
                }
              : {}),
          },
        }}
      >
        {children}
      </MuiBadge>
    );
  },
);

DotBadge.displayName = 'DotBadge';
export default DotBadge;
