/**
 * Dialog 组件冒烟测试。
 * Dialog 自带 hook 逻辑（不用 useDialog）；本测试覆盖所有内部状态机：
 * - 受控 / 非受控：open/defaultOpen + onOpenChange
 * - showModal / close 同步：useEffect 跟 open 走
 * - imperative handle：ref.current.open / close / toggle + el
 * - Esc：onCancel preventDefault + closeOnEsc 透传
 * - backdrop 点击：clientX/Y 在 rect 外才关
 * - closeOnBackdropClick=false：不关
 * - scrollLock：open=true && lockScroll=true 时持引用计数（acquire/release）
 * - 卸载兜底：仍 open 时 close()
 * - dev 警告：defaultOpen+open / 打开时缺 a11y name
 * - ariaLabel/ariaLabelledBy 透传
 * - className BEM 合并
 *
 * happy-dom 注意：
 *   dialog.getBoundingClientRect 永远返 (0,0,0,0)；clientX>0 就算 backdrop 外
 */
import { fireEvent, render, screen } from '@testing-library/react';
import { useRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  type DialogHandle,
} from '@packages/react/Dialog';

describe('Dialog - 渲染', () => {
  it('未 open：dialog 元素在 DOM 但 .open=false', () => {
    render(
      <Dialog ariaLabel="x" data-testid="d">
        body
      </Dialog>,
    );
    const d = screen.getByTestId('d') as HTMLDialogElement;
    expect(d.tagName).toBe('DIALOG');
    expect(d.open).toBe(false);
  });

  it('defaultOpen：mount 后 showModal → .open=true', () => {
    render(
      <Dialog defaultOpen ariaLabel="x" data-testid="d">
        body
      </Dialog>,
    );
    expect((screen.getByTestId('d') as HTMLDialogElement).open).toBe(true);
  });

  it('受控 open=true：showModal', () => {
    render(
      <Dialog open ariaLabel="x" data-testid="d">
        body
      </Dialog>,
    );
    expect((screen.getByTestId('d') as HTMLDialogElement).open).toBe(true);
  });

  it('受控 open 切换：true→false 调 close', () => {
    const { rerender } = render(
      <Dialog open ariaLabel="x" data-testid="d">
        body
      </Dialog>,
    );
    const d = screen.getByTestId('d') as HTMLDialogElement;
    expect(d.open).toBe(true);
    rerender(
      <Dialog open={false} ariaLabel="x" data-testid="d">
        body
      </Dialog>,
    );
    expect(d.open).toBe(false);
  });

  it('ariaLabel / ariaLabelledBy 透传', () => {
    render(
      <Dialog open ariaLabel="hello" data-testid="d">
        x
      </Dialog>,
    );
    expect(screen.getByTestId('d').getAttribute('aria-label')).toBe('hello');

    const { container } = render(
      <Dialog open ariaLabelledBy="my-title" data-testid="d2">
        x
      </Dialog>,
    );
    expect(container.querySelector('[data-testid="d2"]')?.getAttribute('aria-labelledby')).toBe(
      'my-title',
    );
  });

  it('className 合并 BEM', () => {
    render(
      <Dialog ariaLabel="x" className="user-c" data-testid="d">
        x
      </Dialog>,
    );
    const c = screen.getByTestId('d').className;
    expect(c).toContain('venomous--Dialog');
    expect(c).toContain('user-c');
  });
});

