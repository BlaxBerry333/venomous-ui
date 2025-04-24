import { Button } from '@packages/common';
import { useFullScreen } from '@packages/helpers';
import { memo } from 'react';
import type { AdminFullScreenComponentType } from './AdminFullScreen.types';

const AdminFullScreen: AdminFullScreenComponentType = memo(() => {
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  return (
    <Button
      isCircle
      isGhost
      color="auto"
      icon={
        isFullScreen
          ? 'solar:quit-full-screen-square-line-duotone'
          : 'solar:full-screen-square-line-duotone'
      }
      iconWidth={28}
      onClick={toggleFullScreen}
    />
  );
});

AdminFullScreen.displayName = 'AdminFullScreen';
export default AdminFullScreen;
