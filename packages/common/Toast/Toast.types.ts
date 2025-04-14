import type { NamedExoticComponent } from 'react';

export type ToastProps = {
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
};

export type ToastComponentType = NamedExoticComponent<ToastProps>;
