import type { NamedExoticComponent, PropsWithChildren } from 'react';
import type { PaperProps } from '../Paper';

export type CardProps = Pick<PaperProps, 'isOutlined' | 'onClick'> &
  PropsWithChildren<{
    isOutlined?: boolean;
    title?: string;
    subtitle?: string;
    clickable?: boolean;
  }>;

export type CardComponentType = NamedExoticComponent<CardProps>;
