import { TypographyParagraph } from "./Paragraph";
import { TypographyText } from "./Text";
import { TypographyTitle } from "./Title";

export type { TypographyParagraphElement, TypographyParagraphProps } from "./Paragraph";
export type { TypographyTextHTMLElement, TypographyTextProps } from "./Text";
export type { TypographyTitleElement, TypographyTitleProps } from "./Title";

export const Typography = {
  Paragraph: TypographyParagraph,
  Title: TypographyTitle,
  Text: TypographyText,
} as const;
