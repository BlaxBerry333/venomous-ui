import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type * as InternalDom from '@internal/dom';
import { useFloating, type UseFloatingOptions, type UseFloatingReturn } from '@internal/react';

// 浏览器支持 CSS Anchor Positioning 的路径
vi.mock('@internal/dom', async (importOriginal) => ({
  ...(await importOriginal<typeof InternalDom>()),
  supportsCssAnchorPositioning: () => true,
}));

let api: UseFloatingReturn;

function Harness({
  contentKey,
  ...options
}: Partial<UseFloatingOptions> & { contentKey?: string }) {
  api = useFloating({
    open: true,
    placement: 'bottom-start',
    offset: 8,
    collisionPadding: 8,
    flip: true,
    shift: true,
    ...options,
  });
  return (
    <>
      <button ref={api.triggerRef}>t</button>
      <div key={contentKey} ref={api.contentRef}>
        c
      </div>
    </>
  );
}

describe('useFloating - CSS Anchor 路径', () => {
  it('只输出样式：trigger 声明 anchor-name，content 用 position-area 定位', () => {
    render(<Harness />);
    const anchorName = (api.triggerStyle as { anchorName: string }).anchorName;
    expect(anchorName).toMatch(/^--venomous-anchor-/);
    expect(api.contentStyle).toMatchObject({
      position: 'fixed',
      inset: 'auto',
      marginTop: '8px',
      positionAnchor: anchorName,
      positionArea: 'bottom span-right',
      positionTryFallbacks: 'flip-block, flip-inline, flip-block flip-inline',
    });
    expect(api.resolvedPlacement).toBe('bottom-start');
  });

  it('flip=false 不写回退；matchTriggerWidth 用 anchor-size；方向决定 margin', () => {
    render(<Harness placement="left" flip={false} matchTriggerWidth />);
    expect(api.contentStyle).not.toHaveProperty('positionTryFallbacks');
    expect(api.contentStyle).toMatchObject({ marginRight: '8px', minWidth: 'anchor-size(width)' });
  });

  it('打开中 content 重新挂载：进 top layer，但不走 JS 定位', () => {
    const show = vi.fn();
    HTMLElement.prototype.showPopover = show;
    const { rerender, container } = render(<Harness contentKey="a" />);
    show.mockClear();
    rerender(<Harness contentKey="b" />);
    expect(show).toHaveBeenCalled();
    expect((container.lastElementChild as HTMLElement).style.transform).toBe('');
    delete (HTMLElement.prototype as Partial<HTMLElement>).showPopover;
  });
});
