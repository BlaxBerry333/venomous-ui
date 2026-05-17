import { describe, expect, it } from 'vitest';

import { mergeClassName } from '@packages/utils/helpers/classnames';

describe('mergeClassName', () => {
  it('全 falsy 输入返回空串', () => {
    expect(mergeClassName()).toBe('');
    expect(mergeClassName(undefined, null, false, '')).toBe('');
  });

  it('跳过 falsy / 空串，仅留有效片段', () => {
    expect(mergeClassName('btn', false, 'btn--primary', null, 'is-loading', undefined)).toBe(
      'btn btn--primary is-loading',
    );
  });

  it('单片段不前置空格', () => {
    expect(mergeClassName('btn')).toBe('btn');
    expect(mergeClassName(false, 'btn', undefined)).toBe('btn');
  });

  it('条件类名（短路）按预期', () => {
    const isActive = false;
    const disabled = false;
    expect(mergeClassName('btn', isActive && 'is-active')).toBe('btn');
    expect(mergeClassName('btn', disabled ? 'is-disabled' : undefined)).toBe('btn');
  });
});
