import type { NamedExoticComponent, PropsWithChildren } from 'react';

export type AdminSettingsDrawerProps = PropsWithChildren<{
  width?: number;
  title?: string;
}>;

export type AdminSettingsDrawerComponentType = NamedExoticComponent<AdminSettingsDrawerProps>;
