#!/usr/bin/env node
/**
 * 校验 packages/utils/classnames/*.ts 中每个 KEY: 'value' 对：
 *   - key 必须是 SCREAMING_SNAKE_CASE
 *   - value 必须是 'venomous--*' 形式（utility 全小写 / component 首字母大写 + 可选 __element / --modifier）
 *   - value 必须能对应到 packages/styles/{classnames,components}/ 下某个 SCSS 文件中定义的选择器
 *   - key 转 lower-kebab 必须等于 value 去前缀并把 BEM 分隔符折叠成 `-` 后的形式（确保命名映射对齐）
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'tinyglobby';
import { compile } from 'sass';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// 编译后的 css 用同一规则提取选择器 —— 这样 @for / @each 等动态语法生成的类也能被识别。
const CSS_SELECTOR = /\.(venomous--[A-Za-z0-9_-]+)\s*[\s,{]/g; // 选择器位置（.venomous--xxx），不匹配复合选择器中的引用
const TS_PAIR = /([A-Za-z_$][\w$]*)\s*:\s*['"]([^'"]*)['"]/g; // KEY: 'value' 对（value 任意字符串）
const CLASS_NAME =
  /^venomous--([a-z][a-z0-9-]*(--[a-z0-9-]+)?|[A-Z][A-Za-z0-9]*(__[a-z0-9-]+)?(--[a-z0-9-]+)?)$/;
const SCREAMING_SNAKE = /^[A-Z][A-Z0-9_]*$/;

function readFiles(globs) {
  return globSync(globs, { cwd: root, absolute: true }).map((file) => ({
    name: basename(file).replace(/\.(scss|ts)$/, ''),
    content: readFileSync(file, 'utf8'),
    path: file,
  }));
}

// SCSS 中所有定义过的 className（跨文件并集，本脚本只关心是否定义）
const scssClasses = new Set();
for (const { path } of readFiles([
  'packages/styles/classnames/*.scss',
  'packages/styles/components/*.scss',
])) {
  const css = compile(path).css;
  for (const m of css.matchAll(CSS_SELECTOR)) scssClasses.add(m[1]);
}

// 校验每个 TS 文件的 { KEY: 'value' }
const mismatches = [];
for (const { name, content } of readFiles(['packages/utils/classnames/*.ts'])) {
  if (name === 'index') continue;
  const pairs = [...content.matchAll(TS_PAIR)].map((m) => [m[1], m[2]]);
  const bad = [];
  for (const [key, value] of pairs) {
    const reasons = [];
    const keyOk = SCREAMING_SNAKE.test(key);
    const valOk = CLASS_NAME.test(value);
    if (!keyOk) reasons.push(`key must be SCREAMING_SNAKE_CASE`);
    if (!valOk)
      reasons.push(
        `value must be 'venomous--<block>(--mod)?' or 'venomous--<Block>(__el)?(--mod)?'`,
      );
    if (keyOk && valOk) {
      if (!scssClasses.has(value)) {
        reasons.push(`value not defined in SCSS`);
      }
      const expected = key.toLowerCase().replace(/_/g, '-');
      const valueBody = value
        .replace(/^venomous--/, '')
        .replace(/__|--/g, '-')
        .toLowerCase();
      if (valueBody !== expected) {
        reasons.push(`key should map to '${valueBody}'`);
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
    console.error(`Mismatch in ${bold(`packages/utils/classnames/${m.file}.ts`)}:`);
    for (const { key, value, reason } of m.bad)
      console.error(`  ${red('x')}  { ${key}: '${value}' }  ${red(reason)}`);
    console.error('');
  }
  process.exit(1);
}
