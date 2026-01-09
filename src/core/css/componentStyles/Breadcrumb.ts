import { BREADCRUMB_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { root, list, item, link, itemActive, itemDisabled, icon, separator, collapsed } = BREADCRUMB_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Breadcrumb
 */
function generateBreadcrumbBaseCSS(): string {
  return `
/* Breadcrumb root (nav) */
.${root.className} {
  display: flex;
  align-items: center;
}

/* Breadcrumb list (ol) */
.${list.className} {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${DESIGN_TOKENS.spacings[2]};
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Breadcrumb item (li) */
.${item.className} {
  display: inline-flex;
  align-items: center;
  gap: ${DESIGN_TOKENS.spacings[2]};
}

/* Breadcrumb link */
.${link.className} {
  display: inline-flex;
  align-items: center;
  gap: ${DESIGN_TOKENS.spacings[1]};
  color: ${getCssVar((v) => v.palette.main)};
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  transition: ${DESIGN_TOKENS.transitions.colors};
}

.${link.className}:hover:not(.${itemDisabled.className} .${link.className}):not(.${itemActive.className} .${link.className}) {
  text-decoration: underline;
}

.${link.className}:focus-visible {
  outline: 2px solid ${getCssVar((v) => v.palette.main)};
  outline-offset: 2px;
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}
  `.trim();
}

/**
 * Generate state CSS for Breadcrumb
 */
function generateBreadcrumbStateCSS(): string {
  return `
/* Active item (current page) */
.${itemActive.className} .${link.className} {
  color: ${getCssVar((v) => v.text.primary)};
  cursor: default;
  pointer-events: none;
}

/* Disabled item */
.${itemDisabled.className} .${link.className} {
  color: ${getCssVar((v) => v.text.secondary)};
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}
  `.trim();
}

/**
 * Generate icon CSS for Breadcrumb
 */
function generateBreadcrumbIconCSS(): string {
  return `
/* Icon */
.${icon.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
  `.trim();
}

/**
 * Generate separator CSS for Breadcrumb
 */
function generateBreadcrumbSeparatorCSS(): string {
  return `
/* Separator */
.${separator.className} {
  display: inline-flex;
  align-items: center;
  color: ${getCssVar((v) => v.text.secondary)};
  user-select: none;
  pointer-events: none;
}
  `.trim();
}

/**
 * Generate collapsed CSS for Breadcrumb
 */
function generateBreadcrumbCollapsedCSS(): string {
  return `
/* Collapsed ellipsis button */
.${collapsed.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${DESIGN_TOKENS.spacings[1]} ${DESIGN_TOKENS.spacings[2]};
  color: ${getCssVar((v) => v.text.secondary)};
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
  background: none;
  border: none;
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
  cursor: pointer;
  transition: ${DESIGN_TOKENS.transitions.colors};
}

.${collapsed.className}:hover {
  background-color: ${getCssVar((v) => v.bg.active)};
  color: ${getCssVar((v) => v.text.primary)};
}

.${collapsed.className}:focus-visible {
  outline: 2px solid ${getCssVar((v) => v.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}

/**
 * Generate Breadcrumb CSS
 *
 * Includes:
 * - Base styles
 * - State styles (active, disabled)
 * - Icon styles
 * - Separator styles
 * - Collapsed styles
 *
 * @returns CSS string for Breadcrumb component
 */
export function generateBreadcrumbCSS(): string {
  return [
    generateBreadcrumbBaseCSS(),
    generateBreadcrumbStateCSS(),
    generateBreadcrumbIconCSS(),
    generateBreadcrumbSeparatorCSS(),
    generateBreadcrumbCollapsedCSS(),
  ].join("\n\n");
}
