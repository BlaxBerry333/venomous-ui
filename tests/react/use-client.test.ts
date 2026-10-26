/**
 * 用了 hooks 或给元素挂事件处理的组件模块必须以 'use client' 开头，
 * 否则在 Next.js 等服务端组件里直接使用会报错（构建产物逐文件保留该指令）。
 */
import { readFileSync } from 'node:fs';
import { globSync } from 'tinyglobby';
import { describe, expect, it } from 'vitest';

const HOOK_CALL = /\buse[A-Z]\w*\(/;
const EVENT_PROP = /\son[A-Z]\w*=\{/;

const files = globSync('packages/react/**/*.tsx');

describe("'use client' 指令", () => {
  it.each(files)('%s', (file) => {
    const source = readFileSync(file, 'utf8');
    const needsClient = HOOK_CALL.test(source) || EVENT_PROP.test(source);
    const hasDirective = source.trimStart().startsWith("'use client'");
    if (needsClient) expect(hasDirective).toBe(true);
  });
});
