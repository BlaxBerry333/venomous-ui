import { memo } from 'react';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Text } from '../Text';
import type { MenuItemComponentType } from './Menu.types';

const MenuItem: MenuItemComponentType = memo(
  ({
    icon = '',
    label,
    clickable,
    disabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    isActive,
    sx,
  }) => {
    if (clickable) {
      return (
        <Button
          id="VenomousUI-MenuItem"
          isGhost
          text={<Text text={label} ellipsis />}
          icon={icon}
          iconWidth={28}
          iconPosition="start"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          disabled={disabled}
          color={isActive ? 'primary' : 'auto'}
          sx={{
            py: '8px',
            px: '16px',
            width: '100%',
            justifyContent: 'flex-start',
            transition: 'background-color 0.2s ease; color 0.2s ease',
            backgroundColor: isActive ? 'divider' : 'transparent',
            '&:hover': { backgroundColor: 'divider' },
            ...sx,
          }}
        />
      );
    }

    return (
      <Flex row py="8px" px="16px" sx={{ width: '100%', ...sx }} id="VenomousUI-MenuItem">
        <Icon icon={icon} width={28} color={isActive ? 'primary' : 'auto'} />
        <Text text={label} ellipsis flex={1} textColor={isActive ? 'primary' : 'auto'} />
      </Flex>
    );
  },
);

MenuItem.displayName = 'MenuItem';
export default MenuItem;
