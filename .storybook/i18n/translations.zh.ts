export const zh = {
  introduction: {
    title: '简介',
    description: {
      a: '给 React 和 Vue 用的 headless UI 库，共用一套核心。',
      b: '行为这块都帮你写好了，样式爱用不用 —— 直接用组件、组件配内置样式、或者只拿样式，三选一。',
    },
    motivation: {
      title: '为什么写这个',
      body: '一路做前端下来，组件库这个题目一直在我心里搁着 —— 交互细节、可访问性、主题化，以及"带样式 / 不带样式"之间那条边界，怎么拆都觉得有意思。venomous-ui 就是我用来反复打磨这些问题的长线沙盒：把这些年积累的经验沉淀下来，也借此逼着自己再往前走一点。要是真有人愿意用，我会非常感谢你的支持；更感谢的是任何尖锐的指摘 —— 有问题尽管提，越狠越好。',
    },
    installation: {
      title: '安装',
      body: '通过 npm 安装，按框架从对应入口导入。',
    },
    'usage-modes': {
      title: '使用模式',
      body: 'venomous-ui 支持三种使用模式 —— 按项目需求选用。',
      'mode-a': {
        title: '模式 A —— 仅 headless 组件',
        body: 'headless 组件不带内置样式，仅提供行为，由用户自定义样式。',
      },
      'mode-b': {
        title: '模式 B —— 组件 + 内置样式',
        body: '组件配合内置 CSS 一起使用。',
      },
      'mode-c': {
        title: '模式 C —— 仅样式',
        body: '不使用组件，自己写 markup 配内置 class 名即可。',
      },
    },
  },
  overview: {
    title: '概览',
  },
  styles: {
    title: '内置样式',
  },
  'design-tokens': {
    title: 'Design Tokens',
    table: {
      name: 'CSS 变量名',
      value: '值',
      preview: '预览',
    },
    colors: {
      title: '颜色',
    },
    font: {
      title: '字体',
    },
    motion: {
      title: '动效',
    },
    radius: {
      title: '圆角',
    },
    shadow: {
      title: '阴影',
    },
    'z-index': {
      title: '层级',
    },
  },
  classnames: {
    title: '内置类名',
    table: {
      name: '类名',
      value: '值',
      preview: '预览',
    },
    semantic: {
      title: '语义',
    },
    theme: {
      title: '主题',
    },
    typography: {
      title: '字体排印',
      ellipsis: '省略',
    },
  },
  react: {
    title: 'React',
    components: {
      title: '组件',
    },
  },
  vue: {
    title: 'Vue',
    components: {
      title: '组件',
    },
  },
} as const;
