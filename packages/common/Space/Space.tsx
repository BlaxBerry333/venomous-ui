import MuiMuiBox from '@mui/material/Box';
import { memo } from 'react';
import type { SpaceComponentType } from './Space.types';

const Space: SpaceComponentType = memo(
  ({ children, row, alignItems, justifyContent, gap = 1, sx, ...props }) => {
    return (
      <MuiMuiBox
        component="div"
        sx={{
          display: 'flex',
          flexDirection: row ? 'row' : 'column',
          alignItems: alignItems || (row ? 'center' : 'start'),
          justifyContent: justifyContent || 'start',
          '& > *': {
            flex: 'unset',
            width: '100%',
          },
          ...(Array.isArray(gap) ? { rowGap: gap[0], columnGap: gap[1] } : { gap }),
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiMuiBox>
    );
  },
);

Space.displayName = 'Space';
export default Space;
