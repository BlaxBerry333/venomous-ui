import type { ArrowDirection, Placement } from "../../types/components";

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface CalculatePositionOptions {
  triggerRect: Rect;
  floatingRect: Pick<Rect, "width" | "height">;
  placement: Placement;
  offset?: number;
}

export interface CalculatePositionResult {
  position: Position;
  actualPlacement: Placement;
}

/**
 * Get opposite placement for flipping
 */
function getOppositePlacement(placement: Placement): Placement {
  const opposites: Record<string, string> = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
  };

  const [side, alignment] = placement.split("-") as [string, string | undefined];
  const oppositeSide = opposites[side] || side;

  return (alignment ? `${oppositeSide}-${alignment}` : oppositeSide) as Placement;
}

/**
 * Calculate raw position without boundary checking
 */
function calculateRawPosition(
  triggerRect: Rect,
  floatingRect: Pick<Rect, "width" | "height">,
  placement: Placement,
  offset: number,
): Position {
  const { x: tx, y: ty, width: tw, height: th } = triggerRect;
  const { width: fw, height: fh } = floatingRect;

  // Center of trigger
  const centerX = tx + tw / 2;
  const centerY = ty + th / 2;

  // Base positions for each side
  const positions: Record<string, Position> = {
    // Top placements
    top: { x: centerX - fw / 2, y: ty - fh - offset },
    "top-start": { x: tx, y: ty - fh - offset },
    "top-end": { x: tx + tw - fw, y: ty - fh - offset },

    // Bottom placements
    bottom: { x: centerX - fw / 2, y: ty + th + offset },
    "bottom-start": { x: tx, y: ty + th + offset },
    "bottom-end": { x: tx + tw - fw, y: ty + th + offset },

    // Left placements
    left: { x: tx - fw - offset, y: centerY - fh / 2 },
    "left-start": { x: tx - fw - offset, y: ty },
    "left-end": { x: tx - fw - offset, y: ty + th - fh },

    // Right placements
    right: { x: tx + tw + offset, y: centerY - fh / 2 },
    "right-start": { x: tx + tw + offset, y: ty },
    "right-end": { x: tx + tw + offset, y: ty + th - fh },
  };

  return positions[placement];
}

/**
 * Check if position overflows viewport
 */
function checkOverflow(
  position: Position,
  floatingRect: Pick<Rect, "width" | "height">,
  placement: Placement,
  viewportPadding: number = 8,
): boolean {
  const { x, y } = position;
  const { width, height } = floatingRect;

  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  const side = placement.split("-")[0];

  // Check based on primary axis
  switch (side) {
    case "top":
      return y < viewportPadding;
    case "bottom":
      return y + height > viewportHeight - viewportPadding;
    case "left":
      return x < viewportPadding;
    case "right":
      return x + width > viewportWidth - viewportPadding;
    default:
      return false;
  }
}

/**
 * Calculate floating element position with automatic boundary flipping
 *
 * @param options - Configuration for position calculation
 * @returns Position and the actual placement used (may differ if flipped)
 */
export function calculateFloatingPosition(options: CalculatePositionOptions): CalculatePositionResult {
  const { triggerRect, floatingRect, placement, offset = 8 } = options;

  // Calculate initial position
  const initialPosition = calculateRawPosition(triggerRect, floatingRect, placement, offset);

  // Check if initial position overflows
  const overflows = checkOverflow(initialPosition, floatingRect, placement);

  if (!overflows) {
    return {
      position: initialPosition,
      actualPlacement: placement,
    };
  }

  // Try opposite placement
  const oppositePlacement = getOppositePlacement(placement);
  const oppositePosition = calculateRawPosition(triggerRect, floatingRect, oppositePlacement, offset);
  const oppositeOverflows = checkOverflow(oppositePosition, floatingRect, oppositePlacement);

  // If opposite doesn't overflow, use it; otherwise stick with original
  if (!oppositeOverflows) {
    return {
      position: oppositePosition,
      actualPlacement: oppositePlacement,
    };
  }

  // Both overflow, use original position
  return {
    position: initialPosition,
    actualPlacement: placement,
  };
}

/**
 * Get arrow direction based on placement
 * Arrow points toward the trigger element
 *
 * @param placement - Current placement of floating element
 * @returns Direction the arrow should point
 */
export function getArrowDirection(placement: Placement): ArrowDirection {
  const side = placement.split("-")[0] as "top" | "bottom" | "left" | "right";

  // Arrow points toward trigger, opposite of floating element position
  const directions: Record<string, ArrowDirection> = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
  };

  return directions[side];
}

/**
 * Get element rect relative to viewport
 *
 * @param element - DOM element
 * @returns Element rect with x, y, width, height
 */
export function getElementRect(element: Element): Rect {
  const rect = element.getBoundingClientRect();

  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
  };
}
