import type { NamedExoticComponent, PropsWithChildren } from 'react';
export type ThemeProviderProps = PropsWithChildren<{
    theme?: 'light' | 'dark';
}>;
export type ThemeProviderComponentType = NamedExoticComponent<ThemeProviderProps>;
