import { BADGE_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  root,
  badge,
  invisible,
  variantStandard,
  variantDot,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  colorDefault,
  colorPrimary,
  colorSuccess,
  colorError,
  colorWarning,
  colorInfo,
  anchorTopRight,
  anchorTopLeft,
  anchorBottomRight,
  anchorBottomLeft,
} = BADGE_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Badge
 */
function generateBadgeBaseCSS(): string {
  return `
/* ${root.description} */
.${root.className} {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
}

/* ${badge.description} */
.${badge.className} {
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  line-height: 1;
  z-index: 1;
  transition:
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
  `.trim();
}

/**
 * Generate state CSS for Badge
 */
function generateBadgeStateCSS(): string {
  return `
/* ${invisible.description} */
.${invisible.className} .${badge.className} {
  transform: scale(0);
  opacity: 0;
}
  `.trim();
}

/**
 * Generate variant CSS for Badge
 */
function generateBadgeVariantCSS(): string {
  return `
/* ${variantStandard.description} */
.${variantStandard.className} .${badge.className} {
  border-radius: 10px;
  padding: 0 6px;
  min-width: 20px;
}

/* ${variantDot.description} */
.${variantDot.className} .${badge.className} {
  border-radius: ${DESIGN_TOKENS.borderRadius.full};
  padding: 0;
}
  `.trim();
}

/**
 * Generate size CSS for Badge
 */
function generateBadgeSizeCSS(): string {
  return `
/* ${sizeSmall.description} - Standard */
.${sizeSmall.className}.${variantStandard.className} .${badge.className} {
  height: 16px;
  min-width: 16px;
  font-size: 10px;
  padding: 0 4px;
}

/* ${sizeSmall.description} - Dot */
.${sizeSmall.className}.${variantDot.className} .${badge.className} {
  height: 6px;
  width: 6px;
  min-width: 6px;
}

/* ${sizeMedium.description} - Standard */
.${sizeMedium.className}.${variantStandard.className} .${badge.className} {
  height: 20px;
  min-width: 20px;
  font-size: 12px;
  padding: 0 6px;
}

/* ${sizeMedium.description} - Dot */
.${sizeMedium.className}.${variantDot.className} .${badge.className} {
  height: 8px;
  width: 8px;
  min-width: 8px;
}

/* ${sizeLarge.description} - Standard */
.${sizeLarge.className}.${variantStandard.className} .${badge.className} {
  height: 24px;
  min-width: 24px;
  font-size: 14px;
  padding: 0 8px;
}

/* ${sizeLarge.description} - Dot */
.${sizeLarge.className}.${variantDot.className} .${badge.className} {
  height: 10px;
  width: 10px;
  min-width: 10px;
}
  `.trim();
}

/**
 * Generate color CSS for Badge
 */
function generateBadgeColorCSS(): string {
  return `
/* ${colorDefault.description} */
.${colorDefault.className} .${badge.className} {
  background-color: ${getCssVar((v) => v.bg.active)};
  color: ${getCssVar((v) => v.text.primary)};
}

/* ${colorPrimary.description} */
.${colorPrimary.className} .${badge.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
  color: #ffffff;
}

/* ${colorSuccess.description} */
.${colorSuccess.className} .${badge.className} {
  background-color: ${getCssVar((v) => v.semantic.success.main)};
  color: #ffffff;
}

/* ${colorError.description} */
.${colorError.className} .${badge.className} {
  background-color: ${getCssVar((v) => v.semantic.danger.main)};
  color: #ffffff;
}

/* ${colorWarning.description} */
.${colorWarning.className} .${badge.className} {
  background-color: ${getCssVar((v) => v.semantic.warning.main)};
  color: #ffffff;
}

/* ${colorInfo.description} */
.${colorInfo.className} .${badge.className} {
  background-color: ${getCssVar((v) => v.semantic.info.main)};
  color: #ffffff;
}
  `.trim();
}

/**
 * Generate positioning CSS for Badge
 */
function generateBadgePositioningCSS(): string {
  return `
/* ${anchorTopRight.description} */
.${anchorTopRight.className} .${badge.className} {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
}

/* ${anchorTopLeft.description} */
.${anchorTopLeft.className} .${badge.className} {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  transform-origin: 0% 0%;
}

/* ${anchorBottomRight.description} */
.${anchorBottomRight.className} .${badge.className} {
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  transform-origin: 100% 100%;
}

/* ${anchorBottomLeft.description} */
.${anchorBottomLeft.className} .${badge.className} {
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  transform-origin: 0% 100%;
}

/* Invisible state positioning overrides */
.${invisible.className}.${anchorTopRight.className} .${badge.className} {
  transform: translate(50%, -50%) scale(0);
}

.${invisible.className}.${anchorTopLeft.className} .${badge.className} {
  transform: translate(-50%, -50%) scale(0);
}

.${invisible.className}.${anchorBottomRight.className} .${badge.className} {
  transform: translate(50%, 50%) scale(0);
}

.${invisible.className}.${anchorBottomLeft.className} .${badge.className} {
  transform: translate(-50%, 50%) scale(0);
}
  `.trim();
}

/**
 * Generate Badge CSS
 *
 * @returns CSS string for Badge component
 */
export function generateBadgeCSS(): string {
  return [
    generateBadgeBaseCSS(),
    generateBadgeStateCSS(),
    generateBadgeVariantCSS(),
    generateBadgeSizeCSS(),
    generateBadgeColorCSS(),
    generateBadgePositioningCSS(),
  ].join("\n\n");
}
