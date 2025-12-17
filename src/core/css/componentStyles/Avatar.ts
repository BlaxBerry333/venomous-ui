import { AVATAR_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, sizeSmall, sizeMedium, sizeLarge, variantCircular, variantRounded, variantSquare, image, fallback } =
  AVATAR_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Avatar
 */
function generateAvatarBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;
  background-color: ${getCssVar((v) => v.bg.normal)};
  color: ${getCssVar((v) => v.text.secondary)};
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
}
  `.trim();
}

/**
 * Generate size CSS for Avatar (small, medium, large)
 */
function generateAvatarSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  width: 24px;
  height: 24px;
  font-size: ${DESIGN_TOKENS.fontSizes.small};
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  width: 40px;
  height: 40px;
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  width: 56px;
  height: 56px;
  font-size: ${DESIGN_TOKENS.fontSizes.large};
}
  `.trim();
}

/**
 * Generate variant CSS for Avatar (circular, rounded, square)
 */
function generateAvatarVariantCSS(): string {
  return `
/* ${variantCircular.description} */
.${variantCircular.className} {
  border-radius: 50%;
}

/* ${variantRounded.description} */
.${variantRounded.className} {
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
}

/* ${variantSquare.description} */
.${variantSquare.className} {
  border-radius: 0;
}
  `.trim();
}

/**
 * Generate content CSS for Avatar (image, fallback)
 */
function generateAvatarContentCSS(): string {
  return `
/* ${image.description} */
.${image.className} {
  width: 100%;
  height: 100%;
  object-fit: cover;
  text-align: center;
  color: transparent;
}

/* ${fallback.description} */
.${fallback.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
}
  `.trim();
}

/**
 * Generate Avatar CSS
 *
 * Includes:
 * - Base styles (reset, layout)
 * - Size styles (small, medium, large)
 * - Variant styles (circular, rounded, square)
 * - Content styles (image, fallback)
 *
 * @returns CSS string for Avatar component
 */
export function generateAvatarCSS(): string {
  return [
    generateAvatarBaseCSS(),
    generateAvatarSizeCSS(),
    generateAvatarVariantCSS(),
    generateAvatarContentCSS(),
  ].join("\n\n");
}
