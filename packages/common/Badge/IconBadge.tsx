import MuiBadge from '@mui/material/Badge';
import { memo } from 'react';
import { Icon } from '../Icon';
import { usePaper } from '../Paper';
import { Tooltip } from '../Tooltip';
import type { IconBadgeComponentType } from './Badge.types';
import useBadge from './useBadge';

const IconBadge: IconBadgeComponentType = memo(
  ({
    children,
    position = 'bottom-right',
    color = 'error',
    icon,
    iconWidth = 16,
    iconTooltip = '',
  }) => {
    const { paperCommonStyles } = usePaper();

    const { badgePlacementAttributes, badgeColor } = useBadge({ position, color });
    const { vertical, horizontal, transform } = badgePlacementAttributes;

    return (
      <MuiBadge
        className="VenomousUI-IconBadge"
        variant="standard"
        invisible={!icon}
        anchorOrigin={{ vertical, horizontal }}
        badgeContent={
          <Tooltip tooltip={iconTooltip} hide={!iconTooltip}>
            <Icon icon={icon} width={iconWidth} color="auto" />
          </Tooltip>
        }
        sx={{
          '.MuiBadge-badge': {
            color: badgeColor,
            fontWeight: 'bold',
            ...paperCommonStyles,
            transform,
            p: 0,
            minHeight: Number(iconWidth) + 4,
            minWidth: Number(iconWidth) + 4,
            height: Number(iconWidth) + 4,
            width: Number(iconWidth) + 4,
            borderRadius: '50%',
            border: 1,
            borderColor: badgeColor,
          },
        }}
      >
        {children}
      </MuiBadge>
    );
  },
);

IconBadge.displayName = 'IconBadge';
export default IconBadge;
