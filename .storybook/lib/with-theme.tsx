import type { Decorator } from '@storybook/react-vite';
import { useEffect } from 'react';

/**
 * 把 storybook toolbar 选的 theme 写到 <html data-theme>，与 venomous 主题 CSS 联动。
 *
 * light = 移除 data-theme（:root 默认即 light）；其他值 = 设 data-theme。
 * 这样能正确演示"用户没设主题时的默认外观" vs "显式选 dark"。
 */
export const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string | undefined) ?? 'light';
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);
  return Story();
};
