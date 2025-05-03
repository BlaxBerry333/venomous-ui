import MuiFade from '@mui/material/Fade';
import MuiTooltip from '@mui/material/Tooltip';
import { memo } from 'react';
import { Text } from '../Text';
import type { TooltipComponentType } from './Tooltip.types';

const Tooltip: TooltipComponentType = memo(({ children, tooltip, hide }) => {
  return (
    <MuiTooltip
      className="VenomousUI-Tooltip"
      arrow
      title={<Text isLabel bold text={tooltip} textColor="auto" />}
      disableHoverListener={hide}
      children={children}
      slots={{
        transition: MuiFade,
      }}
      slotProps={{
        transition: { timeout: 400 },
      }}
    />
  );
});

Tooltip.displayName = 'Tooltip';
export default Tooltip;
