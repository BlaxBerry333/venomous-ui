import { memo } from 'react';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { usePaper } from '../Paper';
import { Text } from '../Text';
import type { DrawerHeaderComponentType } from './Drawer.types';

const DrawerHeader: DrawerHeaderComponentType = memo(({ height = 50, title, closeDrawer }) => {
  const { paperCommonStyles } = usePaper();

  return (
    <Flex
      id="VenomousUI-DrawerHeader"
      row
      sx={{
        ...paperCommonStyles,
        borderRadius: 0,
        height,
        width: '100%',
        position: 'sticky',
        top: 0,
        left: 0,
        justifyContent: 'space-between',
        transform: 'translateY(-8px)',
      }}
    >
      {closeDrawer && (
        <Button
          isCircle
          isGhost
          icon="solar:close-circle-line-duotone"
          iconWidth={24}
          color="auto"
          onClick={closeDrawer}
          sx={{ width: 24, mr: '8px', ml: '-8px' }}
        />
      )}

      <Text text={title} isTitle />
    </Flex>
  );
});

DrawerHeader.displayName = 'DrawerHeader';
export default DrawerHeader;
