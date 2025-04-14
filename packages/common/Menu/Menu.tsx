import { memo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { Flex } from '../Flex';
import type { MenuComponentType } from './Menu.types';

const Menu: MenuComponentType = memo(({ height, width, items, renderItem }) => {
  return (
    <Flex style={{ height: height || '100%', width: width || '100%' }}>
      <Virtuoso
        style={{ height: '100%', width: '100%' }}
        totalCount={items?.length}
        data={items}
        itemContent={(index, item) => (renderItem ? renderItem(item, index) : item.label)}
      />
    </Flex>
  );
});

Menu.displayName = 'Menu';
export default Menu;
