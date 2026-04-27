/**
 * @file 自定义 docs container —— 监听 globals.theme，把 storybook 主题对象传给 BaseDocsContainer。
 * BaseDocsContainer 自身只接受静态 theme prop，这里包一层做动态切换。
 */

import { DocsContainer as BaseDocsContainer } from '@storybook/addon-docs/blocks';
import { useEffect, type ComponentProps, type ReactNode } from 'react';
import {
  applyHtmlThemeClass,
  DEFAULT_THEME,
  narrowTheme,
  storybookDarkTheme,
  storybookLightTheme,
  THEME_KEY,
} from '../lib';
import { useGlobal } from '../lib/globals-react';

type Props = ComponentProps<typeof BaseDocsContainer> & { children: ReactNode };

export function DocsContainer({ children, ...rest }: Props) {
  const theme = useGlobal(THEME_KEY, narrowTheme, DEFAULT_THEME);

  // 同步 docs iframe 的 <html> class —— preview decorator 只对 story canvas 生效，
  // docs 页是另一个 iframe，需要这里独立切，否则 SCSS :root.dark 不触发。
  useEffect(() => {
    applyHtmlThemeClass(theme);
  }, [theme]);

  const sbTheme = theme === 'dark' ? storybookDarkTheme : storybookLightTheme;

  // key={theme} 强制 BaseDocsContainer 在 theme 切换时重新 mount，
  // 让其内部 ThemeProvider 与所有 mdx children 都用新主题渲染
  return (
    <BaseDocsContainer key={theme} {...rest} theme={sbTheme}>
      {children}
    </BaseDocsContainer>
  );
}
