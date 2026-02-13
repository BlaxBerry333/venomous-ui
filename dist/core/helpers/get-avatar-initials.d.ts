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
export declare function getAvatarInitials(name: string, maxLength?: number): string;
//# sourceMappingURL=get-avatar-initials.d.ts.map