import MuiContainer from '@mui/material/Container';
import { memo } from 'react';

import type { ContainerComponentType } from './Container.types';

const Container: ContainerComponentType = memo(({ children, maxWidth = 'lg', ...props }) => {
  return (
    <MuiContainer
      className="VenomousUI-Container"
      disableGutters
      maxWidth={maxWidth === 'fullwidth' ? false : maxWidth}
      {...props}
    >
      {children}
    </MuiContainer>
  );
});

Container.displayName = 'Container';
export default Container;
