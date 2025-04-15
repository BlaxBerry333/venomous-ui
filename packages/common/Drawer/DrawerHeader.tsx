import { memo } from 'react';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Text } from '../Text';
import type { DrawerHeaderComponentType } from './Drawer.types';

const DrawerHeader: DrawerHeaderComponentType = memo(({ height = 50, title, closeDrawer }) => {
  return (
    <Flex
      id="VenomousUI-DrawerHeader"
      row
      justifyContent="space-between"
      height={height}
      mb="8px"
      mt="-8px"
    >
      <Button
        isCircle
        isGhost
        icon="solar:close-circle-line-duotone"
        iconWidth={24}
        color="auto"
        onClick={closeDrawer}
        sx={{ width: 24, mr: '8px', ml: '-8px' }}
      />

      <Text text={title} isTitle ellipsis />
    </Flex>
  );
});

DrawerHeader.displayName = 'DrawerHeader';
export default DrawerHeader;
