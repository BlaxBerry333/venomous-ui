import MuiBox from '@mui/material/Box';
import MuiCircularProgress from '@mui/material/CircularProgress';
import MuiLinearProgress from '@mui/material/LinearProgress';
import MuiPortal from '@mui/material/Portal';
import { memo } from 'react';
import type { LoadingComponentType } from './Loading.types';

const Loading: LoadingComponentType = memo(({ disablePortal, isCircle = false }) => {
  return (
    <MuiPortal disablePortal={disablePortal}>
      <MuiBox
        sx={{
          width: 1,
          minHeight: 1,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed', // 基于 <body>
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {isCircle && <MuiCircularProgress color="primary" disableShrink size={40} />}

        {!isCircle && (
          <MuiLinearProgress
            color="primary"
            sx={{ width: 1, maxWidth: 360, height: '4px', borderRadius: '8px' }}
          />
        )}
      </MuiBox>
    </MuiPortal>
  );
});

Loading.displayName = 'Loading';
export default Loading;
