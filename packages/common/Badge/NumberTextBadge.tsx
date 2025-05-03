import MuiBadge from '@mui/material/Badge';
import { memo, useMemo } from 'react';
import { Tooltip } from '../Tooltip';
import type { NumberTextBadgeComponentType } from './Badge.types';
import useBadge from './useBadge';

const NumberTextBadge: NumberTextBadgeComponentType = memo(
  ({ children, position = 'top-right', color = 'primary', value = 0, max = 99, min = 0 }) => {
    const { badgePlacementAttributes, badgeColor } = useBadge({ position, color });
    const { vertical, horizontal } = badgePlacementAttributes;

    const badgeValue = useMemo<string>(() => {
      return value > max ? `${max}+` : String(value);
    }, [value, max]);

    const showBadge = useMemo<boolean>(() => {
      return value > min;
    }, [value, min]);

    return (
      <MuiBadge
        className="VenomousUI-NumberTextBadge"
        variant="standard"
        invisible={!showBadge}
        anchorOrigin={{ vertical, horizontal }}
        badgeContent={
          <Tooltip tooltip={String(value)} hide={value <= max}>
            <span>{badgeValue}</span>
          </Tooltip>
        }
        sx={{
          '.MuiBadge-badge': {
            color: '#fff !important',
            backgroundColor: badgeColor,
            fontWeight: 'bold',
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
