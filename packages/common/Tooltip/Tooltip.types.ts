import type { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';
import type { NamedExoticComponent } from 'react';

export type TooltipProps = {
  tooltip: string;
  hide?: boolean;
  children: MuiTooltipProps['children'];
};

export type TooltipComponentType = NamedExoticComponent<TooltipProps>;
