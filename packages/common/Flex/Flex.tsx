import MuiBox from '@mui/material/Box';
import { memo } from 'react';
import type { FlexComponentType } from './Flex.types';

const Flex: FlexComponentType = memo(
  ({ children, row, alignItems, justifyContent, gap = 1, sx, ...props }) => {
    return (
      <MuiBox
        id="VenomousUI-Flex"
        component="div"
        sx={{
          display: 'flex',
          flexDirection: row ? 'row' : 'column',
          alignItems: alignItems || (row ? 'center' : 'start'),
          justifyContent: justifyContent || 'start',
          ...(Array.isArray(gap) ? { rowGap: gap[0], columnGap: gap[1] } : { gap }),
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiBox>
    );
  },
);

Flex.displayName = 'Flex';
export default Flex;
