import type { PaperProps } from '@packages/common';
import type { NamedExoticComponent, PropsWithChildren } from 'react';

export type AdminHeaderProps = PropsWithChildren<{
  sx?: PaperProps['sx'];
}>;

export type AdminHeaderComponentType = NamedExoticComponent<AdminHeaderProps>;
