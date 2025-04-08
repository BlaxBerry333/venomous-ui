import { memo } from 'react';
import type { ThemeProviderComponentType } from './ThemeProvider.types';

const ThemeProvider: ThemeProviderComponentType = memo(({ children }) => {
  return <>{children}</>;
});

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
