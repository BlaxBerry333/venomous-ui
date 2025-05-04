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
    value,
    clickable,
    disabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    isActive,
    sx,
    ellipsis = false,
  }) => {
    if (clickable) {
      return (
        <Button
          className="VenomousUI-MenuItem"
          value={value}
          isGhost
          text={<Text text={label} ellipsis={ellipsis} sx={{ textAlign: 'left' }} />}
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
      <Flex row py="8px" px="16px" sx={{ width: '100%', ...sx }} className="VenomousUI-MenuItem">
        <Icon icon={icon} width={28} color={isActive ? 'primary' : 'auto'} />
        <Text
          text={label}
          ellipsis={ellipsis}
          flex={1}
          textColor={isActive ? 'primary' : 'auto'}
          sx={{ cursor: 'default' }}
        />
      </Flex>
    );
  },
);

MenuItem.displayName = 'MenuItem';
export default MenuItem;
