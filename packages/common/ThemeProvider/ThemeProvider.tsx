import MuiCssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { memo } from 'react';
import type { ThemeProviderComponentType } from './ThemeProvider.types';
import useThemeProvider from './useThemeProvider';

const ThemeProvider: ThemeProviderComponentType = memo(({ children }) => {
  const { theme } = useThemeProvider();

  return (
    <MuiThemeProvider theme={theme} disableTransitionOnChange>
      <MuiCssBaseline />
      {children}
    </MuiThemeProvider>
  );
});

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
