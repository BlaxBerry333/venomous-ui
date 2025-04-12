import { memo } from 'react';

import { VirtuosoGrid } from 'react-virtuoso';
import { Space } from '../Space';
import { DEFAULT_COLS, DEFAULT_ITEMS, type GridProps } from './Grid.types';
import useGridComponents from './useGridComponents';

const Grid = <T,>({
  height,
  width,
  items = DEFAULT_ITEMS,
  renderGridItem,
  gridStyle,
  gridItemStyle,
  cols = DEFAULT_COLS,
}: GridProps<T>) => {
  const { gridComponents } = useGridComponents({ gridStyle, gridItemStyle, cols });

  return (
    <Space style={{ height: height || '100%', width: width || '100%' }}>
      <VirtuosoGrid
        style={{ height: '100%' }}
        totalCount={items.length}
        components={gridComponents}
        itemContent={(index) => renderGridItem(items[index], index)}
      />
    </Space>
  );
};

const GridMemo = memo(Grid) as typeof Grid;
export default GridMemo;
