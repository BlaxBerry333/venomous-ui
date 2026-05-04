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
