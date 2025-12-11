import { describe, expect, it } from "vitest";

import { getDarker } from "./getDarker";
import { getLighter } from "./getLighter";
import { hexToHsl } from "./hexToHsl";
import { hexToRgba } from "./hexToRgba";
import { hslToHex } from "./hslToHex";
import { isLightColor } from "./isLightColor";

describe("hexToHsl", () => {
  it("converts red correctly", () => {
    const result = hexToHsl("#ff0000");
    expect(result).toEqual({ h: 0, s: 100, l: 50 });
  });

  it("converts green correctly", () => {
    const result = hexToHsl("#00ff00");
    expect(result).toEqual({ h: 120, s: 100, l: 50 });
  });

  it("converts blue correctly", () => {
    const result = hexToHsl("#0000ff");
    expect(result).toEqual({ h: 240, s: 100, l: 50 });
  });

  it("converts white correctly", () => {
    const result = hexToHsl("#ffffff");
    expect(result).toEqual({ h: 0, s: 0, l: 100 });
  });

  it("converts black correctly", () => {
    const result = hexToHsl("#000000");
    expect(result).toEqual({ h: 0, s: 0, l: 0 });
  });

  it("converts gray correctly (achromatic)", () => {
    const result = hexToHsl("#808080");
    expect(result).toEqual({ h: 0, s: 0, l: 50 });
  });

  it("handles hex without # prefix", () => {
    const result = hexToHsl("ff0000");
    expect(result).toEqual({ h: 0, s: 100, l: 50 });
  });

  it("returns null for invalid hex", () => {
    expect(hexToHsl("invalid")).toBeNull();
    expect(hexToHsl("#fff")).toBeNull();
    expect(hexToHsl("")).toBeNull();
  });

  it("converts cyan correctly (max is g)", () => {
    const result = hexToHsl("#00ffff");
    expect(result).toEqual({ h: 180, s: 100, l: 50 });
  });

  it("converts magenta correctly (max is b)", () => {
    const result = hexToHsl("#ff00ff");
    expect(result).toEqual({ h: 300, s: 100, l: 50 });
  });
});

describe("hslToHex", () => {
  it("converts red correctly", () => {
    expect(hslToHex(0, 100, 50)).toBe("#ff0000");
  });

  it("converts green correctly", () => {
    expect(hslToHex(120, 100, 50)).toBe("#00ff00");
  });

  it("converts blue correctly", () => {
    expect(hslToHex(240, 100, 50)).toBe("#0000ff");
  });

  it("converts white correctly", () => {
    expect(hslToHex(0, 0, 100)).toBe("#ffffff");
  });

  it("converts black correctly", () => {
    expect(hslToHex(0, 0, 0)).toBe("#000000");
  });

  it("converts cyan correctly (h: 180)", () => {
    expect(hslToHex(180, 100, 50)).toBe("#00ffff");
  });

  it("converts yellow correctly (h: 60)", () => {
    expect(hslToHex(60, 100, 50)).toBe("#ffff00");
  });

  it("converts magenta correctly (h: 300)", () => {
    expect(hslToHex(300, 100, 50)).toBe("#ff00ff");
  });

  it("converts color in 60-120 range", () => {
    expect(hslToHex(90, 100, 50)).toBe("#80ff00");
  });

  it("converts color in 120-180 range", () => {
    expect(hslToHex(150, 100, 50)).toBe("#00ff80");
  });

  it("converts color in 180-240 range", () => {
    expect(hslToHex(210, 100, 50)).toBe("#0080ff");
  });

  it("converts color in 240-300 range", () => {
    expect(hslToHex(270, 100, 50)).toBe("#8000ff");
  });
});

describe("hexToRgba", () => {
  it("converts hex to rgba with default alpha", () => {
    expect(hexToRgba("#ff0000")).toBe("rgba(255, 0, 0, 1)");
  });

  it("converts hex to rgba with custom alpha", () => {
    expect(hexToRgba("#00ff00", 0.5)).toBe("rgba(0, 255, 0, 0.5)");
  });

  it("handles hex without # prefix", () => {
    expect(hexToRgba("0000ff", 0.8)).toBe("rgba(0, 0, 255, 0.8)");
  });

  it("returns original string for invalid hex", () => {
    expect(hexToRgba("invalid")).toBe("invalid");
    expect(hexToRgba("#fff")).toBe("#fff");
  });
});

describe("isLightColor", () => {
  it("returns true for white", () => {
    expect(isLightColor("#ffffff")).toBe(true);
  });

  it("returns false for black", () => {
    expect(isLightColor("#000000")).toBe(false);
  });

  it("returns true for light gray", () => {
    expect(isLightColor("#cccccc")).toBe(true);
  });

  it("returns false for dark gray", () => {
    expect(isLightColor("#333333")).toBe(false);
  });

  it("returns false for typical blue (perceived as dark)", () => {
    expect(isLightColor("#3b82f6")).toBe(false);
  });

  it("returns true for yellow (perceived as light)", () => {
    expect(isLightColor("#ffff00")).toBe(true);
  });

  it("handles custom threshold", () => {
    // #808080 has relative luminance ~0.22 (not 0.5, due to gamma correction)
    expect(isLightColor("#808080", 0.2)).toBe(true);
    expect(isLightColor("#808080", 0.3)).toBe(false);
  });

  it("returns true for invalid hex (default behavior)", () => {
    expect(isLightColor("invalid")).toBe(true);
  });

  it("handles colors near threshold boundary", () => {
    expect(isLightColor("#ffffff", 0.99)).toBe(true);
    expect(isLightColor("#050505", 0.001)).toBe(true);
  });
});

describe("getDarker", () => {
  it("darkens a color by default amount (10)", () => {
    const result = getDarker("#3b82f6");
    expect(result).not.toBe("#3b82f6");
    // Should be darker (lower lightness)
    const originalHsl = hexToHsl("#3b82f6");
    const resultHsl = hexToHsl(result);
    expect(resultHsl!.l).toBeLessThan(originalHsl!.l);
  });

  it("darkens a color by custom amount", () => {
    const result = getDarker("#3b82f6", 20);
    const originalHsl = hexToHsl("#3b82f6");
    const resultHsl = hexToHsl(result);
    expect(resultHsl!.l).toBe(originalHsl!.l - 20);
  });

  it("caps lightness at 0", () => {
    const result = getDarker("#1a1a1a", 50);
    const resultHsl = hexToHsl(result);
    expect(resultHsl!.l).toBeGreaterThanOrEqual(0);
  });

  it("returns original for invalid hex", () => {
    expect(getDarker("invalid")).toBe("invalid");
  });
});

describe("getLighter", () => {
  it("lightens a color by default amount (10)", () => {
    const result = getLighter("#3b82f6");
    expect(result).not.toBe("#3b82f6");
    // Should be lighter (higher lightness)
    const originalHsl = hexToHsl("#3b82f6");
    const resultHsl = hexToHsl(result);
    expect(resultHsl!.l).toBeGreaterThan(originalHsl!.l);
  });

  it("lightens a color by custom amount", () => {
    const result = getLighter("#3b82f6", 20);
    const originalHsl = hexToHsl("#3b82f6");
    const resultHsl = hexToHsl(result);
    expect(resultHsl!.l).toBe(originalHsl!.l + 20);
  });

  it("caps lightness at 100", () => {
    const result = getLighter("#f0f0f0", 50);
    const resultHsl = hexToHsl(result);
    expect(resultHsl!.l).toBeLessThanOrEqual(100);
  });

  it("returns original for invalid hex", () => {
    expect(getLighter("invalid")).toBe("invalid");
  });
});
