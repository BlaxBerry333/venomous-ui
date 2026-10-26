# TODO

## 方向

- 有样式的 React 组件库，不做 headless，不对外暴露行为 hooks
- 只做 React；Vue 等 React 版稳定后再议（样式层本身与框架无关）
- 交互逻辑沿用 `00c7e2b` 里的实现，放进 `internal/` 作为内部实现
- 组件清单参考 GitHub 旧版（`github.com/BlaxBerry333/venomous-ui` 的 `main`）

## 已定的实现方式

| 事项                 | 决定                                                                                                                                         | 理由                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 组件样式怎么带给用户 | 构建时把组件里的 `import '...scss'` 改写成 `import 'venomous-ui/styles/components/<Name>.css'`（包自引用），组件 CSS 同时通过 `exports` 暴露 | 不新增依赖；用户 bundler 按 import 自动带上样式，也能手动按需引入 |
| `'use client'`       | React 产物开 `preserveModules`，一个源文件一个产物                                                                                           | 模块级指令自然保留，不需要额外插件；顺带按组件 tree-shake         |
| 推送 GitHub          | 只在本地提交，覆盖 GitHub 前单独确认                                                                                                         | force push 不可逆                                                 |

旧代码取法：

```bash
git show 00c7e2b:packages/utils/helpers/floating.ts
```

## 0. 打底

- [x] 提交当前未提交的重写，作为后续工作的起点

### 测试跑不起来

- [x] `configs/vitest.config.ts` 还在 import `@vitejs/plugin-vue`，但它已从依赖删除、`node_modules` 里也没有，配置加载即失败 → 删掉 vue 插件
- [x] alias 只有 `@packages`，缺 `@internal`
- [x] `coverage.include` 只含 `packages/**`，要加 `internal/**`；`exclude` 里的 `packages/utils/types/**` 已不存在，删掉
- [ ] 覆盖率阈值 100%，`use-theme.ts` / `ThemeScript.tsx` 还没有测试，`npm test` 全量跑会因覆盖率失败 → 补这两个的测试

### 构建

- [x] `configs/vite.config.react.ts` 没配 `@packages` / `@internal` 别名 → 加 `resolve.alias`
- [x] 组件 CSS 构建后会丢（已实测：产物里只剩 `/* empty css */`）→ 改写成包自引用，见「已定的实现方式」
- [x] d.ts 生成时报找不到 `*.scss` 类型 → CSS 类型声明从 `.storybook/shims-css.d.ts` 移到 `types/assets.d.ts`，构建和 Storybook 共用
- [x] `.github/workflows/release.yml` 的构建步骤被注释掉，发布时 `dist` 不存在 → 改为 `npm run build`

### 主题与样式

- [x] dark 主题依赖 CSS 引入顺序 → 选择器改成 `:root[data-theme='dark']`（代价：`data-theme` 只认 `<html>` 上的，不支持局部暗色）
- [x] 没设 `color-scheme` → light / dark 各自声明
- [x] `--venomous-shadow-focus` 写死紫色 → 用 `color-mix()` 基于 accent 生成
- [x] 状态色对比度不到 WCAG AA → light 的 success / warning 改用 700 阶；dark 的状态色前景一律用深色，danger hover 改成更亮的 red-400。现在 light 下状态色对 bg 与对前景都 ≥ 4.5，dark 同理
- [x] 字号全是 px → 字号 token 改 rem；Button 高度改 `min-height`，放大字号时不溢出
- [ ] `tokens.mdx` 的表格是手写的，改 SCSS 后容易不同步（低优先，组件补齐后再考虑从 SCSS 生成）

### useTheme / ThemeScript

- [ ] Next.js 下 `ThemeScript` 在 hydrate 前改了 `<html data-theme>`，会出 hydration 警告 → overview 和 README 的示例里给 `<html>` 加 `suppressHydrationWarning`
- [ ] `attribute` 和 `themes` 选项与 CSS 不配套：`dark.scss` 写死了 `[data-theme='dark']`，改 attribute 或加新主题后 CSS 不生效 → 删掉这两个选项，或在文档写清需要自己写对应 CSS
- [ ] 从 localStorage 读到的值没按 `themes` 校验，脏值会原样写进 DOM

### Button

- [x] loading 时用原生 `disabled`，进入 loading 的瞬间焦点会丢 → 改用 `aria-disabled` + 在 click 上 `preventDefault`（同时挡住键盘触发和表单提交）
- [x] `children` 为 `null` / `false` 时仍渲染空的 `__label` span → 判断改成有内容才渲染
- [x] `:focus-visible` 用 `outline: none`，Windows 强制颜色模式下看不到焦点 → 改成透明 outline
- [x] 补测试 `tests/react/Button/Button.test.tsx`（要等上面「测试跑不起来」修完才能跑）
- [x] Story 补 `startIcon` / `endIcon` 示例

### 其他

- [ ] `package.json` 的 `description` 是空的，补上
- [ ] `README.md` 还写着 headless + 三种用法，改成新定位
- [ ] Storybook 工具栏有语言切换，但 `.storybook/i18n/dict.ts` 没被任何地方使用，切了没反应 → 接上或先去掉切换按钮
- [ ] `.vscode/settings.json` 还引用已删除的 `vite.config.utils.ts`

## 1. 补底座 `internal/`

都不进 `package.json` 的 `exports`。搬的时候删掉刷覆盖率用的 `v8 ignore` 注释和对应的长解释。

