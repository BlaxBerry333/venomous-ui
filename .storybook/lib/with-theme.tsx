/**
 * @file Theme decorator —— preview iframe 切 <html>.dark。
 * docs iframe 由 DocsContainer 自行订阅 globalsUpdated 同步。
 */

import { useEffect } from 'react';
import type { Decorator } from '@storybook/react-vite';
import { applyHtmlThemeClass, DEFAULT_THEME, narrowTheme, THEME_KEY } from './theme';

export const withTheme: Decorator = (Story, context) => {
  const theme = narrowTheme(context.globals[THEME_KEY]) ?? DEFAULT_THEME;

  useEffect(() => {
    applyHtmlThemeClass(theme);
  }, [theme]);

  return <Story />;
};
