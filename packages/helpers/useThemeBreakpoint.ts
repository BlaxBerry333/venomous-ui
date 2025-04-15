import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMuiMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';

export default function useThemeBreakpoint() {
  const { breakpoints } = useMuiTheme();

  const isXs: boolean = useMuiMediaQuery(breakpoints.down('sm'));
  const isSm: boolean = useMuiMediaQuery(breakpoints.between('sm', 'md'));
  const isMd: boolean = useMuiMediaQuery(breakpoints.between('md', 'lg'));
  const isLg: boolean = useMuiMediaQuery(breakpoints.between('lg', 'xl'));
  const isXl: boolean = useMuiMediaQuery(breakpoints.up('xl'));

  const current = useMemo<string>(() => {
    return (
      [
        ['xs', isXs],
        ['sm', isSm],
        ['md', isMd],
        ['lg', isLg],
        ['xl', isXl],
      ]
        .find(([, value]) => value)?.[0]
        .toString() || 'xs'
    );
  }, [isXs, isSm, isMd, isLg, isXl]);

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    breakpoints: {
      current,
      unit: 'px',
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  };
}
