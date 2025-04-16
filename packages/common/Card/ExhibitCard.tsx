import { memo } from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import Card from './Card';
import type { ExhibitCardComponentType } from './Card.types';

const ExhibitCard: ExhibitCardComponentType = memo(
  ({ title, subtitle, headerStartExtra, headerEndExtra, children, ...props }) => {
    return (
      <Card {...props}>
        <Flex row mb={'8px'} justifyContent="space-between" alignItems={'center'}>
          {headerStartExtra && (
            <div style={{ marginRight: subtitle ? '8px' : 0 }}>{headerStartExtra}</div>
          )}

          <Flex gap={0}>
            {title && <Text text={title} isTitle titleLevel="h6" lineHeight="1.25rem" ellipsis />}
            {subtitle && <Text text={subtitle} isLabel ellipsis />}
          </Flex>

          {headerEndExtra && (
            <div
              style={{
                marginRight: subtitle ? '-8px' : 0,
                marginTop: subtitle ? '-8px' : 0,
                marginLeft: '8px',
              }}
            >
              {headerEndExtra}
            </div>
          )}
        </Flex>
        {children}
      </Card>
    );
  },
);

ExhibitCard.displayName = 'ExhibitCard';
export default ExhibitCard;
