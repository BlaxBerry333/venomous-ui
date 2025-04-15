import MuiButton from '@mui/material/Button';
import { memo, type ReactNode, useMemo } from 'react';
import { Paper } from '../Paper';
import { Text } from '../Text';
import type { CardComponentType } from './Card.types';

const Card: CardComponentType = memo(
  ({ isOutlined, title, subtitle, clickable, onClick, disabled, children, sx }) => {
    const CardComponent = useMemo<ReactNode>(() => {
      if (children) return children;
      return (
        <>
          {title && <Text text={title} isTitle titleLevel="h6" lineHeight="1.25rem" ellipsis />}
          {subtitle && <Text text={subtitle} isLabel ellipsis />}
        </>
      );
    }, [title, subtitle, children]);

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
            ...sx,
          }}
        >
          {CardComponent}
        </MuiButton>
      );
    }

    return (
      <Paper id="VenomousUI-Card" isOutlined={isOutlined} sx={{ ...sx }}>
        {CardComponent}
      </Paper>
    );
  },
);

Card.displayName = 'Card';
export default Card;
