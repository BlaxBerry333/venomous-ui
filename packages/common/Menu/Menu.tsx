import { Fragment, memo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { Flex } from '../Flex';
import type { MenuComponentType } from './Menu.types';

const Menu: MenuComponentType = memo(({ height, width, isVirtualized, items, renderItem, sx }) => {
  if (isVirtualized) {
    return (
      <Flex id="VenomousUI-Menu" sx={{ height: height || '100%', width: width || '100%', ...sx }}>
        <Virtuoso
          style={{ height: '100%', width: '100%' }}
          totalCount={items?.length}
          data={items}
          itemContent={(index, item) => (renderItem ? renderItem(item, index) : item.label)}
        />
      </Flex>
    );
  }

  return (
    <Flex
      id="VenomousUI-Menu"
      gap={1}
      sx={{
        height: height || '100%',
        width: width || '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        ...sx,
        '& > #VenomousUI-MenuItem': {
          width: '100% !important',
        },
        // '& #VenomousUI-MenuItem': { mb: '4px' },
        // '& #VenomousUI-MenuItem:last-child': { mb: 0 },
      }}
    >
      {items?.map((item, index) => (
        <Fragment key={item.label}>{renderItem ? renderItem(item, index) : item.label}</Fragment>
      ))}
    </Flex>
  );
});

Menu.displayName = 'Menu';
export default Menu;
