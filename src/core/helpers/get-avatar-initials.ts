/**
 * Extract initials from a name string for Avatar display.
 *
 * - Single word: first character
 * - Multiple words: depends on maxLength
 *   - maxLength=1: first character only
 *   - maxLength=2: first char of first word + first char of last word
 *   - maxLength>=3: first char of first N words (up to maxLength)
 * - Always uppercase
 *
 * @param name - The name to extract initials from
 * @param maxLength - Maximum number of characters to return (default: 2)
 *
 * @example
 * getAvatarInitials("John Doe")              // "JD"
 * getAvatarInitials("Alice")                 // "A"
 * getAvatarInitials("John Michael Doe")      // "JD"
 * getAvatarInitials("John Doe", 1)           // "J"
 * getAvatarInitials("John Michael Doe", 3)   // "JMD"
 */
export function getAvatarInitials(name: string, maxLength: number = 2): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || parts[0] === "") {
    return "";
  }

  if (maxLength <= 1) {
    return parts[0][0].toUpperCase();
  }

  if (maxLength === 2) {
    if (parts.length === 1) {
      return parts[0][0].toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  // maxLength >= 3: take first char of first N words
  return parts
    .slice(0, maxLength)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}
