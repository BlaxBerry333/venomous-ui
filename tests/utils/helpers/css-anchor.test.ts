import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('css-anchor', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('supportsCssAnchorPositioning', () => {
    it('CSS 未定义时返回 false 并缓存', async () => {
      vi.stubGlobal('CSS', undefined);
      const { supportsCssAnchorPositioning } = await import('@packages/utils/helpers/css-anchor');
      expect(supportsCssAnchorPositioning()).toBe(false);
      // 第二次走缓存分支
      expect(supportsCssAnchorPositioning()).toBe(false);
    });

    it('CSS.supports 全 true 返回 true 并缓存', async () => {
      vi.stubGlobal('CSS', { supports: () => true });
      const { supportsCssAnchorPositioning } = await import('@packages/utils/helpers/css-anchor');
      expect(supportsCssAnchorPositioning()).toBe(true);
      expect(supportsCssAnchorPositioning()).toBe(true);
    });

    it('CSS.supports 任一返回 false 则不支持', async () => {
      vi.stubGlobal('CSS', {
        supports: (q: string) => q.startsWith('anchor-name'),
      });
      const { supportsCssAnchorPositioning } = await import('@packages/utils/helpers/css-anchor');
      expect(supportsCssAnchorPositioning()).toBe(false);
    });

    it('CSS 存在但 supports 不是函数返回 false', async () => {
      vi.stubGlobal('CSS', {});
      const { supportsCssAnchorPositioning } = await import('@packages/utils/helpers/css-anchor');
      expect(supportsCssAnchorPositioning()).toBe(false);
    });
  });

  describe('sanitizeCssIdent', () => {
    it('合法字符保留', async () => {
      const { sanitizeCssIdent } = await import('@packages/utils/helpers/css-anchor');
      expect(sanitizeCssIdent('abc-XYZ_123')).toBe('abc-XYZ_123');
    });

    it('非法字符替换为下划线', async () => {
      const { sanitizeCssIdent } = await import('@packages/utils/helpers/css-anchor');
      expect(sanitizeCssIdent(':r0:')).toBe('_r0_');
      expect(sanitizeCssIdent('a.b/c d')).toBe('a_b_c_d');
    });
  });

  describe('nextAnchorName', () => {
    it('每次递增', async () => {
      const { nextAnchorName } = await import('@packages/utils/helpers/css-anchor');
      const a = Number(nextAnchorName());
      const b = Number(nextAnchorName());
      const c = Number(nextAnchorName());
      expect(b).toBe(a + 1);
      expect(c).toBe(b + 1);
    });
  });
});
