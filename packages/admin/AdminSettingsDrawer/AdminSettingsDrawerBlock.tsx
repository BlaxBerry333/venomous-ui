import { Card, Grid } from '@packages/common';
import { memo } from 'react';
import type { AdminSettingsDrawerBlockProps } from './AdminSettingsDrawer.types';

const AdminSettingsDrawerBlock = <T,>({
  items,
  isItemSelected,
  isItemDisabled,
  onItemClick,
  renderItem,
}: AdminSettingsDrawerBlockProps<T>) => {
  return (
    <Grid<T>
      cols={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
      height={(60 + 8) * Math.ceil(items.length / 3)}
      items={items}
      renderGridItem={(item) => (
        <Card
          isOutlined={!isItemSelected(item)}
          clickable
          disabled={isItemDisabled ? isItemDisabled(item) : false}
          onClick={() => void onItemClick?.(item)}
          sx={{
            width: '100%',
            height: '60px',
            m: '4px',
            p: '8px',
            border: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outlineWidth: '1px',
            outlineStyle: 'solid',
            outlineColor: ({ palette }) =>
              isItemSelected(item) ? palette.primary.main : 'transparent',
            transition: 'outline-color 0.2s ease-in-out',
          }}
        >
          {renderItem(item)}
        </Card>
      )}
    />
  );
};

const AdminSettingsDrawerBlockMemo = memo(
  AdminSettingsDrawerBlock,
) as typeof AdminSettingsDrawerBlock;
export default AdminSettingsDrawerBlockMemo;
