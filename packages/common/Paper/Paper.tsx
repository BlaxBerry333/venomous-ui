import MuiPaper from '@mui/material/Paper';
import { memo } from 'react';
import type { PaperComponentType } from './Paper.types';

const Paper: PaperComponentType = memo(({ isOutlined, children, sx, ...props }) => {
  return (
    <MuiPaper
      id="VenomousUI-Paper"
      variant={isOutlined ? 'outlined' : 'elevation'}
      elevation={isOutlined ? 0 : 3}
      square
      sx={{
        borderRadius: '8px',
        p: '16px',
        backgroundColor: ({ palette }) => palette.background.paper,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.119), rgba(255, 255, 255, 0.119));',
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
