/**
 * className 拼接：兼容 string / number / array（递归）/ object（key truthy 才取）。
 * 全 falsy → 返回 undefined（不是 ""，方便 `<div className={cn(...)}>` 在无类名时不渲染 class 属性）。
 *
 * @example
 *   cn('a', 'b')                          // 'a b'
 *   cn(['a', false && 'b', ['c', 'd']])   // 'a c d'
 *   cn({ a: true, b: 0, c: 'x' })         // 'a c'
 *   cn(undefined, null, false)            // undefined
 */
export type ClassValue =
  | string
  | number
  | bigint
  | null
  | undefined
  | boolean
  | ClassValue[]
  | { [key: string]: unknown };

export function cn(...args: ClassValue[]): string | undefined {
  const out: string[] = [];
  for (const arg of args) {
    appendClass(out, arg);
  }
  return out.length === 0 ? undefined : out.join(' ');
}

function appendClass(out: string[], arg: ClassValue): void {
  if (!arg && arg !== 0) {
    // null / undefined / false / '' / NaN：跳过
    return;
  }
  if (typeof arg === 'string') {
    if (arg.length > 0) out.push(arg);
    return;
  }
  if (typeof arg === 'number' || typeof arg === 'bigint') {
    out.push(String(arg));
    return;
  }
  if (Array.isArray(arg)) {
    for (const item of arg) appendClass(out, item);
    return;
  }
  if (typeof arg === 'object') {
    for (const key of Object.keys(arg)) {
      if (arg[key]) out.push(key);
    }
    return;
  }
}
