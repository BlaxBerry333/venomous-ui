import { describe, expect, it } from 'vitest';

import { TYPOGRAPHY } from '@packages/utils/classnames/typography';

const UTILITY_CLASSNAME = /^venomous--[a-z][a-z0-9-]*(--[a-z0-9-]+)?$/;

describe('TYPOGRAPHY classnames 表', () => {
  it('导出非空对象', () => {
    expect(Object.keys(TYPOGRAPHY).length).toBeGreaterThan(0);
  });

  it('每个 value 都形如 venomous--<block>(--mod)?', () => {
    for (const [key, value] of Object.entries(TYPOGRAPHY)) {
      expect(value, `key=${key}`).toMatch(UTILITY_CLASSNAME);
    }
  });

  it('value 互不重复', () => {
    const values = Object.values(TYPOGRAPHY);
    expect(new Set(values).size).toBe(values.length);
  });
});
