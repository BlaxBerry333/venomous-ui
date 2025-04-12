import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMuiMediaQuery from '@mui/material/useMediaQuery';

export default function useThemeBreakpoint() {
  const { breakpoints } = useMuiTheme();

  const isXs: boolean = useMuiMediaQuery(breakpoints.down('sm'));
  const isSm: boolean = useMuiMediaQuery(breakpoints.between('sm', 'md'));
  const isMd: boolean = useMuiMediaQuery(breakpoints.between('md', 'lg'));
  const isLg: boolean = useMuiMediaQuery(breakpoints.between('lg', 'xl'));
  const isXl: boolean = useMuiMediaQuery(breakpoints.up('xl'));

  return {
    breakpoints,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
  };
}
