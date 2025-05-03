import { Icon as Iconify } from '@iconify/react';
import MuiBox from '@mui/material/Box';
import { memo } from 'react';
import type { IconComponentType } from './Icon.types';

const Icon: IconComponentType = memo(({ ref, icon, width = 20, color = 'auto', sx, ...props }) => {
  return (
    <MuiBox
      className="VenomousUI-Icon"
      ssr
      ref={ref}
      component={Iconify}
      icon={icon}
      sx={{
        width,
        height: width,
        flexShrink: 0,
        display: 'inline-flex',
        color: (theme) =>
          color === 'error'
            ? theme.palette.error.main
            : color === 'primary'
              ? theme.palette.primary.main
              : color === 'success'
                ? theme.palette.success.main
                : color === 'disabled'
                  ? theme.palette.action.disabled
                  : 'inherit',
        ...sx,
      }}
      {...props}
    />
  );
});

Icon.displayName = 'Icon';
export default Icon;
