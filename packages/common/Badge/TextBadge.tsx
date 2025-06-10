import MuiBadge from '@mui/material/Badge';
import { memo } from 'react';

import { Text } from '../Text';
import type { TextBadgeComponentType } from './index.types';
import useBadge from './useBadge';

const NumberTextBadge: TextBadgeComponentType = memo(
  ({ children, position = 'top-right', color = 'primary', value = '', width = 40 }) => {
    const { badgePlacementAttributes, badgeColor } = useBadge({ position, color });
    const { vertical, horizontal } = badgePlacementAttributes;

    return (
      <MuiBadge
        className="VenomousUI-NumberTextBadge"
        variant="standard"
        invisible={!value}
        anchorOrigin={{ vertical, horizontal }}
        badgeContent={<Text isLabel text={value} ellipsis />}
        sx={{
          '.MuiBadge-badge': {
            color: '#fff !important',
            backgroundColor: badgeColor,
            fontWeight: 'bold',
            maxWidth: width,
          },
        }}
      >
        {children}
      </MuiBadge>
    );
  },
);

NumberTextBadge.displayName = 'NumberTextBadge';
export default NumberTextBadge;
