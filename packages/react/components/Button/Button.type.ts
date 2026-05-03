import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ComponentBaseButtonProps } from '@packages/utils/types/components';

export interface ButtonProps
  extends ComponentBaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children?: ReactNode;
}
