/**
 * @file 仓库 URL 单一真相源。从 package.json 解析，避免 magic string 在 theme / mdx 重复粘贴。
 */

import pkg from '../../package.json';

// 'git+https://github.com/owner/repo.git' → 'https://github.com/owner/repo'
export const REPO_URL: string = pkg.repository.url.replace(/^git\+/, '').replace(/\.git$/, '');

/** 拼出仓库内某个文件在 GitHub 上的源码链接（路径相对仓库根目录）。 */
export function sourceUrl(filePath: string): string {
  return `${REPO_URL}/blob/main/${filePath}`;
}
