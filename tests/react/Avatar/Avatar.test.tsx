import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Avatar } from '@packages/react/Avatar';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Avatar', () => {
  it('有图片：role=img + 名字作为无障碍名称，图片本身对读屏器隐藏', () => {
    const { container } = render(<Avatar src="/a.png" name="Ada Lovelace" className="x" />);
    const avatar = screen.getByRole('img', { name: 'Ada Lovelace' });
    expect(avatar.className).toBe('venomous--Avatar venomous--Avatar--size-md x');
    expect(container.querySelector('img')!.getAttribute('alt')).toBe('');
  });

  it('没有图片：显示首字母', () => {
    render(<Avatar name="Ada Lovelace" size="lg" />);
    expect(screen.getByRole('img').textContent).toBe('AL');
  });

  it('图片加载失败回退首字母；换了 src 重新尝试加载', () => {
    const { container, rerender } = render(<Avatar src="/broken.png" name="Ada" />);
    fireEvent.error(container.querySelector('img')!);
    expect(container.querySelector('img')).toBeNull();
    expect(screen.getByRole('img').textContent).toBe('A');
    rerender(<Avatar src="/ok.png" name="Ada" />);
    expect(container.querySelector('img')).not.toBeNull();
  });

  it('服务端渲染的图片在 hydrate 前已失败：挂载后补查并回退', () => {
    vi.spyOn(HTMLImageElement.prototype, 'complete', 'get').mockReturnValue(true);
    vi.spyOn(HTMLImageElement.prototype, 'naturalWidth', 'get').mockReturnValue(0);
    const { container } = render(<Avatar src="/broken.png" name="Ada" />);
    expect(container.querySelector('img')).toBeNull();
  });

  it('没有名字：视为装饰，对读屏器隐藏；空 src 当作没有图片', () => {
    const { container } = render(<Avatar src="" />);
    const avatar = container.firstElementChild!;
    expect(avatar.getAttribute('aria-hidden')).toBe('true');
    expect(avatar.hasAttribute('role')).toBe(false);
    expect(container.querySelector('img')).toBeNull();
  });
});
