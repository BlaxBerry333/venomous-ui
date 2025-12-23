import { TOAST_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  container,
  root,
  icon,
  content,
  title,
  description,
  action,
  closeButton,
  variantSuccess,
  variantError,
  variantWarning,
  variantInfo,
  variantLoading,
  placementTopRight,
  placementTopCenter,
  placementTopLeft,
  placementBottomRight,
  placementBottomCenter,
  placementBottomLeft,
  entering,
  exiting,
} = TOAST_CSS_CLASS_NAMES;

/**
 * Generate container CSS for Toast (viewport)
 */
function generateToastContainerCSS(): string {
  return `
/* ${container.description} */
.${container.className} {
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  padding: var(--toast-offset, 16px);
  gap: var(--toast-gap, 12px);
}

/* ${placementTopRight.description} */
.${placementTopRight.className} {
  top: 0;
  right: 0;
  align-items: flex-end;
}

/* ${placementTopCenter.description} */
.${placementTopCenter.className} {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

/* ${placementTopLeft.description} */
.${placementTopLeft.className} {
  top: 0;
  left: 0;
  align-items: flex-start;
}

/* ${placementBottomRight.description} */
.${placementBottomRight.className} {
  bottom: 0;
  right: 0;
  align-items: flex-end;
  flex-direction: column-reverse;
}

/* ${placementBottomCenter.description} */
.${placementBottomCenter.className} {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  flex-direction: column-reverse;
}

/* ${placementBottomLeft.description} */
.${placementBottomLeft.className} {
  bottom: 0;
  left: 0;
  align-items: flex-start;
  flex-direction: column-reverse;
}
  `.trim();
}

/**
 * Generate base CSS for single Toast
 */
