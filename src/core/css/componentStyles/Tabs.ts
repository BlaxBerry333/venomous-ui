import { TABS_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  root,
  list,
  tab,
  tabActive,
  tabDisabled,
  tabIcon,
  panel,
  panelHidden,
  variantUnderline,
  variantEnclosed,
  variantPills,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  horizontal,
  vertical,
  fullWidth,
  disabled,
} = TABS_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Tabs
 */
function generateTabsBaseCSS(): string {
  return `
/* Root */
.${root.className} {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* List */
.${list.className} {
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Tab */
.${tab.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${DESIGN_TOKENS.spacings[2]};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  background: transparent;
  border: none;
  color: ${getCssVar((v) => v.text.secondary)};
  font-family: inherit;
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  transition:
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${tab.className}:hover:not(.${tabDisabled.className}) {
  color: ${getCssVar((v) => v.text.primary)};
}

.${tab.className}:focus-visible {
  outline: 2px solid ${getCssVar((v) => v.palette.main)};
  outline-offset: -2px;
}

.${tabActive.className} {
  color: ${getCssVar((v) => v.palette.main)};
}

.${tabDisabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* Tab icon */
.${tabIcon.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Panel */
.${panel.className} {
  padding: ${DESIGN_TOKENS.spacings[4]};
}

.${panelHidden.className} {
  display: none;
}

/* Disabled root */
.${disabled.className} .${tab.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}
  `.trim();
}

/**
 * Generate orientation CSS for Tabs
 */
function generateTabsOrientationCSS(): string {
  return `
/* Horizontal */
.${horizontal.className} {
  flex-direction: column;
}

.${horizontal.className} .${list.className} {
  flex-direction: row;
}

/* Vertical */
.${vertical.className} {
  flex-direction: row;
}

.${vertical.className} .${list.className} {
  flex-direction: column;
  flex-shrink: 0;
}

.${vertical.className} .${panel.className} {
  flex: 1;
}
  `.trim();
}

/**
 * Generate size CSS for Tabs
 */
function generateTabsSizeCSS(): string {
  return `
/* Small */
.${sizeSmall.className} .${tab.className} {
  height: 28px;
  padding: 0 ${DESIGN_TOKENS.spacings[3]};
  font-size: ${DESIGN_TOKENS.fontSizes.small};
}

.${sizeSmall.className} .${tabIcon.className} {
  font-size: 14px;
}

.${sizeSmall.className} .${list.className} {
  gap: ${DESIGN_TOKENS.spacings[1]};
}

/* Medium */
.${sizeMedium.className} .${tab.className} {
  height: 36px;
  padding: 0 ${DESIGN_TOKENS.spacings[4]};
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}

.${sizeMedium.className} .${tabIcon.className} {
  font-size: 16px;
}

.${sizeMedium.className} .${list.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

/* Large */
.${sizeLarge.className} .${tab.className} {
  height: 44px;
  padding: 0 ${DESIGN_TOKENS.spacings[6]};
  font-size: ${DESIGN_TOKENS.fontSizes.large};
}

.${sizeLarge.className} .${tabIcon.className} {
  font-size: 20px;
}

.${sizeLarge.className} .${list.className} {
  gap: ${DESIGN_TOKENS.spacings[3]};
}
  `.trim();
}

/**
 * Generate underline variant CSS for Tabs
 */
function generateTabsVariantUnderlineCSS(): string {
  return `
/* Underline variant - horizontal */
.${variantUnderline.className}.${horizontal.className} .${list.className} {
  border-bottom: 1px solid ${getCssVar((v) => v.border.secondary)};
}

.${variantUnderline.className}.${horizontal.className} .${tab.className} {
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.${variantUnderline.className}.${horizontal.className} .${tabActive.className} {
  border-bottom-color: ${getCssVar((v) => v.palette.main)};
}

/* Underline variant - vertical */
.${variantUnderline.className}.${vertical.className} .${list.className} {
  border-right: 1px solid ${getCssVar((v) => v.border.secondary)};
}

.${variantUnderline.className}.${vertical.className} .${tab.className} {
  border-right: 2px solid transparent;
  margin-right: -1px;
  justify-content: flex-start;
}

.${variantUnderline.className}.${vertical.className} .${tabActive.className} {
  border-right-color: ${getCssVar((v) => v.palette.main)};
}
  `.trim();
}

/**
 * Generate enclosed variant CSS for Tabs
 */
