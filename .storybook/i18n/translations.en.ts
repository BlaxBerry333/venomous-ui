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
      'default-value': 'Default Value',
      preview: 'Preview',
    },
    colors: {
      title: 'Colors',
      base: 'Base Colors',
      theme: 'Theme Colors',
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
      dialog: {
        title: 'Dialog',
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
      dialog: {
        title: 'Dialog',
      },
    },
  },
  // 跨组件共享的章节标题与表格列名 —— 加新组件时无需重复定义
  sections: {
    props: 'Props',
    'basic-usage': 'Basic Usage',
    'sample-usage': 'Sample Usage',
    headless: 'Headless',
    styled: 'Styled',
    'headless-uncontrolled': 'Headless · Uncontrolled',
    'headless-controlled': 'Headless · Controlled',
    'styled-uncontrolled': 'Styled · Uncontrolled',
    'styled-controlled': 'Styled · Controlled',
    source: 'View source on GitHub',
  },
  table: {
    name: 'Name',
    type: 'Type',
    default: 'Default',
    description: 'Description',
  },
  // 主题变量说明（design-tokens/colors.mdx 引用）
  'theme-vars': {
    primary: 'Brand primary color (rest state)',
    'primary-hover': 'Primary on hover',
    'primary-active': 'Primary on press / active',
    'on-primary': 'Text / icon color on primary background',
    danger: 'Destructive / error state',
    success: 'Positive / success state',
    warning: 'Caution / warning state',
    neutral: 'Neutral / informational state',
    'text-strong': 'Headings / emphasized text',
    'text-default': 'Body text',
    'text-weak': 'Secondary text',
    'text-subtle': 'Hint / disabled text',
    'bg-strong': 'Inset / pressed surfaces',
    'bg-default': 'Page background',
    'bg-weak': 'Card / panel surfaces',
    'bg-subtle': 'Highest contrast surface (e.g. modal)',
    'border-strong': 'Emphasized borders / dividers',
    'border-default': 'Default borders',
    'border-weak': 'Subtle dividers',
    'border-subtle': 'Faintest separators',
  },
  components: {
    button: {
      description: 'Clickable trigger for submitting forms or invoking actions.',
    },
    dialog: {
      description:
        'Modal dialog built on the native <dialog> element — focus trap, inert background, and Esc-to-close come for free.',
      'size-usage-description': {
        a: 'Need a custom size? Pass an inline style to override the defaults, or hand it your own className backed by a CSS rule — both land on <dialog> directly.',
        b: 'Heads up: a fullscreen Dialog covers the whole viewport and leaves no backdrop to click — wire up your own close button or rely on Esc.',
      },
    },
  },
} as const;
