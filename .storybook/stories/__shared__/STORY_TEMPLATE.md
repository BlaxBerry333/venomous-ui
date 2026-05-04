# Stories 写法骨架

新增组件 stories 前先读这份。React / Vue 通用骨架一致，差异只在「render 怎么挂载组件」。

## 必备骨架（不可省）

### 1. meta 五件套，按此顺序

```ts
const meta: Meta<Args> = {
  title: '<framework>/components/<Name>',  // <Name> 必须与组件文件名/导出名完全一致（PascalCase），侧边栏显示同名
  component: <Component>,                   // vue stories 可省（用 render 挂载）
  parameters: { layout: 'centered' },
  args: { ...headlessStyledDefaultArgs, /* 组件默认值 */ },
  argTypes: {
    __mode__: headlessStyledArgType,
    /* 每个 prop 至少声明 table.category: 'Props'；emit/event 用 'Events' */
  },
  decorators: [makeHeadlessStyledDecorator(<css>, '<Name>')],
};
```

- `Args` 一律用 `WithHeadlessStyledMode<...>` 包一层。
- `args` 必含 `...headlessStyledDefaultArgs`；`argTypes` 必含 `__mode__: headlessStyledArgType`。
- 回调 / emit 默认值给 `fn()`（来自 `storybook/test`），便于 actions 面板观测。
- **每一个组件 prop 都要在 `argTypes` 显式声明**（至少给 `table.category: 'Props'`）。漏声明会被 Storybook 自动推断后散落在 controls 顶部、无 category 归属。
  - **react `children`**（react 独有的 prop 概念）：必须在 argTypes 显式声明。
    - children 是文本（如 Button 的 label）：照常给默认值 + `category: 'Props'`，让用户能在 controls 里改。
    - children 是结构化 JSX（如 Dialog 的 header/body/footer 片段，由 `render` 硬编码）：加 `control: false` 禁用 controls 输入，仅保留在 docs 表格里。
  - **vue 没有 `children` prop**，slot 不是 prop，不要在 argTypes 里加。

### 2. story 底线

**单模组件**（Button、Badge 这类只有一种用法的）—— 3 个 story：

| Story                         | 作用                     | 必备项                                                                    |
| ----------------------------- | ------------------------ | ------------------------------------------------------------------------- |
| `<Name>_`（`name: '<Name>'`） | 默认交互 story，dev 可见 | 无 `tags`                                                                 |
| `Headless`                    | 展示无样式接入代码       | `tags: ['!dev']` + `args: { __mode__: false }` + `parameters.docs.source` |
| `Styled`                      | 展示带样式接入代码       | `tags: ['!dev']` + `args: { __mode__: true }` + `parameters.docs.source`  |

**受控 / 非受控双模组件**（Dialog、Popover、Tooltip 这类）—— 默认 story + 4 拆并列 story（共 5 个）。把 `Headless` / `Styled` 各拆为 `*Uncontrolled` / `*Controlled`：

| Story                  | `__mode__` | demo 模式                  | docs.source 写法  |
| ---------------------- | ---------- | -------------------------- | ----------------- |
| `HeadlessUncontrolled` | `false`    | ref 命令式                 | 不 import CSS     |
| `HeadlessControlled`   | `false`    | useState / ref + open prop | 不 import CSS     |
| `StyledUncontrolled`   | `true`     | ref 命令式                 | 多一行 import CSS |
| `StyledControlled`     | `true`     | useState / ref + open prop | 多一行 import CSS |

`docs.source.code` 是用户复制即用的最小示例，**不要写成 stories 里的演示代码**——演示代码可能含 ref / 受控 state、组件名带 `Demo` 后缀，示例代码要剥到最小、且严格匹配该 story 的模式（Headless 系列绝不出现 import CSS；Controlled 系列绝不出现 `DialogHandle` ref；触发器都用原生 `<button>`）。

**`docs.source.code` 字面量必须 inline 写在所属 StoryObj 内的 `parameters.docs.source.code`，不允许抽到文件顶部 const**——无论示例长短、无论同文件内有几段。理由：所有组件 stories 写法保持一致（参照 Button / Dialog），抽常量会破坏「一个 story 一处看完」的读法、还会在文件顶部产生与 meta 同级的视觉噪音。如果觉得字面量重复啰嗦，那是「示例本身就该这么啰嗦」——示例代码是给用户复制的，必须自完备。

### 3. 默认 story 命名

导出名 `<Name>_`（下划线避开与组件同名冲突），显示名通过 `name: '<Name>'` 还原。

### 4. `<Name>.docs.mdx` 章节顺序

按此顺序写，**Props 表放最末**：

1. `# <title>` + 描述段 + Source 链接
2. `## Basic Usage`（含全部 `### <子模式>` Canvas）
3. `## Props`（StoryDataTable）

理由：用户进 docs 第一眼要看到「能跑起来的样子」，再回头查 Props；Props 表往往很长，放前面会把示例顶到屏外。

