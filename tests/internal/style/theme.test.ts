import { describe, expect, it } from 'vitest';
import { normalizeTheme } from '@internal/style';

const base = {
  themes: ['light', 'dark'] as const,
  enableSystem: true,
  defaultTheme: 'system' as const,
};

describe('normalizeTheme', () => {
  it('null 回落到 defaultTheme', () => {
    expect(normalizeTheme(null, base)).toBe('system');
  });

  it('themes 内的值原样返回', () => {
    expect(normalizeTheme('dark', base)).toBe('dark');
  });

  it('启用 system 时接受 system', () => {
    expect(normalizeTheme('system', { ...base, defaultTheme: 'light' })).toBe('system');
  });

  it('未启用 system 时 system 视为脏值', () => {
    expect(normalizeTheme('system', { ...base, enableSystem: false, defaultTheme: 'light' })).toBe(
      'light',
    );
  });

  it('不在 themes 内的脏值回落到 defaultTheme', () => {
    expect(normalizeTheme('purple', base)).toBe('system');
  });
});
