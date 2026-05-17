import { describe, expect, it } from 'vitest';

import { COMPONENTS } from '@packages/utils/classnames/components';

const COMPONENT_CLASSNAME = /^venomous--[A-Z][A-Za-z0-9]*(__[a-z0-9-]+)?(--[a-z0-9-]+)?$/;

describe('COMPONENTS classnames 表', () => {
  it('导出非空对象', () => {
    expect(Object.keys(COMPONENTS).length).toBeGreaterThan(0);
  });

  it('每个 value 都形如 venomous--<Block>(__el)?(--mod)?', () => {
    for (const [key, value] of Object.entries(COMPONENTS)) {
      expect(value, `key=${key}`).toMatch(COMPONENT_CLASSNAME);
    }
  });

  it('value 互不重复', () => {
    const values = Object.values(COMPONENTS);
    expect(new Set(values).size).toBe(values.length);
  });
});
