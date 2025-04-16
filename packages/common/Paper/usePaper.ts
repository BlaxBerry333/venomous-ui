import type { Theme as MuiTheme } from '@mui/material/styles';
import { useMemo } from 'react';

export default function usePaper() {
  const paperCommonStyles = useMemo(
    () => ({
      p: '8px',
      borderRadius: '8px !important',
      backgroundColor: ({ palette }: MuiTheme) => palette.background.paper,
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.119), rgba(255, 255, 255, 0.119));',
    }),
    [],
  );

  return {
    paperCommonStyles,
  };
}
