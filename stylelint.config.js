/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    // Allow project CSS variable naming convention (--VENOMOUSUI-*)
    "custom-property-pattern": null,
    // Allow BEM-style class names (.venomous-button--solid)
    "selector-class-pattern": null,
    // Use modern color function notation
    "color-function-notation": "modern",
    // Allow comment blocks without empty lines (used for section separators)
    "comment-empty-line-before": null,
    // Allow string notation for @import (modern CSS standard syntax)
    "import-notation": "string",
    // Allow mixed-case font names (system fonts)
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
        ignoreFunctions: ["local"],
        ignoreKeywords: ["BlinkMacSystemFont", "Roboto", "SFMono-Regular", "Menlo", "Consolas"],
      },
    ],
  },
};
