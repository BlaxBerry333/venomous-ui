import MuiPaper from '@mui/material/Paper';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '../packages/common';
import { useThemeMode } from '../packages/helpers';

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#303030' },
      light: { ...themes.normal, appBg: 'white' },
    },
  },
  globalTypes: {},
  initialGlobals: {},
  decorators: [
    (Story) => {
      const isDark = useDarkMode();
      return (
        <React.Fragment>
          <ThemeProvider>
            <ThemeModeObserver isDark={isDark} />
            <MuiPaper
              sx={{
                minHeight: '200px',
                width: '90svw',
                maxWidth: '1000px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Story />
            </MuiPaper>
          </ThemeProvider>
        </React.Fragment>
      );
    },
  ],
};

export default preview;

// eslint-disable-next-line react-refresh/only-export-components
const ThemeModeObserver: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const { setThemeMode } = useThemeMode();
  React.useEffect(() => {
    if (isDark) setThemeMode('dark');
    else setThemeMode('light');
  }, [isDark]);
  return null;
};
