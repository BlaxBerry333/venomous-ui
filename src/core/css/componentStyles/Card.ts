import { CARD_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  base,
  disabled,
  loading,
  clickable,
  variantElevated,
  variantOutlined,
  variantFilled,
  radiusNone,
  radiusSmall,
  radiusMedium,
  radiusLarge,
  paddingNone,
  paddingSmall,
  paddingMedium,
  paddingLarge,
  content,
  loadingIcon,
} = CARD_CSS_CLASS_NAMES;

/**
 * Generate base/reset CSS for Card
 */
function generateCardBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
  position: relative;
  overflow: hidden;

  /* Smooth transitions */
  transition:
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
  `.trim();
}

/**
 * Generate state CSS for Card (disabled, loading, clickable)
 */
function generateCardStateCSS(): string {
  return `
/* ${disabled.description} */
.${disabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${loading.description} */
.${loading.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: wait;
  pointer-events: none;
}

/* ${content.description} */
.${content.className} {
  display: block;
}

.${loading.className} .${content.className} {
  visibility: hidden;
}

/* ${loadingIcon.description} */
.${loadingIcon.className} {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ${clickable.description} */
.${clickable.className} {
  cursor: pointer;
}
  `.trim();
}

/**
 * Generate variant CSS for Card (elevated, outlined, filled)
 */
function generateCardVariantCSS(): string {
  return `
/* ${variantElevated.description} */
.${variantElevated.className} {
  background-color: ${getCssVar((v) => v.bg.float)};
  border: 1px solid transparent;
  box-shadow: ${getCssVar((v) => v.shadow.medium)};
}
.${variantElevated.className}.${clickable.className}:hover:not(.${disabled.className}) {
  box-shadow: ${getCssVar((v) => v.shadow.large)};
}
.${variantElevated.className}.${clickable.className}:active:not(.${disabled.className}) {
  transform: scale(0.995);
  box-shadow: ${getCssVar((v) => v.shadow.medium)};
}

/* ${variantOutlined.description} */
.${variantOutlined.className} {
  background-color: ${getCssVar((v) => v.bg.body)};
  border: 1px solid ${getCssVar((v) => v.border.primary)};
}
.${variantOutlined.className}.${clickable.className}:hover:not(.${disabled.className}) {
  border-color: ${getCssVar((v) => v.palette.main)};
  box-shadow: 0 0 0 1px ${getCssVar((v) => v.palette.main)};
}
.${variantOutlined.className}.${clickable.className}:active:not(.${disabled.className}) {
  transform: scale(0.995);
  background-color: ${getCssVar((v) => v.bg.active)};
}

/* ${variantFilled.description} */
.${variantFilled.className} {
  background-color: ${getCssVar((v) => v.bg.normal)};
  border: 1px solid transparent;
}
.${variantFilled.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}
.${variantFilled.className}.${clickable.className}:active:not(.${disabled.className}) {
  transform: scale(0.995);
  background-color: ${getCssVar((v) => v.bg.disabled)};
}
  `.trim();
}

/**
 * Generate padding CSS for Card (none, small, medium, large)
 */
function generateCardPaddingCSS(): string {
  return `
/* ${paddingNone.description} */
.${paddingNone.className} {
  padding: 0;
}

/* ${paddingSmall.description} */
.${paddingSmall.className} {
  padding: ${DESIGN_TOKENS.spacings[2]};
}

/* ${paddingMedium.description} */
.${paddingMedium.className} {
  padding: ${DESIGN_TOKENS.spacings[4]};
}

/* ${paddingLarge.description} */
.${paddingLarge.className} {
  padding: ${DESIGN_TOKENS.spacings[6]};
}
  `.trim();
}

/**
 * Generate radius CSS for Card (none, small, medium, large)
 */
function generateCardRadiusCSS(): string {
  return `
/* ${radiusNone.description} */
.${radiusNone.className} {
  border-radius: ${DESIGN_TOKENS.borderRadius.none};
}

/* ${radiusSmall.description} */
.${radiusSmall.className} {
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}

/* ${radiusMedium.description} */
.${radiusMedium.className} {
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
}

/* ${radiusLarge.description} */
.${radiusLarge.className} {
  border-radius: ${DESIGN_TOKENS.borderRadius.large};
}
  `.trim();
}

/**
 * Generate Card CSS
 *
 * Includes:
 * - Base styles (reset, etc.)
 * - State styles (disabled, loading, clickable)
 * - Variant styles (elevated, outlined, filled)
 * - Padding styles (none, small, medium, large)
 * - Radius styles (none, small, medium, large)
 *
 * @returns CSS string for Card component
 */
export function generateCardCSS(): string {
  return [
    generateCardBaseCSS(),
    generateCardStateCSS(),
    generateCardVariantCSS(),
    generateCardPaddingCSS(),
    generateCardRadiusCSS(),
  ].join("\n\n");
}
