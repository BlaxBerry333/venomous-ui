import { useThemeMode } from '@packages/helpers';
import { memo } from 'react';
import { Toaster as SonnerToaster } from 'sonner';
import type { ToastComponentType } from './Toast.types';

const Toast: ToastComponentType = memo(({ position = 'bottom-right' }) => {
  const { isDarkMode } = useThemeMode();

  return (
    <SonnerToaster
      closeButton={false}
      invert={isDarkMode}
      visibleToasts={3}
      position={position}
      gap={6}
    />
  );
});

Toast.displayName = 'Button';
export default Toast;
