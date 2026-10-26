import { act, fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { DialogTitle } from '@packages/react/Dialog';
import type { DialogHandle } from '@packages/react/Dialog';
import { Drawer } from '@packages/react/Drawer';

describe('Drawer', () => {
  it('基于 Dialog：原生 dialog，默认从右侧滑出', () => {
    render(
      <Drawer defaultOpen data-testid="d">
        <DialogTitle>Filters</DialogTitle>
      </Drawer>,
    );
    const drawer = screen.getByTestId('d') as HTMLDialogElement;
    expect(drawer.tagName).toBe('DIALOG');
    expect(drawer.open).toBe(true);
    expect(drawer.className).toBe('venomous--Dialog venomous--Drawer venomous--Drawer--right');
    expect(drawer.getAttribute('aria-labelledby')).toBe(screen.getByRole('heading').id);
  });

  it('side / className；行为与 Dialog 相同（Esc 关闭、ref 命令式控制）', () => {
    const onOpenChange = vi.fn();
    const ref = createRef<DialogHandle>();
    render(
      <Drawer
        ref={ref}
        side="left"
        className="x"
        ariaLabel="Menu"
        onOpenChange={onOpenChange}
        data-testid="d"
      >
        menu
      </Drawer>,
    );
    const drawer = screen.getByTestId('d') as HTMLDialogElement;
    expect(drawer.getAttribute('data-side')).toBe('left');
    expect(drawer.classList.contains('venomous--Drawer--left')).toBe(true);
    expect(drawer.classList.contains('x')).toBe(true);
    act(() => ref.current!.open());
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(drawer.open).toBe(true);
    fireEvent(drawer, new Event('cancel', { cancelable: true }));
    expect(drawer.open).toBe(false);
  });
});
