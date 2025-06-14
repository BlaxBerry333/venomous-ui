import MuiBox from '@mui/material/Box';
import { memo } from 'react';
import { Card } from '../Card';
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
    ellipsis = true,
    endIcon,
    startIconPlaceholder = false,
  }) => {
    if (clickable) {
      return (
        <MuiBox
          component="div"
          className="VenomousUI-MenuItem"
          onClick={(e) => {
            if (!disabled) onClick?.(e);
          }}
          onMouseEnter={(e) => {
            if (!disabled) onMouseEnter?.(e);
          }}
          onMouseLeave={(e) => {
            if (!disabled) onMouseLeave?.(e);
          }}
          sx={{
            overflow: 'hidden',
            borderRadius: '8px',
            ...sx,
          }}
        >
          <Card
            isOutlined
            clickable
            sx={{
              border: 'none',
              width: 1,
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              py: '9px',
              px: '12px',
              transition: 'background-color 0.2s ease; color 0.2s ease',
              backgroundColor: isActive ? 'divider' : 'transparent',
              backgroundImage: 'none',
              '&:hover': { backgroundColor: 'divider' },
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          >
            <Icon icon={icon} width={24} color={isActive ? 'primary' : 'auto'} />

            {startIconPlaceholder && !icon && <div style={{ minWidth: 24, minHeight: 24 }} />}

            <Text
              text={label}
              ellipsis={ellipsis}
              textColor={isActive ? 'primary' : 'auto'}
              sx={{ mx: '8px' }}
            />

            {endIcon}
          </Card>
        </MuiBox>
      );
    }

    return (
      <Flex
        row
        py="8px"
        px="16px"
        sx={{ width: '100%', cursor: disabled ? 'not-allowed' : 'default', ...sx }}
        className="VenomousUI-MenuItem"
      >
        <Icon
          icon={icon}
          width={28}
          color={disabled ? 'disabled' : isActive ? 'primary' : 'auto'}
        />

        {startIconPlaceholder && !icon && <div style={{ minWidth: 24, minHeight: 24 }} />}

        <Text
          text={label}
          ellipsis={ellipsis}
          flex={1}
          textColor={disabled ? 'disabled' : isActive ? 'primary' : 'auto'}
          sx={{ mx: '8px' }}
        />
        {endIcon}
      </Flex>
    );
  },
);

MenuItem.displayName = 'MenuItem';
export default MenuItem;