| 旧路径（`00c7e2b`）                                    | 新路径                                           | 用途                                          |
| ------------------------------------------------------ | ------------------------------------------------ | --------------------------------------------- |
| `packages/utils/helpers/overlay-stack.ts`              | `internal/dom/overlay-stack.ts`                  | 嵌套弹层只让最上层响应 Esc / 点外部           |
| `packages/utils/helpers/scroll-lock.ts`                | `internal/dom/scroll-lock.ts`                    | 锁 body 滚动 + 滚动条宽度补偿，可嵌套         |
| `packages/utils/helpers/floating.ts`                   | `internal/dom/floating.ts`                       | 浮层定位，flip / shift                        |
| `packages/utils/helpers/css-anchor.ts`                 | `internal/dom/css-anchor.ts`                     | CSS Anchor Positioning 能力检测 + anchor-name |
| `packages/utils/helpers/dom.ts`                        | `internal/dom/dom.ts`                            | 点外部判定、视口尺寸、虚拟锚点                |
| `packages/utils/helpers/classnames.ts`                 | `internal/style/classnames.ts`                   | `mergeClassName`                              |
| `packages/react/hooks/use-isomorphic-layout-effect.ts` | `internal/react/use-isomorphic-layout-effect.ts` | SSR 安全的 layout effect                      |

- [ ] 搬上表文件
- [ ] 类型依赖：`floating.ts` 依赖 `ComponentBasePlacement`，`types/components.ts` 又依赖 `dom.ts` 的 `VirtualAnchorElement`，两者循环
  - [ ] `ComponentBasePlacement` 放进 `internal/dom/floating.ts`，`VirtualAnchorElement` 留在 `internal/dom/dom.ts`
  - [ ] 旧 `packages/utils/types/components.ts` 里各组件的 base props，拆进各组件自己的 `*.type.ts`
- [ ] 搬测试：`tests/utils/helpers/*` → `tests/internal/dom/*`，`tests/react/hooks/use-isomorphic-layout-effect.test.ts` → `tests/internal/react/`
- [ ] ESLint 加依赖方向规则：`internal/dom`、`internal/style` 不得 import `react` / `react-dom`（给以后加 Vue 留余地；旧版的包边界规则已随重写删除）

## 2. 搬组件

每个组件都要做：

- 组件代码放 `packages/react/<Name>/`，在 `packages/react/index.ts` 导出
- 类名按新规则写 `venomous--<Name>`，不再用旧的 `COMPONENTS` 常量
- 样式 `packages/styles/components/<Name>.scss`，改用新 token（`--venomous-color-*` 等）
- 测试从 `00c7e2b:tests/react/...` 搬过来改
- Story 放 `.storybook/stories/components/<Name>.stories.tsx`

| 组件    | 旧代码                                         | 依赖                                             | 状态 |
| ------- | ---------------------------------------------- | ------------------------------------------------ | ---- |
| Portal  | `components/Portal/`                           | 无                                               | [ ]  |
| Dialog  | `components/Dialog/`                           | scroll-lock                                      | [ ]  |
| Tabs    | `components/Tabs/` + `hooks/use-tabs.ts`       | 无                                               | [ ]  |
| Popover | `components/Popover/` + `hooks/use-popover.ts` | overlay-stack、floating、css-anchor、dom、Portal | [ ]  |
| Tooltip | `components/Tooltip/` + `hooks/use-tooltip.ts` | floating、css-anchor、dom、Portal                | [ ]  |

- [x] 搬交互组件前先解决 `'use client'` 被打包器去掉的问题 → 开 `preserveModules`
- [ ] `use-tabs` / `use-popover` / `use-tooltip` 放 `internal/react/`，不对外导出
- [ ] Dialog 补 header / title / body / footer 的结构和样式（旧版类名里有，组件里没有）

## 3. 新增组件

参考 GitHub 旧版的 API 和功能范围，实现按本仓库的标准来（受控/非受控、a11y、SSR）。

| 优先级 | 组件               | 依赖 / 备注                         | 状态 |
| ------ | ------------------ | ----------------------------------- | ---- |
| 高     | Input              |                                     | [ ]  |
| 高     | Textarea           |                                     | [ ]  |
| 高     | Checkbox           |                                     | [ ]  |
| 高     | Switch             |                                     | [ ]  |
| 高     | Radio / RadioGroup | 方向键切换                          | [ ]  |
| 高     | FormField          | label / 描述 / 错误信息的 aria 关联 | [ ]  |
| 高     | Select             | Popover 底座 + listbox 键盘操作     | [ ]  |
| 高     | Toast              | 全局 store + `aria-live`            | [ ]  |
| 中     | CheckboxGroup      |                                     | [ ]  |
| 中     | Drawer             | 复用 Dialog                         | [ ]  |
| 低     | Card               | 纯样式                              | [ ]  |
| 低     | Badge              | 纯样式                              | [ ]  |
| 低     | Avatar             | 图片失败回退为首字母                | [ ]  |
| 低     | Skeleton           | 纯样式                              | [ ]  |
| 低     | Breadcrumb         | 折叠省略                            | [ ]  |

## 4. 替换 GitHub

- [ ] `npm run check` 和 `npm test` 全过
- [ ] `npm run build` 后在空项目里装一次，确认样式、类型、SSR（Next.js App Router）正常
- [ ] Storybook 文档更新，确认 GitHub Pages 部署流程能用
- [ ] 加 remote，用本地历史覆盖 GitHub `main`（需要 force push，执行前单独确认）
- [ ] 确认 `.github/workflows/release.yml` 能产出新的 `release` 分支
