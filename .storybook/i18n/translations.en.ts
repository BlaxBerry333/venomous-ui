export const en = {
  introduction: {
    title: 'Introduction',
    description: {
      a: 'Headless UI for React and Vue, sharing one core.',
      b: 'Behavior comes built in; styles are optional. Use the components, use them with the built-in CSS, or just take the CSS — your call.',
    },
    motivation: {
      title: 'Why this exists',
      body: 'Component libraries have lingered in the back of my mind throughout my frontend work — interaction details, accessibility, theming, the boundary between styled and headless. venomous-ui is the place I keep grinding on those questions: a long-running sandbox to consolidate what I have learned and to push myself further. If anyone happens to find it useful, I would be genuinely grateful — and even more so for any feedback or sharp criticism that helps it get better.',
    },
    installation: {
      title: 'Installation',
      body: 'Install via npm and import from per-framework entry points.',
    },
    'usage-modes': {
      title: 'Usage Modes',
      body: 'venomous-ui supports three usage modes — pick whichever fits your project.',
      'mode-a': {
        title: 'Mode A — components only',
        body: 'Bring your own styles. Headless components ship with behavior only.',
      },
      'mode-b': {
        title: 'Mode B — components + built-in styles',
        body: 'Use the components together with the built-in CSS.',
      },
      'mode-c': {
        title: 'Mode C — styles only',
        body: 'Write your own markup and apply the built-in class names.',
      },
    },
  },
  overview: {
    title: 'Overview',
  },
  docs: {
    title: 'Document',
  },
  styles: {
    title: 'Styles',
  },
  'design-tokens': {
    title: 'Design Tokens',
    table: {
      name: 'CSS Variable',
      value: 'Value',
      preview: 'Preview',
    },
    colors: {
      title: 'Colors',
    },
    font: {
      title: 'Font',
    },
    motion: {
      title: 'Motion',
    },
    radius: {
      title: 'Radius',
    },
    shadow: {
      title: 'Shadow',
    },
    'z-index': {
      title: 'Z-Index',
    },
  },
  classnames: {
    title: 'Classnames',
    table: {
      name: 'Class Name',
      value: 'Value',
      preview: 'Preview',
    },
    semantic: {
      title: 'Semantic',
    },
    theme: {
      title: 'Theme',
    },
    typography: {
      title: 'Typography',
      ellipsis: 'Ellipsis',
    },
  },
  react: {
    title: 'React',
    components: {
      title: 'Components',
      button: {
        title: 'Button',
      },
    },
  },
  vue: {
    title: 'Vue',
    components: {
      title: 'Components',
      button: {
        title: 'Button',
      },
    },
  },
  // 跨组件共享的章节标题与表格列名 —— 加新组件时无需重复定义
  sections: {
    props: 'Props',
    'basic-usage': 'Basic Usage',
    headless: 'Headless',
    styled: 'Styled',
  },
  table: {
    name: 'Name',
    type: 'Type',
    default: 'Default',
  },
  components: {
    button: {
      description: 'Clickable trigger for submitting forms or invoking actions.',
    },
  },
} as const;
