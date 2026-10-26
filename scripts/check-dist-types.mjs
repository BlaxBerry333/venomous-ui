/**
 * 构建后校验 dist 里的 .d.ts：不得引用不随包发布的源码路径（internal/ 与路径别名）。
 * 公开类型只能定义在 packages/ 下；一旦引用 internal，用户拿到的类型会解析失败。
 */

import { readFileSync } from 'node:fs';
import { globSync } from 'tinyglobby';

const FORBIDDEN = /from ['"](?:@internal\/|@packages\/|(?:\.\.\/)+internal\/)/;

const files = globSync('dist/**/*.d.ts');
const offenders = files.filter((file) => FORBIDDEN.test(readFileSync(file, 'utf8')));

if (files.length === 0) {
  console.error('check-dist-types: dist 里没有 .d.ts，先运行 npm run build');
  process.exit(1);
}
if (offenders.length > 0) {
  console.error('check-dist-types: 以下声明文件引用了不发布的源码路径：');
  for (const file of offenders) console.error(`  ${file}`);
  process.exit(1);
}
console.log(`check-dist-types: ${files.length} 个声明文件通过`);
