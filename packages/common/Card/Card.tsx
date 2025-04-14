import MuiCardActionArea from '@mui/material/CardActionArea';
import { memo, type ReactNode, useMemo } from 'react';
import { Paper } from '../Paper';
import { Text } from '../Text';
import type { CardComponentType } from './Card.types';

const Card: CardComponentType = memo(
  ({ isOutlined, title, subtitle, clickable, onClick, children }) => {
    const CardComponent = useMemo<ReactNode>(() => {
      if (children) {
        return children;
      }
      return (
        <>
          {title && <Text text={title} isTitle titleLevel="h6" lineHeight="1.25rem" ellipsis />}
          {subtitle && <Text text={subtitle} isLabel ellipsis />}
        </>
      );
    }, [title, subtitle, children]);

    if (clickable) {
      return (
        <Paper isOutlined={isOutlined} onClick={onClick} sx={{ p: 0 }}>
          <MuiCardActionArea sx={{ p: '16px' }}>{CardComponent}</MuiCardActionArea>
        </Paper>
      );
    }
    return <Paper isOutlined={isOutlined}>{CardComponent}</Paper>;
  },
);

Card.displayName = 'Card';
export default Card;