function generateToastBaseCSS(): string {
  return `
/* ${root.description} */
.${root.className} {
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: ${DESIGN_TOKENS.spacings[3]};
  width: 360px;
  min-height: 56px;
  padding: 14px 16px 14px 20px;
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
  border: 1px solid ${getCssVar((v) => v.border.secondary)};
  background-color: ${getCssVar((v) => v.bg.float)};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
  pointer-events: auto;
  overflow: hidden;
}

/* Left accent bar */
.${root.className}::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${getCssVar((v) => v.border.primary)};
  border-radius: ${DESIGN_TOKENS.borderRadius.medium} 0 0 ${DESIGN_TOKENS.borderRadius.medium};
}

/* ${icon.description} */
.${icon.className} {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 22px;
  line-height: 1;
}

/* ${content.description} */
.${content.className} {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 1px;
}

/* ${title.description} */
.${title.className} {
  font-size: 14px;
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  line-height: 1.5;
  color: ${getCssVar((v) => v.text.primary)};
  word-break: break-word;
}

/* ${description.description} */
.${description.className} {
  font-size: 13px;
  font-weight: ${DESIGN_TOKENS.fontWeights.light};
  line-height: 1.5;
  color: ${getCssVar((v) => v.text.tertiary)};
  word-break: break-word;
}

/* ${action.description} */
.${action.className} {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

/* ${closeButton.description} */
.${closeButton.className} {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin: -6px -6px -6px 0;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
  color: ${getCssVar((v) => v.text.tertiary)};
  font-size: 18px;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${closeButton.className}:hover {
  background-color: ${getCssVar((v) => v.bg.active)};
  color: ${getCssVar((v) => v.text.primary)};
}

.${closeButton.className}:focus-visible {
  outline: 2px solid ${getCssVar((v) => v.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}

/**
 * Generate variant CSS for Toast
 *
 * Design approach for light/dark mode compatibility:
 * - Background uses bg.float (theme-aware) as base
 * - Left accent bar uses semantic main color for visual distinction
 * - Icon uses semantic main color
 * - Text uses text.primary/secondary (theme-aware) for good contrast in both modes
 * - Border uses semantic main color with low opacity for subtle hint
 */
function generateToastVariantCSS(): string {
  return `
/* ${variantSuccess.description} */
.${variantSuccess.className}::before {
  background-color: ${getCssVar((v) => v.semantic.success.main)};
}
.${variantSuccess.className} .${icon.className} {
  color: ${getCssVar((v) => v.semantic.success.main)};
}

/* ${variantError.description} */
.${variantError.className}::before {
  background-color: ${getCssVar((v) => v.semantic.danger.main)};
}
.${variantError.className} .${icon.className} {
  color: ${getCssVar((v) => v.semantic.danger.main)};
}

/* ${variantWarning.description} */
.${variantWarning.className}::before {
  background-color: ${getCssVar((v) => v.semantic.warning.main)};
}
.${variantWarning.className} .${icon.className} {
  color: ${getCssVar((v) => v.semantic.warning.main)};
}

/* ${variantInfo.description} */
.${variantInfo.className}::before {
  background-color: ${getCssVar((v) => v.semantic.info.main)};
}
.${variantInfo.className} .${icon.className} {
  color: ${getCssVar((v) => v.semantic.info.main)};
}

/* ${variantLoading.description} */
.${variantLoading.className}::before {
  background-color: ${getCssVar((v) => v.palette.main)};
}
.${variantLoading.className} .${icon.className} {
  color: ${getCssVar((v) => v.palette.main)};
}
  `.trim();
}

/**
 * Generate animation CSS for Toast
 */
function generateToastAnimationCSS(): string {
  return `
/* Animation keyframes */
@keyframes toast-slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toast-slide-out-right {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

@keyframes toast-slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toast-slide-out-left {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

@keyframes toast-slide-in-down {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toast-slide-out-up {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes toast-slide-in-up {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toast-slide-out-down {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
}

@keyframes toast-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Loading icon spin animation */
.${variantLoading.className} .${icon.className} svg,
.${variantLoading.className} .${icon.className} > span {
  animation: toast-spin 1s linear infinite;
}

/* Entering animations by placement */
.${placementTopRight.className} .${entering.className} {
  animation: toast-slide-in-right 200ms ease-out forwards;
}
.${placementTopLeft.className} .${entering.className} {
  animation: toast-slide-in-left 200ms ease-out forwards;
}
.${placementTopCenter.className} .${entering.className} {
  animation: toast-slide-in-down 200ms ease-out forwards;
}
.${placementBottomRight.className} .${entering.className} {
  animation: toast-slide-in-right 200ms ease-out forwards;
}
.${placementBottomLeft.className} .${entering.className} {
  animation: toast-slide-in-left 200ms ease-out forwards;
}
.${placementBottomCenter.className} .${entering.className} {
  animation: toast-slide-in-up 200ms ease-out forwards;
}

/* Exiting animations by placement */
.${placementTopRight.className} .${exiting.className} {
  animation: toast-slide-out-right 150ms ease-in forwards;
}
.${placementTopLeft.className} .${exiting.className} {
  animation: toast-slide-out-left 150ms ease-in forwards;
}
.${placementTopCenter.className} .${exiting.className} {
  animation: toast-slide-out-up 150ms ease-in forwards;
}
.${placementBottomRight.className} .${exiting.className} {
  animation: toast-slide-out-right 150ms ease-in forwards;
}
.${placementBottomLeft.className} .${exiting.className} {
  animation: toast-slide-out-left 150ms ease-in forwards;
}
.${placementBottomCenter.className} .${exiting.className} {
  animation: toast-slide-out-down 150ms ease-in forwards;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .${entering.className},
  .${exiting.className} {
    animation: none !important;
  }
  .${variantLoading.className} .${icon.className} svg,
  .${variantLoading.className} .${icon.className} > span {
    animation: none !important;
  }
}
  `.trim();
}

/**
 * Generate Toast CSS
 *
 * @returns CSS string for Toast component
 */
export function generateToastCSS(): string {
  return [
    generateToastContainerCSS(),
    generateToastBaseCSS(),
    generateToastVariantCSS(),
    generateToastAnimationCSS(),
  ].join("\n\n");
}