## 允许的差异（不算不统一）

下列差异由组件本质决定，不要为了「对齐」而强行抹平：

- **默认 story 用 `render`**：组件需要触发器 / ref / 外部 state 才能演示时（如 Dialog、Popover、Tooltip），用 `render` 包裹；纯展示型（如 Button、Badge）用 `args.children` 即可。
- **额外 story（`WithIcon` 等典型变体）**：仍带 `tags: ['!dev']`。受控 / 非受控双模请按上面「story 底线」拆 4 并列 story，不要混在一个 `Controlled` 里。
- **`play` 函数**：仅当默认交互能用 `playClick` 一类通用断言覆盖时才加；命令式组件（Dialog 这类）不强求。
- **vue 用 `defineComponent` 包一层**：当组件需要 ref/setup 才能演示时，在 `render` 里定义本地 `defineComponent`，再走 `StoryVueWrapper`；纯展示型直接 `StoryVueWrapper` + slot 即可。
- **回调 / 事件的 category 归类**：
  - react：回调本质就是 prop（如 `onOpenChange`、`onClick`），`argTypes` 归 `'Props'`。
  - vue：DOM 原生事件用 `onClick`（仍归 `'Props'`）；自定义 emit 监听器键名按 vue 官方规则用 PascalCase（emit `'open-change'` → 监听键 `onOpenChange`），归 `'Events'`。模板字符串里展示给用户的写法仍是 `@open-change`（vue template 语法）。
  - 两套体系本质不同，不要互相对齐。

## 命令式 / 受控双模组件的 story 注意事项

针对 Dialog、Popover、Tooltip 这类「ref 命令式 + 受控/非受控双模」组件：

- **`render` 内若要引用其他内置组件（如 Dialog 触发用 `<Button>`）**，decorator 必须用多 bundle 形式同时注入这些组件的 CSS：`makeHeadlessStyledDecorator([{ css: dialogCss, componentName: 'Dialog' }, { css: buttonCss, componentName: 'Button' }])`。否则切到 styled 时只有主组件出样式、被引用的内置组件仍 headless，看起来像 styled 模式坏了。
- **「非受控初始值」类 prop（如 `defaultOpen`）必须给 render 加 React `key={String(args.xxx)}`**。React 的 `useState(defaultOpen)` 只在 mount 时读一次，controls 改完不 remount → 看似「点了没反应」。
  - vue 同理：`<StoryVueWrapper key={String(args.xxx)} ...>`，因 wrapper 默认 props 变化只回灌 reactive、不 remount。
- **「受控专属」prop（如 `open`）全局给 `control: false`** 隐藏控件。Uncontrolled 系列不允许在控件里改 `open`（会让组件偷偷切到受控分支但 ref 触发器仍按非受控调用 → state 不动）；Controlled 系列由 demo 内部 `useState` / `ref` 注入，也不该走 controls。
- argTypes 字段加 `description` 解释「为什么这个 prop 在当前 story 里特殊」，避免读者困惑。
- **`Headless` / `Styled` 必须有 render 兜底**，不能只靠 meta `component` 自动渲染。命令式组件（如 Dialog）默认关着、自动渲染只会得到一个空 DOM 节点 → docs 页 canvas 看似「连按钮都没有」。两种等价写法：
  - meta 里定义 `render`（vue Dialog 模式）—— Headless/Styled 自动继承，无需重复。
  - meta 不定义 render，每个 story 各自给 `render: (args) => <Demo args={args} />`（react Dialog 模式）—— 复用同一个 demo 函数。

## 反例

- ❌ 把 `__mode__` 漏掉、或 `argTypes` 不分 category —— Storybook controls 面板会一团乱。
- ❌ Headless / Styled 的 `docs.source` 直接复制 stories 渲染代码（带 ref / state）—— 用户复制后跑不通。
- ❌ 把受控/非受控合并到一个 `Controlled` story —— docs 页应该 4 个 canvas 平铺（Headless×Uncontrolled / Headless×Controlled / Styled×Uncontrolled / Styled×Controlled）让用户一眼对比。
- ❌ 在 `.claude/CLAUDE.md` 里写组件层约定 —— 那是 Claude 行为规范，不是开发规范。
- ❌ render 引内置组件却 decorator 只注入主组件 CSS —— 切 styled 时被引用的内置组件没样式，用户以为 styled 模式坏了（应该用多 bundle 注入）。
- ❌ 把 `docs.source.code` 字面量抽到文件顶部 const —— 必须 inline 在 StoryObj 内，与 Button 等参照实现保持一致。

## 参照实现

- 纯展示型：`react/components/Button/Button.stories.tsx`、`vue/components/Button/Button.stories.tsx`
- 命令式 + 受控双模：`react/components/Dialog/Dialog.stories.tsx`、`vue/components/Dialog/Dialog.stories.tsx`
