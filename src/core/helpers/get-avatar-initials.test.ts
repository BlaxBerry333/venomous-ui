import { describe, expect, it } from "vitest";
import { getAvatarInitials } from "./get-avatar-initials";

describe("getAvatarInitials", () => {
  it("returns empty string for empty input", () => {
    expect(getAvatarInitials("")).toBe("");
  });

  it("returns empty string for whitespace-only input", () => {
    expect(getAvatarInitials("   ")).toBe("");
  });

  it("returns first character for single word with default maxLength", () => {
    expect(getAvatarInitials("Alice")).toBe("A");
  });

  it("returns first and last initials for two words", () => {
    expect(getAvatarInitials("John Doe")).toBe("JD");
  });

  it("returns first and last initials for multiple words with maxLength=2", () => {
    expect(getAvatarInitials("John Michael Doe")).toBe("JD");
  });

  it("returns only first character when maxLength is 1", () => {
    expect(getAvatarInitials("John Doe", 1)).toBe("J");
  });

  it("returns only first character when maxLength is 0", () => {
    expect(getAvatarInitials("John Doe", 0)).toBe("J");
  });

  it("returns single char for single word with maxLength=2", () => {
    expect(getAvatarInitials("Alice", 2)).toBe("A");
  });

  it("returns first N initials when maxLength >= 3", () => {
    expect(getAvatarInitials("John Michael Doe", 3)).toBe("JMD");
  });

  it("returns all initials when maxLength exceeds word count", () => {
    expect(getAvatarInitials("John Doe", 5)).toBe("JD");
  });

  it("returns uppercase initials", () => {
    expect(getAvatarInitials("john doe")).toBe("JD");
  });

  it("handles extra spaces between words", () => {
    expect(getAvatarInitials("  John   Doe  ")).toBe("JD");
  });
});
