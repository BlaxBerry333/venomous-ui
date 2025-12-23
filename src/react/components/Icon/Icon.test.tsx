import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, ICON_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Icon from "./Icon";
import type { IconElement } from "./Icon.types";

// Mock @iconify/react to return a proper SVG element
vi.mock("@iconify/react", () => ({
  Icon: React.forwardRef(
    (
      props: React.SVGAttributes<SVGSVGElement> & { icon?: string; width?: number | string; height?: number | string },
      ref: React.Ref<SVGSVGElement>,
    ) => {
      const { icon, width, height, ...rest } = props;
      return <svg ref={ref} data-icon={icon} width={width} height={height} {...rest} />;
    },
  ),
}));

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

function RefTestWrapper({ onRef }: { onRef: (el: IconElement | null) => void }) {
  const ref = useRef<IconElement>(null);
  React.useEffect(() => {
    onRef(ref.current);
  }, [onRef]);
  return (
    <ThemeProvider>
      <Icon ref={ref} name="mdi:home" data-testid="icon" />
    </ThemeProvider>
  );
}

describe("Icon", () => {
  it("renders with name prop", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-icon", "mdi:home");
  });

  it("applies base className", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.base.className);
  });

  it("applies default width and height", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("width", "20");
    expect(icon).toHaveAttribute("height", "20");
  });

  it("applies custom width", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" width={32} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("width", "32");
    expect(icon).toHaveAttribute("height", "32");
  });

  it("applies color className - inherit", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="inherit" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.colorInherit.className);
  });

  it("applies color className - primary", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="primary" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.colorPrimary.className);
  });

  it("applies color className - success", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="success" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.colorSuccess.className);
  });

  it("applies color className - error", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="error" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.colorError.className);
  });

  it("applies color className - warning", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="warning" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.colorWarning.className);
  });

  it("applies color className - info", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="info" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.colorInfo.className);
  });

  it("applies custom color as inline style", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="#e91e63" />);
    const icon = screen.getByTestId("icon");
    // Color value may be hex or rgb depending on environment
    expect(icon.style.color).toMatch(/#e91e63|rgb\(233, 30, 99\)/i);
    // Should not have any preset color class
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorInherit.className);
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorPrimary.className);
  });

  it("applies custom color name as inline style", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="gold" />);
    const icon = screen.getByTestId("icon");
    expect(icon.style.color).toBe("gold");
  });

  it("has correct displayName", () => {
    expect(Icon.displayName).toBe(COMPONENT_NAMES.Icon);
  });

  it("forwards ref to svg element", () => {
    let refElement: IconElement | null = null;
    render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
    expect(refElement).toBeInstanceOf(SVGSVGElement);
    expect(refElement).toHaveClass(ICON_CSS_CLASS_NAMES.base.className);
  });

  it("applies custom className", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" className="custom-class" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass("custom-class");
    expect(icon).toHaveClass(ICON_CSS_CLASS_NAMES.base.className);
  });

  it("spreads additional props to icon element", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" aria-label="Home icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("aria-label", "Home icon");
  });

  it("supports style as plain object", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" style={{ opacity: 0.5 }} />);
    const icon = screen.getByTestId("icon");
    expect(icon.style.opacity).toBe("0.5");
  });

  it("supports style as theme callback function", () => {
    renderWithTheme(
      <Icon name="mdi:home" data-testid="icon" style={(theme) => ({ color: theme.semanticColors.success.main })} />,
    );
    const icon = screen.getByTestId("icon");
    expect(icon.style.color).toBeTruthy();
  });

  it("combines custom color with style callback", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" color="forestgreen" style={{ opacity: 0.7 }} />);
    const icon = screen.getByTestId("icon");
    expect(icon.style.color).toBe("forestgreen");
    expect(icon.style.opacity).toBe("0.7");
  });

  it("renders without color prop (no color class applied)", () => {
    renderWithTheme(<Icon name="mdi:home" data-testid="icon" />);
    const icon = screen.getByTestId("icon");
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorInherit.className);
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorPrimary.className);
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorSuccess.className);
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorError.className);
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorWarning.className);
    expect(icon).not.toHaveClass(ICON_CSS_CLASS_NAMES.colorInfo.className);
  });
});
