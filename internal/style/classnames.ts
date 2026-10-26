/**
 * 轻量 className 拼接：接收任意数量的片段，跳过 falsy 值，用单空格连接。
 *
 * 单趟字符串拼接，无中间数组、无 `Array.prototype.join`。
 *
 * @param args - 任意数量的类名片段；`false` / `null` / `undefined` / 空串会被忽略。
 * @returns 拼接后的字符串；全部为 falsy 时返回空字符串。
 *
 * @example
 * mergeClassName('btn', 'btn--primary', 'is-loading');         // "btn btn--primary is-loading"
 * mergeClassName('btn', isActive && 'is-active');              // isActive=false → "btn"
 * mergeClassName('btn', disabled ? 'is-disabled' : undefined); // disabled=false → "btn"
 * mergeClassName(undefined, null, false);                      // ""
 */
export function mergeClassName(...args: Array<string | false | null | undefined>): string {
  let out = '';
  for (const arg of args) {
    if (typeof arg !== 'string' || arg.length === 0) continue;
    out = out ? `${out} ${arg}` : arg;
  }
  return out;
}
