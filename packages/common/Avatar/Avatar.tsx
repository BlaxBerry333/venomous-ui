import MuiAvatar from '@mui/material/Avatar';
import { memo, useMemo, type JSX } from 'react';
import { DotBadge, IconBadge } from '../Badge';
import type { AvatarComponentType } from './Avatar.types';

const Avatar: AvatarComponentType = memo(
  ({
    width = 28,
    src,
    alt,
    badgeColor = 'primary',
    badgePosition = 'bottom-right',
    withDotBadge = false,
    dotBadgeIsVisible = true,
    withIconBadge = false,
    iconBadgeIcon = '',
  }) => {
    const AvatarComponent = useMemo<JSX.Element>(
      () => (
        <MuiAvatar
          className="VenomousUI-Avatar"
          src={src}
          alt={alt}
          sx={{
            width,
            height: width,
            border: 1,
            borderColor: 'divider',
          }}
        />
      ),
      [width],
    );

    if (withDotBadge) {
      return (
        <DotBadge isVisible={dotBadgeIsVisible} position={badgePosition} color={badgeColor}>
          {AvatarComponent}
        </DotBadge>
      );
    }

    if (withIconBadge) {
      return (
        <IconBadge icon={iconBadgeIcon} position={badgePosition} color={badgeColor}>
          {AvatarComponent}
        </IconBadge>
      );
    }

    return AvatarComponent;
  },
);

Avatar.displayName = 'Avatar';
export default Avatar;
