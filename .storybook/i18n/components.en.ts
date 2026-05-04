export const componentsEn = {
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
  components: {
    button: {
      description: 'Clickable trigger for submitting forms or invoking actions.',
      props: {
        loading: 'Show a spinner and block interaction while async work is in flight.',
        disabled: 'Disable the button — no clicks, no focus, no submit.',
        type: 'Native button type. Use "submit" inside a <form>, "button" otherwise.',
      },
    },
    dialog: {
      description:
        'Modal dialog built on the native <dialog> element — focus trap, inert background, and Esc-to-close come for free.',
      'size-usage-description': [
        'Need a custom size? Pass an inline style to override the defaults, or hand it your own className backed by a CSS rule — both land on <dialog> directly.',
        'Heads up: fullscreen has no backdrop — bring your own close button or rely on Esc.',
      ],
      props: {
        defaultOpen: 'Uncontrolled initial open state — read once on mount, ignored thereafter.',
        open: 'Controlled open state. Pair with onOpenChange / @open-change to drive the dialog from your own state.',
        onOpenChange:
          'Fires whenever the dialog wants to open or close (Esc, backdrop click, ref call). Required when using controlled mode.',
        closeOnBackdropClick:
          'Close the dialog when the user clicks the backdrop outside the panel.',
        closeOnEsc: 'Close the dialog when the user presses Esc.',
        lockScroll: 'Lock body scroll while the dialog is open.',
        ariaLabel:
          'Accessible name for the dialog when there is no visible heading. Use this or ariaLabelledBy.',
        ariaLabelledBy:
          'ID of the element that labels the dialog (typically the heading). Use this or ariaLabel.',
      },
    },
  },
} as const;
