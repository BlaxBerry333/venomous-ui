#!/usr/bin/env node
/**
 * 校验 packages/utils/tokens/*.ts 中每个 KEY: 'value' 对：
 *   - key 必须是 SCREAMING_SNAKE_CASE
 *   - value 必须是 '--venomous-*' 形式
 *   - value 必须能对应到 packages/styles/tokens/ 下某个 SCSS 文件中定义的 var
 *   - key 转 lower-kebab 必须是 value 的末尾后缀（确保命名映射对齐）
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'tinyglobby';
import { compile } from 'sass';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// 编译后的 css 用同一规则提取 var 定义 —— 这样 @for / @each 等动态语法生成的 var 也能被识别。
const CSS_DEFINE = /(--venomous-[a-z0-9-]+)\s*:/g; // 定义位置（var: value），不匹配 var(--xxx) 引用
const TS_PAIR = /([A-Za-z_$][\w$]*)\s*:\s*['"]([^'"]*)['"]/g; // KEY: 'value' 对（value 任意字符串）
const VAR_NAME = /^--venomous-[a-z0-9-]+$/;
const SCREAMING_SNAKE = /^[A-Z][A-Z0-9_]*$/;

function readFiles(globs) {
  return globSync(globs, { cwd: root, absolute: true }).map((file) => ({
    name: basename(file).replace(/\.(scss|ts)$/, ''),
    content: readFileSync(file, 'utf8'),
    path: file,
  }));
}

// SCSS 中所有定义过的 var 名（跨文件并集，本脚本只关心是否定义）
const scssVars = new Set();
for (const { path } of readFiles(['packages/styles/tokens/*.scss'])) {
  const css = compile(path).css;
  for (const m of css.matchAll(CSS_DEFINE)) scssVars.add(m[1]);
}

// 校验每个 TS 文件的 { KEY: 'value' }
const mismatches = [];
for (const { name, content } of readFiles(['packages/utils/tokens/*.ts'])) {
  if (name === 'index') continue;
  const pairs = [...content.matchAll(TS_PAIR)].map((m) => [m[1], m[2]]);
  const bad = [];
  for (const [key, value] of pairs) {
    const reasons = [];
    const keyOk = SCREAMING_SNAKE.test(key);
    const valOk = VAR_NAME.test(value);
    if (!keyOk) reasons.push(`key must be SCREAMING_SNAKE_CASE`);
    if (!valOk) reasons.push(`value must be '--venomous-*'`);
    if (keyOk && valOk) {
      if (!scssVars.has(value)) reasons.push(`value not defined in SCSS`);
      const expected = key.toLowerCase().replace(/_/g, '-');
      if (!value.replace(/^--venomous-/, '').endsWith(expected)) {
        reasons.push(`key should map to '...${expected}'`);
      }
    }
    if (reasons.length) bad.push({ key, value, reason: reasons.join('; ') });
  }
  if (bad.length) mismatches.push({ file: name, bad });
}

// ANSI 颜色仅用于错误输出。NO_COLOR 显式禁用时降级 plain。
const useColor = !process.env.NO_COLOR;
const red = (s) => (useColor ? `\x1b[31m${s}\x1b[0m` : s);
const bold = (s) => (useColor ? `\x1b[1m${s}\x1b[0m` : s);

if (mismatches.length) {
  for (const m of mismatches) {
    console.error(`Mismatch in ${bold(`packages/utils/tokens/${m.file}.ts`)}:`);
    for (const { key, value, reason } of m.bad)
      console.error(`  ${red('x')}  { ${key}: '${value}' }  ${red(reason)}`);
    console.error('');
  }
  process.exit(1);
}
