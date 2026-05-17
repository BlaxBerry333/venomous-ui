import { afterEach, describe, expect, it } from 'vitest';

import { cssVar, readCssVar, setCssVar } from '@packages/utils/helpers/css-variables';

const VAR_NAME = '--venomous-test-var';

afterEach(() => {
  document.documentElement.style.removeProperty(VAR_NAME);
});

describe('cssVar', () => {
  it('无 fallback 返回 var(name)', () => {
    expect(cssVar('--x')).toBe('var(--x)');
  });

  it('有 fallback 返回 var(name,fallback)', () => {
    expect(cssVar('--x', '#fff')).toBe('var(--x,#fff)');
  });
});

describe('setCssVar / readCssVar', () => {
  it('默认作用于 documentElement，写后能读', () => {
    setCssVar(VAR_NAME, '#0b0b0b');
    expect(readCssVar(VAR_NAME)).toBe('#0b0b0b');
  });

  it('指定 root 写入并读取', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    setCssVar(VAR_NAME, '12px', el);
    expect(readCssVar(VAR_NAME, el)).toBe('12px');
    document.body.removeChild(el);
  });

  it('变量未定义读出空串', () => {
    expect(readCssVar('--nonexistent-var-xyz')).toBe('');
  });
});
