import { Flex, Paper } from '@packages/common';
import { memo } from 'react';
import type { AdminHeaderComponentType } from './AdminHeader.types';

const AdminHeader: AdminHeaderComponentType = memo(({ children, sx }) => {
  return (
    <Paper
      isOutlined
      sx={{
        width: '100%',
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        ...sx,
      }}
    >
      <Flex
        className="VenomousUI-AdminHeader"
        row
        component="header"
        sx={{
          width: '100%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {children}
      </Flex>
    </Paper>
  );
});

AdminHeader.displayName = 'AdminHeader';
export default AdminHeader;
