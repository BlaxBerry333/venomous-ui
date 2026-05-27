export const componentsZh = {
  react: {
    title: 'React',
    components: {
      title: '组件',
      button: {
        title: 'Button',
      },
      dialog: {
        title: 'Dialog',
      },
      popover: {
        title: 'Popover',
      },
      portal: {
        title: 'Portal',
      },
      tabs: {
        title: 'Tabs',
      },
      tooltip: {
        title: 'Tooltip',
      },
    },
  },
  vue: {
    title: 'Vue',
    components: {
      title: '组件',
      button: {
        title: 'Button',
      },
      dialog: {
        title: 'Dialog',
      },
      popover: {
        title: 'Popover',
      },
      portal: {
        title: 'Portal',
      },
      tabs: {
        title: 'Tabs',
      },
      tooltip: {
        title: 'Tooltip',
      },
    },
  },
  components: {
    button: {
      description: '可点击的触发器，用于提交表单或触发操作。',
      props: {
        loading: '异步进行中显示 spinner 并禁用交互。',
        disabled: '禁用按钮 —— 无法点击、聚焦、提交。',
        type: '原生 button 的 type 属性。表单内用 "submit"，其它场景用 "button"。',
      },
    },
    tabs: {
      description:
        '在多个面板间切换的 headless tabs —— 键盘导航与 ARIA 语义开箱即用，DOM 与样式由你掌控。',
      'vertical-usage-description': [
        '垂直布局就是 CSS —— 没有 orientation prop。用 [role="tablist"] 选中内置 list 容器，自己写 flex-direction: column。',
      ],
      'keep-mounted-description': [
        '给需要跨 tab 切换保住状态（表单输入 / 滚动 / 第三方 widget）的 <TabPanel> 单条加 keepMounted。默认 false。',
        '注意：开启后即使隐藏 panel 也持续渲染——复杂面板（图表 / 编辑器）会有性能开销。',
      ],
      props: {
        defaultValue: '非受控初始选中值 —— 仅挂载时读取一次，之后变化无效。',
        value: '受控选中值。需配合 onValueChange 让消费方驱动 Tabs。',
        onValueChange: '某个 tab 被选中时触发（点击 / 键盘激活 / setValue 命令式调用）。',
        activationMode:
          '"automatic"：移焦即切换（focus = 切 tab）。"manual"：需要 Enter / Space 才提交切换。',
        loop: '导航越过首/末 tab 时是否回环到另一端。',
        keepMounted:
          '让本 panel 跨 tab 切换始终在 DOM（只切 hidden 属性）。开启后即使隐藏也持续渲染。',
      },
    },
    popover: {
      description: '锚定在触发器上的 headless 浮层。',
      'composition-note': '使用时需要组合：Popover、PopoverTrigger、PopoverContent 这三个组件。',
      'trigger-note': '用于触发显示 PopoverContent 的容器。',
      'positioning-note': [
        '本组件不得已带了少量 inline style：定位走 CSS Anchor Positioning（Chrome 125+ / Safari 26+），靠 position-anchor / position-area 让浏览器在 layout 阶段原生让浮层跟随触发器，与触发器同帧 paint，零飘。',
        '主流 Popover 库（Floating UI、Radix、Headless UI、Material UI、Ant Design）目前仍以 JS 计算位置为主，靠 scroll 事件 + getBoundingClientRect 重算。但 scroll 事件是浏览器 paint 后才异步派发的，浮层永远比触发器慢一帧——这就是「频繁滚动时浮层在飘」的根因。所以本库直接用浏览器原生的 anchor 定位，不支持的浏览器（Firefox）才回退到 JS rAF。',
      ],
      'placement-usage-description': [
        'placement 选首选放置侧；引擎在视口空间不够时翻到对侧，并沿副轴贴边保留在视口内。最终位置写到 content 和 arrow 的 data-placement 上，便于 CSS 钩子。',
      ],
      props: {
        defaultOpen: '非受控初始打开状态 —— 仅在挂载时读取一次，之后变化无效。',
        open: '受控打开状态。需配合 onOpenChange 让消费方驱动 Popover。',
        onOpenChange: 'Popover 想要打开或关闭时触发。第二个参数是 reason，便于消费方区分关闭来源。',
        placement:
          '首选放置位置。十二种可选：top / bottom / left / right + 可选 -start / -end 对齐。',
        offset: '主轴上 content 与 trigger 的距离（px）。',
        collisionPadding: '翻面 / 贴边时与视口边缘保留的最小留白（px）。',
        flip: '首选侧空间不够时翻到对侧。',
        shift: '沿副轴贴边以保持在视口内。',
        closeOnOutsideClick:
          '在 trigger 和 content 之外按下 pointerdown 时关闭（用 composedPath 判定，被 portal 抽走的子树也算 inside）。',
        closeOnEsc: '按 Esc 关闭。多层嵌套时仅最顶层响应。',
        closeOnScroll: '当 trigger 滚出视口时关闭。派生 Tooltip 等可按需开启。',
        returnFocusOnClose: '打开时快照当前 focus 元素，关闭后归还。',
        anchorEl:
          '覆盖默认的 trigger 锚定。接受 HTMLElement 或虚拟元素（仅需 getBoundingClientRect）—— 给 ContextMenu / 鼠标坐标 / 选区锚定留口。',
        ariaRole: '写到 content 上的 role。决定 trigger 上的 aria-haspopup。',
        ariaLabel: 'role="dialog" 且无可见标题时的无障碍名。与 ariaLabelledBy 二选一。',
        ariaLabelledBy: '指向作为标题的元素 ID（通常是标题节点）。与 ariaLabel 二选一。',
        keepMounted: '关闭时保留 DOM（仅切 hidden 属性），不卸载。',
        container: 'portal 挂载容器。传 HTMLElement 覆盖，传 null 则原地渲染（不开 portal）。',
        matchTriggerWidth:
          '开启后 content 的 min-width 与 trigger 同宽（select / combobox 风格）；内容更宽时仍可撑大，不会被截断。',
      },
    },
    tooltip: {
      description: '锚定在触发器上的轻量提示 —— hover / click 触发。',
      'composition-note': '使用时需要组合：Tooltip、TooltipTrigger、TooltipContent 这三个组件。',
      'trigger-note': '用于触发显示 TooltipContent 的容器。',
      'positioning-note': [
        '与 Popover 共享相同的 anchor positioning 引擎：CSS Anchor Positioning（Chrome 125+ / Safari 26+）原生让浮层与触发器同帧 paint，零飘；不支持的浏览器（Firefox）回退到 JS rAF。',
      ],
      props: {
        defaultOpen: '非受控初始打开状态 —— 仅在挂载时读取一次，之后变化无效。',
        open: '受控打开状态。需配合 onOpenChange 让消费方驱动 Tooltip。',
        onOpenChange:
          'Tooltip 想要打开或关闭时触发。第二个参数是 reason（hover / unhover / click / esc-key / imperative）。',
        placement:
          '首选放置位置。十二种可选：top / bottom / left / right + 可选 -start / -end 对齐。',
        offset: '主轴上 content 与 trigger 的距离（px）。',
        collisionPadding: '翻面 / 贴边时与视口边缘保留的最小留白（px）。',
        flip: '首选侧空间不够时翻到对侧。',
        shift: '沿副轴贴边以保持在视口内。',
        openDelay: 'hover 持续超过该时长（ms）才打开。click 模式不走此延迟。',
        closeDelay: 'hover 离开后等待该时长（ms）再关闭。期间反向事件会清除句柄，避免误关。',
        closeOnEsc: '按 Esc 关闭。Tooltip 不进 overlay-stack —— 与 Dialog / Popover 互不影响。',
        trigger:
          '触发方式，默认 "hover"。"hover" = 鼠标悬停 / 键盘聚焦显示（a11y 内置），离开自动关；"click" = 点击切换，必须点外部 / Esc 才关。',
        disabled: '禁用：所有触发路径都不打开；切到 true 时立即关闭并清除待执行定时器。',
        keepMounted: '关闭时保留 DOM（仅切 hidden 属性），不卸载。',
        container: 'portal 挂载容器。传 HTMLElement 覆盖，传 null 则原地渲染（不开 portal）。',
      },
    },
    portal: {
      description:
        '把 children 渲染到 DOM 的别处（默认 <body> 末尾），但跟 React / Vue 组件树的连接不断 —— context、事件、ref 照常工作。Portal 自身没有 DOM 节点、没有样式。',
      'why-note': [
        '浮层不走 portal 时常见两类故障：被滚动 / overflow-hidden 的祖先视觉裁剪、以及被祖先的 stacking context（transform / filter / will-change）锁在底下盖不住兄弟节点。这两种情况提高 z-index 都无解 —— 是结构性约束。',
      ],
      props: {
        container:
          '渲染目标。传 HTMLElement 直接渲染到该元素。传函数 (() => HTMLElement | null) 时仅 client 阶段调用 —— 适合目标延迟挂载、或目标在 Shadow DOM / iframe 内的场景。传字符串作为 CSS selector，走 document.querySelector 解析；解析不到时 fallback 到 document.body。传 null 完全关闭 portal，children 原地保留。默认 document.body。',
      },
    },
    dialog: {
      description:
        '基于浏览器原生 <dialog> 元素的模态弹窗 —— 焦点陷阱、背景 inert、Esc 关闭都开箱即用。',
      'size-usage-description': [
        '想自定义尺寸？直接传 inline style 覆盖默认值，或用自定义 className 配一条 CSS —— 两种都直接落到 <Dialog> 上即可。',
        '注意：fullscreen 没有 backdrop，必须自备关闭按钮或靠 Esc。',
      ],
      props: {
        defaultOpen: '非受控初始打开状态 —— 仅在挂载时读取一次，之后变化无效。',
        open: '受控打开状态。需要配合 onOpenChange / @open-change 让消费方驱动 Dialog。',
        onOpenChange:
          'Dialog 想要打开或关闭时触发（Esc、点击 backdrop、ref 调用）。受控模式下必须传。',
        closeOnBackdropClick: '点击面板外的 backdrop 时关闭 Dialog。',
        closeOnEsc: '按 Esc 键时关闭 Dialog。',
        lockScroll: 'Dialog 打开期间锁定 body 滚动。',
        ariaLabel: '没有可见标题时给 Dialog 的无障碍名。与 ariaLabelledBy 二选一。',
        ariaLabelledBy: '指向作为标题的元素 ID（通常是标题节点）。与 ariaLabel 二选一。',
      },
    },
  },
} as const;
