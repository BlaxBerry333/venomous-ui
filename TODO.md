# TODO

## 方向

- 有样式的 React 组件库，不做 headless，不对外暴露行为 hooks
- 只做 React；Vue 等 React 版稳定后再议（样式层本身与框架无关）
- 交互逻辑沿用 `00c7e2b` 里的实现，放进 `internal/` 作为内部实现
- 组件清单参考 GitHub 旧版（`github.com/BlaxBerry333/venomous-ui` 的 `main`）

## 已定的实现方式

| 事项                                           | 决定                                                                                                                                         | 理由                                                                                                                                                                        |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 组件样式怎么带给用户                           | 构建时把组件里的 `import '...scss'` 改写成 `import 'venomous-ui/styles/components/<Name>.css'`（包自引用），组件 CSS 同时通过 `exports` 暴露 | 不新增依赖；用户 bundler 按 import 自动带上样式，也能手动按需引入                                                                                                           |
| `'use client'`                                 | React 产物开 `preserveModules`，一个源文件一个产物                                                                                           | 模块级指令自然保留，不需要额外插件；顺带按组件 tree-shake                                                                                                                   |
| 推送 GitHub                                    | 只在本地提交，覆盖 GitHub 前单独确认                                                                                                         | force push 不可逆                                                                                                                                                           |
| Storybook 多语言文档、品牌外观                 | 暂不恢复，文档只做英文                                                                                                                       | 组件还没补齐，先把精力放在组件上；旧实现在 `00c7e2b` 里随时可取                                                                                                             |
| 浮层的 `anchorEl`（虚拟锚点）、`closeOnScroll` | 暂不移植                                                                                                                                     | 目前没有组件用到（ContextMenu 才需要虚拟锚点），等有需要的组件时再加                                                                                                        |
| Select                                         | 先做原生 `<select>` 加样式；自绘下拉暂缓                                                                                                     | 原生下拉的键盘、读屏、移动端体验都由系统保证；自绘需要完整的 combobox / listbox 键盘模型（输入跳转、滚动跟随、active-descendant），复杂且容易出无障碍问题，等有明确需求再做 |

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
- [x] 覆盖率阈值 100%，`use-theme.ts` / `ThemeScript.tsx` 还没有测试 → 已补，`npm test` 全量通过
- [x] 覆盖率目录移到 `tests/__coverage__` 后，prettier / stylelint / eslint 的忽略规则还指向旧的 `coverage` → 已更新，`npm run check` 全量通过

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

- [x] Next.js 下 `ThemeScript` 在 hydrate 前改了 `<html data-theme>`，会出 hydration 警告 → overview 示例和组件注释里写明给 `<html>` 加 `suppressHydrationWarning`
- [x] `attribute` 选项与 CSS 不配套 → 删掉，固定写 `data-theme`；`themes` 保留，注释写明自定义主题要自己提供 `:root[data-theme='<name>']` 的 CSS
- [x] 从 localStorage 读到的值没按 `themes` 校验 → useTheme 和 ThemeScript 共用 `internal/style/theme.ts` 的校验，脏值回落到 defaultTheme
- [x] localStorage 不可用时（如 Safari 禁用 cookie）`setTheme` 无效：同 tab 同步会回读 storage 拿到 null，把刚设的主题覆盖回默认值 → 同步时直接传值

### Button

- [x] loading 时用原生 `disabled`，进入 loading 的瞬间焦点会丢 → 改用 `aria-disabled` + 在 click 上 `preventDefault`（同时挡住键盘触发和表单提交）
- [x] `children` 为 `null` / `false` 时仍渲染空的 `__label` span → 判断改成有内容才渲染
- [x] `:focus-visible` 用 `outline: none`，Windows 强制颜色模式下看不到焦点 → 改成透明 outline
- [x] 补测试 `tests/react/Button/Button.test.tsx`（要等上面「测试跑不起来」修完才能跑）
- [x] Story 补 `startIcon` / `endIcon` 示例

### 其他

- [x] `package.json` 的 `description` 是空的，补上
- [x] `README.md` 还写着 headless + 三种用法，改成新定位（Storybook 链接也改成现有的 overview 页）
- [x] Storybook 工具栏有语言切换，但 `.storybook/i18n/dict.ts` 没被任何地方使用 → 去掉切换按钮和 `dict.ts`，文档先只做英文
- [x] `.vscode/settings.json` 还引用已删除的 `vite.config.utils.ts`
- [x] Storybook 的 GitHub Pages 部署流程在重写里丢了（README 还链接着）→ 补回 `.github/workflows/deploy-storybook.yml`
- [x] `.claude/CLAUDE.md` 要求写 story 前读已删除的 `STORY_TEMPLATE.md` → 改成以 `Button.stories.tsx` 为范本

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

- [x] 搬上表文件（`ComponentBasePlacement` 改名为 `internal/dom/floating.ts` 里的 `FloatingPlacement`；overlay-stack 的 pointer 派发简化为只交给栈顶）
- [x] 类型依赖：`floating.ts` 依赖 `ComponentBasePlacement`，`types/components.ts` 又依赖 `dom.ts` 的 `VirtualAnchorElement`，两者循环
  - [x] `ComponentBasePlacement` 放进 `internal/dom/floating.ts`，`VirtualAnchorElement` 留在 `internal/dom/dom.ts`
  - [ ] 旧 `packages/utils/types/components.ts` 里各组件的 base props，拆进各组件自己的 `*.type.ts`
- [x] 搬测试：`tests/utils/helpers/*` → `tests/internal/dom/*`，`tests/react/hooks/use-isomorphic-layout-effect.test.ts` → `tests/internal/react/`
- [x] ESLint 加依赖方向规则：`internal/dom`、`internal/style` 不得 import `react` / `react-dom`（给以后加 Vue 留余地；旧版的包边界规则已随重写删除）

