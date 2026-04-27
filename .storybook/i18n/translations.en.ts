export const en = {
  introduction: {
    title: 'venomous-ui',
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
    usage_modes: {
      title: 'Usage Modes',
      body: 'venomous-ui supports three usage modes — pick whichever fits your project.',
      mode_a: {
        title: 'Mode A — components only',
        body: 'Bring your own styles. Headless components ship with behavior only.',
      },
      mode_b: {
        title: 'Mode B — components + built-in styles',
        body: 'Use the components together with the built-in CSS.',
      },
      mode_c: {
        title: 'Mode C — styles only',
        body: 'Write your own markup and apply the built-in class names.',
      },
    },
  },
  design_tokens: {
    title: 'Design Tokens',
    color: 'Color',
    typography: 'Typography',
    spacing: 'Spacing',
    radius: 'Radius',
    shadow: 'Shadow',
    motion: 'Motion',
    z_index: 'Z-Index',
  },
  sidebar: {
    introduction: 'Introduction',
    design_tokens: 'Design Tokens',
    presets: 'Presets',
    react: 'React',
    vue: 'Vue',
    welcome: 'Welcome',
    usage_modes: 'Usage Modes',
    color: 'Color',
    typography: 'Typography',
    components: 'Components',
  },
} as const;