function generateTabsVariantEnclosedCSS(): string {
  return `
/* Enclosed variant - horizontal */
.${variantEnclosed.className}.${horizontal.className} .${list.className} {
  border-bottom: 1px solid ${getCssVar((v) => v.border.secondary)};
  gap: 0;
}

.${variantEnclosed.className}.${horizontal.className} .${tab.className} {
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: ${DESIGN_TOKENS.borderRadius.small} ${DESIGN_TOKENS.borderRadius.small} 0 0;
  margin-bottom: -1px;
  background-color: transparent;
}

.${variantEnclosed.className}.${horizontal.className} .${tab.className}:hover:not(.${tabDisabled.className}):not(.${tabActive.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}

.${variantEnclosed.className}.${horizontal.className} .${tabActive.className} {
  background-color: ${getCssVar((v) => v.bg.float)};
  border-color: ${getCssVar((v) => v.border.secondary)};
  border-bottom-color: ${getCssVar((v) => v.bg.float)};
}

.${variantEnclosed.className}.${horizontal.className} .${panel.className} {
  border: 1px solid ${getCssVar((v) => v.border.secondary)};
  border-top: none;
  border-radius: 0 0 ${DESIGN_TOKENS.borderRadius.medium} ${DESIGN_TOKENS.borderRadius.medium};
  background-color: ${getCssVar((v) => v.bg.float)};
}

/* Enclosed variant - vertical */
.${variantEnclosed.className}.${vertical.className} .${list.className} {
  border-right: 1px solid ${getCssVar((v) => v.border.secondary)};
  gap: 0;
}

.${variantEnclosed.className}.${vertical.className} .${tab.className} {
  border: 1px solid transparent;
  border-right: none;
  border-radius: ${DESIGN_TOKENS.borderRadius.small} 0 0 ${DESIGN_TOKENS.borderRadius.small};
  margin-right: -1px;
  justify-content: flex-start;
  background-color: transparent;
}

.${variantEnclosed.className}.${vertical.className} .${tab.className}:hover:not(.${tabDisabled.className}):not(.${tabActive.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}

.${variantEnclosed.className}.${vertical.className} .${tabActive.className} {
  background-color: ${getCssVar((v) => v.bg.float)};
  border-color: ${getCssVar((v) => v.border.secondary)};
  border-right-color: ${getCssVar((v) => v.bg.float)};
}

.${variantEnclosed.className}.${vertical.className} .${panel.className} {
  border: 1px solid ${getCssVar((v) => v.border.secondary)};
  border-left: none;
  border-radius: 0 ${DESIGN_TOKENS.borderRadius.medium} ${DESIGN_TOKENS.borderRadius.medium} 0;
  background-color: ${getCssVar((v) => v.bg.float)};
}
  `.trim();
}

/**
 * Generate pills variant CSS for Tabs
 */
function generateTabsVariantPillsCSS(): string {
  return `
/* Pills variant */
.${variantPills.className} .${list.className} {
  border: none;
  padding: ${DESIGN_TOKENS.spacings[1]};
  background-color: ${getCssVar((v) => v.bg.active)};
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
  gap: ${DESIGN_TOKENS.spacings[1]};
}

.${variantPills.className} .${tab.className} {
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}

.${variantPills.className} .${tab.className}:hover:not(.${tabDisabled.className}):not(.${tabActive.className}) {
  background-color: ${getCssVar((v) => v.bg.disabled)};
}

.${variantPills.className} .${tabActive.className} {
  background-color: ${getCssVar((v) => v.bg.float)};
  box-shadow: ${getCssVar((v) => v.shadow.small)};
  color: ${getCssVar((v) => v.palette.main)};
}

/* Pills vertical alignment */
.${variantPills.className}.${vertical.className} .${tab.className} {
  justify-content: flex-start;
}
  `.trim();
}

/**
 * Generate full width CSS for Tabs
 */
function generateTabsFullWidthCSS(): string {
  return `
/* Full width */
.${fullWidth.className} .${list.className} {
  width: 100%;
}

.${fullWidth.className}.${horizontal.className} .${tab.className} {
  flex: 1;
}

.${fullWidth.className}.${vertical.className} .${tab.className} {
  width: 100%;
}
  `.trim();
}

/**
 * Generate Tabs CSS
 *
 * Includes:
 * - Base styles
 * - Orientation styles (horizontal, vertical)
 * - Size styles (small, medium, large)
 * - Variant styles (underline, enclosed, pills)
 * - Full width styles
 *
 * @returns CSS string for Tabs component
 */
export function generateTabsCSS(): string {
  return [
    generateTabsBaseCSS(),
    generateTabsOrientationCSS(),
    generateTabsSizeCSS(),
    generateTabsVariantUnderlineCSS(),
    generateTabsVariantEnclosedCSS(),
    generateTabsVariantPillsCSS(),
    generateTabsFullWidthCSS(),
  ].join("\n\n");
}