## 2. 搬组件

每个组件都要做：

- 组件代码放 `packages/react/<Name>/`，在 `packages/react/index.ts` 导出
- 类名按新规则写 `venomous--<Name>`，不再用旧的 `COMPONENTS` 常量
- 样式 `packages/styles/components/<Name>.scss`，改用新 token（`--venomous-color-*` 等）
- 测试从 `00c7e2b:tests/react/...` 搬过来改
- Story 放 `.storybook/stories/components/<Name>.stories.tsx`

| 组件    | 旧代码                                         | 依赖                                             | 状态 |
| ------- | ---------------------------------------------- | ------------------------------------------------ | ---- |
| Portal  | `components/Portal/`                           | 无                                               | [x]  |
| Dialog  | `components/Dialog/`                           | scroll-lock                                      | [x]  |
| Tabs    | `components/Tabs/` + `hooks/use-tabs.ts`       | 无                                               | [x]  |
| Popover | `components/Popover/` + `hooks/use-popover.ts` | overlay-stack、floating、css-anchor、dom、Portal | [x]  |
| Tooltip | `components/Tooltip/` + `hooks/use-tooltip.ts` | floating、css-anchor、dom、Portal                | [x]  |

- [x] 搬交互组件前先解决 `'use client'` 被打包器去掉的问题 → 开 `preserveModules`
- [x] `use-tabs` 放 `internal/react/`；Popover / Tooltip 的状态直接写在组件里，定位抽成共用的 `internal/react/use-floating.ts`（旧版两个 hook 各写一遍）
- [x] Popover / Tooltip 的 trigger 用 `div role=button` / `span` 包住子元素：子元素是按钮时成了嵌套交互元素，Tooltip 的 `aria-describedby` 也落在外层 span 上读屏器读不到 → trigger 属性直接合并到子元素（`internal/react/slot.ts`），文本才包一层
- [x] 浮层内容 portal 到 body：在模态 Dialog 里打开时被设为 inert，看不见也点不了 → 内容渲染在 trigger 旁并用 Popover API 进入 top layer
- [x] Esc 关浮层时没阻止默认行为，外层 Dialog 跟着关 → 全局浮层栈处理 Esc 时 `preventDefault`；hover 型 Tooltip 不拦截点外部，交给下层
- [x] Tooltip 指针移到提示内容上就消失（不满足 WCAG 1.4.13）→ 内容区 hover 也算
- [x] Dialog 补 header / title / body / footer 的结构和样式；`DialogTitle` 自动成为对话框的无障碍名称
- [x] Tabs 不传 `defaultValue` 时没有任何 tab 可被 Tab 键聚焦 → 默认选中第一个未禁用的 TabTitle
- [x] 旧版 dev 警告用 `import.meta.env.DEV`，库构建时被替换成 false，用户永远看不到 → 改用 `process.env.NODE_ENV`（`internal/dev`）
- [x] 公开类型若引用 `internal/`，d.ts 发布后解析失败 → 公开类型只在 `packages/react` 定义；`npm run build` 末尾用 `scripts/check-dist-types.mjs` 校验

## 3. 新增组件

参考 GitHub 旧版的 API 和功能范围，实现按本仓库的标准来（受控/非受控、a11y、SSR）。

| 优先级 | 组件               | 依赖 / 备注                           | 状态 |
| ------ | ------------------ | ------------------------------------- | ---- |
| 高     | Input              |                                       | [x]  |
| 高     | Textarea           |                                       | [x]  |
| 高     | Checkbox           |                                       | [x]  |
| 高     | Switch             |                                       | [x]  |
| 高     | Radio / RadioGroup | 方向键切换                            | [x]  |
| 高     | FormField          | label / 描述 / 错误信息的 aria 关联   | [x]  |
| 高     | Select             | 原生 `<select>`（自绘下拉暂缓，见上） | [x]  |
| 高     | Toast              | 全局 store + `aria-live`              | [x]  |
| 中     | CheckboxGroup      |                                       | [x]  |
| 中     | Drawer             | 复用 Dialog                           | [x]  |
| 低     | Card               | 纯样式                                | [x]  |
| 低     | Badge              | 纯样式                                | [x]  |
| 低     | Avatar             | 图片失败回退为首字母                  | [x]  |
| 低     | Skeleton           | 纯样式                                | [x]  |
| 低     | Breadcrumb         | 折叠省略                              | [x]  |

## 4. 替换 GitHub

- [x] `npm run check` 和 `npm test` 全过
- [x] `npm run build` 后在空项目里装一次，确认样式、类型、SSR（Next.js App Router）正常：用 `npm pack` 装进 Next.js 16 空项目，构建、服务端预渲染、水合、交互均正常
  - [x] Button 内部挂了 onClick 却没标 `'use client'`，在服务端组件里用会构建失败 → 补上，并加测试：用了 hooks 或事件处理的组件文件必须带该指令
  - [x] Tabs 靠扫描 children 的组件类型配对，在服务端组件里传入的子元素类型是客户端引用，结果什么都不渲染 → 改为显式结构：`TabList` 包 `TabTitle`，`TabTitle` / `TabPanel` 用 `value` 配对
  - [x] 主题只定义 token，不设置页面底色和文字色，切到亮色后页面仍是浏览器默认底色 → `light.css` 在 `:root` 上设置底色、文字色、字体
- [ ] Storybook 文档更新，确认 GitHub Pages 部署流程能用
- [ ] 加 remote，用本地历史覆盖 GitHub `main`（需要 force push，执行前单独确认）
- [ ] 确认 `.github/workflows/release.yml` 能产出新的 `release` 分支
