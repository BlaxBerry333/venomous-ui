import MuiPaper from '@mui/material/Paper';
import { memo } from 'react';
import type { PaperComponentType } from './Paper.types';
import usePaper from './usePaper';

const Paper: PaperComponentType = memo(({ isOutlined, children, sx, ...props }) => {
  const { paperCommonStyles } = usePaper();

  return (
    <MuiPaper
      id="VenomousUI-Paper"
      variant={isOutlined ? 'outlined' : 'elevation'}
      elevation={isOutlined ? 0 : 3}
      square
      sx={{
        ...paperCommonStyles,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiPaper>
  );
});

Paper.displayName = 'Paper';
export default Paper;
