import { memo } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Space } from '../Space';
import { Text } from '../Text';
import type { MenuItemComponentType } from './Menu.types';

const MenuItem: MenuItemComponentType = memo(
  ({ icon = '', label, clickable, disabled, onClick, isActive }) => {
    return (
      <>
        {clickable && (
          <Button
            isGhost
            text={label}
            icon={icon}
            iconWidth={28}
            iconPosition="start"
            sx={{ py: 1, px: 2, my: 1 }}
            onClick={onClick}
            disabled={disabled}
            color={isActive ? 'primary' : 'inherit'}
          />
        )}

        {!clickable && (
          <Space row py={1} px={2} my={1}>
            <Icon icon={icon} width={28} />
            <Text text={label} ellipsis flex={1} />
          </Space>
        )}
      </>
    );
  },
);

MenuItem.displayName = 'MenuItem';
export default MenuItem;
