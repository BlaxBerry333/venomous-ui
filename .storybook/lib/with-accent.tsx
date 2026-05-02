/**
 * @file Accent decorator —— preview / docs iframe 监听 toolbar accent 切换并注入主色覆盖样式。
 */

import { useEffect } from 'react';
import type { Decorator } from '@storybook/react-vite';
import { ACCENT_KEY, applyAccent, DEFAULT_ACCENT, narrowAccent } from './accent';

export const withAccent: Decorator = (Story, context) => {
  const accent = narrowAccent(context.globals[ACCENT_KEY]) ?? DEFAULT_ACCENT;

  useEffect(() => {
    applyAccent(accent);
  }, [accent]);

  return <Story />;
};