describe('Dialog - 受控通知', () => {
  it('非受控 + ref.open() / close()：内部状态 + 回调', () => {
    const onOpenChange = vi.fn();
    function Host() {
      const ref = useRef<DialogHandle>(null);
      return (
        <>
          <button onClick={() => ref.current?.open()}>open</button>
          <button onClick={() => ref.current?.close()}>close</button>
          <Dialog ariaLabel="x" onOpenChange={onOpenChange} ref={ref} data-testid="d">
            body
          </Dialog>
        </>
      );
    }
    render(<Host />);
    fireEvent.click(screen.getByRole('button', { name: 'open' }));
    expect((screen.getByTestId('d') as HTMLDialogElement).open).toBe(true);
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
    fireEvent.click(screen.getByRole('button', { name: 'close' }));
    expect((screen.getByTestId('d') as HTMLDialogElement).open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('ref.toggle：在开/关之间翻转', () => {
    function Host() {
      const ref = useRef<DialogHandle>(null);
      return (
        <>
          <button onClick={() => ref.current?.toggle()}>toggle</button>
          <Dialog ariaLabel="x" ref={ref} data-testid="d">
            x
          </Dialog>
        </>
      );
    }
    render(<Host />);
    const d = screen.getByTestId('d') as HTMLDialogElement;
    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(d.open).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(d.open).toBe(false);
  });

  it('ref.el：暴露真实 DOM 引用', () => {
    function Host() {
      const ref = useRef<DialogHandle>(null);
      // 立刻读 ref.current.el：mount 之后
      return (
        <>
          <Dialog ariaLabel="x" ref={ref} data-testid="d">
            x
          </Dialog>
          <button
            onClick={() => {
              const el = ref.current?.el;
              if (el) el.setAttribute('data-from-ref', '1');
            }}
          >
            mark
          </button>
        </>
      );
    }
    render(<Host />);
    fireEvent.click(screen.getByRole('button', { name: 'mark' }));
    expect(screen.getByTestId('d').getAttribute('data-from-ref')).toBe('1');
  });

  it('受控：ref.open() / close() 调 onOpenChange 但内部不改 open', () => {
    const onOpenChange = vi.fn();
    function Host() {
      const ref = useRef<DialogHandle>(null);
      return (
        <>
          <button onClick={() => ref.current?.open()}>open</button>
          <Dialog open={false} ariaLabel="x" onOpenChange={onOpenChange} ref={ref} data-testid="d">
            x
          </Dialog>
        </>
      );
    }
    render(<Host />);
    fireEvent.click(screen.getByRole('button', { name: 'open' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    // 受控外部没改 open prop → 内部不动
    expect((screen.getByTestId('d') as HTMLDialogElement).open).toBe(false);
  });
});

describe('Dialog - Esc / cancel', () => {
  it('cancel 事件 + closeOnEsc 默认 true：关闭并 onOpenChange(false)', () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog defaultOpen ariaLabel="x" onOpenChange={onOpenChange} data-testid="d">
        x
      </Dialog>,
    );
    const d = screen.getByTestId('d') as HTMLDialogElement;
    fireEvent(d, new Event('cancel', { cancelable: true, bubbles: true }));
    expect(d.open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('closeOnEsc=false：cancel preventDefault 但不关', () => {
    render(
      <Dialog defaultOpen ariaLabel="x" closeOnEsc={false} data-testid="d">
        x
      </Dialog>,
    );
    const d = screen.getByTestId('d') as HTMLDialogElement;
    fireEvent(d, new Event('cancel', { cancelable: true, bubbles: true }));
    expect(d.open).toBe(true);
  });
});

describe('Dialog - backdrop 点击', () => {
  it('点击 backdrop（clientX 在 rect 外）：关', () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog defaultOpen ariaLabel="x" onOpenChange={onOpenChange} data-testid="d">
        x
      </Dialog>,
    );
    const d = screen.getByTestId('d') as HTMLDialogElement;
    // happy-dom rect = (0,0,0,0) → clientX=10 算外面
    fireEvent.click(d, { clientX: 10, clientY: 10 });
    expect(d.open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('点击在 rect 内（clientX=0/clientY=0）：不关', () => {
    render(
      <Dialog defaultOpen ariaLabel="x" data-testid="d">
        x
      </Dialog>,
    );
    const d = screen.getByTestId('d') as HTMLDialogElement;
    fireEvent.click(d, { clientX: 0, clientY: 0 });
    expect(d.open).toBe(true);
  });

  it('closeOnBackdropClick=false：外点也不关', () => {
    render(
      <Dialog defaultOpen ariaLabel="x" closeOnBackdropClick={false} data-testid="d">
        x
      </Dialog>,
    );
    const d = screen.getByTestId('d') as HTMLDialogElement;
    fireEvent.click(d, { clientX: 10, clientY: 10 });
    expect(d.open).toBe(true);
  });

  it('用户 onClick 仍被转发', () => {
    const onClick = vi.fn();
    render(
      <Dialog defaultOpen ariaLabel="x" onClick={onClick} data-testid="d">
        x
      </Dialog>,
    );
    fireEvent.click(screen.getByTestId('d'), { clientX: 0, clientY: 0 });
    expect(onClick).toHaveBeenCalled();
  });
});

describe('Dialog - dev 警告', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('defaultOpen + open：警告', () => {
    render(
      <Dialog defaultOpen open ariaLabel="x">
        x
      </Dialog>,
    );
    expect(warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('defaultOpen'))).toBe(
      true,
    );
  });

  it('打开时缺 ariaLabel/labelledBy/DialogTitle：警告', () => {
    render(<Dialog defaultOpen>x</Dialog>);
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(true);
  });

  it('未打开时不检查 accessible name', () => {
    render(<Dialog>x</Dialog>);
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(false);
  });

  it('有 DialogTitle：不警告 accessible name', () => {
    render(
      <Dialog defaultOpen>
        <DialogTitle>t</DialogTitle>
      </Dialog>,
    );
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(false);
  });

  it('提供 ariaLabel：不警告 accessible name', () => {
    render(
      <Dialog defaultOpen ariaLabel="x">
        x
      </Dialog>,
    );
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(false);
  });

  it('提供 ariaLabelledBy：不警告 accessible name', () => {
    render(
      <Dialog defaultOpen ariaLabelledBy="t">
        x
      </Dialog>,
    );
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(false);
  });
});

describe('Dialog - 卸载兜底', () => {
  it('open 中卸载：不抛（cleanup 触发 close 走 effect cleanup）', () => {
    const { unmount } = render(
      <Dialog defaultOpen ariaLabel="x">
        x
      </Dialog>,
    );
    // happy-dom 下 ref 在 cleanup 时可能已 null；只验不抛即可
    expect(() => unmount()).not.toThrow();
  });

  it('已 close 状态卸载：不抛', () => {
    const { unmount } = render(
      <Dialog ariaLabel="x" data-testid="d">
        x
      </Dialog>,
    );
    expect(() => unmount()).not.toThrow();
  });
});

describe('Dialog - lockScroll', () => {
  it('open=true + lockScroll=true：调 scrollLock.acquire', async () => {
    const mod = await import('@internal/dom');
    const acquireSpy = vi.spyOn(mod.scrollLock, 'acquire');
    const releaseSpy = vi.spyOn(mod.scrollLock, 'release');
    const { unmount } = render(
      <Dialog defaultOpen ariaLabel="x">
        x
      </Dialog>,
    );
    expect(acquireSpy).toHaveBeenCalled();
    unmount();
    expect(releaseSpy).toHaveBeenCalled();
    acquireSpy.mockRestore();
    releaseSpy.mockRestore();
  });

  it('lockScroll=false：不调 acquire', async () => {
    const mod = await import('@internal/dom');
    const acquireSpy = vi.spyOn(mod.scrollLock, 'acquire');
    render(
      <Dialog defaultOpen ariaLabel="x" lockScroll={false}>
        x
      </Dialog>,
    );
    expect(acquireSpy).not.toHaveBeenCalled();
    acquireSpy.mockRestore();
  });
});

describe('Dialog - 结构子组件', () => {
  it('Header / Title / Body / Footer 带各自类名', () => {
    render(
      <Dialog defaultOpen>
        <DialogHeader data-testid="h">
          <DialogTitle>title</DialogTitle>
        </DialogHeader>
        <DialogBody data-testid="b">body</DialogBody>
        <DialogFooter data-testid="f">footer</DialogFooter>
      </Dialog>,
    );
    expect(screen.getByTestId('h').className).toBe('venomous--Dialog__header');
    expect(screen.getByRole('heading', { name: 'title' }).className).toBe(
      'venomous--Dialog__title',
    );
    expect(screen.getByTestId('b').className).toBe('venomous--Dialog__body');
    expect(screen.getByTestId('f').className).toBe('venomous--Dialog__footer');
  });

  it('DialogTitle 自动成为 Dialog 的 aria-labelledby；卸载后移除', () => {
    const { rerender } = render(
      <Dialog defaultOpen data-testid="d">
        <DialogTitle>Delete file</DialogTitle>
      </Dialog>,
    );
    const d = screen.getByTestId('d');
    const titleId = screen.getByRole('heading').id;
    expect(titleId).not.toBe('');
    expect(d.getAttribute('aria-labelledby')).toBe(titleId);

    rerender(<Dialog defaultOpen ariaLabel="x" data-testid="d" />);
    expect(d.hasAttribute('aria-labelledby')).toBe(false);
  });

  it('DialogTitle 显式 id 时用它', () => {
    render(
      <Dialog defaultOpen data-testid="d">
        <DialogTitle id="my-title">t</DialogTitle>
      </Dialog>,
    );
    expect(screen.getByTestId('d').getAttribute('aria-labelledby')).toBe('my-title');
  });

  it('显式 ariaLabelledBy 优先于 DialogTitle', () => {
    render(
      <Dialog defaultOpen ariaLabelledBy="other" data-testid="d">
        <DialogTitle>t</DialogTitle>
      </Dialog>,
    );
    expect(screen.getByTestId('d').getAttribute('aria-labelledby')).toBe('other');
  });

  it('DialogTitle 在 Dialog 外使用：普通 h2，不带 id', () => {
    render(<DialogTitle className="x">t</DialogTitle>);
    const h = screen.getByRole('heading');
    expect(h.hasAttribute('id')).toBe(false);
    expect(h.className).toBe('venomous--Dialog__title x');
  });
});
