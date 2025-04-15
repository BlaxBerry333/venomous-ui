import MuiBox from '@mui/material/Box';
import { memo } from 'react';
import { Icon } from '../Icon';
import { Text } from '../Text';
import type { BlankComponentType } from './Blank.types';

const Blank: BlankComponentType = memo(({ width = 100, text = '', sx }) => {
  return (
    <MuiBox id="VenomousUI-Blank" sx={{ width, ...sx }}>
      <Icon width={width} icon="solar:box-linear" color="grey" />
      <Text text={text} isTitle titleLevel="h6" textColor="grey" textAlign="center" />
    </MuiBox>
  );
});

Blank.displayName = 'Blank';
export default Blank;
