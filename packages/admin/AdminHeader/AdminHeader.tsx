import { Flex, usePaper } from '@packages/common';
import { memo } from 'react';
import type { AdminHeaderComponentType } from './AdminHeader.types';

const AdminHeader: AdminHeaderComponentType = memo(({ children }) => {
  const { paperCommonStyles } = usePaper();

  return (
    <Flex
      id="VenomousUI-AdminHeader"
      row
      component="header"
      sx={{
        position: 'sticky',
        height: 50,
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        ...paperCommonStyles,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Flex>
  );
});

AdminHeader.displayName = 'AdminHeader';
export default AdminHeader;
