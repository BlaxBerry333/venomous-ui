/**
 * RTL cleanup：vitest globals=false 时 RTL 不自动注册 afterEach。
 * 跨用例残留 DOM 会让 querySelector 命中"上一个 render 的同 testid"造成假阴/假阳。
 */

import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
