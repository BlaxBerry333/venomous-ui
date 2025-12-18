import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, TYPOGRAPHY_TEXT_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import TypographyText from "./TypographyText";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("TypographyText", () => {
  // Basic rendering
  it("renders children correctly", () => {
    renderWithTheme(<TypographyText>Hello World</TypographyText>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("defaults to span element", () => {
    renderWithTheme(<TypographyText>Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("SPAN");
  });

  // Element variations
  it("renders as span element when as='span'", () => {
    renderWithTheme(<TypographyText as="span">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("SPAN");
  });

  it("renders as small element when as='small'", () => {
    renderWithTheme(<TypographyText as="small">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("SMALL");
  });

  it("renders as strong element when as='strong'", () => {
    renderWithTheme(<TypographyText as="strong">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("STRONG");
  });

  it("renders as em element when as='em'", () => {
    renderWithTheme(<TypographyText as="em">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("EM");
  });

  it("renders as mark element when as='mark'", () => {
    renderWithTheme(<TypographyText as="mark">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("MARK");
  });

  it("renders as del element when as='del'", () => {
    renderWithTheme(<TypographyText as="del">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("DEL");
  });

  it("renders as ins element when as='ins'", () => {
    renderWithTheme(<TypographyText as="ins">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("INS");
  });

  it("renders as sub element when as='sub'", () => {
    renderWithTheme(<TypographyText as="sub">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("SUB");
  });

  it("renders as sup element when as='sup'", () => {
    renderWithTheme(<TypographyText as="sup">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("SUP");
  });

  it("renders as code element when as='code'", () => {
    renderWithTheme(<TypographyText as="code">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("CODE");
  });

  it("renders as kbd element when as='kbd'", () => {
    renderWithTheme(<TypographyText as="kbd">Test</TypographyText>);
    expect(screen.getByText("Test").tagName).toBe("KBD");
  });

  // CSS classes
  it("applies base className", () => {
    renderWithTheme(<TypographyText>Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.base.className);
  });

  it("applies custom className", () => {
    renderWithTheme(<TypographyText className="custom-class">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass("custom-class");
  });

  // Element-specific CSS classes
  it("applies code className when as='code'", () => {
    renderWithTheme(<TypographyText as="code">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asCode.className);
  });

  it("applies kbd className when as='kbd'", () => {
    renderWithTheme(<TypographyText as="kbd">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asKbd.className);
  });

  it("applies mark className when as='mark'", () => {
    renderWithTheme(<TypographyText as="mark">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asMark.className);
  });

  it("applies del className when as='del'", () => {
    renderWithTheme(<TypographyText as="del">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asDel.className);
  });

  it("applies ins className when as='ins'", () => {
    renderWithTheme(<TypographyText as="ins">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asIns.className);
  });

  it("applies small className when as='small'", () => {
    renderWithTheme(<TypographyText as="small">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asSmall.className);
  });

  it("applies strong className when as='strong'", () => {
    renderWithTheme(<TypographyText as="strong">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asStrong.className);
  });

  it("applies em className when as='em'", () => {
    renderWithTheme(<TypographyText as="em">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asEm.className);
  });

  it("applies sub className when as='sub'", () => {
    renderWithTheme(<TypographyText as="sub">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asSub.className);
  });

  it("applies sup className when as='sup'", () => {
    renderWithTheme(<TypographyText as="sup">Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asSup.className);
  });

  it("does not apply element className for span (default)", () => {
    renderWithTheme(<TypographyText as="span">Test</TypographyText>);
    const element = screen.getByText("Test");
    expect(element).toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.base.className);
    expect(element).not.toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asCode.className);
    expect(element).not.toHaveClass(TYPOGRAPHY_TEXT_CSS_CLASS_NAMES.asStrong.className);
  });

  // Style callback
  it("supports style as object", () => {
    renderWithTheme(<TypographyText style={{ color: "red" }}>Test</TypographyText>);
    expect(screen.getByText("Test")).toHaveStyle({ color: "red" });
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <TypographyText style={(theme) => ({ color: theme.semanticColors.success.main })}>Test</TypographyText>,
    );
    const element = screen.getByText("Test");
    // Theme callback should apply some color
    expect(element.style.color).toBeTruthy();
  });

  // Ref forwarding
  it("forwards ref correctly for span", () => {
    const ref = vi.fn();
    renderWithTheme(<TypographyText ref={ref}>Test</TypographyText>);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLSpanElement);
  });

  it("forwards ref correctly for other elements", () => {
    const ref = vi.fn();
    renderWithTheme(
      <TypographyText as="strong" ref={ref}>
        Test
      </TypographyText>,
    );
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLElement);
  });

  // displayName
  it("has correct displayName", () => {
    expect(TypographyText.displayName).toBe(COMPONENT_NAMES.TypographyText);
  });

  // HTML attributes
  it("passes through HTML attributes", () => {
    renderWithTheme(
      <TypographyText data-testid="text" id="my-text">
        Test
      </TypographyText>,
    );
    const element = screen.getByTestId("text");
    expect(element).toHaveAttribute("id", "my-text");
  });
});
