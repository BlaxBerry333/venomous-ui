#!/usr/bin/env node
/**
 * 校验 packages/utils/classnames/*.ts 中每个 KEY: 'value' 对：
 *   - key 必须是 SCREAMING_SNAKE_CASE
 *   - value 必须以 'venomous--' 双横线前缀开头
 *   - value 必须能对应到 packages/styles/classnames/ 下某个 SCSS 文件中定义的选择器
 *   - key 转 lower-kebab 必须等于 value 去掉 'venomous--' 前缀后再把 BEM 分隔符 (`__` `--`) 折叠成 `-`
 *     例：BRAND_PRIMARY → 'brand-primary'，'venomous--brand--primary' 折叠后 'brand-primary' ✅
 *     例：BUTTON_ICON_LOADING → 'button-icon-loading'，'venomous--Button__icon--loading' 折叠 + lower 后 'button-icon-loading' ✅
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'tinyglobby';
import { compile } from 'sass';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// 编译后的 css 用同一规则提取选择器 —— 这样 @for / @each 等动态语法生成的类也能被识别。
const CSS_SELECTOR = /\.(venomous--[A-Za-z0-9_-]+)\s*[\s,{]/g;
const TS_PAIR = /([A-Za-z_$][\w$]*)\s*:\s*['"]([^'"]*)['"]/g;
// utility: venomous--<block>--<modifier>，block 全小写；modifier 可省。
// component: venomous--<Block>(__element)?(--modifier)?，Block 首字母大写。
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

const scssClasses = new Set();
for (const { path } of readFiles(['packages/styles/classnames/*.scss'])) {
  const css = compile(path).css;
  for (const m of css.matchAll(CSS_SELECTOR)) scssClasses.add(m[1]);
}

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
      if (!scssClasses.has(value)) reasons.push(`value not defined in SCSS`);
      const expected = key.toLowerCase().replace(/_/g, '-');
      // 把 value 去前缀后的 BEM 分隔符 (`__` `--`) 折叠成 `-`，再跟 key 比较
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
