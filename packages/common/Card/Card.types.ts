import type { NamedExoticComponent, PropsWithChildren } from 'react';
import type { ButtonProps } from '../Button';
import type { MenuProps } from '../Menu';
import type { PaperProps } from '../Paper';

export type CardProps = Pick<PaperProps, 'isOutlined' | 'onClick' | 'sx'> &
  PropsWithChildren<{
    isOutlined?: boolean;
    clickable?: boolean;
    onClick?: VoidFunction;
    disabled?: boolean;
  }>;

export interface ExhibitCardProps extends CardProps {
  title?: string;
  subtitle?: string;
  headerStartExtra?: React.ReactNode;
  headerEndExtra?: React.ReactNode;
}

export type ExhibitCardActionButtonProps = {
  icon?: ButtonProps['icon'];
  menuItems?: MenuProps['items'];
};

export type CardComponentType = NamedExoticComponent<CardProps>;
export type ExhibitCardComponentType = NamedExoticComponent<ExhibitCardProps>;
export type ExhibitCardActionButtonComponentType =
  NamedExoticComponent<ExhibitCardActionButtonProps>;
