import { LIST_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  root,
  divider,
  spacingNone,
  spacingSmall,
  spacingMedium,
  spacingLarge,
  item,
  itemInteractive,
  itemSelected,
  itemDisabled,
  itemStartElement,
  itemEndElement,
  itemContent,
  itemText,
  itemTextPrimary,
  itemTextSecondary,
  itemTextEllipsis,
  itemDepth1,
  itemDepth2,
  itemDepth3,
  itemDepth4,
  collapse,
  collapseOpen,
  collapseContent,
} = LIST_CSS_CLASS_NAMES;

/**
 * Generate base CSS for List
 */
function generateListBaseCSS(): string {
  return `
/* List root */
.${root.className} {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* List item */
.${item.className} {
  display: flex;
  align-items: center;
  padding: ${DESIGN_TOKENS.spacings[3]} ${DESIGN_TOKENS.spacings[4]};
  min-height: 48px;
  box-sizing: border-box;
}

/* Interactive item */
.${itemInteractive.className} {
  cursor: pointer;
  transition: ${DESIGN_TOKENS.transitions.colors};
}

.${itemInteractive.className}:hover:not(.${itemDisabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}

.${itemInteractive.className}:focus-visible {
  outline: 2px solid ${getCssVar((v) => v.palette.main)};
  outline-offset: -2px;
}

/* Selected item */
.${itemSelected.className} {
  background-color: color-mix(in srgb, ${getCssVar((v) => v.palette.main)} 8%, transparent);
}

.${itemSelected.className}:hover:not(.${itemDisabled.className}) {
  background-color: color-mix(in srgb, ${getCssVar((v) => v.palette.main)} 12%, transparent);
}

.${itemSelected.className} .${itemTextPrimary.className} {
  color: ${getCssVar((v) => v.palette.main)};
}

.${itemSelected.className} .${itemStartElement.className},
.${itemSelected.className} .${itemEndElement.className} {
  color: ${getCssVar((v) => v.palette.main)};
}

/* Disabled item */
.${itemDisabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* Start/End elements */
.${itemStartElement.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${DESIGN_TOKENS.spacings[4]};
  color: ${getCssVar((v) => v.text.secondary)};
}

.${itemEndElement.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: ${DESIGN_TOKENS.spacings[4]};
  color: ${getCssVar((v) => v.text.secondary)};
}

/* Item content */
.${itemContent.className} {
  flex: 1;
  min-width: 0;
}

/* Item text container */
.${itemText.className} {
  display: flex;
  flex-direction: column;
  gap: ${DESIGN_TOKENS.spacings[1]};
}

/* Primary text */
.${itemTextPrimary.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
  color: ${getCssVar((v) => v.text.primary)};
  line-height: 1.5;
}

/* Secondary text */
.${itemTextSecondary.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  color: ${getCssVar((v) => v.text.secondary)};
  line-height: 1.43;
}

/* Ellipsis */
.${itemTextEllipsis.className} .${itemTextPrimary.className},
.${itemTextEllipsis.className} .${itemTextSecondary.className} {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
  `.trim();
}

/**
 * Generate spacing CSS for List
 */
function generateListSpacingCSS(): string {
  return `
/* Spacing none */
.${spacingNone.className} .${item.className} + .${item.className} {
  margin-top: 0;
}

/* Spacing small */
.${spacingSmall.className} .${item.className} + .${item.className} {
  margin-top: ${DESIGN_TOKENS.spacings[1]};
}

/* Spacing medium */
.${spacingMedium.className} .${item.className} + .${item.className} {
  margin-top: ${DESIGN_TOKENS.spacings[2]};
}

/* Spacing large */
.${spacingLarge.className} .${item.className} + .${item.className} {
  margin-top: ${DESIGN_TOKENS.spacings[4]};
}
  `.trim();
}

/**
 * Generate divider CSS for List
 */
function generateListDividerCSS(): string {
  return `
/* Divider between items */
.${divider.className} .${item.className} + .${item.className} {
  border-top: 1px solid ${getCssVar((v) => v.border.secondary)};
}
  `.trim();
}

/**
 * Generate depth CSS for List.Item
 * Uses spacing scale: depth 1 = 8 (32px), depth 2 = 56px, depth 3 = 80px, depth 4 = 104px
 * Each depth adds 24px (spacing[6])
 */
function generateListDepthCSS(): string {
  return `
/* Depth level 1 - 32px (spacing[8]) */
.${itemDepth1.className} {
  padding-left: ${DESIGN_TOKENS.spacings[8]};
}

/* Depth level 2 - 56px */
.${itemDepth2.className} {
  padding-left: calc(${DESIGN_TOKENS.spacings[8]} + ${DESIGN_TOKENS.spacings[6]});
}

/* Depth level 3 - 80px */
.${itemDepth3.className} {
  padding-left: calc(${DESIGN_TOKENS.spacings[8]} + ${DESIGN_TOKENS.spacings[6]} * 2);
}

/* Depth level 4 - 104px */
.${itemDepth4.className} {
  padding-left: calc(${DESIGN_TOKENS.spacings[8]} + ${DESIGN_TOKENS.spacings[6]} * 3);
}
  `.trim();
}

/**
 * Generate collapse CSS for List.Collapse
 */
function generateListCollapseCSS(): string {
  return `
/* Collapse container - uses CSS Grid for smooth height animation */
.${collapse.className} {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows ${DESIGN_TOKENS.transitions.slow};
}

/* Collapse open state */
.${collapseOpen.className} {
  grid-template-rows: 1fr;
}

/* Collapse content wrapper - handles overflow */
.${collapseContent.className} {
  overflow: hidden;
}
  `.trim();
}

/**
 * Generate List CSS
 *
 * Includes:
 * - Base styles
 * - Spacing styles (none, small, medium, large)
 * - Divider styles
 * - Depth styles (for nested items)
 * - Collapse styles (for collapsible sections)
 *
 * @returns CSS string for List component
 */
export function generateListCSS(): string {
  return [
    generateListBaseCSS(),
    generateListSpacingCSS(),
    generateListDividerCSS(),
    generateListDepthCSS(),
    generateListCollapseCSS(),
  ].join("\n\n");
}
