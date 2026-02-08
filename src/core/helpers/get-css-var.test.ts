import { describe, expect, it, vi } from "vitest";
import { getCssVar } from "./get-css-var";

describe("getCssVar", () => {
  it("returns fallback when CSS variable is not set", () => {
    expect(getCssVar("--nonexistent-var", 42)).toBe(42);
  });

  it("returns 0 as default fallback", () => {
    expect(getCssVar("--nonexistent-var")).toBe(0);
  });

  it("auto-prepends -- when not present", () => {
    const spy = vi.spyOn(window, "getComputedStyle").mockReturnValue({
      getPropertyValue: (name: string) => {
        if (name === "--my-var") return "16";
        return "";
      },
    } as CSSStyleDeclaration);

    expect(getCssVar("my-var", 0)).toBe(16);
    spy.mockRestore();
  });

  it("uses name as-is when it already starts with --", () => {
    const spy = vi.spyOn(window, "getComputedStyle").mockReturnValue({
      getPropertyValue: (name: string) => {
        if (name === "--spacing-sm") return "8";
        return "";
      },
    } as CSSStyleDeclaration);

    expect(getCssVar("--spacing-sm", 0)).toBe(8);
    spy.mockRestore();
  });

  it("returns parsed integer value from CSS variable", () => {
    const spy = vi.spyOn(window, "getComputedStyle").mockReturnValue({
      getPropertyValue: () => " 24 ",
    } as unknown as CSSStyleDeclaration);

    expect(getCssVar("--test", 0)).toBe(24);
    spy.mockRestore();
  });

  it("returns fallback when value is not a valid number", () => {
    const spy = vi.spyOn(window, "getComputedStyle").mockReturnValue({
      getPropertyValue: () => "abc",
    } as unknown as CSSStyleDeclaration);

    expect(getCssVar("--test", 10)).toBe(10);
    spy.mockRestore();
  });

  it("returns 0 when CSS variable value is '0' (not fallback)", () => {
    const spy = vi.spyOn(window, "getComputedStyle").mockReturnValue({
      getPropertyValue: () => "0",
    } as unknown as CSSStyleDeclaration);

    expect(getCssVar("--test", 42)).toBe(0);
    spy.mockRestore();
  });
});
