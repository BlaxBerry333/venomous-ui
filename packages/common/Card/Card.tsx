import MuiButton from '@mui/material/Button';
import { memo } from 'react';
import { Paper } from '../Paper';
import type { CardComponentType } from './Card.types';

const Card: CardComponentType = memo(
  ({ isOutlined, clickable, onClick, disabled, children, sx }) => {
    if (clickable) {
      return (
        <MuiButton
          id="VenomousUI-Card"
          component={Paper}
          isOutlined={isOutlined}
          disabled={disabled}
          onClick={disabled ? undefined : onClick}
          sx={{
            display: 'block',
            color: 'inherit',
            textTransform: 'none',
            borderRadius: '8px',
            cursor: disabled ? 'not-allowed !important' : 'pointer',
            pointerEvents: 'auto !important' as 'auto',
            p: '16px',
            ...(isOutlined
              ? {
                  border: 1,
                  borderColor: 'divider',
                }
              : {}),
            ...sx,
          }}
        >
          {children}
        </MuiButton>
      );
    }

    return (
      <Paper id="VenomousUI-Card" isOutlined={isOutlined} sx={{ p: '16px', ...sx }}>
        {children}
      </Paper>
    );
  },
);

Card.displayName = 'Card';
export default Card;
