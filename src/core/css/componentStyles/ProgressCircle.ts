import { PROGRESS_CIRCLE_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  base,
  svg,
  track,
  fill,
  label,
  animated,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  colorPrimary,
  colorSuccess,
  colorError,
  colorWarning,
  colorInfo,
} = PROGRESS_CIRCLE_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Progress.Circle
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* ${svg.description} */
.${svg.className} {
  transform: rotate(-90deg);
}

/* ${track.description} */
.${track.className} {
  fill: none;
  stroke: ${getCssVar((v) => v.bg.active)};
}

/* ${fill.description} */
.${fill.className} {
  fill: none;
  stroke: ${getCssVar((v) => v.palette.main)};
  stroke-linecap: round;
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ${label.description} */
.${label.className} {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  color: ${getCssVar((v) => v.text.primary)};
}
  `.trim();
}

/**
 * Generate size CSS for Progress.Circle
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  width: 40px;
  height: 40px;
}

.${sizeSmall.className} .${track.className},
.${sizeSmall.className} .${fill.className} {
  stroke-width: 3;
}

.${sizeSmall.className} .${label.className} {
  font-size: 10px;
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  width: 64px;
  height: 64px;
}

.${sizeMedium.className} .${track.className},
.${sizeMedium.className} .${fill.className} {
  stroke-width: 4;
}

.${sizeMedium.className} .${label.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  width: 96px;
  height: 96px;
}

.${sizeLarge.className} .${track.className},
.${sizeLarge.className} .${fill.className} {
  stroke-width: 5;
}

.${sizeLarge.className} .${label.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}
  `.trim();
}

/**
 * Generate animated CSS for Progress.Circle
 */
function generateAnimatedCSS(): string {
  return `
/* ${animated.description} */
@keyframes progress-circle-rotate {
  100% {
    transform: rotate(270deg);
  }
}

@keyframes progress-circle-dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.${animated.className} .${svg.className} {
  animation: progress-circle-rotate 1.4s linear infinite;
}

.${animated.className} .${fill.className} {
  animation: progress-circle-dash 1.4s ease-in-out infinite;
  stroke-dasharray: 1, 150;
  stroke-dashoffset: 0;
  transition: none;
}
  `.trim();
}

/**
 * Generate color CSS for Progress.Circle
 */
function generateColorCSS(): string {
  return `
/* ${colorPrimary.description} */
.${colorPrimary.className} .${fill.className} {
  stroke: ${getCssVar((v) => v.palette.main)};
}

/* ${colorSuccess.description} */
.${colorSuccess.className} .${fill.className} {
  stroke: ${getCssVar((v) => v.semantic.success.main)};
}

/* ${colorError.description} */
.${colorError.className} .${fill.className} {
  stroke: ${getCssVar((v) => v.semantic.danger.main)};
}

/* ${colorWarning.description} */
.${colorWarning.className} .${fill.className} {
  stroke: ${getCssVar((v) => v.semantic.warning.main)};
}

/* ${colorInfo.description} */
.${colorInfo.className} .${fill.className} {
  stroke: ${getCssVar((v) => v.semantic.info.main)};
}
  `.trim();
}

/**
 * Generate Progress.Circle CSS
 *
 * @returns CSS string for Progress.Circle component
 */
export function generateProgressCircleCSS(): string {
  return [generateBaseCSS(), generateSizeCSS(), generateColorCSS(), generateAnimatedCSS()].join("\n\n");
}
