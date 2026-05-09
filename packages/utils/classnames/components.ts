/**
 * @file 1:1 镜像 packages/styles/components/*.scss 的组件 className。
 * SCSS 是真相源；改 SCSS 必须同步本文件。
 */

export const COMPONENTS = {
  // ============== Button ==============
  BUTTON: 'venomous--Button',

  // ============== Dialog ==============
  DIALOG: 'venomous--Dialog',
  DIALOG_HEADER: 'venomous--Dialog__header',
  DIALOG_TITLE: 'venomous--Dialog__title',
  DIALOG_BODY: 'venomous--Dialog__body',
  DIALOG_FOOTER: 'venomous--Dialog__footer',

  // ============== Tabs ==============
  TABS: 'venomous--Tabs',
  TABS_TITLE: 'venomous--Tabs__title',
  TABS_PANEL: 'venomous--Tabs__panel',

  // ============== Popover ==============
  POPOVER_TRIGGER: 'venomous--Popover__trigger',
  POPOVER_CONTENT: 'venomous--Popover__content',
} as const;
