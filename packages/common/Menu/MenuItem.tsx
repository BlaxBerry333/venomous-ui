import { memo } from 'react';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Text } from '../Text';
import type { MenuItemComponentType } from './Menu.types';

const MenuItem: MenuItemComponentType = memo(
  ({ icon = '', label, clickable, disabled, onClick, onMouseEnter, onMouseLeave, isActive }) => {
    if (clickable) {
      return (
        <Button
          isGhost
          text={label}
          icon={icon}
          iconWidth={28}
          iconPosition="start"
          sx={{ py: 1, px: 2, my: 1 }}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          disabled={disabled}
          color={isActive ? 'primary' : 'inherit'}
        />
      );
    }

    return (
      <Flex row py={1} px={2} my={1}>
        <Icon icon={icon} width={28} color={isActive ? 'primary' : 'auto'} />
        <Text text={label} ellipsis flex={1} color={isActive ? 'primary' : 'auto'} />
      </Flex>
    );
  },
);

MenuItem.displayName = 'MenuItem';
export default MenuItem;
