import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '@packages/react/Button';

const BLOCK = 'venomous--Button';

describe('Button', () => {
  it('默认 type=button，带 block / variant / size 类名', () => {
    render(<Button>click</Button>);
    const btn = screen.getByRole('button', { name: 'click' });
    expect(btn.getAttribute('type')).toBe('button');
    expect(btn.classList.contains(BLOCK)).toBe(true);
    expect(btn.classList.contains(`${BLOCK}--primary`)).toBe(true);
    expect(btn.classList.contains(`${BLOCK}--size-md`)).toBe(true);
  });

  it('variant / size / type / className 透传', () => {
    render(
      <Button variant="danger" size="lg" type="submit" className="extra">
        x
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn.getAttribute('type')).toBe('submit');
    expect(btn.classList.contains(`${BLOCK}--danger`)).toBe(true);
    expect(btn.classList.contains(`${BLOCK}--size-lg`)).toBe(true);
    expect(btn.classList.contains('extra')).toBe(true);
  });

  it('其余原生属性透传', () => {
    render(<Button aria-label="close" />);
    expect(screen.getByRole('button', { name: 'close' })).toBeTruthy();
  });

  it('onClick 触发', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>x</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('disabled：原生 disabled，不触发 onClick', () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        x
      </Button>,
    );
    const btn = screen.getByRole('button') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('非 loading 时不挂 aria-disabled / aria-busy / data-venomous-loading', () => {
    render(<Button>x</Button>);
    const btn = screen.getByRole('button');
    expect(btn.hasAttribute('aria-disabled')).toBe(false);
    expect(btn.hasAttribute('aria-busy')).toBe(false);
    expect(btn.hasAttribute('data-venomous-loading')).toBe(false);
  });

  describe('loading', () => {
    it('不设原生 disabled（保留焦点），改挂 aria-disabled / aria-busy / data-venomous-loading', () => {
      render(<Button loading>x</Button>);
      const btn = screen.getByRole('button') as HTMLButtonElement;
      expect(btn.disabled).toBe(false);
      expect(btn.getAttribute('aria-disabled')).toBe('true');
      expect(btn.getAttribute('aria-busy')).toBe('true');
      expect(btn.getAttribute('data-venomous-loading')).toBe('true');
    });

    it('切到 loading 后焦点仍在按钮上', () => {
      const { rerender } = render(<Button>x</Button>);
      const btn = screen.getByRole('button');
      btn.focus();
      rerender(<Button loading>x</Button>);
      expect(document.activeElement).toBe(btn);
    });

    it('click 被 preventDefault，不触发 onClick', () => {
      const onClick = vi.fn();
      render(
        <Button loading onClick={onClick}>
          x
        </Button>,
      );
      const notCanceled = fireEvent.click(screen.getByRole('button'));
      expect(notCanceled).toBe(false);
      expect(onClick).not.toHaveBeenCalled();
    });

    it.each([
      [false, 1],
      [true, 0],
    ])('type=submit 且 loading=%s 时表单提交 %i 次', (loading, times) => {
      const onSubmit = vi.fn((event: { preventDefault: () => void }) => event.preventDefault());
      render(
        <form onSubmit={onSubmit}>
          <Button type="submit" loading={loading}>
            x
          </Button>
        </form>,
      );
      fireEvent.click(screen.getByRole('button'));
      expect(onSubmit).toHaveBeenCalledTimes(times);
    });

    it('spinner 替换 startIcon，隐藏 endIcon', () => {
      const { container } = render(
        <Button loading startIcon={<i>s</i>} endIcon={<i>e</i>}>
          x
        </Button>,
      );
      expect(container.querySelector(`.${BLOCK}__spinner`)?.getAttribute('aria-hidden')).toBe(
        'true',
      );
      expect(container.querySelectorAll(`.${BLOCK}__icon`)).toHaveLength(0);
    });
  });

  it('startIcon / endIcon 渲染在 label 两侧', () => {
    const { container } = render(
      <Button startIcon={<i>s</i>} endIcon={<i>e</i>}>
        x
      </Button>,
    );
    const parts = Array.from(container.querySelector('button')!.children).map((el) => el.className);
    expect(parts).toEqual([`${BLOCK}__icon`, `${BLOCK}__label`, `${BLOCK}__icon`]);
  });

  it.each([
    ['undefined', undefined],
    ['null', null],
    ['false', false],
    ['空字符串', ''],
  ])('children 为 %s 时不渲染 label', (_, children) => {
    const { container } = render(<Button aria-label="icon">{children}</Button>);
    expect(container.querySelector(`.${BLOCK}__label`)).toBeNull();
  });

  it('children 为 0 时渲染 label', () => {
    const { container } = render(<Button>{0}</Button>);
    expect(container.querySelector(`.${BLOCK}__label`)?.textContent).toBe('0');
  });

  it('forwardRef 拿到 button DOM', () => {
    let captured: HTMLButtonElement | null = null;
    render(
      <Button
        ref={(el) => {
          captured = el;
        }}
      >
        x
      </Button>,
    );
    expect(captured).toBeInstanceOf(HTMLButtonElement);
  });
});
