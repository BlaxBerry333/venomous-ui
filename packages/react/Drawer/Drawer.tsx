'use client';

import { forwardRef } from 'react';
import { mergeClassName } from '@internal/style';
import { Dialog } from '../Dialog/Dialog';
import type { DialogHandle } from '../Dialog/Dialog.type';
import '@packages/styles/components/Drawer.scss';
import type { DrawerProps } from './Drawer.type';

const BLOCK = 'venomous--Drawer';

/**
 * Drawer — 从屏幕边缘滑出的模态面板。行为与 Dialog 完全相同（原生 <dialog>、Esc、点背景关闭、滚动锁），
 * 只是外观贴边。内部结构沿用 DialogHeader / DialogTitle / DialogBody / DialogFooter。
 */
export const Drawer = forwardRef<DialogHandle, DrawerProps>(function Drawer(
  { side = 'right', className, ...rest },
  ref,
) {
  return (
    <Dialog
      {...rest}
      ref={ref}
      data-side={side}
      className={mergeClassName(BLOCK, `${BLOCK}--${side}`, className)}
    />
  );
});
