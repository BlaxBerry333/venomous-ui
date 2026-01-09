import { PROGRESS_BAR_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  base,
  track,
  fill,
  animated,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  colorPrimary,
  colorSuccess,
  colorError,
  colorWarning,
  colorInfo,
} = PROGRESS_BAR_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Progress.Bar
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
}

/* ${track.description} */
.${track.className} {
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: ${getCssVar((v) => v.bg.active)};
  border-radius: 999px;
}

/* ${fill.description} */
.${fill.className} {
  height: 100%;
  border-radius: 999px;
  background-color: ${getCssVar((v) => v.palette.main)};
  transition: width ${DESIGN_TOKENS.transitions.progress};
}
  `.trim();
}

/**
 * Generate size CSS for Progress.Bar
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} .${track.className} {
  height: 4px;
}

/* ${sizeMedium.description} */
.${sizeMedium.className} .${track.className} {
  height: 8px;
}

/* ${sizeLarge.description} */
.${sizeLarge.className} .${track.className} {
  height: 12px;
}
  `.trim();
}

/**
 * Generate color CSS for Progress.Bar
 */
function generateColorCSS(): string {
  return `
/* ${colorPrimary.description} */
.${colorPrimary.className} .${fill.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
}

/* ${colorSuccess.description} */
.${colorSuccess.className} .${fill.className} {
  background-color: ${getCssVar((v) => v.semantic.success.main)};
}

/* ${colorError.description} */
.${colorError.className} .${fill.className} {
  background-color: ${getCssVar((v) => v.semantic.error.main)};
}

/* ${colorWarning.description} */
.${colorWarning.className} .${fill.className} {
  background-color: ${getCssVar((v) => v.semantic.warning.main)};
}

/* ${colorInfo.description} */
.${colorInfo.className} .${fill.className} {
  background-color: ${getCssVar((v) => v.semantic.info.main)};
}
  `.trim();
}

/**
 * Generate animated CSS for Progress.Bar
 */
function generateAnimatedCSS(): string {
  return `
/* ${animated.description} */
@keyframes progress-bar-indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.${animated.className} .${fill.className} {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 25%;
  transition: none;
  animation: progress-bar-indeterminate 1.5s ease-in-out infinite;
}
  `.trim();
}

/**
 * Generate Progress.Bar CSS
 *
 * @returns CSS string for Progress.Bar component
 */
export function generateProgressBarCSS(): string {
  return [generateBaseCSS(), generateSizeCSS(), generateColorCSS(), generateAnimatedCSS()].join("\n\n");
}
