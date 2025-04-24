import { useToast } from '@packages/common';
import { useCallback, useEffect, useState } from 'react';

export default function useFullScreen() {
  const toast = useToast();

  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const toggleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullScreen(true);
        })
        .catch(() => {
          toast({
            type: 'error',
            title: 'Error',
            description: 'Error attempting to enable full-screen mode',
          });
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullScreen(false);
        })
        .catch(() => {
          toast({
            type: 'error',
            title: 'Error',
            description: 'Error attempting to disable full-screen mode',
          });
        });
    }
  }, [isFullScreen, toast]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return {
    isFullScreen,
    setIsFullScreen,
    toggleFullScreen,
  };
}
