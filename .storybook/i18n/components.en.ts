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
      popover: {
        title: 'Popover',
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
      title: 'Components',
      button: {
        title: 'Button',
      },
      dialog: {
        title: 'Dialog',
      },
      popover: {
        title: 'Popover',
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
      description: 'Clickable trigger for submitting forms or invoking actions.',
      props: {
        loading: 'Show a spinner and block interaction while async work is in flight.',
        disabled: 'Disable the button — no clicks, no focus, no submit.',
        type: 'Native button type. Use "submit" inside a <form>, "button" otherwise.',
      },
    },
    tabs: {
      description:
        'Headless tabs for switching between panels — keyboard navigation and ARIA semantics come for free, you own the markup and styling.',
      'vertical-usage-description': [
        'Vertical layout is just CSS — no orientation prop. Target the built-in tablist via [role="tablist"] and apply flex-direction: column yourself.',
      ],
      'keep-mounted-description': [
        'Set keepMounted on each <TabPanel> whose state must survive tab switches (form inputs, scroll, widgets). Default false.',
        'Heads up: kept-mounted panels keep rendering even when hidden — heavy ones (charts, editors) cost performance.',
      ],
      props: {
        defaultValue:
          'Uncontrolled initial selected value — read once on mount, ignored thereafter.',
        value:
          'Controlled selected value. Pair with onValueChange to drive the tabs from your own state.',
        onValueChange:
          'Fires whenever a tab becomes selected (click, keyboard activation, programmatic setValue).',
        activationMode:
          '"automatic" selects on focus (move focus = switch). "manual" requires Enter/Space to commit.',
        loop: 'Wrap focus to the other end when navigating past the first/last tab.',
        keepMounted:
          'Keep this panel mounted across tab switches (only the hidden attribute is toggled). Kept-mounted panels keep rendering even when hidden.',
      },
    },
    popover: {
      description: 'Headless floating layer anchored to a trigger.',
      'composition-note': 'Use Popover, PopoverTrigger and PopoverContent together.',
      'trigger-note': 'Container that triggers the PopoverContent.',
      'positioning-note': [
        'This component unavoidably ships a small amount of inline style: positioning uses CSS Anchor Positioning (Chrome 125+ / Safari 26+) via position-anchor / position-area, letting the browser keep the floater glued to the trigger during layout — both paint in the same frame, zero drift.',
        'Mainstream popover libraries (Floating UI, Radix, Headless UI, Material UI, Ant Design) still compute positions in JS, recomputing on scroll events via getBoundingClientRect. But scroll events fire after the browser paints — the floater always trails the trigger by one frame, which is exactly the drift you see when scrolling fast. This library instead uses the browser-native anchor mechanism; only browsers without it (Firefox) fall back to a JS rAF loop.',
      ],
      'placement-usage-description': [
        'placement picks the preferred side; the engine flips to the opposite side and shifts along the cross axis to stay in the viewport. The resolved value is reflected as data-placement on content + arrow for CSS hooks.',
      ],
      props: {
        defaultOpen: 'Uncontrolled initial open state — read once on mount, ignored thereafter.',
        open: 'Controlled open state. Pair with onOpenChange to drive the popover from your own state.',
        onOpenChange:
          'Fires whenever the popover wants to open or close. Receives a reason so consumers can distinguish close sources.',
        placement:
          'Preferred placement. Twelve options: top / bottom / left / right + optional -start / -end alignment.',
        offset: 'Distance from trigger along the main axis (px).',
        collisionPadding:
          'Minimum gap kept from the viewport edges when flipping or shifting (px).',
        flip: 'Flip to the opposite side when the preferred side does not fit.',
        shift: 'Shift along the cross axis to stay inside the viewport.',
        closeOnOutsideClick:
          'Close on pointerdown outside the trigger and content (composedPath aware so portal subtrees count as inside).',
        closeOnEsc: 'Close on Escape. With nested popovers only the topmost one closes.',
        closeOnScroll:
          'Close when the trigger scrolls out of viewport. Derived components like Tooltip can opt in.',
        returnFocusOnClose:
          'Snapshot the focused element when opening and restore focus when closing.',
        anchorEl:
          'Override the default trigger anchor. Accepts an HTMLElement or a virtual element ({ getBoundingClientRect }) — used by ContextMenu / mouse-coordinate anchoring.',
        ariaRole: 'role written on content. Determines aria-haspopup on the trigger.',
        ariaLabel:
          'Accessible name when role="dialog" and there is no visible heading. Use this or ariaLabelledBy.',
        ariaLabelledBy:
          'ID of the element that labels the popover (typically a heading). Use this or ariaLabel.',
        keepMounted:
          'Keep the DOM mounted when closed (toggling the hidden attribute) instead of unmounting.',
        container:
          'Portal mount target. Pass an HTMLElement to override, or null to render inline (no portal).',
        matchTriggerWidth:
          'When true, content min-width matches the trigger (select / combobox style); content can still grow wider if its own content demands it.',
      },
    },
    tooltip: {
      description: 'Lightweight hint anchored to a trigger — hover / click driven.',
      'composition-note': 'Use Tooltip, TooltipTrigger and TooltipContent together.',
      'trigger-note': 'Container that triggers the TooltipContent.',
      'positioning-note': [
        'Shares the same anchor-positioning engine as Popover: CSS Anchor Positioning (Chrome 125+ / Safari 26+) keeps the floater in sync with the trigger during layout — no drift. Browsers without it (Firefox) fall back to a JS rAF loop.',
      ],
      props: {
        defaultOpen: 'Uncontrolled initial open state — read once on mount, ignored thereafter.',
        open: 'Controlled open state. Pair with onOpenChange to drive the tooltip from your own state.',
        onOpenChange:
          'Fires whenever the tooltip wants to open or close. Receives a reason (hover / unhover / click / esc-key / imperative).',
        placement:
          'Preferred placement. Twelve options: top / bottom / left / right + optional -start / -end alignment.',
        offset: 'Distance from trigger along the main axis (px).',
        collisionPadding:
          'Minimum gap kept from the viewport edges when flipping or shifting (px).',
        flip: 'Flip to the opposite side when the preferred side does not fit.',
        shift: 'Shift along the cross axis to stay inside the viewport.',
        openDelay:
          'How long (ms) hover must persist before opening. Click trigger bypasses this delay.',
        closeDelay:
          'How long (ms) to wait after hover leaves before closing. Reverse events within the window clear the pending close.',
        closeOnEsc:
          'Close on Escape. Tooltip is not on the overlay-stack — closing here does not affect any open Dialog / Popover.',
        trigger:
          'Trigger source, default "hover". "hover" = pointer hover or keyboard focus (a11y baked in), auto-closes on leave; "click" = toggle by click, only closes on outside click or Esc.',
        disabled:
          'Disabled: no trigger path opens. Switching to true closes immediately and clears any pending timer.',
        keepMounted:
          'Keep the DOM mounted when closed (toggling the hidden attribute) instead of unmounting.',
        container:
          'Portal mount target. Pass an HTMLElement to override, or null to render inline (no portal).',
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
