import { ARROW_CSS_CLASS_NAMES } from "../../constants";

const { base, directionTop, directionBottom, directionLeft, directionRight } = ARROW_CSS_CLASS_NAMES;

function generateArrowBaseCSS(): string {
  return `
.${base.className} {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
}
  `.trim();
}

function generateArrowDirectionTopCSS(): string {
  // Arrow points up - floating element is below trigger, so arrow is at top edge
  return `
.${directionTop.className} {
  border-bottom-color: var(--arrow-color, currentColor);
  border-top-width: 0;
  border-left-width: var(--arrow-size, 8px);
  border-right-width: var(--arrow-size, 8px);
  border-bottom-width: var(--arrow-size, 8px);
  top: calc(-1 * var(--arrow-size, 8px));
  left: 50%;
  transform: translateX(-50%);
}
  `.trim();
}

function generateArrowDirectionBottomCSS(): string {
  // Arrow points down - floating element is above trigger, so arrow is at bottom edge
  return `
.${directionBottom.className} {
  border-top-color: var(--arrow-color, currentColor);
  border-bottom-width: 0;
  border-left-width: var(--arrow-size, 8px);
  border-right-width: var(--arrow-size, 8px);
  border-top-width: var(--arrow-size, 8px);
  bottom: calc(-1 * var(--arrow-size, 8px));
  left: 50%;
  transform: translateX(-50%);
}
  `.trim();
}

function generateArrowDirectionLeftCSS(): string {
  // Arrow points left - floating element is to the right of trigger, so arrow is at left edge
  return `
.${directionLeft.className} {
  border-right-color: var(--arrow-color, currentColor);
  border-left-width: 0;
  border-top-width: var(--arrow-size, 8px);
  border-bottom-width: var(--arrow-size, 8px);
  border-right-width: var(--arrow-size, 8px);
  left: calc(-1 * var(--arrow-size, 8px));
  top: 50%;
  transform: translateY(-50%);
}
  `.trim();
}

function generateArrowDirectionRightCSS(): string {
  // Arrow points right - floating element is to the left of trigger, so arrow is at right edge
  return `
.${directionRight.className} {
  border-left-color: var(--arrow-color, currentColor);
  border-right-width: 0;
  border-top-width: var(--arrow-size, 8px);
  border-bottom-width: var(--arrow-size, 8px);
  border-left-width: var(--arrow-size, 8px);
  right: calc(-1 * var(--arrow-size, 8px));
  top: 50%;
  transform: translateY(-50%);
}
  `.trim();
}

export function generateArrowCSS(): string {
  return [
    generateArrowBaseCSS(),
    generateArrowDirectionTopCSS(),
    generateArrowDirectionBottomCSS(),
    generateArrowDirectionLeftCSS(),
    generateArrowDirectionRightCSS(),
  ].join("\n\n");
}
